// ============================================
// DATA LOADER — Carga preguntas desde Supabase
// ============================================

let temas = [];

const ICONOS_TEMAS = {
    'Tema 1': '⚠️', 'Tema 2': '⚖️', 'Tema 3': '🏛️', 'Tema 4': '🏢',
    'Tema 5': '📍', 'Tema 6': '📜', 'Tema 7': '📜', 'Tema 8': '📜',
    'Tema 9': '📜', 'Tema 10': '📚', 'Tema 11': '👥', 'Tema 12': '🏥',
    'Tema 13': '💰', 'Tema 14': '💰', 'Tema 15': '💵', 'Tema 16': '📊',
    'Tema 17': '📊', 'Tema 18': '🏗️', 'Tema 19': '🏗️', 'Tema 20': '🏗️',
    'Tema 21': '📋', 'Tema 22': '📋'
};

const CACHE_KEY = 'preguntas_cache_v1';
const CACHE_TIMESTAMP_KEY = 'preguntas_cache_timestamp';
const CACHE_DURACION_MS = 24 * 60 * 60 * 1000;

async function cargarPreguntasDesdeSupabase() {
    const cacheRaw = localStorage.getItem(CACHE_KEY);
    const cacheTime = localStorage.getItem(CACHE_TIMESTAMP_KEY);

    if (cacheRaw && cacheTime) {
        const edad = Date.now() - parseInt(cacheTime);
        if (edad < CACHE_DURACION_MS) {
            try {
                const datos = JSON.parse(cacheRaw);
                if (Array.isArray(datos) && datos.length >= 20) {
                    temas = datos;
                    console.log('✅ Preguntas cargadas desde caché (' + temas.length + ' temas)');
                    refrescarPreguntasEnBackground();
                    return temas;
                }
            } catch (e) {
                console.warn('Cache corrupta, descargando de Supabase');
            }
        }
    }

    return await descargarYGuardarEnCache();
}

async function descargarYGuardarEnCache() {
    console.log('⬇️ Descargando preguntas de Supabase...');
    
    const TAMANO_PAGINA = 1000;
    let todasLasPreguntas = [];
    let desde = 0;
    
    while (true) {
        const { data, error } = await sb
            .from('questions')
            .select('id, tema, pregunta, opciones, respuesta_correcta, explicacion, Tipo')
            .order('id')
            .range(desde, desde + TAMANO_PAGINA - 1);
        
        if (error) {
            console.error('Error descargando preguntas:', error);
            const cacheRaw = localStorage.getItem(CACHE_KEY);
            if (cacheRaw) {
                temas = JSON.parse(cacheRaw);
                return temas;
            }
            throw error;
        }
        
        todasLasPreguntas = todasLasPreguntas.concat(data);
        
        if (data.length < TAMANO_PAGINA) break;
        desde += TAMANO_PAGINA;
    }
    
    const temasMap = {};
    todasLasPreguntas.forEach(q => {
        if (!temasMap[q.tema]) {
            const match = q.tema.match(/Tema\s+(\d+)/i);
            const numTema = match ? parseInt(match[1]) : Object.keys(temasMap).length + 1;
            const claveIcono = match ? 'Tema ' + match[1] : null;
            
            temasMap[q.tema] = {
                id: numTema,
                nombre: q.tema,
                icono: ICONOS_TEMAS[claveIcono] || '📚',
                preguntas: []
            };
        }
        
        temasMap[q.tema].preguntas.push({
            dbId: q.id,
            texto: q.pregunta,
            opciones: q.opciones,
            correcta: q.respuesta_correcta,
            explicacion: q.explicacion
            Tipo: q.Tipo || 'Test'
        });
    });
    
    temas = Object.values(temasMap).sort((a, b) => a.id - b.id);
    
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(temas));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
    } catch (e) {
        console.warn('No se pudo guardar la caché (posiblemente llena):', e);
    }
    
    console.log('✅ ' + todasLasPreguntas.length + ' preguntas cargadas en ' + temas.length + ' temas');
    return temas;
}

async function refrescarPreguntasEnBackground() {
    try {
        await descargarYGuardarEnCache();
    } catch (e) {
        // Silencioso
    }
}

function limpiarCachePreguntas() {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_TIMESTAMP_KEY);
    console.log('Caché de preguntas limpiada');
}
