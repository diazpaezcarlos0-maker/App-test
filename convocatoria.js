// ============================================
// CONVOCATORIAS — Multi-convocatoria
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
    
    // Mantener la sección de "Próximamente" y "Sugerir"
    const htmlConvocatorias = convocatorias.map(c => `
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
    `).join('');
    
    cont.innerHTML = `
        ${htmlConvocatorias}

        <div class="conv-seccion-titulo">
            <h3>Próximamente</h3>
        </div>

        <button class="convocatoria-card proximamente" disabled>
            <div class="conv-icono">🇪🇸</div>
            <div class="conv-info">
                <h3>Administrativo General del Estado</h3>
                <p>En desarrollo</p>
            </div>
            <div class="conv-meta">
                <span class="conv-badge gris">Próximamente</span>
            </div>
        </button>

        <button class="convocatoria-card proximamente" disabled>
            <div class="conv-icono">🏙️</div>
            <div class="conv-info">
                <h3>Administrativo Comunidad de Madrid</h3>
                <p>En desarrollo</p>
            </div>
            <div class="conv-meta">
                <span class="conv-badge gris">Próximamente</span>
            </div>
        </button>

        <div class="sugerir-bloque">
            <div class="sugerir-icon">💡</div>
            <h3>¿No ves tu oposición?</h3>
            <p>Cuéntanos cuál te gustaría y la añadiremos a la lista de prioridades.</p>
            <button class="btn-sugerir" onclick="abrirSugerencia()">
                Sugerir una oposición
            </button>
        </div>
    `;
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
                .is('supuesto_id', null);  // solo preguntas teóricas
            
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
    
    // Guardar globalmente
    window.convocatoriaActualId = conv.id;
    window.convocatoriaActualData = conv;
    
    // Persistir en localStorage
    localStorage.setItem(CONVOCATORIA_KEY_ID, String(conv.id));
    // Limpiar la versión vieja
    localStorage.removeItem(CONVOCATORIA_KEY_LEGACY);
    
    // Actualizar título del dashboard si existe
    actualizarTituloDashboard();
    
    // Invalidar caché de preguntas para que se recarguen con la nueva convocatoria
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('preguntas_cache_v1');
        localStorage.removeItem('preguntas_cache_v2');
    }
    
    // Recargar las preguntas de la convocatoria nueva
    if (typeof cargarPreguntasDesdeSupabase === 'function') {
        await cargarPreguntasDesdeSupabase();
    }
    
    // Ir al dashboard
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

// Restaurar la convocatoria seleccionada al iniciar la app
async function restaurarConvocatoriaActual() {
    const convocatorias = await cargarConvocatorias();
    if (convocatorias.length === 0) return false;
    
    // Intentar recuperar de localStorage
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
    
    // Migración: si tenía la versión vieja (string), por defecto le ponemos la primera (Administrativo)
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
    
    return false; // ninguna seleccionada
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
