// ============================================
// STATS GLOBALES — datos agregados de Supabase
// ============================================

// ---- Caché en memoria de stats por pregunta (para no recargar en cada vista) ----
let _cacheQuestionStats = null;
let _cacheQuestionStatsTime = 0;
const CACHE_QSTATS_MS = 5 * 60 * 1000; // 5 min

/**
 * Devuelve un mapa { questionId: porcentajeAcierto } con el % global de acierto
 * de cada pregunta. Cacheado 5 minutos para no machacar la DB.
 */
async function obtenerStatsGlobalesPorPregunta() {
    if (_cacheQuestionStats && Date.now() - _cacheQuestionStatsTime < CACHE_QSTATS_MS) {
        return _cacheQuestionStats;
    }
    
    // Paginación porque pueden ser >1000 filas
    const TAMANO = 1000;
    let todas = [];
    let desde = 0;
    
    while (true) {
        const { data, error } = await sb
            .from('question_stats')
            .select('question_id, porcentaje_acierto, total_respuestas')
            .range(desde, desde + TAMANO - 1);
        
        if (error) {
            console.error('Error cargando stats por pregunta:', error);
            return _cacheQuestionStats || {};
        }
        
        todas = todas.concat(data);
        if (data.length < TAMANO) break;
        desde += TAMANO;
    }
    
    const mapa = {};
    todas.forEach(r => {
        mapa[r.question_id] = {
            porcentaje: r.porcentaje_acierto,
            total: r.total_respuestas
        };
    });
    
    _cacheQuestionStats = mapa;
    _cacheQuestionStatsTime = Date.now();
    return mapa;
}

/**
 * Devuelve el % global de acierto de UNA pregunta concreta.
 * Devuelve null si no hay datos suficientes (<3 respuestas globales).
 */
async function obtenerStatGlobalDePregunta(questionId) {
    const mapa = await obtenerStatsGlobalesPorPregunta();
    const stat = mapa[questionId];
    if (!stat || stat.total < 3) return null;
    return { porcentaje: stat.porcentaje, total: stat.total };
}

/**
 * Devuelve un mapa { temaNombre: { porcentaje, total } } con la media global por tema.
 */
async function obtenerStatsGlobalesPorTema() {
    const { data, error } = await sb
        .from('tema_stats_globales')
        .select('*');
    
    if (error || !data) {
        console.error('Error cargando stats por tema:', error);
        return {};
    }
    
    const mapa = {};
    data.forEach(r => {
        // Extraer número de tema
        const match = r.tema.match(/Tema\s+(\d+)/i);
        if (!match) return;
        const temaId = parseInt(match[1]);
        mapa[temaId] = {
            porcentaje: r.porcentaje_acierto_global,
            total: r.total_respuestas_global
        };
    });
    
    return mapa;
}

/**
 * Devuelve el ranking global ordenado por preguntas acertadas en el período pedido.
 * Período: 'hoy' | 'semana' | 'mes' | 'total'
 * Devuelve: array de { posicion, nombre, acertadas, respondidas, porcentaje, esYo, user_id }
 */
async function obtenerRanking(periodo = 'total') {
    const campoAcert = 'acert_' + periodo;
    const campoResp = 'resp_' + periodo;
    
    const { data, error } = await sb
        .from('global_ranking_v2')
        .select(`user_id, nombre, ${campoAcert}, ${campoResp}`)
        .gt(campoResp, 0) // solo usuarios con al menos 1 respuesta en ese período
        .order(campoAcert, { ascending: false })
        .order(campoResp, { ascending: true }) // desempate: misma acertadas → gana quien menos respondió (mejor %)
        .limit(500); // top 500 como mucho
    
    if (error || !data) {
        console.error('Error cargando ranking:', error);
        return [];
    }
    
    return data.map((row, i) => {
        const acertadas = row[campoAcert] || 0;
        const respondidas = row[campoResp] || 0;
        const porcentaje = respondidas > 0 ? Math.round(100 * acertadas / respondidas) : 0;
        return {
            posicion: i + 1,
            nombre: row.nombre,
            acertadas,
            respondidas,
            porcentaje,
            esYo: row.user_id === currentUser?.id,
            user_id: row.user_id
        };
    });
}

/**
 * Actualiza el nombre público del usuario.
 */
async function actualizarNombrePublico(nuevoNombre) {
    const nombre = (nuevoNombre || '').trim();
    if (nombre.length > 30) {
        alert('El nombre no puede tener más de 30 caracteres.');
        return false;
    }
    
    const { error } = await sb
        .from('profiles')
        .update({ nombre_publico: nombre || null })
        .eq('id', currentUser.id);
    
    if (error) {
        console.error('Error actualizando nombre:', error);
        alert('Error guardando el nombre.');
        return false;
    }
    
    if (userProfile) userProfile.nombre_publico = nombre || null;
    return true;
}

// ============================================
// UI — Ranking
// ============================================

let _periodoRankingActivo = 'total';

async function mostrarRanking() {
    mostrarPantalla('pantallaRanking');
    await renderizarRanking();
}

async function renderizarRanking() {
    const container = document.getElementById('contenidoRanking');
    container.innerHTML = '<div class="ranking-loading">Cargando ranking...</div>';
    
    const ranking = await obtenerRanking(_periodoRankingActivo);
    
    if (ranking.length === 0) {
        container.innerHTML = `
            <div class="ranking-vacio">
                <p>Aún no hay datos para este período.</p>
                <small>Responde algunas preguntas para aparecer en el ranking.</small>
            </div>
        `;
        return;
    }
    
    // Mostrar top 50 + el bloque del usuario actual con sus vecinos
    const top50 = ranking.slice(0, 50);
    const indiceMio = ranking.findIndex(r => r.esYo);
    
    let htmlVecinos = '';
    if (indiceMio >= 50) {
        // Si el usuario está fuera del top 50, mostrar 2 antes + él + 2 después
        const inicio = Math.max(50, indiceMio - 2);
        const fin = Math.min(ranking.length, indiceMio + 3);
        const vecinos = ranking.slice(inicio, fin);
        htmlVecinos = `
            <div class="ranking-separador">...</div>
            <div class="ranking-vecinos">
                ${vecinos.map(filaRanking).join('')}
            </div>
        `;
    } else if (indiceMio < 0) {
        htmlVecinos = `
            <div class="ranking-no-aparezco">
                Aún no apareces en este ranking. ¡Responde alguna pregunta!
            </div>
        `;
    }
    
    container.innerHTML = `
        <div class="ranking-tabla">
            <div class="ranking-header-fila">
                <span class="r-pos">#</span>
                <span class="r-nombre">Usuario</span>
                <span class="r-acert">Acertadas</span>
                <span class="r-pct">% acierto</span>
            </div>
            ${top50.map(filaRanking).join('')}
        </div>
        ${htmlVecinos}
    `;
}

function filaRanking(r) {
    const medalla = r.posicion === 1 ? '🥇' : r.posicion === 2 ? '🥈' : r.posicion === 3 ? '🥉' : '';
    return `
        <div class="ranking-fila ${r.esYo ? 'es-yo' : ''}">
            <span class="r-pos">${medalla || r.posicion}</span>
            <span class="r-nombre">${escaparHtml(r.nombre)}${r.esYo ? ' <small>(tú)</small>' : ''}</span>
            <span class="r-acert">${r.acertadas}</span>
            <span class="r-pct">${r.porcentaje}%</span>
        </div>
    `;
}

function cambiarPeriodoRanking(periodo) {
    _periodoRankingActivo = periodo;
    document.querySelectorAll('.tab-periodo').forEach(t => t.classList.remove('activa'));
    document.querySelector(`.tab-periodo[data-periodo="${periodo}"]`)?.classList.add('activa');
    renderizarRanking();
}

function escaparHtml(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({
        '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
}

// ============================================
// UI — Editar nombre público
// ============================================
async function editarNombrePublico() {
    const actual = userProfile?.nombre_publico || '';
    const nuevo = prompt(
        'Tu nombre público en el ranking (máx. 30 caracteres):\n\n' +
        '(Déjalo vacío para aparecer como "Usuario #XXXX")',
        actual
    );
    
    if (nuevo === null) return; // canceló
    
    const ok = await actualizarNombrePublico(nuevo);
    if (ok) {
        alert('Nombre actualizado.');
    }
}
