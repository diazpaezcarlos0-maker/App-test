// ============================================================
// OPOTEST · Flashcards (repaso espaciado tipo Anki, algoritmo SM-2)
// Depende de: sb, currentUser, window.convocatoriaActualId, temas,
//             mostrarPantalla()  (todos globales del resto de la app)
// ============================================================

let misFlashcards = [];                 // todas las tarjetas del usuario (cache)
let sesionRepaso = { cards: [], indice: 0, temaId: null, temaNombre: '' };
let tarjetaEditando = null;             // id de la tarjeta en edición (o null = nueva)

// Escape propio por si escaparHtml() aún no se ha cargado
function fcEscape(txt) {
    if (typeof escaparHtml === 'function') return escaparHtml(txt);
    const d = document.createElement('div');
    d.textContent = (txt == null ? '' : String(txt));
    return d.innerHTML;
}

// ¿El usuario actual es administrador? (puede crear tarjetas oficiales)
function esAdmin() {
    return !!(typeof userProfile !== 'undefined' && userProfile && userProfile.is_admin === true);
}

// ------------------------------------------------------------
// CARGA DE DATOS
// Contenido: tarjetas OFICIALES (de todos) + las PROPIAS.
// Progreso (curva del olvido) INDIVIDUAL por usuario, en otra tabla.
// ------------------------------------------------------------
async function cargarFlashcards() {
    if (!currentUser) { misFlashcards = []; return; }
    try {
        // 1) Contenido visible: oficiales + propias
        let q = sb.from('flashcards').select('*')
            .or(`es_oficial.eq.true,user_id.eq.${currentUser.id}`);
        if (window.convocatoriaActualId) {
            q = q.eq('convocatoria_id', window.convocatoriaActualId);
        }
        const { data: contenido, error: e1 } = await q;
        if (e1) throw e1;

        // 2) Progreso individual
        const { data: progreso, error: e2 } = await sb.from('flashcard_progress')
            .select('*').eq('user_id', currentUser.id);
        if (e2) throw e2;

        const mapaProg = {};
        (progreso || []).forEach(p => { mapaProg[p.flashcard_id] = p; });

        // 3) Cruzar: cada tarjeta lleva su estado de repaso en _prog
        misFlashcards = (contenido || []).map(card => {
            const p = mapaProg[card.id];
            card._prog = p
                ? { id: p.id, repeticiones: p.repeticiones, factor_facilidad: p.factor_facilidad, intervalo: p.intervalo, due: p.due }
                : { id: null, repeticiones: 0, factor_facilidad: 2.5, intervalo: 0, due: new Date().toISOString() };
            return card;
        });
    } catch (e) {
        console.error('Error cargando flashcards:', e);
        misFlashcards = [];
    }
}

function cardsDeTema(temaId) {
    return misFlashcards.filter(c => String(c.tema_id) === String(temaId));
}

function estaPendiente(card) {
    return new Date(card._prog.due).getTime() <= Date.now();
}

// ------------------------------------------------------------
// PANTALLA: MAZOS POR TEMA
// ------------------------------------------------------------
async function mostrarMazos() {
    mostrarPantalla('mazoTemas');
    const cont = document.getElementById('mazosLista');
    if (cont) cont.innerHTML = '<p style="text-align:center;color:var(--text-secondary);padding:2rem;">Cargando tu mazo…</p>';
    await cargarFlashcards();
    renderizarMazos();
}

function renderizarMazos() {
    const cont = document.getElementById('mazosLista');
    if (!cont) return;
    cont.innerHTML = '';

    if (!Array.isArray(temas) || temas.length === 0) {
        cont.innerHTML = '<p style="text-align:center;color:var(--text-secondary);padding:2rem;">Primero selecciona una convocatoria para ver los temas.</p>';
        return;
    }

    temas.forEach(tema => {
        const cards = cardsDeTema(tema.id);
        const total = cards.length;
        const nuevas = cards.filter(c => !c._prog.id).length;
        const pendientes = cards.filter(c => c._prog.id && estaPendiente(c)).length;
        const paraHoy = cards.filter(estaPendiente).length;
        const oficiales = cards.filter(c => c.es_oficial).length;
        const icono = tema.icono || '🃏';

        const div = document.createElement('div');
        div.className = 'tema-checkbox mazo-item';
        div.setAttribute('role', 'button');
        div.tabIndex = 0;

        const chip = paraHoy > 0
            ? `<span class="mazo-chip activo">${paraHoy} para repasar</span>`
            : (total > 0 ? '<span class="mazo-chip">Al día ✓</span>' : '<span class="mazo-chip vacio">Sin tarjetas</span>');

        div.innerHTML = `
            <div class="tema-info">
                <div class="tema-nombre"><span style="font-size:1.3em;margin-right:.5rem;">${fcEscape(icono)}</span>${fcEscape(tema.nombre)}</div>
                <div class="tema-stats">${total} tarjetas · ${nuevas} nuevas · ${pendientes} pendientes${oficiales ? ` · ${oficiales} oficiales` : ''}</div>
            </div>
            ${chip}
        `;
        const arrancar = () => {
            if (total === 0) {
                if (confirm('Este tema no tiene tarjetas todavía. ¿Quieres crear una?')) nuevaTarjeta(tema.id);
                return;
            }
            iniciarRepaso(tema.id);
        };
        div.addEventListener('click', arrancar);
        div.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); arrancar(); } });
        cont.appendChild(div);
    });
}

// ------------------------------------------------------------
// SESIÓN DE REPASO
// ------------------------------------------------------------
function iniciarRepaso(temaId) {
    const tema = temas.find(t => String(t.id) === String(temaId));
    const pendientes = cardsDeTema(temaId).filter(estaPendiente);

    if (pendientes.length === 0) {
        alert('¡No tienes tarjetas pendientes en este tema por ahora! Vuelve más tarde o añade nuevas.');
        return;
    }

    // Mezclar
    const baraja = pendientes.slice();
    for (let i = baraja.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
    }

    sesionRepaso = { cards: baraja, indice: 0, temaId, temaNombre: tema ? tema.nombre : '' };
    mostrarPantalla('estudioFlashcards');
    mostrarTarjetaActual();
}

function mostrarTarjetaActual() {
    const card = sesionRepaso.cards[sesionRepaso.indice];
    const contenido = document.getElementById('flashcardContenido');
    const controles = document.getElementById('flashcardControles');
    const progreso = document.getElementById('flashcardProgreso');

    if (!card) { finalizarRepaso(); return; }

    if (progreso) {
        progreso.textContent = `${sesionRepaso.temaNombre} · ${sesionRepaso.indice + 1} / ${sesionRepaso.cards.length}`;
    }

    contenido.innerHTML = '';
    controles.innerHTML = '';

    if (card.tipo === 'test') {
        renderTarjetaTest(card, contenido, controles);
    } else {
        renderTarjetaBasica(card, contenido, controles);
    }
}

// --- Tarjeta básica (anverso / reverso) ---
function renderTarjetaBasica(card, contenido, controles) {
    const cara = document.createElement('div');
    cara.className = 'flashcard-cara anverso';
    cara.innerHTML = `<div class="flashcard-etiqueta">Anverso</div><div class="flashcard-texto">${fcEscape(card.anverso)}</div>`;
    contenido.appendChild(cara);

    const btnVoltear = document.createElement('button');
    btnVoltear.className = 'btn-primary btn-large';
    btnVoltear.textContent = 'Mostrar respuesta';
    btnVoltear.onclick = () => {
        const rev = document.createElement('div');
        rev.className = 'flashcard-cara reverso';
        rev.innerHTML = `<div class="flashcard-etiqueta">Reverso</div><div class="flashcard-texto">${fcEscape(card.reverso || '—')}</div>`;
        contenido.appendChild(rev);
        controles.innerHTML = '';
        controles.appendChild(barraCalificacion(card));
    };
    controles.appendChild(btnVoltear);
    controles.appendChild(barraGestion(card));
}

// --- Tarjeta tipo test ---
function renderTarjetaTest(card, contenido, controles) {
    const enun = document.createElement('div');
    enun.className = 'flashcard-cara anverso';
    enun.innerHTML = `<div class="flashcard-etiqueta">Pregunta</div><div class="flashcard-texto">${fcEscape(card.anverso)}</div>`;
    contenido.appendChild(enun);

    const opcionesBox = document.createElement('div');
    opcionesBox.className = 'flashcard-opciones';
    const letras = ['A', 'B', 'C', 'D'];
    const opciones = Array.isArray(card.opciones) ? card.opciones : [];

    opciones.forEach((op, i) => {
        const b = document.createElement('button');
        b.className = 'flashcard-opcion';
        b.innerHTML = `<span class="flashcard-opcion-letra">${letras[i] || (i + 1)}</span><span></span>`;
        b.querySelector('span:last-child').textContent = op;
        b.onclick = () => {
            opcionesBox.querySelectorAll('.flashcard-opcion').forEach(x => { x.disabled = true; });
            const correcta = card.respuesta_correcta;
            opcionesBox.querySelectorAll('.flashcard-opcion').forEach((x, idx) => {
                if (idx === correcta) x.classList.add('correcta');
            });
            if (i !== correcta) b.classList.add('incorrecta');

            if (card.reverso) {
                const exp = document.createElement('div');
                exp.className = 'flashcard-explicacion';
                exp.innerHTML = `<strong>Explicación:</strong> `;
                exp.appendChild(document.createTextNode(card.reverso));
                contenido.appendChild(exp);
            }
            controles.innerHTML = '';
            controles.appendChild(barraCalificacion(card));
        };
        opcionesBox.appendChild(b);
    });

    contenido.appendChild(opcionesBox);
    controles.appendChild(barraGestion(card));
}

// --- Barra de calificación SM-2 (4 botones) ---
function barraCalificacion(card) {
    const wrap = document.createElement('div');
    wrap.className = 'flashcard-calificacion';
    const botones = [
        { cal: 'again', txt: 'Otra vez', clase: 'cal-again', sub: vistaPrevia(card, 'again') },
        { cal: 'hard',  txt: 'Difícil',  clase: 'cal-hard',  sub: vistaPrevia(card, 'hard') },
        { cal: 'good',  txt: 'Bien',     clase: 'cal-good',  sub: vistaPrevia(card, 'good') },
        { cal: 'easy',  txt: 'Fácil',    clase: 'cal-easy',  sub: vistaPrevia(card, 'easy') }
    ];
    botones.forEach(b => {
        const btn = document.createElement('button');
        btn.className = 'btn-calificar ' + b.clase;
        btn.innerHTML = `<span>${b.txt}</span><small>${b.sub}</small>`;
        btn.onclick = () => calificarTarjeta(b.cal);
        wrap.appendChild(btn);
    });
    return wrap;
}

// Texto del intervalo que tocaría con cada botón (informativo)
function vistaPrevia(card, calidad) {
    const r = programarSRS(card, calidad);
    if (r.intervalo === 0) return '<10 min';
    if (r.intervalo === 1) return '1 día';
    if (r.intervalo < 30) return r.intervalo + ' días';
    const meses = Math.round(r.intervalo / 30);
    return meses + (meses === 1 ? ' mes' : ' meses');
}

// --- Barra editar / borrar (solo en tarjetas propias) ---
function barraGestion(card) {
    const wrap = document.createElement('div');
    wrap.className = 'flashcard-gestion';

    const esMia = currentUser && card.user_id === currentUser.id;

    if (card.es_oficial) {
        const tag = document.createElement('span');
        tag.className = 'flashcard-tag-oficial';
        tag.textContent = esMia ? '★ Oficial (tuya)' : '★ Oficial';
        wrap.appendChild(tag);
    }

    if (!esMia) return wrap; // no es tuya → no se puede editar/borrar

    const editar = document.createElement('button');
    editar.className = 'btn-mini';
    editar.innerHTML = '✏️ Editar';
    editar.onclick = () => editarTarjeta(card.id);
    const borrar = document.createElement('button');
    borrar.className = 'btn-mini btn-mini-danger';
    borrar.innerHTML = '🗑️ Borrar';
    borrar.onclick = () => eliminarTarjeta(card.id);
    wrap.appendChild(editar);
    wrap.appendChild(borrar);
    return wrap;
}

// ------------------------------------------------------------
// ALGORITMO SM-2 (curva del olvido, estilo Anki)
// ------------------------------------------------------------
function programarSRS(card, calidad) {
    const prog = card._prog || { repeticiones: 0, factor_facilidad: 2.5, intervalo: 0 };
    let ef = prog.factor_facilidad || 2.5;
    let rep = prog.repeticiones || 0;
    let intervalo = prog.intervalo || 0;
    let dueMs;

    if (calidad === 'again') {
        rep = 0;
        intervalo = 0;
        ef = Math.max(1.3, ef - 0.2);
        dueMs = Date.now() + 10 * 60 * 1000;             // se vuelve a ver en ~10 min
    } else {
        const deltaEF = { hard: -0.15, good: 0, easy: 0.15 };
        ef = Math.max(1.3, ef + deltaEF[calidad]);

        if (rep === 0) {
            intervalo = (calidad === 'easy') ? 4 : 1;     // primera vez bien: 1 día (fácil: 4)
        } else if (rep === 1) {
            intervalo = (calidad === 'hard') ? 3 : (calidad === 'easy') ? 7 : 4;
        } else {
            let mult = (calidad === 'hard') ? 1.2 : ef;
            if (calidad === 'easy') mult = ef * 1.3;
            intervalo = Math.max(1, Math.round(intervalo * mult));
        }
        rep += 1;
        dueMs = Date.now() + intervalo * 24 * 60 * 60 * 1000;
    }

    return {
        repeticiones: rep,
        factor_facilidad: Math.round(ef * 100) / 100,
        intervalo: intervalo,
        due: new Date(dueMs).toISOString()
    };
}

async function calificarTarjeta(calidad) {
    const card = sesionRepaso.cards[sesionRepaso.indice];
    if (!card) return;

    const cambios = programarSRS(card, calidad);

    // Actualizar progreso en memoria
    card._prog = Object.assign({}, card._prog, cambios);
    const enCache = misFlashcards.find(c => c.id === card.id);
    if (enCache) enCache._prog = Object.assign({}, card._prog);

    // Guardar progreso individual (upsert) en Supabase, sin bloquear la UI
    try {
        const { data, error } = await sb.from('flashcard_progress')
            .upsert({
                user_id: currentUser.id,
                flashcard_id: card.id,
                repeticiones: cambios.repeticiones,
                factor_facilidad: cambios.factor_facilidad,
                intervalo: cambios.intervalo,
                due: cambios.due,
                updated_at: new Date().toISOString()
            }, { onConflict: 'user_id,flashcard_id' })
            .select()
            .single();
        if (error) throw error;
        if (data) {
            card._prog.id = data.id;
            if (enCache) enCache._prog.id = data.id;
        }
    } catch (e) {
        console.error('Error guardando repaso:', e);
    }

    // Si fue "Otra vez", la reinsertamos al final de la sesión
    if (calidad === 'again') {
        sesionRepaso.cards.push(card);
    }

    sesionRepaso.indice++;
    mostrarTarjetaActual();
}

function finalizarRepaso() {
    const contenido = document.getElementById('flashcardContenido');
    const controles = document.getElementById('flashcardControles');
    const progreso = document.getElementById('flashcardProgreso');
    if (progreso) progreso.textContent = '¡Sesión completada!';
    contenido.innerHTML = `
        <div class="flashcard-fin">
            <div style="font-size:3rem;">🎉</div>
            <h3>¡Repaso terminado!</h3>
            <p style="color:var(--text-secondary);">Has repasado todas las tarjetas pendientes de este tema.</p>
        </div>`;
    controles.innerHTML = '';
    const volver = document.createElement('button');
    volver.className = 'btn-primary btn-large';
    volver.textContent = 'Volver a los mazos';
    volver.onclick = () => mostrarMazos();
    controles.appendChild(volver);
}

// ------------------------------------------------------------
// CRUD: crear / editar / borrar
// ------------------------------------------------------------
function nuevaTarjeta(temaId) {
    tarjetaEditando = null;
    abrirFormulario({ tema_id: temaId, tipo: 'basica' });
}

function editarTarjeta(id) {
    const card = misFlashcards.find(c => c.id === id);
    if (!card) return;
    tarjetaEditando = id;
    abrirFormulario(card);
}

function abrirFormulario(card) {
    mostrarPantalla('formularioFlashcard');

    // Título
    const titulo = document.getElementById('formFlashTitulo');
    if (titulo) titulo.textContent = tarjetaEditando ? 'Editar tarjeta' : 'Nueva tarjeta';

    // Selector de tema
    const sel = document.getElementById('formFlashTema');
    if (sel) {
        sel.innerHTML = '';
        (temas || []).forEach(t => {
            const opt = document.createElement('option');
            opt.value = t.id;
            opt.textContent = t.nombre;
            if (String(t.id) === String(card.tema_id)) opt.selected = true;
            sel.appendChild(opt);
        });
    }

    // Tipo
    const tipo = card.tipo || 'basica';
    document.querySelectorAll('input[name="formFlashTipo"]').forEach(r => {
        r.checked = (r.value === tipo);
    });

    // Campos
    document.getElementById('formFlashAnverso').value = card.anverso || '';
    document.getElementById('formFlashReverso').value = card.reverso || '';
    const ops = Array.isArray(card.opciones) ? card.opciones : ['', '', ''];
    document.getElementById('formFlashOp0').value = ops[0] || '';
    document.getElementById('formFlashOp1').value = ops[1] || '';
    document.getElementById('formFlashOp2').value = ops[2] || '';
    document.querySelectorAll('input[name="formFlashCorrecta"]').forEach(r => {
        r.checked = (parseInt(r.value, 10) === (card.respuesta_correcta ?? 0));
    });

    // Botón borrar solo al editar
    const btnBorrar = document.getElementById('formFlashBorrar');
    if (btnBorrar) btnBorrar.style.display = tarjetaEditando ? '' : 'none';

    // Opción "oficial" solo para administradores
    const oficialWrap = document.getElementById('formFlashOficialWrap');
    if (oficialWrap) oficialWrap.style.display = esAdmin() ? '' : 'none';
    const oficialChk = document.getElementById('formFlashOficial');
    if (oficialChk) oficialChk.checked = !!card.es_oficial;

    cambiarTipoFormulario(tipo);
}

function cambiarTipoFormulario(tipo) {
    const t = tipo || (document.querySelector('input[name="formFlashTipo"]:checked') || {}).value || 'basica';
    const esTest = (t === 'test');
    document.getElementById('formFlashBloqueTest').style.display = esTest ? '' : 'none';
    document.getElementById('lblAnverso').textContent = esTest ? 'Pregunta' : 'Anverso (pregunta o concepto)';
    document.getElementById('lblReverso').textContent = esTest ? 'Explicación (opcional)' : 'Reverso (respuesta)';
}

async function guardarTarjeta() {
    if (!currentUser) { alert('Inicia sesión para guardar tarjetas.'); return; }

    const tipo = (document.querySelector('input[name="formFlashTipo"]:checked') || {}).value || 'basica';
    const temaId = document.getElementById('formFlashTema').value;
    const tema = (temas || []).find(t => String(t.id) === String(temaId));
    const anverso = document.getElementById('formFlashAnverso').value.trim();
    const reverso = document.getElementById('formFlashReverso').value.trim();

    if (!anverso) { alert('El anverso/pregunta no puede estar vacío.'); return; }

    const registro = {
        user_id: currentUser.id,
        es_oficial: esAdmin() ? !!(document.getElementById('formFlashOficial') || {}).checked : false,
        convocatoria_id: window.convocatoriaActualId || null,
        tema_id: temaId || null,
        tema_nombre: tema ? tema.nombre : (temaId || null),
        tipo: tipo,
        anverso: anverso,
        reverso: reverso || null,
        opciones: null,
        respuesta_correcta: null,
        updated_at: new Date().toISOString()
    };

    if (tipo === 'test') {
        const ops = [
            document.getElementById('formFlashOp0').value.trim(),
            document.getElementById('formFlashOp1').value.trim(),
            document.getElementById('formFlashOp2').value.trim()
        ].filter(o => o.length > 0);
        if (ops.length < 2) { alert('Una tarjeta de test necesita al menos 2 opciones.'); return; }
        const correcta = parseInt((document.querySelector('input[name="formFlashCorrecta"]:checked') || {}).value || '0', 10);
        registro.opciones = ops;
        registro.respuesta_correcta = Math.min(correcta, ops.length - 1);
        if (!reverso) registro.reverso = null;
    }

    try {
        if (tarjetaEditando) {
            const { error } = await sb.from('flashcards').update(registro).eq('id', tarjetaEditando);
            if (error) throw error;
        } else {
            registro.origen = 'manual';
            const { error } = await sb.from('flashcards').insert(registro);
            if (error) throw error;
        }
        await cargarFlashcards();
        mostrarMazos();
    } catch (e) {
        console.error('Error guardando tarjeta:', e);
        alert('No se pudo guardar la tarjeta. Inténtalo de nuevo.');
    }
}

async function eliminarTarjeta(id) {
    if (!confirm('¿Borrar esta tarjeta? No se puede deshacer.')) return;
    try {
        const { error } = await sb.from('flashcards').delete().eq('id', id);
        if (error) throw error;
        misFlashcards = misFlashcards.filter(c => c.id !== id);
        // Si estábamos en una sesión, quitarla y continuar
        sesionRepaso.cards = sesionRepaso.cards.filter(c => c.id !== id);
        if (document.getElementById('estudioFlashcards').classList.contains('active')) {
            mostrarTarjetaActual();
        } else {
            renderizarMazos();
        }
    } catch (e) {
        console.error('Error borrando tarjeta:', e);
        alert('No se pudo borrar la tarjeta.');
    }
}

// ------------------------------------------------------------
// GUARDAR LA PREGUNTA ACTUAL DEL TEST EN EL MAZO (botón 🃏 de la cabecera)
// Funciona en Modo Estudio, Modo Test y Simulacro. Crea una tarjeta tipo
// 'test' personal en el mazo del tema correspondiente, de forma automática.
// ------------------------------------------------------------
async function guardarPreguntaActualEnMazo() {
    if (!currentUser) { alert('Inicia sesión para guardar preguntas en tu mazo.'); return; }
    if (!estadoApp || !Array.isArray(estadoApp.preguntasActuales)) return;
    const p = estadoApp.preguntasActuales[estadoApp.indicePregunta];
    if (!p) { alert('No hay pregunta activa.'); return; }

    const idPreg = p.idPregunta || `${p.temaId}-${(p.texto || '').slice(0, 40)}`;

    // ¿ya está en el mazo?
    if (!misFlashcards.length) await cargarFlashcards();
    if (misFlashcards.some(c => c.pregunta_id === idPreg)) {
        marcarBotonMazo('ya');
        return;
    }

    const registro = {
        user_id: currentUser.id,
        es_oficial: false,
        convocatoria_id: window.convocatoriaActualId || null,
        tema_id: p.temaId != null ? String(p.temaId) : null,
        tema_nombre: p.temaNombre || null,
        tipo: 'test',
        anverso: p.texto,
        reverso: p.explicacion || null,
        opciones: p.opciones,
        respuesta_correcta: p.correcta,
        origen: 'test',
        pregunta_id: idPreg
    };

    try {
        const { error } = await sb.from('flashcards').insert(registro);
        if (error && error.code !== '23505') throw error; // 23505 = ya existía (índice único)
        await cargarFlashcards();
        marcarBotonMazo('ok');
    } catch (e) {
        console.error('Error guardando en el mazo:', e);
        alert('No se pudo guardar la pregunta en el mazo.');
    }
}

// Feedback visual breve del botón
function marcarBotonMazo(estado) {
    const btn = document.getElementById('btnGuardarMazo');
    if (!btn) return;
    btn.classList.add('guardada');
    btn.textContent = '✅';
    btn.title = (estado === 'ya') ? 'Esta pregunta ya estaba en tu mazo' : '¡Guardada en tu mazo!';
    setTimeout(() => {
        btn.textContent = '🃏';
        btn.classList.remove('guardada');
        btn.title = 'Guardar esta pregunta en tu mazo de Flashcards';
    }, 1500);
}
async function anadirFalladasAlMazo() {
    if (!currentUser) { alert('Inicia sesión para usar el mazo de repaso.'); return; }
    if (!estadoApp || !Array.isArray(estadoApp.preguntasActuales)) { alert('No hay test reciente.'); return; }

    // Índices de las preguntas falladas (respuestas[i] está en paralelo con preguntasActuales[i])
    const falladasIdx = [];
    estadoApp.preguntasActuales.forEach((p, i) => {
        const r = estadoApp.respuestas[i];
        if (r && r.esCorrecta === false) falladasIdx.push(i);
    });
    if (falladasIdx.length === 0) {
        alert('¡No has fallado ninguna! No hay nada que añadir.');
        return;
    }

    await cargarFlashcards(); // refrescar para deduplicar
    const yaEnMazo = new Set(misFlashcards.map(c => c.pregunta_id).filter(Boolean));

    const nuevas = [];
    falladasIdx.forEach(i => {
        const p = estadoApp.preguntasActuales[i];
        if (!p) return;
        const idPreg = p.idPregunta || `${p.temaId}-${(p.texto || '').slice(0, 40)}`;
        if (yaEnMazo.has(idPreg)) return; // ya estaba
        yaEnMazo.add(idPreg);
        nuevas.push({
            user_id: currentUser.id,
            es_oficial: false,
            convocatoria_id: window.convocatoriaActualId || null,
            tema_id: p.temaId != null ? String(p.temaId) : null,
            tema_nombre: p.temaNombre || null,
            tipo: 'test',
            anverso: p.texto,
            reverso: p.explicacion || null,
            opciones: p.opciones,
            respuesta_correcta: p.correcta,
            origen: 'test',
            pregunta_id: idPreg
        });
    });

    if (nuevas.length === 0) {
        alert('Esas preguntas ya estaban en tu mazo de repaso.');
        return;
    }

    try {
        const { error } = await sb.from('flashcards').insert(nuevas);
        if (error) throw error;
        await cargarFlashcards();
        alert(`✅ ${nuevas.length} pregunta(s) añadida(s) a tu mazo de repaso. Aparecerán en Flashcards con su curva del olvido.`);
    } catch (e) {
        console.error('Error añadiendo al mazo:', e);
        alert('No se pudieron añadir las preguntas al mazo.');
    }
}
