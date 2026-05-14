// ============================================
// ESTADO GLOBAL
// ============================================
let estadoApp = {
    modo: null,
    temasActivos: [],
    preguntasActuales: [],
    indicePregunta: 0,
    respuestas: [],
    tiempoInicio: null,
    intervaloTiempo: null,
    preguntasGuardadas: cargarGuardadas(),
    preguntasFalladas: cargarFalladas(),
    estadisticas: cargarEstadisticas(),
    preguntasVistas: cargarPreguntasVistas(),
    opcionesMezcladas: [] // Array para guardar el orden mezclado de opciones por pregunta
};

// ============================================
// PERSISTENCIA — Ahora sincronizada con Supabase
// ============================================
// Las funciones guardar*() y cargar*() se mantienen para compatibilidad con
// el resto del código, pero ya no usan localStorage como fuente de verdad.
// La verdad está en Supabase; estas funciones operan sobre estado en memoria
// que ha sido pre-cargado desde Supabase al hacer login (ver progreso.js).

function guardarGuardadas() {
    // No-op: la lógica real está en toggleGuardarPregunta que llama a Supabase.
    // Mantenemos también un cache en localStorage por si hay desconexión momentánea.
    try {
        localStorage.setItem('preguntasGuardadas', JSON.stringify(estadoApp.preguntasGuardadas));
    } catch (e) {}
}

function cargarGuardadas() {
    // Lee del cache local mientras llega Supabase. Se sobrescribe en cargarTodoElProgresoDesdeSupabase().
    const guardadas = localStorage.getItem('preguntasGuardadas');
    return guardadas ? JSON.parse(guardadas) : [];
}

function guardarEstadisticas() {
    try {
        localStorage.setItem('estadisticas', JSON.stringify(estadoApp.estadisticas));
    } catch (e) {}
}

function cargarEstadisticas() {
    const stats = localStorage.getItem('estadisticas');
    return stats ? JSON.parse(stats) : {};
}

function guardarPreguntasVistas() {
    try {
        localStorage.setItem('preguntasVistas', JSON.stringify(estadoApp.preguntasVistas));
    } catch (e) {}
}

function cargarPreguntasVistas() {
    const vistas = localStorage.getItem('preguntasVistas');
    return vistas ? JSON.parse(vistas) : [];
}

function guardarFalladas() {
    try {
        localStorage.setItem('preguntasFalladas', JSON.stringify(estadoApp.preguntasFalladas));
    } catch (e) {}
}

function cargarFalladas() {
    const falladas = localStorage.getItem('preguntasFalladas');
    return falladas ? JSON.parse(falladas) : [];
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    cargarTemaGuardado();
});

// Llamado desde auth.js después del login. Carga preguntas + progreso.
async function inicializarAppPostLogin() {
    try {
        await cargarPreguntasDesdeSupabase();
        await cargarTodoElProgresoDesdeSupabase();
        cargarDashboard();
    } catch (e) {
        console.error('Error inicializando app:', e);
        alert('Hubo un error cargando los datos. Recarga la página, por favor.');
    }
}

// ============================================
// MODO OSCURO
// ============================================
function cargarTemaGuardado() {
    const tema = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', tema);
    actualizarIconoTema(tema);
}

function toggleTheme() {
    const temaActual = document.documentElement.getAttribute('data-theme');
    const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', nuevoTema);
    localStorage.setItem('theme', nuevoTema);
    actualizarIconoTema(nuevoTema);
}

function actualizarIconoTema(tema) {
    const icono = document.querySelector('.theme-icon');
    if (icono) {
        icono.textContent = tema === 'dark' ? '☀️' : '🌙';
    }
}

function cargarDashboard() {
    actualizarEstadisticasDashboard();
    if (typeof actualizarBadgeSimulacroSemanal === 'function') {
        actualizarBadgeSimulacroSemanal();
    }
}

// ============================================
// ESTADÍSTICAS DASHBOARD
// ============================================
function actualizarEstadisticasDashboard() {
    const stats = calcularEstadisticasGenerales();
    
    document.getElementById('totalPreguntas').textContent = stats.total;
    document.getElementById('preguntasCompletadas').textContent = stats.completadas;
    document.getElementById('contadorGuardadas').textContent = estadoApp.preguntasGuardadas.length;
    document.getElementById('contadorFalladas').textContent = estadoApp.preguntasFalladas.length;
    document.getElementById('porcentajeAcierto').textContent = stats.porcentajeAcierto + '%';
}

function calcularEstadisticasGenerales() {
    const total = temas.reduce((sum, tema) => sum + tema.preguntas.length, 0);
    const completadas = Object.values(estadoApp.estadisticas).reduce((sum, tema) => sum + tema.respondidas, 0);
    const correctas = Object.values(estadoApp.estadisticas).reduce((sum, tema) => sum + tema.correctas, 0);
    const porcentaje = completadas > 0 ? Math.round((correctas / completadas) * 100) : 0;
    
    return {
        total,
        completadas,
        porcentajeAcierto: porcentaje
    };
}

// ============================================
// NAVEGACIÓN ENTRE PANTALLAS
// ============================================
function mostrarPantalla(idPantalla) {
    console.log('=== mostrarPantalla:', idPantalla, '===');
    
    // Ocultar todas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
        console.log('Ocultando:', screen.id);
    });
    
    // Mostrar la seleccionada
    const pantallaAMostrar = document.getElementById(idPantalla);
    if (pantallaAMostrar) {
        pantallaAMostrar.classList.add('active');
        console.log('Mostrando:', idPantalla, '- Clases:', pantallaAMostrar.className);
    } else {
        console.error('ERROR: No se encuentra la pantalla', idPantalla);
        alert('Error: No se encuentra la pantalla ' + idPantalla);
    }
}

function volverDashboard() {
    detenerCronometro();
    mostrarPantalla('dashboard');
    actualizarEstadisticasDashboard();
    if (typeof actualizarBadgeSimulacroSemanal === 'function') {
        actualizarBadgeSimulacroSemanal();
    }
}

function mostrarModoEstudio() {
    mostrarPantalla('modoEstudio');
    cargarTemasSeleccionables();
}

function mostrarModoSimulacro() {
    mostrarPantalla('modoSimulacro');
    cargarTemasSeleccionablesSimulacro();
}

function cargarTemasSeleccionablesSimulacro() {
    const container = document.getElementById('temasSeleccionSimulacro');
    if (!container) return;
    container.innerHTML = '';
    
    temas.forEach(tema => {
        const div = document.createElement('div');
        div.className = 'tema-checkbox selected'; // por defecto todos seleccionados
        
        const icono = tema.icono || '📚';
        
        div.innerHTML = `
            <input type="checkbox" id="sim-tema-${tema.id}" value="${tema.id}" checked>
            <div class="tema-info">
                <div class="tema-nombre"><span style="font-size: 1.3em; margin-right: 0.5rem;">${icono}</span>${tema.nombre}</div>
                <div class="tema-stats">${tema.preguntas.length} preguntas</div>
            </div>
        `;
        
        const checkbox = div.querySelector('input');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) div.classList.add('selected');
            else div.classList.remove('selected');
        });
        
        div.addEventListener('click', (e) => {
            if (e.target.tagName !== 'INPUT') {
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change'));
            }
        });
        
        container.appendChild(div);
    });
}

function seleccionarTodosSimulacro(seleccionar) {
    document.querySelectorAll('#temasSeleccionSimulacro input[type="checkbox"]').forEach(cb => {
        cb.checked = seleccionar;
        cb.dispatchEvent(new Event('change'));
    });
}

function mostrarPreguntasGuardadas() {
    console.log('Mostrando pantalla de preguntas guardadas');
    mostrarPantalla('preguntasGuardadas');
    renderizarPreguntasGuardadas();
}

function mostrarPreguntasFalladas() {
    console.log('Mostrando pantalla de preguntas falladas');
    mostrarPantalla('preguntasFalladas');
    renderizarPreguntasFalladas();
}

function mostrarEstadisticasDetalladas() {
    mostrarPantalla('estadisticasDetalladas');
    renderizarEstadisticasDetalladas();
}

// ============================================
// MODO ESTUDIO - CONFIGURACIÓN
// ============================================
function cargarTemasSeleccionables() {
    const container = document.getElementById('temasSeleccionEstudio');
    container.innerHTML = '';
    
    temas.forEach(tema => {
        const div = document.createElement('div');
        div.className = 'tema-checkbox';
        
        const preguntasVistasDelTema = estadoApp.preguntasVistas.filter(id => 
            id.startsWith(tema.id + '-')
        ).length;
        
        const icono = tema.icono || '📚'; // Icono por defecto si no tiene
        
        div.innerHTML = `
            <input type="checkbox" id="tema-${tema.id}" value="${tema.id}">
            <div class="tema-info">
                <div class="tema-nombre"><span style="font-size: 1.3em; margin-right: 0.5rem;">${icono}</span>${tema.nombre}</div>
                <div class="tema-stats">${tema.preguntas.length} preguntas · ${preguntasVistasDelTema} vistas</div>
            </div>
        `;
        
        const checkbox = div.querySelector('input');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                div.classList.add('selected');
            } else {
                div.classList.remove('selected');
            }
        });
        
        div.addEventListener('click', (e) => {
            if (e.target.tagName !== 'INPUT') {
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change'));
            }
        });
        
        container.appendChild(div);
    });
}

function ajustarCantidad(delta) {
    const input = document.getElementById('cantidadPreguntas');
    let valor = parseInt(input.value) + delta;
    valor = Math.max(1, Math.min(100, valor));
    input.value = valor;
}

function iniciarModoEstudio() {
    const temasSeleccionados = Array.from(document.querySelectorAll('#temasSeleccionEstudio input:checked'))
        .map(cb => parseInt(cb.value));
    
    if (temasSeleccionados.length === 0) {
        alert('Selecciona al menos un tema');
        return;
    }
    
    const cantidadPedida = parseInt(document.getElementById('cantidadPreguntas').value);
    const soloPreguntasNuevas = document.getElementById('soloPreguntasNuevas').checked;
    
    comprobarLimiteAntesDeTest(cantidadPedida).then(cantidad => {
        if (cantidad === 0) return;
        _arrancarModoEstudio(temasSeleccionados, cantidad, soloPreguntasNuevas);
    });
}

function _arrancarModoEstudio(temasSeleccionados, cantidad, soloPreguntasNuevas) {
    estadoApp.modo = 'estudio';
    estadoApp.temasActivos = temasSeleccionados;
    estadoApp.indicePregunta = 0;
    estadoApp.respuestas = [];
    
    let preguntasDisponibles = [];
    temasSeleccionados.forEach(temaId => {
        const tema = temas.find(t => t.id === temaId);
        if (tema) {
            tema.preguntas.forEach((p, index) => {
                const idPregunta = `${temaId}-${index}`;
                const yaVista = estadoApp.preguntasVistas.includes(idPregunta);
                
                if (soloPreguntasNuevas && yaVista) {
                    return;
                }
                
                preguntasDisponibles.push({
                    ...p,
                    temaId: tema.id,
                    temaNombre: tema.nombre,
                    idPregunta: idPregunta
                });
            });
        }
    });
    
    if (preguntasDisponibles.length === 0 && soloPreguntasNuevas) {
        if (confirm('¡Ya has visto todas las preguntas de estos temas! ¿Quieres resetear el progreso y empezar de nuevo?')) {
            resetearPreguntasVistas(temasSeleccionados);
            _arrancarModoEstudio(temasSeleccionados, cantidad, false);
            return;
        } else {
            return;
        }
    }
    
    preguntasDisponibles = mezclarArray(preguntasDisponibles);
    estadoApp.preguntasActuales = preguntasDisponibles.slice(0, Math.min(cantidad, preguntasDisponibles.length));
    
    iniciarTest();
}

// ============================================
// MODO SIMULACRO
// ============================================
function iniciarSimulacro() {
    const cantidadPedida = parseInt(document.getElementById('cantidadSimulacro').value);
    const conTiempo = document.getElementById('conTiempo').checked;
    
    // Leer temas seleccionados
    const temasSeleccionados = Array.from(
        document.querySelectorAll('#temasSeleccionSimulacro input:checked')
    ).map(cb => cb.value);
    
    if (temasSeleccionados.length === 0) {
        alert('Selecciona al menos un tema para el simulacro.');
        return;
    }
    
    comprobarLimiteAntesDeTest(cantidadPedida).then(cantidad => {
        if (cantidad === 0) return;
        _arrancarSimulacro(cantidad, conTiempo, temasSeleccionados);
    });
}

function _arrancarSimulacro(cantidad, conTiempo, temasSeleccionados) {
    estadoApp.modo = 'simulacro';
    estadoApp.temasActivos = temasSeleccionados && temasSeleccionados.length
        ? temasSeleccionados
        : temas.map(t => t.id);
    estadoApp.indicePregunta = 0;
    estadoApp.respuestas = [];
    
    estadoApp.preguntasActuales = obtenerPreguntasProporcionadas(cantidad, estadoApp.temasActivos);
    
    if (conTiempo) {
        estadoApp.tiempoInicio = Date.now();
        iniciarCronometro(cantidad * 78);
    }
    
    iniciarTest();
}

function obtenerPreguntasProporcionadas(cantidadTotal, temasFiltro) {
    // Normalizar a strings para evitar mismatch número/string
    const filtroNorm = (temasFiltro && temasFiltro.length)
        ? temasFiltro.map(String)
        : null;
    const temasUsar = filtroNorm
        ? temas.filter(t => filtroNorm.includes(String(t.id)))
        : temas;
    const totalPreguntas = temasUsar.reduce((sum, t) => sum + t.preguntas.length, 0);
    let preguntasSeleccionadas = [];
    
    temasUsar.forEach(tema => {
        const proporcion = tema.preguntas.length / totalPreguntas;
        const cantidadTema = Math.max(1, Math.round(cantidadTotal * proporcion));
        
        const preguntasTema = tema.preguntas.map((p, index) => ({
            ...p,
            temaId: tema.id,
            temaNombre: tema.nombre,
            idPregunta: `${tema.id}-${index}`
        }));
        
        const mezcladas = mezclarArray(preguntasTema);
        preguntasSeleccionadas.push(...mezcladas.slice(0, cantidadTema));
    });
    
    preguntasSeleccionadas = mezclarArray(preguntasSeleccionadas);
    return preguntasSeleccionadas.slice(0, cantidadTotal);
}

// ============================================
// MEZCLAR OPCIONES
// ============================================
function mezclarOpcionesPregunta(pregunta) {
    // Crear array con los índices [0, 1, 2]
    const indices = pregunta.opciones.map((_, i) => i);
    // Mezclar los índices
    const indicesMezclados = mezclarArray(indices);
    return indicesMezclados;
}

function inicializarOpcionesMezcladas() {
    // Crear array de opciones mezcladas para cada pregunta
    estadoApp.opcionesMezcladas = estadoApp.preguntasActuales.map(pregunta => 
        mezclarOpcionesPregunta(pregunta)
    );
}

// ============================================
// TEST
// ============================================
function iniciarTest() {
    if (!estadoApp.preguntasActuales || estadoApp.preguntasActuales.length === 0) {
        console.error('iniciarTest: preguntasActuales está vacío', {
            modo: estadoApp.modo,
            temasActivos: estadoApp.temasActivos,
            cantidadTemas: temas?.length
        });
        alert('No se han podido cargar las preguntas. Recarga la página (Ctrl+Shift+R) y vuelve a intentarlo.');
        volverDashboard();
        return;
    }
    
    mostrarPantalla('pantallaTest');
    document.getElementById('infoModo').textContent = 
        estadoApp.modo === 'estudio' ? 'Modo Estudio' : 'Modo Simulacro';
    
    // Inicializar opciones mezcladas para todas las preguntas
    inicializarOpcionesMezcladas();
    
    mostrarPregunta();
}

function mostrarPregunta() {
    const pregunta = estadoApp.preguntasActuales[estadoApp.indicePregunta];
    const total = estadoApp.preguntasActuales.length;
    const actual = estadoApp.indicePregunta + 1;
    
    const porcentaje = (actual / total) * 100;
    document.getElementById('barraProgreso').style.width = porcentaje + '%';
    document.getElementById('progresoTexto').textContent = `${actual} / ${total}`;
    
    document.getElementById('numeroPregunta').textContent = 
        `Pregunta ${actual} · ${pregunta.temaNombre}`;
    document.getElementById('textoPregunta').textContent = pregunta.texto;
    
    const container = document.getElementById('opcionesContainer');
    container.innerHTML = '';
    
    const letras = ['A', 'B', 'C'];
    const respuestaActual = estadoApp.respuestas[estadoApp.indicePregunta];
    
    // Obtener el orden mezclado de opciones para esta pregunta
    const ordenMezclado = estadoApp.opcionesMezcladas[estadoApp.indicePregunta];
    
    // Renderizar opciones en orden mezclado
    ordenMezclado.forEach((indiceOriginal, posicionMostrada) => {
        const opcion = pregunta.opciones[indiceOriginal];
        const div = document.createElement('div');
        div.className = 'opcion';
        
        if (respuestaActual && estadoApp.modo === 'estudio') {
            if (indiceOriginal === pregunta.correcta) {
                div.classList.add('correcta');
            } else if (indiceOriginal === respuestaActual.seleccionada) {
                div.classList.add('incorrecta');
            }
            div.classList.add('disabled');
        } else {
            div.addEventListener('click', () => {
                if (estadoApp.modo === 'estudio') {
                    seleccionarOpcion(indiceOriginal);
                } else {
                    seleccionarOpcionSimulacro(indiceOriginal);
                }
            });
            
            if (respuestaActual && indiceOriginal === respuestaActual.seleccionada) {
                div.classList.add('selected');
            }
        }
        
        div.innerHTML = `
            <div class="opcion-letra">${letras[posicionMostrada]}</div>
            <div class="opcion-texto">${opcion}</div>
        `;
        
        container.appendChild(div);
    });
    
    if (respuestaActual && estadoApp.modo === 'estudio') {
        document.getElementById('explicacionTexto').innerHTML = pregunta.explicacion;
        document.getElementById('explicacionContainer').classList.remove('oculto');
        // También mostrar la stat global si ya estaba respondida
        mostrarStatGlobalDePregunta(pregunta);
        // Renderizar comentarios (solo en modo estudio, después de responder)
        if (typeof renderizarSeccionComentarios === 'function') {
            renderizarSeccionComentarios(pregunta);
        }
    } else {
        document.getElementById('explicacionContainer').classList.add('oculto');
        // Ocultar comentarios si todavía no se ha respondido o si es simulacro
        const secCom = document.getElementById('seccionComentarios');
        if (secCom) secCom.style.display = 'none';
    }
    
    actualizarBotonGuardar();
    actualizarBotonesNavegacion();
    renderizarMiniMapa();
    
    if (pregunta.idPregunta && !estadoApp.preguntasVistas.includes(pregunta.idPregunta)) {
        estadoApp.preguntasVistas.push(pregunta.idPregunta);
        guardarPreguntasVistas();
    }
}

function seleccionarOpcion(indiceOpcion) {
    if (estadoApp.respuestas[estadoApp.indicePregunta]) return;
    
    const pregunta = estadoApp.preguntasActuales[estadoApp.indicePregunta];
    const esCorrecta = indiceOpcion === pregunta.correcta;
    
    estadoApp.respuestas[estadoApp.indicePregunta] = {
        seleccionada: indiceOpcion,
        correcta: pregunta.correcta,
        esCorrecta
    };
    
    // Guardar en Supabase (asíncrono)
    guardarRespuestaEnSupabase(pregunta, indiceOpcion, esCorrecta, 'estudio')
        .then(ok => {
            if (!ok) {
                estadoApp.respuestas[estadoApp.indicePregunta] = null;
            } else {
                // Si la respuesta se guardó OK, actualizar la lista de falladas en memoria
                actualizarEstadoFalladaEnMemoria(pregunta, esCorrecta);
            }
        });
    
    mostrarResultadoPregunta();
    actualizarEstadisticaPregunta(pregunta.temaId, esCorrecta);
    
    if (esCorrecta) {
        setTimeout(() => {
            if (estadoApp.indicePregunta < estadoApp.preguntasActuales.length - 1) {
                estadoApp.indicePregunta++;
                mostrarPregunta();
            } else {
                finalizarTest();
            }
        }, 500);
    }
}

function seleccionarOpcionSimulacro(indiceOpcion) {
    const pregunta = estadoApp.preguntasActuales[estadoApp.indicePregunta];
    const opciones = document.querySelectorAll('.opcion');
    const ordenMezclado = estadoApp.opcionesMezcladas[estadoApp.indicePregunta];
    
    // ordenMezclado[posicionVisual] = indiceOriginal
    // Buscamos la posición visual que corresponde al indiceOpcion (que es el índice ORIGINAL)
    opciones.forEach((op, posicionVisual) => {
        const indiceOriginal = ordenMezclado[posicionVisual];
        op.classList.remove('selected');
        if (indiceOriginal === indiceOpcion) op.classList.add('selected');
    });
    
    const esCorrecta = indiceOpcion === pregunta.correcta;
    estadoApp.respuestas[estadoApp.indicePregunta] = {
        seleccionada: indiceOpcion,
        correcta: pregunta.correcta,
        esCorrecta
    };
    
    renderizarMiniMapa();
}

function mostrarResultadoPregunta() {
    const pregunta = estadoApp.preguntasActuales[estadoApp.indicePregunta];
    const respuesta = estadoApp.respuestas[estadoApp.indicePregunta];
    const opciones = document.querySelectorAll('.opcion');
    const ordenMezclado = estadoApp.opcionesMezcladas[estadoApp.indicePregunta];
    
    opciones.forEach(op => op.classList.add('disabled'));
    
    // Ahora 'i' es la posición visual en el DOM, necesitamos el índice original
    opciones.forEach((op, posicionVisual) => {
        const indiceOriginal = ordenMezclado[posicionVisual];
        
        if (indiceOriginal === pregunta.correcta) {
            op.classList.add('correcta');
        } else if (indiceOriginal === respuesta.seleccionada) {
            op.classList.add('incorrecta');
        }
    });
    
    document.getElementById('explicacionTexto').innerHTML = pregunta.explicacion;
    document.getElementById('explicacionContainer').classList.remove('oculto');
    
    // Mostrar % global de acierto (asíncrono, aparece cuando llega)
    mostrarStatGlobalDePregunta(pregunta);
    
    // Mostrar comentarios solo en modo estudio
    if (estadoApp.modo === 'estudio' && typeof renderizarSeccionComentarios === 'function') {
        renderizarSeccionComentarios(pregunta);
    }
    
    renderizarMiniMapa();
}

async function mostrarStatGlobalDePregunta(pregunta) {
    if (!pregunta.dbId || typeof obtenerStatGlobalDePregunta !== 'function') return;
    
    const cont = document.getElementById('explicacionContainer');
    if (!cont) return;
    
    // Quitar stat anterior si la había
    const anterior = cont.querySelector('.stat-global-pregunta');
    if (anterior) anterior.remove();
    
    const stat = await obtenerStatGlobalDePregunta(pregunta.dbId);
    if (!stat) return; // sin datos suficientes
    
    const div = document.createElement('div');
    div.className = 'stat-global-pregunta';
    
    let texto;
    if (stat.porcentaje >= 80) {
        texto = `📊 El ${stat.porcentaje}% de opositores aciertan esta pregunta`;
    } else if (stat.porcentaje >= 50) {
        texto = `📊 El ${stat.porcentaje}% de opositores aciertan esta`;
    } else if (stat.porcentaje >= 30) {
        texto = `🎯 Pregunta difícil: solo el ${stat.porcentaje}% acierta`;
    } else {
        texto = `🔥 Pregunta muy difícil: solo el ${stat.porcentaje}% acierta`;
    }
    
    div.innerHTML = `<small>${texto} (${stat.total} respuestas)</small>`;
    cont.appendChild(div);
}

function actualizarBotonesNavegacion() {
    document.getElementById('btnAnterior').disabled = estadoApp.indicePregunta === 0;
    
    const ultimaPregunta = estadoApp.indicePregunta === estadoApp.preguntasActuales.length - 1;
    document.getElementById('btnSiguiente').textContent = ultimaPregunta ? 'Finalizar' : 'Siguiente →';
}

function preguntaAnterior() {
    if (estadoApp.indicePregunta > 0) {
        estadoApp.indicePregunta--;
        mostrarPregunta();
    }
}

function siguientePregunta() {
    if (estadoApp.indicePregunta < estadoApp.preguntasActuales.length - 1) {
        estadoApp.indicePregunta++;
        mostrarPregunta();
    } else {
        finalizarTest();
    }
}

function irAPregunta(indice) {
    estadoApp.indicePregunta = indice;
    mostrarPregunta();
}

function renderizarMiniMapa() {
    const container = document.getElementById('miniMapa');
    container.innerHTML = '';
    
    estadoApp.preguntasActuales.forEach((pregunta, index) => {
        const div = document.createElement('div');
        div.className = 'mini-pregunta';
        div.textContent = index + 1;
        
        if (index === estadoApp.indicePregunta) {
            div.classList.add('actual');
        }
        
        const respuesta = estadoApp.respuestas[index];
        if (respuesta) {
            if (estadoApp.modo === 'estudio') {
                if (respuesta.esCorrecta) {
                    div.classList.add('correcta');
                } else {
                    div.classList.add('incorrecta');
                }
            } else {
                div.classList.add('respondida');
            }
        }
        
        div.addEventListener('click', () => irAPregunta(index));
        container.appendChild(div);
    });
}

function finalizarTest() {
    detenerCronometro();
    
    if (estadoApp.modo === 'simulacro' || estadoApp.modo === 'simulacro_semanal') {
        const modoGuardar = estadoApp.modo === 'simulacro_semanal' ? 'simulacro' : 'simulacro';
        estadoApp.preguntasActuales.forEach((pregunta, i) => {
            const respuesta = estadoApp.respuestas[i];
            if (respuesta) {
                actualizarEstadisticaPregunta(pregunta.temaId, respuesta.esCorrecta);
                
                guardarRespuestaEnSupabase(
                    pregunta,
                    respuesta.seleccionada,
                    respuesta.esCorrecta,
                    modoGuardar
                ).then(ok => {
                    if (ok) actualizarEstadoFalladaEnMemoria(pregunta, respuesta.esCorrecta);
                });
            }
        });
        
        // Si es semanal, guardar el intento en la tabla específica
        if (estadoApp.modo === 'simulacro_semanal' && typeof guardarIntentoSimulacroSemanal === 'function') {
            const correctas = estadoApp.respuestas.filter(r => r && r.esCorrecta).length;
            const incorrectas = estadoApp.respuestas.filter(r => r && !r.esCorrecta).length;
            const sinResponder = estadoApp.preguntasActuales.length - estadoApp.respuestas.filter(r => r).length;
            const duracion = estadoApp.tiempoInicio ? Math.round((Date.now() - estadoApp.tiempoInicio) / 1000) : null;
            guardarIntentoSimulacroSemanal(correctas, incorrectas, sinResponder, duracion);
        }
    }
    
    mostrarResultados();
}

function abandonarTest() {
    if (estadoApp.modo === 'simulacro_semanal') {
        alert('No se puede abandonar el simulacro semanal a medias. Tienes que terminarlo.');
        return;
    }
    if (confirm('¿Seguro que quieres abandonar el test?')) {
        volverDashboard();
    }
}

// ============================================
// RESULTADOS
// ============================================
function mostrarResultados() {
    mostrarPantalla('pantallaResultados');
    
    const correctas = estadoApp.respuestas.filter(r => r && r.esCorrecta).length;
    const incorrectas = estadoApp.respuestas.filter(r => r && !r.esCorrecta).length;
    const sinResponder = estadoApp.preguntasActuales.length - estadoApp.respuestas.filter(r => r).length;
    const total = estadoApp.preguntasActuales.length;
    
    // En modos simulacro mostramos nota /10 con penalización 1/5
    // En modo estudio seguimos mostrando porcentaje simple
    const esSimulacro = estadoApp.modo === 'simulacro' || estadoApp.modo === 'simulacro_semanal';
    
    if (esSimulacro) {
        const notaBruta = correctas - (incorrectas / 5);
        const notaSobre10 = Math.max(0, (notaBruta / total) * 10);
        document.getElementById('puntuacionFinal').textContent = notaSobre10.toFixed(2) + ' / 10';
    } else {
        const porcentaje = total > 0 ? Math.round((correctas / total) * 100) : 0;
        document.getElementById('puntuacionFinal').textContent = porcentaje + '%';
    }
    document.getElementById('totalCorrectas').textContent = correctas;
    document.getElementById('totalIncorrectas').textContent = incorrectas;
    document.getElementById('totalSinResponder').textContent = sinResponder;
    
    const detalleContainer = document.getElementById('detalleRespuestas');
    detalleContainer.innerHTML = '';
    
    // Si es simulacro semanal añadimos botón para ir al ranking
    if (estadoApp.modo === 'simulacro_semanal') {
        const div = document.createElement('div');
        div.style.cssText = 'text-align:center; margin: 16px 0;';
        div.innerHTML = `
            <button class="btn-primary" onclick="mostrarRankingSimulacroSemanal()">
                🏆 Ver ranking de esta semana
            </button>
        `;
        detalleContainer.appendChild(div);
    }
    
    const headerDetalle = document.createElement('h3');
    headerDetalle.style.cssText = 'margin: 2rem 0 1rem;';
    headerDetalle.textContent = 'Detalle de respuestas';
    detalleContainer.appendChild(headerDetalle);
    
    estadoApp.preguntasActuales.forEach((pregunta, i) => {
        const respuesta = estadoApp.respuestas[i];
        const div = document.createElement('div');
        div.className = 'pregunta-guardada';
        
        const clase = respuesta && respuesta.esCorrecta ? 'correctas' : 
                     !respuesta ? '' : 'incorrectas';
        
        div.innerHTML = `
            <div class="pregunta-guardada-header">
                <span class="pregunta-guardada-tema">${pregunta.temaNombre}</span>
                <span class="detalle-valor ${clase}">
                    ${respuesta && respuesta.esCorrecta ? '✓ Correcta' : 
                      !respuesta ? '- Sin responder' : '✗ Incorrecta'}
                </span>
            </div>
            <div style="margin-bottom: 0.5rem; font-weight: 500;">${pregunta.texto}</div>
            <div style="font-size: 0.9rem; color: var(--text-secondary);">
                ${respuesta ? 
                  `Tu respuesta: ${pregunta.opciones[respuesta.seleccionada]}` : 
                  'No respondida'}
                <br>
                Respuesta correcta: ${pregunta.opciones[pregunta.correcta]}
            </div>
        `;
        
        detalleContainer.appendChild(div);
    });
}

function repasarFalladas() {
    const falladas = [];
    estadoApp.preguntasActuales.forEach((pregunta, i) => {
        const respuesta = estadoApp.respuestas[i];
        if (!respuesta || !respuesta.esCorrecta) {
            falladas.push(pregunta);
        }
    });
    
    if (falladas.length === 0) {
        alert('¡No has fallado ninguna pregunta! 🎉');
        return;
    }
    
    estadoApp.modo = 'estudio';
    estadoApp.preguntasActuales = falladas;
    estadoApp.indicePregunta = 0;
    estadoApp.respuestas = [];
    
    iniciarTest();
}

// ============================================
// GUARDAR PREGUNTAS (sincronizado con Supabase)
// ============================================
function toggleGuardarPregunta() {
    const pregunta = estadoApp.preguntasActuales[estadoApp.indicePregunta];
    
    const index = estadoApp.preguntasGuardadas.findIndex(p => 
        (p.dbId && pregunta.dbId && p.dbId === pregunta.dbId) ||
        (p.temaId === pregunta.temaId && p.texto === pregunta.texto)
    );
    
    if (index >= 0) {
        estadoApp.preguntasGuardadas.splice(index, 1);
        // Borrar de Supabase
        eliminarGuardadaEnSupabase(pregunta.dbId);
    } else {
        estadoApp.preguntasGuardadas.push(pregunta);
        // Insertar en Supabase
        guardarGuardadaEnSupabase(pregunta.dbId);
    }
    
    guardarGuardadas(); // cache local
    actualizarBotonGuardar();
    actualizarEstadisticasDashboard();
}

function actualizarBotonGuardar() {
    const pregunta = estadoApp.preguntasActuales[estadoApp.indicePregunta];
    const guardada = estadoApp.preguntasGuardadas.some(p => 
        p.temaId === pregunta.temaId && p.texto === pregunta.texto
    );
    
    const btn = document.getElementById('btnGuardar');
    const icono = document.getElementById('iconoGuardar');
    
    if (guardada) {
        btn.classList.add('guardada');
        icono.textContent = '★';
    } else {
        btn.classList.remove('guardada');
        icono.textContent = '☆';
    }
}

function renderizarPreguntasGuardadas() {
    console.log('=== INICIO renderizarPreguntasGuardadas ===');
    console.log('Cantidad guardadas:', estadoApp.preguntasGuardadas.length);
    
    const container = document.getElementById('listaGuardadas');
    const mensajeVacio = document.getElementById('mensajeVacio');
    
    console.log('Container:', container);
    console.log('MensajeVacio:', mensajeVacio);
    
    if (!container) {
        console.error('ERROR: No se encuentra #listaGuardadas');
        alert('Error: No se encuentra el contenedor listaGuardadas');
        return;
    }
    
    if (!mensajeVacio) {
        console.error('ERROR: No se encuentra #mensajeVacio');
        alert('Error: No se encuentra mensajeVacio');
        return;
    }
    
    // Si no hay guardadas, mostrar mensaje vacío
    if (estadoApp.preguntasGuardadas.length === 0) {
        console.log('Mostrando mensaje vacío');
        container.innerHTML = '';
        container.style.display = 'none';
        mensajeVacio.style.display = 'block';
        console.log('Display del mensaje:', mensajeVacio.style.display);
        return;
    }
    
    // Si hay guardadas, mostrar lista
    console.log('Renderizando', estadoApp.preguntasGuardadas.length, 'preguntas');
    mensajeVacio.style.display = 'none';
    container.style.display = 'block';
    container.innerHTML = '';
    container.className = 'lista-guardadas';
    
    estadoApp.preguntasGuardadas.forEach((pregunta, index) => {
        console.log('Renderizando pregunta', index);
        
        const div = document.createElement('div');
        div.className = 'pregunta-guardada';
        
        const letras = ['A', 'B', 'C'];
        const opcionesHTML = pregunta.opciones.map((op, i) => {
            const esCorrecta = i === pregunta.correcta;
            const estilo = esCorrecta ? 'color: #10b981; font-weight: 600;' : '';
            return `<div style="padding: 0.25rem 0; ${estilo}">${letras[i]}. ${op} ${esCorrecta ? '✓' : ''}</div>`;
        }).join('');
        
        div.innerHTML = `
            <div class="pregunta-guardada-header">
                <span class="pregunta-guardada-tema">${pregunta.temaNombre || 'Tema desconocido'}</span>
                <button class="btn-eliminar" onclick="eliminarGuardada(${index})">🗑️</button>
            </div>
            <div style="margin-bottom: 0.75rem; font-weight: 500;">${pregunta.texto}</div>
            <div style="font-size: 0.9rem; margin-bottom: 0.75rem;">
                ${opcionesHTML}
            </div>
            <div style="font-size: 0.85rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 0.5rem; line-height: 1.6;">
                ${pregunta.explicacion}
            </div>
        `;
        container.appendChild(div);
    });
    
    // Botón para repasar
    const btnRepasar = document.createElement('button');
    btnRepasar.className = 'btn-primary btn-large';
    btnRepasar.style.marginTop = '2rem';
    btnRepasar.textContent = `Repasar ${estadoApp.preguntasGuardadas.length} preguntas guardadas`;
    btnRepasar.onclick = iniciarRepasarGuardadas;
    container.appendChild(btnRepasar);
    
    console.log('=== FIN renderizarPreguntasGuardadas ===');
}

function iniciarRepasarGuardadas() {
    if (estadoApp.preguntasGuardadas.length === 0) {
        alert('No tienes preguntas guardadas');
        return;
    }
    
    estadoApp.modo = 'estudio';
    estadoApp.preguntasActuales = mezclarArray([...estadoApp.preguntasGuardadas]);
    estadoApp.indicePregunta = 0;
    estadoApp.respuestas = [];
    
    iniciarTest();
}

function eliminarGuardada(index) {
    if (confirm('¿Eliminar esta pregunta guardada?')) {
        const pregunta = estadoApp.preguntasGuardadas[index];
        if (pregunta && pregunta.dbId) {
            eliminarGuardadaEnSupabase(pregunta.dbId);
        }
        estadoApp.preguntasGuardadas.splice(index, 1);
        guardarGuardadas();
        renderizarPreguntasGuardadas();
        actualizarEstadisticasDashboard();
    }
}

// ============================================
// PREGUNTAS FALLADAS (calculadas desde user_progress)
// ============================================
// Las falladas ya no se "agregan manualmente". Una pregunta está fallada
// si tu última respuesta a ella fue incorrecta. Esta función solo actualiza
// el estado local en memoria tras una respuesta nueva.
function actualizarEstadoFalladaEnMemoria(pregunta, esCorrecta) {
    if (!pregunta.dbId) return;
    
    const index = estadoApp.preguntasFalladas.findIndex(p => p.dbId === pregunta.dbId);
    
    if (esCorrecta) {
        // Si acertó, ya no es fallada: quitar si estaba
        if (index >= 0) {
            estadoApp.preguntasFalladas.splice(index, 1);
        }
    } else {
        // Si falló, añadir si no estaba
        if (index < 0) {
            estadoApp.preguntasFalladas.push(pregunta);
        }
    }
    
    guardarFalladas();
    actualizarEstadisticasDashboard();
}

// Wrapper de compatibilidad — el código antiguo a veces llama a esta función
function agregarAFalladas(pregunta) {
    actualizarEstadoFalladaEnMemoria(pregunta, false);
}

function renderizarPreguntasFalladas() {
    console.log('=== INICIO renderizarPreguntasFalladas ===');
    console.log('Cantidad falladas:', estadoApp.preguntasFalladas.length);
    
    const container = document.getElementById('listaFalladas');
    const mensajeVacio = document.getElementById('mensajeVacioFalladas');
    
    if (!container || !mensajeVacio) {
        console.error('ERROR: No se encuentran los elementos');
        return;
    }
    
    if (estadoApp.preguntasFalladas.length === 0) {
        console.log('Mostrando mensaje vacío');
        container.innerHTML = '';
        container.style.display = 'none';
        mensajeVacio.style.display = 'block';
        return;
    }
    
    console.log('Renderizando', estadoApp.preguntasFalladas.length, 'preguntas falladas');
    mensajeVacio.style.display = 'none';
    container.style.display = 'block';
    container.innerHTML = '';
    container.className = 'lista-guardadas';
    
    estadoApp.preguntasFalladas.forEach((pregunta, index) => {
        const div = document.createElement('div');
        div.className = 'pregunta-guardada';
        
        const letras = ['A', 'B', 'C'];
        const opcionesHTML = pregunta.opciones.map((op, i) => {
            const esCorrecta = i === pregunta.correcta;
            const estilo = esCorrecta ? 'color: #10b981; font-weight: 600;' : '';
            return `<div style="padding: 0.25rem 0; ${estilo}">${letras[i]}. ${op} ${esCorrecta ? '✓' : ''}</div>`;
        }).join('');
        
        div.innerHTML = `
            <div class="pregunta-guardada-header">
                <span class="pregunta-guardada-tema">${pregunta.temaNombre || 'Tema desconocido'}</span>
                <button class="btn-eliminar" onclick="eliminarFallada(${index})">🗑️</button>
            </div>
            <div style="margin-bottom: 0.75rem; font-weight: 500;">${pregunta.texto}</div>
            <div style="font-size: 0.9rem; margin-bottom: 0.75rem;">
                ${opcionesHTML}
            </div>
            <div style="font-size: 0.85rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 0.5rem; line-height: 1.6;">
                ${pregunta.explicacion}
            </div>
        `;
        container.appendChild(div);
    });
    
    // Botón para repasar
    const btnRepasar = document.createElement('button');
    btnRepasar.className = 'btn-primary btn-large';
    btnRepasar.style.marginTop = '2rem';
    btnRepasar.textContent = `Repasar ${estadoApp.preguntasFalladas.length} preguntas falladas`;
    btnRepasar.onclick = iniciarRepasarFalladas;
    container.appendChild(btnRepasar);
    
    console.log('=== FIN renderizarPreguntasFalladas ===');
}

function iniciarRepasarFalladas() {
    if (estadoApp.preguntasFalladas.length === 0) {
        alert('No tienes preguntas falladas');
        return;
    }
    
    estadoApp.modo = 'estudio';
    estadoApp.preguntasActuales = mezclarArray([...estadoApp.preguntasFalladas]);
    estadoApp.indicePregunta = 0;
    estadoApp.respuestas = [];
    
    iniciarTest();
}

function eliminarFallada(index) {
    // En el nuevo modelo, una pregunta deja de estar fallada cuando la aciertas.
    // Permitimos quitarla manualmente del listado local pero avisamos.
    if (confirm('¿Quitar esta pregunta del listado?\n\nNota: si la vuelves a fallar, reaparecerá. Para "olvidarla" definitivamente, respóndela bien en un test.')) {
        estadoApp.preguntasFalladas.splice(index, 1);
        guardarFalladas();
        renderizarPreguntasFalladas();
        actualizarEstadisticasDashboard();
    }
}

function limpiarFalladas() {
    if (confirm('¿Vaciar el listado de falladas?\n\nNota: solo se vacía la vista actual. Las preguntas reaparecerán si las vuelves a fallar. Para "olvidarlas" definitivamente, respóndelas bien en un test.')) {
        estadoApp.preguntasFalladas = [];
        guardarFalladas();
        renderizarPreguntasFalladas();
        actualizarEstadisticasDashboard();
    }
}

// ============================================
// ESTADÍSTICAS
// ============================================
async function renderizarEstadisticasDetalladas() {
    const container = document.getElementById('statsDetalladas');
    container.innerHTML = '';
    
    const headerDiv = document.createElement('div');
    headerDiv.style.cssText = 'display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;';
    headerDiv.innerHTML = `
        <h3 style="margin: 0;">Progreso por tema</h3>
        <button class="btn-secondary" onclick="resetearTodoElProgreso()">
            🔄 Resetear todo
        </button>
    `;
    container.appendChild(headerDiv);
    
    // Cargar medias globales por tema (una sola query)
    let statsGlobalesPorTema = {};
    try {
        if (typeof obtenerStatsGlobalesPorTema === 'function') {
            statsGlobalesPorTema = await obtenerStatsGlobalesPorTema();
        }
    } catch (e) {
        console.warn('No se pudo cargar comparativa global:', e);
    }
    
    temas.forEach(tema => {
        const stats = estadoApp.estadisticas[tema.id] || { respondidas: 0, correctas: 0 };
        const preguntasVistasDelTema = estadoApp.preguntasVistas.filter(id => 
            id.startsWith(tema.id + '-')
        ).length;
        
        const porcentaje = stats.respondidas > 0 
            ? Math.round((stats.correctas / stats.respondidas) * 100)
            : 0;
        
        const icono = tema.icono || '📚';
        const stG = statsGlobalesPorTema[tema.id];
        
        // HTML de comparativa global
        let htmlComparativa = '';
        if (stG && stG.total >= 5) {
            const diff = porcentaje - stG.porcentaje;
            let etiquetaDiff = '';
            if (stats.respondidas > 0) {
                if (diff > 5) etiquetaDiff = `<span class="diff-mejor">+${diff}% sobre la media</span>`;
                else if (diff < -5) etiquetaDiff = `<span class="diff-peor">${diff}% bajo la media</span>`;
                else etiquetaDiff = `<span class="diff-neutro">en la media</span>`;
            }
            htmlComparativa = `
                <div class="tema-stat-comparativa">
                    Media global: ${stG.porcentaje}% ${etiquetaDiff}
                </div>
            `;
        }
        
        const div = document.createElement('div');
        div.className = 'tema-stat-card';
        div.innerHTML = `
            <div class="tema-stat-header">
                <div class="tema-stat-nombre"><span style="font-size: 1.5em; margin-right: 0.5rem;">${icono}</span>${tema.nombre}</div>
                <div class="tema-stat-porcentaje">${porcentaje}%</div>
            </div>
            <div class="tema-stat-barra">
                <div class="tema-stat-progreso" style="width: ${porcentaje}%"></div>
            </div>
            <div class="tema-stat-detalles">
                <span>Vistas: ${preguntasVistasDelTema} / ${tema.preguntas.length}</span>
                <span>Respondidas: ${stats.respondidas}</span>
                <span>Correctas: ${stats.correctas}</span>
            </div>
            ${htmlComparativa}
            <button class="btn-secondary" style="margin-top: 0.75rem; width: 100%;" onclick="resetearProgresoDeTema(${tema.id})">
                Resetear tema
            </button>
        `;
        
        container.appendChild(div);
    });
}

function actualizarEstadisticaPregunta(temaId, esCorrecta) {
    if (!estadoApp.estadisticas[temaId]) {
        estadoApp.estadisticas[temaId] = { respondidas: 0, correctas: 0 };
    }
    
    estadoApp.estadisticas[temaId].respondidas++;
    if (esCorrecta) {
        estadoApp.estadisticas[temaId].correctas++;
    }
    
    guardarEstadisticas();
}

function resetearProgresoDeTema(temaId) {
    if (confirm('¿Resetear el progreso de este tema?')) {
        estadoApp.preguntasVistas = estadoApp.preguntasVistas.filter(id => 
            !id.startsWith(temaId + '-')
        );
        
        estadoApp.estadisticas[temaId] = { respondidas: 0, correctas: 0 };
        
        guardarPreguntasVistas();
        guardarEstadisticas();
        renderizarEstadisticasDetalladas();
    }
}

function resetearTodoElProgreso() {
    if (confirm('¿Resetear TODO el progreso?')) {
        estadoApp.preguntasVistas = [];
        estadoApp.estadisticas = {};
        
        guardarPreguntasVistas();
        guardarEstadisticas();
        renderizarEstadisticasDetalladas();
        actualizarEstadisticasDashboard();
        
        alert('Progreso reseteado');
    }
}

function resetearPreguntasVistas(temasIds) {
    temasIds.forEach(temaId => {
        estadoApp.preguntasVistas = estadoApp.preguntasVistas.filter(id => 
            !id.startsWith(temaId + '-')
        );
    });
    guardarPreguntasVistas();
}

// ============================================
// CRONÓMETRO
// ============================================
function iniciarCronometro(segundos) {
    let tiempoRestante = segundos;
    
    function actualizar() {
        const minutos = Math.floor(tiempoRestante / 60);
        const segs = tiempoRestante % 60;
        document.getElementById('cronometro').textContent = 
            `${minutos}:${segs.toString().padStart(2, '0')}`;
        
        if (tiempoRestante <= 0) {
            detenerCronometro();
            alert('¡Tiempo agotado!');
            finalizarTest();
        }
        
        tiempoRestante--;
    }
    
    actualizar();
    estadoApp.intervaloTiempo = setInterval(actualizar, 1000);
}

function detenerCronometro() {
    if (estadoApp.intervaloTiempo) {
        clearInterval(estadoApp.intervaloTiempo);
        estadoApp.intervaloTiempo = null;
    }
}

// ============================================
// UTILIDADES
// ============================================
function mezclarArray(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}
