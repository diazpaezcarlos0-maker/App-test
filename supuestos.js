// ============================================
// SUPUESTOS PRÁCTICOS
// ============================================

const SUPUESTOS_PENALIZACION = 1 / 5; // mismo que simulacro

// Cache de supuestos por tema
const supuestosCache = new Map(); // tema → array de supuestos
let supuestoActual = null; // el supuesto que se está haciendo

// ============================================
// MOSTRAR PANTALLA INTERMEDIA: Tests vs Supuestos
// ============================================

function mostrarModoEstudio() {
    mostrarPantalla('seleccionTipoEstudio');
    actualizarCandadoSupuestos();
}

function actualizarCandadoSupuestos() {
    const card = document.getElementById('cardSupuestos');
    if (!card) return;
    
    const esPremium = userProfile?.subscription_status === 'premium';
    
    const candado = card.querySelector('.candado-premium');
    const subtitulo = card.querySelector('.subtitulo-tipo');
    
    if (esPremium) {
        card.classList.remove('bloqueado');
        if (candado) candado.style.display = 'none';
        if (subtitulo) subtitulo.textContent = 'Practica con casos reales del examen';
    } else {
        card.classList.add('bloqueado');
        if (candado) candado.style.display = 'inline-flex';
        if (subtitulo) subtitulo.textContent = 'Exclusivo Premium';
    }
}

function elegirTipoEstudio(tipo) {
    if (tipo === 'tests') {
        mostrarPantalla('modoEstudio');
        cargarTemasSeleccionables();
        return;
    }
    
    if (tipo === 'supuestos') {
        const esPremium = userProfile?.subscription_status === 'premium';
        
        if (!esPremium) {
            mostrarMuroPago('Los supuestos prácticos son exclusivos de Premium. Apoya el proyecto para acceder.');
            return;
        }
        
        mostrarListaSupuestos();
        return;
    }
}

// ============================================
// LISTA DE SUPUESTOS
// ============================================

async function mostrarListaSupuestos() {
    mostrarPantalla('pantallaListaSupuestos');
    const cont = document.getElementById('listaSupuestos');
    if (!cont) return;
    
    cont.innerHTML = '<div class="comentarios-loading">Cargando supuestos...</div>';
    
    const { data, error } = await sb
        .from('supuestos')
        .select('*')
        .eq('activo', true)
        .order('tema', { ascending: true })
        .order('orden', { ascending: true });
    
    if (error) {
        console.error('Error cargando supuestos:', error);
        cont.innerHTML = '<div class="mensaje-vacio"><p>Error cargando los supuestos.</p></div>';
        return;
    }
    
    if (!data || data.length === 0) {
        cont.innerHTML = `
            <div class="mensaje-vacio">
                <p>Aún no hay supuestos prácticos disponibles.</p>
                <small>Pronto añadiremos exámenes reales del Ayto. Madrid.</small>
            </div>
        `;
        return;
    }
    
    // Agrupar por tema
    const porTema = {};
    data.forEach(s => {
        if (!porTema[s.tema]) porTema[s.tema] = [];
        porTema[s.tema].push(s);
    });
    
    const htmlTemas = Object.keys(porTema).sort().map(tema => {
        const sups = porTema[tema];
        return `
            <div class="grupo-supuestos">
                <h3 class="grupo-tema">${escaparHtmlSup(tema)}</h3>
                <div class="lista-supuestos-tema">
                    ${sups.map(s => renderizarCardSupuesto(s)).join('')}
                </div>
            </div>
        `;
    }).join('');
    
    cont.innerHTML = htmlTemas;
}

function renderizarCardSupuesto(s) {
    return `
        <button class="card-supuesto" onclick="iniciarSupuesto(${s.id})">
            <div class="card-supuesto-icono">📋</div>
            <div class="card-supuesto-info">
                <div class="card-supuesto-titulo">${escaparHtmlSup(s.titulo)}</div>
                ${s.descripcion ? `<div class="card-supuesto-desc">${escaparHtmlSup(s.descripcion)}</div>` : ''}
            </div>
            <div class="card-supuesto-flecha">→</div>
        </button>
    `;
}

// ============================================
// INICIAR SUPUESTO
// ============================================

async function iniciarSupuesto(supuestoId) {
    // Cargar el supuesto
    const { data: supuesto, error: e1 } = await sb
        .from('supuestos')
        .select('*')
        .eq('id', supuestoId)
        .single();
    
    if (e1 || !supuesto) {
        alert('No se pudo cargar el supuesto.');
        return;
    }
    
    // Cargar sus preguntas (ordenadas)
    const { data: preguntasDb, error: e2 } = await sb
        .from('questions')
        .select('*')
        .eq('supuesto_id', supuestoId)
        .order('orden_en_supuesto', { ascending: true });
    
    if (e2 || !preguntasDb || preguntasDb.length === 0) {
        alert('Este supuesto aún no tiene preguntas asociadas.');
        return;
    }
    
    // Convertir al formato de pregunta que usa la app
    const preguntas = preguntasDb.map((p, idx) => ({
        dbId: p.id,
        idPregunta: `supuesto-${supuestoId}-${idx}`,
        temaId: p.tema,
        temaNombre: p.tema,
        texto: p.pregunta,
        opciones: typeof p.opciones === 'string' ? JSON.parse(p.opciones) : p.opciones,
        correcta: p.respuesta_correcta,
        explicacion: p.explicacion || ''
    }));
    
    supuestoActual = supuesto;
    
    estadoApp.modo = 'supuesto';
    estadoApp.temasActivos = [supuesto.tema];
    estadoApp.indicePregunta = 0;
    estadoApp.respuestas = [];
    estadoApp.preguntasActuales = preguntas;
    estadoApp.tiempoInicio = Date.now();
    
    iniciarTest();
    
    // Mostrar el contexto encima
    setTimeout(() => mostrarContextoSupuesto(supuesto), 50);
}

function mostrarContextoSupuesto(supuesto) {
    // Insertar un bloque con el contexto antes de la pregunta
    let bloque = document.getElementById('bloqueContextoSupuesto');
    if (!bloque) {
        bloque = document.createElement('div');
        bloque.id = 'bloqueContextoSupuesto';
        bloque.className = 'contexto-supuesto';
        const pantallaTest = document.getElementById('pantallaTest');
        const pregunta = document.querySelector('.pregunta-container');
        if (pregunta) {
            pantallaTest.insertBefore(bloque, pregunta);
        } else {
            pantallaTest.appendChild(bloque);
        }
    }
    
    bloque.innerHTML = `
        <details open class="contexto-detalles">
            <summary class="contexto-titulo">
                📋 <strong>${escaparHtmlSup(supuesto.titulo)}</strong>
                <span class="contexto-toggle-hint">click para mostrar/ocultar</span>
            </summary>
            <div class="contexto-cuerpo">${escaparHtmlSup(supuesto.contexto).replace(/\n/g, '<br>')}</div>
        </details>
    `;
}

function ocultarContextoSupuesto() {
    const bloque = document.getElementById('bloqueContextoSupuesto');
    if (bloque) bloque.remove();
    supuestoActual = null;
}

function escaparHtmlSup(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({
        '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
}
