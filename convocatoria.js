// ============================================
// CONVOCATORIAS — Multi-convocatoria
// Agrupado por organismo: Ayuntamiento de Madrid / Comunidad de Madrid
// ============================================

// Variable GLOBAL accesible desde otros archivos
window.convocatoriaActualId = null;
window.convocatoriaActualData = null;

const CONVOCATORIA_KEY_LEGACY = 'convocatoria_seleccionada';    // versión vieja (slug)
const CONVOCATORIA_KEY_ID = 'convocatoria_id';                    // versión nueva (ID numérico)

// Cache local de convocatorias para no consultar siempre
let _convocatoriasCache = null;

async function cargarConvocatorias() {
    if (_convocatoriasCache) return _convocatoriasCache;
    
    const { data, error } = await sb
        .from('convocatorias')
        .select('*')
        .eq('activo', true)
        .order('orden', { ascending: true });
    
    if (error) {
        console.error('Error cargando convocatorias:', error);
        return [];
    }
    
    _convocatoriasCache = data || [];
    return _convocatoriasCache;
}

async function mostrarPantallaConvocatoria() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('pantallaConvocatoria').classList.add('active');
    
    // Renderizar las tarjetas dinámicamente desde la BD
    await renderizarConvocatorias();
    actualizarContadorPreguntas();
}

async function renderizarConvocatorias() {
    const cont = document.querySelector('#pantallaConvocatoria .convocatorias-container');
    if (!cont) return;
    
    const convocatorias = await cargarConvocatorias();
    
    if (convocatorias.length === 0) {
        cont.innerHTML = '<div class="mensaje-vacio"><p>No hay convocatorias disponibles.</p></div>';
        return;
    }
    
    // Agrupar por organismo
    const ayuntamiento = convocatorias.filter(c => c.organismo === 'ayuntamiento');
    const comunidad = convocatorias.filter(c => c.organismo === 'comunidad');
    const sinOrganismo = convocatorias.filter(c => !c.organismo);
    
    function renderTarjeta(c) {
        return `
            <button class="convocatoria-card activa" onclick="seleccionarConvocatoria(${c.id})">
                <div class="conv-icono">${escaparHtmlConv(c.icono || '🏛️')}</div>
                <div class="conv-info">
                    <h3>${escaparHtmlConv(c.nombre)}</h3>
                    <p>${escaparHtmlConv(c.descripcion || '')} · <span class="conv-conteo" data-conv-id="${c.id}">…</span> preguntas</p>
                </div>
                <div class="conv-meta">
                    <span class="conv-badge">Disponible</span>
                </div>
                <span class="conv-flecha">→</span>
            </button>
        `;
    }
    
    let html = '';
    
    // Sección Ayuntamiento de Madrid (rojo)
    if (ayuntamiento.length > 0) {
        html += `
            <div class="organismo-header organismo-ayuntamiento">
                <span class="organismo-icono">🏛️</span>
                <span class="organismo-nombre">Ayuntamiento de Madrid</span>
            </div>
            ${ayuntamiento.map(renderTarjeta).join('')}
        `;
    }
    
    // Sección Comunidad de Madrid (azul)
    if (comunidad.length > 0) {
        html += `
            <div class="organismo-header organismo-comunidad">
                <span class="organismo-icono">🏢</span>
                <span class="organismo-nombre">Comunidad de Madrid</span>
            </div>
            ${comunidad.map(renderTarjeta).join('')}
        `;
    }
    
    // Sección "Otros" (sin organismo asignado, por si acaso)
    if (sinOrganismo.length > 0) {
        html += `
            <div class="organismo-header organismo-otros">
                <span class="organismo-icono">📚</span>
                <span class="organismo-nombre">Otras convocatorias</span>
            </div>
            ${sinOrganismo.map(renderTarjeta).join('')}
        `;
    }
    
    // Bloque Sugerir (siempre al final)
    html += `
        <div class="sugerir-bloque">
            <div class="sugerir-icon">💡</div>
            <h3>¿No ves tu oposición?</h3>
            <p>Cuéntanos cuál te gustaría y la añadiremos a la lista de prioridades.</p>
            <button class="btn-sugerir" onclick="abrirSugerencia()">
                Sugerir una oposición
            </button>
        </div>
    `;
    
    cont.innerHTML = html;
}

async function actualizarContadorPreguntas() {
    const spans = document.querySelectorAll('.conv-conteo');
    if (!spans.length) return;
    
    for (const span of spans) {
        const convId = parseInt(span.dataset.convId);
        try {
            const { count, error } = await sb
                .from('questions')
                .select('*', { count: 'exact', head: true })
                .eq('convocatoria_id', convId)
                .is('supuesto_id', null);
            
            if (!error) {
                span.textContent = (count || 0).toLocaleString('es-ES');
            } else {
                span.textContent = '—';
            }
        } catch (e) {
            span.textContent = '—';
        }
    }
}

async function seleccionarConvocatoria(idConv) {
    const convocatorias = await cargarConvocatorias();
    const conv = convocatorias.find(c => c.id === parseInt(idConv));
    if (!conv) {
        alert('Convocatoria no encontrada.');
        return;
    }
    
    window.convocatoriaActualId = conv.id;
    window.convocatoriaActualData = conv;
    
    localStorage.setItem(CONVOCATORIA_KEY_ID, String(conv.id));
    localStorage.removeItem(CONVOCATORIA_KEY_LEGACY);
    
    actualizarTituloDashboard();
    
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('preguntas_cache_v1');
        localStorage.removeItem('preguntas_cache_v2');
    }
    
    if (typeof cargarPreguntasDesdeSupabase === 'function') {
        await cargarPreguntasDesdeSupabase();
    }
    
    if (typeof cargarTodoElProgresoDesdeSupabase === 'function') {
        await cargarTodoElProgresoDesdeSupabase();
    } else if (typeof cargarProgresoUsuario === 'function') {
        await cargarProgresoUsuario();
    }
    
    if (typeof cargarPreguntasVistas === 'function' && window.estadoApp) {
        window.estadoApp.preguntasVistas = cargarPreguntasVistas();
    } else if (typeof estadoApp !== 'undefined' && typeof cargarPreguntasVistas === 'function') {
        estadoApp.preguntasVistas = cargarPreguntasVistas();
    }
    
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('dashboard').classList.add('active');
    
    if (typeof actualizarEstadisticasDashboard === 'function') {
        actualizarEstadisticasDashboard();
    }
    if (typeof actualizarBadgeSimulacroSemanal === 'function') {
        actualizarBadgeSimulacroSemanal();
    }
}

function actualizarTituloDashboard() {
    if (!window.convocatoriaActualData) return;
    
    const conv = window.convocatoriaActualData;
    const titulo = document.querySelector('.dashboard-header h1');
    const subtitulo = document.querySelector('.dashboard-header .subtitle');
    
    if (titulo) titulo.textContent = `📚 ${conv.nombre}`;
    if (subtitulo) subtitulo.textContent = conv.descripcion || '';
}

async function restaurarConvocatoriaActual() {
    const convocatorias = await cargarConvocatorias();
    if (convocatorias.length === 0) return false;
    
    const guardado = localStorage.getItem(CONVOCATORIA_KEY_ID);
    if (guardado) {
        const id = parseInt(guardado);
        const conv = convocatorias.find(c => c.id === id);
        if (conv) {
            window.convocatoriaActualId = conv.id;
            window.convocatoriaActualData = conv;
            actualizarTituloDashboard();
            return true;
        }
    }
    
    const legacy = localStorage.getItem(CONVOCATORIA_KEY_LEGACY);
    if (legacy) {
        const primera = convocatorias[0];
        window.convocatoriaActualId = primera.id;
        window.convocatoriaActualData = primera;
        localStorage.setItem(CONVOCATORIA_KEY_ID, String(primera.id));
        localStorage.removeItem(CONVOCATORIA_KEY_LEGACY);
        actualizarTituloDashboard();
        return true;
    }
    
    return false;
}

// ============================================
// MODAL DE SUGERENCIAS
// ============================================

function abrirSugerencia() {
    let modal = document.getElementById('modalSugerencia');
    if (!modal) {
        modal = crearModalSugerencia();
        document.body.appendChild(modal);
    }
    modal.classList.add('active');
    setTimeout(() => {
        const ta = document.getElementById('textoSugerencia');
        if (ta) ta.focus();
    }, 100);
}

function cerrarSugerencia() {
    const modal = document.getElementById('modalSugerencia');
    if (modal) modal.classList.remove('active');
    const ta = document.getElementById('textoSugerencia');
    if (ta) ta.value = '';
    const counter = document.getElementById('sugerenciaCounter');
    if (counter) counter.textContent = '0';
}

function crearModalSugerencia() {
    const div = document.createElement('div');
    div.id = 'modalSugerencia';
    div.className = 'muro-pago';
    div.innerHTML = `
        <div class="muro-overlay" onclick="cerrarSugerencia()"></div>
        <div class="muro-card sugerencia-card">
            <div class="muro-icono">💡</div>
            <h2>Sugerir oposición</h2>
            <p style="margin-bottom:20px;">Dinos qué oposición te gustaría que añadiéramos.</p>
            
            <textarea 
                id="textoSugerencia" 
                placeholder="Ej: Auxiliar Administrativo Comunidad de Madrid, Cuerpo de Gestión del Estado, etc."
                maxlength="300"
            ></textarea>
            <div class="sugerencia-counter">
                <span id="sugerenciaCounter">0</span> / 300
            </div>
            
            <button class="btn-suscribirse" onclick="enviarSugerencia()">
                Enviar sugerencia
            </button>
            <button class="btn-secundario" onclick="cerrarSugerencia()">
                Cancelar
            </button>
        </div>
    `;
    
    setTimeout(() => {
        const ta = div.querySelector('#textoSugerencia');
        const counter = div.querySelector('#sugerenciaCounter');
        if (ta && counter) {
            ta.addEventListener('input', () => {
                counter.textContent = ta.value.length;
            });
        }
    }, 0);
    
    return div;
}

async function enviarSugerencia() {
    const ta = document.getElementById('textoSugerencia');
    const texto = (ta?.value || '').trim();
    
    if (texto.length < 5) {
        alert('Escribe al menos 5 caracteres describiendo la oposición.');
        return;
    }
    
    if (!currentUser) {
        alert('Debes iniciar sesión para enviar sugerencias.');
        return;
    }
    
    const btnEnviar = document.querySelector('#modalSugerencia .btn-suscribirse');
    if (btnEnviar) {
        btnEnviar.disabled = true;
        btnEnviar.textContent = 'Enviando...';
    }
    
    const insertObj = {
        user_id: currentUser.id,
        sugerencia: texto
    };
    if (window.convocatoriaActualId) {
        insertObj.convocatoria_id = window.convocatoriaActualId;
    }
    
    const { error } = await sb.from('sugerencias').insert(insertObj);
    
    if (error) {
        console.error('Error guardando sugerencia:', error);
        alert('No se pudo enviar la sugerencia. Inténtalo de nuevo.');
        if (btnEnviar) {
            btnEnviar.disabled = false;
            btnEnviar.textContent = 'Enviar sugerencia';
        }
        return;
    }
    
    cerrarSugerencia();
    alert('¡Gracias! Hemos recibido tu sugerencia. La tendremos en cuenta para futuras incorporaciones.');
    
    if (btnEnviar) {
        btnEnviar.disabled = false;
        btnEnviar.textContent = 'Enviar sugerencia';
    }
}

function escaparHtmlConv(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({
        '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
}
