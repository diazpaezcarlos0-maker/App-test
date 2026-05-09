// ============================================
// PAYWALL — Límite diario de 20 preguntas para usuarios free
// ============================================
 
const LIMITE_DIARIO_FREE = 20;
const BIZUM_NUMERO = '644607554';
const PRECIO_PREMIUM = '5€/mes';
 
async function preguntasRespondidasHoy() {
    if (!currentUser) return 0;
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const { count, error } = await sb
        .from('user_progress')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', currentUser.id)
        .gte('created_at', hoy.toISOString());
    if (error) {
        console.error('Error contando preguntas de hoy:', error);
        return 0;
    }
    return count || 0;
}
 
async function preguntasRestantesHoy() {
    if (!userProfile) return 0;
    if (userProfile.subscription_status === 'premium') return Infinity;
    const respondidas = await preguntasRespondidasHoy();
    return Math.max(0, LIMITE_DIARIO_FREE - respondidas);
}
 
async function comprobarLimiteAntesDeTest(cantidadPedida) {
    const restantes = await preguntasRestantesHoy();
    if (restantes === Infinity) return cantidadPedida;
    if (restantes === 0) {
        mostrarMuroPago('Ya has hecho tus 20 preguntas gratis de hoy.');
        return 0;
    }
    if (restantes < cantidadPedida) {
        const continuar = confirm(
            `Te quedan ${restantes} preguntas gratis hoy.\n\n` +
            `Pediste ${cantidadPedida}, pero solo podrás responder ${restantes}.\n\n` +
            `¿Quieres continuar con ${restantes} preguntas?\n` +
            `(Apoya el proyecto para acceso ilimitado)`
        );
        if (!continuar) return 0;
        return restantes;
    }
    if (restantes <= 5 && cantidadPedida >= restantes) {
        alert(`Aviso: te quedan ${restantes} preguntas gratis hoy.`);
    }
    return cantidadPedida;
}
 
async function guardarRespuestaEnSupabase(pregunta, indiceSeleccionado, esCorrecta, modo) {
    if (!currentUser) return true;
    if (!pregunta.dbId) {
        console.warn('Pregunta sin dbId:', pregunta.texto?.slice(0, 50));
        return true;
    }
    const { error } = await sb.from('user_progress').insert({
        user_id: currentUser.id,
        question_id: pregunta.dbId,
        respuesta_dada: indiceSeleccionado,
        es_correcta: esCorrecta,
        modo: modo
    });
    if (error) {
        console.error('Error guardando respuesta:', error);
        if (error.message && error.message.toLowerCase().includes('row-level security')) {
            mostrarMuroPago('Has alcanzado las 20 preguntas gratis de hoy.');
            return false;
        }
        return false;
    }
    return true;
}
 
function mostrarMuroPago(motivo) {
    let muro = document.getElementById('muroPago');
    if (!muro) {
        muro = crearMuroPago();
        document.body.appendChild(muro);
    }
    document.getElementById('muroMotivo').textContent = motivo || 'Límite diario alcanzado';
    muro.classList.add('active');
    if (typeof detenerCronometro === 'function') detenerCronometro();
}
 
function cerrarMuroPago() {
    const muro = document.getElementById('muroPago');
    if (muro) muro.classList.remove('active');
    const bizumModal = document.getElementById('modalBizum');
    if (bizumModal) bizumModal.classList.remove('active');
    if (typeof volverDashboard === 'function') volverDashboard();
}
 
function crearMuroPago() {
    const div = document.createElement('div');
    div.id = 'muroPago';
    div.className = 'muro-pago';
    div.innerHTML = `
        <div class="muro-overlay" onclick="cerrarMuroPago()"></div>
        <div class="muro-card">
            <div class="muro-icono">💜</div>
            <h2>Apoya el proyecto y sigue practicando</h2>
            <p id="muroMotivo">Ya has hecho tus 20 preguntas gratis de hoy.</p>
            
            <div class="muro-features">
                <div class="muro-feature">
                    <span class="check">✓</span>
                    <span>Acceso ilimitado a las 3.254 preguntas</span>
                </div>
                <div class="muro-feature">
                    <span class="check">✓</span>
                    <span>Sin límite diario</span>
                </div>
                <div class="muro-feature">
                    <span class="check">✓</span>
                    <span>Estadísticas comparativas con otros opositores</span>
                </div>
                <div class="muro-feature">
                    <span class="check">✓</span>
                    <span>Apoyas el desarrollo del proyecto</span>
                </div>
            </div>
            
            <button class="btn-suscribirse" onclick="iniciarSuscripcion()">
                Apoyar el proyecto · ${PRECIO_PREMIUM}
            </button>
            <button class="btn-secundario" onclick="cerrarMuroPago()">
                Ahora no, gracias
            </button>
            
            <p class="muro-info">Vuelve mañana para 20 preguntas gratis más</p>
        </div>
    `;
    return div;
}
 
function iniciarSuscripcion() {
    if (!currentUser) {
        alert('Debes iniciar sesión primero.');
        return;
    }
    
    let modal = document.getElementById('modalBizum');
    if (!modal) {
        modal = crearModalBizum();
        document.body.appendChild(modal);
    } else {
        // Actualizar email por si cambió
        const emailEl = modal.querySelector('.bizum-email');
        if (emailEl) emailEl.textContent = currentUser.email || 'tu email';
    }
    
    const muro = document.getElementById('muroPago');
    if (muro) muro.classList.remove('active');
    
    modal.classList.add('active');
}
 
function crearModalBizum() {
    const div = document.createElement('div');
    div.id = 'modalBizum';
    div.className = 'muro-pago';
    div.innerHTML = `
        <div class="muro-overlay" onclick="cerrarModalBizum()"></div>
        <div class="muro-card bizum-card">
            <div class="muro-icono">💜</div>
            <h2>Apoyar el proyecto</h2>
            <p style="margin-bottom:24px;">Apoya OPOTEST con un donativo por Bizum y desbloquearemos tu acceso completo en menos de 24h.</p>
            
            <div class="bizum-numero-bloque">
                <div class="bizum-label">Apoya con ${PRECIO_PREMIUM} por Bizum a:</div>
                <div class="bizum-numero">${BIZUM_NUMERO}</div>
                <button class="btn-copiar" onclick="copiarBizum()">📋 Copiar número</button>
            </div>
            
            <div class="bizum-instrucciones">
                <strong>Importante:</strong> en el concepto del Bizum incluye tu email para que podamos identificarte:
                <div class="bizum-email">${currentUser?.email || 'tu email'}</div>
            </div>
            
            <div class="bizum-pasos">
                <div class="paso"><span class="paso-num">1</span> Abre tu app del banco</div>
                <div class="paso"><span class="paso-num">2</span> Envía Bizum de ${PRECIO_PREMIUM} al ${BIZUM_NUMERO}</div>
                <div class="paso"><span class="paso-num">3</span> Pon tu email en el concepto</div>
                <div class="paso"><span class="paso-num">4</span> Te activaremos premium en menos de 24h</div>
            </div>
            
            <button class="btn-secundario" onclick="cerrarModalBizum()" style="margin-top:20px;">
                Cerrar
            </button>
        </div>
    `;
    return div;
}
 
function cerrarModalBizum() {
    const modal = document.getElementById('modalBizum');
    if (modal) modal.classList.remove('active');
}
 
function copiarBizum() {
    navigator.clipboard.writeText(BIZUM_NUMERO).then(() => {
        const btn = document.querySelector('#modalBizum .btn-copiar');
        if (btn) {
            const original = btn.innerHTML;
            btn.innerHTML = '✓ Copiado';
            setTimeout(() => { btn.innerHTML = original; }, 1500);
        }
    }).catch(err => {
        console.error('No se pudo copiar:', err);
        alert('No se pudo copiar. Apunta el número: ' + BIZUM_NUMERO);
    });
}
