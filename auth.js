// ============================
// AUTENTICACIÓN
// ============================

document.addEventListener('DOMContentLoaded', async () => {
    // Detectar si volvemos de un pago (legado de Stripe, lo dejamos por si se reactiva)
    const params = new URLSearchParams(window.location.search);
    if (params.get('pago') === 'ok') {
        setTimeout(() => {
            alert('¡Pago realizado correctamente! Bienvenido a Premium 🎉');
            window.history.replaceState({}, '', window.location.pathname);
            window.location.reload();
        }, 2000);
        return;
    } else if (params.get('pago') === 'cancelado') {
        alert('Has cancelado el pago. Cuando quieras puedes volver a intentarlo.');
        window.history.replaceState({}, '', window.location.pathname);
    }
    
    const { data: { session } } = await sb.auth.getSession();
    
    if (session) {
        currentUser = session.user;
        await cargarPerfil();
        // PRIMERO restaurar convocatoria (necesario para que data-loader sepa qué cargar)
        let restaurada = false;
        if (typeof restaurarConvocatoriaActual === 'function') {
            restaurada = await restaurarConvocatoriaActual();
        }
        // LUEGO cargar preguntas y progreso
        await inicializarAppPostLogin();
        // Decidir a qué pantalla ir
        if (restaurada) {
            mostrarDashboard();
        } else {
            if (typeof mostrarPantallaConvocatoria === 'function') {
                await mostrarPantallaConvocatoria();
            } else {
                mostrarDashboard();
            }
        }
    } else {
        mostrarLogin();
    }
    
    sb.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN') {
            currentUser = session.user;
            await cargarPerfil();
            // Mismo orden: restaurar conv → cargar preguntas → pantalla
            let restaurada = false;
            if (typeof restaurarConvocatoriaActual === 'function') {
                restaurada = await restaurarConvocatoriaActual();
            }
            await inicializarAppPostLogin();
            if (restaurada) {
                mostrarDashboard();
            } else {
                if (typeof mostrarPantallaConvocatoria === 'function') {
                    await mostrarPantallaConvocatoria();
                } else {
                    mostrarDashboard();
                }
            }
        } else if (event === 'SIGNED_OUT') {
            currentUser = null;
            userProfile = null;
            window.convocatoriaActualId = null;
            window.convocatoriaActualData = null;
            mostrarLogin();
        }
    });
    
    document.getElementById('btnLoginGoogle').addEventListener('click', async () => {
        const { error } = await sb.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin + window.location.pathname
            }
        });
        if (error) {
            alert('Error al iniciar sesión: ' + error.message);
        }
    });
});

async function cargarPerfil() {
    const { data, error } = await sb
        .from('profiles')
        .select('*')
        .eq('id', currentUser.id)
        .single();
    if (error) {
        console.error('Error cargando perfil:', error);
        return;
    }
    userProfile = data;
    console.log('Perfil cargado:', userProfile);
}

function mostrarLogin() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('pantallaLogin').classList.add('active');
}

function mostrarDashboard() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('dashboard').classList.add('active');
    if (typeof actualizarTituloDashboard === 'function') {
        actualizarTituloDashboard();
    }
}

/**
 * Decide a qué pantalla ir tras el login:
 * - Si ya tenía una convocatoria guardada → directo al dashboard
 * - Si no → pantalla de elegir convocatoria
 */
async function irAPantallaInicialPostLogin() {
    let restaurada = false;
    if (typeof restaurarConvocatoriaActual === 'function') {
        restaurada = await restaurarConvocatoriaActual();
    }
    
    if (restaurada) {
        mostrarDashboard();
    } else {
        if (typeof mostrarPantallaConvocatoria === 'function') {
            await mostrarPantallaConvocatoria();
        } else {
            mostrarDashboard();
        }
    }
}

async function cerrarSesion() {
    // Limpiar convocatoria al cerrar sesión
    localStorage.removeItem('convocatoria_id');
    localStorage.removeItem('convocatoria_seleccionada');
    window.convocatoriaActualId = null;
    window.convocatoriaActualData = null;
    await sb.auth.signOut();
}

/**
 * Botón "Cambiar convocatoria" en el dashboard (lo usaremos en Fase 3).
 */
async function cambiarConvocatoria() {
    if (typeof mostrarPantallaConvocatoria === 'function') {
        await mostrarPantallaConvocatoria();
    }
}
