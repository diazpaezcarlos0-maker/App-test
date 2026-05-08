/ ============================
// AUTENTICACIÓN
// ============================
 
document.addEventListener('DOMContentLoaded', async () => {
    // Comprobar si ya hay sesión activa
    const { data: { session } } = await sb.auth.getSession();
    
    if (session) {
        currentUser = session.user;
        await cargarPerfil();
        await inicializarAppPostLogin();
        mostrarDashboard();
    } else {
        mostrarLogin();
    }
    
    // Listener para cambios de sesión (login / logout)
    sb.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN') {
            currentUser = session.user;
            await cargarPerfil();
            await inicializarAppPostLogin();
            mostrarDashboard();
        } else if (event === 'SIGNED_OUT') {
            currentUser = null;
            userProfile = null;
            mostrarLogin();
        }
    });
    
    // Botón de login con Google
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
 
async function cerrarSesion() {
    await sb.auth.signOut();
}
