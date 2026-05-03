// ===== VARIABLES =====

let temaActual = null;
let preguntasPendientes = [];
let preguntaActual = null;
let aciertos = 0;
let fallos = 0;
let modoFalladas = false;
let preguntasFalladas = [];
let historialSesion = []; // {pregunta, esCorrecta}
let historialNavegacion = []; // preguntas ya mostradas (para botón anterior)
let modoRevision = false; // true cuando estamos viendo una pregunta anterior

// ===== ELEMENTOS HTML =====

const barraProgreso    = document.getElementById("barraProgreso");
const listaTemas       = document.getElementById("listaTemas");
const seccionTemas     = document.getElementById("temas");
const seccionTest      = document.getElementById("test");
const seccionResumen   = document.getElementById("resumenFinal");
const seccionDashboard = document.getElementById("dashboard");
const preguntaDiv      = document.getElementById("pregunta");
const opcionesDiv      = document.getElementById("opciones");
const progresoDiv      = document.getElementById("progreso");
const explicacionBox   = document.getElementById("explicacion-box");
const siguienteBtn     = document.getElementById("siguienteBtn");
const anteriorBtn      = document.getElementById("anteriorBtn");
const volverBtn        = document.getElementById("volverBtn");
const reiniciarBtn     = document.getElementById("reiniciarBtn");
const toast            = document.getElementById("toast");

// Modal modo
const modalModo        = document.getElementById("modalModo");
const modalNombreTema  = document.getElementById("modalNombreTema");
const modoBtnFalladas  = document.getElementById("modoBtnFalladas");
const modalCancelar    = document.getElementById("modalCancelar");

// Header
const dashboardBtn     = document.getElementById("dashboardBtn");
const temaToggle       = document.getElementById("temaToggle");
const resetTodoBtn     = document.getElementById("resetTodoBtn");
const cerrarDashboard  = document.getElementById("cerrarDashboard");

// Resumen
const resumenContenido  = document.getElementById("resumenContenido");
const resumenVolverBtn  = document.getElementById("resumenVolverBtn");
const resumenRepasarBtn = document.getElementById("resumenRepasarBtn");
const resumenReiniciarBtn = document.getElementById("resumenReiniciarBtn");

// ===== ICONOS =====

const iconosTema = ["📘","📗","📙","📕","📓","📔","📒","📃","📄","📑"];

// ===== TEMA OSCURO =====

function initTema() {
    const guardado = localStorage.getItem("tema_oscuro");
    const preferOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const oscuro = guardado !== null ? guardado === "true" : preferOscuro;
    document.documentElement.setAttribute("data-theme", oscuro ? "dark" : "light");
    temaToggle.textContent = oscuro ? "☀️" : "🌙";
}

temaToggle.onclick = () => {
    const actual = document.documentElement.getAttribute("data-theme");
    const nuevo = actual === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nuevo);
    localStorage.setItem("tema_oscuro", nuevo === "dark");
    temaToggle.textContent = nuevo === "dark" ? "☀️" : "🌙";
};

// ===== TOAST =====

let toastTimer = null;

function mostrarToast(msg, duracion = 2800) {
    toast.textContent = msg;
    toast.classList.remove("oculto");
    toast.classList.add("visible");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("visible");
        setTimeout(() => toast.classList.add("oculto"), 320);
    }, duracion);
}

// ===== RESET TODO =====

resetTodoBtn.onclick = () => {
    const ok = confirm("⚠️ ¿Seguro que quieres borrar TODO el progreso de todos los temas? Esta acción no se puede deshacer.");
    if (!ok) return;
    temas.forEach(t => {
        localStorage.removeItem("tema_" + t.id);
        localStorage.removeItem("stats_" + t.id);
        localStorage.removeItem("falladas_" + t.id);
    });
    cargarTemas();
    mostrarToast("🗑️ Todo el progreso ha sido borrado");
};

// ===== DASHBOARD =====

dashboardBtn.onclick = () => {
    seccionTemas.classList.add("oculto");
    seccionDashboard.classList.remove("oculto");
    renderDashboard();
};

cerrarDashboard.onclick = () => {
    seccionDashboard.classList.add("oculto");
    seccionTemas.classList.remove("oculto");
};

function renderDashboard() {
    let totalPreguntas = 0, totalRealizadas = 0, totalAciertos = 0, totalRespondidas = 0, totalIntentos = 0;
    let temasCompletados = 0;

    temas.forEach(t => {
        const guardado = JSON.parse(localStorage.getItem("tema_" + t.id));
        const restantes = guardado !== null ? guardado.length : t.preguntas.length;
        const realizadas = t.preguntas.length - restantes;
        totalPreguntas += t.preguntas.length;
        totalRealizadas += realizadas;
        if (realizadas === t.preguntas.length) temasCompletados++;

        const stats = JSON.parse(localStorage.getItem("stats_" + t.id));
        if (stats) {
            totalAciertos += stats.totalAciertos;
            totalRespondidas += stats.totalPreguntasRespondidas;
            totalIntentos += stats.intentos;
        }
    });

    const mediaGlobal = totalRespondidas > 0 ? Math.round((totalAciertos / totalRespondidas) * 100) : 0;
    const progGlobal = totalPreguntas > 0 ? Math.round((totalRealizadas / totalPreguntas) * 100) : 0;

    const filas = temas.map(t => {
        const guardado = JSON.parse(localStorage.getItem("tema_" + t.id));
        const restantes = guardado !== null ? guardado.length : t.preguntas.length;
        const realizadas = t.preguntas.length - restantes;
        const pct = Math.round((realizadas / t.preguntas.length) * 100);
        const stats = JSON.parse(localStorage.getItem("stats_" + t.id));
        const mejor = stats ? stats.mejorPorcentaje : null;
        const intentos = stats ? stats.intentos : 0;

        let badgeClass = "badge-neutro";
        let badgeTexto = "—";
        if (mejor !== null) {
            badgeTexto = mejor + "%";
            badgeClass = mejor >= 80 ? "badge-alto" : mejor >= 60 ? "badge-medio" : "badge-bajo";
        }

        return `
            <tr>
                <td style="font-weight:600;font-size:13px;">${t.nombre}</td>
                <td>
                    <div class="mini-barra-wrap">
                        <div class="mini-barra-bg">
                            <div class="mini-barra-fill" style="width:${pct}%"></div>
                        </div>
                        <span style="font-size:12px;color:var(--texto-suave);white-space:nowrap">${pct}%</span>
                    </div>
                </td>
                <td><span class="badge-pct ${badgeClass}">${badgeTexto}</span></td>
                <td style="color:var(--texto-suave);font-size:12px;">${intentos}</td>
            </tr>
        `;
    }).join("");

    document.getElementById("dashboardContenido").innerHTML = `
        <div class="dashboard-grid">
            <div class="dashboard-stat">
                <div class="dashboard-stat-valor">${progGlobal}%</div>
                <div class="dashboard-stat-label">Progreso total</div>
            </div>
            <div class="dashboard-stat">
                <div class="dashboard-stat-valor">${mediaGlobal}%</div>
                <div class="dashboard-stat-label">Acierto medio</div>
            </div>
            <div class="dashboard-stat">
                <div class="dashboard-stat-valor">${temasCompletados}</div>
                <div class="dashboard-stat-label">Temas completados</div>
            </div>
            <div class="dashboard-stat">
                <div class="dashboard-stat-valor">${totalIntentos}</div>
                <div class="dashboard-stat-label">Tests realizados</div>
            </div>
        </div>
        <table class="dashboard-tabla">
            <thead>
                <tr>
                    <th>Tema</th>
                    <th>Progreso</th>
                    <th>Mejor %</th>
                    <th>Tests</th>
                </tr>
            </thead>
            <tbody>${filas}</tbody>
        </table>
    `;
}

// ===== CARGAR TEMAS =====

function cargarTemas() {
    listaTemas.innerHTML = "";

    temas.forEach((tema, idx) => {
        const div = document.createElement("div");
        div.className = "tema-card";

        const guardado = localStorage.getItem("tema_" + tema.id);
        const restantes = guardado ? JSON.parse(guardado).length : tema.preguntas.length;
        const realizadas = tema.preguntas.length - restantes;
        const total = tema.preguntas.length;
        const porcentajeProgreso = total > 0 ? Math.round((realizadas / total) * 100) : 0;

        const stats = JSON.parse(localStorage.getItem("stats_" + tema.id));
        let statsPills = "";
        if (stats) {
            const media = stats.totalPreguntasRespondidas > 0
                ? Math.round((stats.totalAciertos / stats.totalPreguntasRespondidas) * 100) : 0;
            statsPills = `
                <div class="tema-stats">
                    <span class="stat-pill">🏆 Mejor: ${stats.mejorPorcentaje}%</span>
                    <span class="stat-pill">📊 Media: ${media}%</span>
                    <span class="stat-pill">🔁 ${stats.intentos} intento${stats.intentos !== 1 ? "s" : ""}</span>
                </div>
            `;
        }

        const icono = iconosTema[idx % iconosTema.length];

        div.innerHTML = `
            <div class="tema-card-inner">
                <div class="tema-icono">${icono}</div>
                <div class="tema-info">
                    <div class="tema-nombre">${tema.nombre}</div>
                    <div class="tema-progreso-texto">${realizadas} de ${total} preguntas completadas</div>
                    ${statsPills}
                </div>
                <div class="tema-mini-barra">
                    <div class="tema-mini-relleno" style="width:${porcentajeProgreso}%"></div>
                </div>
            </div>
        `;

        div.onclick = () => abrirModalModo(tema);
        listaTemas.appendChild(div);
    });
}

// ===== MODAL MODO =====

let temaSeleccionado = null;

function abrirModalModo(tema) {
    temaSeleccionado = tema;
    modalNombreTema.textContent = tema.nombre;

    const falladas = JSON.parse(localStorage.getItem("falladas_" + tema.id)) || [];
    const pendientes = JSON.parse(localStorage.getItem("tema_" + tema.id));
    const hayPendientes = pendientes !== null && pendientes.length > 0;

    // Deshabilitar opciones que no aplican
    modoBtnFalladas.disabled = falladas.length === 0;
    document.querySelector('[data-modo="pendientes"]').disabled = !hayPendientes;

    modalModo.classList.remove("oculto");
}

modalCancelar.onclick = () => {
    modalModo.classList.add("oculto");
    temaSeleccionado = null;
};

modalModo.addEventListener("click", (e) => {
    if (e.target === modalModo) {
        modalModo.classList.add("oculto");
        temaSeleccionado = null;
    }
});

document.querySelectorAll(".modo-btn").forEach(btn => {
    btn.onclick = () => {
        if (btn.disabled) return;
        const modo = btn.dataset.modo;
        modalModo.classList.add("oculto");
        iniciarTema(temaSeleccionado, modo);
    };
});

// ===== INICIAR TEMA =====

function iniciarTema(tema, modo = "completo") {
    temaActual = tema;
    aciertos = 0;
    fallos = 0;
    historialSesion = [];
    historialNavegacion = [];
    modoRevision = false;

    if (modo === "falladas") {
        modoFalladas = true;
        preguntasFalladas = JSON.parse(localStorage.getItem("falladas_" + tema.id)) || [];
        preguntasPendientes = [];
    } else {
        modoFalladas = false;
        preguntasFalladas = JSON.parse(localStorage.getItem("falladas_" + tema.id)) || [];

        if (modo === "completo") {
            preguntasPendientes = tema.preguntas.map((_, i) => i);
            localStorage.setItem("tema_" + tema.id, JSON.stringify(preguntasPendientes));
        } else {
            // pendientes
            const guardado = localStorage.getItem("tema_" + tema.id);
            preguntasPendientes = guardado ? JSON.parse(guardado) : tema.preguntas.map((_, i) => i);
        }
    }

    seccionTemas.classList.add("oculto");
    seccionDashboard.classList.add("oculto");
    seccionResumen.classList.add("oculto");
    seccionTest.classList.remove("oculto");

    siguientePregunta();
}

// ===== SIGUIENTE PREGUNTA =====

function siguientePregunta() {
    explicacionBox.classList.add("oculto");
    modoRevision = false;

    if (modoFalladas) {
        if (preguntasFalladas.length === 0) { finalizarTest(); return; }
        const ri = Math.floor(Math.random() * preguntasFalladas.length);
        preguntaActual = preguntasFalladas[ri];
        preguntasFalladas.splice(ri, 1);
        localStorage.setItem("falladas_" + temaActual.id, JSON.stringify(preguntasFalladas));
    } else {
        if (preguntasPendientes.length === 0) {
            finalizarTest();
            localStorage.removeItem("tema_" + temaActual.id);
            return;
        }
        const ri = Math.floor(Math.random() * preguntasPendientes.length);
        const pIdx = preguntasPendientes[ri];
        preguntaActual = temaActual.preguntas[pIdx];
        preguntasPendientes.splice(ri, 1);
        localStorage.setItem("tema_" + temaActual.id, JSON.stringify(preguntasPendientes));
    }

    mostrarPregunta();
}

// ===== MOSTRAR PREGUNTA =====

function mostrarPregunta(revision = false) {
    // Animar salida/entrada
    preguntaDiv.style.animation = "none";
    opcionesDiv.style.animation = "none";
    requestAnimationFrame(() => {
        preguntaDiv.style.animation = "";
        opcionesDiv.style.animation = "";
    });

    preguntaDiv.textContent = preguntaActual.texto;
    opcionesDiv.innerHTML = "";
    explicacionBox.classList.add("oculto");

    const total = modoFalladas
        ? (aciertos + fallos + preguntasFalladas.length + 1)
        : temaActual.preguntas.length;

    const completadas = modoFalladas
        ? (aciertos + fallos)
        : (total - preguntasPendientes.length - 1);

    const porcentaje = total > 0 ? ((completadas) / total) * 100 : 0;
    barraProgreso.style.width = porcentaje + "%";

    const numActual = modoFalladas
        ? (aciertos + fallos + 1)
        : (temaActual.preguntas.length - preguntasPendientes.length);

    const numTotal = modoFalladas
        ? (aciertos + fallos + preguntasFalladas.length + 1)
        : temaActual.preguntas.length;

    progresoDiv.innerHTML = `
        <span class="stat-badge">📋 ${numActual} / ${numTotal}</span>
        <span class="stat-badge aciertos">✔ ${aciertos}</span>
        <span class="stat-badge fallos">✗ ${fallos}</span>
        <span class="stat-badge falladas">⚑ ${preguntasFalladas.length}</span>
    `;

    if (revision) {
        // Modo revisión: mostrar pregunta ya respondida con resultado bloqueado
        const entrada = historialNavegacion[historialNavegacion.length - 1];
        const opcionesOriginales = entrada.opcionesMezcladas;

        opcionesOriginales.forEach((op) => {
            const div = document.createElement("div");
            div.className = "opcion";
            div.innerHTML = `<span>${op.texto}</span>`;

            if (op.esCorrecta) div.classList.add("correcta");
            else if (op.elegida) div.classList.add("incorrecta");

            opcionesDiv.appendChild(div);
        });

        if (entrada.pregunta.explicacion) {
            explicacionBox.innerHTML = `<div class="exp-titulo">💡 Explicación</div>${entrada.pregunta.explicacion}`;
            explicacionBox.classList.remove("oculto");
        }

        siguienteBtn.classList.remove("oculto");
        siguienteBtn.textContent = "Siguiente →";
        anteriorBtn.classList.toggle("oculto", historialNavegacion.length <= 1);
        return;
    }

    // Modo normal: nueva pregunta
    let opcionesMezcladas = preguntaActual.opciones.map((texto, index) => ({
        texto,
        esCorrecta: index === preguntaActual.correcta,
        elegida: false
    }));
    opcionesMezcladas.sort(() => Math.random() - 0.5);

    // Guardar en historial de navegación
    historialNavegacion.push({ pregunta: preguntaActual, opcionesMezcladas, respondida: false });
    anteriorBtn.classList.toggle("oculto", historialNavegacion.length <= 1);

    opcionesMezcladas.forEach((op, i) => {
        const div = document.createElement("div");
        div.className = "opcion";
        div.dataset.index = i;
        div.innerHTML = `<span>${op.texto}</span>`;
        div.onclick = () => responder(op.esCorrecta, div, op, opcionesMezcladas);
        opcionesDiv.appendChild(div);
    });

    siguienteBtn.classList.add("oculto");
    siguienteBtn.textContent = "Siguiente →";
}

// ===== RESPONDER =====

function responder(esCorrecta, elemento, opObj, opcionesMezcladas) {
    document.querySelectorAll(".opcion").forEach(op => op.onclick = null);

    // Marcar la opción elegida en el historial
    opObj.elegida = true;
    const entrada = historialNavegacion[historialNavegacion.length - 1];
    if (entrada) entrada.respondida = true;

    if (esCorrecta) {
        elemento.classList.add("correcta");
        aciertos++;

        // Registrar en historial
        historialSesion.push({ pregunta: preguntaActual, esCorrecta: true });

        // Actualizar contadores
        progresoDiv.innerHTML = `
            <span class="stat-badge">📋 ${aciertos + fallos} / ${modoFalladas ? (aciertos + fallos + preguntasFalladas.length) : temaActual.preguntas.length}</span>
            <span class="stat-badge aciertos">✔ ${aciertos}</span>
            <span class="stat-badge fallos">✗ ${fallos}</span>
            <span class="stat-badge falladas">⚑ ${preguntasFalladas.length}</span>
        `;

        // Avance automático tras breve pausa
        elemento.style.transition = "background 0.15s";
        setTimeout(() => {
            siguientePregunta();
        }, 700);

    } else {
        elemento.classList.add("incorrecta");
        fallos++;

        if (!modoFalladas) {
            preguntasFalladas.push(preguntaActual);
            localStorage.setItem("falladas_" + temaActual.id, JSON.stringify(preguntasFalladas));
        }

        // Mostrar correcta
        document.querySelectorAll(".opcion").forEach(op => {
            if (op.querySelector("span").textContent === preguntaActual.opciones[preguntaActual.correcta]) {
                op.classList.add("correcta");
            }
        });

        // Registrar en historial
        historialSesion.push({ pregunta: preguntaActual, esCorrecta: false });

        // Mostrar explicación si existe
        if (preguntaActual.explicacion) {
            explicacionBox.innerHTML = `<div class="exp-titulo">💡 Explicación</div>${preguntaActual.explicacion}`;
            explicacionBox.classList.remove("oculto");
        }

        // Actualizar contadores
        progresoDiv.innerHTML = `
            <span class="stat-badge">📋 ${aciertos + fallos} / ${modoFalladas ? (aciertos + fallos + preguntasFalladas.length) : temaActual.preguntas.length}</span>
            <span class="stat-badge aciertos">✔ ${aciertos}</span>
            <span class="stat-badge fallos">✗ ${fallos}</span>
            <span class="stat-badge falladas">⚑ ${preguntasFalladas.length}</span>
        `;

        siguienteBtn.classList.remove("oculto");
    }
}

// ===== ESTADÍSTICAS =====

function guardarEstadisticasTema() {
    const totalRespondidas = aciertos + fallos;
    const porcentaje = totalRespondidas > 0 ? Math.round((aciertos / totalRespondidas) * 100) : 0;

    const clave = "stats_" + temaActual.id;
    const stats = JSON.parse(localStorage.getItem(clave)) || {
        intentos: 0,
        mejorPorcentaje: 0,
        ultimoPorcentaje: 0,
        totalPreguntasRespondidas: 0,
        totalAciertos: 0
    };

    stats.intentos++;
    stats.ultimoPorcentaje = porcentaje;
    if (porcentaje > stats.mejorPorcentaje) stats.mejorPorcentaje = porcentaje;
    stats.totalPreguntasRespondidas += totalRespondidas;
    stats.totalAciertos += aciertos;

    localStorage.setItem(clave, JSON.stringify(stats));
}

// ===== FINALIZAR =====

function finalizarTest() {
    guardarEstadisticasTema();

    const totalRespondidas = aciertos + fallos;
    const porcentaje = totalRespondidas > 0 ? Math.round((aciertos / totalRespondidas) * 100) : 0;

    const emoji   = porcentaje >= 80 ? "🎉" : porcentaje >= 60 ? "💪" : "📖";
    const mensaje = porcentaje >= 80 ? "¡Excelente resultado!" : porcentaje >= 60 ? "¡Buen trabajo!" : "Sigue practicando";
    const pctClass = porcentaje >= 80 ? "pct-verde" : porcentaje >= 60 ? "pct-naranja" : "pct-rojo";

    // Preguntas falladas en esta sesión
    const falladasSesion = historialSesion.filter(h => !h.esCorrecta);

    const listaFalladas = falladasSesion.length > 0
        ? falladasSesion.map(h => `
            <div class="resumen-pregunta-item fallada">
                <div class="rp-texto">${h.pregunta.texto}</div>
                <div class="rp-correcta">✔ Respuesta correcta: ${h.pregunta.opciones[h.pregunta.correcta]}</div>
            </div>
          `).join("")
        : `<div class="resumen-sin-falladas">🎯 ¡Ningún fallo en esta sesión!</div>`;

    resumenContenido.innerHTML = `
        <div class="resumen-header">
            <div class="resumen-emoji">${emoji}</div>
            <div class="resumen-titulo">${mensaje}</div>
            <div class="resumen-pct ${pctClass}">${porcentaje}%</div>
            <div class="resumen-desglose">
                ✔ ${aciertos} aciertos &nbsp;·&nbsp; ✗ ${fallos} fallos &nbsp;·&nbsp; ${totalRespondidas} preguntas respondidas
            </div>
        </div>
        <div class="resumen-seccion-titulo">📋 Resumen de preguntas falladas</div>
        ${listaFalladas}
    `;

    // Mostrar botón repasar si hay falladas guardadas
    const falladasGuardadas = JSON.parse(localStorage.getItem("falladas_" + temaActual.id)) || [];
    if (falladasGuardadas.length > 0) {
        resumenRepasarBtn.classList.remove("oculto");
    } else {
        resumenRepasarBtn.classList.add("oculto");
    }

    seccionTest.classList.add("oculto");
    seccionResumen.classList.remove("oculto");
}

// ===== BOTONES TEST =====

siguienteBtn.onclick = () => {
    if (modoRevision) {
        // En revisión: volver al flujo normal avanzando a la siguiente pregunta nueva
        modoRevision = false;
        siguientePregunta();
    } else {
        siguientePregunta();
    }
};

volverBtn.onclick = () => {
    seccionTest.classList.add("oculto");
    seccionResumen.classList.add("oculto");
    seccionTemas.classList.remove("oculto");
    cargarTemas();
};

reiniciarBtn.onclick = () => {
    localStorage.removeItem("tema_" + temaActual.id);
    preguntasPendientes = temaActual.preguntas.map((_, i) => i);
    modoFalladas = false;
    aciertos = 0;
    fallos = 0;
    historialSesion = [];
    historialNavegacion = [];
    modoRevision = false;
    siguientePregunta();
    mostrarToast("↺ Test reiniciado");
};

anteriorBtn.onclick = () => {
    if (historialNavegacion.length <= 1) return;

    // Sacar la actual del historial para volver a la anterior
    historialNavegacion.pop();
    const entrada = historialNavegacion[historialNavegacion.length - 1];
    preguntaActual = entrada.pregunta;
    modoRevision = true;

    mostrarPregunta(true);
};

// ===== BOTONES RESUMEN =====

resumenVolverBtn.onclick = () => {
    seccionResumen.classList.add("oculto");
    seccionTemas.classList.remove("oculto");
    cargarTemas();
};

resumenRepasarBtn.onclick = () => {
    seccionResumen.classList.add("oculto");
    iniciarTema(temaActual, "falladas");
};

resumenReiniciarBtn.onclick = () => {
    seccionResumen.classList.add("oculto");
    iniciarTema(temaActual, "completo");
};

// ===== ATAJOS DE TECLADO =====

document.addEventListener("keydown", (e) => {
    // En test activo
    if (!seccionTest.classList.contains("oculto")) {
        const opciones = document.querySelectorAll(".opcion");

        // 1-4 para seleccionar opción
        if (["1","2","3","4"].includes(e.key) && opciones.length) {
            const idx = parseInt(e.key) - 1;
            if (opciones[idx] && opciones[idx].onclick) {
                opciones[idx].click();
            }
        }

        // Enter o espacio para "Siguiente"
        if ((e.key === "Enter" || e.key === " ") && !siguienteBtn.classList.contains("oculto")) {
            e.preventDefault();
            siguienteBtn.click();
        }

        // ArrowLeft para "Anterior"
        if (e.key === "ArrowLeft" && !anteriorBtn.classList.contains("oculto")) {
            anteriorBtn.click();
        }

        // Escape para volver
        if (e.key === "Escape") {
            seccionTest.classList.add("oculto");
            seccionTemas.classList.remove("oculto");
            cargarTemas();
        }
    }

    // Cerrar modal con Escape
    if (e.key === "Escape" && !modalModo.classList.contains("oculto")) {
        modalModo.classList.add("oculto");
    }
});

// ===== INICIAR =====

initTema();
cargarTemas();

// ===== SERVICE WORKER =====
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
        .then(() => console.log("SW registrado"))
        .catch(err => console.log("Error SW:", err));
}
