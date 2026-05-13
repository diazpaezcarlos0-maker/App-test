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
        await inicializarAppPostLogin();
        irAPantallaInicialPostLogin();
    } else {
        mostrarLogin();
    }
    
    sb.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN') {
            currentUser = session.user;
            await cargarPerfil();
            await inicializarAppPostLogin();
            irAPantallaInicialPostLogin();
        } else if (event === 'SIGNED_OUT') {
            currentUser = null;
            userProfile = null;
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
}

/**
 * Decide a qué pantalla ir tras el login:
 * - Si ya eligió convocatoria en una sesión anterior → directo al dashboard
 * - Si no, mostramos la pantalla de elegir convocatoria
 */
function irAPantallaInicialPostLogin() {
    const conv = localStorage.getItem('convocatoria_seleccionada');
    if (conv) {
        mostrarDashboard();
    } else {
        if (typeof mostrarPantallaConvocatoria === 'function') {
            mostrarPantallaConvocatoria();
        } else {
            mostrarDashboard();
        }
    }
}

async function cerrarSesion() {
    // Limpiar convocatoria al cerrar sesión para que la próxima vez la vuelva a elegir
    localStorage.removeItem('convocatoria_seleccionada');
    await sb.auth.signOut();
}
