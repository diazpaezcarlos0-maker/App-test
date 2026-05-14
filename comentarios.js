// ============================================
// COMENTARIOS Y REPORTS
// ============================================

const COMENTARIOS_MAX_LENGTH = 1000;
const REPORT_MAX_LENGTH = 500;

// Caché en memoria de votos del usuario por comentario
const misVotos = new Map(); // comentario_id → -1 | 1

// ============================================
// CARGAR COMENTARIOS DE UNA PREGUNTA
// ============================================

async function cargarComentariosDePregunta(questionDbId) {
    if (!questionDbId) return [];
    
    const { data, error } = await sb
        .from('comentarios_con_autor')
        .select('*')
        .eq('question_id', questionDbId)
        .order('votos_positivos', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(50);
    
    if (error) {
        console.error('Error cargando comentarios:', error);
        return [];
    }
    
    // Cargar mis votos para estos comentarios
    if (currentUser && data.length > 0) {
        const ids = data.map(c => c.id);
        const { data: votos } = await sb
            .from('comentario_votos')
            .select('comentario_id, voto')
            .eq('user_id', currentUser.id)
            .in('comentario_id', ids);
        
        if (votos) {
            votos.forEach(v => misVotos.set(v.comentario_id, v.voto));
        }
    }
    
    return data;
}

// ============================================
// PUBLICAR COMENTARIO
// ============================================

async function publicarComentario(questionDbId, contenido) {
    if (!currentUser) {
        alert('Debes iniciar sesión para comentar.');
        return false;
    }
    
    if (!contenido || contenido.trim().length === 0) {
        alert('El comentario está vacío.');
        return false;
    }
    
    if (contenido.length > COMENTARIOS_MAX_LENGTH) {
        alert(`El comentario es demasiado largo (máx ${COMENTARIOS_MAX_LENGTH} caracteres).`);
        return false;
    }
    
    const { error } = await sb.from('comentarios').insert({
        user_id: currentUser.id,
        question_id: questionDbId,
        contenido: contenido.trim()
    });
    
    if (error) {
        console.error('Error publicando comentario:', error);
        alert('No se pudo publicar el comentario. Inténtalo de nuevo.');
        return false;
    }
    
    return true;
}

// ============================================
// BORRAR COMENTARIO PROPIO
// ============================================

async function borrarComentario(comentarioId) {
    if (!confirm('¿Borrar tu comentario?')) return false;
    
    const { error } = await sb
        .from('comentarios')
        .delete()
        .eq('id', comentarioId);
    
    if (error) {
        console.error('Error borrando comentario:', error);
        alert('No se pudo borrar.');
        return false;
    }
    
    return true;
}

// ============================================
// VOTAR
// ============================================

async function votarComentario(comentarioId, voto) {
    if (!currentUser) {
        alert('Debes iniciar sesión para votar.');
        return;
    }
    
    // Si ya votaste lo mismo, quitas el voto (toggle)
    const votoActual = misVotos.get(comentarioId);
    const nuevoVoto = votoActual === voto ? 0 : voto;
    
    const { error } = await sb.rpc('votar_comentario', {
        p_comentario_id: comentarioId,
        p_voto: nuevoVoto
    });
    
    if (error) {
        console.error('Error votando:', error);
        alert('No se pudo registrar el voto.');
        return;
    }
    
    // Actualizar caché local
    if (nuevoVoto === 0) {
        misVotos.delete(comentarioId);
    } else {
        misVotos.set(comentarioId, nuevoVoto);
    }
    
    // Refrescar la vista
    if (estadoApp.preguntasActuales && estadoApp.preguntasActuales[estadoApp.indicePregunta]) {
        renderizarSeccionComentarios(estadoApp.preguntasActuales[estadoApp.indicePregunta]);
    }
}

// ============================================
// REPORTAR ERROR
// ============================================

async function enviarReport(questionDbId, motivo, descripcion) {
    if (!currentUser) {
        alert('Debes iniciar sesión para reportar.');
        return false;
    }
    
    const { error } = await sb.from('reports').insert({
        user_id: currentUser.id,
        question_id: questionDbId,
        motivo: motivo,
        descripcion: descripcion?.trim() || null
    });
    
    if (error) {
        console.error('Error enviando report:', error);
        alert('No se pudo enviar el report. Inténtalo de nuevo.');
        return false;
    }
    
    return true;
}

// ============================================
// UI — SECCIÓN DE COMENTARIOS EN LA PREGUNTA
// ============================================

async function renderizarSeccionComentarios(pregunta) {
    let container = document.getElementById('seccionComentarios');
    if (!container) return;
    
    if (!pregunta || !pregunta.dbId) {
        container.innerHTML = '';
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    container.innerHTML = '<div class="comentarios-loading">Cargando comentarios...</div>';
    
    const comentarios = await cargarComentariosDePregunta(pregunta.dbId);
    
    const totalComentarios = comentarios.length;
    
    container.innerHTML = `
        <div class="comentarios-cabecera">
            <h4>💬 Comentarios <span class="comentarios-count">${totalComentarios}</span></h4>
            <button class="btn-reportar" onclick="abrirReport(${pregunta.dbId})" title="Reportar error en esta pregunta">
                🚩 Reportar
            </button>
        </div>
        
        <div class="comentarios-lista" id="comentariosLista">
            ${comentarios.length === 0
                ? '<div class="comentarios-vacio">Aún no hay comentarios en esta pregunta. ¡Sé el primero!</div>'
                : comentarios.map(c => renderizarComentario(c)).join('')
            }
        </div>
        
        <div class="comentarios-form">
            <textarea 
                id="nuevoComentario" 
                placeholder="Comparte tu duda o aporta algo sobre esta pregunta..."
                maxlength="${COMENTARIOS_MAX_LENGTH}"
            ></textarea>
            <div class="comentarios-form-acciones">
                <small class="comentarios-counter">
                    <span id="comentarioCounter">0</span> / ${COMENTARIOS_MAX_LENGTH}
                </small>
                <button class="btn-publicar-comentario" onclick="manejarPublicarComentario(${pregunta.dbId})">
                    Publicar
                </button>
            </div>
        </div>
    `;
    
    // Listener del contador
    const ta = document.getElementById('nuevoComentario');
    const counter = document.getElementById('comentarioCounter');
    if (ta && counter) {
        ta.addEventListener('input', () => {
            counter.textContent = ta.value.length;
        });
    }
}

function renderizarComentario(c) {
    const fecha = formatearFechaComentario(c.created_at);
    const score = (c.votos_positivos || 0) - (c.votos_negativos || 0);
    const miVoto = misVotos.get(c.id);
    const esMio = currentUser?.id === c.user_id;
    
    return `
        <div class="comentario ${esMio ? 'es-mio' : ''}">
            <div class="comentario-cabecera">
                <span class="comentario-autor">${escaparHtml(c.autor_nombre)}${esMio ? ' <small>(tú)</small>' : ''}</span>
                <span class="comentario-fecha">${fecha}</span>
            </div>
            <div class="comentario-texto">${escaparHtml(c.contenido)}</div>
            <div class="comentario-acciones">
                <button class="btn-voto ${miVoto === 1 ? 'activo' : ''}" onclick="votarComentario(${c.id}, 1)" title="Útil">
                    👍 <span class="voto-count">${c.votos_positivos || 0}</span>
                </button>
                <button class="btn-voto ${miVoto === -1 ? 'activo-neg' : ''}" onclick="votarComentario(${c.id}, -1)" title="No útil">
                    👎 <span class="voto-count">${c.votos_negativos || 0}</span>
                </button>
                ${esMio
                    ? `<button class="btn-borrar-comentario" onclick="manejarBorrarComentario(${c.id})" title="Borrar">🗑️</button>`
                    : ''
                }
            </div>
        </div>
    `;
}

async function manejarPublicarComentario(questionDbId) {
    const ta = document.getElementById('nuevoComentario');
    if (!ta) return;
    
    const btn = document.querySelector('.btn-publicar-comentario');
    if (btn) {
        btn.disabled = true;
        btn.textContent = 'Publicando...';
    }
    
    const ok = await publicarComentario(questionDbId, ta.value);
    
    if (btn) {
        btn.disabled = false;
        btn.textContent = 'Publicar';
    }
    
    if (ok) {
        ta.value = '';
        const counter = document.getElementById('comentarioCounter');
        if (counter) counter.textContent = '0';
        // Recargar
        if (estadoApp.preguntasActuales && estadoApp.preguntasActuales[estadoApp.indicePregunta]) {
            renderizarSeccionComentarios(estadoApp.preguntasActuales[estadoApp.indicePregunta]);
        }
    }
}

async function manejarBorrarComentario(comentarioId) {
    const ok = await borrarComentario(comentarioId);
    if (ok && estadoApp.preguntasActuales && estadoApp.preguntasActuales[estadoApp.indicePregunta]) {
        renderizarSeccionComentarios(estadoApp.preguntasActuales[estadoApp.indicePregunta]);
    }
}

// ============================================
// UI — MODAL REPORT
// ============================================

function abrirReport(questionDbId) {
    let modal = document.getElementById('modalReport');
    if (!modal) {
        modal = crearModalReport();
        document.body.appendChild(modal);
    }
    
    // Guardar el id de la pregunta en el modal
    modal.dataset.questionId = questionDbId;
    modal.classList.add('active');
    
    // Resetear
    const select = document.getElementById('reportMotivo');
    const desc = document.getElementById('reportDescripcion');
    if (select) select.value = '';
    if (desc) desc.value = '';
}

function cerrarReport() {
    const modal = document.getElementById('modalReport');
    if (modal) modal.classList.remove('active');
}

function crearModalReport() {
    const div = document.createElement('div');
    div.id = 'modalReport';
    div.className = 'muro-pago';
    div.innerHTML = `
        <div class="muro-overlay" onclick="cerrarReport()"></div>
        <div class="muro-card report-card">
            <div class="muro-icono">🚩</div>
            <h2>Reportar error en la pregunta</h2>
            <p style="margin-bottom:18px;">Cuéntanos qué pasa para que podamos revisarla.</p>
            
            <label style="display:block;text-align:left;margin-bottom:6px;font-weight:600;">Motivo</label>
            <select id="reportMotivo" class="report-select">
                <option value="">Selecciona un motivo...</option>
                <option value="pregunta_mal_redactada">Pregunta mal redactada</option>
                <option value="respuesta_correcta_incorrecta">La respuesta marcada como correcta no es la correcta</option>
                <option value="varias_correctas">Hay varias respuestas correctas</option>
                <option value="explicacion_erronea">La explicación es errónea o incompleta</option>
                <option value="pregunta_obsoleta">Pregunta obsoleta (legislación cambiada, etc.)</option>
                <option value="otro">Otro</option>
            </select>
            
            <label style="display:block;text-align:left;margin:14px 0 6px;font-weight:600;">Descripción (opcional)</label>
            <textarea 
                id="reportDescripcion" 
                placeholder="Detalla el problema si quieres..."
                maxlength="${REPORT_MAX_LENGTH}"
            ></textarea>
            
            <button class="btn-suscribirse" onclick="manejarEnviarReport()">
                Enviar report
            </button>
            <button class="btn-secundario" onclick="cerrarReport()">
                Cancelar
            </button>
        </div>
    `;
    return div;
}

async function manejarEnviarReport() {
    const modal = document.getElementById('modalReport');
    if (!modal) return;
    
    const questionDbId = parseInt(modal.dataset.questionId);
    const motivo = document.getElementById('reportMotivo').value;
    const descripcion = document.getElementById('reportDescripcion').value;
    
    if (!motivo) {
        alert('Selecciona un motivo.');
        return;
    }
    
    const btn = modal.querySelector('.btn-suscribirse');
    if (btn) {
        btn.disabled = true;
        btn.textContent = 'Enviando...';
    }
    
    const ok = await enviarReport(questionDbId, motivo, descripcion);
    
    if (btn) {
        btn.disabled = false;
        btn.textContent = 'Enviar report';
    }
    
    if (ok) {
        cerrarReport();
        alert('¡Gracias! Hemos recibido tu report y lo revisaremos lo antes posible.');
    }
}

// ============================================
// UTILIDADES
// ============================================

function escaparHtml(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({
        '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
}

function formatearFechaComentario(iso) {
    if (!iso) return '';
    const fecha = new Date(iso);
    const ahora = new Date();
    const diffMs = ahora.getTime() - fecha.getTime();
    const diffMin = Math.floor(diffMs / 60000);
    
    if (diffMin < 1) return 'ahora mismo';
    if (diffMin < 60) return `hace ${diffMin} min`;
    
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24) return `hace ${diffH} h`;
    
    const diffD = Math.floor(diffH / 24);
    if (diffD < 7) return `hace ${diffD} d`;
    
    return fecha.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}
