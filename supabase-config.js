// Configuración de Supabase
const SUPABASE_URL = 'https://mcscjbluyfkxfouhkoxs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jc2NqYmx1eWZreGZvdWhrb3hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMDIwNTQsImV4cCI6MjA5Mzc3ODA1NH0.ziNr8MqlhMfPBt0jtk5UsgozmVS3md5TUCMSQOUQkbg';

// Cliente global de Supabase (se usa desde app.js)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Estado del usuario
let currentUser = null;
let userProfile = null;