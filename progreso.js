// ============================================
// PROGRESO — sincronización con Supabase
// ============================================
// Maneja la lectura/escritura de progreso del usuario contra Supabase:
//   - Preguntas guardadas (saved_questions)
//   - Preguntas falladas (calculadas desde user_progress)
//   - Estadísticas por tema (vista user_tema_stats)
//   - Preguntas vistas (calculadas desde user_progress)

/**
 * Carga TODO el progreso del usuario desde Supabase y lo mete en estadoApp.
 * Se llama una vez tras login, antes de mostrar el dashboard.
 */
async function cargarTodoElProgresoDesdeSupabase() {
    if (!currentUser) return;
    
    try {
        // Lanzar las 4 queries en paralelo para ir más rápido
        const [guardadas, falladas, stats, vistas] = await Promise.all([
            cargarGuardadasDesdeSupabase(),
            cargarFalladasDesdeSupabase(),
            cargarEstadisticasDesdeSupabase(),
            cargarVistasDesdeSupabase()
        ]);
        
        estadoApp.preguntasGuardadas = guardadas;
        estadoApp.preguntasFalladas = falladas;
        estadoApp.estadisticas = stats;
        estadoApp.preguntasVistas = vistas;
        
        // Sincronizar también el cache local
        guardarGuardadas();
        guardarFalladas();
        guardarEstadisticas();
        guardarPreguntasVistas();
        
        console.log('✅ Progreso cargado desde Supabase:',
            guardadas.length, 'guardadas,',
            falladas.length, 'falladas,',
            Object.keys(stats).length, 'temas con stats,',
            vistas.length, 'vistas'
        );
    } catch (e) {
        console.error('Error cargando progreso desde Supabase:', e);
        // Si falla, usamos lo que haya en localStorage como fallback
    }
}

/**
 * Devuelve la lista de preguntas guardadas del usuario,
 * con la misma forma que esperaba el código antiguo.
 */
async function cargarGuardadasDesdeSupabase() {
    const convId = window.convocatoriaActualId;
    let query = sb
        .from('saved_questions')
        .select('question_id')
        .eq('user_id', currentUser.id);
    if (convId) query = query.eq('convocatoria_id', convId);
    
    const { data, error } = await query;
    
    if (error || !data) {
        console.error('Error cargando guardadas:', error);
        return [];
    }
    
    // Mapear los question_id a objetos pregunta con la estructura completa
    const ids = new Set(data.map(r => r.question_id));
    const preguntas = [];
    
    temas.forEach(tema => {
        tema.preguntas.forEach((p, indexEnTema) => {
            if (p.dbId && ids.has(p.dbId)) {
                preguntas.push({
                    ...p,
                    temaId: tema.id,
                    temaNombre: tema.nombre,
                });
            }
        });
    });
    
    return preguntas;
}

/**
 * Devuelve las preguntas que el usuario ha respondido y SU ÚLTIMA RESPUESTA fue incorrecta.
 */
async function cargarFalladasDesdeSupabase() {
    const convId = window.convocatoriaActualId;
    let query = sb
        .from('user_last_answer')
        .select('question_id, es_correcta, convocatoria_id')
        .eq('user_id', currentUser.id)
        .eq('es_correcta', false);
    if (convId) query = query.eq('convocatoria_id', convId);
    
    const { data, error } = await query;
    
    if (error || !data) {
        console.error('Error cargando falladas:', error);
        return [];
    }
    
    const ids = new Set(data.map(r => r.question_id));
    const preguntas = [];
    
    temas.forEach(tema => {
        tema.preguntas.forEach((p, indexEnTema) => {
            if (p.dbId && ids.has(p.dbId)) {
                preguntas.push({
                    ...p,
                    temaId: tema.id,
                    temaNombre: tema.nombre,
                });
            }
        });
    });
    
    return preguntas;
}

/**
 * Devuelve las estadísticas por tema con la forma que espera el código antiguo:
 * { [temaId]: { respondidas, correctas } }
 */
async function cargarEstadisticasDesdeSupabase() {
    const convId = window.convocatoriaActualId;
    let query = sb
        .from('user_tema_stats')
        .select('*')
        .eq('user_id', currentUser.id);
    if (convId) query = query.eq('convocatoria_id', convId);
    
    const { data, error } = await query;
    
    if (error || !data) {
        console.error('Error cargando stats:', error);
        return {};
    }
    
    const stats = {};
    data.forEach(row => {
        // Extraer número de tema del nombre "Tema N - ..."
        const match = row.tema.match(/Tema\s+(\d+)/i);
        if (!match) return;
        const temaId = parseInt(match[1]);
        
        stats[temaId] = {
            respondidas: parseInt(row.respondidas) || 0,
            correctas: parseInt(row.correctas) || 0
        };
    });
    
    return stats;
}

/**
 * Devuelve los IDs de preguntas vistas (cualquier respuesta dada) en formato estable "q-${dbId}".
 */
async function cargarVistasDesdeSupabase() {
    const convId = window.convocatoriaActualId;
    let query = sb
        .from('user_progress')
        .select('question_id, convocatoria_id')
        .eq('user_id', currentUser.id);
    if (convId) query = query.eq('convocatoria_id', convId);
    
    const { data, error } = await query;
    
    if (error || !data) {
        console.error('Error cargando vistas:', error);
        return [];
    }
    
    // El id estable de cada pregunta es `q-${dbId}` (igual que en data-loader),
    // así no depende del orden ni del índice dentro del tema.
    const vistas = data
        .filter(r => r.question_id != null)
        .map(r => `q-${r.question_id}`);

    return vistas;
}

/**
 * Guarda una pregunta como favorita en Supabase.
 */
async function guardarGuardadaEnSupabase(questionId) {
    if (!currentUser || !questionId) return;
    
    const insertObj = {
        user_id: currentUser.id,
        question_id: questionId
    };
    if (window.convocatoriaActualId) {
        insertObj.convocatoria_id = window.convocatoriaActualId;
    }
    
    const { error } = await sb.from('saved_questions').insert(insertObj);
    
    if (error && error.code !== '23505') { // 23505 = unique violation, ya estaba guardada
        console.error('Error guardando favorita:', error);
    }
}

/**
 * Quita una pregunta de favoritas en Supabase.
 */
async function eliminarGuardadaEnSupabase(questionId) {
    if (!currentUser || !questionId) return;
    
    const { error } = await sb
        .from('saved_questions')
        .delete()
        .eq('user_id', currentUser.id)
        .eq('question_id', questionId);
    
    if (error) {
        console.error('Error eliminando favorita:', error);
    }
}

// Alias para que data-loader.js pueda llamarla
async function cargarProgresoUsuario() {
    return await cargarTodoElProgresoDesdeSupabase();
}
