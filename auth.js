// ============================
// AUTENTICACIÓN
// ============================

document.addEventListener('DOMContentLoaded', async () => {
    // Comprobar si ya hay sesión activa
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session) {
        // Usuario ya logueado
        currentUser = session.user;
        await cargarPerfil();
        mostrarDashboard();
    } else {
        // No hay sesión, mostrar login
        mostrarLogin();
    }
    
    // Listener para cuando el usuario inicia o cierra sesión
    supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN') {
            currentUser = session.user;
            await cargarPerfil();
            mostrarDashboard();
        } else if (event === 'SIGNED_OUT') {
            currentUser = null;
            userProfile = null;
            mostrarLogin();
        }
    });
    
    // Botón de login con Google
    document.getElementById('btnLoginGoogle').addEventListener('click', async () => {
        const { error } = await supabase.auth.signInWithOAuth({
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
    const { data, error } = await supabase
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

async function cerrarSesion() {
    await supabase.auth.signOut();
}