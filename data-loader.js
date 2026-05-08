// ============================================
// DATA LOADER — Carga preguntas desde Supabase
// ============================================
// Reemplaza el array global `temas` que antes venía de data.js.
// Mantiene la MISMA estructura: temas → preguntas, para que app.js
// no tenga que cambiar casi nada.
//
// Estructura esperada por app.js:
// temas = [
//   { id: 1, nombre: "Tema 1...", icono: "⚠️", preguntas: [
//     { texto, opciones: [...], correcta: 0|1|2, explicacion }
//   ]}
// ]
 
// Variable global que mantiene la misma forma que data.js original
let temas = [];
 
// Mapeo de iconos por tema (para que la UI siga viéndose igual)
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
const CACHE_DURACION_MS = 24 * 60 * 60 * 1000; // 24 horas
 
/**
 * Carga las preguntas desde Supabase (o caché si está disponible y reciente).
 * Llena la variable global `temas` con la estructura que espera app.js.
 */
async function descargarYGuardarEnCache() {
    console.log('⬇️ Descargando preguntas de Supabase...');
    
    // Supabase limita a 1000 filas por consulta. Paginar para traerlas todas.
    const TAMANO_PAGINA = 1000;
    let todasLasPreguntas = [];
    let desde = 0;
    
    while (true) {
        const { data, error } = await sb
            .from('questions')
            .select('id, tema, pregunta, opciones, respuesta_correcta, explicacion')
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
        
        if (data.length < TAMANO_PAGINA) break; // ya no hay más
        desde += TAMANO_PAGINA;
    }
    
    // Agrupar por tema y construir la estructura igual que data.js
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
    // Refrescar la caché silenciosamente sin bloquear la UI
    try {
        await descargarYGuardarEnCache();
    } catch (e) {
        // Silencioso, el usuario ya está usando la caché
    }
}
 
/**
 * Limpia la caché de preguntas (útil si añades nuevas preguntas en Supabase).
 */
function limpiarCachePreguntas() {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_TIMESTAMP_KEY);
    console.log('Caché de preguntas limpiada');
}
