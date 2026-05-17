// ============================================
// DATA LOADER — Carga preguntas desde Supabase
// Filtrado por convocatoria activa
// ============================================

const CACHE_KEY = 'preguntas_cache_v3';      // v3 invalida cachés viejas v1, v2
const CACHE_DURACION_MS = 24 * 60 * 60 * 1000; // 24 horas

// Variables globales (compartidas con app.js)
let preguntas = [];
let temas = [];

async function cargarPreguntasDesdeSupabase() {
    const convId = window.convocatoriaActualId;
    if (!convId) {
        console.warn('No hay convocatoria seleccionada. No cargo preguntas.');
        preguntas = [];
        temas = [];
        return;
    }
    
    // Caché por convocatoria
    const cacheKey = `${CACHE_KEY}_conv_${convId}`;
    const cacheRaw = localStorage.getItem(cacheKey);
    if (cacheRaw) {
        try {
            const cache = JSON.parse(cacheRaw);
            const ahora = Date.now();
            if (cache.ts && (ahora - cache.ts) < CACHE_DURACION_MS) {
                preguntas = cache.preguntas || [];
                temas = cache.temas || [];
                console.log(`✅ Preguntas cargadas desde caché (${preguntas.length} preguntas, ${temas.length} temas)`);
                return;
            }
        } catch (e) {
            console.warn('Caché corrupta, descargando de nuevo');
        }
    }
    
    console.log(`⬇️ Descargando preguntas de Supabase (conv ${convId})...`);
    
    // Paginar en bloques de 1000
    let todas = [];
    let desde = 0;
    const tam = 1000;
    
    while (true) {
        const { data, error } = await sb
            .from('questions')
            .select('id, tema, pregunta, opciones, respuesta_correcta, explicacion')
            .eq('convocatoria_id', convId)
            .is('supuesto_id', null)  // solo preguntas teóricas
            .order('id', { ascending: true })
            .range(desde, desde + tam - 1);
        
        if (error) {
            console.error('Error cargando preguntas:', error);
            return;
        }
        if (!data || data.length === 0) break;
        
        todas = todas.concat(data);
        if (data.length < tam) break;
        desde += tam;
    }
    
    // Agrupar por tema
    const porTema = new Map();
    todas.forEach(row => {
        const t = row.tema || 'Sin tema';
        if (!porTema.has(t)) {
            porTema.set(t, {
                id: t,
                nombre: t,
                preguntas: []
            });
        }
        const opciones = typeof row.opciones === 'string'
            ? JSON.parse(row.opciones)
            : row.opciones;
        
        porTema.get(t).preguntas.push({
            dbId: row.id,
            idPregunta: `q-${row.id}`,
            temaId: t,
            temaNombre: t,
            texto: row.pregunta,
            opciones: opciones,
            correcta: row.respuesta_correcta,
            explicacion: row.explicacion || ''
        });
    });
    
    temas = Array.from(porTema.values());
    preguntas = todas;
    
    // Guardar caché
    try {
        localStorage.setItem(cacheKey, JSON.stringify({
            ts: Date.now(),
            preguntas: preguntas,
            temas: temas
        }));
    } catch (e) {
        console.warn('No se pudo guardar caché:', e);
    }
    
    console.log(`✅ ${preguntas.length} preguntas en ${temas.length} temas (conv ${convId})`);
}

function limpiarCachePreguntas() {
    const keys = Object.keys(localStorage);
    keys.forEach(k => {
        if (k.startsWith(CACHE_KEY) || k.startsWith('preguntas_cache_v1') || k.startsWith('preguntas_cache_v2')) {
            localStorage.removeItem(k);
        }
    });
    console.log('Caché de preguntas limpiada');
}

async function inicializarAppPostLogin() {
    if (window.convocatoriaActualId) {
        await cargarPreguntasDesdeSupabase();
    }
    
    if (typeof cargarProgresoUsuario === 'function') {
        await cargarProgresoUsuario();
    }
}
