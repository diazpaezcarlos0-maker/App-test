// ============================================
// CONVOCATORIA — Pantalla de selección + sugerencias
// ============================================

const CONVOCATORIA_KEY = 'convocatoria_seleccionada';

async function mostrarPantallaConvocatoria() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('pantallaConvocatoria').classList.add('active');
    
    // Actualizar el contador de preguntas desde la BD
    actualizarContadorPreguntas();
}

async function actualizarContadorPreguntas() {
    const span = document.getElementById('convAytoCount');
    if (!span) return;
    
    try {
        // Usar la variable global temas que ya está cargada
        if (typeof temas !== 'undefined' && Array.isArray(temas) && temas.length > 0) {
            const total = temas.reduce((sum, t) => sum + (t.preguntas?.length || 0), 0);
            span.textContent = total.toLocaleString('es-ES');
            return;
        }
        
        // Fallback: contar directamente de Supabase
        const { count, error } = await sb
            .from('questions')
            .select('*', { count: 'exact', head: true });
        
        if (error) {
            console.error('Error contando preguntas:', error);
            span.textContent = '—';
            return;
        }
        
        span.textContent = (count || 0).toLocaleString('es-ES');
    } catch (e) {
        console.warn('No se pudo contar preguntas:', e);
        if (span) span.textContent = '—';
    }
}

function seleccionarConvocatoria(idConv) {
    localStorage.setItem(CONVOCATORIA_KEY, idConv);
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('dashboard').classList.add('active');
}

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
    
    const { error } = await sb.from('sugerencias').insert({
        user_id: currentUser.id,
        sugerencia: texto
    });
    
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
