// ============================================
// PAYWALL — Límite diario de 20 preguntas para usuarios free
// ============================================
 
const LIMITE_DIARIO_FREE = 20;
 
/**
 * Devuelve cuántas preguntas ha respondido el usuario hoy.
 */
async function preguntasRespondidasHoy() {
    if (!currentUser) return 0;
    
    // Inicio del día en hora local del usuario
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
 
/**
 * ¿Cuántas preguntas le quedan al usuario hoy?
 * Premium = Infinity. Free = 20 - respondidas_hoy.
 */
async function preguntasRestantesHoy() {
    if (!userProfile) return 0;
    
    if (userProfile.subscription_status === 'premium') {
        return Infinity;
    }
    
    const respondidas = await preguntasRespondidasHoy();
    return Math.max(0, LIMITE_DIARIO_FREE - respondidas);
}
 
/**
 * Antes de iniciar un test, comprueba el límite y muestra avisos.
 * Devuelve la cantidad de preguntas permitida (puede ser menor que la pedida).
 * Si ya está en el muro, muestra el muro y devuelve 0.
 */
async function comprobarLimiteAntesDeTest(cantidadPedida) {
    const restantes = await preguntasRestantesHoy();
    
    // Premium: sin límite
    if (restantes === Infinity) {
        return cantidadPedida;
    }
    
    // Sin preguntas restantes: muro
    if (restantes === 0) {
        mostrarMuroPago('Ya has hecho tus 20 preguntas gratis de hoy.');
        return 0;
    }
    
    // Hay preguntas pero menos de las pedidas: aviso
    if (restantes < cantidadPedida) {
        const continuar = confirm(
            `Te quedan ${restantes} preguntas gratis hoy.\n\n` +
            `Pediste ${cantidadPedida}, pero solo podrás responder ${restantes}.\n\n` +
            `¿Quieres continuar con ${restantes} preguntas?\n` +
            `(Suscríbete a premium para acceso ilimitado)`
        );
        if (!continuar) return 0;
        return restantes;
    }
    
    // Aviso suave si quedan pocas
    if (restantes <= 5 && cantidadPedida >= restantes) {
        alert(`Aviso: te quedan ${restantes} preguntas gratis hoy.`);
    }
    
    return cantidadPedida;
}
 
/**
 * Guarda en Supabase la respuesta del usuario.
 * Si la inserción falla porque la regla RLS bloquea (límite alcanzado a media sesión),
 * mostramos el muro y devolvemos false.
 */
async function guardarRespuestaEnSupabase(pregunta, indiceSeleccionado, esCorrecta, modo) {
    if (!currentUser) return true; // sin login, no guardamos pero no bloqueamos
    if (!pregunta.dbId) {
        // Pregunta sin ID de BD (no debería pasar tras la migración)
        console.warn('Pregunta sin dbId, no se puede guardar:', pregunta.texto?.slice(0, 50));
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
        // El error más probable: regla RLS bloqueó por límite alcanzado
        // (mensaje típico: "new row violates row-level security policy")
        if (error.message && error.message.toLowerCase().includes('row-level security')) {
            mostrarMuroPago('Has alcanzado las 20 preguntas gratis de hoy.');
            return false;
        }
        return false;
    }
    
    return true;
}
 
/**
 * Muestra el muro de pago.
 */
function mostrarMuroPago(motivo) {
    // Crear el muro si no existe
    let muro = document.getElementById('muroPago');
    if (!muro) {
        muro = crearMuroPago();
        document.body.appendChild(muro);
    }
    
    document.getElementById('muroMotivo').textContent = motivo || 'Límite diario alcanzado';
    muro.classList.add('active');
    
    // Detener cronómetro si lo hubiera
    if (typeof detenerCronometro === 'function') {
        detenerCronometro();
    }
}
 
function cerrarMuroPago() {
    const muro = document.getElementById('muroPago');
    if (muro) muro.classList.remove('active');
    
    if (typeof volverDashboard === 'function') {
        volverDashboard();
    }
}
 
function crearMuroPago() {
    const div = document.createElement('div');
    div.id = 'muroPago';
    div.className = 'muro-pago';
    div.innerHTML = `
        <div class="muro-overlay" onclick="cerrarMuroPago()"></div>
        <div class="muro-card">
            <div class="muro-icono">🔒</div>
            <h2>Sigue practicando sin límites</h2>
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
                    <span>Cancela cuando quieras</span>
                </div>
            </div>
            
            <button class="btn-suscribirse" onclick="iniciarSuscripcion()">
                Suscribirme a Premium
            </button>
            <button class="btn-secundario" onclick="cerrarMuroPago()">
                Ahora no, gracias
            </button>
            
            <p class="muro-info">Vuelve mañana para 20 preguntas gratis más</p>
        </div>
    `;
    return div;
}
 
/**
 * Placeholder — se conectará con Stripe en la siguiente fase.
 */
async function iniciarSuscripcion() {
    if (!currentUser) {
        alert('Debes iniciar sesión primero.');
        return;
    }
    
    // Mostrar feedback al usuario
    const btn = document.querySelector('.btn-suscribirse');
    const textoOriginal = btn ? btn.textContent : '';
    if (btn) {
        btn.disabled = true;
        btn.textContent = 'Redirigiendo a Stripe...';
    }
    
    try {
        // Obtener token de sesión actual
        const { data: { session } } = await sb.auth.getSession();
        if (!session) {
            alert('Tu sesión ha expirado. Vuelve a iniciar sesión.');
            return;
        }
        
        // Llamar a la Edge Function crear-checkout
        const response = await fetch(
            `${SUPABASE_URL}/functions/v1/crear-checkout`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${session.access_token}`,
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_ANON_KEY
                },
                body: JSON.stringify({
                    returnUrl: window.location.origin + window.location.pathname
                })
            }
        );
        
        const data = await response.json();
        
        if (!response.ok || !data.url) {
            throw new Error(data.error || 'No se pudo crear la sesión de pago');
        }
        
        // Redirigir a Stripe Checkout
        window.location.href = data.url;
    } catch (error) {
        console.error('Error iniciando suscripción:', error);
        alert('Error al iniciar la suscripción: ' + error.message);
        if (btn) {
            btn.disabled = false;
            btn.textContent = textoOriginal;
        }
    }
}
