// ============================================
// SIMULACRO SEMANAL
// ============================================
// - Mismas 50 preguntas para todos los usuarios cada semana
// - Cada semana (lunes 00:00 Europe/Madrid) cambia el conjunto
// - Penalización: 1/5 por fallo. Nota sobre 10.
// - Cronómetro: 78 segundos por pregunta
// - Solo premium

const SIMULACRO_SEMANAL_NUM_PREGUNTAS = 50;
const SIMULACRO_SEMANAL_SEG_POR_PREGUNTA = 78;
const PENALIZACION_POR_FALLO = 1 / 5;

// ============================================
// SEMANA ACTUAL (ID estable)
// ============================================

/**
 * Devuelve el ID de la semana actual en formato "YYYY-WW"
 * Lunes 00:00 Europe/Madrid como inicio de semana.
 * Usamos la "semana ISO" (lunes = primer día).
 */
function obtenerSemanaActualId() {
    // Hora actual de Madrid
    const ahora = new Date();
    // Trabajar siempre en UTC + offset de Madrid (CET/CEST se ajusta solo con toLocaleString)
    const fechaMadrid = new Date(ahora.toLocaleString('en-US', { timeZone: 'Europe/Madrid' }));
    
    // ISO week: el jueves de la semana determina el año
    const d = new Date(Date.UTC(fechaMadrid.getFullYear(), fechaMadrid.getMonth(), fechaMadrid.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNum = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    
    return `${d.getUTCFullYear()}-${String(weekNum).padStart(2, '0')}`;
}

/**
 * Devuelve cuándo termina la semana actual (próximo lunes 00:00 Madrid).
 */
function obtenerFinDeSemanaActual() {
    const ahora = new Date();
    const fechaMadrid = new Date(ahora.toLocaleString('en-US', { timeZone: 'Europe/Madrid' }));
    
    const diaSemana = fechaMadrid.getDay(); // 0=domingo, 1=lunes, ...
    const diasHastaLunes = diaSemana === 0 ? 1 : (8 - diaSemana);
    
    const proximoLunes = new Date(fechaMadrid);
    proximoLunes.setDate(fechaMadrid.getDate() + diasHastaLunes);
    proximoLunes.setHours(0, 0, 0, 0);
    
    return proximoLunes;
}

/**
 * Formatea el tiempo restante hasta el siguiente simulacro.
 */
function tiempoHastaProximoSimulacro() {
    const ahora = new Date();
    const finSemana = obtenerFinDeSemanaActual();
    const ms = finSemana.getTime() - ahora.getTime();
    
    if (ms <= 0) return 'Disponible ahora';
    
    const dias = Math.floor(ms / (1000 * 60 * 60 * 24));
    const horas = Math.floor((ms / (1000 * 60 * 60)) % 24);
    
    if (dias > 0) return `Nuevo simulacro en ${dias}d ${horas}h`;
    if (horas > 0) return `Nuevo simulacro en ${horas}h`;
    
    const minutos = Math.floor((ms / (1000 * 60)) % 60);
    return `Nuevo simulacro en ${minutos}min`;
}

// ============================================
// SELECCIÓN DETERMINISTA DE PREGUNTAS
// ============================================

/**
 * Generador pseudoaleatorio determinista (mulberry32).
 * Misma semilla → misma secuencia.
 */
function crearRandom(seed) {
    let s = seed >>> 0;
    return function() {
        s |= 0;
        s = s + 0x6D2B79F5 | 0;
        let t = Math.imul(s ^ s >>> 15, 1 | s);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

/**
 * Convierte un string en un entero (hash simple) para usar como semilla.
 */
function hashSemana(semanaId) {
    let hash = 5381;
    for (let i = 0; i < semanaId.length; i++) {
        hash = ((hash << 5) + hash) + semanaId.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

/**
 * Devuelve las 50 preguntas del simulacro de la semana actual,
 * iguales para todos los usuarios.
 */
function generarPreguntasSimulacroSemanal() {
    if (typeof temas === 'undefined' || !temas.length) {
        console.error('No hay temas cargados');
        return [];
    }
    
    const semanaId = obtenerSemanaActualId();
    const semilla = hashSemana(semanaId);
    const random = crearRandom(semilla);
    
    // Recolectar todas las preguntas con su info de tema
    const todasPreguntas = [];
    temas.forEach(tema => {
        tema.preguntas.forEach((p, idx) => {
            todasPreguntas.push({
                ...p,
                temaId: tema.id,
                temaNombre: tema.nombre,
                idPregunta: `${tema.id}-${idx}`
            });
        });
    });
    
    // Shuffle determinista con la semilla de la semana (Fisher-Yates)
    const arr = todasPreguntas.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    return arr.slice(0, SIMULACRO_SEMANAL_NUM_PREGUNTAS);
}

// ============================================
// COMPROBACIÓN: ¿YA LO HIZO ESTA SEMANA?
// ============================================

async function obtenerMiIntentoSemanal() {
    if (!currentUser) return null;
    const semanaId = obtenerSemanaActualId();
    const convId = window.convocatoriaActualId;
    
    let query = sb
        .from('simulacro_semanal_intentos')
        .select('*')
        .eq('user_id', currentUser.id)
        .eq('semana_id', semanaId);
    if (convId) query = query.eq('convocatoria_id', convId);
    
    const { data, error } = await query.maybeSingle();
    
    if (error) {
        console.error('Error consultando intento semanal:', error);
        return null;
    }
    return data;
}

// ============================================
// FÓRMULA DE NOTA
// ============================================

/**
 * Calcula nota sobre 10 con penalización 1/5.
 * Aciertos - (fallos / 5), normalizado al total y multiplicado por 10.
 */
function calcularNotaSobre10(aciertos, fallos, total) {
    if (total === 0) return 0;
    const notaBruta = aciertos - (fallos * PENALIZACION_POR_FALLO);
    const nota = (notaBruta / total) * 10;
    return Math.max(0, Math.round(nota * 100) / 100);
}

// ============================================
// INICIAR SIMULACRO SEMANAL
// ============================================

async function abrirSimulacroSemanal() {
    if (!currentUser) {
        alert('Debes iniciar sesión.');
        return;
    }
    
    // Comprobar premium (TEMPORALMENTE DESACTIVADO - se reactivará cuando la opción de apoyar esté lista)
    // if (!userProfile || userProfile.subscription_status !== 'premium') {
    //     mostrarMuroPago('El simulacro semanal es exclusivo de Premium. Apoya el proyecto para participar.');
    //     return;
    // }
    
    // Comprobar si ya lo hizo
    const intento = await obtenerMiIntentoSemanal();
    if (intento) {
        // Ya lo hizo → ir directo al ranking
        mostrarRankingSimulacroSemanal();
        return;
    }
    
    // Confirmar inicio
    const confirma = confirm(
        '🏆 SIMULACRO SEMANAL\n\n' +
        '• 50 preguntas\n' +
        '• 78 segundos por pregunta\n' +
        '• Penalización: -1/5 por fallo\n' +
        '• Nota sobre 10\n' +
        '• Solo puedes hacerlo UNA vez esta semana\n\n' +
        '¿Empezar ahora?'
    );
    if (!confirma) return;
    
    iniciarSimulacroSemanal();
}

function iniciarSimulacroSemanal() {
    const preguntas = generarPreguntasSimulacroSemanal();
    if (preguntas.length === 0) {
        alert('Error al cargar las preguntas. Recarga la página.');
        return;
    }
    
    estadoApp.modo = 'simulacro_semanal';
    estadoApp.temasActivos = temas.map(t => t.id);
    estadoApp.indicePregunta = 0;
    estadoApp.respuestas = [];
    estadoApp.preguntasActuales = preguntas;
    estadoApp.tiempoInicio = Date.now();
    
    iniciarCronometro(preguntas.length * SIMULACRO_SEMANAL_SEG_POR_PREGUNTA);
    iniciarTest();
}

// ============================================
// AL TERMINAR — GUARDAR Y MOSTRAR RANKING
// ============================================

async function guardarIntentoSimulacroSemanal(aciertos, fallos, sinResponder, duracionSegundos) {
    if (!currentUser) return false;
    
    const total = aciertos + fallos + sinResponder;
    const nota = calcularNotaSobre10(aciertos, fallos, total);
    const semanaId = obtenerSemanaActualId();
    
    const insertObj = {
        user_id: currentUser.id,
        semana_id: semanaId,
        aciertos,
        fallos,
        sin_responder: sinResponder,
        nota_sobre_10: nota,
        duracion_segundos: duracionSegundos
    };
    if (window.convocatoriaActualId) {
        insertObj.convocatoria_id = window.convocatoriaActualId;
    }
    
    const { error } = await sb.from('simulacro_semanal_intentos').insert(insertObj);
    
    if (error) {
        console.error('Error guardando intento semanal:', error);
        // Puede ser que ya tenga un intento (unique constraint)
        if (error.code === '23505') {
            alert('Ya habías hecho el simulacro de esta semana.');
        }
        return false;
    }
    
    return true;
}

// ============================================
// PANTALLA DE RANKING DEL SIMULACRO SEMANAL
// ============================================

async function mostrarRankingSimulacroSemanal() {
    // Crear pantalla si no existe
    let pantalla = document.getElementById('pantallaRankingSemanal');
    if (!pantalla) {
        pantalla = crearPantallaRankingSemanal();
        document.body.appendChild(pantalla);
    }
    
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    pantalla.classList.add('active');
    
    // Cargar datos
    await renderizarRankingSemanal();
}

function crearPantallaRankingSemanal() {
    const div = document.createElement('div');
    div.id = 'pantallaRankingSemanal';
    div.className = 'screen';
    div.innerHTML = `
        <header class="screen-header">
            <button class="btn-back" onclick="volverDashboard()">← Volver</button>
            <h2>🏆 Simulacro Semanal</h2>
        </header>
        <div id="contenidoRankingSemanal" class="config-container"></div>
    `;
    return div;
}

async function renderizarRankingSemanal() {
    const container = document.getElementById('contenidoRankingSemanal');
    container.innerHTML = '<div class="ranking-loading">Cargando ranking...</div>';
    
    const semanaId = obtenerSemanaActualId();
    
    // Mi intento
    const miIntento = await obtenerMiIntentoSemanal();
    
    // Ranking de la semana
    const convId = window.convocatoriaActualId;
    let rankingQuery = sb
        .from('simulacro_semanal_ranking')
        .select('*')
        .eq('semana_id', semanaId)
        .order('posicion', { ascending: true })
        .limit(100);
    if (convId) rankingQuery = rankingQuery.eq('convocatoria_id', convId);
    
    const { data: ranking, error } = await rankingQuery;
    
    if (error) {
        console.error('Error cargando ranking semanal:', error);
        container.innerHTML = '<div class="ranking-vacio"><p>Error al cargar el ranking.</p></div>';
        return;
    }
    
    const tiempoRestante = tiempoHastaProximoSimulacro();
    const totalParticipantes = ranking?.length || 0;
    
    let htmlMiResultado = '';
    if (miIntento) {
        const miPos = ranking?.find(r => r.user_id === currentUser.id);
        const pos = miPos?.posicion || '—';
        htmlMiResultado = `
            <div class="mi-resultado-semanal">
                <div class="mi-resultado-titulo">Tu resultado de esta semana</div>
                <div class="mi-resultado-grid">
                    <div class="mi-stat">
                        <div class="mi-stat-valor nota-color-${notaColor(miIntento.nota_sobre_10)}">${miIntento.nota_sobre_10.toFixed(2)}</div>
                        <div class="mi-stat-label">Nota /10</div>
                    </div>
                    <div class="mi-stat">
                        <div class="mi-stat-valor">#${pos}</div>
                        <div class="mi-stat-label">Posición</div>
                    </div>
                    <div class="mi-stat">
                        <div class="mi-stat-valor verde">${miIntento.aciertos}</div>
                        <div class="mi-stat-label">Aciertos</div>
                    </div>
                    <div class="mi-stat">
                        <div class="mi-stat-valor rojo">${miIntento.fallos}</div>
                        <div class="mi-stat-label">Fallos</div>
                    </div>
                </div>
            </div>
        `;
    } else {
        htmlMiResultado = `
            <div class="mi-resultado-semanal pendiente">
                <p style="margin:0;">Aún no has hecho el simulacro de esta semana.</p>
                <button class="btn-primary" style="margin-top:12px;" onclick="abrirSimulacroSemanal()">
                    Hacer simulacro ahora
                </button>
            </div>
        `;
    }
    
    let htmlRanking = '';
    if (!ranking || ranking.length === 0) {
        htmlRanking = '<div class="ranking-vacio"><p>Aún nadie ha hecho el simulacro esta semana.</p><small>¡Sé el primero!</small></div>';
    } else {
        htmlRanking = `
            <div class="ranking-tabla">
                <div class="ranking-header-fila">
                    <span class="r-pos">#</span>
                    <span class="r-nombre">Usuario</span>
                    <span class="r-acert">Nota</span>
                    <span class="r-pct">A / F</span>
                </div>
                ${ranking.map(filaRankingSemanal).join('')}
            </div>
        `;
    }
    
    container.innerHTML = `
        <div class="info-card">
            <div class="semana-info">
                <h3 style="margin:0;">Semana ${semanaId}</h3>
                <small style="color:#6b7785;">${tiempoRestante} · ${totalParticipantes} participantes</small>
            </div>
        </div>
        ${htmlMiResultado}
        <h3 style="margin:24px 4px 12px;color:#1a365d;">Clasificación</h3>
        ${htmlRanking}
    `;
}

function filaRankingSemanal(r) {
    const medalla = r.posicion === 1 ? '🥇' : r.posicion === 2 ? '🥈' : r.posicion === 3 ? '🥉' : '';
    const esYo = r.user_id === currentUser?.id;
    return `
        <div class="ranking-fila ${esYo ? 'es-yo' : ''}">
            <span class="r-pos">${medalla || r.posicion}</span>
            <span class="r-nombre">${escaparHtmlSem(r.nombre)}${esYo ? ' <small>(tú)</small>' : ''}</span>
            <span class="r-acert nota-color-${notaColor(r.nota_sobre_10)}">${parseFloat(r.nota_sobre_10).toFixed(2)}</span>
            <span class="r-pct"><span class="verde">${r.aciertos}</span> / <span class="rojo">${r.fallos}</span></span>
        </div>
    `;
}

function notaColor(nota) {
    if (nota >= 7) return 'verde';
    if (nota >= 5) return 'naranja';
    return 'rojo';
}

function escaparHtmlSem(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({
        '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
}

// ============================================
// ACTUALIZAR BADGE DEL DASHBOARD
// ============================================

async function actualizarBadgeSimulacroSemanal() {
    const tarjeta = document.getElementById('tarjetaSimulacroSemanal');
    if (!tarjeta) return;
    
    const badge = tarjeta.querySelector('.badge-semanal');
    const subtitulo = tarjeta.querySelector('.subtitulo-semanal');
    if (!badge || !subtitulo) return;
    
    if (!currentUser) return;
    
    // No premium (TEMPORALMENTE DESACTIVADO - todos los usuarios tienen acceso)
    // if (!userProfile || userProfile.subscription_status !== 'premium') {
    //     badge.textContent = '🔒 Premium';
    //     badge.className = 'badge-semanal gris';
    //     subtitulo.textContent = 'Apoya el proyecto para acceder';
    //     return;
    // }
    
    const intento = await obtenerMiIntentoSemanal();
    if (intento) {
        badge.textContent = `✅ ${parseFloat(intento.nota_sobre_10).toFixed(2)} /10`;
        badge.className = 'badge-semanal verde';
        subtitulo.textContent = 'Ver ranking de esta semana';
    } else {
        badge.textContent = '🏆 ¡Disponible!';
        badge.className = 'badge-semanal amarillo';
        subtitulo.textContent = '50 preguntas · ' + tiempoHastaProximoSimulacro();
    }
}

// Actualizar el badge cuando volvemos al dashboard
function tarjetaSemanalClick() {
    abrirSimulacroSemanal();
}
