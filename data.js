const temas = [

{
    id: 1,
    nombre: "Tema 1 - Prevención de Riesgos",
    icono: "⚠️",
    preguntas: [

{
    texto: "¿Cuál de las siguientes afirmaciones sobre los Delegados de Prevención es correcta según el art. 35 de la Ley 31/1995?",
    opciones: [
        "Son designados por el empresario entre los trabajadores con formación preventiva acreditada.",
        "Son representantes de los trabajadores con funciones específicas en materia de prevención de riesgos en el trabajo.",
        "Son técnicos del Servicio de Prevención con representación sindical reconocida."
    ],
    correcta: 1,
    explicacion: "El art. 35.1 de la Ley 31/1995 los define como <strong>representantes de los trabajadores</strong> con funciones específicas en prevención. No son designados por el empresario ni son técnicos del Servicio de Prevención."
},

{
    texto: "Los Delegados de Prevención se designan por y entre los representantes del personal, en el ámbito de los órganos de representación previstos en las normas a que se refiere el artículo:",
    opciones: [
        "Artículo 33 de la Ley 31/1995.",
        "Artículo 35 de la Ley 31/1995.",
        "Artículo 34 de la Ley 31/1995."
    ],
    correcta: 2,
    explicacion: "El art. 35.2 establece que la designación se produce en el ámbito de los órganos de representación previstos en las normas del <strong>artículo 34</strong> de la propia Ley 31/1995, que regula los órganos de representación del personal."
},

{
    texto: "El criterio legal para determinar el número de Delegados de Prevención es:",
    opciones: [
        "El número de representantes sindicales presentes en la empresa.",
        "El nivel de riesgo de la actividad y la siniestralidad del último trienio.",
        "La plantilla del centro de trabajo."
    ],
    correcta: 2,
    explicacion: "El art. 35.2 establece que el número de Delegados se determina en función de <strong>la plantilla del centro de trabajo</strong>, conforme a la escala regulada. Ni la siniestralidad ni la representación sindical son el criterio."
},

{
    texto: "Un centro de trabajo pasa de 49 a 50 trabajadores. ¿Cuántos Delegados de Prevención corresponden tras el incremento?",
    opciones: [
        "Pasa de 1 a 2 Delegados.",
        "Sigue con 2 Delegados; no hay cambio.",
        "Pasa de 2 a 3 Delegados."
    ],
    correcta: 1,
    explicacion: "Tanto el tramo 31-49 como el tramo 50-100 corresponden a <strong>2 Delegados de Prevención</strong>. Pasar de 49 a 50 no supone ningún cambio. Es la trampa más habitual de la escala del art. 35.2."
},

{
    texto: "¿En qué punto exacto de la escala del art. 35.2 se produce el primer incremento tras el tramo 50-100?",
    opciones: [
        "A partir de 100 trabajadores, que pasa a 3 Delegados.",
        "A partir de 101 trabajadores, que pasa a 3 Delegados.",
        "A partir de 150 trabajadores, que pasa a 3 Delegados."
    ],
    correcta: 1,
    explicacion: "El salto de 2 a <strong>3 Delegados</strong> se produce en el tramo d), que comienza en <strong>101 trabajadores</strong>. Con exactamente 100 aún se está en el tramo c) con 2 delegados."
},

{
    texto: "Un centro tiene exactamente 500 trabajadores y otro tiene 501. ¿Cuántos Delegados de Prevención tiene cada uno?",
    opciones: [
        "Ambos tienen 3 Delegados.",
        "El de 500 tiene 4 Delegados y el de 501 tiene 4 Delegados.",
        "El de 500 tiene 3 Delegados y el de 501 tiene 4 Delegados."
    ],
    correcta: 2,
    explicacion: "El tramo d) (101-500) corresponde a <strong>3 Delegados</strong> y el tramo e) (501-1.000) corresponde a <strong>4 Delegados</strong>. El límite exacto 500/501 es otro punto de cambio que se pregunta frecuentemente."
},

{
    texto: "¿Cuántos Delegados de Prevención corresponden a un centro con 1.800 trabajadores?",
    opciones: [
        "4 Delegados de Prevención.",
        "6 Delegados de Prevención.",
        "5 Delegados de Prevención."
    ],
    correcta: 2,
    explicacion: "1.800 trabajadores cae en el tramo f) del art. 35.2 (1.001-2.000), que corresponde a <strong>5 Delegados de Prevención</strong>. El tramo anterior (501-1.000) tiene 4 y el siguiente (2.001-3.000) tiene 6."
},

{
    texto: "¿Cuál es el número máximo de Delegados de Prevención que fija la escala del art. 35.2 de la Ley 31/1995?",
    opciones: [
        "10 Delegados, para centros de más de 5.000 trabajadores.",
        "8 Delegados, para centros de 4.001 trabajadores en adelante.",
        "9 Delegados, para centros de 5.001 trabajadores en adelante."
    ],
    correcta: 1,
    explicacion: "La escala del art. 35.2 cierra en el tramo i): <strong>8 Delegados de Prevención</strong> para centros de 4.001 trabajadores en adelante. No hay incrementos adicionales por encima de ese umbral."
},

{
    texto: "Un centro de trabajo tiene 3.200 empleados. ¿Cuántos Delegados de Prevención le corresponden?",
    opciones: [
        "6 Delegados de Prevención.",
        "8 Delegados de Prevención.",
        "7 Delegados de Prevención."
    ],
    correcta: 2,
    explicacion: "3.200 trabajadores está en el tramo h) del art. 35.2 (3.001-4.000), que corresponde a <strong>7 Delegados de Prevención</strong>. El tramo anterior (2.001-3.000) tiene 6 y el siguiente (4.001 en adelante) tiene 8."
},

{
    texto: "¿Cuántos tramos contempla la escala de Delegados de Prevención del art. 35.2 de la Ley 31/1995?",
    opciones: [
        "7 tramos, desde 6 trabajadores hasta más de 3.000.",
        "9 tramos, desde 6 trabajadores hasta 4.001 en adelante.",
        "8 tramos, desde 1 trabajador hasta 4.000."
    ],
    correcta: 1,
    explicacion: "La escala del art. 35.2 tiene <strong>9 tramos</strong> (letras a a i), que van desde el tramo a) de 6 a 30 trabajadores hasta el tramo i) de 4.001 en adelante. El primer tramo parte de 6, no de 1 trabajador."
},

{
    texto: "El art. 36 de la Ley 31/1995 estructura las atribuciones de los Delegados de Prevención en dos categorías. ¿Cuál es la diferencia entre competencias y facultades?",
    opciones: [
        "Las competencias son obligaciones y las facultades son derechos potestativos de ejercicio discrecional.",
        "Las competencias corresponden al Delegado individualmente; las facultades solo pueden ejercerse en el seno del Comité.",
        "Las competencias definen el ámbito de actuación; las facultades son los instrumentos concretos para ejercerlas."
    ],
    correcta: 2,
    explicacion: "El art. 36 distingue dos niveles: las <strong>competencias</strong> (art. 36.1) definen qué puede hacer el Delegado en su ámbito; las <strong>facultades</strong> (art. 36.2) son los instrumentos concretos de que dispone para ejercer esas competencias."
},

{
    texto: "¿Cuál de estas atribuciones del art. 36 es una COMPETENCIA y no una facultad?",
    opciones: [
        "Formular al empresario propuestas dirigidas a la mejora de los niveles de protección.",
        "Tener acceso, con las limitaciones del art. 22.4, a la información sobre condiciones de trabajo.",
        "Ser consultado por el empresario, con carácter previo a su ejecución, sobre decisiones de planificación y organización del trabajo."
    ],
    correcta: 2,
    explicacion: "Ser consultado previamente sobre decisiones de planificación, organización del trabajo y nuevas tecnologías es una <strong>competencia</strong> del art. 36.1.c). Formular propuestas (art. 36.2.d) y el acceso a información (art. 36.2.b) son <strong>facultades</strong>."
},

{
    texto: "¿Con qué carácter temporal debe el empresario consultar a los Delegados de Prevención según el art. 36.1.c)?",
    opciones: [
        "Con carácter posterior, para evaluar el impacto de las decisiones ya tomadas.",
        "Con carácter simultáneo, en el momento de la ejecución de las decisiones.",
        "Con carácter previo a la ejecución de las decisiones."
    ],
    correcta: 2,
    explicacion: "El art. 36.1.c) exige que la consulta se realice <strong>con carácter previo a su ejecución</strong>. Esto convierte al Delegado en un interlocutor que debe ser oído antes de adoptar la decisión, no después."
},

{
    texto: "La facultad de acompañar a los técnicos en evaluaciones preventivas del art. 36.2.a) ¿a qué competencia sirve instrumentalmente?",
    opciones: [
        "A la competencia de colaborar con la dirección en la mejora preventiva (art. 36.1.a).",
        "A la competencia de promover la cooperación de los trabajadores (art. 36.1.b).",
        "A la competencia de vigilancia y control del cumplimiento normativo (art. 36.1.d)."
    ],
    correcta: 2,
    explicacion: "Acompañar a los técnicos en evaluaciones es un instrumento para ejercer la <strong>vigilancia y control del cumplimiento de la normativa preventiva</strong> (art. 36.1.d). Las facultades del art. 36.2 son los medios para ejercer las competencias del art. 36.1."
},

{
    texto: "El acceso del Delegado de Prevención a la información sobre condiciones de trabajo está limitado por el art. 22.4 LPRL. ¿Qué protege específicamente ese límite?",
    opciones: [
        "Los secretos comerciales e industriales de la empresa.",
        "La confidencialidad de los datos médicos individuales de los trabajadores.",
        "La información sobre evaluaciones de riesgos pendientes de aprobación."
    ],
    correcta: 1,
    explicacion: "El art. 22.4 de la LPRL protege específicamente la <strong>confidencialidad de los datos médicos individuales</strong> de los trabajadores. El personal médico y la autoridad sanitaria son los únicos que acceden a los resultados individuales; al Delegado solo pueden comunicársele las conclusiones de carácter colectivo."
},

{
    texto: "Según el art. 36.2.d), el Delegado de Prevención puede formular propuestas de mejora al empresario. ¿Puede también trasladarlas al Comité de Seguridad y Salud?",
    opciones: [
        "No; las propuestas al Comité son competencia exclusiva del empresario.",
        "Solo si el Comité lo solicita expresamente en reunión ordinaria.",
        "Sí; puede efectuar propuestas tanto al empresario como al Comité para su discusión."
    ],
    correcta: 2,
    explicacion: "El PPRL del Ayuntamiento de Madrid amplía esta facultad: el Delegado puede <strong>efectuar propuestas tanto al empresario como al Comité de Seguridad y Salud</strong> para su discusión en el mismo. No queda limitado al cauce empresarial."
},

{
    texto: "El art. 37.1 de la Ley 31/1995 remite para las garantías de los Delegados de Prevención al:",
    opciones: [
        "Artículo 37 del Estatuto Básico del Empleado Público.",
        "Artículo 64 del Estatuto de los Trabajadores, sobre derechos de información.",
        "Artículo 68 del Estatuto de los Trabajadores, sobre garantías de los representantes."
    ],
    correcta: 2,
    explicacion: "El art. 37.1 de la LPRL remite expresamente al <strong>art. 68 del Estatuto de los Trabajadores</strong>, que regula las garantías de los representantes del personal: crédito de horas, garantía ante despido y sanciones, y prioridad de permanencia."
},

{
    texto: "Un Delegado de Prevención accede a información sobre un accidente grave durante el ejercicio de sus funciones y, un año después, cesa en el cargo. ¿Qué ocurre con su deber de sigilo?",
    opciones: [
        "Se extingue automáticamente con el cese, salvo pacto en contrario.",
        "Se reduce a la información médica, extinguiéndose para el resto de datos.",
        "Se mantiene, ya que el art. 37.3 no limita el deber de sigilo al período de mandato."
    ],
    correcta: 2,
    explicacion: "El art. 37.3 no fija ningún límite temporal: el deber de sigilo <strong>se mantiene incluso tras cesar en el cargo</strong>, abarcando toda la información obtenida en el desempeño de las funciones, sin distinción por tipo de dato."
},

{
    texto: "¿Sobre qué información recae el deber de sigilo del art. 37.3 de la Ley 31/1995?",
    opciones: [
        "Solo los datos médicos y de salud de los trabajadores.",
        "Toda la información a la que el Delegado haya tenido acceso como consecuencia del desempeño de sus funciones.",
        "La información clasificada como confidencial por el empresario en el plan de prevención."
    ],
    correcta: 1,
    explicacion: "El art. 37.3 establece el sigilo sobre <strong>toda la información</strong> a la que el Delegado acceda en el desempeño de sus funciones, sin restricción por tipo. No se limita a datos médicos ni requiere clasificación previa."
},

{
    texto: "¿Cuál de las siguientes caracterizaciones del Comité de Seguridad y Salud es la que recoge literalmente el art. 38.1 de la Ley 31/1995?",
    opciones: [
        "Órgano ejecutivo de gestión de la prevención de riesgos en la empresa.",
        "Órgano consultivo y técnico de representación conjunta de empresa y trabajadores.",
        "Órgano paritario y colegiado de participación destinado a la consulta regular y periódica."
    ],
    correcta: 2,
    explicacion: "El art. 38.1 define el Comité literalmente como <strong>órgano paritario y colegiado de participación destinado a la consulta regular y periódica</strong> de las actuaciones de la empresa en materia de prevención. No es ejecutivo ni meramente técnico."
},

{
    texto: "La naturaleza paritaria del Comité de Seguridad y Salud implica que la representación empresarial:",
    opciones: [
        "Debe superar en número a los Delegados de Prevención para reflejar la autoridad directiva.",
        "Debe ser igual en número al de los Delegados de Prevención.",
        "Puede ser inferior si así lo acuerdan las partes en el reglamento de funcionamiento."
    ],
    correcta: 1,
    explicacion: "El art. 38.2 establece que el Comité estará formado por los Delegados de Prevención de una parte, y el empresario y/o sus representantes en <strong>número igual al de los Delegados</strong> de la otra. La paridad es un requisito legal, no disponible por acuerdo."
},

{
    texto: "¿Cuál de las siguientes es una COMPETENCIA del Comité de Seguridad y Salud según el art. 39.1, y no una facultad?",
    opciones: [
        "Conocer cuantos documentos e informes relativos a las condiciones de trabajo sean necesarios.",
        "Promover iniciativas sobre métodos y procedimientos para la efectiva prevención de los riesgos.",
        "Conocer y analizar los daños producidos en la salud o integridad física de los trabajadores."
    ],
    correcta: 1,
    explicacion: "Promover iniciativas sobre métodos y procedimientos para la prevención es una <strong>competencia</strong> del Comité (art. 39.1.b). Conocer documentos e informes (art. 39.2.a) y conocer y analizar los daños (art. 39.2.b) son <strong>facultades</strong>."
},

{
    texto: "El Comité de Seguridad y Salud tiene entre sus competencias participar en la elaboración de los planes de prevención. ¿En qué momento deben debatirse en su seno los proyectos de planificación?",
    opciones: [
        "Después de su aprobación, para hacer seguimiento de su implementación.",
        "Solo cuando los Delegados de Prevención lo soliciten expresamente por escrito.",
        "Antes de su puesta en práctica y en lo referente a su incidencia en la prevención de riesgos."
    ],
    correcta: 2,
    explicacion: "El PPRL establece que en el seno del Comité se debatirán los proyectos <strong>antes de su puesta en práctica y en lo referente a su incidencia en la prevención de riesgos</strong>. Es una función previa y de participación, no de seguimiento posterior."
},

{
    texto: "Un Comité de Seguridad y Salud desea visitar los centros de trabajo para conocer la situación preventiva. ¿Es esto una competencia o una facultad, y en qué artículo se recoge?",
    opciones: [
        "Es una competencia del art. 39.1, pues define el ámbito propio de actuación del Comité.",
        "Es una facultad del art. 39.2, pues constituye un instrumento para ejercer la competencia de conocer la situación preventiva.",
        "No está recogida en el art. 39; deriva de la naturaleza paritaria del Comité del art. 38."
    ],
    correcta: 1,
    explicacion: "El PPRL recoge la visita a los centros como <strong>facultad</strong> del Comité, ejercitable para conocer directamente la situación preventiva (competencia del art. 39.1.c). La facultad de visitar es el instrumento; la competencia es el ámbito."
},

{
    texto: "El Acuerdo sobre Condiciones de Trabajo del Ayuntamiento de Madrid regula la salud laboral en el Capítulo IX. ¿A qué personal es de aplicación?",
    opciones: [
        "Solo al personal de los Organismos Autónomos, ya que el Ayuntamiento tiene normativa propia.",
        "Al personal funcionario de carrera del Ayuntamiento de Madrid, excluido el personal laboral.",
        "Al personal funcionario y laboral del Ayuntamiento de Madrid y sus Organismos Autónomos."
    ],
    correcta: 2,
    explicacion: "El Acuerdo-Convenio se aplica al <strong>personal funcionario y laboral del Ayuntamiento de Madrid y sus Organismos Autónomos</strong>. No excluye ninguno de los dos colectivos ni se limita a los OO.AA."
},

{
    texto: "Según el art. 46 del Acuerdo-Convenio, el Servicio de Prevención del Ayuntamiento puede ser:",
    opciones: [
        "Exclusivamente propio, dada la dimensión del Ayuntamiento de Madrid.",
        "Propio o mancomunado.",
        "Ajeno, contratado con una entidad especializada acreditada."
    ],
    correcta: 1,
    explicacion: "El art. 46 del Acuerdo-Convenio prevé que el Servicio de Prevención sea <strong>propio o mancomunado</strong>. La modalidad mancomunada permite compartirlo con otras Administraciones. No se contempla la modalidad ajena."
},

{
    texto: "La vigilancia de la salud del art. 48 del Acuerdo-Convenio tiene dos características esenciales. ¿Cuáles son?",
    opciones: [
        "Obligatoria para todos y gestionada exclusivamente por el Servicio de Prevención propio.",
        "Periódica y en función de los riesgos inherentes al trabajo, respetando la intimidad y confidencialidad médica.",
        "Anual y uniforme para todos los empleados, con comunicación de resultados a la dirección."
    ],
    correcta: 1,
    explicacion: "El art. 48 exige que la vigilancia sea <strong>periódica y en función de los riesgos inherentes al trabajo</strong>, y que respete en todo caso <strong>el derecho a la intimidad y la confidencialidad de la información médica</strong>. No es uniforme para todos ni se comunican resultados individuales a la dirección."
},

{
    texto: "El art. 52 del Acuerdo-Convenio obliga a la Administración a garantizar formación en prevención. ¿Qué requisito específico impone?",
    opciones: [
        "Que sea formación acreditada por el Instituto Nacional de Seguridad y Salud en el Trabajo.",
        "Que sea formación uniforme para todos los empleados, impartida por el Servicio de Prevención.",
        "Que sea formación adaptada a los riesgos del puesto de trabajo de cada empleado."
    ],
    correcta: 2,
    explicacion: "El art. 52 exige que la formación sea <strong>adaptada a los riesgos del puesto de trabajo</strong> de cada persona. No es una formación genérica ni requiere acreditación por el INSST; la clave es la adaptación al puesto concreto."
},

{
    texto: "¿Qué artículo del Acuerdo-Convenio del Ayuntamiento de Madrid regula la participación del personal en prevención de riesgos y a través de qué cauce?",
    opciones: [
        "Art. 50: directamente y de forma individual ante el Servicio de Prevención.",
        "Art. 49: a través de sus representantes, conforme a la normativa vigente.",
        "Art. 51: mediante asambleas trimestrales convocadas por el Comité de Seguridad y Salud."
    ],
    correcta: 1,
    explicacion: "El <strong>art. 49</strong> del Acuerdo-Convenio establece que el personal participará en las cuestiones preventivas <strong>a través de sus representantes</strong>, conforme a la normativa vigente. El art. 50 regula los Delegados de Prevención y el art. 51 el Comité."
},

{
    texto: "El art. 46.5 del Acuerdo-Convenio regula la revisión anual del Plan de Prevención. ¿Quién la realiza y en qué plazo debe aprobarse?",
    opciones: [
        "La Dirección General de Función Pública, en el segundo trimestre del año.",
        "El Comité de Seguridad y Salud, antes del 31 de diciembre de cada año.",
        "El Servicio de Prevención, con participación de los Delegados en la Mesa General de Negociación, en el primer trimestre."
    ],
    correcta: 2,
    explicacion: "El art. 46.5 establece que la revisión anual será realizada por el <strong>Servicio de Prevención</strong> y que para su aprobación, en el <strong>primer trimestre</strong> del año, deberá contarse con la participación de los Delegados de Prevención en el marco de la <strong>Mesa General de Negociación</strong>."
},

{
    texto: "El Real Decreto Legislativo 5/2015 aprueba el Texto Refundido del EBEP. ¿Qué RDL aprueba el Estatuto de los Trabajadores?",
    opciones: [
        "El Real Decreto Legislativo 1/2015, de 24 de julio.",
        "El Real Decreto Legislativo 3/2015, de 23 de octubre.",
        "El Real Decreto Legislativo 2/2015, de 23 de octubre."
    ],
    correcta: 2,
    explicacion: "El <strong>Real Decreto Legislativo 2/2015, de 23 de octubre</strong> aprueba el Texto Refundido del Estatuto de los Trabajadores. El RDL 3/2015 aprueba la Ley de Empleo. Distinguir los números de estos tres RDL es un dato examinable."
},

{
    texto: "Según el art. 32 del EBEP, la negociación colectiva de los empleados públicos se rige por:",
    opciones: [
        "El Estatuto de los Trabajadores, aplicado directamente y sin especialidades.",
        "La legislación específica y por lo dispuesto en el propio Estatuto Básico.",
        "Los acuerdos alcanzados en cada mesa de negociación, con carácter preferente sobre cualquier norma estatal."
    ],
    correcta: 1,
    explicacion: "El art. 32 del EBEP remite a <strong>la legislación específica y al propio Estatuto</strong>. El ET no se aplica directamente a los empleados públicos en materia de negociación; existe un régimen propio con mesas de negociación y procedimientos específicos."
},

{
    texto: "¿Qué diferencia esencial existe entre las Juntas de Personal (art. 34 EBEP) y los Delegados de Personal (art. 35 EBEP)?",
    opciones: [
        "Las Juntas representan al personal laboral; los Delegados de Personal representan al personal funcionario.",
        "Las Juntas se constituyen en centros de más de 50 funcionarios; los Delegados en centros de menos de 10.",
        "Las Juntas son el órgano de representación del personal funcionario; los Delegados de Personal actúan cuando no procede constituir Junta."
    ],
    correcta: 2,
    explicacion: "Ambas figuras representan al <strong>personal funcionario</strong>, pero son alternativas: las <strong>Juntas de Personal</strong> se constituyen cuando hay suficiente representación; los <strong>Delegados de Personal</strong> actúan <strong>cuando no procede constituir Junta</strong>. No coexisten simultáneamente."
},

{
    texto: "El art. 37 del EBEP reconoce garantías a los representantes del personal. ¿En qué se diferencia esta remisión de la del art. 37.1 de la Ley 31/1995?",
    opciones: [
        "Ambos preceptos remiten al art. 68 ET, sin ninguna diferencia.",
        "El EBEP remite genéricamente a las garantías legalmente establecidas; la Ley 31/1995 remite expresamente al art. 68 del Estatuto de los Trabajadores.",
        "El EBEP fija garantías propias y más amplias que las del art. 68 ET."
    ],
    correcta: 1,
    explicacion: "El art. 37 del <strong>EBEP</strong> hace una remisión genérica a <strong>las garantías legalmente establecidas</strong>, sin citar el ET. El art. 37.1 de la <strong>Ley 31/1995</strong> remite expresamente al <strong>art. 68 ET</strong>. Esta distinción es técnicamente relevante y examinable."
},

{
    texto: "¿A través de qué figura representa el EBEP los intereses profesionales de los empleados públicos según su art. 36?",
    opciones: [
        "La Administración, como garante del interés general y empleadora.",
        "Los sindicatos con mayor representatividad en el ámbito de la Administración.",
        "Los órganos de representación del personal, que tienen encomendada la defensa de sus intereses profesionales."
    ],
    correcta: 2,
    explicacion: "El art. 36 del EBEP atribuye a los <strong>órganos de representación del personal</strong> la función de defender los intereses profesionales de los empleados públicos. Los sindicatos tienen su ámbito propio en la negociación colectiva."
},

{
    texto: "El PPRL del Ayuntamiento de Madrid de 2020 actualiza el anterior plan de 2009. ¿Qué documento lo comprometió formalmente?",
    opciones: [
        "El Acuerdo de Junta de Gobierno de 27 de junio de 2019.",
        "La Estrategia de Transformación de la Gestión de Recursos Humanos 2020-2023, suscrita por la Administración y los agentes sociales.",
        "La Instrucción de la Subdirección General de Prevención de Riesgos Laborales de enero de 2020."
    ],
    correcta: 1,
    explicacion: "La necesidad de actualizar el PPRL fue reconocida en la <strong>Estrategia de Transformación de la Gestión de Recursos Humanos 2020-2023</strong>, suscrita unánimemente por la Administración y los agentes sociales, comprometiéndose a su negociación y aprobación."
},

{
    texto: "El modelo de seguridad del PPRL del Ayuntamiento de Madrid tiene una doble dimensión. ¿Cuáles son?",
    opciones: [
        "Dimensión técnica (equipos y condiciones) y dimensión formativa (capacitación del personal).",
        "Dimensión preventiva (antes del accidente) y dimensión correctiva (después del accidente).",
        "Dimensión horizontal (técnica, organización, condiciones, relaciones sociales, factores ambientales) y vertical (cadena jerárquica)."
    ],
    correcta: 2,
    explicacion: "El PPRL adopta un modelo de seguridad integrado proyectado en doble dimensión: <strong>horizontal</strong>, sobre la técnica, organización del trabajo, condiciones, relaciones sociales y factores ambientales; y <strong>vertical</strong>, sobre la cadena jerárquica de mando en todos sus niveles."
},

{
    texto: "¿Qué estructura orgánica tiene el Servicio de Prevención del Ayuntamiento de Madrid según el PPRL?",
    opciones: [
        "Un equipo único centralizado con especialistas contratados según necesidades puntuales.",
        "Equipos especializados por disciplina preventiva, sin integración entre ellos.",
        "Equipos multidisciplinares integrados, compuestos por técnicos de cada una de las cuatro especialidades."
    ],
    correcta: 2,
    explicacion: "El Servicio de Prevención se estructura en <strong>equipos multidisciplinares integrados</strong>, compuestos por técnicos de cada una de las cuatro especialidades preventivas (Medicina del Trabajo, Seguridad, Higiene Industrial y Ergonomía/Psicosociología). Actúan de forma integrada en el ámbito del Servicio de Prevención Único."
},

{
    texto: "Según el PPRL, ¿cuántos centros de trabajo del Ayuntamiento de Madrid se encuentran fuera del término municipal de Madrid?",
    opciones: [
        "Ninguno; todos los centros están dentro del término municipal de Madrid.",
        "Varios centros, ubicados en municipios de la Comunidad de Madrid como Coslada, Tres Cantos, Cercedilla y Pozuelo.",
        "Solo uno, la Central de Comunicaciones del SAMUR en Pozuelo de Alarcón."
    ],
    correcta: 1,
    explicacion: "El PPRL recoge que <strong>varios centros están fuera del término municipal de Madrid</strong>: almacenes en Coslada, centros en Tres Cantos, Cercedilla, Colmenar Viejo y Arganda del Rey, y la Central de Comunicaciones del SAMUR en Pozuelo de Alarcón. Todos pertenecen a la Comunidad de Madrid."
},

{
    texto: "Según el PPRL, ¿qué obligación tienen las Áreas de Gobierno respecto a la designación de interlocutores en prevención?",
    opciones: [
        "Designar al menos a dos personas por Área, una para el ámbito técnico y otra para el administrativo.",
        "No existe esta obligación en el PPRL; la interlocución corresponde siempre al Servicio de Prevención.",
        "Designar al menos a una persona por cada Área de Gobierno, Distrito y Organismo Autónomo como interlocutor en materia de prevención."
    ],
    correcta: 2,
    explicacion: "El PPRL establece que los titulares de los centros directivos deberán <strong>designar al menos a una persona por cada Área de Gobierno, Distrito y Organismo Autónomo</strong> que actúe como interlocutor en materia de prevención. Su formación, si carece de ella, será impartida por el Servicio de Prevención."
},

{
    texto: "Según el PPRL, ¿en qué supuestos deben volver a evaluarse los puestos de trabajo tras la evaluación inicial?",
    opciones: [
        "Solo cuando se produzcan accidentes de trabajo con baja superior a 30 días.",
        "Cuando cambien las condiciones de trabajo, se introduzcan nuevas tecnologías, se incorporen personas especialmente sensibles o se detecten daños para la salud.",
        "Únicamente cuando lo ordene la Inspección de Trabajo en el marco de una actuación planificada."
    ],
    correcta: 1,
    explicacion: "El PPRL, siguiendo el RD 39/1997, establece que la evaluación debe actualizarse cuando: cambien las <strong>condiciones de trabajo</strong>, se elijan nuevos equipos o <strong>nuevas tecnologías</strong>, se incorporen <strong>personas especialmente sensibles</strong>, se detecten <strong>daños para la salud</strong> o se aprecien actividades preventivas inadecuadas."
},

{
    texto: "¿Cuál es el orden de prioridad en la adopción de medidas preventivas según el art. 15 LPRL y el PPRL?",
    opciones: [
        "Primero los EPIs, luego la protección colectiva y finalmente la organización del trabajo.",
        "Primero evitar el riesgo; si no es posible, evaluarlo y adoptar medidas; los EPIs son el último recurso.",
        "Primero la evaluación de riesgos, luego la planificación y finalmente la formación del personal."
    ],
    correcta: 1,
    explicacion: "El art. 15.1.a) LPRL establece como primer principio <strong>evitar el riesgo</strong>. Si no puede evitarse, se evalúa y planifica. Los EPIs se utilizan solo <strong>cuando los riesgos no puedan evitarse o limitarse suficientemente por medios técnicos de protección colectiva o medidas de organización</strong>. Son el último recurso."
},

{
    texto: "La Comisión Permanente del Comité de Seguridad y Salud se reúne mensualmente, con dos excepciones. ¿Cuáles son?",
    opciones: [
        "Los meses de julio y agosto.",
        "Los meses de diciembre y agosto, por coincidir con períodos festivos.",
        "Los meses en que se reúne el Comité y el mes de agosto."
    ],
    correcta: 2,
    explicacion: "La Comisión Permanente se reúne mensualmente salvo <strong>en los meses en que se reúne el Comité de Seguridad y Salud</strong> (trimestralmente) y <strong>el mes de agosto</strong>. En los meses de Comité, es este quien celebra la reunión."
},

{
    texto: "¿Qué quórum exige el PPRL para que las reuniones de la Comisión Permanente sean válidamente celebradas?",
    opciones: [
        "La mayoría absoluta de los representantes de cada parte.",
        "La unanimidad de los Delegados de Prevención presentes.",
        "Un tercio de los representantes de la Administración en el Comité y de los Delegados de Prevención según representatividad."
    ],
    correcta: 2,
    explicacion: "El PPRL fija un quórum reducido de <strong>un tercio</strong> de los representantes de la Administración en el Comité y de los Delegados de Prevención según representatividad. Este quórum inferior al del Comité permite mayor agilidad operativa."
},

{
    texto: "Las actuaciones urgentes de la Comisión Permanente que deban realizarse antes de poder trasladarlas al Comité:",
    opciones: [
        "Solo pueden adoptarse si los Delegados de Prevención lo aprueban por unanimidad.",
        "Requieren siempre la aprobación previa del Comité aunque sea en sesión extraordinaria.",
        "Pueden ejecutarse de forma inmediata, dando traslado posterior al Comité."
    ],
    correcta: 2,
    explicacion: "El PPRL establece que, excepcionalmente, las actuaciones que deban realizarse con carácter urgente <strong>pueden ejecutarse de forma inmediata</strong>, dando traslado de todas sus actuaciones al Comité sin necesidad de aprobación previa."
},

{
    texto: "El PPRL del Ayuntamiento amplía las facultades del Delegado de Prevención respecto a la Ley 31/1995 en materia de acompañamiento. ¿En qué consiste esa ampliación?",
    opciones: [
        "Pueden acompañar al Alcalde en las visitas de inspección interna a los centros municipales.",
        "Pueden acompañar no solo a los técnicos en evaluaciones sino también a los Inspectores de Trabajo y Seguridad Social en sus visitas.",
        "Pueden realizar visitas autónomas sin necesidad de acompañar a ningún técnico o inspector."
    ],
    correcta: 1,
    explicacion: "El PPRL amplía la facultad del art. 36.2.a) LPRL: los Delegados pueden acompañar tanto a los <strong>técnicos de prevención en las evaluaciones</strong> como a los <strong>Inspectores de Trabajo y Seguridad Social en las visitas y verificaciones</strong> que realicen en los centros de trabajo."
},

{
    texto: "Según el PPRL, cuando el Delegado recibe información sobre daños producidos en la salud de los trabajadores, ¿puede presentarse en el lugar de los hechos fuera de su jornada?",
    opciones: [
        "No; la presentación fuera de jornada requiere autorización expresa del responsable del centro.",
        "Solo si los daños han causado baja laboral de más de tres días.",
        "Sí; puede presentarse en el lugar de los hechos aun fuera de su jornada laboral para conocer las circunstancias."
    ],
    correcta: 2,
    explicacion: "El PPRL reconoce expresamente la facultad del Delegado de <strong>presentarse en el lugar de los hechos aun fuera de su jornada laboral</strong> una vez que el Ayuntamiento le haya informado de los daños producidos. No requiere autorización del centro ni hay umbral de gravedad."
},

{
    texto: "La función de 'canalizar la participación de los trabajadores en materia de seguridad y salud' que recoge el PPRL para los Delegados:",
    opciones: [
        "Es una competencia que ya está recogida expresamente en el art. 36.1 de la Ley 31/1995.",
        "Es una función adicional recogida en el PPRL que amplía las competencias del art. 36.1 LPRL.",
        "Es una función del Comité de Seguridad y Salud que el PPRL delega en los Delegados."
    ],
    correcta: 1,
    explicacion: "El art. 36.1 LPRL recoge cuatro competencias (colaborar, promover cooperación, ser consultado, vigilar). <strong>Canalizar la participación</strong> de los trabajadores es una <strong>función adicional que el PPRL añade</strong>, ampliando el catálogo de competencias de los Delegados en el ámbito municipal."
},

{
    texto: "Según el PPRL, el Delegado de Prevención puede proponer la paralización de actividades. ¿A quién dirige esa propuesta?",
    opciones: [
        "Al Comité de Seguridad y Salud, para que lo debata en sesión extraordinaria.",
        "Directamente al Servicio de Prevención, que tiene competencia para decretar la paralización.",
        "Al órgano de representación de los trabajadores, para que adopte el acuerdo del art. 21.3 LPRL."
    ],
    correcta: 2,
    explicacion: "El PPRL recoge que el Delegado puede <strong>proponer al órgano de representación de los trabajadores</strong> la adopción del acuerdo de paralización previsto en el art. 21.3 LPRL. El Delegado propone; es el órgano de representación quien adopta el acuerdo."
},

{
    texto: "El registro de Delegados de Prevención que recoge el PPRL tiene las siguientes características:",
    opciones: [
        "Es de carácter reservado, accesible solo a los miembros del Comité de Seguridad y Salud.",
        "Es público y forma parte de la memoria anual de actividades del Comité.",
        "Se publica en el BOAM anualmente, con carácter obligatorio."
    ],
    correcta: 1,
    explicacion: "El PPRL establece que el registro de Delegados de Prevención y sus actividades, elaborado en el seno del Comité, será <strong>público</strong> y formará parte de la <strong>memoria anual de actividades del Comité</strong>. No tiene publicación obligatoria en el BOAM."
},

{
    texto: "El PPRL recoge las obligaciones del personal del Ayuntamiento conforme al art. 29 LPRL. ¿Cuál de las siguientes NO es una obligación del personal según ese precepto?",
    opciones: [
        "Usar adecuadamente las máquinas, equipos, herramientas y sustancias peligrosas.",
        "Cooperar para que el Ayuntamiento pueda garantizar condiciones de trabajo seguras.",
        "Evaluar los riesgos de su puesto de trabajo y proponer medidas correctoras al Servicio de Prevención."
    ],
    correcta: 2,
    explicacion: "Evaluar riesgos y proponer medidas correctoras es función del <strong>Servicio de Prevención</strong>, no del personal. El art. 29 LPRL obliga al personal a usar correctamente equipos, cooperar, informar de situaciones de riesgo, cumplir las medidas adoptadas y utilizar correctamente los EPIs."
},

{
    texto: "Según el art. 29 LPRL y el PPRL, el personal está obligado a informar de situaciones de riesgo. ¿A quién debe dirigir esa información?",
    opciones: [
        "Al Delegado de Prevención del centro, que es el interlocutor natural en materia preventiva.",
        "A sus superiores jerárquicos inmediatos y, en su caso, al Servicio de Prevención.",
        "Directamente a la Inspección de Trabajo si considera que el riesgo es grave."
    ],
    correcta: 1,
    explicacion: "El art. 29 LPRL y el PPRL establecen que el personal debe informar a <strong>sus superiores jerárquicos inmediatos</strong> y, en su caso, al <strong>Servicio de Prevención</strong>. La vía ordinaria es la jerárquica; la Inspección no es el cauce ordinario para la comunicación de riesgos cotidianos."
},

{
    texto: "¿Cuál de los siguientes NO figura entre los documentos que el PPRL exige tener a disposición de la Autoridad Laboral?",
    opciones: [
        "La evaluación de riesgos para la seguridad y la salud en el trabajo.",
        "Los contratos suscritos con la Mutua de Accidentes de Trabajo y su objeto.",
        "La planificación de la actividad preventiva, incluidas las medidas de prevención y protección."
    ],
    correcta: 1,
    explicacion: "Los contratos con la Mutua <strong>no figuran</strong> en la lista de documentación a disposición de la Autoridad Laboral del PPRL. Sí figuran: el Plan de Prevención, la evaluación de riesgos, la planificación preventiva, el registro de entrega de EPIs, la relación de exámenes de salud, la relación de accidentes con baja, la certificación de formación preventiva y la memoria anual."
},

{
    texto: "El PPRL exige documentar la entrega de EPIs. ¿Qué debe constar en ese registro?",
    opciones: [
        "El coste de adquisición de cada EPI y su proveedor.",
        "Solo los EPIs entregados a puestos con riesgo catalogado como alto o muy alto.",
        "El registro documental de entrega de EPIs a cada trabajador."
    ],
    correcta: 2,
    explicacion: "El PPRL recoge entre la documentación obligatoria el <strong>registro documental de entrega de EPIs</strong>. No establece distinción por nivel de riesgo del puesto ni requiere información sobre costes o proveedores en ese registro."
},

{
    texto: "La relación de accidentes de trabajo y enfermedades profesionales que debe estar a disposición de la Autoridad Laboral según el PPRL incluye:",
    opciones: [
        "Solo los accidentes mortales o con incapacidad permanente.",
        "Todos los accidentes e incidentes, aunque no hayan causado baja laboral.",
        "Los que hayan causado al trabajador una incapacidad laboral superior a un día de trabajo."
    ],
    correcta: 2,
    explicacion: "El PPRL circunscribe la obligación de documentar a los accidentes de trabajo y enfermedades profesionales que <strong>hayan causado al trabajador una incapacidad laboral superior a un día de trabajo</strong>. Los incidentes sin baja y los accidentes con baja de un día no entran en esta lista."
},

{
    texto: "Un centro del Ayuntamiento de Madrid tiene 27.000 empleados. Según la escala del art. 35.2 LPRL, ¿cuántos Delegados de Prevención corresponderían si fuera un único centro?",
    opciones: [
        "12 Delegados de Prevención, dado que la plantilla supera los 10.000 trabajadores.",
        "La escala no tiene límite máximo; se añadiría 1 delegado por cada 1.000 adicionales.",
        "8 Delegados de Prevención, que es el máximo de la escala."
    ],
    correcta: 2,
    explicacion: "La escala del art. 35.2 fija un techo de <strong>8 Delegados</strong> para centros de 4.001 trabajadores en adelante, sin incrementos adicionales. Aunque el Ayuntamiento tenga ~27.000 empleados, la escala legal no supera los 8 delegados por centro."
},

{
    texto: "El Comité de Seguridad y Salud del Ayuntamiento de Madrid es único. Si tiene 8 Delegados de Prevención, ¿cuántos representantes aporta la Administración?",
    opciones: [
        "4 representantes, ya que la Administración tiene voto de calidad.",
        "8 representantes, por aplicación del principio de paridad del art. 38.2 LPRL.",
        "16 representantes, para garantizar mayoría en las votaciones."
    ],
    correcta: 1,
    explicacion: "El art. 38.2 LPRL establece paridad estricta: si hay <strong>8 Delegados de Prevención</strong>, la Administración debe aportar también <strong>8 representantes</strong>. El total del Comité sería 16 miembros. No existe voto de calidad ni mayoría garantizada para ninguna parte."
},

{
    texto: "Un Delegado de Prevención del Ayuntamiento detecta en una visita condiciones de trabajo que considera peligrosas. ¿Cuál es la secuencia correcta de actuación según el PPRL?",
    opciones: [
        "Paralizar directamente las actividades afectadas y comunicarlo al Servicio de Prevención.",
        "Recabar del Ayuntamiento la adopción de medidas preventivas y, si procede, proponer al órgano de representación la paralización prevista en el art. 21.3 LPRL.",
        "Denunciarlo directamente a la Inspección de Trabajo sin comunicarlo previamente al Ayuntamiento."
    ],
    correcta: 1,
    explicacion: "La secuencia correcta es: primero <strong>recabar del Ayuntamiento la adopción de medidas preventivas</strong> (facultad del art. 36.2.d LPRL y PPRL); si la situación lo requiere, <strong>proponer al órgano de representación el acuerdo de paralización</strong> del art. 21.3 LPRL. El Delegado no puede decretar la paralización directamente."
},

{
    texto: "¿Qué norma debe cumplir una empresa contratada por el Ayuntamiento que presta servicios en un centro municipal, según el PPRL?",
    opciones: [
        "Está exenta de la normativa preventiva mientras actúe bajo la dirección del Ayuntamiento.",
        "Solo debe cumplir su propio plan de prevención, sin vinculación con el PPRL municipal.",
        "Debe cumplir los requisitos de la normativa vigente en PRL y puede recibir información sobre riesgos del centro conforme al RD 171/2004."
    ],
    correcta: 2,
    explicacion: "El PPRL establece que las empresas contratistas deben <strong>cumplir los requisitos de la normativa vigente en PRL</strong>. Además, conforme al art. 24 LPRL y el <strong>RD 171/2004</strong> sobre coordinación de actividades empresariales, recibirán información sobre los riesgos del centro de trabajo y las medidas preventivas aplicables."
},

{
    texto: "¿Cuál es la diferencia entre el Servicio de Prevención del Ayuntamiento (Madrid Salud) y la Mutua de Accidentes de Trabajo según el PPRL?",
    opciones: [
        "Madrid Salud cubre al personal funcionario y la Mutua al personal laboral.",
        "Son organismos equivalentes con funciones idénticas; la diferencia es solo organizativa.",
        "Madrid Salud gestiona la PRL y la prevención; la Mutua cubre las contingencias derivadas de accidentes de trabajo y enfermedades profesionales."
    ],
    correcta: 2,
    explicacion: "El PPRL distingue claramente: <strong>Madrid Salud</strong> es el Servicio de Prevención que gestiona la actividad preventiva. La <strong>Mutua</strong> es la entidad colaboradora de la Seguridad Social que proporciona asistencia y cobertura de las contingencias derivadas de <strong>accidentes de trabajo y enfermedades profesionales</strong>."
},

{
    texto: "Según el PPRL, la política preventiva del Ayuntamiento debe ser comunicada a todos los niveles de la organización. ¿A través de qué medio se garantiza esa difusión?",
    opciones: [
        "Mediante circulares impresas distribuidas en papel a cada empleado anualmente.",
        "A través de AYRE, la plataforma informática municipal, mediante la difusión de normas e instrucciones en soporte documental o informático.",
        "Mediante sesiones presenciales obligatorias impartidas por el Servicio de Prevención."
    ],
    correcta: 1,
    explicacion: "El PPRL establece que la política preventiva se comunicará mediante la difusión de normas e instrucciones de seguridad y salud laboral en soporte documental o informático a través de <strong>AYRE</strong>, la plataforma informática del Ayuntamiento de Madrid, garantizando una difusión eficiente y completa."
},

{
    texto: "El PPRL prevé que el Sistema de Gestión de Prevención de Riesgos Laborales (SGPRL) del Ayuntamiento tenga capacidad de integrarse con otros sistemas de gestión. ¿Con cuáles?",
    opciones: [
        "Con el Sistema de Gestión Presupuestaria y el Sistema de Gestión de Recursos Humanos.",
        "Con el Sistema de Gestión de la Calidad y el Sistema de Gestión Medioambiental.",
        "Con el Sistema de Gestión de Contratos Públicos y el Sistema de Atención Ciudadana."
    ],
    correcta: 1,
    explicacion: "El PPRL prevé expresamente que el SGPRL tenga capacidad de integrarse con el <strong>Sistema de Gestión de la Calidad</strong> y con el <strong>Sistema de Gestión Medioambiental</strong>. Esta integración responde a una visión de gestión coherente y transversal de la organización."
},

{
    texto: "¿Qué artículo de la Ley 31/1995 sirve de base para la coordinación de actividades empresariales cuando concurren varias empresas en un mismo centro del Ayuntamiento?",
    opciones: [
        "El artículo 38, que regula el Comité de Seguridad y Salud.",
        "El artículo 16, que regula el plan de prevención de riesgos laborales.",
        "El artículo 24, desarrollado por el Real Decreto 171/2004."
    ],
    correcta: 2,
    explicacion: "El <strong>artículo 24 LPRL</strong>, desarrollado reglamentariamente por el <strong>RD 171/2004, de 30 de enero</strong>, regula la coordinación de actividades empresariales cuando en un mismo centro de trabajo coinciden trabajadores de varias empresas. El PPRL remite expresamente a ambas normas."
},

{
    texto: "¿Qué precepto constitucional encomienda a los poderes públicos velar por la seguridad e higiene en el trabajo?",
    opciones: [
        "El artículo 35 de la Constitución Española, sobre el derecho al trabajo.",
        "El artículo 40.2 de la Constitución Española, como principio rector de la política social y económica.",
        "El artículo 149.1.7ª CE, sobre competencias del Estado en legislación laboral."
    ],
    correcta: 1,
    explicacion: "El <strong>artículo 40.2 de la Constitución Española</strong> encomienda a los poderes públicos velar por la seguridad e higiene en el trabajo como uno de los principios rectores de la política social y económica. Es la base constitucional de la Ley 31/1995."
},

{
    texto: "La Ley 31/1995 transpone al ordenamiento español la Directiva 89/391/CEE. ¿Qué regula esta Directiva?",
    opciones: [
        "Exclusivamente la protección de trabajadoras embarazadas y trabajadores menores de edad.",
        "La aplicación de medidas para promover la mejora de la seguridad y de la salud de los trabajadores (marco jurídico general).",
        "La armonización de los sistemas de inspección de trabajo en la Unión Europea."
    ],
    correcta: 1,
    explicacion: "La <strong>Directiva 89/391/CEE</strong> contiene el marco jurídico general de la política preventiva comunitaria sobre aplicación de medidas para promover la mejora de la seguridad y salud de los trabajadores."
},

{
    texto: "Además de la Directiva 89/391/CEE, la Ley 31/1995 transpone otras tres directivas comunitarias. ¿Cuáles son?",
    opciones: [
        "Las directivas 93/104 (ordenación tiempo de trabajo), 2000/54 (agentes biológicos) y 98/24 (agentes químicos).",
        "Las directivas 92/85 (trabajadoras embarazadas), 94/33 (jóvenes) y 91/383 (relaciones temporales).",
        "Las directivas 2003/88 (tiempo de trabajo), 2006/25 (radiaciones ópticas) y 2004/40 (campos electromagnéticos)."
    ],
    correcta: 1,
    explicacion: "La Ley 31/1995 transpone, además de la 89/391 marco, las directivas <strong>92/85</strong> (protección de trabajadoras embarazadas), <strong>94/33</strong> (protección de los jóvenes) y <strong>91/383</strong> (tratamiento de relaciones de trabajo temporales)."
},

{
    texto: "¿Cuál es el objeto de la Ley 31/1995 según su artículo 1?",
    opciones: [
        "Regular la inspección de trabajo y sancionar a las empresas que incumplan la normativa preventiva.",
        "Promover la seguridad y la salud de los trabajadores mediante la aplicación de medidas y el desarrollo de actividades necesarias para la prevención de riesgos derivados del trabajo.",
        "Establecer los sistemas de protección social ante accidentes de trabajo y enfermedades profesionales."
    ],
    correcta: 1,
    explicacion: "El artículo 1 establece que el objeto de la Ley es <strong>promover la seguridad y la salud de los trabajadores</strong> mediante la aplicación de medidas y el desarrollo de las actividades necesarias para la prevención de riesgos derivados del trabajo."
},

{
    texto: "El carácter de la Ley 31/1995 respecto a su contenido es:",
    opciones: [
        "De recomendación orientativa cuya aplicación depende del tamaño de la empresa.",
        "De máximo absoluto; sus disposiciones no pueden ser mejoradas por convenio colectivo.",
        "De derecho necesario mínimo indisponible, susceptible de ser mejorado y desarrollado en los convenios colectivos."
    ],
    correcta: 2,
    explicacion: "Las disposiciones de la Ley tienen carácter de <strong>derecho necesario mínimo indisponible</strong>, pudiendo ser mejoradas y desarrolladas en los convenios colectivos. Esto significa que establecen un suelo de garantías que no puede rebajarse pero sí ampliarse."
},

{
    texto: "La Ley 31/1995 constituye norma básica del régimen estatutario de los funcionarios públicos al amparo de qué artículo de la Constitución?",
    opciones: [
        "El artículo 103 CE, sobre la organización y funcionamiento de la Administración Pública.",
        "El artículo 149.1.7ª CE, sobre legislación laboral.",
        "El artículo 149.1.18ª CE, sobre bases del régimen estatutario de los funcionarios públicos."
    ],
    correcta: 2,
    explicacion: "La Ley 31/1995, al aplicarse también a las Administraciones Públicas, constituye norma básica del régimen estatutario de los funcionarios públicos dictada al amparo del <strong>artículo 149.1.18ª de la Constitución</strong>."
},

{
    texto: "¿Cuántos artículos y disposiciones adicionales tiene la Ley 31/1995 de Prevención de Riesgos Laborales?",
    opciones: [
        "48 artículos y 12 Disposiciones Adicionales.",
        "54 artículos y 17 Disposiciones Adicionales.",
        "60 artículos y 20 Disposiciones Adicionales."
    ],
    correcta: 1,
    explicacion: "La Ley se desarrolla a lo largo de <strong>54 artículos</strong> y <strong>17 Disposiciones Adicionales</strong>, además de 2 Disposiciones Transitorias, 1 Disposición Derogatoria y 2 Disposiciones Finales. Se organiza en 7 Capítulos."
},

{
    texto: "¿Cuál fue la última reforma de la Ley 31/1995 de Prevención de Riesgos Laborales?",
    opciones: [
        "El Real Decreto Legislativo 5/2000, de 4 de agosto, sobre infracciones y sanciones.",
        "La Ley 54/2003, de 12 de diciembre, de reforma del marco normativo de la prevención.",
        "La Ley 35/2014, de 26 de diciembre."
    ],
    correcta: 2,
    explicacion: "La última reforma de la Ley 31/1995 fue realizada por la <strong>Ley 35/2014, de 26 de diciembre</strong>."
},

{
    texto: "¿En cuántos Capítulos se organiza la Ley 31/1995?",
    opciones: [
        "5 Capítulos: objeto, política preventiva, derechos, servicios de prevención y responsabilidades.",
        "7 Capítulos: objeto/ámbito/definiciones, política, derechos/obligaciones, servicios prevención, consulta/participación, fabricantes, responsabilidades/sanciones.",
        "9 Capítulos, correspondientes a cada uno de los títulos competenciales del Estado."
    ],
    correcta: 1,
    explicacion: "La Ley se estructura en <strong>7 Capítulos</strong>: I(objeto, ámbito, definiciones), II(política PRL), III(derechos y obligaciones), IV(servicios de prevención), V(consulta y participación), VI(obligaciones fabricantes/importadores/suministradores), VII(responsabilidades y sanciones)."
},

{
    texto: "Según el art. 3 de la Ley 31/1995, la norma se aplica a:",
    opciones: [
        "Exclusivamente a las relaciones laborales reguladas en el Estatuto de los Trabajadores.",
        "A las relaciones laborales del ET, al personal con relación administrativa o estatutaria al servicio de las AAPP, y a los socios trabajadores de cooperativas.",
        "Solo al personal con contrato de trabajo, excluyendo al personal funcionario."
    ],
    correcta: 1,
    explicacion: "El art. 3 de la LPRL extiende su aplicación a: relaciones laborales reguladas en el <strong>Estatuto de los Trabajadores</strong>, personal con relación <strong>administrativa o estatutaria</strong> al servicio de las AAPP (funcionarios), y <strong>socios trabajadores de cooperativas</strong>."
},

{
    texto: "¿Cuál de las siguientes actividades NO está sujeta a la Ley 31/1995?",
    opciones: [
        "Los centros penitenciarios, que se rigen por el Código Penal en materia de seguridad.",
        "Los centros y establecimientos militares, que tienen normativa específica propia.",
        "El servicio del hogar familiar."
    ],
    correcta: 2,
    explicacion: "La Ley 31/1995 <strong>no será de aplicación</strong> en el ámbito de las funciones públicas de: policía/seguridad/resguardo aduanero, servicios operativos de protección civil/peritaje forense, Fuerzas Armadas/Guardia Civil, y <strong>servicio del hogar familiar</strong>. Los centros militares y penitenciarios sí tienen aplicación con particularidades."
},

{
    texto: "Los centros y establecimientos militares respecto a la Ley 31/1995:",
    opciones: [
        "Están totalmente excluidos de su aplicación.",
        "Tienen aplicación de la Ley con las particularidades previstas en su normativa específica.",
        "Solo se les aplica en caso de accidentes graves o mortales."
    ],
    correcta: 1,
    explicacion: "En los <strong>centros y establecimientos militares</strong> será de aplicación lo dispuesto en la Ley 31/1995 <strong>con las particularidades previstas en su normativa específica</strong>. No están excluidos, sino sujetos a adaptación."
},

{
    texto: "En los establecimientos penitenciarios, la Ley 31/1995:",
    opciones: [
        "Se aplica directamente sin ninguna adaptación especial.",
        "Se adaptará a las particularidades de la Ley 7/1990, de 19 de julio, sobre negociación colectiva y participación en la determinación de las condiciones de trabajo.",
        "Está suspendida por razones de seguridad penitenciaria."
    ],
    correcta: 1,
    explicacion: "En los establecimientos penitenciarios se <strong>adaptará</strong> la Ley 31/1995 a las particularidades de la <strong>Ley 7/1990, de 19 de julio</strong>, sobre negociación colectiva y participación en la determinación de las condiciones de trabajo de los empleados públicos en este ámbito específico."
},

{
    texto: "Según el art. 4 de la Ley 31/1995, se entiende por 'prevención':",
    opciones: [
        "Las medidas de protección individual que el empresario proporciona a los trabajadores.",
        "La evaluación de riesgos realizada por el Servicio de Prevención al inicio de la relación laboral.",
        "El conjunto de actividades o medidas adoptadas o previstas en todas las fases de actividad de la empresa con el fin de evitar o disminuir los riesgos derivados del trabajo."
    ],
    correcta: 2,
    explicacion: "El art. 4.1 define <strong>prevención</strong> como el conjunto de actividades o medidas adoptadas o previstas <strong>en todas las fases de actividad</strong> de la empresa con el fin de evitar o disminuir los riesgos derivados del trabajo."
},

{
    texto: "El 'riesgo laboral' se define en el art. 4 de la Ley 31/1995 como:",
    opciones: [
        "El nivel de peligrosidad asignado oficialmente a cada puesto de trabajo por la Inspección.",
        "Cualquier accidente de trabajo o enfermedad profesional que se haya producido en la empresa.",
        "La posibilidad de que un trabajador sufra un determinado daño derivado del trabajo."
    ],
    correcta: 2,
    explicacion: "El art. 4.2 define <strong>riesgo laboral</strong> como la <strong>posibilidad</strong> de que un trabajador sufra un determinado daño derivado del trabajo. Para calificar un riesgo se valoran conjuntamente la <strong>probabilidad</strong> de que se produzca el daño y la <strong>severidad</strong> del mismo."
},

{
    texto: "Según el art. 4 de la Ley 31/1995, se consideran 'daños derivados del trabajo':",
    opciones: [
        "Exclusivamente los accidentes de trabajo con baja laboral superior a tres días.",
        "Las enfermedades, patologías o lesiones sufridas con motivo u ocasión del trabajo.",
        "Solo las enfermedades profesionales reconocidas por la Seguridad Social."
    ],
    correcta: 1,
    explicacion: "El art. 4.3 define <strong>daños derivados del trabajo</strong> de forma amplia: las enfermedades, patologías o lesiones sufridas <strong>con motivo u ocasión del trabajo</strong>. No se limita a accidentes con baja ni a enfermedades profesionales reconocidas."
},

{
    texto: "¿Qué es un 'riesgo laboral grave e inminente' según el art. 4 de la Ley 31/1995?",
    opciones: [
        "El que se deriva de trabajos en altura superior a 3 metros o con maquinaria pesada.",
        "Cualquier riesgo catalogado oficialmente como de nivel 4 o superior en la evaluación de riesgos.",
        "Aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda suponer un daño grave para la salud de los trabajadores."
    ],
    correcta: 2,
    explicacion: "El art. 4.4 define <strong>riesgo grave e inminente</strong> como aquel que resulte <strong>probable racionalmente</strong> que se materialice en un <strong>futuro inmediato</strong> y pueda suponer un <strong>daño grave</strong> para la salud de los trabajadores."
},

{
    texto: "Se entenderá por 'equipo de trabajo' según el art. 4 de la Ley 31/1995:",
    opciones: [
        "Exclusivamente las herramientas manuales y máquinas accionadas eléctricamente.",
        "El conjunto de trabajadores asignados a una misma tarea o proyecto productivo.",
        "Cualquier máquina, aparato, instrumento o instalación utilizada en el trabajo."
    ],
    correcta: 2,
    explicacion: "El art. 4.6 define <strong>equipo de trabajo</strong> de forma muy amplia: cualquier <strong>máquina, aparato, instrumento o instalación</strong> utilizada en el trabajo. No se refiere al grupo humano ni se limita a un tipo concreto de herramienta."
},

{
    texto: "El art. 4.7 de la Ley 31/1995 define 'condición de trabajo' como cualquier característica del mismo que pueda tener una influencia significativa en la generación de riesgos. ¿Qué elementos incluye específicamente esta definición?",
    opciones: [
        "Solo las características físicas de los locales, instalaciones y equipos existentes.",
        "Las características de los locales, los agentes físicos/químicos/biológicos presentes, los procedimientos para su utilización, y todas las características del trabajo incluidas las relativas a su organización y ordenación.",
        "Únicamente los factores de riesgo psicosocial y la carga mental del puesto."
    ],
    correcta: 1,
    explicacion: "El art. 4.7 da una definición exhaustiva de <strong>condición de trabajo</strong>: características de locales/instalaciones/equipos/productos, naturaleza de agentes físicos/químicos/biológicos, procedimientos de utilización, y <strong>todas las características del trabajo incluidas las relativas a su organización y ordenación</strong>."
},

{
    texto: "Un 'equipo de protección individual' (EPI) según el art. 4.8 de la Ley 31/1995 es:",
    opciones: [
        "Exclusivamente los cascos, guantes y calzado de seguridad homologados.",
        "Cualquier dispositivo de seguridad colectiva instalado en la maquinaria de la empresa.",
        "Cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos."
    ],
    correcta: 2,
    explicacion: "El art. 4.8 define <strong>EPI</strong> como cualquier equipo <strong>destinado a ser llevado o sujetado por el trabajador</strong> para que le proteja de uno o varios riesgos, así como cualquier complemento o accesorio destinado a tal fin."
},

{
    texto: "¿A quién atribuye el art. 9 de la Ley 31/1995 la función de vigilancia y control de la normativa sobre prevención de riesgos laborales?",
    opciones: [
        "Al Servicio de Prevención de cada empresa.",
        "A la Inspección de Trabajo y Seguridad Social.",
        "Al Comité de Seguridad y Salud de la empresa."
    ],
    correcta: 1,
    explicacion: "El art. 9 de la LPRL atribuye la función de <strong>vigilancia y control</strong> del cumplimiento de la normativa sobre prevención de riesgos laborales a la <strong>Inspección de Trabajo y Seguridad Social</strong>."
},

{
    texto: "Entre las funciones de la Inspección de Trabajo en materia preventiva del art. 9, ¿cuál de las siguientes NO está contemplada expresamente?",
    opciones: [
        "Asesorar e informar a las empresas y a los trabajadores sobre la manera más efectiva de cumplir las disposiciones cuya vigilancia tiene encomendada.",
        "Realizar auditorías obligatorias anuales a todas las empresas con Servicio de Prevención propio.",
        "Elaborar los informes solicitados por los Juzgados de lo Social en las demandas deducidas ante los mismos en materia de accidentes de trabajo y enfermedades profesionales."
    ],
    correcta: 1,
    explicacion: "Las funciones del art. 9 incluyen: vigilar, <strong>asesorar e informar</strong>, elaborar <strong>informes para Juzgados de lo Social</strong>, informar a la autoridad laboral sobre accidentes graves, comprobar obligaciones de servicios de prevención, y ordenar paralización ante riesgo grave. Las auditorías obligatorias no son función de la Inspección."
},

{
    texto: "Según el art. 9 de la Ley 31/1995, cuando la Inspección de Trabajo compruebe que la inobservancia de la normativa constituye un riesgo grave e inminente para la seguridad o salud de los trabajadores:",
    opciones: [
        "Debe conceder un plazo de 15 días a la empresa para subsanar las deficiencias.",
        "Debe notificarlo al Comité de Seguridad y Salud para que adopte las medidas oportunas.",
        "Podrá ordenar la paralización inmediata de los trabajos."
    ],
    correcta: 2,
    explicacion: "El art. 9.f) establece que cuando el inspector compruebe un riesgo grave e inminente, <strong>podrá ordenar la paralización inmediata</strong> de los trabajos. Es una facultad de actuación inmediata, no requiere trámite previo ni plazo de subsanación."
},

{
    texto: "El art. 14 de la Ley 31/1995 establece que los trabajadores tienen derecho a una protección eficaz en materia de seguridad y salud en el trabajo. Este derecho supone:",
    opciones: [
        "La obligación de contratar un seguro privado de accidentes adicional a la Seguridad Social.",
        "Que los trabajadores puedan rechazar cualquier tarea que consideren peligrosa sin necesidad de justificación.",
        "La existencia de un correlativo deber del empresario de protección de los trabajadores frente a los riesgos laborales."
    ],
    correcta: 2,
    explicacion: "El art. 14 establece que el derecho a protección eficaz supone la existencia de un <strong>correlativo deber del empresario</strong> de protección de los trabajadores frente a los riesgos laborales. Este deber constituye igualmente un <strong>deber de las Administraciones Públicas</strong> respecto del personal a su servicio."
},

{
    texto: "Las obligaciones de los empresarios en materia preventiva establecidas en la Ley 31/1995:",
    opciones: [
        "Pueden ser transferidas íntegramente al Servicio de Prevención, que asume la responsabilidad.",
        "No se eximen por el hecho de concurrir con entidades especializadas en prevención ni por las acciones de los trabajadores.",
        "Se eximen cuando las acciones preventivas han sido delegadas en trabajadores o servicios especializados."
    ],
    correcta: 1,
    explicacion: "El art. 14 establece expresamente que el cumplimiento de las obligaciones empresariales <strong>no se eximirá</strong> ni por el concurrir con otras entidades especializadas para el desarrollo de actividades de prevención, ni por las acciones que los trabajadores puedan ejercer. La responsabilidad empresarial es indelegable."
},

{
    texto: "El 'derecho básico' del trabajador en materia preventiva según el art. 14 incluye:",
    opciones: [
        "Exclusivamente el derecho a utilizar equipos de protección individual proporcionados por la empresa.",
        "Solo la información sobre los riesgos del puesto de trabajo.",
        "La información, consulta, participación, formación, paralización de la actividad en caso de riesgo grave e inminente, y vigilancia de su estado de salud."
    ],
    correcta: 2,
    explicacion: "El art. 14.2 configura el derecho básico del trabajador como el derecho a: <strong>información, consulta, participación, formación en materia preventiva, paralización de la actividad en caso de riesgo grave e inminente, y vigilancia de su estado de salud</strong>. Es un haz de derechos, no un derecho único."
},

{
    texto: "Según el RD 306/2007, las infracciones leves en materia de prevención de riesgos laborales tienen, en su grado máximo, una sanción de:",
    opciones: [
        "De 2.046 a 8.195 euros.",
        "De 405 a 815 euros.",
        "De 816 a 2.045 euros."
    ],
    correcta: 2,
    explicacion: "El RD 306/2007 actualiza los importes del RDL 5/2000. Las infracciones <strong>leves</strong> tienen multa: grado mínimo 40-405€, grado medio 406-815€, grado <strong>máximo 816-2.045€</strong>."
},

{
    texto: "El importe mínimo de las sanciones por infracciones graves en materia de PRL según el RD 306/2007 es:",
    opciones: [
        "De 40 a 405 euros.",
        "De 2.046 a 8.195 euros.",
        "De 8.196 a 20.490 euros."
    ],
    correcta: 1,
    explicacion: "Las infracciones <strong>graves</strong>: grado mínimo <strong>2.046-8.195€</strong>, grado medio 8.196-20.490€, grado máximo 20.491-40.985€. El umbral de 2.046€ marca el inicio de las infracciones graves."
},

{
    texto: "¿Cuál es el importe máximo que puede alcanzar una sanción por infracción muy grave en materia de prevención de riesgos laborales?",
    opciones: [
        "163.955 euros.",
        "40.985 euros.",
        "819.780 euros."
    ],
    correcta: 2,
    explicacion: "Las infracciones <strong>muy graves</strong>: grado mínimo 40.986-163.955€, grado medio 163.956-409.890€, grado máximo 409.891-<strong>819.780€</strong>. Es el tope máximo de las sanciones en PRL."
},

{
    texto: "Las sanciones impuestas por infracciones muy graves en materia de prevención de riesgos laborales, una vez firmes:",
    opciones: [
        "Se mantendrán en el expediente administrativo sin trascendencia pública.",
        "Se harán públicas en la forma que se determine reglamentariamente.",
        "Solo se publicarán si el empresario reincide en infracciones en un plazo de dos años."
    ],
    correcta: 1,
    explicacion: "El RDL 5/2000 establece que las sanciones impuestas por infracciones <strong>muy graves</strong>, una vez <strong>firmes</strong>, <strong>se harán públicas</strong> en la forma que se determine reglamentariamente. Es una medida de publicidad sancionadora."
},

{
    texto: "Hasta 30 trabajadores, el Delegado de Prevención será:",
    opciones: [
        "Elegido específicamente para el cargo de Delegado de Prevención entre todos los trabajadores.",
        "El Delegado de Personal.",
        "Designado por el empresario entre los trabajadores con formación en prevención."
    ],
    correcta: 1,
    explicacion: "La Ley 31/1995 art. 35.2 establece que hasta 30 trabajadores, el Delegado de Prevención <strong>SERÁ el Delegado de Personal</strong>. No hay elección específica; coinciden ambas figuras."
},

{
    texto: "En una empresa de 31 a 49 trabajadores, ¿cómo se designa el Delegado de Prevención?",
    opciones: [
        "El empresario designa a un trabajador cualificado.",
        "Habrá DOS Delegados de Prevención elegidos directamente por todos los trabajadores.",
        "Será elegido por y entre los Delegados de Personal (habrá UN Delegado de Prevención)."
    ],
    correcta: 2,
    explicacion: "De 31 a 49 trabajadores, habrá <strong>UN Delegado de Prevención elegido por y entre los Delegados de Personal</strong>. Es un caso especial de designación indirecta que conviene saber."
},

{
    texto: "¿A partir de cuántos trabajadores es obligatoria la constitución del Comité de Seguridad y Salud según el art. 38 de la Ley 31/1995?",
    opciones: [
        "A partir de 30 trabajadores.",
        "A partir de 100 trabajadores.",
        "A partir de 50 trabajadores."
    ],
    correcta: 2,
    explicacion: "El art. 38.1 establece que el Comité de Seguridad y Salud <strong>se constituirá en todas las empresas que cuenten con 50 o más trabajadores</strong>. Por debajo de ese umbral, la representación preventiva la ejercen los Delegados de Prevención."
},

{
    texto: "Según el art. 38 de la Ley 31/1995, con qué periodicidad ordinaria se reunirá el Comité de Seguridad y Salud?",
    opciones: [
        "Mensualmente, salvo acuerdo en contrario.",
        "Trimestralmente y siempre que lo solicite alguna de las representaciones en el mismo.",
        "Dos veces al año, en el primer y tercer trimestre."
    ],
    correcta: 1,
    explicacion: "El art. 38.3 establece que el Comité se reunirá <strong>trimestralmente</strong> y siempre que lo solicite alguna de las representaciones en el mismo. Puede haber reuniones extraordinarias a solicitud de parte."
},

{
    texto: "Según el art. 38.3 de la Ley 31/1995, las normas de funcionamiento del Comité de Seguridad y Salud:",
    opciones: [
        "Las establece el empresario previa consulta con los Delegados de Prevención.",
        "Están fijadas exhaustivamente por el RD 39/1997.",
        "Las adopta el propio Comité."
    ],
    correcta: 2,
    explicacion: "El art. 38.3 establece que el Comité <strong>adoptará sus propias normas de funcionamiento</strong>. Tiene autonomía organizativa interna."
},

{
    texto: "En empresas con varios centros de trabajo dotados de Comité de Seguridad y Salud, ¿qué figura puede acordarse con los trabajadores según el art. 38?",
    opciones: [
        "Una Comisión Paritaria de coordinación entre todos los Comités.",
        "Un Comité Intercentros.",
        "Un Delegado de Prevención único para todos los centros."
    ],
    correcta: 1,
    explicacion: "El art. 38.3 prevé que en empresas con varios centros dotados de Comité, podrá acordarse con los trabajadores la creación de un <strong>Comité Intercentros</strong> con las funciones que el acuerdo le atribuya."
},

{
    texto: "El Acuerdo de la Junta de Gobierno de la Ciudad de Madrid de 13 de septiembre de 2012 fija el número actual de Delegados de Prevención del Ayuntamiento de Madrid en:",
    opciones: [
        "29 Delegados, todos adscritos al Ayuntamiento de Madrid.",
        "56 Delegados en total, distribuidos entre el Ayuntamiento, Agencias y Organismos Autónomos.",
        "15 Delegados, que forman el Comité de Seguridad y Salud."
    ],
    correcta: 1,
    explicacion: "El Acuerdo de 13/09/2012 fija <strong>56 Delegados de Prevención en total</strong>: Ayuntamiento 29, Agencia Empleo 3, Agencia Tributaria 7, Informática 6, Madrid Emprende 1, Madrid Salud 7, Agencia Licencias 3."
},

{
    texto: "Según el art. 41 del Acuerdo-Convenio, el Presidente del Comité de Seguridad y Salud del Ayuntamiento de Madrid es:",
    opciones: [
        "El Gerente del Organismo Autónomo Madrid Salud.",
        "El Director General de Función Pública.",
        "El Coordinador de Recursos Humanos."
    ],
    correcta: 2,
    explicacion: "El art. 41 del Acuerdo-Convenio 2012-2015 establece que el Presidente del Comité de Seguridad y Salud es el <strong>Coordinador de Recursos Humanos</strong>."
},

{
    texto: "En las reuniones del Comité de Seguridad y Salud del Ayuntamiento de Madrid pueden participar, con voz pero sin voto:",
    opciones: [
        "Un máximo de tres técnicos del Servicio de Prevención.",
        "Hasta dos asesores por cada organización sindical representada.",
        "Los responsables de cada Área de Gobierno a título individual."
    ],
    correcta: 1,
    explicacion: "El art. 41 del Acuerdo-Convenio permite la participación con voz sin voto de <strong>hasta dos asesores por cada organización sindical</strong> representada en el Comité."
},

{
    texto: "El crédito horario de los Delegados de Prevención del Ayuntamiento de Madrid según el Acuerdo-Convenio es:",
    opciones: [
        "20 horas mensuales, descontables del crédito sindical ordinario.",
        "40 horas mensuales adicionales y complementarias al crédito de representación general.",
        "60 horas mensuales durante la vigencia del mandato."
    ],
    correcta: 1,
    explicacion: "El Acuerdo-Convenio establece un crédito de <strong>40 horas mensuales</strong> adicionales y complementarias al crédito de representación general. Es un crédito específico que se suma al ordinario."
},

{
    texto: "Según el Acuerdo-Convenio, el tiempo dedicado a las reuniones del Comité de Seguridad y Salud y a las visitas previstas en el art. 36.2 letras a) y c) de la LPRL:",
    opciones: [
        "Solo se considera tiempo efectivo si la visita es solicitada por el empresario.",
        "Se imputa al crédito de 40 horas mensuales específico de los Delegados de Prevención.",
        "Se considera tiempo de trabajo efectivo, sin imputación al crédito horario de los Delegados."
    ],
    correcta: 2,
    explicacion: "El Acuerdo-Convenio establece que el tiempo de reuniones del Comité y visitas del art. 36.2 a) y c) LPRL se considerará <strong>tiempo de trabajo efectivo sin imputación al crédito</strong> horario de los Delegados."
},

{
    texto: "El art. 42 del Acuerdo-Convenio regula la adaptación de puesto y movilidad por motivos de salud. ¿A qué colectivos NO se aplica esta adaptación?",
    opciones: [
        "Personal de mantenimiento y limpieza de edificios municipales.",
        "Personal de oficinas y administrativos.",
        "Policía Municipal, Bomberos, Agentes de Movilidad y SAMUR."
    ],
    correcta: 2,
    explicacion: "El art. 42 del Acuerdo-Convenio establece que la adaptación de puesto por motivos de salud <strong>no aplica</strong> a: <strong>Policía Municipal, Bomberos, Agentes de Movilidad y SAMUR</strong>. Son colectivos excluidos por la naturaleza de sus funciones."
},

{
    texto: "Según el art. 43 del Acuerdo-Convenio, el complemento de IT en los días 4 a 20 de baja es:",
    opciones: [
        "El 50% de las retribuciones, igual que los días 1 a 3.",
        "Un complemento hasta el 75% de las retribuciones del mes anterior al inicio de la IT.",
        "El 100% de las retribuciones desde el día 4."
    ],
    correcta: 1,
    explicacion: "El art. 43 establece mejoras de IT: días 1-3 al 50%, <strong>días 4-20 al 75%</strong>, y desde el día 21 al 100% (hasta 24 mensualidades). Es una mejora progresiva."
},

{
    texto: "¿Desde qué día la mejora de IT del Acuerdo-Convenio alcanza el 100% de las retribuciones?",
    opciones: [
        "Desde el día 4, manteniendo el 100% durante toda la IT.",
        "Desde el día 15 en adelante, sin límite temporal.",
        "Desde el día 21 en adelante, hasta un máximo de 24 mensualidades."
    ],
    correcta: 2,
    explicacion: "El art. 43 del Acuerdo-Convenio establece que <strong>desde el día 21 en adelante</strong> el complemento alcanza el <strong>100% de las retribuciones</strong>, con un tope máximo de <strong>24 mensualidades</strong>."
},

{
    texto: "El art. 40 del Acuerdo-Convenio establece que el sistema de prevención del Ayuntamiento de Madrid estará sometido a auditorías o evaluaciones. ¿Con qué periodicidad?",
    opciones: [
        "Cada 6 años, salvo que haya habido accidentes graves.",
        "Anualmente, con carácter obligatorio.",
        "Cada 4 años, reduciéndose a 2 años en actividades especialmente peligrosas."
    ],
    correcta: 2,
    explicacion: "El art. 40 establece que el sistema de prevención será sometido a control mediante auditorías o evaluaciones <strong>cada 4 años</strong>, reduciéndose a <strong>2 años en actividades especialmente peligrosas</strong>."
},

{
    texto: "Los resultados de las auditorías del sistema de prevención del Ayuntamiento de Madrid según el art. 40 del Acuerdo-Convenio:",
    opciones: [
        "Solo se comunican internamente al Servicio de Prevención.",
        "Se reflejarán en un informe que se mantendrá a disposición de la Autoridad Laboral, entregándose una copia a los Delegados de Prevención.",
        "Se publican en el BOAM de forma obligatoria."
    ],
    correcta: 1,
    explicacion: "El art. 40 establece que los resultados se reflejarán en un <strong>informe</strong> que se mantendrá a disposición de la <strong>Autoridad Laboral competente</strong>, entregándose una copia a los <strong>Delegados de Prevención</strong>."
},

{
    texto: "El art. 45 del Acuerdo-Convenio hace referencia a los Planes de Autoprotección. ¿En qué artículo de la Ley 31/1995 se fundamentan?",
    opciones: [
        "En el artículo 24 de la Ley 31/1995, sobre coordinación de actividades empresariales.",
        "En el artículo 16 de la Ley 31/1995.",
        "En el artículo 20 de la Ley 31/1995."
    ],
    correcta: 2,
    explicacion: "El art. 45 del Acuerdo-Convenio establece que se implantarán Planes de Autoprotección o Medidas de Emergencia conforme al <strong>artículo 20 de la Ley 31/1995</strong>, que regula las medidas de emergencia."
},

{
    texto: "El art. 15.l) del Estatuto Básico del Empleado Público reconoce como derecho individual del empleado público:",
    opciones: [
        "El derecho a la negociación colectiva en materia de prevención.",
        "El derecho a recibir protección eficaz en materia de seguridad e higiene en el trabajo.",
        "El derecho a ser consultado sobre las evaluaciones de riesgos laborales."
    ],
    correcta: 1,
    explicacion: "El <strong>art. 15.l) del EBEP</strong> establece como derecho individual del empleado público el derecho <strong>a recibir protección eficaz en materia de seguridad e higiene en el trabajo</strong>. Es la trasposición al ámbito público del art. 14 LPRL."
},

{
    texto: "Según el art. 54 del EBEP, entre los principios de conducta que deben observar los empleados públicos está:",
    opciones: [
        "Proponer mejoras en los sistemas de prevención a través del Comité de Seguridad y Salud.",
        "Observar las normas sobre seguridad y salud laboral.",
        "Realizar formación preventiva al menos una vez cada dos años."
    ],
    correcta: 1,
    explicacion: "El <strong>art. 54 del EBEP</strong>, sobre Código de Conducta, establece que los empleados públicos deben <strong>observar las normas sobre seguridad y salud laboral</strong>. Es una obligación deontológica del empleado público."
},

{
    texto: "El art. 37.l.j) del EBEP establece como materia de negociación colectiva:",
    opciones: [
        "La determinación del número de Delegados de Prevención por cada centro de trabajo.",
        "Exclusivamente los complementos retributivos por peligrosidad y penosidad.",
        "Las que así se establezcan en la normativa de prevención de riesgos laborales."
    ],
    correcta: 2,
    explicacion: "El <strong>art. 37.l.j) del EBEP</strong> establece como materia de negociación colectiva <strong>las que así se establezcan en la normativa de prevención de riesgos laborales</strong>. Es una remisión normativa abierta."
},

{
    texto: "Entre las funciones y legitimación de los órganos de representación del personal según el art. 40 del EBEP está:",
    opciones: [
        "Designar directamente a los miembros del Servicio de Prevención.",
        "Ejercer la potestad sancionadora ante incumplimientos empresariales en materia preventiva.",
        "Vigilar el cumplimiento de las normas vigentes en materia de condiciones de trabajo, prevención de riesgos laborales, Seguridad Social y empleo."
    ],
    correcta: 2,
    explicacion: "El <strong>art. 40 del EBEP</strong> atribuye a los órganos de representación la función de <strong>vigilar el cumplimiento de las normas vigentes</strong> en materia de condiciones de trabajo, prevención de riesgos laborales, Seguridad Social y empleo. No tienen potestad sancionadora."
},

{
    texto: "Según el art. 5 de la Ley 31/1995, el objeto de la política en materia de prevención es:",
    opciones: [
        "Exclusivamente reducir el número de accidentes de trabajo y enfermedades profesionales en un 50% anual.",
        "La promoción de la mejora de las condiciones de trabajo dirigida a elevar el nivel de protección de la seguridad y la salud de los trabajadores en el trabajo.",
        "Sancionar a las empresas que incumplan la normativa preventiva."
    ],
    correcta: 1,
    explicacion: "El art. 5 establece que la política en materia de prevención tendrá por objeto <strong>la promoción de la mejora de las condiciones de trabajo</strong> dirigida a elevar el nivel de protección de la seguridad y la salud de los trabajadores. No fija porcentajes de reducción ni se limita a sancionar."
},

{
    texto: "Según el art. 6 de la Ley 31/1995, el Gobierno regulará mediante normas reglamentarias, previa consulta a las organizaciones sindicales y empresariales:",
    opciones: [
        "Únicamente los equipos de protección individual y la señalización de seguridad.",
        "Materias como requisitos mínimos de seguridad, limitaciones a operaciones peligrosas, condiciones especiales, procedimientos de evaluación de riesgos, modalidades de servicios de prevención, y condiciones de trabajo o medidas preventivas específicas.",
        "Solo las sanciones aplicables por incumplimiento de la normativa preventiva."
    ],
    correcta: 1,
    explicacion: "El art. 6 enumera <strong>7 materias</strong> (letras a a g) que el Gobierno regulará reglamentariamente: requisitos mínimos, limitaciones a operaciones/procesos/exposiciones, condiciones especiales, procedimientos de evaluación, modalidades de organización/funcionamiento/control de servicios de prevención, condiciones de trabajo o medidas preventivas específicas, y procedimientos de calificación de enfermedades profesionales. No se limita a EPIs ni a sanciones."
},

{
    texto: "El art. 8 de la Ley 31/1995 establece que las Administraciones Públicas promoverán la efectividad del principio de igualdad entre mujeres y hombres. En este contexto, deberán considerar:",
    opciones: [
        "Exclusivamente las diferencias salariales entre hombres y mujeres en puestos de riesgo.",
        "Solo la protección de la maternidad durante el embarazo y el parto.",
        "Las variables relacionadas con el sexo tanto en los sistemas de recogida y tratamiento de datos como en el estudio e investigación generales en materia de prevención de riesgos laborales."
    ],
    correcta: 2,
    explicacion: "El art. 8 establece que las AAPP deberán considerar <strong>las variables relacionadas con el sexo</strong> tanto en los <strong>sistemas de recogida y tratamiento de datos</strong> como en el <strong>estudio e investigación generales</strong> en materia de PRL, con el objetivo de detectar y prevenir posibles situaciones en que los daños derivados del trabajo puedan aparecer vinculados con el sexo de los trabajadores."
},

{
    texto: "El art. 15 de la Ley 31/1995 establece los principios de la acción preventiva. El primero de ellos es:",
    opciones: [
        "Evaluar los riesgos que no se puedan evitar.",
        "Evitar los riesgos.",
        "Adaptar el trabajo a la persona, en particular en lo que respecta a la concepción de los puestos de trabajo."
    ],
    correcta: 1,
    explicacion: "El art. 15.1 enumera 9 principios de la acción preventiva. El <strong>primer principio</strong> (letra a) es <strong>evitar los riesgos</strong>. Si no es posible evitarlos, entonces se evalúan (letra b). Adaptar el trabajo a la persona es el principio d)."
},

{
    texto: "Según el art. 15 de la Ley 31/1995, ¿cuándo deben utilizarse los equipos de protección individual (EPIs)?",
    opciones: [
        "Como primera medida preventiva en cualquier tipo de riesgo.",
        "Cuando los riesgos no se puedan evitar o no puedan limitarse suficientemente por medios técnicos de protección colectiva o mediante medidas, métodos o procedimientos de organización del trabajo.",
        "Solo cuando el trabajador lo solicite expresamente y el empresario autorice su uso."
    ],
    correcta: 1,
    explicacion: "El art. 15.1.h) establece que los EPIs se utilizan solo <strong>cuando los riesgos no se puedan evitar o no puedan limitarse suficientemente</strong> por medios técnicos de protección colectiva o mediante medidas, métodos o procedimientos de organización del trabajo. Son el <strong>último recurso</strong>, no la primera medida."
},

{
    texto: "El art. 16 de la Ley 31/1995 establece que la acción preventiva en la empresa se planificará a partir de:",
    opciones: [
        "El Plan de Autoprotección redactado por los Delegados de Prevención.",
        "Las órdenes directas del empresario sobre qué medidas adoptar en cada momento.",
        "Una evaluación inicial de los riesgos para la seguridad y la salud de los trabajadores."
    ],
    correcta: 2,
    explicacion: "El art. 16.2 establece que la acción preventiva en la empresa se planificará por el empresario a partir de <strong>una evaluación inicial de los riesgos</strong> para la seguridad y la salud de los trabajadores. Esta evaluación es el punto de partida obligatorio de la planificación preventiva."
},

{
    texto: "Según el art. 16 de la Ley 31/1995, ¿cuándo deberá revisarse la evaluación de riesgos?",
    opciones: [
        "Solo cuando la Inspección de Trabajo así lo ordene expresamente.",
        "Cada año, con carácter obligatorio.",
        "Cuando se hayan detectado daños a la salud de los trabajadores o cuando las actividades de prevención puedan ser inadecuadas o insuficientes."
    ],
    correcta: 2,
    explicacion: "El art. 16.2 establece que la evaluación deberá ser actualizada cuando cambien las condiciones de trabajo, y su adecuación será revisada cuando <strong>se hayan detectado daños a la salud de los trabajadores</strong> o cuando las actividades de prevención puedan ser inadecuadas o insuficientes. No es anual obligatoria ni solo por orden de la Inspección."
},

{
    texto: "El art. 17 de la Ley 31/1995 establece que el empresario adoptará las medidas necesarias para que los equipos de trabajo:",
    opciones: [
        "Sean los más modernos del mercado, independientemente de su adecuación al trabajo a realizar.",
        "Sean adecuados para el trabajo que deba realizarse y convenientemente adaptados a tal efecto, de forma que garanticen la seguridad y la salud de los trabajadores al utilizarlos.",
        "Sean revisados por la Inspección de Trabajo antes de ser puestos en funcionamiento."
    ],
    correcta: 1,
    explicacion: "El art. 17.1 establece que el empresario adoptará las medidas necesarias para que los equipos de trabajo <strong>sean adecuados para el trabajo que deba realizarse</strong> y convenientemente adaptados a tal efecto, de forma que <strong>garanticen la seguridad y la salud de los trabajadores</strong> al utilizarlos. La modernidad o la intervención previa de la Inspección no son requisitos."
},

{
    texto: "Según el art. 18 de la Ley 31/1995, el empresario debe informar a los trabajadores sobre:",
    opciones: [
        "Únicamente las medidas de emergencia en caso de incendio o catástrofe.",
        "Solo los riesgos generales de la empresa, sin descender a los riesgos específicos de cada puesto.",
        "Los riesgos para la seguridad y la salud en el trabajo que afecten a la empresa en su conjunto y a cada tipo de puesto de trabajo o función, así como las medidas de protección y prevención aplicables."
    ],
    correcta: 2,
    explicacion: "El art. 18.1 establece que el empresario adoptará medidas para que los trabajadores reciban información sobre: los <strong>riesgos</strong> para la seguridad y la salud que afecten a la <strong>empresa en su conjunto y a cada tipo de puesto de trabajo o función</strong>; y las <strong>medidas de protección y prevención aplicables</strong> a dichos riesgos. No se limita a lo general ni solo a emergencias."
},

{
    texto: "El art. 19 de la Ley 31/1995 establece que la formación en materia preventiva deberá impartirse:",
    opciones: [
        "Únicamente a los Delegados de Prevención y al personal del Servicio de Prevención.",
        "Solo al inicio de la relación laboral, como formación de acogida.",
        "Siempre que se introduzcan nuevas tecnologías o cambios en los equipos de trabajo, y deberá estar centrada específicamente en el puesto de trabajo o función de cada trabajador."
    ],
    correcta: 2,
    explicacion: "El art. 19.2 establece que la formación deberá impartirse siempre que sea necesario: <strong>en el momento de su contratación, cuando se produzcan cambios en las funciones, cuando se introduzcan nuevas tecnologías o cambios en los equipos de trabajo</strong>. Debe estar <strong>centrada específicamente en el puesto de trabajo o función</strong> de cada trabajador. No se limita al inicio ni solo a representantes."
},

{
    texto: "Según el art. 20 de la Ley 31/1995, el empresario debe analizar las posibles situaciones de emergencia y adoptar:",
    opciones: [
        "Exclusivamente seguros de responsabilidad civil para cubrir los daños que puedan producirse.",
        "Las medidas necesarias en materia de primeros auxilios, lucha contra incendios y evacuación de los trabajadores, designando para ello al personal encargado de poner en práctica estas medidas.",
        "Un plan de autoprotección solo si la empresa supera los 250 trabajadores."
    ],
    correcta: 1,
    explicacion: "El art. 20.1 establece que el empresario, teniendo en cuenta el tamaño y la actividad de la empresa, así como la posible presencia de personas ajenas a la misma, deberá analizar las posibles situaciones de emergencia y adoptar <strong>las medidas necesarias en materia de primeros auxilios, lucha contra incendios y evacuación</strong> de los trabajadores, <strong>designando para ello al personal encargado</strong> de poner en práctica estas medidas. No depende de un umbral de plantilla."
},

{
    texto: "El art. 21 de la Ley 31/1995 regula el derecho de los trabajadores ante un riesgo grave e inminente. ¿Qué puede hacer el trabajador en este caso?",
    opciones: [
        "Puede paralizar solo su propio puesto de trabajo, pero no el de sus compañeros.",
        "Debe continuar trabajando y comunicar el riesgo al finalizar la jornada.",
        "Interrumpir su actividad y, si es necesario, abandonar de inmediato el lugar de trabajo."
    ],
    correcta: 2,
    explicacion: "El art. 21.2 reconoce al trabajador el derecho a <strong>interrumpir su actividad</strong> y, si es necesario, <strong>abandonar de inmediato el lugar de trabajo</strong> cuando considere que existe un riesgo grave e inminente para su vida o su salud. No debe esperar al final de la jornada ni se limita a su puesto."
},

{
    texto: "Según el art. 22 de la Ley 31/1995, la vigilancia de la salud de los trabajadores:",
    opciones: [
        "Es obligatoria para todos los trabajadores sin excepciones.",
        "Solo se podrá llevar a cabo cuando el trabajador preste su consentimiento, salvo que sea imprescindible para evaluar los efectos de las condiciones de trabajo, verificar si el estado de salud puede constituir un peligro, o esté establecido en una disposición legal.",
        "Es facultativa incluso cuando exista una norma legal específica que la imponga."
    ],
    correcta: 1,
    explicacion: "El art. 22.1 establece que la vigilancia de la salud <strong>solo se podrá llevar a cabo cuando el trabajador preste su consentimiento</strong>. Excepciones: cuando sea <strong>imprescindible para evaluar los efectos de las condiciones de trabajo</strong>, verificar si el <strong>estado de salud puede constituir un peligro</strong> para el trabajador o para otros, o cuando así esté <strong>establecido en una disposición legal</strong>."
},

{
    texto: "El art. 23 de la Ley 31/1995 establece que el empresario deberá elaborar y conservar a disposición de la autoridad laboral:",
    opciones: [
        "Solo el plan de prevención de riesgos laborales.",
        "El plan de prevención, la evaluación de los riesgos y la planificación de la actividad preventiva, entre otros documentos.",
        "Únicamente los contratos de los trabajadores y las nóminas."
    ],
    correcta: 1,
    explicacion: "El art. 23.1 establece que el empresario deberá elaborar y conservar a disposición de la autoridad laboral: <strong>plan de prevención de riesgos laborales</strong>, <strong>evaluación de los riesgos</strong> para la seguridad y la salud en el trabajo (y resultado de controles periódicos), y <strong>planificación de la actividad preventiva</strong>. No se limita al plan ni a documentación laboral genérica."
},

{
    texto: "Según el art. 24 de la Ley 31/1995, cuando en un mismo centro de trabajo desarrollen actividades trabajadores de dos o más empresas:",
    opciones: [
        "Solo la empresa titular del centro de trabajo asume toda la responsabilidad preventiva.",
        "Cada empresa es responsable únicamente de sus propios trabajadores, sin coordinación alguna.",
        "Deberán cooperar en la aplicación de la normativa sobre prevención de riesgos laborales, debiendo los empresarios establecer los medios de coordinación necesarios."
    ],
    correcta: 2,
    explicacion: "El art. 24.1 establece que cuando en un mismo centro de trabajo desarrollen actividades trabajadores de dos o más empresas, éstas <strong>deberán cooperar</strong> en la aplicación de la normativa sobre PRL. Los empresarios deberán, teniendo en cuenta la naturaleza de las actividades, <strong>informarse recíprocamente</strong> sobre los riesgos, informar a sus trabajadores, y <strong>establecer los medios de coordinación necesarios</strong>."
},

{
    texto: "El art. 25 de la Ley 31/1995 establece que el empresario garantizará de manera específica la protección de:",
    opciones: [
        "Únicamente las trabajadoras embarazadas.",
        "Solo los trabajadores menores de 18 años.",
        "Los trabajadores especialmente sensibles a determinados riesgos."
    ],
    correcta: 2,
    explicacion: "El art. 25.1 establece que el empresario garantizará de manera específica <strong>la protección de los trabajadores especialmente sensibles a determinados riesgos</strong>. A tal fin, deberá tener en cuenta dichos aspectos en la evaluación de riesgos y adoptar medidas preventivas y de protección necesarias. Menores y embarazadas son grupos específicos regulados en arts. 26 y 27, pero el 25 es más amplio."
},

{
    texto: "Según el art. 26 de la Ley 31/1995, la evaluación de los riesgos deberá comprender la determinación de la naturaleza, el grado y la duración de la exposición de las trabajadoras en situación de:",
    opciones: [
        "Embarazo y parto reciente, exclusivamente.",
        "Embarazo o parto reciente a agentes, procedimientos o condiciones de trabajo que puedan influir negativamente en la salud de las trabajadoras o del feto.",
        "Solo embarazo, excluyendo el período de lactancia."
    ],
    correcta: 1,
    explicacion: "El art. 26.1 establece que la evaluación de riesgos deberá comprender la determinación de la naturaleza, el grado y la duración de la exposición de las trabajadoras en situación de <strong>embarazo o parto reciente</strong> a agentes, procedimientos o condiciones de trabajo que puedan influir negativamente en la salud de las trabajadoras o del feto. El art. 26 también regula la lactancia natural."
},

{
    texto: "El art. 27 de la Ley 31/1995 prohíbe la admisión de menores de 18 años a trabajos que presenten:",
    opciones: [
        "Solo los trabajos nocturnos, permitiendo todos los demás.",
        "Cualquier tipo de riesgo, incluso el riesgo mínimo.",
        "Riesgos específicos que puedan resultar nocivos para su seguridad, su salud o su desarrollo físico, psíquico o moral, en atención a su falta de experiencia y desarrollo incompleto."
    ],
    correcta: 2,
    explicacion: "El art. 27.1 establece que no se permitirá la admisión de menores de 18 años en trabajos que presenten <strong>riesgos específicos</strong> por su falta de experiencia y desarrollo incompleto, para su seguridad, salud o desarrollo físico, psíquico o moral. No se prohíben todos los trabajos con riesgo mínimo ni se limita solo a nocturnos."
},

{
    texto: "El art. 28 de la Ley 31/1995 establece que los trabajadores con relaciones de trabajo temporales o de duración determinada:",
    opciones: [
        "Solo tienen derecho a formación preventiva si su contrato supera los 6 meses.",
        "Están excluidos de la normativa de prevención de riesgos laborales.",
        "Deberán disfrutar del mismo nivel de protección en materia de seguridad y salud que los demás trabajadores de la empresa."
    ],
    correcta: 2,
    explicacion: "El art. 28.1 establece que los trabajadores con relaciones de trabajo temporales o de duración determinada, así como los contratados por empresas de trabajo temporal, <strong>deberán disfrutar del mismo nivel de protección</strong> en materia de seguridad y salud que los demás trabajadores de la empresa. No están excluidos ni se condiciona a duración del contrato."
},

{
    texto: "Según el art. 29 de la Ley 31/1995, corresponde a cada trabajador velar:",
    opciones: [
        "Exclusivamente por la seguridad de sus compañeros de trabajo, no por la suya propia.",
        "Por su propia seguridad y salud en el trabajo y por la de aquellas otras personas a las que pueda afectar su actividad profesional, conforme a su formación y las instrucciones del empresario.",
        "Solo por el cumplimiento de las órdenes del empresario, sin responsabilidad personal."
    ],
    correcta: 1,
    explicacion: "El art. 29.1 establece que corresponde a cada trabajador velar, según sus posibilidades y mediante el cumplimiento de las medidas de prevención que en cada caso sean adoptadas, por <strong>su propia seguridad y salud en el trabajo</strong> y por la de <strong>aquellas otras personas a las que pueda afectar su actividad profesional</strong>, a causa de sus actos y omisiones en el trabajo, de conformidad con su formación y las instrucciones del empresario."
},

{
    texto: "Según el art. 30 de la Ley 31/1995, se entenderá como 'servicio de prevención':",
    opciones: [
        "Solo las empresas externas especializadas en prevención contratadas por el empresario.",
        "Exclusivamente el departamento de recursos humanos de la empresa.",
        "El conjunto de medios humanos y materiales necesarios para realizar las actividades preventivas a fin de garantizar la adecuada protección de la seguridad y la salud de los trabajadores."
    ],
    correcta: 2,
    explicacion: "El art. 30.1 define el <strong>servicio de prevención</strong> como el conjunto de <strong>medios humanos y materiales</strong> necesarios para realizar las actividades preventivas a fin de garantizar la adecuada protección de la seguridad y la salud de los trabajadores, asesorando y asistiendo para ello al empresario, a los trabajadores y a sus representantes y a los órganos de representación especializados."
},

{
    texto: "El art. 31 de la Ley 31/1995, desarrollado por el RD 39/1997, establece que los servicios de prevención pueden organizarse en las siguientes modalidades:",
    opciones: [
        "Solo servicio de prevención propio o ajeno, sin otras modalidades.",
        "Servicio de prevención propio, servicio de prevención ajeno, trabajadores designados, y asunción personal por el empresario.",
        "Únicamente servicio de prevención mancomunado entre varias empresas del mismo sector."
    ],
    correcta: 1,
    explicacion: "El art. 31 de la LPRL, desarrollado por el <strong>RD 39/1997</strong>, establece cuatro modalidades de organización de servicios de prevención: <strong>asunción personal por el empresario</strong>, designación de <strong>trabajadores designados</strong>, constitución de un <strong>servicio de prevención propio</strong>, o recurso a un <strong>servicio de prevención ajeno</strong>. El RD 39/1997 también regula servicios mancomunados."
},

{
    texto: "Según el RD 39/1997, el servicio de prevención propio es obligatorio en empresas de:",
    opciones: [
        "Más de 500 trabajadores.",
        "Más de 250 trabajadores que desarrollen actividades del Anexo I del RD 39/1997, o de más de 500 trabajadores con actividades no incluidas en dicho Anexo.",
        "Cualquier empresa, independientemente del número de trabajadores."
    ],
    correcta: 1,
    explicacion: "El RD 39/1997 art. 14 establece que el servicio de prevención propio es <strong>obligatorio</strong> en empresas de: <strong>más de 500 trabajadores</strong>, o de <strong>más de 250 trabajadores</strong> que desarrollen alguna de las <strong>actividades del Anexo I</strong> (actividades especialmente peligrosas). Por debajo de esos umbrales, se pueden utilizar otras modalidades."
},

{
    texto: "El RD 39/1997 establece que las cuatro especialidades o disciplinas preventivas son:",
    opciones: [
        "Solo Seguridad y Salud Laboral, sin más divisiones.",
        "Prevención de incendios, Primeros auxilios, Evacuación y Formación.",
        "Seguridad en el Trabajo, Higiene Industrial, Ergonomía y Psicosociología Aplicada, y Medicina del Trabajo."
    ],
    correcta: 2,
    explicacion: "El <strong>art. 34 del RD 39/1997</strong> establece que las cuatro especialidades o disciplinas preventivas son: <strong>Seguridad en el Trabajo, Higiene Industrial, Ergonomía y Psicosociología Aplicada, y Medicina del Trabajo</strong>. Cada una requiere formación específica y aborda diferentes aspectos de la prevención."
},

{
    texto: "Según el Anexo del Acuerdo de la Junta de Gobierno de 13 de septiembre de 2012, la jornada ordinaria de trabajo del personal municipal es de:",
    opciones: [
        "1.500 horas anuales, sin especificar el número de jornadas.",
        "1.800 horas anuales, correspondientes a 240 jornadas de 7,5 horas.",
        "1.650 horas anuales, que se traducen en 220 jornadas de trabajo efectivo de 7,5 horas diarias."
    ],
    correcta: 2,
    explicacion: "El Anexo - Apartado primero del Acuerdo de 13/09/2012 establece que la jornada ordinaria es de <strong>1.650 horas anuales</strong>, que se traducen en <strong>220 jornadas de trabajo efectivo</strong> de <strong>7,5 horas diarias</strong>. Esta jornada entró en vigor desde el 1 de enero de 2013."
},

{
    texto: "Según el Acuerdo de 13 de septiembre de 2012, se define como jornada especial:",
    opciones: [
        "Solo las jornadas nocturnas entre las 22:30 y las 7:00 horas.",
        "Aquélla que difiera del número de horas anuales a realizar diariamente y/o del número de jornadas de trabajo anuales resultantes del apartado anterior.",
        "Únicamente las jornadas de personal directivo."
    ],
    correcta: 1,
    explicacion: "El Anexo define <strong>jornada especial</strong> como aquélla que <strong>difiera del número de horas anuales a realizar diariamente y/o del número de jornadas de trabajo anuales</strong> resultantes del apartado anterior (1.650h / 220 jornadas / 7,5h diarias). No se limita a nocturnas ni a directivos."
},

{
    texto: "Según el Acuerdo de 13 de septiembre de 2012, la jornada nocturna se desarrolla con carácter general entre:",
    opciones: [
        "Las 20:00 horas y las 8:00 horas.",
        "Las 22:00 horas y las 6:00 horas.",
        "Las 22:30 horas y las 7:00 horas."
    ],
    correcta: 2,
    explicacion: "El Anexo establece que la jornada nocturna se desarrolla, con carácter general, <strong>entre las 22:30 horas y las 7:00 horas</strong>. Fuera de este horario, se considera jornada diurna o de tarde según el caso."
},

{
    texto: "Según el Acuerdo de 13 de septiembre de 2012, todos los empleados con jornada de 7,5 horas diarias tendrán derecho a una pausa retribuida de:",
    opciones: [
        "15 minutos cada 4 horas de trabajo efectivo.",
        "60 minutos para la comida, no retribuidos.",
        "30 minutos durante la jornada de trabajo, que se disfrutará con carácter general entre las 9,45 y las 11,30 horas por la mañana y entre las 13,00 y las 14,30 horas en el turno de tarde."
    ],
    correcta: 2,
    explicacion: "El Anexo establece que todos los empleados con jornada de 7,5 horas diarias tendrán derecho a una pausa retribuida de <strong>30 minutos</strong> durante la jornada de trabajo, que se disfrutará con carácter general entre las <strong>9,45 y las 11,30 horas</strong> en el turno de mañana con horario de 8 a 15,30 horas; entre las <strong>13,00 y las 14,30 horas</strong> en el horario de 9,30/10 a 17,17/30 horas; y entre las <strong>17,45 y las 19,30 horas</strong> en el turno de tarde y solape."
},

{
    texto: "Según el Acuerdo de 13 de septiembre de 2012, para aquellos empleados municipales que dispongan de medio colectivo de transporte puesto a su disposición por la Administración Municipal:",
    opciones: [
        "El cómputo de jornada solo empieza al llegar al centro de trabajo, no antes.",
        "El cómputo de jornada comenzará desde la hora fijada de recogida.",
        "No existe ninguna adaptación horaria para estos empleados."
    ],
    correcta: 1,
    explicacion: "El Anexo establece que para aquellos empleados que dispongan de medio colectivo de transporte puesto a su disposición por la Administración Municipal, el <strong>cómputo de jornada comenzará desde la hora fijada de recogida</strong>. Esta medida compensa el tiempo de desplazamiento en transporte colectivo municipal."
},

{
    texto: "Según el PPRL del Ayuntamiento de Madrid aprobado en 2020, la planificación preventiva debe establecer:",
    opciones: [
        "Únicamente los objetivos generales sin descender a actuaciones concretas.",
        "Solo las medidas a adoptar, sin especificar plazos ni responsables.",
        "El qué (medidas), quién (responsable), cuándo (plazo) y cómo (recursos y medios) de cada acción preventiva."
    ],
    correcta: 2,
    explicacion: "El PPRL 2020 establece que la planificación de la actividad preventiva debe especificar: <strong>qué</strong> medidas se van a adoptar, <strong>quién</strong> es el responsable de ejecutarlas, <strong>cuándo</strong> se llevarán a cabo (plazo), y <strong>cómo</strong> se realizarán (recursos y medios necesarios). Esta estructura garantiza que la planificación sea ejecutable."
},

{
    texto: "Según el art. 46.5 del Acuerdo-Convenio referenciado en el PPRL 2020, el Plan de Prevención elaborado anualmente por el Servicio de Prevención será presentado al Comité de Seguridad y Salud:",
    opciones: [
        "En el segundo semestre del año.",
        "En el primer trimestre del año.",
        "En cualquier momento del año, sin plazo específico."
    ],
    correcta: 1,
    explicacion: "El art. 46.5 del Acuerdo-Convenio establece que el Plan de Prevención elaborado anualmente por el Servicio de Prevención será presentado al Comité de Seguridad y Salud <strong>en el primer trimestre del año</strong>. Para su aprobación deberá contarse con la participación de los Delegados de Prevención en el marco de la Mesa General de Negociación."
},

{
    texto: "El art. 52 del Acuerdo-Convenio establece que la Administración garantizará formación en prevención. Esta formación debe ser:",
    opciones: [
        "Formación genérica e igual para todos los empleados municipales.",
        "Formación adaptada a los riesgos del puesto de trabajo de cada empleado.",
        "Solo formación en primeros auxilios y evacuación."
    ],
    correcta: 1,
    explicacion: "El <strong>art. 52 del Acuerdo-Convenio</strong> exige que la formación sea <strong>adaptada a los riesgos del puesto de trabajo</strong> de cada empleado. No es una formación genérica ni se limita a primeros auxilios. La clave es la <strong>adaptación al puesto concreto</strong>."
},

{
    texto: "Según el PPRL 2020, el Plan de Formación contemplará acciones formativas específicas en materia preventiva, con una oferta de:",
    opciones: [
        "No se especifica un número concreto de horas.",
        "100 horas de formación avanzada.",
        "60 horas de formación básica."
    ],
    correcta: 2,
    explicacion: "El PPRL 2020 establece que el Plan de Formación contemplará acciones formativas específicas en materia preventiva, garantizando una oferta formativa suficiente para que todos los delegados de prevención cuenten con la formación básica. Durante la vigencia del presente Acuerdo-Convenio, se tendrá que la oferta formativa amplíe el número de horas de las acciones de formación básica <strong>hasta las 60 horas</strong>."
},

{
    texto: "Según el PPRL 2020, la política preventiva del Ayuntamiento de Madrid se comunicará a todos los niveles de la organización mediante:",
    opciones: [
        "Únicamente mediante correo postal a cada empleado.",
        "Solo mediante tablones de anuncios físicos en cada centro de trabajo.",
        "La difusión de normas e instrucciones de seguridad y salud laboral en soporte documental o informático a través de AYRE."
    ],
    correcta: 2,
    explicacion: "El PPRL 2020 establece que la política preventiva se comunicará mediante la difusión de normas e instrucciones de seguridad y salud laboral en soporte documental o informático a través de <strong>AYRE</strong> (plataforma informática del Ayuntamiento de Madrid), garantizando una difusión eficiente y completa a todos los niveles de la organización."
},

{
    texto: "El PPRL 2020 prevé que el Sistema de Gestión de Prevención de Riesgos Laborales (SGPRL) del Ayuntamiento de Madrid tenga capacidad de integrarse con:",
    opciones: [
        "Solo con el sistema de nóminas y recursos humanos.",
        "El Sistema de Gestión de la Calidad y el Sistema de Gestión Medioambiental.",
        "Únicamente con el sistema de control de presencia."
    ],
    correcta: 1,
    explicacion: "El PPRL 2020 prevé expresamente que el SGPRL tenga capacidad de integrarse con el <strong>Sistema de Gestión de la Calidad</strong> y con el <strong>Sistema de Gestión Medioambiental</strong>. Esta integración responde a una visión de gestión coherente y transversal de la organización, donde los tres sistemas (PRL, Calidad, Medioambiente) se complementan."
},

{
    texto: "Según el PPRL 2020, el modelo de seguridad del Ayuntamiento de Madrid tiene una doble dimensión. La dimensión vertical se refiere a:",
    opciones: [
        "Las relaciones sociales entre los trabajadores.",
        "Los factores técnicos y las condiciones de trabajo.",
        "La cadena jerárquica de mando en todos sus niveles."
    ],
    correcta: 2,
    explicacion: "El PPRL 2020 adopta un modelo de seguridad integrado proyectado en doble dimensión: <strong>horizontal</strong> (técnica, organización del trabajo, condiciones, relaciones sociales, factores ambientales) y <strong>vertical</strong> (la <strong>cadena jerárquica de mando</strong> en todos sus niveles). La dimensión vertical implica que todos los niveles de la jerarquía tienen responsabilidades preventivas."
},

{
    texto: "Según el PPRL 2020, los titulares de los centros directivos deberán designar:",
    opciones: [
        "Al menos a cinco personas por cada Área para formar un comité local de prevención.",
        "Solo al Director del Servicio de Prevención.",
        "Al menos a una persona por cada Área de Gobierno, Distrito y Organismo Autónomo que actúe como interlocutor en materia de prevención."
    ],
    correcta: 2,
    explicacion: "El PPRL 2020 establece que los titulares de los centros directivos deberán <strong>designar al menos a una persona por cada Área de Gobierno, Distrito y Organismo Autónomo</strong> que actúe como interlocutor en materia de prevención. Su formación, si carecen de ella, será impartida por el Servicio de Prevención."
},

{
    texto: "Según el PPRL 2020, entre la documentación que debe estar a disposición de la Autoridad Laboral competente NO figura:",
    opciones: [
        "La relación de accidentes de trabajo y enfermedades profesionales que hayan causado al trabajador una incapacidad laboral superior a un día de trabajo.",
        "Los contratos suscritos con la Mutua de Accidentes de Trabajo y su objeto.",
        "El plan de prevención de riesgos laborales."
    ],
    correcta: 1,
    explicacion: "El PPRL 2020, conforme al art. 23 LPRL, establece la documentación a disposición de la Autoridad Laboral: plan de prevención, evaluación de riesgos, planificación preventiva, práctica de controles del estado de salud, relación de accidentes de trabajo y enfermedades profesionales que hayan causado baja > 1 día, etc. <strong>Los contratos con la Mutua NO figuran</strong> en esta lista de documentación obligatoria."
},

{
    texto: "El PPRL 2020 establece que el Servicio de Prevención del Ayuntamiento de Madrid se estructura en:",
    opciones: [
        "Un único equipo centralizado sin especialización.",
        "Equipos separados por especialidad sin coordinación entre ellos.",
        "Equipos multidisciplinares integrados, compuestos por técnicos de cada una de las cuatro especialidades preventivas."
    ],
    correcta: 2,
    explicacion: "El PPRL 2020 establece que el Servicio de Prevención se estructura en <strong>equipos multidisciplinares integrados</strong>, compuestos por técnicos de cada una de las cuatro especialidades preventivas (Medicina del Trabajo, Seguridad, Higiene Industrial, Ergonomía/Psicosociología). Estos equipos actúan de forma integrada en el ámbito del Servicio de Prevención Único."
},

{
    texto: "Según el PPRL 2020, varios centros de trabajo del Ayuntamiento de Madrid se encuentran fuera del término municipal de Madrid. Entre ellos se encuentran:",
    opciones: [
        "Solo la Central de Comunicaciones del SAMUR en Pozuelo de Alarcón.",
        "Almacenes en Coslada, centros en Tres Cantos, Cercedilla, Colmenar Viejo, Arganda del Rey, y la Central de Comunicaciones del SAMUR en Pozuelo de Alarcón.",
        "No hay ningún centro fuera del término municipal de Madrid."
    ],
    correcta: 1,
    explicacion: "El PPRL 2020 recoge que varios centros están fuera del término municipal de Madrid: <strong>almacenes en Coslada</strong>, centros en <strong>Tres Cantos, Cercedilla, Colmenar Viejo, Arganda del Rey</strong>, y la <strong>Central de Comunicaciones del SAMUR en Pozuelo de Alarcón</strong>. Todos estos centros pertenecen a la Comunidad de Madrid y están sujetos al PPRL."
},

{
    texto: "Según el PPRL 2020, ¿en qué supuestos debe actualizarse la evaluación de riesgos de los puestos de trabajo?",
    opciones: [
        "Solo cuando se produzca un accidente mortal.",
        "Cuando cambien las condiciones de trabajo, se introduzcan nuevas tecnologías, se incorporen personas especialmente sensibles, o se detecten daños para la salud.",
        "Cada cinco años, con carácter obligatorio."
    ],
    correcta: 1,
    explicacion: "El PPRL 2020, siguiendo el RD 39/1997, establece que la evaluación debe actualizarse cuando: cambien las <strong>condiciones de trabajo</strong>, se elijan nuevos equipos o <strong>nuevas tecnologías</strong>, se incorporen <strong>personas especialmente sensibles</strong>, se detecten <strong>daños para la salud</strong>, o se aprecien actividades preventivas inadecuadas. No es solo por accidente mortal ni tiene periodicidad fija de 5 años."
},

{
    texto: "Según el art. 6 de la Ley 31/1995, ¿quién regulará mediante normas reglamentarias las materias relativas a la prevención de riesgos laborales?",
    opciones: [
        "El Instituto Nacional de Seguridad y Salud en el Trabajo, mediante circulares técnicas.",
        "Las Comunidades Autónomas, en el ejercicio de sus competencias en materia laboral.",
        "El Gobierno, a través de las correspondientes normas reglamentarias y previa consulta a las organizaciones sindicales y empresariales más representativas."
    ],
    correcta: 2,
    explicacion: "El art. 6 de la Ley 31/1995 establece que <strong>el Gobierno</strong>, a través de las correspondientes <strong>normas reglamentarias</strong> y previa <strong>consulta</strong> a las organizaciones sindicales y empresariales más representativas, regulará las materias que enumera el artículo."
},

{
    texto: "Las Administraciones Públicas promoverán la efectividad del principio de igualdad entre hombres y mujeres. En materia de prevención de riesgos laborales, esto implica:",
    opciones: [
        "Garantizar que el 50% de los Delegados de Prevención sean mujeres.",
        "Considerar las variables relacionadas con el sexo en el estudio e investigación generales en materia de prevención, con el objetivo de detectar y prevenir posibles situaciones en que los daños derivados del trabajo puedan aparecer vinculados con el sexo.",
        "Establecer planes de prevención diferenciados para hombres y mujeres en todos los puestos de trabajo."
    ],
    correcta: 1,
    explicacion: "El art. 5 de la LPRL (modificado por Ley Orgánica 3/2007) establece que las Administraciones Públicas promoverán la efectividad del principio de igualdad considerando <strong>las variables relacionadas con el sexo</strong> tanto en los sistemas de recogida y tratamiento de datos como en el estudio e investigación generales en materia de prevención de riesgos laborales."
},

{
    texto: "El Servicio de Prevención es definido por la propia Ley como el conjunto de medios humanos y materiales necesarios para realizar las actividades preventivas. La Ley combina la necesidad de:",
    opciones: [
        "La contratación obligatoria de servicios de prevención ajenos para todas las empresas.",
        "Una intervención exclusivamente técnica sin participación de los trabajadores.",
        "Una actuación ordenada y formalizada de las actividades preventivas con el reconocimiento de la diversidad de situaciones a las que la Ley se dirige."
    ],
    correcta: 2,
    explicacion: "El Capítulo IV de la Ley 31/1995 regula el Servicio de Prevención combinando la necesidad de <strong>una actuación ordenada y formalizada</strong> de las actividades preventivas con <strong>el reconocimiento de la diversidad de situaciones</strong> a las que la Ley se dirige en cuanto a la magnitud, complejidad e intensidad de los riesgos inherentes a las mismas."
},

{
    texto: "El Capítulo VI de la Ley 31/1995 regula las obligaciones de fabricantes, importadores y suministradores. Estas obligaciones se refieren a:",
    opciones: [
        "Solo a los equipos de protección individual, quedando excluidos los equipos de trabajo.",
        "Exclusivamente a la maquinaria industrial de alto riesgo certificada por organismos oficiales.",
        "Maquinaria, equipos, productos y útiles de trabajo que enlazan con la normativa comunitaria de mercado interior para asegurar la exclusiva comercialización de productos que ofrezcan mayores niveles de seguridad."
    ],
    correcta: 2,
    explicacion: "El Capítulo VI (art. 41) regula las <strong>obligaciones básicas de fabricantes, importadores y suministradores</strong> de maquinaria, equipos, productos y útiles de trabajo, que <strong>enlazan con la normativa comunitaria</strong> de mercado interior dictada para asegurar la <strong>exclusiva comercialización de productos</strong> que ofrezcan los mayores niveles de seguridad para los usuarios."
},

{
    texto: "Además de las sanciones económicas, las infracciones graves y muy graves cometidas por los servicios de prevención ajenos pueden conllevar:",
    opciones: [
        "La inhabilitación temporal del empresario para contratar con la Administración.",
        "La cancelación de la acreditación otorgada por la autoridad laboral.",
        "La publicación nominal de los técnicos responsables del servicio."
    ],
    correcta: 1,
    explicacion: "El Capítulo VII de la Ley 31/1995, modificado por el RDL 5/2000, establece que las infracciones graves y muy graves de las entidades especializadas que actúen como servicios de prevención ajenos podrán dar lugar, además de a las multas, <strong>a la cancelación de la acreditación</strong> otorgada por la autoridad laboral."
},

{
    texto: "Según el Acuerdo-Convenio, la formación de los Delegados de Prevención será gestionada por los organismos encargados de gestionar la formación de empleados públicos. Durante la vigencia del Acuerdo-Convenio se tenderá a ampliar el número de horas de acciones de formación básica hasta:",
    opciones: [
        "80 horas.",
        "40 horas.",
        "60 horas."
    ],
    correcta: 2,
    explicacion: "El Acuerdo-Convenio establece que durante su vigencia se <strong>tenderá a que se amplíe el número de horas de las acciones de formación básica hasta las 60 horas</strong>. El tiempo dedicado a esta formación será considerado tiempo de trabajo a todos los efectos."
},

{
    texto: "¿Qué artículo de la Ley 31/1995 fija los objetivos de la política en materia de prevención de riesgos para proteger la seguridad y salud en el trabajo?",
    opciones: [
        "El artículo 5, que establece que tendrá por objeto la promoción de la mejora de las condiciones de trabajo.",
        "El artículo 14, que regula el derecho de los trabajadores a la protección eficaz.",
        "El artículo 16, que regula el plan de prevención de riesgos laborales."
    ],
    correcta: 0,
    explicacion: "El <strong>artículo 5</strong> de la LPRL fija los objetivos de la política preventiva, indicando que tendrá por objeto <strong>la promoción de la mejora de las condiciones de trabajo</strong> dirigida a elevar el nivel de protección de la seguridad y la salud de los trabajadores en el trabajo."
},

{
    texto: "Según el art. 6 de la Ley 31/1995, ¿quién regulará mediante normas reglamentarias las materias relacionadas con la prevención de riesgos laborales?",
    opciones: [
        "La Inspección de Trabajo y Seguridad Social mediante circulares interpretativas.",
        "El Gobierno, a través de las correspondientes normas reglamentarias y previa consulta a las organizaciones sindicales y empresariales.",
        "Cada Comunidad Autónoma en el ámbito de sus competencias exclusivas."
    ],
    correcta: 1,
    explicacion: "El art. 6 establece que <strong>el Gobierno</strong>, a través de las correspondientes <strong>normas reglamentarias</strong> y <strong>previa consulta a las organizaciones sindicales y empresariales más representativas</strong>, regulará las materias que se relacionan en el propio artículo."
},

{
    texto: "Las Administraciones Públicas promoverán la efectividad del principio de igualdad entre hombres y mujeres. En el contexto de la prevención de riesgos laborales, ¿cómo se concreta esta obligación según la Ley 31/1995?",
    opciones: [
        "Estableciendo cuotas obligatorias de mujeres en los Comités de Seguridad y Salud.",
        "Considerando las variables relacionadas con el sexo en los sistemas de recogida y tratamiento de datos y en el estudio e investigación generales en materia de prevención.",
        "Reservando el 50% de las plazas de Delegados de Prevención a mujeres trabajadoras."
    ],
    correcta: 1,
    explicacion: "El art. 5 establece que las AAPP promoverán la efectividad del principio de igualdad <strong>considerando las variables relacionadas con el sexo</strong> tanto en los <strong>sistemas de recogida y tratamiento de datos</strong> como en el <strong>estudio e investigación generales</strong> en materia de prevención de riesgos laborales."
},

{
    texto: "Según el art. 31 de la Ley 31/1995, el Servicio de Prevención se define como:",
    opciones: [
        "La entidad externa especializada que asesora al empresario en materia de seguridad y salud.",
        "El equipo de trabajadores designados por el empresario con formación específica en prevención de riesgos.",
        "El conjunto de medios humanos y materiales necesarios para realizar las actividades preventivas a fin de garantizar la adecuada protección de la seguridad y la salud de los trabajadores."
    ],
    correcta: 2,
    explicacion: "El art. 31 define el <strong>Servicio de Prevención</strong> como el <strong>conjunto de medios humanos y materiales</strong> necesarios para realizar las actividades preventivas a fin de garantizar la adecuada protección de la seguridad y la salud de los trabajadores, asesorando y asistiendo al empresario, a los trabajadores y a sus representantes."
},

{
    texto: "¿Cuántas especialidades o disciplinas preventivas contempla el RD 39/1997 en su art. 34 para la estructura del Servicio de Prevención?",
    opciones: [
        "Cinco especialidades: las cuatro anteriores más Vigilancia de la Salud.",
        "Tres especialidades: Seguridad, Higiene y Medicina del Trabajo.",
        "Cuatro especialidades: Medicina del Trabajo, Seguridad en el Trabajo, Higiene Industrial, y Ergonomía y Psicosociología Aplicada."
    ],
    correcta: 2,
    explicacion: "El <strong>RD 39/1997, art. 34</strong> establece <strong>cuatro especialidades o disciplinas preventivas</strong>: <strong>Medicina del Trabajo</strong>, <strong>Seguridad en el Trabajo</strong>, <strong>Higiene Industrial</strong>, y <strong>Ergonomía y Psicosociología Aplicada</strong>."
},

{
    texto: "Entre las funciones del Servicio de Prevención NO se encuentra:",
    opciones: [
        "Determinar la prioridad en la adopción de las medidas preventivas adecuadas y vigilar su eficacia.",
        "Diseñar, aplicar y coordinar los planes y programas de actuación preventiva.",
        "Sancionar a los trabajadores que incumplan las medidas preventivas adoptadas por la empresa."
    ],
    correcta: 2,
    explicacion: "El Servicio de Prevención <strong>NO tiene potestad sancionadora</strong>. Sus funciones incluyen: diseñar, aplicar y coordinar planes preventivos; evaluar factores de riesgo; determinar prioridades en medidas preventivas y vigilar su eficacia; formar e informar a los trabajadores. La potestad disciplinaria corresponde al empresario."
},

{
    texto: "Las Mutuas de Accidentes de Trabajo y Enfermedades Profesionales:",
    opciones: [
        "Solo pueden cubrir las contingencias de AT y EP, sin ninguna función preventiva.",
        "Están obligadas a asumir la gestión del Servicio de Prevención propio de todas sus empresas asociadas.",
        "Pueden desarrollar para las empresas a ellas asociadas funciones de asesoramiento y asistencia en materia de prevención según lo establecido en su normativa específica."
    ],
    correcta: 2,
    explicacion: "La Ley 31/1995 prevé que las <strong>Mutuas de Accidentes de Trabajo y Enfermedades Profesionales</strong> podrán desarrollar para las empresas a ellas asociadas <strong>funciones de asesoramiento y asistencia</strong> en materia de prevención, según lo establecido en su normativa específica."
},

{
    texto: "El art. 33 de la Ley 31/1995 reconoce a los trabajadores el derecho:",
    opciones: [
        "A ser consultados y participar en todas las cuestiones que afecten a la seguridad y la salud en el trabajo.",
        "A elegir libremente el médico que realizará los reconocimientos de salud obligatorios.",
        "A rechazar cualquier evaluación de riesgos que consideren intrusiva."
    ],
    correcta: 0,
    explicacion: "El <strong>art. 33</strong> reconoce a los trabajadores el derecho <strong>a ser consultados y a participar</strong> en el marco de todas las cuestiones que afecten a la seguridad y a la salud en el trabajo. Este derecho se canaliza a través de los Delegados de Prevención y del Comité de Seguridad y Salud."
},

{
    texto: "Según el art. 34 de la Ley 31/1995, los derechos de participación y representación de los trabajadores en materia preventiva se ejercerán:",
    opciones: [
        "Exclusivamente mediante asambleas generales de trabajadores convocadas trimestralmente.",
        "A través de los órganos específicos regulados en el Capítulo V: Delegados de Prevención y Comité de Seguridad y Salud.",
        "A través de los sindicatos con representación en el sector, sin necesidad de órganos internos."
    ],
    correcta: 1,
    explicacion: "El <strong>art. 34</strong> establece que los derechos de información, consulta y participación, formación en materia preventiva, paralización de la actividad y vigilancia de la salud se ejercitarán <strong>a través de los órganos de representación específicos</strong> regulados en el Capítulo V: <strong>Delegados de Prevención y Comité de Seguridad y Salud</strong>."
},

{
    texto: "El art. 40 de la Ley 31/1995 regula la colaboración de los Delegados de Prevención con:",
    opciones: [
        "La Mutua de Accidentes de Trabajo en las investigaciones de accidentes graves o mortales.",
        "El Servicio de Prevención Ajeno en la elaboración de las evaluaciones de riesgos iniciales.",
        "La Inspección de Trabajo y Seguridad Social en las visitas y verificaciones que realicen a los centros de trabajo para comprobar el cumplimiento de la normativa sobre prevención de riesgos laborales."
    ],
    correcta: 2,
    explicacion: "El <strong>art. 40</strong> establece que los Delegados de Prevención podrán <strong>acompañar a los Inspectores de Trabajo y Seguridad Social</strong> en las visitas y verificaciones que realicen a los centros de trabajo para comprobar el cumplimiento de la normativa sobre prevención de riesgos laborales."
},

{
    texto: "Según el art. 41 de la Ley 31/1995, los fabricantes, importadores y suministradores de maquinaria, equipos, productos y útiles de trabajo están obligados a:",
    opciones: [
        "Responsabilizarse de cualquier accidente que se produzca con sus productos, aunque no se utilicen correctamente.",
        "Asegurar que éstos no constituyan una fuente de peligro para el trabajador, siempre que sean instalados y utilizados en las condiciones, forma y para los fines recomendados por ellos.",
        "Proporcionar formación gratuita y obligatoria a todos los trabajadores que vayan a utilizar sus productos."
    ],
    correcta: 1,
    explicacion: "El <strong>art. 41</strong> obliga a fabricantes, importadores y suministradores a <strong>asegurar que la maquinaria, equipos, productos y útiles de trabajo no constituyan una fuente de peligro</strong> para el trabajador, <strong>siempre que sean instalados y utilizados en las condiciones, forma y para los fines recomendados por ellos</strong>."
},

{
    texto: "Las obligaciones de los fabricantes, importadores y suministradores en materia preventiva se enlazan con:",
    opciones: [
        "El Código Penal en materia de delitos contra la seguridad de los trabajadores.",
        "La normativa comunitaria de mercado interior que regula la comercialización de productos y equipos.",
        "La normativa fiscal sobre IVA de productos industriales."
    ],
    correcta: 1,
    explicacion: "Las obligaciones del art. 41 se conectan con la <strong>normativa comunitaria de mercado interior</strong> que regula la comercialización, libre circulación y puesta en el mercado de productos, equipos y maquinaria (Directivas de producto, marcado CE, etc.)."
},

{
    texto: "Según el art. 39 del Acuerdo-Convenio del Ayuntamiento de Madrid, los empleados públicos:",
    opciones: [
        "Están exentos de aplicar medidas preventivas si no han recibido formación específica previa.",
        "Pondrán en práctica las medidas adoptadas legal y reglamentariamente para prevenir los riesgos en el trabajo.",
        "Solo están obligados a utilizar EPIs si lo solicitan expresamente por escrito."
    ],
    correcta: 1,
    explicacion: "El art. 39 del Acuerdo-Convenio establece que los empleados públicos <strong>pondrán en práctica las medidas que se adopten legal y reglamentariamente</strong> para prevenir los riesgos en el trabajo. Es una obligación directa, no condicionada a formación previa."
},

{
    texto: "El art. 39 del Acuerdo-Convenio establece que los empleados públicos utilizarán correctamente:",
    opciones: [
        "Solo aquellos equipos para los que hayan firmado un documento de recepción previo.",
        "Exclusivamente los equipos de protección individual proporcionados por el Ayuntamiento.",
        "Las máquinas, aparatos, herramientas, sustancias peligrosas, equipos de transporte y, en general, cualesquiera otros medios con los que desarrollen su actividad."
    ],
    correcta: 2,
    explicacion: "El art. 39 obliga a utilizar correctamente <strong>las máquinas, aparatos, herramientas, sustancias peligrosas, equipos de transporte y, en general, cualesquiera otros medios</strong> con los que desarrollen su actividad. Es una obligación amplia, no limitada a EPIs."
},

{
    texto: "Según el art. 39 del Acuerdo-Convenio, ante una situación de riesgo grave o inmediato, el empleado público:",
    opciones: [
        "Debe continuar trabajando mientras informa por escrito al Servicio de Prevención.",
        "Tendrá derecho a interrumpir su actividad y a abandonar el lugar de trabajo conforme al art. 21 de la Ley 31/1995.",
        "Solo puede abandonar el puesto si tiene autorización previa de su superior jerárquico."
    ],
    correcta: 1,
    explicacion: "El art. 39 del Acuerdo-Convenio reconoce expresamente el derecho del empleado público a <strong>interrumpir su actividad y a abandonar el lugar de trabajo</strong> conforme a los términos establecidos en el <strong>art. 21 de la Ley 31/1995</strong> ante una situación de riesgo grave o inmediato."
},

{
    texto: "El art. 40 del Acuerdo-Convenio establece que el Servicio de Prevención realizará reconocimientos médicos:",
    opciones: [
        "Al ingreso del personal, con carácter anual y cuantos otros se estimen necesarios en función de los riesgos o las circunstancias.",
        "Solo al ingreso, siendo los reconocimientos posteriores voluntarios en todos los casos.",
        "Cada tres años, salvo en puestos de especial peligrosidad."
    ],
    correcta: 0,
    explicacion: "El art. 40 del Acuerdo-Convenio establece que el SP realizará reconocimientos médicos <strong>al ingreso del personal</strong>, con <strong>carácter anual</strong> y <strong>cuantos otros se estimen necesarios en función de los riesgos o las circunstancias</strong>. Es una vigilancia periódica y adaptada."
},

{
    texto: "Los resultados de las auditorías del sistema de prevención según el art. 40 del Acuerdo-Convenio:",
    opciones: [
        "Solo se comunicarán al empresario y tendrán carácter confidencial.",
        "Se reflejarán en un informe que se mantendrá a disposición de la Autoridad Laboral competente y se entregará copia a los Delegados de Prevención.",
        "Se publicarán en el Boletín Oficial del Ayuntamiento de Madrid trimestralmente."
    ],
    correcta: 1,
    explicacion: "El art. 40 establece que los resultados de las auditorías se reflejarán en un <strong>informe</strong> que se mantendrá a <strong>disposición de la Autoridad Laboral competente</strong> y del que se entregará <strong>copia a los Delegados de Prevención</strong>."
},

{
    texto: "Según el art. 41 del Acuerdo-Convenio, el registro de los Delegados de Prevención designados:",
    opciones: [
        "Será gestionado exclusivamente por la Dirección General de Recursos Humanos sin participación del Comité.",
        "Será elaborado en el seno del Comité de Seguridad y Salud, respetando la legislación vigente en materia de protección de datos de carácter personal.",
        "No existe obligación de llevar registro alguno de los Delegados designados."
    ],
    correcta: 1,
    explicacion: "El art. 41 del Acuerdo-Convenio establece que se elaborará en el seno del Comité de Seguridad y Salud un <strong>Registro de los Delegados de Prevención designados</strong>, que respetará la legislación vigente en materia de <strong>protección de datos de carácter personal</strong>."
},

{
    texto: "La solicitud de adaptación de puesto por motivos de salud según el art. 42 del Acuerdo-Convenio puede realizarla:",
    opciones: [
        "Exclusivamente el Servicio de Prevención tras evaluación médica.",
        "El empleado público afectado o el órgano administrativo responsable correspondiente.",
        "Solo el superior jerárquico del empleado afectado."
    ],
    correcta: 1,
    explicacion: "El art. 42 establece que la solicitud de adaptación de puesto podrá ser realizada tanto por <strong>el empleado público afectado</strong> como por <strong>el órgano administrativo responsable correspondiente</strong>. Hay doble vía de iniciativa."
},

{
    texto: "Según el art. 42 del Acuerdo-Convenio, la adaptación del puesto de trabajo tendrá como objetivo:",
    opciones: [
        "Trasladar al empleado a un puesto sin ningún tipo de responsabilidad.",
        "Facilitar el desempeño del puesto, adecuando las condiciones de trabajo a los concretos problemas de salud dictaminados por el Servicio de Prevención.",
        "Reducir la jornada laboral al 50% manteniendo el 100% de las retribuciones."
    ],
    correcta: 1,
    explicacion: "El art. 42 establece que la adaptación tendrá a facilitar el <strong>desempeño del puesto</strong>, <strong>adecuando las condiciones de trabajo</strong> a los concretos problemas de salud dictaminados por el Servicio de Prevención. Es adaptación funcional, no mera reducción de carga."
},

{
    texto: "El art. 42 del Acuerdo-Convenio contempla la protección efectiva de la madre y el feto durante el embarazo. ¿Qué medida se prevé si no resultan posibles adaptaciones del puesto?",
    opciones: [
        "El pase automático a situación de excedencia voluntaria con reserva de puesto.",
        "La adscripción del empleado a otro puesto compatible con su estado, condicionada a que exista puesto vacante dotado presupuestariamente y equivalente al puesto de origen.",
        "La suspensión del contrato sin derecho a retribución hasta finalizar el embarazo."
    ],
    correcta: 1,
    explicacion: "El art. 42 prevé que en los supuestos de <strong>inviabilidad de adaptación</strong>, se podrá <strong>adscribir al empleado público a otro puesto de trabajo compatible</strong> con su estado, <strong>condicionada a que exista puesto vacante</strong>, dotado presupuestariamente, <strong>equivalente al puesto de origen</strong>."
},

{
    texto: "La solicitud de adaptación de puesto del art. 42 del Acuerdo-Convenio deberá acompañarse de:",
    opciones: [
        "La conformidad escrita del resto de compañeros del servicio.",
        "Un certificado de la Mutua de Accidentes autorizando el cambio de puesto.",
        "Los informes médicos justificativos que el empleado público estime oportunos, que deberán manifestar la incidencia negativa del puesto en el estado de salud."
    ],
    correcta: 2,
    explicacion: "El art. 42 exige que la solicitud se acompañe de <strong>los informes médicos justificativos</strong> que el empleado público estime oportunos. Los informes médicos <strong>deberán manifestar la incidencia negativa del puesto desempeñado en el estado de salud</strong> y será preceptivo el informe del Servicio de Prevención."
},

{
    texto: "Recibida la solicitud de adaptación de puesto según el art. 42, ¿qué trámite se realiza?",
    opciones: [
        "Se dará traslado de la misma al Comité de Seguridad y Salud para la emisión de informe, y al órgano unitario de representación del afectado.",
        "El Servicio de Prevención decide directamente sin necesidad de informes adicionales.",
        "Se publica en el tablón de anuncios para que cualquier empleado pueda alegar lo que estime oportuno."
    ],
    correcta: 0,
    explicacion: "El art. 42 establece que recibida la solicitud, se <strong>dará traslado</strong> de la misma al <strong>Comité de Seguridad y Salud</strong> para la emisión de informe, así como <strong>al órgano unitario de representación del afectado</strong>. Es un procedimiento con participación representativa."
},

{
    texto: "El órgano competente para dictar Resolución concediendo o denegando la adaptación de puesto del art. 42 es:",
    opciones: [
        "El Comité de Seguridad y Salud por mayoría de dos tercios.",
        "El órgano que corresponda según la naturaleza de la solicitud (generalmente el titular del centro directivo competente en materia de personal).",
        "El médico del Servicio de Prevención que haya emitido el informe preceptivo."
    ],
    correcta: 1,
    explicacion: "El art. 42 establece que el <strong>órgano competente</strong> dictará Resolución concediendo o denegando el traslado. En este último caso, <strong>la Resolución será motivada</strong>. El órgano competente dependerá de la naturaleza de la solicitud conforme a la normativa de personal."
},

{
    texto: "Según el art. 42 del Acuerdo-Convenio, las obras de remodelación de centros de trabajo:",
    opciones: [
        "Solo pueden realizarse en periodo vacacional con el centro completamente cerrado.",
        "Se realizarán siempre durante la jornada laboral para que los trabajadores puedan vigilar su correcta ejecución.",
        "Se ejecutarán preferentemente fuera de la jornada laboral, y cuando no sea posible se garantizará su traslado provisional mientras perduren los riesgos."
    ],
    correcta: 2,
    explicacion: "El art. 42 prevé que las <strong>obras de remodelación</strong> de centros de trabajo se ejecutarán <strong>preferentemente fuera de la jornada laboral</strong>. Cuando esto no sea posible y puedan derivarse riesgos para la seguridad y salud de los trabajadores y usuarios, se <strong>garantizará su traslado provisional</strong>, en tanto perduren los riesgos."
},

{
    texto: "Las situaciones de IT del art. 43 del Acuerdo-Convenio se refieren a:",
    opciones: [
        "Cualquier tipo de IT, incluyendo las derivadas de accidentes no laborales y enfermedades profesionales.",
        "IT por accidente de trabajo exclusivamente.",
        "IT por enfermedad común de empleados públicos adscritos al Régimen General de la Seguridad Social."
    ],
    correcta: 2,
    explicacion: "El art. 43 regula las <strong>situaciones de IT por enfermedad común</strong> de empleados públicos <strong>adscritos al Régimen General de la Seguridad Social</strong>. Es una mejora específica para IT común, no para AT ni EP que ya tienen su régimen propio."
},

{
    texto: "Según el art. 43 del Acuerdo-Convenio, entre el día 1 y el día 3 de IT por enfermedad común, el empleado público percibirá:",
    opciones: [
        "El 100% desde el primer día, sin carencia.",
        "El 75% de las retribuciones desde el primer día.",
        "El 50% de las retribuciones que viniera percibiendo en el mes anterior al inicio de la IT."
    ],
    correcta: 2,
    explicacion: "El art. 43 establece que <strong>entre el día 1 y 3</strong> desde el inicio de la IT, el empleado público percibirá el <strong>50% de las retribuciones</strong> que viniera percibiendo en el mes anterior al inicio de la IT. Es una mejora respecto al RGSS que no cubre los primeros días."
},

{
    texto: "Desde el día 4 al día 20 de IT por enfermedad común según el art. 43 del Acuerdo-Convenio:",
    opciones: [
        "El empleado percibirá directamente el 100% de sus retribuciones.",
        "El empleado percibirá el 50%, igual que los días 1-3.",
        "El empleado percibirá un complemento que sumado a la prestación económica del RGSS sea equivalente al 75% de las retribuciones del mes anterior."
    ],
    correcta: 2,
    explicacion: "El art. 43 establece que <strong>entre el día 4 y 20</strong>, ambos incluidos, el empleado percibirá un <strong>complemento</strong> que sumado a la prestación económica reconocida por el Régimen General de la Seguridad Social sea <strong>equivalente al 75%</strong> de la retribución que viniera percibiendo en el mes anterior al de inicio de la IT."
},

{
    texto: "A partir del día 21 de IT por enfermedad común, el art. 43 del Acuerdo-Convenio establece:",
    opciones: [
        "Un complemento hasta el 100% de las retribuciones del mes anterior, con el límite de 24 mensualidades.",
        "El empleado pasa a percibir exclusivamente la prestación de la Seguridad Social sin complemento.",
        "Un complemento hasta el 90% sin límite temporal."
    ],
    correcta: 0,
    explicacion: "El art. 43 establece que <strong>desde el día 21</strong> en adelante, el empleado percibirá un <strong>complemento hasta el 100%</strong> de la retribución que viniera percibiendo en el mes anterior al de inicio de la IT, con el <strong>límite de 24 mensualidades</strong>. Es el tope máximo temporal de la mejora."
},

{
    texto: "El art. 44 del Acuerdo-Convenio mejora las prestaciones de maternidad y paternidad. ¿Qué conceptos retributivos incluye la mejora?",
    opciones: [
        "Exclusivamente las pagas extraordinarias prorrateadas.",
        "Solo el salario base, sin ningún complemento.",
        "Los conceptos básicos más los complementos que viniera percibiendo el empleado en activo."
    ],
    correcta: 2,
    explicacion: "El art. 44 establece que la mejora de prestaciones de maternidad/paternidad incluye <strong>los conceptos básicos más los complementos</strong> que viniera percibiendo el empleado público municipal en activo. Es una mejora integral, no limitada al salario base."
},

{
    texto: "Según el art. 44 del Acuerdo-Convenio, la mejora de prestaciones se aplica también en supuestos de:",
    opciones: [
        "Solo partos biológicos, quedando excluidas las adopciones.",
        "Adopción, acogimiento permanente o preadoptivo.",
        "Únicamente maternidad, no paternidad."
    ],
    correcta: 1,
    explicacion: "El art. 44 extiende la mejora a los supuestos de <strong>adopción</strong>, <strong>acogimiento permanente</strong> o <strong>preadoptivo</strong>. La mejora no se limita a partos biológicos."
},

{
    texto: "El modelo de seguridad que adopta el PPRL del Ayuntamiento de Madrid se proyecta en una dimensión horizontal que abarca:",
    opciones: [
        "Exclusivamente los aspectos técnicos y de equipamiento de los centros de trabajo.",
        "La técnica, la organización del trabajo, las condiciones de trabajo, las relaciones sociales y los factores ambientales.",
        "Solo la cadena jerárquica de responsabilidades preventivas."
    ],
    correcta: 1,
    explicacion: "El PPRL adopta un modelo de seguridad integrado proyectado en doble dimensión. La <strong>dimensión horizontal</strong> abarca: <strong>técnica, organización del trabajo, condiciones de trabajo, relaciones sociales y factores ambientales</strong>. Es un enfoque integral."
},

{
    texto: "La dimensión vertical del modelo de seguridad del PPRL del Ayuntamiento de Madrid se refiere a:",
    opciones: [
        "La coordinación entre el Ayuntamiento y sus Organismos Autónomos.",
        "La distribución de responsabilidades entre diferentes Áreas de Gobierno.",
        "La cadena jerárquica de mando en todos sus niveles."
    ],
    correcta: 2,
    explicacion: "La <strong>dimensión vertical</strong> del modelo de seguridad se proyecta sobre la <strong>cadena jerárquica de mando en todos sus niveles</strong>. Implica que la prevención se integra en la línea de mando desde el nivel superior hasta el inferior."
},

{
    texto: "Según el PPRL, los equipos multidisciplinares del Servicio de Prevención:",
    opciones: [
        "Dependen de diferentes Áreas de Gobierno sin coordinación central.",
        "Trabajan de manera independiente y solo coordinan actuaciones en casos excepcionales.",
        "Actúan de forma integrada en el ámbito del Servicio de Prevención Único."
    ],
    correcta: 2,
    explicacion: "El PPRL establece que los equipos multidisciplinares (compuestos por técnicos de las 4 especialidades) <strong>actuarán de forma integrada</strong> en el ámbito del <strong>Servicio de Prevención Único</strong>. No son compartimentos estancos."
},

{
    texto: "Los titulares de los centros directivos del Ayuntamiento tienen la obligación de designar interlocutores en materia de prevención. ¿Cuántos como mínimo?",
    opciones: [
        "Un interlocutor único para todo el Ayuntamiento.",
        "Dos personas por cada centro de trabajo con más de 100 empleados.",
        "Al menos una persona por cada Área de Gobierno, Distrito y Organismo Autónomo."
    ],
    correcta: 2,
    explicacion: "El PPRL establece que los titulares de los centros directivos deberán designar <strong>al menos una persona por cada Área de Gobierno, Distrito y Organismo Autónomo</strong> que actúe como interlocutor en materia de prevención."
},

{
    texto: "Si los interlocutores designados en materia de prevención carecen de formación preventiva, ¿quién la impartirá según el PPRL?",
    opciones: [
        "La Dirección General de Función Pública mediante cursos específicos.",
        "El Servicio de Prevención.",
        "Cada interlocutor deberá formarse por su cuenta en centros acreditados."
    ],
    correcta: 1,
    explicacion: "El PPRL establece que si los interlocutores designados carecen de formación preventiva, esta <strong>será impartida por el Servicio de Prevención</strong>. Es responsabilidad del SP formar a los interlocutores."
},

{
    texto: "Según el PPRL, ¿en qué supuestos debe actualizarse la evaluación de riesgos de un puesto?",
    opciones: [
        "Cuando cambien las condiciones de trabajo, se introduzcan nuevas tecnologías, se incorporen personas especialmente sensibles, o se detecten daños para la salud.",
        "Solo cuando se produzca un accidente de trabajo con baja superior a 30 días.",
        "Cada cinco años de forma automática, sin necesidad de que concurra ninguna circunstancia específica."
    ],
    correcta: 0,
    explicacion: "El PPRL, siguiendo el RD 39/1997, establece que la evaluación debe actualizarse cuando: <strong>cambien las condiciones de trabajo</strong>, se <strong>introduzcan nuevas tecnologías</strong>, se incorporen <strong>personas especialmente sensibles</strong>, se detecten <strong>daños para la salud</strong>, o se aprecien actividades preventivas inadecuadas."
},

{
    texto: "¿Cuál es el orden de prioridad en la adopción de medidas preventivas según el PPRL?",
    opciones: [
        "Primero evaluar todos los riesgos, luego distribuir EPIs, finalmente modificar las condiciones de trabajo.",
        "Primero evitar el riesgo; si no es posible, evaluarlo y adoptar medidas; los EPIs son el último recurso.",
        "Primero formar a los trabajadores, luego evaluar riesgos, finalmente adoptar medidas técnicas."
    ],
    correcta: 1,
    explicacion: "El PPRL sigue el art. 15.1.a) LPRL: <strong>primero evitar el riesgo</strong>. Si no puede evitarse, se evalúa y planifica. Los <strong>EPIs se utilizan solo cuando los riesgos no pueden evitarse o limitarse suficientemente</strong> por medios técnicos de protección colectiva o medidas de organización. Son el <strong>último recurso</strong>."
},

{
    texto: "Los EPIs, según el PPRL, se utilizarán:",
    opciones: [
        "Solo en puestos con riesgo catalogado como muy grave por la evaluación de riesgos.",
        "Como primera medida preventiva en cualquier puesto de trabajo con riesgo identificado.",
        "Cuando los riesgos no puedan evitarse o limitarse suficientemente por medios técnicos de protección colectiva o medidas de organización del trabajo."
    ],
    correcta: 2,
    explicacion: "El PPRL establece que los EPIs se utilizarán <strong>cuando los riesgos no puedan evitarse o limitarse suficientemente</strong> por medios técnicos de <strong>protección colectiva</strong> o <strong>medidas de organización del trabajo</strong>. Son subsidiarios, no prioritarios."
},

{
    texto: "La Comisión Permanente del Comité de Seguridad y Salud se reúne mensualmente, con dos excepciones. ¿Cuáles?",
    opciones: [
        "Los meses de diciembre y enero por las festividades.",
        "Los meses de julio y agosto por coincidir con el periodo vacacional.",
        "Los meses en que se reúne el Comité de Seguridad y Salud y el mes de agosto."
    ],
    correcta: 2,
    explicacion: "La Comisión Permanente se reúne mensualmente salvo en <strong>los meses en que se reúne el Comité de Seguridad y Salud</strong> (trimestralmente) y <strong>el mes de agosto</strong>. En los meses de Comité, es este quien celebra la reunión."
},

{
    texto: "El quórum para que las reuniones de la Comisión Permanente sean válidamente celebradas según el PPRL es:",
    opciones: [
        "La mayoría absoluta de ambas partes (Administración y Delegados).",
        "Un tercio de los representantes de la Administración en el Comité y de los Delegados de Prevención según representatividad.",
        "La unanimidad de los Delegados de Prevención presentes."
    ],
    correcta: 1,
    explicacion: "El PPRL fija un quórum reducido de <strong>un tercio</strong> de los representantes de la Administración en el Comité y de los Delegados de Prevención según representatividad. Este quórum inferior al del Comité permite mayor agilidad operativa."
},

{
    texto: "El PPRL amplía las facultades del Delegado de Prevención respecto a la Ley 31/1995 en materia de acompañamiento. ¿En qué consiste esa ampliación?",
    opciones: [
        "Pueden acompañar al Alcalde en las visitas de inspección interna a los centros municipales.",
        "Pueden realizar visitas autónomas sin necesidad de acompañar a ningún técnico o inspector.",
        "Pueden acompañar no solo a los técnicos en evaluaciones sino también a los Inspectores de Trabajo y Seguridad Social en sus visitas."
    ],
    correcta: 2,
    explicacion: "El PPRL amplía la facultad del art. 36.2.a) LPRL: los Delegados pueden acompañar tanto a los <strong>técnicos de prevención en las evaluaciones</strong> como a los <strong>Inspectores de Trabajo y Seguridad Social en las visitas y verificaciones</strong> que realicen en los centros de trabajo."
},

{
    texto: "¿Cuál de los siguientes documentos NO figura entre los que el PPRL exige tener a disposición de la Autoridad Laboral?",
    opciones: [
        "La planificación de la actividad preventiva, incluidas las medidas de prevención y protección.",
        "La evaluación de riesgos para la seguridad y la salud en el trabajo.",
        "Los contratos suscritos con la Mutua de Accidentes de Trabajo y su objeto."
    ],
    correcta: 2,
    explicacion: "Los contratos con la Mutua <strong>no figuran</strong> en la lista de documentación a disposición de la Autoridad Laboral del PPRL. Sí figuran: el Plan de Prevención, la evaluación de riesgos, la planificación preventiva, el registro de entrega de EPIs, la relación de exámenes de salud, la relación de accidentes con baja, la certificación de formación preventiva y la memoria anual."
},

{
    texto: "Según el PPRL, la política preventiva del Ayuntamiento se comunica a través de:",
    opciones: [
        "Sesiones presenciales obligatorias impartidas por el Servicio de Prevención.",
        "Circulares impresas distribuidas en papel a cada empleado anualmente.",
        "AYRE, la plataforma informática municipal, mediante la difusión de normas e instrucciones en soporte documental o informático."
    ],
    correcta: 2,
    explicacion: "El PPRL establece que la política preventiva se comunicará mediante la difusión de normas e instrucciones de seguridad y salud laboral en soporte documental o informático a través de <strong>AYRE</strong>, la plataforma informática del Ayuntamiento de Madrid, garantizando una difusión eficiente y completa."
}

    ]
},
{
id: 2,
    nombre: "Tema 2 - Igualdad",
    icono: "⚖️",
    preguntas: [
{
    texto: "Según el art. 1 de la Ley Orgánica 3/2007, ¿cuál es el objeto de la Ley?",
    opciones: [
        "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres, en particular mediante la eliminación de la discriminación de la mujer.",
        "Garantizar exclusivamente la igualdad salarial entre mujeres y hombres en el ámbito laboral.",
        "Establecer cuotas obligatorias de representación paritaria en todas las instituciones públicas y privadas."
    ],
    correcta: 0,
    explicacion: "El art. 1 de la LO 3/2007 establece claramente que su objeto es <strong>'hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres'</strong>, no limitándose a la igualdad salarial (solo un aspecto laboral) ni estableciendo cuotas obligatorias universales (que serían acciones positivas específicas del art. 11)."
},

{
    texto: "El artículo 1 de la LO 3/2007 menciona que el objeto de la Ley es 'hacer efectivo el derecho de igualdad de trato y de oportunidades'. ¿Qué dos conceptos distingue?",
    opciones: [
        "Igualdad formal e igualdad material.",
        "Igualdad de trato e igualdad de oportunidades.",
        "Igualdad retributiva e igualdad de acceso."
    ],
    correcta: 1,

    explicacion: "El art. 1 de la LO 3/2007 establece que su objeto es <strong>'hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres'</strong>, no limitándose a la igualdad salarial (solo un aspecto laboral) ni estableciendo cuotas obligatorias universales (que serían acciones positivas del art. 11)."

},

{
    texto: "El art. 1 de la LO 3/2007 establece que su objeto es hacer efectivo el derecho de igualdad 'en particular mediante la eliminación de la discriminación de la mujer'. ¿En qué ámbitos se especifica que debe eliminarse esta discriminación?",
    opciones: [
        "Únicamente en el ámbito laboral y económico.",
        "En cualesquiera de los ámbitos de la vida y, singularmente, en las esferas política, civil, laboral, económica, social y cultural.",
        "Exclusivamente en el acceso a cargos públicos y en la representación política."
    ],
    correcta: 1,

    explicacion: "El art. 1 distingue dos conceptos complementarios: <strong>'igualdad de trato'</strong> (ausencia de discriminación, mismo trato en situaciones comparables) e <strong>'igualdad de oportunidades'</strong> (acceso en condiciones de igualdad). Son dimensiones diferentes pero relacionadas del derecho a la igualdad."

},

{
    texto: "Según el art. 1, la eliminación de la discriminación debe producirse 'en cualesquiera de los ámbitos de la vida'. ¿Qué esferas menciona expresamente la Ley como singularmente importantes?",
    opciones: [
        "La esfera familiar, educativa y sanitaria.",
        "Las esferas política, civil, laboral, económica, social y cultural.",
        "Las esferas pública, privada y doméstica."
    ],
    correcta: 1,

    explicacion: "El art. 1 especifica que la discriminación debe eliminarse <strong>'en cualesquiera de los ámbitos de la vida y, singularmente, en las esferas política, civil, laboral, económica, social y cultural'</strong>. 'Cualesquiera' indica alcance general; 'singularmente' destaca seis esferas sin limitar su aplicación."

},

{
    texto: "Según el art. 1 de la LO 3/2007, ¿qué artículos de la Constitución Española menciona expresamente como fundamento del objeto de la Ley?",
    opciones: [
        "Los artículos 1.1, 9.2 y 14 de la Constitución.",
        "Los artículos 9.2 y 14 de la Constitución.",
        "Los artículos 14, 23 y 35 de la Constitución."
    ],
    correcta: 1,

    explicacion: "El art. 1 menciona expresamente seis esferas: <strong>política, civil, laboral, económica, social y cultural</strong>. Son ámbitos ilustrativos de especial relevancia donde la discriminación debe eliminarse singularmente, aunque la Ley se aplica en todos los ámbitos de la vida."

},

{
    texto: "El art. 1 de la LO 3/2007 cita el artículo 9.2 de la Constitución. ¿Qué principio recoge ese artículo constitucional?",
    opciones: [
        "El principio de legalidad y jerarquía normativa.",
        "Que corresponde a los poderes públicos promover las condiciones para que la libertad y la igualdad del individuo sean reales y efectivas.",
        "La prohibición de discriminación por razón de nacimiento, raza, sexo, religión u opinión."
    ],
    correcta: 1,

    explicacion: "El art. 1 cita como fundamento los <strong>arts. 9.2 y 14 CE</strong>. El 9.2 CE obliga a promover la igualdad real y efectiva (igualdad material); el 14 CE proclama la igualdad ante la ley y prohíbe la discriminación (igualdad formal). Juntos fundamentan la igualdad efectiva."

},

{
    texto: "El art. 1 menciona el art. 14 de la Constitución. ¿Qué proclama el art. 14 CE?",
    opciones: [
        "La igualdad de los españoles ante la ley, sin que pueda prevalecer discriminación alguna por razón de nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social.",
        "El derecho al trabajo y a la libre elección de profesión u oficio.",
        "El derecho a la educación y a la libertad de enseñanza."
    ],
    correcta: 0,

    explicacion: "El art. 9.2 CE establece que corresponde a los poderes públicos <strong>'promover las condiciones para que la libertad y la igualdad sean reales y efectivas; remover los obstáculos'</strong>. Es el fundamento constitucional de la <strong>igualdad material</strong> y de las acciones positivas."

},

{
    texto: "El art. 1 de la LO 3/2007 establece el objeto de 'hacer efectivo el derecho de igualdad'. ¿Qué tipo de igualdad pretende la Ley según su artículo 1?",
    opciones: [
        "Solo la igualdad formal o jurídica ante la ley.",
        "La igualdad de trato y de oportunidades entre mujeres y hombres, es decir, tanto la igualdad formal como la material o efectiva.",
        "Únicamente la igualdad de oportunidades en el acceso a cargos públicos."
    ],
    correcta: 1,

    explicacion: "El art. 14 CE proclama: <strong>'Los españoles son iguales ante la ley, sin que pueda prevalecer discriminación por razón de sexo'</strong>. Es el fundamento de la <strong>igualdad formal</strong> ante la ley y de la prohibición de discriminación por razón de sexo."

},

// ===== BLOQUE 2: LEY ORGÁNICA 3/2007 - ÁMBITO (ART. 2) - 6 preguntas =====

{
    texto: "El art. 2.1 de la LO 3/2007 establece el ámbito de aplicación de la Ley. ¿A quiénes se aplica?",
    opciones: [
        "Solo a las personas físicas de nacionalidad española.",
        "A toda persona, física o jurídica, que se encuentre o actúe en territorio español, cualquiera que fuese su nacionalidad, domicilio o residencia.",
        "Únicamente a las personas jurídicas públicas con sede en España."
    ],
    correcta: 1,

    explicacion: "El art. 1 persigue <strong>igualdad formal</strong> (igualdad ante la ley del art. 14 CE: mismo trato jurídico) e <strong>igualdad material</strong> (igualdad real del art. 9.2 CE: remoción de obstáculos). La Ley no se conforma con igualdad formal, sino que busca igualdad real y efectiva."

},

{
    texto: "Según el art. 2.1, la Ley se aplica a cualquier persona 'que se encuentre o actúe en territorio español'. ¿Qué criterio de aplicación establece?",
    opciones: [
        "El criterio de nacionalidad española.",
        "El criterio territorial: estar o actuar en territorio español.",
        "El criterio de residencia habitual en España."
    ],
    correcta: 1,

    explicacion: "El art. 2.1 establece <strong>ámbito subjetivo universal</strong>: 'toda persona, física o jurídica', y <strong>criterio territorial</strong>: 'que se encuentre o actúe en territorio español', con independencia de nacionalidad, domicilio o residencia. Lo determinante es el criterio territorial."

},

{
    texto: "El art. 2.1 indica que la Ley se aplica 'cualquiera que fuese su nacionalidad, domicilio o residencia'. ¿Qué significa esta expresión?",
    opciones: [
        "Que solo se aplica a personas con nacionalidad española pero con domicilio en el extranjero.",
        "Que la nacionalidad, el domicilio o la residencia son irrelevantes para la aplicación de la Ley; basta con encontrarse o actuar en territorio español.",
        "Que se requiere nacionalidad española y residencia en territorio español."
    ],
    correcta: 1,

    explicacion: "El art. 2.1 adopta el <strong>criterio territorial</strong>: basta con encontrarse o actuar en territorio español. No se exige nacionalidad española, ni domicilio ni residencia en España. El criterio es territorialidad, no personalidad."

},

{
    texto: "Según el art. 2.2 de la LO 3/2007, ¿qué alcance tiene la aplicación de la Ley respecto a las personas físicas o jurídicas?",
    opciones: [
        "Se aplica solo a personas físicas; las jurídicas quedan excluidas.",
        "Se aplica tanto a personas físicas como jurídicas, públicas y privadas.",
        "Se aplica únicamente a las Administraciones Públicas y empresas del sector público."
    ],
    correcta: 1,

    explicacion: "La expresión <strong>'cualquiera que fuese su nacionalidad, domicilio o residencia'</strong> del art. 2.1 es una cláusula de exclusión: estos elementos son irrelevantes. Solo importa: encontrarse o actuar en territorio español."

},

{
    texto: "El art. 2.2 establece que las obligaciones de la Ley serán de aplicación 'tanto a las personas físicas como a las personas jurídicas'. ¿Qué tipo de personas jurídicas incluye?",
    opciones: [
        "Solo las personas jurídicas públicas.",
        "Solo las personas jurídicas privadas.",
        "Tanto las personas jurídicas públicas como las privadas."
    ],
    correcta: 2,

    explicacion: "El art. 2.2 extiende la aplicación <strong>'tanto a las personas físicas como a las personas jurídicas, públicas y privadas'</strong>, abarcando: ciudadanos, Administraciones Públicas, empresas públicas y privadas, asociaciones, fundaciones, etc."

},

{
    texto: "Considerando los arts. 1 y 2 de la LO 3/2007 conjuntamente, ¿cuál es el ámbito subjetivo (quién) y objetivo (dónde) de aplicación de la Ley?",
    opciones: [
        "Subjetivo: toda persona física o jurídica. Objetivo: territorio español.",
        "Subjetivo: solo personas físicas españolas. Objetivo: territorio español y extranjero.",
        "Subjetivo: solo Administraciones Públicas. Objetivo: territorio español."
    ],
    correcta: 0,

    explicacion: "El art. 2.2 menciona expresamente <strong>'personas jurídicas públicas como privadas'</strong>: en lo público (Estado, CCAA, Ayuntamientos, organismos); en lo privado (empresas, sociedades, asociaciones, fundaciones). Todas quedan obligadas."

},

// ===== BLOQUE 3: PRINCIPIO IGUALDAD DE TRATO (ART. 3) - 5 preguntas =====

{
    texto: "El art. 3 de la LO 3/2007 define el principio de igualdad de trato entre mujeres y hombres. ¿Qué implica este principio?",
    opciones: [
        "La ausencia de toda discriminación, directa o indirecta, por razón de sexo, y, especialmente, las derivadas de la maternidad, la asunción de obligaciones familiares y el estado civil.",
        "La aplicación exclusiva de medidas de acción positiva en favor de las mujeres en todos los ámbitos.",
        "La obligación de establecer cuotas paritarias del 50% en todos los órganos de decisión."
    ],
    correcta: 0,

    explicacion: "Los arts. 1 y 2 configuran: <strong>ámbito subjetivo</strong> (quién): toda persona física/jurídica; <strong>ámbito objetivo</strong> (dónde): territorio español; <strong>ámbito material</strong> (qué): igualdad en todos los ámbitos de la vida. Resultado: aplicación muy amplia."

},

{
    texto: "Según el art. 3, el principio de igualdad de trato implica 'la ausencia de toda discriminación, directa o indirecta, por razón de sexo'. ¿Qué tipos de discriminación menciona?",
    opciones: [
        "Solo la discriminación directa.",
        "La discriminación directa o indirecta.",
        "Solo la discriminación derivada de la maternidad."
    ],
    correcta: 1,

    explicacion: "El art. 3 define el principio de igualdad de trato como <strong>'ausencia de toda discriminación, directa o indirecta, por razón de sexo'</strong>, mencionando <strong>especialmente</strong> maternidad, obligaciones familiares y estado civil. Es un concepto negativo: ausencia de discriminación."

},

{
    texto: "El art. 3 menciona 'especialmente' ciertas discriminaciones. ¿Cuáles son las derivadas que señala expresamente?",
    opciones: [
        "Las derivadas del embarazo y la lactancia.",
        "Las derivadas de la maternidad, la asunción de obligaciones familiares y el estado civil.",
        "Las derivadas de la edad, la discapacidad y la orientación sexual."
    ],
    correcta: 1,

    explicacion: "El art. 3 establece que implica ausencia de discriminación <strong>'directa o indirecta'</strong>. Son dos modalidades: directa (trato menos favorable por razón de sexo, art. 6.1) e indirecta (disposición aparentemente neutra que perjudica a un sexo, art. 6.2)."

},

{
    texto: "Según el art. 3, ¿se considera discriminación por razón de sexo la discriminación derivada 'de la asunción de obligaciones familiares'?",
    opciones: [
        "No, solo se considera discriminación la derivada de la maternidad.",
        "Sí, expresamente se menciona como especialmente incluida en el principio de igualdad de trato.",
        "Solo si afecta exclusivamente a las mujeres."
    ],
    correcta: 1,

    explicacion: "El art. 3 menciona <strong>'especialmente'</strong> tres discriminaciones: maternidad, obligaciones familiares y estado civil. La palabra 'especialmente' indica que son ejemplos destacados, <strong>no las únicas</strong>. El principio de igualdad es más amplio."

},

{
    texto: "El art. 3 incluye la discriminación derivada 'del estado civil'. ¿Qué significa esta inclusión?",
    opciones: [
        "Que cualquier trato diferenciado por estar casado, soltero, divorciado, etc., puede constituir discriminación por razón de sexo si está relacionado con el sexo de la persona.",
        "Que está prohibido el matrimonio entre personas del mismo sexo.",
        "Que solo las personas casadas tienen derecho a la igualdad de trato."
    ],
    correcta: 0,

    explicacion: "El art. 3 incluye discriminación derivada <strong>'de la asunción de obligaciones familiares'</strong>: cuidado hijos, dependientes, mayores. Cualquier trato desfavorable por asumirlas vinculado al sexo es discriminación. Protege a mujeres y hombres."

},

// ===== BLOQUE 4: INTEGRACIÓN PRINCIPIO (ART. 4) - 4 preguntas =====

{
    texto: "Según el art. 4 de la LO 3/2007, ¿cómo debe integrarse el principio de igualdad de trato y de oportunidades en el ordenamiento jurídico?",
    opciones: [
        "Solo en la legislación específica sobre igualdad de género.",
        "Como principio informador del ordenamiento jurídico, que se integrará y observará en la interpretación y aplicación de las normas jurídicas.",
        "Exclusivamente en las normas de derecho laboral y de seguridad social."
    ],
    correcta: 1,

    explicacion: "El art. 3 incluye <strong>'el estado civil'</strong>: casado, soltero, divorciado, viudo, pareja de hecho. Cualquier trato diferenciado puede ser discriminación por razón de sexo <strong>si está relacionado con el sexo</strong> de la persona."

},

{
    texto: "El art. 4 establece que el principio de igualdad es un 'principio informador del ordenamiento jurídico'. ¿Qué implica ser un principio informador?",
    opciones: [
        "Que solo tiene valor declarativo sin efectos jurídicos.",
        "Que debe tenerse en cuenta en la interpretación y aplicación de todas las normas jurídicas.",
        "Que solo se aplica cuando no existe norma específica sobre la materia."
    ],
    correcta: 1,

    explicacion: "El art. 4 establece que es un <strong>'principio informador del ordenamiento jurídico'</strong> que <strong>'se integrará y observará en la interpretación y aplicación de las normas'</strong>. No es solo una norma más, sino un principio transversal que debe tenerse en cuenta en todo el derecho."

},

{
    texto: "Según el art. 4, el principio de igualdad 'se integrará y observará en la interpretación y aplicación de las normas jurídicas'. ¿A qué normas se refiere?",
    opciones: [
        "Solo a las normas de rango legal.",
        "A todas las normas jurídicas, sin distinción de rango o materia.",
        "Solo a las normas reglamentarias sobre igualdad."
    ],
    correcta: 1,

    explicacion: "Ser <strong>'principio informador'</strong> (art. 4) significa que tiene valor hermenéutico: debe tenerse en cuenta en la <strong>interpretación</strong> de todas las normas (sentido más conforme con igualdad) y en su <strong>aplicación</strong> a casos concretos. Tiene efectos jurídicos directos."

},

{
    texto: "El art. 4 menciona 'la interpretación y aplicación de las normas jurídicas'. ¿Qué diferencia existe entre interpretación y aplicación?",
    opciones: [
        "La interpretación determina el sentido de la norma; la aplicación la utiliza para resolver casos concretos. El principio de igualdad debe observarse en ambos momentos.",
        "No existe diferencia; son términos sinónimos.",
        "La interpretación es judicial; la aplicación es administrativa."
    ],
    correcta: 0,

    explicacion: "El art. 4 se refiere a <strong>'las normas jurídicas'</strong> sin distinción: todas las normas, de cualquier rango (leyes, reglamentos, convenios) y materia (civil, penal, laboral, administrativa). El principio tiene alcance transversal en todo el ordenamiento."

},

// ===== BLOQUE 5: IGUALDAD EN EMPLEO (ART. 5) - 6 preguntas =====

{
    texto: "El art. 5 de la LO 3/2007 regula la igualdad de trato y de oportunidades en el acceso al empleo. ¿En qué ámbitos específicos del empleo se garantiza este principio?",
    opciones: [
        "Solo en el acceso al empleo y en las condiciones salariales.",
        "En el acceso al empleo, en la formación y en la promoción profesionales, y en las condiciones de trabajo.",
        "Únicamente en la promoción profesional dentro de la empresa."
    ],
    correcta: 1,

    explicacion: "El art. 4 distingue <strong>'interpretación'</strong> (determinar sentido y alcance de la norma) y <strong>'aplicación'</strong> (utilizarla para resolver casos). El principio debe observarse en ambos: al interpretar (sentido favorable a igualdad) y al aplicar (aplicación no discriminatoria)."

},

{
    texto: "El art. 5 menciona cuatro ámbitos donde se garantiza la igualdad en el empleo. ¿Cuáles son?",
    opciones: [
        "Acceso, formación, promoción y condiciones de trabajo.",
        "Contratación, retribución, jornada y excedencias.",
        "Selección, evaluación, ascenso y despido."
    ],
    correcta: 0,

    explicacion: "El art. 5 garantiza igualdad en cuatro ámbitos del empleo: <strong>(1) acceso al empleo, (2) formación profesional, (3) promoción profesional, (4) condiciones de trabajo</strong>. Se aplica tanto en empleo privado como público, en los términos de la normativa aplicable."

},

{
    texto: "Según el art. 5 de la LO 3/2007, el principio de igualdad en el empleo se garantiza tanto en el ámbito del empleo privado como en el del empleo público. ¿Qué indica sobre la normativa aplicable?",
    opciones: [
        "Que se aplica el Estatuto de los Trabajadores a ambos ámbitos.",
        "Que se garantizará 'en los términos previstos en la normativa aplicable'.",
        "Que solo se aplica la LO 3/2007 sin necesidad de normativa adicional."
    ],
    correcta: 1,

    explicacion: "El art. 5 menciona cuatro ámbitos: <strong>acceso, formación, promoción y condiciones de trabajo</strong>. No se limita a contratación o retribución; abarca todo el ciclo profesional desde el acceso hasta las condiciones laborales."

},

{
    texto: "El art. 5 se refiere a 'la formación y en la promoción profesionales'. ¿Qué incluye el concepto de 'formación profesional'?",
    opciones: [
        "Solo la formación inicial antes de acceder al empleo.",
        "La formación continua y de actualización profesional durante la relación laboral.",
        "Únicamente los cursos de formación ocupacional para desempleados."
    ],
    correcta: 1,

    explicacion: "El art. 5 indica que se garantizará <strong>'en los términos previstos en la normativa aplicable'</strong>, remitiéndose a normativa específica: Estatuto de los Trabajadores (empleo privado), TREBEP (empleo público), normativa sectorial. La Ley establece el principio; la normativa específica lo desarrolla."

},

{
    texto: "Según el art. 5, ¿a qué se refiere 'las condiciones de trabajo'?",
    opciones: [
        "Solo las condiciones salariales.",
        "El conjunto de circunstancias en las que se presta el trabajo: retribución, jornada, descansos, seguridad y salud, y demás aspectos de la relación laboral.",
        "Únicamente las condiciones físicas del lugar de trabajo."
    ],
    correcta: 1,

    explicacion: "El art. 5 menciona <strong>'formación profesional'</strong>: tanto formación inicial (para acceso) como formación continua (actualización durante la relación laboral). Incluye cursos, reciclaje profesional, formación en el puesto, etc."

},

{
    texto: "El art. 5 garantiza la igualdad 'en el acceso al empleo'. ¿Qué incluye este concepto?",
    opciones: [
        "Solo los procesos de selección para el primer empleo.",
        "Todos los procesos de selección, contratación y acceso a puestos de trabajo, tanto en el sector privado como en el público.",
        "Únicamente las oposiciones y concursos del sector público."
    ],
    correcta: 1,

    explicacion: "El art. 5 se refiere a <strong>'las condiciones de trabajo'</strong>: conjunto de circunstancias en que se presta el trabajo (retribución, jornada, descansos, seguridad y salud, conciliación). Es un concepto amplio más allá del salario."

},

// ===== BLOQUE 6: DISCRIMINACIÓN DIRECTA/INDIRECTA (ART. 6) - 8 preguntas =====

{
    texto: "El art. 6.1 de la LO 3/2007 define la discriminación directa por razón de sexo. ¿En qué consiste?",
    opciones: [
        "Cualquier trato desfavorable a las mujeres relacionado con el embarazo o la maternidad.",
        "La situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable.",
        "La aplicación de una disposición aparentemente neutra que perjudica a un sexo más que al otro."
    ],
    correcta: 1,

    explicacion: "El art. 5 garantiza igualdad <strong>'en el acceso al empleo'</strong>: todos los procesos de selección, contratación y acceso a puestos, tanto en sector privado como público. Incluye ofertas de empleo, procesos selectivos, oposiciones, concursos, contratación directa."

},

{
    texto: "Según el art. 6.1, la discriminación directa se produce cuando se trata a una persona de manera menos favorable 'en atención a su sexo'. ¿Qué significa 'en atención a su sexo'?",
    opciones: [
        "Que el sexo debe ser el único motivo del trato diferenciado.",
        "Que el sexo es la razón, el motivo o la causa del trato menos favorable.",
        "Que debe existir intención discriminatoria por parte de quien discrimina."
    ],
    correcta: 1,

    explicacion: "El art. 6.1 define discriminación directa como <strong>'situación en que una persona sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable'</strong>. Elementos: trato menos favorable + por razón de sexo + situación comparable."

},

{
    texto: "El art. 6.1 incluye en la definición de discriminación directa a la persona 'que sea, haya sido o pudiera ser tratada' de manera menos favorable. ¿Qué implica esta triple referencia temporal?",
    opciones: [
        "Que solo se protege a quien actualmente está siendo discriminado.",
        "Que se protege tanto la discriminación presente, pasada o hipotética (potencial).",
        "Que solo se protege la discriminación futura si se demuestra mediante indicios."
    ],
    correcta: 1,

    explicacion: "El art. 6.1 indica <strong>'en atención a su sexo'</strong>: el sexo es la razón, motivo o causa del trato menos favorable. No requiere intención discriminatoria expresa; basta con que el sexo sea el factor determinante del trato diferenciado."

},

{
    texto: "Según el art. 6.1, la discriminación directa requiere comparar la situación con 'otra en situación comparable'. ¿Qué significa 'situación comparable'?",
    opciones: [
        "Una situación idéntica en todos sus aspectos.",
        "Una situación análoga o similar en sus elementos relevantes, que permita determinar si el trato diferenciado se debe al sexo.",
        "Solo se puede comparar dentro del mismo puesto de trabajo y empresa."
    ],
    correcta: 1,

    explicacion: "El art. 6.1 incluye <strong>'que sea, haya sido o pudiera ser tratada'</strong>: protege discriminación presente (está siendo), pasada (fue) o hipotética/potencial (podría ser). Triple referencia temporal para máxima protección."

},

{
    texto: "Según el art. 6.2 de la LO 3/2007, ¿qué es la discriminación indirecta por razón de sexo?",
    opciones: [
        "La situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular respecto del otro, salvo justificación objetiva.",
        "Cualquier comportamiento verbal o físico de naturaleza sexual que atenta contra la dignidad de una persona.",
        "El condicionamiento de un derecho a la aceptación de una conducta de contenido sexual."
    ],
    correcta: 0,

    explicacion: "El art. 6.1 requiere <strong>'situación comparable'</strong>: situación análoga o similar en elementos relevantes que permita comparar. No debe ser idéntica; basta con que sea comparable para determinar si el trato diferenciado se debe al sexo."

},

{
    texto: "El art. 6.2 se refiere a 'una disposición, criterio o práctica aparentemente neutros'. ¿Qué significa 'aparentemente neutros'?",
    opciones: [
        "Que mencionan explícitamente el sexo como criterio de distinción.",
        "Que no mencionan el sexo como criterio, son formalmente neutrales, pero producen un efecto discriminatorio.",
        "Que solo se aplican a un sexo determinado."
    ],
    correcta: 1,

    explicacion: "El art. 6.2 define discriminación indirecta: <strong>'disposición, criterio o práctica aparentemente neutros que pone a personas de un sexo en desventaja particular respecto del otro'</strong>, salvo justificación objetiva. Elementos: neutralidad aparente + efecto discriminatorio + falta de justificación."

},

{
    texto: "El art. 6.2 establece que una disposición aparentemente neutra puede constituir discriminación indirecta. ¿En qué casos NO se considerará discriminación indirecta?",
    opciones: [
        "Cuando la disposición favorezca a las mujeres en el acceso al empleo.",
        "Cuando dicha disposición, criterio o práctica puedan justificarse objetivamente en atención a una finalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados.",
        "Cuando se trate de medidas de acción positiva aprobadas por el Gobierno."
    ],
    correcta: 1,

    explicacion: "<strong>'Aparentemente neutros'</strong> (art. 6.2): no mencionan el sexo como criterio, son formalmente neutrales, pero producen un <strong>efecto discriminatorio</strong> real al perjudicar más a un sexo que al otro. La discriminación indirecta es por el efecto, no por la forma."

},

{
    texto: "Según el art. 6.2, para que una disposición aparentemente neutra no constituya discriminación indirecta debe cumplir tres requisitos. ¿Cuáles son?",
    opciones: [
        "Aprobación por ley, publicación oficial y entrada en vigor.",
        "Justificación objetiva, finalidad legítima, y medios necesarios y adecuados.",
        "Consulta previa, informe de impacto de género y aprobación del Consejo de Ministros."
    ],
    correcta: 1,

    explicacion: "El art. 6.2 establece que NO hay discriminación indirecta cuando <strong>'puedan justificarse objetivamente en atención a una finalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados'</strong>. Test triple: justificación objetiva + finalidad legítima + medios necesarios y adecuados."

},

// ===== BLOQUE 7: ACOSO SEXUAL Y POR RAZÓN DE SEXO (ART. 7) - 9 preguntas =====

{
    texto: "Según el art. 7.1 de la LO 3/2007, ¿qué se considera acoso sexual?",
    opciones: [
        "Cualquier comportamiento verbal o físico, de naturaleza sexual, que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo.",
        "Exclusivamente el contacto físico no deseado de naturaleza sexual.",
        "Cualquier comentario sobre la apariencia física de una persona en el ámbito laboral."
    ],
    correcta: 0,

    explicacion: "El art. 6.2 requiere tres requisitos para justificar una disposición neutra: <strong>(1) justificación objetiva, (2) finalidad legítima, (3) medios necesarios y adecuados</strong>. Los tres deben concurrir. Es el <strong>test de proporcionalidad</strong> aplicado a discriminación indirecta."

},

{
    texto: "El art. 7.1 define el acoso sexual como 'cualquier comportamiento, verbal o físico, de naturaleza sexual'. ¿Qué tipos de comportamiento incluye?",
    opciones: [
        "Solo los comportamientos físicos.",
        "Tanto comportamientos verbales como físicos.",
        "Únicamente los comportamientos que impliquen contacto físico."
    ],
    correcta: 1,

    explicacion: "El art. 7.1 define acoso sexual: <strong>'cualquier comportamiento, verbal o físico, de naturaleza sexual, que tenga el propósito o produzca el efecto de atentar contra la dignidad, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo'</strong>. Elementos: naturaleza sexual + propósito o efecto + atentado dignidad."

},

{
    texto: "Según el art. 7.1, el acoso sexual puede tener 'el propósito o produzca el efecto' de atentar contra la dignidad. ¿Qué implica esta disyuntiva?",
    opciones: [
        "Que es necesario demostrar la intención del acosador.",
        "Que basta con que se produzca el efecto, aunque no haya intención, o con que exista el propósito, aunque no se logre el efecto.",
        "Que se requiere tanto el propósito como el efecto simultáneamente."
    ],
    correcta: 1,

    explicacion: "El art. 7.1 incluye <strong>'comportamiento, verbal o físico'</strong>: tanto palabras (comentarios, insinuaciones, chistes, propuestas) como actos físicos (gestos, contactos, exhibicionismo). No se limita a contacto físico; los comentarios verbales también pueden constituir acoso sexual."

},

{
    texto: "El art. 7.1 menciona 'en particular cuando se crea un entorno intimidatorio, degradante u ofensivo'. ¿Qué significa 'en particular'?",
    opciones: [
        "Que solo hay acoso sexual si se crea ese entorno.",
        "Que la creación de ese entorno es un ejemplo especialmente grave de acoso sexual, pero no el único.",
        "Que se requiere siempre la creación de un entorno laboral hostil."
    ],
    correcta: 1,

    explicacion: "El art. 7.1 establece <strong>'que tenga el propósito o produzca el efecto'</strong>: disyuntiva alternativa. Basta con que (a) exista el propósito aunque no se logre el efecto, o (b) se produzca el efecto aunque no haya intención. No se requieren ambos simultáneamente."

},

{
    texto: "El art. 7.2 de la LO 3/2007 define el acoso por razón de sexo. ¿En qué se diferencia del acoso sexual?",
    opciones: [
        "El acoso por razón de sexo no tiene naturaleza sexual, pero se realiza en función del sexo de una persona con el propósito o efecto de atentar contra su dignidad.",
        "El acoso por razón de sexo solo puede producirse en el ámbito laboral.",
        "No existe diferencia; ambos términos son sinónimos en la Ley."
    ],
    correcta: 0,

    explicacion: "El art. 7.1 menciona <strong>'en particular cuando se crea un entorno intimidatorio, degradante u ofensivo'</strong>. 'En particular' indica que es un ejemplo especialmente grave, pero <strong>no el único</strong>. Puede haber acoso sexual sin crear ese entorno (ej: proposición única grave)."

},

{
    texto: "Según el art. 7.2, el acoso por razón de sexo es 'cualquier comportamiento realizado en función del sexo de una persona'. ¿Qué significa 'en función del sexo'?",
    opciones: [
        "Que el comportamiento tiene naturaleza o connotación sexual.",
        "Que el comportamiento se dirige a la persona por su condición de mujer o de hombre, aunque no tenga naturaleza sexual.",
        "Que solo puede dirigirse contra las mujeres."
    ],
    correcta: 1,

    explicacion: "El art. 7.2 define acoso por razón de sexo: <strong>'comportamiento realizado en función del sexo de una persona, con el propósito o efecto de atentar contra su dignidad'</strong>. Diferencia con acoso sexual: <strong>no tiene naturaleza sexual</strong>, pero se realiza por la condición de mujer u hombre."

},

{
    texto: "Según el art. 7.3 de la LO 3/2007, ¿cómo se consideran el acoso sexual y el acoso por razón de sexo?",
    opciones: [
        "Como conductas sancionables solo en el ámbito laboral.",
        "Como discriminatorios en todo caso.",
        "Como discriminatorios solo cuando se produzcan en el ámbito del empleo público."
    ],
    correcta: 1,

    explicacion: "El art. 7.2 indica <strong>'realizado en función del sexo'</strong>: el comportamiento se dirige a la persona por su condición de mujer o de hombre, aunque <strong>no tenga contenido o connotación sexual</strong>. Ejemplo: comentarios despectivos a una mujer por ser mujer (sin contenido sexual) = acoso por razón de sexo."

},

{
    texto: "El art. 7.3 establece que el acoso sexual y el acoso por razón de sexo 'se considerarán en todo caso discriminatorios'. ¿Qué significa 'en todo caso'?",
    opciones: [
        "Que solo se consideran discriminatorios si se producen en el ámbito laboral.",
        "Que siempre constituyen discriminación por razón de sexo, sin excepciones.",
        "Que se consideran discriminatorios salvo que estén justificados."
    ],
    correcta: 1,

    explicacion: "El art. 7.3 establece que acoso sexual y acoso por razón de sexo <strong>'se considerarán en todo caso discriminatorios'</strong>. 'En todo caso' significa <strong>siempre, sin excepciones</strong>. Son automáticamente discriminación por razón de sexo, sin necesidad de prueba adicional."

},

{
    texto: "El art. 7.4 establece que el condicionamiento de un derecho o de una expectativa de derecho a la aceptación de una situación de acoso sexual o de acoso por razón de sexo:",
    opciones: [
        "Se considerará sancionable solo si existe reiteración de la conducta.",
        "Se considerará también acto de discriminación por razón de sexo.",
        "Solo se considerará discriminación si la víctima presenta denuncia formal."
    ],
    correcta: 1,

    explicacion: "El art. 7.4 establece que condicionar un derecho a la aceptación de acoso sexual/por razón de sexo <strong>'se considerará también acto de discriminación'</strong>. 'También' significa que el acoso ya es discriminatorio (art. 7.3), y <strong>además</strong> condicionar un derecho a su aceptación es otra forma agravada de discriminación."

},

// ===== BLOQUE 8: DISCRIMINACIÓN EMBARAZO/INDEMNIDAD (ARTS. 8-9) - 4 preguntas =====

{
    texto: "Según el art. 8 de la LO 3/2007, ¿cómo se califica todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad?",
    opciones: [
        "Como discriminación laboral que requiere demostración de perjuicio económico.",
        "Como discriminación directa por razón de sexo.",
        "Como conducta sancionable solo en el ámbito del empleo público."
    ],
    correcta: 1,

    explicacion: "El art. 7.4 protege tanto derechos actuales como <strong>expectativas de derecho</strong> (derechos futuros no consolidados). Ejemplo: condicionar una promoción futura (expectativa) a aceptar acoso = discriminación. Protección amplia: derechos presentes y futuros."

},

{
    texto: "El art. 8 se refiere a 'todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad'. ¿Qué significa 'todo trato desfavorable'?",
    opciones: [
        "Solo los despidos durante el embarazo.",
        "Cualquier trato perjudicial, peyorativo o que suponga una desventaja para la mujer por estar embarazada o ser madre.",
        "Únicamente la negativa a conceder permisos por maternidad."
    ],
    correcta: 1,

    explicacion: "El art. 8 establece que <strong>'todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad'</strong> constituye <strong>discriminación directa por razón de sexo</strong>. No requiere prueba adicional; la relación con embarazo/maternidad lo convierte automáticamente en discriminación directa."

},

{
    texto: "El art. 9 de la LO 3/2007 regula la indemnidad frente a represalias. ¿Qué protege este artículo?",
    opciones: [
        "Protege frente a cualquier trato adverso como consecuencia de la presentación de quejas, reclamaciones, denuncias o recursos destinados a impedir la discriminación y exigir el cumplimiento del principio de igualdad.",
        "Solo protege a las personas que hayan obtenido sentencia judicial favorable en casos de discriminación.",
        "Únicamente protege a las trabajadoras del sector público frente a sanciones disciplinarias."
    ],
    correcta: 0,

    explicacion: "<strong>'Todo trato desfavorable'</strong> (art. 8): cualquier trato perjudicial, peyorativo o desventajoso para la mujer por estar embarazada o ser madre. Incluye: despidos, no renovaciones, cambio condiciones, negativa promoción, asignación tareas perjudiciales, etc."

},

{
    texto: "Según el art. 9, la protección frente a represalias incluye 'la presentación de quejas, reclamaciones, denuncias, demandas o recursos'. ¿Qué actos protege específicamente?",
    opciones: [
        "Solo las denuncias judiciales formales.",
        "Cualquier tipo de reclamación, queja o recurso, judicial o administrativo, destinado a impedir la discriminación.",
        "Únicamente las demandas que hayan obtenido sentencia favorable."
    ],
    correcta: 1,

    explicacion: "El art. 9 protege <strong>'frente a cualquier trato adverso o efecto negativo'</strong> como consecuencia de <strong>'presentación de quejas, reclamaciones, denuncias, demandas o recursos'</strong> destinados a impedir discriminación. Protege el ejercicio de derechos sin sufrir represalias."

},

// ===== BLOQUE 9: CONSECUENCIAS Y ACCIONES POSITIVAS (ARTS. 10-11) - 8 preguntas =====

{
    texto: "Según el art. 10 de la LO 3/2007, ¿qué efectos tienen los actos y cláusulas de negocios jurídicos que constituyan o causen discriminación por razón de sexo?",
    opciones: [
        "Se consideran anulables y requieren demanda judicial para su nulidad.",
        "Se considerarán nulos y sin efecto.",
        "Son válidos salvo que la persona discriminada presente recurso administrativo."
    ],
    correcta: 1,

    explicacion: "El art. 9 protege frente a <strong>'cualquier trato adverso'</strong>: no solo despidos, también cambios de funciones, asignación tareas desagradables, exclusión de formación, traslados, mobbing laboral. Cualquier represalia por haber ejercitado derechos antidiscriminatorios está prohibida."

},

{
    texto: "El art. 10 establece que los actos discriminatorios 'se considerarán nulos y sin efecto'. ¿Qué tipo de nulidad es?",
    opciones: [
        "Nulidad relativa que requiere declaración judicial.",
        "Nulidad absoluta o de pleno derecho, que opera automáticamente.",
        "Anulabilidad que prescribe a los seis meses."
    ],
    correcta: 1,

    explicacion: "El art. 10 establece que actos discriminatorios <strong>'se considerarán nulos y sin efecto'</strong>. Es <strong>nulidad de pleno derecho</strong> (automática, radical, absoluta), no anulabilidad. Opera desde el origen con independencia del tiempo transcurrido; no requiere declaración judicial previa."

},

{
    texto: "El art. 10 establece que los actos discriminatorios darán lugar a responsabilidad. ¿Qué tipo de responsabilidad se menciona?",
    opciones: [
        "Solo responsabilidad civil por daños y perjuicios.",
        "Responsabilidad a través de un sistema de reparaciones o indemnizaciones que sean reales, efectivas y proporcionadas al perjuicio sufrido.",
        "Únicamente responsabilidad penal en casos de discriminación grave."
    ],
    correcta: 1,

    explicacion: "<strong>'Nulos y sin efecto'</strong> (art. 10): nulidad de pleno derecho que opera automáticamente. La cláusula o acto discriminatorio es nulo <strong>desde su origen</strong>, con independencia del tiempo transcurrido. No hay plazo de prescripción para alegar la nulidad; es perpetua."

},

{
    texto: "Según el art. 10, las reparaciones o indemnizaciones deben ser 'reales, efectivas y proporcionadas al perjuicio sufrido'. ¿Qué significa esta triple caracterización?",
    opciones: [
        "Que las indemnizaciones deben fijarse en una cantidad simbólica.",
        "Que deben resarcir realmente el daño (reales), conseguir la reparación (efectivas) y guardar relación con el perjuicio (proporcionadas).",
        "Que solo se indemnizan los daños materiales, no los morales."
    ],
    correcta: 1,

    explicacion: "El art. 10 establece responsabilidad mediante <strong>'reparaciones o indemnizaciones que sean reales, efectivas y proporcionadas al perjuicio sufrido'</strong>. Triple caracterización: (1) reales (resarcir realmente), (2) efectivas (conseguir reparación), (3) proporcionadas (relación con perjuicio)."

},

{
    texto: "Según el art. 10, además de la responsabilidad civil, ¿qué otras vías de responsabilidad contempla la Ley para conductas discriminatorias?",
    opciones: [
        "Solo la vía penal.",
        "En su caso, a través de un sistema eficaz y disuasorio de sanciones que prevenga la realización de conductas discriminatorias.",
        "Únicamente sanciones administrativas en el ámbito laboral."
    ],
    correcta: 1,

    explicacion: "El art. 10 requiere que indemnizaciones sean <strong>'proporcionadas al perjuicio sufrido'</strong>: deben guardar relación con el <strong>perjuicio total</strong>, incluyendo tanto daño económico como daño moral. No pueden ser simbólicas; deben resarcir real y efectivamente todo el perjuicio."

},

{
    texto: "El art. 11 de la LO 3/2007 regula las acciones positivas. ¿Qué finalidad tienen estas medidas?",
    opciones: [
        "Imponer cuotas obligatorias del 50% en todos los ámbitos públicos y privados.",
        "Corregir situaciones patentes de desigualdad de hecho respecto de los hombres, adoptándose medidas específicas en favor de las mujeres.",
        "Sustituir el criterio de mérito y capacidad por criterios de género en el acceso al empleo."
    ],
    correcta: 1,

    explicacion: "El art. 10 contempla <strong>'en su caso, sistema eficaz y disuasorio de sanciones'</strong>: además de responsabilidad civil (indemnizaciones), puede haber sanciones administrativas, disciplinarias o penales. Sistema disuasorio: suficientemente grave para prevenir futuras discriminaciones."

},

{
    texto: "Según el art. 11, las acciones positivas deben cumplir ciertos requisitos. ¿Cuáles son?",
    opciones: [
        "Deben ser permanentes y aplicarse a todos los ámbitos sin excepción.",
        "Tales medidas, que serán aplicables en tanto subsistan dichas situaciones, habrán de ser razonables y proporcionadas en relación con el objetivo perseguido en cada caso.",
        "Deben establecerse mediante ley orgánica y solo en el ámbito del empleo público."
    ],
    correcta: 1,

    explicacion: "El art. 11 define acciones positivas: <strong>medidas específicas en favor de las mujeres para corregir situaciones patentes de desigualdad de hecho respecto de los hombres</strong>. Finalidad: corregir desigualdades materiales persistentes mediante medidas temporales y proporcionadas."

},

{
    texto: "El art. 11 establece que las acciones positivas pueden ser adoptadas por determinados sujetos. ¿Quiénes pueden adoptarlas?",
    opciones: [
        "Únicamente los Poderes Públicos.",
        "Los Poderes Públicos adoptarán medidas específicas; también las personas físicas y jurídicas privadas podrán adoptarlas en los términos establecidos en la Ley Orgánica 3/2007.",
        "Solo las empresas privadas con más de 250 trabajadores."
    ],
    correcta: 1,

    explicacion: "El art. 11 exige que acciones positivas sean <strong>'razonables y proporcionadas en relación con el objetivo perseguido'</strong> y <strong>'aplicables en tanto subsistan dichas situaciones'</strong>. Dos límites: (1) proporcionalidad (razonables y proporcionadas), (2) temporalidad (mientras subsistan desigualdades)."

},

// ===== BLOQUE 10: TUTELA JUDICIAL (ART. 12) - 6 preguntas =====

{
    texto: "Según el art. 12.1 de la LO 3/2007, ¿qué derecho se reconoce a cualquier persona que considere vulnerado su derecho a la igualdad?",
    opciones: [
        "El derecho a presentar denuncia penal obligatoriamente.",
        "Podrá recabar de los tribunales la tutela del derecho a la igualdad entre mujeres y hombres, de acuerdo con lo establecido en el artículo 53.2 de la Constitución.",
        "El derecho a solicitar una indemnización económica directamente a la Administración."
    ],
    correcta: 1,

    explicacion: "El art. 11 permite que acciones positivas sean adoptadas por <strong>Poderes Públicos</strong> (obligatoriamente) y también por <strong>personas físicas y jurídicas privadas</strong> (facultativamente). Empresas privadas, asociaciones, fundaciones pueden adoptar acciones positivas en los términos de la Ley."

},

{
    texto: "El art. 12.1 establece que la tutela judicial del derecho a la igualdad se ejercerá de acuerdo con el art. 53.2 de la Constitución. ¿Qué implica esta referencia?",
    opciones: [
        "Que solo se puede reclamar mediante recurso de amparo ante el Tribunal Constitucional.",
        "Que se puede recabar la tutela incluso tras la terminación de la relación en la que supuestamente se ha producido la discriminación.",
        "Que solo se puede reclamar en el ámbito laboral y no en otros ámbitos."
    ],
    correcta: 1,

    explicacion: "El art. 12.1 reconoce derecho a <strong>'recabar de los tribunales la tutela del derecho a la igualdad, de acuerdo con lo establecido en el artículo 53.2 de la Constitución'</strong>. Referencia al art. 53.2 CE: tutela judicial efectiva mediante procedimiento basado en principios de preferencia y sumariedad."

},

{
    texto: "El art. 12.1 indica que la tutela judicial puede recabarse 'incluso tras la terminación de la relación en la que supuestamente se ha producido la discriminación'. ¿Qué significa esto?",
    opciones: [
        "Que solo se puede reclamar si la relación laboral o contractual ha finalizado.",
        "Que la extinción de la relación laboral, mercantil, administrativa o de otro tipo no impide ejercitar la acción judicial.",
        "Que se debe esperar a que finalice la relación para poder reclamar."
    ],
    correcta: 1,

    explicacion: "El art. 12.1 permite recabar tutela <strong>'incluso tras la terminación de la relación en que supuestamente se ha producido la discriminación'</strong>. Finalidad: evitar que cese de relación (laboral, mercantil, etc.) impida ejercitar el derecho. La acción sobrevive a la relación."

},

{
    texto: "Según el art. 12.2, ¿quiénes tienen capacidad y legitimación para intervenir en procesos sobre defensa del derecho a la igualdad?",
    opciones: [
        "Solo la persona discriminada.",
        "Las personas físicas y jurídicas con interés legítimo, determinadas en las Leyes reguladoras de estos procesos.",
        "Únicamente el Ministerio Fiscal y las asociaciones de mujeres inscritas."
    ],
    correcta: 1,

    explicacion: "El art. 12.2 establece que tienen capacidad y legitimación <strong>'las personas físicas y jurídicas con interés legítimo, determinadas en las Leyes reguladoras de estos procesos'</strong>. No solo la víctima directa; también asociaciones, sindicatos, entidades con interés legítimo según leyes procesales."

},

{
    texto: "El art. 12.3 establece una regla específica sobre la legitimación en litigios de acoso sexual o acoso por razón de sexo. ¿Cuál es?",
    opciones: [
        "Solo puede litigar la víctima directa del acoso.",
        "La persona acosada será la única legitimada en los litigios sobre acoso sexual y acoso por razón de sexo.",
        "Pueden litigar tanto la víctima como las organizaciones sindicales sin necesidad de autorización."
    ],
    correcta: 1,

    explicacion: "El art. 12.3 establece regla especial para acoso sexual/por razón de sexo: <strong>'la persona acosada será la única legitimada'</strong>. Legitimación exclusiva: solo la víctima puede litigar. Excluye legitimación de sindicatos, asociaciones. Razón: derechos personalísimos (dignidad, intimidad)."

},

{
    texto: "Según el art. 12.3, ¿por qué la persona acosada es la única legitimada en litigios de acoso sexual?",
    opciones: [
        "Porque el acoso sexual afecta a la dignidad y la intimidad personal, que solo la persona afectada puede defender.",
        "Porque así lo establece el Código Penal para todos los delitos.",
        "Porque las organizaciones sindicales carecen de capacidad procesal en estos casos."
    ],
    correcta: 0,

    explicacion: "El art. 12.3 atribuye <strong>legitimación exclusiva</strong> a la persona acosada, excluyendo expresamente legitimación sindical o de asociaciones en casos de acoso sexual/por razón de sexo. Diferencia con otras discriminaciones (art. 12.2) donde sí hay legitimación amplia."

},

// ===== BLOQUE 11: PRUEBA (ART. 13) - 5 preguntas =====

{
    texto: "Según el art. 13 de la LO 3/2007, ¿cómo se distribuye la carga de la prueba en procesos donde se aleguen discriminaciones por razón de sexo?",
    opciones: [
        "La persona demandante debe probar todos los elementos de la discriminación.",
        "De acuerdo con las Leyes procesales, en aquellos procedimientos en que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias, corresponderá a la persona demandada probar la ausencia de discriminación en las medidas adoptadas y su proporcionalidad.",
        "El Ministerio Fiscal debe aportar todas las pruebas en estos procedimientos."
    ],
    correcta: 1,

    explicacion: "El art. 12.3 establece legitimación exclusiva porque acoso sexual/por razón de sexo afectan a <strong>derechos personalísimos</strong> (dignidad, intimidad, integridad moral). Solo la persona afectada puede decidir si ejercita o no la acción, protegiendo su esfera más íntima."

},

{
    texto: "El art. 13 establece una regla especial de distribución de la prueba. ¿En qué momento procesal opera esta regla?",
    opciones: [
        "Desde la presentación de la demanda.",
        "Cuando la parte actora alegue discriminación y aporte indicios racionales de su existencia.",
        "Solo tras la sentencia, para el recurso de apelación."
    ],
    correcta: 1,

    explicacion: "El art. 13 establece <strong>inversión de la carga de la prueba</strong>: cuando alegaciones se fundamenten en actuaciones discriminatorias, <strong>corresponderá a la persona demandada probar ausencia de discriminación y proporcionalidad</strong> de las medidas adoptadas. Traslada carga probatoria al demandado."

},

{
    texto: "El art. 13 sobre la carga de la prueba establece una regla especial para el demandado. ¿Qué debe probar la persona demandada?",
    opciones: [
        "Que la persona demandante actuó de mala fe al presentar la demanda.",
        "La ausencia de discriminación en las medidas adoptadas y su proporcionalidad.",
        "Que cumplió estrictamente con todos los requisitos legales de igualdad en su organización."
    ],
    correcta: 1,

    explicacion: "El art. 13 opera cuando existen <strong>indicios fundados</strong> de discriminación aportados por la parte actora. Entonces la carga se invierte: el demandado debe probar (1) <strong>ausencia de discriminación</strong> y (2) <strong>proporcionalidad</strong> de las medidas. Doble carga probatoria para el demandado."

},

{
    texto: "Según el art. 13, la regla especial de distribución de la prueba ¿se aplica a los procesos penales?",
    opciones: [
        "Sí, se aplica a todos los procesos sin excepción.",
        "No, lo establecido en el apartado anterior no será de aplicación a los procesos penales.",
        "Se aplica solo cuando el proceso penal deriva de una discriminación laboral."
    ],
    correcta: 1,

    explicacion: "El art. 13 exige que demandado pruebe <strong>'ausencia de discriminación en las medidas adoptadas y su proporcionalidad'</strong>. Dos elementos: (1) que no hubo discriminación (motivación objetiva), (2) que la medida fue proporcionada (adecuada, necesaria, equilibrada)."

},

{
    texto: "El art. 13 excluye los procesos penales de la regla especial de prueba. ¿Por qué establece esta exclusión?",
    opciones: [
        "Porque en los procesos penales se aplica la presunción de inocencia del acusado, que rige con carácter absoluto.",
        "Porque en los procesos penales no puede existir discriminación por razón de sexo.",
        "Porque los jueces penales tienen libertad absoluta para valorar la prueba."
    ],
    correcta: 0,

    explicacion: "El art. 13 establece que <strong>'lo establecido en el apartado anterior no será de aplicación a los procesos penales'</strong>. Exclusión expresa de procesos penales. Razón: <strong>presunción de inocencia</strong> (art. 24.2 CE) rige con carácter absoluto en procesos penales; no admite inversión carga probatoria."

},

// ===== BLOQUE 12: PLAN IGUALDAD AYTO - APROBACIÓN Y NORMATIVA - 6 preguntas =====

{
    texto: "El III Plan de Igualdad entre mujeres y hombres del Ayuntamiento de Madrid y sus organismos autónomos fue aprobado por:",
    opciones: [
        "Acuerdo de la Mesa General de Negociación de 12 de diciembre de 2023.",
        "Acuerdo de 28 de diciembre de 2023 de la Junta de Gobierno de la Ciudad de Madrid.",
        "Pleno del Ayuntamiento de Madrid de 11 de enero de 2024."
    ],
    correcta: 1,

    explicacion: "El art. 13 excluye procesos penales porque en ellos se aplica <strong>presunción de inocencia</strong> del art. 24.2 CE: la acusación debe probar los hechos constitutivos del delito. Invertir la carga probatoria vulneraría este derecho fundamental del acusado."

},

{
    texto: "El III Plan de Igualdad del Ayuntamiento de Madrid fue publicado en el BOAM:",
    opciones: [
        "El 28 de diciembre de 2023.",
        "El 4 de noviembre de 2021.",
        "El 11 de enero de 2024."
    ],
    correcta: 2,

    explicacion: "El III Plan fue aprobado por <strong>Acuerdo de la Junta de Gobierno de la Ciudad de Madrid de 28 de diciembre de 2023</strong>. Órgano competente: Junta de Gobierno (órgano colegiado ejecutivo del Ayuntamiento). Fecha exacta: 28/12/2023."

},

{
    texto: "Antes de su aprobación por la Junta de Gobierno, el III Plan fue aprobado en la Comisión de Igualdad. ¿En qué fecha?",
    opciones: [
        "12 de diciembre de 2023.",
        "28 de diciembre de 2023.",
        "11 de enero de 2024."
    ],
    correcta: 0,

    explicacion: "El III Plan fue publicado en el <strong>BOAM (Boletín Oficial del Ayuntamiento de Madrid) núm. 9.547, de 11 de enero de 2024</strong>. La publicación es requisito de eficacia; entra en vigor tras publicación en BOAM."

},

{
    texto: "¿Qué normativa establece la obligación de las Administraciones públicas de aprobar, al inicio de cada legislatura, un Plan para la Igualdad?",
    opciones: [
        "La Ley Orgánica 3/2007, en su Título V.",
        "El texto refundido de la Ley del Estatuto Básico del Empleado Público (TREBEP), en su disposición adicional séptima, tras la modificación de la Ley 31/2022.",
        "El Real Decreto 901/2020, de 13 de octubre."
    ],
    correcta: 1,

    explicacion: "Antes de aprobación por Junta de Gobierno, el III Plan fue aprobado por la <strong>Comisión de Igualdad el 12 de diciembre de 2023</strong>. Proceso: (1) Comisión de Igualdad aprueba (12/12/2023), (2) Junta de Gobierno aprueba (28/12/2023), (3) publicación BOAM (11/01/2024)."

},

{
    texto: "¿Qué ley modificó el TREBEP estableciendo la obligación de aprobar planes de igualdad al inicio de cada legislatura?",
    opciones: [
        "La Ley Orgánica 3/2007.",
        "La Ley 31/2022, de 23 de diciembre de Presupuestos Generales del Estado para el año 2023.",
        "El Real Decreto Legislativo 5/2015."
    ],
    correcta: 1,

    explicacion: "La obligación de aprobar Planes de Igualdad deriva del <strong>texto refundido del TREBEP, disposición adicional séptima, tras modificación por Ley 31/2022 de Presupuestos Generales del Estado</strong>. Esta reforma obligó a todas las Administraciones a aprobar Plan al inicio de cada legislatura."

},

{
    texto: "El II Plan de Igualdad del Ayuntamiento de Madrid tenía una vigencia de 3 años (2022-2024). ¿Por qué se aprobó el III Plan antes de finalizar esa vigencia?",
    opciones: [
        "Porque el II Plan había cumplido todos sus objetivos anticipadamente.",
        "Porque la modificación del TREBEP obligaba a aprobar un nuevo Plan tras las elecciones municipales de mayo de 2023.",
        "Porque así lo acordaron los sindicatos en la Mesa General de Negociación."
    ],
    correcta: 1,

    explicacion: "La Ley 31/2022 (Presupuestos Generales 2023) modificó el TREBEP estableciendo obligación de <strong>aprobar Plan de Igualdad al inicio de cada legislatura</strong>. Por eso tras elecciones municipales mayo 2023, el Ayuntamiento aprobó el III Plan en diciembre 2023."

},

// ===== BLOQUE 13: PLAN IGUALDAD - ÁMBITOS PERSONAL, TERRITORIAL, TEMPORAL - 7 preguntas =====

{
    texto: "Según el III Plan de Igualdad del Ayuntamiento de Madrid, ¿cuál es el ámbito personal del Plan?",
    opciones: [
        "Solo el personal funcionario de carrera del Ayuntamiento de Madrid.",
        "La totalidad del personal que tenga una relación contractual laboral y/o estatutaria con el Ayuntamiento de Madrid y sus organismos autónomos.",
        "Únicamente el personal laboral fijo del Ayuntamiento y sus organismos autónomos."
    ],
    correcta: 1,

    explicacion: "Aunque el II Plan tenía vigencia 2022-2024, la modificación del TREBEP por Ley 31/2022 obligó a aprobar nuevo Plan tras las <strong>elecciones municipales de mayo de 2023</strong> (inicio nueva legislatura). Por eso se aprobó el III Plan en diciembre 2023 antes de finalizar II Plan."

},

{
    texto: "El ámbito personal del III Plan incluye al personal con relación 'laboral y/o estatutaria'. ¿Qué significa relación estatutaria?",
    opciones: [
        "El personal vinculado por contrato laboral regulado por el Estatuto de los Trabajadores.",
        "El personal funcionario, cuya relación se rige por el Estatuto Básico del Empleado Público.",
        "Solo el personal eventual y de confianza."
    ],
    correcta: 1,

    explicacion: "El ámbito personal del III Plan es <strong>'la totalidad del personal que tenga una relación contractual laboral y/o estatutaria con el Ayuntamiento de Madrid y sus organismos autónomos'</strong>. Incluye: funcionarios (relación estatutaria) y laborales (relación contractual), fijos y temporales."

},

{
    texto: "El ámbito personal del III Plan se refiere a 'la totalidad del personal'. ¿Qué implica el término 'totalidad'?",
    opciones: [
        "Solo el personal de plantilla, excluyendo al personal interino o temporal.",
        "Todo el personal sin excepción, sea funcionario, laboral, fijo, temporal, interino, etc.",
        "Únicamente el personal a tiempo completo."
    ],
    correcta: 1,

    explicacion: "<strong>Relación estatutaria</strong>: personal funcionario, cuya relación se rige por Estatuto Básico del Empleado Público (TREBEP) y normativa funcionarial. <strong>Relación laboral</strong>: personal laboral, cuya relación se rige por Estatuto de los Trabajadores y convenios colectivos."

},

{
    texto: "El ámbito territorial del III Plan de Igualdad del Ayuntamiento de Madrid se extiende a:",
    opciones: [
        "Solo los centros de trabajo ubicados en el término municipal de Madrid.",
        "Todos los centros de trabajo del Ayuntamiento de Madrid y sus organismos autónomos.",
        "Únicamente las sedes centrales de cada Área de Gobierno y organismos autónomos."
    ],
    correcta: 1,

    explicacion: "'<strong>Totalidad del personal</strong>' significa: sin excepciones, todo el personal sin distinción de: tipo de relación (funcionario/laboral), duración (fijo/temporal/interino), jornada (completa/parcial), nivel (directivo/técnico/auxiliar). Ámbito personal universal dentro del Ayuntamiento y OO.AA."

},

{
    texto: "Según el III Plan de Igualdad, ¿cuál es el periodo de vigencia del Plan?",
    opciones: [
        "Tres años desde su aprobación.",
        "Cuatro años, salvo que la legislatura de la actual Corporación finalice con anterioridad a dicho periodo.",
        "Indefinida, hasta que se apruebe un nuevo plan."
    ],
    correcta: 1,

    explicacion: "El ámbito territorial es <strong>'todos los centros de trabajo del Ayuntamiento de Madrid y sus organismos autónomos'</strong>. Sin limitación geográfica dentro del término municipal ni fuera (ej: centros fuera Madrid). Todos los centros donde preste servicios el personal."

},

{
    texto: "El III Plan establece que su vigencia es de cuatro años 'salvo que la legislatura de la actual Corporación finalice con anterioridad'. ¿Qué significa esta salvedad?",
    opciones: [
        "Que el Plan puede prorrogarse automáticamente más allá de cuatro años.",
        "Que si la legislatura finaliza antes de cuatro años (por ejemplo, a los tres años), el Plan finalizaría también, debiéndose aprobar uno nuevo al inicio de la siguiente legislatura.",
        "Que el Plan solo es válido durante la legislatura actual y debe renovarse cada año."
    ],
    correcta: 1,

    explicacion: "El ámbito temporal es <strong>'cuatro años, salvo que la legislatura de la actual Corporación finalice con anterioridad a dicho periodo'</strong>. Si legislatura dura menos de 4 años, el Plan finaliza al acabar legislatura (nuevo Plan en siguiente legislatura)."

},

{
    texto: "Según el III Plan, su vigencia está vinculada a la legislatura de la Corporación Municipal. ¿Qué Corporación Municipal aprobó este III Plan?",
    opciones: [
        "La surgida de las elecciones municipales de mayo de 2019.",
        "La surgida de las elecciones municipales de mayo de 2023.",
        "La surgida de las elecciones municipales de mayo de 2027."
    ],
    correcta: 1,

    explicacion: "Vigencia vinculada a legislatura: si legislatura finaliza antes de 4 años, el Plan acaba (debe aprobarse nuevo Plan inicio siguiente legislatura). Ejemplo: legislatura junio 2023 - mayo 2027; Plan aprobado diciembre 2023 acabaría mayo 2027 (3 años y medio), no diciembre 2027."

},

// ===== BLOQUE 14: PLAN IGUALDAD - COMISIÓN DE IGUALDAD - 7 preguntas =====

{
    texto: "El III Plan de Igualdad del Ayuntamiento de Madrid se elaboró y negoció en el seno de:",
    opciones: [
        "La Mesa General de Negociación del Ayuntamiento de Madrid.",
        "La Comisión de Igualdad del Ayuntamiento de Madrid y sus organismos autónomos.",
        "El Pleno del Ayuntamiento de Madrid."
    ],
    correcta: 1,

    explicacion: "La legislatura actual surgió de <strong>elecciones municipales de mayo de 2023</strong> y finalizará en mayo 2027 (4 años). El III Plan, aprobado diciembre 2023, tendría vigencia hasta mayo 2027 (fin legislatura), no hasta diciembre 2027."

},

{
    texto: "Según el Reglamento interno de funcionamiento de la Comisión de Igualdad, aprobado el 30 de marzo de 2021, ¿quién preside la Comisión?",
    opciones: [
        "El Alcalde de Madrid o persona en quien delegue.",
        "La persona titular de la Dirección General de Función Pública.",
        "Un representante electo de las organizaciones sindicales."
    ],
    correcta: 1,

    explicacion: "El III Plan se elaboró y negoció en el seno de la <strong>Comisión de Igualdad del Ayuntamiento de Madrid y sus organismos autónomos</strong>. Órgano negociador paritario donde se alcanzaron los acuerdos que conforman el Plan."

},

{
    texto: "La Comisión de Igualdad del Ayuntamiento de Madrid tiene carácter:",
    opciones: [
        "Consultivo, sin capacidad decisoria.",
        "Paritario.",
        "Exclusivamente técnico, formado solo por personal funcionario."
    ],
    correcta: 1,

    explicacion: "Según Reglamento interno (30 marzo 2021), la Comisión está presidida por <strong>'la persona titular de la Dirección General de Función Pública'</strong>. No la preside el Alcalde, sino el responsable del área de gestión de personal."

},

{
    texto: "Según el III Plan, la Comisión de Igualdad tiene carácter paritario. ¿Qué significa 'paritario'?",
    opciones: [
        "Que debe haber el mismo número de mujeres que de hombres.",
        "Que debe haber el mismo número de representantes de la Administración que de representantes sindicales.",
        "Que todas las decisiones deben tomarse por unanimidad."
    ],
    correcta: 1,

    explicacion: "La Comisión tiene <strong>carácter paritario</strong>: igual número de representantes de la Administración que de representantes sindicales. Ejemplo: 7 representantes Administración + 7 representantes sindicales = 14 miembros (paridad numérica)."

},

{
    texto: "¿Qué organizaciones sindicales están presentes en la Comisión de Igualdad del Ayuntamiento de Madrid según el III Plan?",
    opciones: [
        "Solo CCOO, UGT y CSIF.",
        "CSIF, UGT, CCOO, CITAM, CSIT, CPPM y UPM.",
        "Todas las organizaciones sindicales con representación en el Ayuntamiento sin excepción."
    ],
    correcta: 1,

    explicacion: "<strong>Carácter paritario</strong> significa igualdad numérica: mismo número de representantes de cada parte (Administración y sindicatos). Si asisten 5 de Administración y 7 sindicales, NO hay paridad; debe haber igual número de cada parte."

},

{
    texto: "Según el III Plan, los representantes sindicales en la Comisión de Igualdad están presentes:",
    opciones: [
        "Todos con el mismo número de representantes independientemente de su implantación.",
        "En proporción a su implantación en el conjunto del personal funcionario y laboral del Ayuntamiento de Madrid y sus organismos autónomos.",
        "Solo los tres sindicatos más representativos."
    ],
    correcta: 1,

    explicacion: "Los sindicatos presentes son <strong>CSIF, UGT, CCOO, CITAM, CSIT, CPPM y UPM</strong>. Son siete organizaciones sindicales con representación en el Ayuntamiento y sus OO.AA. que participan en la Comisión de Igualdad."

},

{
    texto: "La Comisión de Igualdad está compuesta por representantes de la Administración y representantes sindicales. ¿Qué áreas de la Administración están representadas?",
    opciones: [
        "Solo el Área de Gobierno de Función Pública.",
        "Todas las áreas de gobierno y organismos autónomos.",
        "Solo las áreas relacionadas con políticas de igualdad y recursos humanos."
    ],
    correcta: 1,

    explicacion: "Los representantes sindicales están presentes <strong>en proporción a su implantación</strong> en el conjunto del personal funcionario y laboral del Ayuntamiento y OO.AA. No todos tienen mismo número de representantes; se distribuyen según representatividad electoral."

},

// ===== BLOQUE 15: PLAN IGUALDAD - ESTRUCTURA Y CONTENIDO - 12 preguntas =====

{
    texto: "Según el III Plan de Igualdad del Ayuntamiento de Madrid, ¿cuál es el objetivo general del Plan?",
    opciones: [
        "Alcanzar la paridad absoluta del 50% en todos los puestos directivos del Ayuntamiento.",
        "Avanzar en la igualdad entre mujeres y hombres en el Ayuntamiento de Madrid y sus organismos autónomos.",
        "Eliminar la brecha salarial entre mujeres y hombres en un plazo de dos años."
    ],
    correcta: 1,

    explicacion: "La Comisión está compuesta por representantes de <strong>todas las áreas de gobierno, organismos autónomos y distritos</strong> por parte de la Administración, y por representantes de las organizaciones sindicales por parte del personal. Representación transversal de toda estructura municipal."

},

{
    texto: "El objetivo general del III Plan es 'avanzar en la igualdad entre mujeres y hombres'. ¿Qué implica el verbo 'avanzar'?",
    opciones: [
        "Que el objetivo es alcanzar la igualdad total de forma inmediata.",
        "Que se trata de un proceso progresivo de mejora continua hacia la igualdad efectiva.",
        "Que no se fijan objetivos concretos ni plazos determinados."
    ],
    correcta: 1,

    explicacion: "El objetivo general del III Plan es <strong>'avanzar en la igualdad entre mujeres y hombres en el Ayuntamiento de Madrid y sus organismos autónomos'</strong>. No es alcanzar igualdad total inmediata, sino <strong>avanzar</strong> (proceso progresivo) hacia igualdad efectiva."

},

{
    texto: "El III Plan de Igualdad estructura sus actuaciones a través de líneas de intervención. ¿Cuántas líneas establece?",
    opciones: [
        "Dos líneas: Organización y Personas.",
        "Tres líneas: La institución, La comunicación, Las personas.",
        "Cuatro líneas: Institución, Comunicación, Personas y Seguimiento."
    ],
    correcta: 1,

    explicacion: "El verbo <strong>'avanzar'</strong> implica proceso progresivo de mejora continua, no resultado final inmediato. Reconoce que igualdad efectiva es proceso gradual que requiere tiempo, implantación de medidas y evaluación de resultados. No pretende igualdad absoluta instantánea."

},

{
    texto: "Según el III Plan, ¿cuáles son las tres líneas de intervención?",
    opciones: [
        "Prevención, Sensibilización y Sanción.",
        "La institución, La comunicación, Las personas.",
        "Formación, Conciliación y Corresponsabilidad."
    ],
    correcta: 1,

    explicacion: "El III Plan se estructura en <strong>tres líneas de intervención: (1) La institución, (2) La comunicación, (3) Las personas</strong>. Son ejes transversales bajo los que se agrupan objetivos específicos y medidas del Plan."

},

{
    texto: "Según el III Plan de Igualdad, la estructura del Plan se configura partiendo de:",
    opciones: [
        "Un diagnóstico previo que figura como anexo al Plan.",
        "Las recomendaciones de organismos internacionales sobre igualdad.",
        "El análisis de planes de igualdad de otras administraciones públicas."
    ],
    correcta: 0,

    explicacion: "Las tres líneas son: <strong>La institución</strong> (transformación organizativa para incorporar igualdad), <strong>La comunicación</strong> (lenguaje, imagen, difusión no sexista), <strong>Las personas</strong> (medidas directas para mejorar situación personal/profesional del personal)."

},

{
    texto: "El diagnóstico del III Plan 'figura como anexo al Plan'. ¿Sobre qué aspectos se elabora este diagnóstico?",
    opciones: [
        "Solo sobre la distribución por sexo de la plantilla.",
        "Sobre diferentes aspectos y cuestiones relativas al peso de la variable sexo en determinados ámbitos que afectan al personal del Ayuntamiento y sus organismos autónomos.",
        "Únicamente sobre las denuncias de discriminación presentadas."
    ],
    correcta: 1,

    explicacion: "La estructura parte de <strong>diagnóstico previo</strong> que figura como <strong>anexo al Plan</strong>. El diagnóstico analiza la situación de partida sobre peso de variable sexo en diferentes ámbitos del Ayuntamiento y OO.AA. Es base empírica para fijar objetivos y medidas."

},

{
    texto: "En el III Plan de Igualdad del Ayuntamiento, cada línea de intervención establece:",
    opciones: [
        "Solo un objetivo general sin concreción en medidas específicas.",
        "Una serie de objetivos específicos cuyo desarrollo se concreta en una serie de medidas.",
        "Directamente las medidas sin objetivos intermedios."
    ],
    correcta: 1,

    explicacion: "El diagnóstico (anexo) analiza <strong>diferentes aspectos relativos al peso de la variable sexo</strong> en ámbitos que afectan al personal: distribución por sexo en plantilla, áreas, categorías, niveles, retribuciones, promoción, conciliación, etc. Proporciona datos para diseñar medidas adecuadas."

},

{
    texto: "Según el III Plan, las medidas establecidas se acompañan de:",
    opciones: [
        "Un conjunto de indicadores que permitirán realizar un seguimiento del Plan.",
        "Sanciones para las áreas que no cumplan con los objetivos.",
        "Presupuestos específicos asignados a cada medida."
    ],
    correcta: 0
},

{
    texto: "El III Plan de Igualdad señala que todas las medidas tienen en consideración:",
    opciones: [
        "Únicamente la variable de sexo entre mujeres y hombres.",
        "La diversidad de mujeres y hombres por razón de nacimiento, origen racial o étnico, edad, discapacidad, orientación o identidad sexual, expresión de género o cualquier otra condición personal o social.",
        "Solo las diferencias derivadas de la maternidad y la paternidad."
    ],
    correcta: 1
},

{
    texto: "Según el III Plan, las medidas se presentan:",
    opciones: [
        "Sin plazo definido, para permitir flexibilidad en su implementación.",
        "Calendarizadas en el tiempo de vigencia del plan e incluyen los ámbitos responsables e implicados en su implementación.",
        "Con plazos orientativos que pueden modificarse libremente por cada área."
    ],
    correcta: 1
},

{
    texto: "El III Plan establece que en la implementación de sus medidas:",
    opciones: [
        "Solo participan las áreas de Función Pública e Igualdad.",
        "Todas las áreas de gobierno, organismos autónomos y distritos tienen alguna responsabilidad.",
        "Cada área decide voluntariamente si participa o no en la implementación."
    ],
    correcta: 1
},

{
    texto: "Según el III Plan, las medidas 'atienden a su situación, necesidades o demandas específicas' de mujeres y hombres diversos. ¿Qué enfoque refleja esta afirmación?",
    opciones: [
        "Un enfoque universalista que trata a todas las personas por igual sin distinciones.",
        "Un enfoque interseccional que reconoce que las mujeres y los hombres no son grupos homogéneos y que la discriminación puede estar atravesada por múltiples factores.",
        "Un enfoque centrado exclusivamente en la variable de género."
    ],
    correcta: 1
},

// ===== BLOQUE REFUERZO: PREGUNTAS ULTRADIFÍCILES (20 preguntas) =====

{
    texto: "El art. 1 de la LO 3/2007 hace referencia al desarrollo de los artículos 9.2 y 14 de la Constitución. ¿Cuál de estas afirmaciones refleja correctamente la diferencia entre ambos preceptos constitucionales en el contexto de la igualdad?",
    opciones: [
        "El art. 14 CE garantiza la igualdad formal ante la ley; el art. 9.2 CE impone a los poderes públicos promover la igualdad real y efectiva, removiendo obstáculos.",
        "El art. 14 CE regula solo la igualdad entre españoles; el art. 9.2 CE extiende la igualdad a extranjeros.",
        "Ambos artículos tienen el mismo contenido; se mencionan por redundancia normativa."
    ],
    correcta: 0
},

{
    texto: "Según el art. 2 de la LO 3/2007, la Ley se aplica a 'toda persona, física o jurídica, que se encuentre o actúe en territorio español'. Una empresa con sede en Francia que realiza una única operación comercial puntual en España discrimina a una candidata española en un proceso de selección gestionado desde Francia. ¿Se aplica la LO 3/2007?",
    opciones: [
        "No, porque la empresa tiene sede en Francia y el proceso se gestiona desde allí.",
        "Sí, porque la empresa 'actúa' en territorio español al realizar operaciones comerciales aquí, con independencia de dónde gestione el proceso de selección.",
        "Solo si la candidata presenta la demanda en España y no en Francia."
    ],
    correcta: 1
},

{
    texto: "El art. 3 de la LO 3/2007 menciona 'especialmente' las discriminaciones derivadas de la maternidad, asunción de obligaciones familiares y estado civil. La palabra 'especialmente' implica que:",
    opciones: [
        "Solo estas tres circunstancias constituyen discriminación por razón de sexo según el art. 3.",
        "Estas tres son ejemplos destacados, pero no son las únicas situaciones que pueden constituir discriminación por razón de sexo bajo el principio de igualdad de trato.",
        "Tienen un régimen jurídico diferenciado y más protector que otras formas de discriminación."
    ],
    correcta: 1
},

{
    texto: "Una trabajadora es despedida por su embarazo. La empresa alega que el despido se debió a su bajo rendimiento, no al embarazo. Según los arts. 8 y 13 de la LO 3/2007, ¿cómo opera la carga de la prueba?",
    opciones: [
        "La trabajadora debe probar que el despido fue por embarazo y no por bajo rendimiento.",
        "Al tratarse de un trato desfavorable relacionado con el embarazo (art. 8), se considera discriminación directa, y corresponde a la empresa probar que el despido se debió a causas objetivas ajenas al embarazo y que fueron proporcionadas.",
        "La carga de la prueba se reparte al 50% entre ambas partes."
    ],
    correcta: 1
},

{
    texto: "El art. 6.2 establece que una disposición aparentemente neutra puede justificarse objetivamente si persigue 'una finalidad legítima' y los medios son 'necesarios y adecuados'. ¿Qué significa que los medios sean 'necesarios'?",
    opciones: [
        "Que sean los únicos medios posibles para alcanzar la finalidad.",
        "Que no existan otros medios alternativos menos lesivos o restrictivos que puedan alcanzar la misma finalidad legítima con igual eficacia.",
        "Que estén expresamente autorizados por una ley previa."
    ],
    correcta: 1
},

{
    texto: "Según el art. 7.1, el acoso sexual se define por comportamientos que tengan 'el propósito o produzca el efecto' de atentar contra la dignidad. Una persona realiza un comentario de naturaleza sexual sin intención de ofender, pero la víctima se siente intimidada. ¿Existe acoso sexual?",
    opciones: [
        "No, porque no hubo intención (propósito) de atentar contra la dignidad.",
        "Sí, porque basta con que se produzca el efecto de atentar contra la dignidad, aunque no haya habido intención.",
        "Solo si el comentario se repite al menos tres veces."
    ],
    correcta: 1
},

{
    texto: "El art. 7.2 define el acoso por razón de sexo como un comportamiento 'realizado en función del sexo de una persona'. Una mujer sufre comentarios despectivos por parte de un compañero porque es mujer, pero estos comentarios no tienen contenido sexual. ¿De qué tipo de acoso se trata?",
    opciones: [
        "Acoso sexual, porque la víctima es mujer.",
        "Acoso por razón de sexo, porque el comportamiento se realiza en función de su sexo pero no tiene naturaleza sexual.",
        "No constituye acoso según la LO 3/2007, solo constituiría una falta disciplinaria laboral."
    ],
    correcta: 1
},

{
    texto: "Según el art. 7.4, el condicionamiento de un derecho a la aceptación de acoso sexual 'se considerará también acto de discriminación'. La expresión 'también' significa que:",
    opciones: [
        "El acoso sexual en sí mismo ya es discriminatorio (art. 7.3), y además condicionar un derecho a su aceptación constituye una forma agravada de discriminación.",
        "Solo el condicionamiento es discriminatorio; el acoso sexual en sí mismo no lo es.",
        "Se trata de dos figuras jurídicas independientes sin relación."
    ],
    correcta: 0
},

{
    texto: "Una funcionaria presenta una reclamación formal por discriminación salarial. Como represalia, su jefe le asigna las tareas más desagradables del departamento. Según el art. 9, ¿está protegida frente a esta represalia?",
    opciones: [
        "No, porque el art. 9 solo protege frente a despidos, no frente a cambios de funciones.",
        "Sí, el art. 9 protege frente a 'cualquier trato adverso' como consecuencia de haber presentado reclamaciones destinadas a impedir discriminación, lo que incluye la asignación de tareas desagradables como represalia.",
        "Solo si la reclamación fue estimada favorablemente."
    ],
    correcta: 1
},

{
    texto: "Según el art. 10, los actos discriminatorios 'se considerarán nulos y sin efecto'. Una cláusula contractual discriminatoria por razón de sexo fue firmada hace 5 años. ¿Cuál es su situación jurídica actual?",
    opciones: [
        "Es válida porque han transcurrido más de 4 años desde su firma.",
        "Es nula de pleno derecho desde su origen, con independencia del tiempo transcurrido, porque la nulidad opera automáticamente.",
        "Es anulable, pero requiere sentencia judicial que la declare nula."
    ],
    correcta: 1
},

{
    texto: "El art. 10 establece que los actos discriminatorios darán lugar a responsabilidad mediante 'reparaciones o indemnizaciones que sean reales, efectivas y proporcionadas al perjuicio sufrido'. Una trabajadora discriminada sufrió un perjuicio económico de 1.000€ pero un grave daño moral. ¿Cómo debe calcularse la indemnización?",
    opciones: [
        "Solo se indemnizan 1.000€ correspondientes al perjuicio económico acreditado.",
        "La indemnización debe ser 'real, efectiva y proporcionada' al perjuicio total sufrido, lo que incluye tanto el daño económico como el daño moral, debiendo ser proporcionada a ambos.",
        "Se indemnizan 1.000€ más un 10% en concepto de daño moral."
    ],
    correcta: 1
},

{
    texto: "Según el art. 11, las acciones positivas 'serán aplicables en tanto subsistan' las situaciones de desigualdad. Una empresa establece una acción positiva en 2020 para corregir la infrarrepresentación de mujeres en puestos directivos. En 2026 se alcanza la representación equilibrada. ¿Qué debe hacer la empresa?",
    opciones: [
        "Mantener la acción positiva indefinidamente para evitar retrocesos.",
        "Dejar de aplicar la acción positiva, ya que al haber desaparecido la situación de desigualdad que la justificaba, su mantenimiento carecería de base legal.",
        "Solicitar autorización judicial para finalizar la acción positiva."
    ],
    correcta: 1
},

{
    texto: "El art. 11 exige que las acciones positivas sean 'razonables y proporcionadas en relación con el objetivo perseguido'. Una empresa reserva el 100% de nuevas contrataciones exclusivamente para mujeres durante 5 años. ¿Es esta medida conforme al art. 11?",
    opciones: [
        "Sí, porque las acciones positivas pueden adoptar cualquier forma si persiguen la igualdad.",
        "Probablemente no, porque una reserva del 100% durante 5 años difícilmente superaría el test de proporcionalidad, al poder existir medidas menos restrictivas que alcancen el mismo objetivo.",
        "Sí, siempre que se acredite infrarrepresentación femenina previa."
    ],
    correcta: 1
},

{
    texto: "Según el art. 12.1, se puede recabar tutela judicial 'incluso tras la terminación de la relación en la que supuestamente se ha producido la discriminación'. Una trabajadora sufre discriminación, dimite, y 6 meses después presenta demanda. ¿Puede ejercitar la acción?",
    opciones: [
        "No, porque la relación laboral ya ha finalizado.",
        "Sí, el art. 12.1 permite ejercitar la acción incluso tras la terminación de la relación, precisamente para evitar que el cese de la relación impida la tutela del derecho.",
        "Solo si la discriminación continuó después de la dimisión."
    ],
    correcta: 1
},

{
    texto: "El art. 12.3 establece que en litigios sobre acoso sexual 'la persona acosada será la única legitimada'. Una trabajadora sufre acoso sexual. El sindicato quiere presentar demanda en su nombre. ¿Puede hacerlo?",
    opciones: [
        "Sí, los sindicatos siempre tienen legitimación en defensa de los trabajadores.",
        "No, el art. 12.3 atribuye legitimación exclusiva a la persona acosada, excluyendo expresamente la legitimación sindical en estos casos específicos por afectar a derechos personalísimos.",
        "Sí, si la trabajadora otorga poder al sindicato."
    ],
    correcta: 1
},

{
    texto: "Según el art. 13, la regla de inversión de la carga de la prueba no se aplica a procesos penales. En un proceso penal por acoso sexual, ¿quién debe probar los hechos?",
    opciones: [
        "El acusado debe probar su inocencia.",
        "La acusación debe probar los hechos constitutivos del delito, aplicándose la presunción de inocencia del art. 24.2 CE sin inversión de carga probatoria.",
        "Se aplica la inversión de carga de la prueba del art. 13 también en procesos penales."
    ],
    correcta: 1
},

{
    texto: "Una disposición empresarial exige disponibilidad horaria absoluta (24h/7 días). Formalmente es neutra, pero perjudica más a mujeres que asumen cargas familiares. Según el art. 6.2, ¿es discriminación indirecta?",
    opciones: [
        "Sí, automáticamente, por perjudicar más a un sexo.",
        "Puede serlo, salvo que la empresa justifique objetivamente que la disponibilidad absoluta responde a una finalidad legítima y es necesaria y adecuada para el tipo de puesto (ej: servicios de emergencia), superando así el test del art. 6.2.",
        "No, porque la norma no menciona el sexo."
    ],
    correcta: 1
},

{
    texto: "El III Plan de Igualdad del Ayuntamiento de Madrid establece un ámbito temporal de '4 años, salvo que la legislatura finalice con anterioridad'. La legislatura actual comenzó en junio de 2023 y termina en mayo de 2027. El Plan se aprobó el 28/12/2023. ¿Cuándo finalizaría su vigencia?",
    opciones: [
        "El 28 de diciembre de 2027 (4 años desde aprobación).",
        "En mayo de 2027 (fin de legislatura), al ser anterior a los 4 años desde aprobación.",
        "El 11 de enero de 2028 (4 años desde publicación BOAM)."
    ],
    correcta: 1
},

{
    texto: "El III Plan establece que 'todas las áreas de gobierno, organismos autónomos y distritos tienen alguna responsabilidad' en su implementación. Un distrito alega que una medida del Plan no le compete porque no es materia de su ámbito de actuación. ¿Es correcta esta alegación?",
    opciones: [
        "Sí, cada área solo ejecuta las medidas de su competencia material.",
        "No es correcta; el Plan establece responsabilidades transversales para todas las estructuras municipales, lo que implica que todas participan en la implementación aunque la medida no sea de su competencia principal.",
        "Solo las áreas de Igualdad y Función Pública son responsables."
    ],
    correcta: 1
},

{
    texto: "Según el III Plan, la Comisión de Igualdad 'tiene carácter paritario'. En una sesión asisten 5 representantes de la Administración y 7 representantes sindicales. ¿Cumple con el carácter paritario?",
    opciones: [
        "No, porque no hay igual número de representantes de cada parte; el carácter paritario exige igualdad numérica entre representantes de la Administración y representantes sindicales.",
        "Sí, porque hay representación de ambas partes.",
        "Sí, porque los sindicatos tienen más afiliados."
    ],
    correcta: 0
}
]

},
{
    id: 3,
    nombre: "Tema 3 - Gobierno Municipal Madrid",
    icono: "🏛️",
    preguntas: [


// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 1: GOBIERNO MUNICIPAL - DISPOSICIONES GENERALES (10 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 19.1 de la Ley 7/1985 LBRL, el gobierno y la administración municipal corresponden:",
    opciones: [
        "Al Ayuntamiento, integrado por el Alcalde y los Concejales.",
        "Exclusivamente al Pleno del Ayuntamiento como órgano supremo de gobierno.",
        "Conjuntamente al Alcalde y a la Junta de Gobierno Local, que ejercen la función ejecutiva."
    ],
    correcta: 0,
    explicacion: "El art. 19.1 LBRL establece que <strong>el gobierno y la administración municipal corresponden al Ayuntamiento</strong>, que está <strong>integrado por el Alcalde y los Concejales</strong>. No es solo el Pleno ni solo los órganos ejecutivos; es el Ayuntamiento como corporación completa la titular del gobierno municipal."
},

{
    texto: "Los órganos necesarios que deben existir en todos los Ayuntamientos según el art. 20.1 LBRL son:",
    opciones: [
        "El Pleno y el Alcalde.",
        "El Pleno, el Alcalde y los Tenientes de Alcalde.",
        "El Pleno, el Alcalde, la Junta de Gobierno Local y los Tenientes de Alcalde."
    ],
    correcta: 0,
    explicacion: "El art. 20.1.a) LBRL establece como órganos <strong>necesarios</strong> (obligatorios) en todos los Ayuntamientos únicamente: <strong>el Pleno y el Alcalde</strong>. Los Tenientes de Alcalde también existen siempre, pero la Junta de Gobierno solo es obligatoria en municipios >5.000 habitantes."
},

{
    texto: "En los municipios de gran población como Madrid, según el art. 122 LBRL, además del Pleno y el Alcalde, son órganos necesarios:",
    opciones: [
        "La Junta de Gobierno Local.",
        "La Junta de Gobierno Local, el Consejo Social de la Ciudad y los Distritos.",
        "La Junta de Gobierno Local, las Comisiones del Pleno y el Consejo Social."
    ],
    correcta: 1,
    explicacion: "El art. 122 LBRL establece como órganos <strong>necesarios en municipios de gran población</strong>: Pleno, Alcalde, <strong>Junta de Gobierno Local, Consejo Social de la Ciudad y órganos de los Distritos</strong>. Las Comisiones del Pleno pueden existir pero no son obligatorias."
},

{
    texto: "Madrid tiene la consideración de municipio de gran población porque:",
    opciones: [
        "Supera los 250.000 habitantes.",
        "Es capital de España y sede de las instituciones del Estado.",
        "Cumple ambas condiciones: supera 250.000 habitantes y es capital del Estado."
    ],
    correcta: 2,
    explicacion: "El art. 121 LBRL considera municipios de gran población: (a) >250.000 habitantes, (b) capitales de provincia >175.000 habitantes, (c) <strong>capitales de CCAA o sedes de instituciones autonómicas que así lo decidan</strong>. Madrid cumple el criterio (a) por población y (c) por ser capital."
},

{
    texto: "Según la Ley 22/2006 de Capitalidad, los órganos de gobierno municipal de Madrid son:",
    opciones: [
        "Deliberante: el Pleno. Ejecutivos: el Alcalde, Junta de Gobierno, Tenientes de Alcalde, Concejales con responsabilidades, miembros no electos JG y los del Reglamento.",
        "El Pleno, el Alcalde y la Junta de Gobierno exclusivamente.",
        "El Pleno, el Alcalde, la Junta de Gobierno y las Comisiones del Pleno."
    ],
    correcta: 0,
    explicacion: "El art. 7 Ley 22/2006 establece: órgano <strong>deliberante</strong>: el Pleno. Órganos <strong>ejecutivos</strong>: Alcalde, Junta de Gobierno, Tenientes de Alcalde, Concejales con responsabilidades de gobierno, <strong>miembros no electos de la Junta</strong> y los que determine el Reglamento Orgánico."
},

{
    texto: "El Reglamento Orgánico del Ayuntamiento de Madrid es:",
    opciones: [
        "Una norma con rango de ley orgánica aprobada por las Cortes Generales.",
        "Un reglamento municipal aprobado por el Pleno por mayoría absoluta del número legal de miembros.",
        "Un decreto del Alcalde que regula la organización administrativa municipal."
    ],
    correcta: 1,
    explicacion: "El Reglamento Orgánico es una <strong>norma reglamentaria municipal</strong> que aprueba <strong>el Pleno por mayoría absoluta del número legal de miembros</strong> (art. 47.2.ñ LBRL y art. 11.c) Ley 22/2006). No es ley orgánica ni decreto; es un reglamento local."
},

{
    texto: "¿Qué mayoría requiere la aprobación del Reglamento Orgánico municipal?",
    opciones: [
        "Mayoría absoluta del número legal de miembros del Pleno.",
        "Mayoría simple de los asistentes a la sesión.",
        "Tres quintos del número legal de miembros del Pleno."
    ],
    correcta: 0,
    explicacion: "El art. 47.2.ñ LBRL y art. 11.2 Ley 22/2006 exigen <strong>mayoría absoluta del número legal de miembros</strong> para aprobar el Reglamento Orgánico. Mayoría absoluta = mitad más uno del total de Concejales (57 en Madrid = 29 votos), estén o no presentes."
},

{
    texto: "El número de Concejales del Ayuntamiento de Madrid según la LOREG es:",
    opciones: [
        "57 Concejales, incluido el Alcalde.",
        "51 Concejales más el Alcalde.",
        "57 Concejales sin contar al Alcalde, que preside sin voto."
    ],
    correcta: 0,
    explicacion: "Según la Ley Orgánica del Régimen Electoral General (LOREG), Madrid al tener más de 1.000.000 de habitantes tiene <strong>57 Concejales</strong>, <strong>incluido el Alcalde</strong> (que también es Concejal). Es un número fijo determinado por ley."
},

{
    texto: "¿Quiénes integran el Ayuntamiento según el art. 19.1 LBRL?",
    opciones: [
        "El Alcalde y los Concejales.",
        "El Pleno, el Alcalde y la Junta de Gobierno.",
        "El Alcalde, los Tenientes de Alcalde y los Concejales."
    ],
    correcta: 0,
    explicacion: "El art. 19.1 LBRL es claro: <strong>el Ayuntamiento está integrado por el Alcalde y los Concejales</strong>. Los Tenientes son Concejales designados (ya incluidos). El Pleno y la Junta son órganos del Ayuntamiento, no miembros integrantes."
},

{
    texto: "Según el art. 19.2 LBRL, los Concejales son elegidos y el Alcalde es elegido:",
    opciones: [
        "Los Concejales por sufragio universal directo; el Alcalde por los Concejales o por los vecinos según establezca la ley electoral.",
        "Tanto los Concejales como el Alcalde por sufragio universal directo de los vecinos.",
        "Los Concejales por sufragio universal; el Alcalde es designado por la Junta de Gobierno Local."
    ],
    correcta: 0,
    explicacion: "El art. 19.2 LBRL establece: <strong>Concejales elegidos por sufragio universal</strong> (voto directo); <strong>Alcalde elegido por los Concejales o por los vecinos</strong> según establezca la legislación electoral. En España actualmente el Alcalde lo eligen los Concejales."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 2: EL PLENO - COMPOSICIÓN, NATURALEZA Y FUNCIONAMIENTO (12 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 22.1 LBRL, el Pleno está integrado por:",
    opciones: [
        "Todos los Concejales, presididos por el Alcalde.",
        "Los Concejales electos, sin incluir al Alcalde que lo preside externamente.",
        "El Alcalde, los Tenientes de Alcalde y los portavoces de los grupos municipales."
    ],
    correcta: 0,
    explicacion: "El art. 22.1 LBRL establece que <strong>el Pleno está integrado por todos los Concejales y presidido por el Alcalde</strong>. El Alcalde ES Concejal, por lo que forma parte del Pleno como miembro y además lo preside."
},

{
    texto: "Según la Ley 22/2006 de Capitalidad (art. 9.1), el Pleno de Madrid es:",
    opciones: [
        "El órgano ejecutivo superior del Ayuntamiento.",
        "El órgano de máxima representación política de los ciudadanos en el gobierno municipal.",
        "Un órgano consultivo que asesora al Alcalde en sus decisiones."
    ],
    correcta: 1,
    explicacion: "El art. 9.1 Ley 22/2006 define el Pleno como <strong>'el órgano de máxima representación política de los ciudadanos en el gobierno municipal'</strong>. No es ejecutivo (eso es Alcalde/JG); ejerce funciones de control, fiscalización y adopción de grandes decisiones."
},

{
    texto: "Las sesiones del Pleno del Ayuntamiento de Madrid son:",
    opciones: [
        "Públicas siempre, sin excepciones.",
        "Públicas, salvo que por mayoría absoluta se acuerde sesión secreta para asuntos que afecten al derecho fundamental del art. 18.1 CE.",
        "Secretas, salvo que el Alcalde decida lo contrario."
    ],
    correcta: 1,
    explicacion: "El art. 9.2 Ley 22/2006 establece: <strong>sesiones del Pleno son públicas</strong>. Excepción: pueden ser secretos debate y votación de asuntos que afecten al derecho fundamental del <strong>art. 18.1 CE (intimidad personal y familiar)</strong>, cuando se acuerde por <strong>mayoría absoluta</strong>."
},

{
    texto: "El Pleno puede funcionar en Comisiones. Según la Ley de Capitalidad, estas Comisiones están formadas por:",
    opciones: [
        "Concejales designados por el Alcalde según sus competencias.",
        "Concejales que designen los grupos políticos en proporción a su representación en el Pleno.",
        "Todos los Concejales obligatoriamente, garantizando representación total."
    ],
    correcta: 1,
    explicacion: "El art. 9.2 Ley 22/2006 establece que las Comisiones del Pleno están formadas por <strong>Concejales que designen los grupos políticos en proporción a su representación en el Pleno</strong>. Es un sistema proporcional que garantiza presencia de todos los grupos."
},

{
    texto: "A las sesiones del Pleno de Madrid pueden asistir:",
    opciones: [
        "Solo los Concejales electos.",
        "Los Concejales y los miembros no electos de la Junta de Gobierno.",
        "Los Concejales, los miembros no electos de la Junta de Gobierno y cualquier vecino que lo solicite."
    ],
    correcta: 1,
    explicacion: "El art. 9.1 Ley 22/2006 establece que el Pleno está formado por Alcalde y Concejales, <strong>sin perjuicio de la asistencia a sus sesiones e intervención en deliberaciones de los miembros no electos de la Junta de Gobierno</strong>. Estos pueden asistir e intervenir pero no votar."
},

{
    texto: "¿Quién convoca las sesiones del Pleno?",
    opciones: [
        "El Alcalde, salvo que se haya designado un Presidente del Pleno.",
        "El Secretario General del Pleno por delegación del Alcalde.",
        "Los portavoces de los grupos municipales conjuntamente."
    ],
    correcta: 0,
    explicacion: "El art. 21.c) LBRL atribuye al Alcalde <strong>convocar y presidir las sesiones del Pleno</strong>. El art. 14.b) Ley 22/2006 permite la opción de designar un <strong>Presidente del Pleno</strong> distinto del Alcalde (art. 10 de la Ley)."
},

{
    texto: "Según el art. 20.1.c) LBRL, en municipios >5.000 habitantes deben existir órganos que tengan por objeto:",
    opciones: [
        "La ejecución de las decisiones del Pleno bajo supervisión del Alcalde.",
        "El estudio, informe o consulta de asuntos del Pleno y el seguimiento de la gestión del Alcalde, JG y delegados.",
        "Asesorar jurídicamente al Alcalde en sus competencias ejecutivas."
    ],
    correcta: 1,
    explicacion: "El art. 20.1.c) LBRL establece que en municipios >5.000 habitantes existirán órganos (Comisiones) para: <strong>estudio, informe o consulta de asuntos</strong> que van al Pleno y <strong>seguimiento de la gestión</strong> del Alcalde, JG y delegados. No ejecutan; controlan e informan."
},

{
    texto: "En las Comisiones del Pleno previstas en el art. 20.1.c) LBRL, todos los grupos políticos tienen derecho a:",
    opciones: [
        "Participar mediante presencia de Concejales en proporción a su representación en el Pleno.",
        "Tener el mismo número de representantes independientemente de su tamaño.",
        "Participar solo si superan un mínimo del 5% de los votos."
    ],
    correcta: 0,
    explicacion: "El art. 20.1.c) LBRL establece que <strong>todos los grupos políticos tienen derecho a participar</strong> en estas Comisiones <strong>en proporción al número de Concejales que tengan en el Pleno</strong>. Es representación proporcional, no igualitaria ni limitada por umbral."
},

{
    texto: "Según el art. 22.3 LBRL, el Pleno vota sobre la moción de censura y la cuestión de confianza. Estas votaciones son:",
    opciones: [
        "Secretas para garantizar la libertad de voto de los Concejales.",
        "Públicas y mediante llamamiento nominal en todo caso.",
        "Públicas si lo solicita al menos un tercio de los Concejales."
    ],
    correcta: 1,
    explicacion: "El art. 22.3 LBRL establece que las votaciones sobre <strong>moción de censura y cuestión de confianza serán públicas y se realizarán mediante llamamiento nominal en todo caso</strong>. Se rigen por legislación electoral general. No cabe votación secreta."
},

{
    texto: "La votación sobre la moción de censura al Alcalde se rige por:",
    opciones: [
        "El Reglamento Orgánico del Ayuntamiento exclusivamente.",
        "La legislación electoral general en todos sus aspectos.",
        "La normativa autonómica sobre régimen local."
    ],
    correcta: 1,
    explicacion: "El art. 22.3 LBRL y art. 11.1.b) Ley 22/2006 establecen que moción de censura y cuestión de confianza <strong>se regirán en todos sus aspectos por lo dispuesto en la legislación electoral general</strong>. Prevalece sobre normativa local."
},

{
    texto: "En las sesiones del Pleno, ¿quién decide los empates con voto de calidad?",
    opciones: [
        "El Alcalde, cuando preside el Pleno.",
        "El Concejal de mayor edad entre los presentes.",
        "Se repite la votación y si persiste el empate se rechaza la propuesta."
    ],
    correcta: 0,
    explicacion: "El art. 21.c) LBRL y art. 14.c) Ley 22/2006 atribuyen al Alcalde <strong>decidir los empates con voto de calidad</strong> en todos los órganos colegiados que presida, incluido el Pleno. Es una atribución del Presidente, no del Concejal mayor edad."
},

{
    texto: "¿Cómo se regulan la convocatoria, constitución y funcionamiento del Pleno de Madrid en lo no previsto en la Ley de Capitalidad?",
    opciones: [
        "Por la legislación estatal básica, el Reglamento Orgánico y las Resoluciones del Presidente del Pleno.",
        "Exclusivamente por la Ley 7/1985 LBRL.",
        "Por el Real Decreto que desarrolla la organización de los municipios de gran población."
    ],
    correcta: 0,
    explicacion: "El art. 9.3 Ley 22/2006 establece que en lo no previsto en esta Ley, el Pleno se rige por: <strong>legislación estatal básica en materia de gobierno local, Reglamento Orgánico y Resoluciones del Presidente</strong> en interpretación del Reglamento."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 3: PLENO - ATRIBUCIONES (13 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 22.2.a) LBRL, corresponde al Pleno:",
    opciones: [
        "La dirección y gestión de los servicios municipales.",
        "El control y la fiscalización de los órganos de gobierno.",
        "La ejecución de los acuerdos adoptados por la Junta de Gobierno."
    ],
    correcta: 1,
    explicacion: "El art. 22.2.a) LBRL y art. 11.1.a) Ley 22/2006 atribuyen al Pleno <strong>'el control y la fiscalización de los órganos de gobierno'</strong>. Es la función de control político del órgano representativo sobre los ejecutivos. La gestión corresponde al Alcalde y JG."
},

{
    texto: "La aprobación del planeamiento general urbanístico corresponde según la LBRL a:",
    opciones: [
        "Al Alcalde como responsable del urbanismo municipal.",
        "A la Junta de Gobierno Local por delegación del Pleno.",
        "Al Pleno, tanto la aprobación inicial como la que pone fin a la tramitación municipal."
    ],
    correcta: 2,
    explicacion: "El art. 22.2.c) LBRL atribuye al Pleno: <strong>aprobación inicial del planeamiento general y aprobación que ponga fin a tramitación municipal</strong> de planes e instrumentos de ordenación urbanística. Son competencias indelegables del Pleno."
},

{
    texto: "Según el art. 22.2.d) LBRL, corresponde al Pleno la aprobación de:",
    opciones: [
        "El reglamento orgánico y las ordenanzas.",
        "Solo las ordenanzas fiscales; el reglamento lo aprueba el Alcalde.",
        "Las ordenanzas, previo informe favorable de la Junta de Gobierno."
    ],
    correcta: 0,
    explicacion: "El art. 22.2.d) LBRL y art. 11.1.d) Ley 22/2006 atribuyen al Pleno <strong>la aprobación del reglamento orgánico y de las ordenanzas</strong>. Son competencias normativas del Pleno, indelegables."
},

{
    texto: "La determinación de los recursos propios de carácter tributario corresponde a:",
    opciones: [
        "Al Pleno del Ayuntamiento.",
        "A la Junta de Gobierno Local.",
        "Al Alcalde, previo informe del Interventor."
    ],
    correcta: 0,
    explicacion: "El art. 22.2.e) LBRL y art. 11.1.g) Ley 22/2006 atribuyen al Pleno <strong>'la determinación de los recursos propios de carácter tributario'</strong>. Es competencia exclusiva indelegable del órgano representativo por afectar a derechos ciudadanos."
},

{
    texto: "Según el art. 22.2.e) LBRL, la aprobación de los presupuestos y de las cuentas corresponde a:",
    opciones: [
        "A la Junta de Gobierno Local que tiene competencia en gestión económica.",
        "Al Pleno, así como la disposición de gastos en materias de su competencia.",
        "Al Alcalde en primera instancia, ratificado posteriormente por el Pleno."
    ],
    correcta: 1,
    explicacion: "El art. 22.2.e) LBRL atribuye al Pleno: <strong>aprobación y modificación de presupuestos, disposición de gastos en su competencia y aprobación de las cuentas</strong>, todo ello conforme a Ley Reguladora Haciendas Locales. Competencia indelegable."
},

{
    texto: "La aprobación de la plantilla de personal y de la relación de puestos de trabajo corresponde según la LBRL a:",
    opciones: [
        "Al Pleno.",
        "Al Alcalde como jefe superior del personal.",
        "A la Junta de Gobierno Local por delegación del Pleno."
    ],
    correcta: 0,
    explicacion: "El art. 22.2.i) LBRL atribuye al Pleno <strong>la aprobación de la plantilla de personal y relación de puestos de trabajo</strong>, fijación de cuantía de retribuciones complementarias fijas y periódicas, y número/régimen personal eventual. Competencia indelegable."
},

{
    texto: "Las operaciones de crédito cuya cuantía acumulada exceda del 10% de los recursos ordinarios del Presupuesto deben ser aprobadas por:",
    opciones: [
        "El Pleno, salvo operaciones de tesorería con requisitos específicos.",
        "El Alcalde dentro de sus competencias de gestión económica.",
        "La Junta de Gobierno Local como órgano de gestión presupuestaria."
    ],
    correcta: 0,
    explicacion: "El art. 22.2.m) LBRL establece que corresponde al Pleno <strong>concertar operaciones de crédito cuya cuantía acumulada exceda del 10% de recursos ordinarios</strong> (salvo tesorería si no supera 15% ingresos corrientes ejercicio anterior). Competencia del Pleno en operaciones relevantes."
},

{
    texto: "Según el art. 22.2.l) LBRL, la alteración de la calificación jurídica de los bienes de dominio público corresponde a:",
    opciones: [
        "Al Pleno.",
        "Al Alcalde como responsable del patrimonio municipal.",
        "A la Junta de Gobierno Local previo informe del Interventor."
    ],
    correcta: 0,
    explicacion: "El art. 22.2.l) LBRL atribuye al Pleno <strong>la alteración de la calificación jurídica de los bienes de dominio público</strong>. Es una decisión estratégica sobre el patrimonio que corresponde al órgano representativo, no a los ejecutivos."
},

{
    texto: "La declaración de lesividad de los actos del Ayuntamiento según el art. 22.2.k) LBRL corresponde a:",
    opciones: [
        "Al Pleno.",
        "Al Alcalde que la propone para ratificación del Pleno.",
        "A la Junta de Gobierno Local por mayoría de dos tercios."
    ],
    correcta: 0,
    explicacion: "El art. 22.2.k) LBRL atribuye al Pleno <strong>'la declaración de lesividad de los actos del Ayuntamiento'</strong>. El Alcalde puede proponer (art. 21.l LBRL), pero la decisión corresponde al Pleno. Es competencia indelegable."
},

{
    texto: "Según el art. 11.2 Ley 22/2006 de Capitalidad, la aprobación de reglamentos de naturaleza orgánica requiere:",
    opciones: [
        "Mayoría absoluta del número legal de miembros del Pleno.",
        "Mayoría simple de los presentes en la sesión.",
        "Dos tercios del número legal de miembros del Pleno."
    ],
    correcta: 0,
    explicacion: "El art. 11.2 Ley 22/2006 establece que se requerirá <strong>voto favorable de la mayoría absoluta del número legal de miembros del Pleno</strong> para aprobar reglamentos naturaleza orgánica y otros acuerdos específicos (alteración término, participación supramunicipal, etc.)."
},

{
    texto: "Según el art. 11.1.c) Ley 22/2006, tienen en todo caso naturaleza orgánica (entre otros):",
    opciones: [
        "La regulación del Pleno, del órgano defensa derechos vecinos, participación ciudadana, distritos, organización política/administrativa y Tribunal Económico-Administrativo.",
        "Exclusivamente la regulación del Pleno y de la Junta de Gobierno.",
        "Solo la regulación de los órganos de participación ciudadana."
    ],
    correcta: 0,
    explicacion: "El art. 11.1.c) Ley 22/2006 enumera como reglamentos de naturaleza orgánica: regulación Pleno, órgano defensa derechos vecinos, participación ciudadana, <strong>división en distritos</strong>, organización política/administrativa Ayuntamiento y <strong>Tribunal Económico-Administrativo Municipal</strong>."
},

{
    texto: "Según el art. 22.4 LBRL, el Pleno puede delegar competencias en:",
    opciones: [
        "El Alcalde y la Junta de Gobierno Local, con las excepciones legales.",
        "Solo en la Junta de Gobierno Local, no en el Alcalde personalmente.",
        "En cualquier Concejal que designe para asuntos específicos."
    ],
    correcta: 0,
    explicacion: "El art. 22.4 LBRL establece: <strong>el Pleno puede delegar en el Alcalde y en la Junta de Gobierno Local</strong>, salvo las competencias enunciadas en apartado 2 (control, aprobaciones normativas, presupuestos, plantilla, etc.) y apartado 3 (moción censura/confianza)."
},

{
    texto: "Las competencias del Pleno enumeradas en el art. 22.2 párrafos a), b), c), d), e), f), g), h), i), l) y p) son:",
    opciones: [
        "Delegables en la Junta de Gobierno Local por acuerdo del Pleno.",
        "Indelegables según el art. 22.4 LBRL.",
        "Delegables en el Alcalde pero no en la Junta de Gobierno."
    ],
    correcta: 1,
    explicacion: "El art. 22.4 LBRL establece que el Pleno <strong>NO puede delegar</strong> las competencias de los párrafos a) (control), b) (alteraciones término), c) (planeamiento), d) (reglamentos), e) (tributos/presupuestos), f) (gestión servicios), g) (delegaciones), h) (conflictos), i) (plantilla), l) (bienes dominio público) y p) (mayorías especiales)."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 4: EL ALCALDE - ELECCIÓN, NATURALEZA Y POSICIÓN (10 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 21.1 LBRL, el Alcalde es:",
    opciones: [
        "El Presidente de la Corporación.",
        "El máximo responsable ejecutivo pero sin formar parte del Pleno.",
        "El representante del Estado en el municipio."
    ],
    correcta: 0,
    explicacion: "El art. 21.1 LBRL establece: <strong>'El Alcalde es el Presidente de la Corporación'</strong>. Es miembro del Pleno (Concejal) y su Presidente, ostentando la máxima representación y dirección política y administrativa."
},

{
    texto: "Según la Ley 22/2006 de Capitalidad (art. 14.1), el Alcalde de Madrid:",
    opciones: [
        "Impulsa la política municipal, dirige los órganos ejecutivos, ejerce superior dirección de la Administración y responde ante el Pleno.",
        "Ejecuta los acuerdos del Pleno bajo supervisión de la Junta de Gobierno.",
        "Preside el Pleno sin derecho a voto salvo empates."
    ],
    correcta: 0,
    explicacion: "El art. 14.1 Ley 22/2006 establece que el Alcalde: <strong>impulsa la política municipal, dirige la acción de los restantes órganos ejecutivos, ejerce superior dirección de la Administración</strong> ejecutiva municipal y <strong>responde ante el Pleno</strong> por su gestión política."
},

{
    texto: "Según el art. 14.2 Ley 22/2006, el Alcalde ostenta:",
    opciones: [
        "La máxima representación de la ciudad, sin perjuicio de facultades que se otorguen a otros órganos.",
        "La representación exclusiva de la ciudad que no puede delegarse.",
        "La representación del Ayuntamiento solo en actos protocolarios."
    ],
    correcta: 0,
    explicacion: "El art. 14.2 Ley 22/2006: <strong>'El Alcalde ostenta la máxima representación de la ciudad'</strong>, sin perjuicio de facultades de representación que puedan <strong>otorgarse a titulares de otros órganos</strong>. Es la máxima, pero admite delegación en aspectos concretos."
},

{
    texto: "El Alcalde preside las sesiones del Pleno según el art. 21.c) LBRL:",
    opciones: [
        "Salvo los supuestos previstos en la LBRL y legislación electoral general.",
        "Siempre, sin excepción alguna.",
        "Solo cuando no exista un Vicepresidente designado por el Pleno."
    ],
    correcta: 0,
    explicacion: "El art. 21.c) LBRL establece que el Alcalde convoca y preside sesiones del Pleno <strong>'salvo los supuestos previstos en esta ley y en la legislación electoral general'</strong>. Por ejemplo: procesos de moción de censura o elección de Alcalde puede no presidirlas."
},

{
    texto: "Según el art. 14.b) Ley 22/2006, el Alcalde convoca y preside el Pleno y la Junta de Gobierno:",
    opciones: [
        "Salvo que se haya optado por designar un Presidente del Pleno.",
        "Siempre y en todo caso, sin posibilidad de delegación.",
        "El Pleno siempre; la Junta de Gobierno puede delegarla."
    ],
    correcta: 0,
    explicacion: "El art. 14.b) Ley 22/2006 indica convocar y presidir Pleno y JG <strong>'salvo que se haya optado por la designación de un Presidente del Pleno, en los términos previstos en el artículo 10'</strong>. Madrid puede separar las figuras de Alcalde y Presidente del Pleno."
},

{
    texto: "El voto de calidad del Alcalde para decidir empates según el art. 21.c) LBRL se ejerce en:",
    opciones: [
        "Todos los órganos municipales colegiados en los que participe.",
        "Solo en el Pleno del Ayuntamiento.",
        "En el Pleno y la Junta de Gobierno exclusivamente."
    ],
    correcta: 0,
    explicacion: "El art. 21.c) LBRL y art. 14.c) Ley 22/2006 establecen que el Alcalde <strong>decide los empates con voto de calidad</strong> en <strong>todos los órganos municipales colegiados en los que participe</strong>: Pleno, JG, Comisiones que presida, etc."
},

{
    texto: "El nombramiento de los Tenientes de Alcalde corresponde según el art. 21.2 LBRL a:",
    opciones: [
        "Al Alcalde libremente.",
        "Al Pleno por mayoría simple.",
        "A la Junta de Gobierno Local entre sus miembros."
    ],
    correcta: 0,
    explicacion: "El art. 21.2 LBRL es claro: <strong>'Corresponde asimismo al Alcalde el nombramiento de los Tenientes de Alcalde'</strong>. Es una atribución personal del Alcalde que ejerce libremente, sin necesidad de ratificación del Pleno."
},

{
    texto: "El Alcalde puede dictar bandos según el art. 21.e) LBRL para:",
    opciones: [
        "Recordar y precisar los términos del cumplimiento de normas en vigor o para apelaciones a la población con motivo de acontecimientos especiales.",
        "Establecer nuevas obligaciones para los vecinos en materias de competencia municipal.",
        "Modificar las ordenanzas municipales en casos de urgencia."
    ],
    correcta: 0,
    explicacion: "El art. 21.e) LBRL: el Alcalde dicta bandos <strong>para recordar y precisar los términos del cumplimiento de normas en vigor</strong>, o para <strong>efectuar apelaciones a la población</strong> con motivo de acontecimientos especiales. No crean derecho nuevo; recuerdan el existente."
},

{
    texto: "Según el art. 14.f) Ley 22/2006, en casos de extraordinaria y urgente necesidad, el Alcalde:",
    opciones: [
        "Adopta las medidas necesarias y adecuadas, dando cuenta inmediata al Pleno.",
        "Debe convocar sesión extraordinaria del Pleno antes de actuar.",
        "Solicita autorización de la Junta de Gobierno para adoptar medidas."
    ],
    correcta: 0,
    explicacion: "El art. 14.f) Ley 22/2006 (similar art. 21.m LBRL) establece que el Alcalde puede <strong>adoptar las medidas necesarias y adecuadas en casos de extraordinaria y urgente necesidad</strong>, <strong>dando cuenta inmediata al Pleno</strong>. Es competencia personal en situaciones excepcionales."
},

{
    texto: "Según el art. 14.g) Ley 22/2006, el Alcalde ejerce:",
    opciones: [
        "La superior dirección del personal y la superior jefatura de la Policía Municipal.",
        "La jefatura directa del personal, nombrando y cesando a todo el personal municipal.",
        "La dirección de la Policía Municipal compartida con el Delegado de Seguridad."
    ],
    correcta: 0,
    explicacion: "El art. 14.g) Ley 22/2006 atribuye al Alcalde: <strong>superior dirección del personal al servicio de la Administración municipal</strong> y <strong>superior jefatura de la Policía Municipal</strong>. Es la máxima responsabilidad en personal y policía."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 5: ALCALDE - ATRIBUCIONES ESPECÍFICAS (15 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 21.a) LBRL, corresponde al Alcalde:",
    opciones: [
        "Dirigir el gobierno y la administración municipal.",
        "Ejecutar los acuerdos del Pleno bajo supervisión de la Junta de Gobierno.",
        "Gestionar los servicios municipales ordinarios."
    ],
    correcta: 0,
    explicacion: "El art. 21.a) LBRL y art. 14.3.a) Ley 22/2006 atribuyen al Alcalde <strong>'dirigir el gobierno y la administración municipal'</strong>. Es la atribución más amplia: dirección política (gobierno) y administrativa."
},

{
    texto: "La representación del Ayuntamiento corresponde según el art. 21.b) LBRL a:",
    opciones: [
        "Al Alcalde.",
        "Al Pleno como órgano de máxima representación política.",
        "A la Junta de Gobierno Local colectivamente."
    ],
    correcta: 0,
    explicacion: "El art. 21.b) LBRL atribuye al Alcalde <strong>'representar al ayuntamiento'</strong>. Es la representación legal e institucional del Ayuntamiento. El Pleno representa políticamente a los ciudadanos; el Alcalde representa jurídicamente al Ayuntamiento."
},

{
    texto: "Dirigir, inspeccionar e impulsar los servicios y obras municipales corresponde según el art. 21.d) LBRL a:",
    opciones: [
        "Al Alcalde.",
        "A la Junta de Gobierno Local como órgano de gestión.",
        "A cada Concejal delegado en su área respectiva."
    ],
    correcta: 0,
    explicacion: "El art. 21.d) LBRL atribuye al Alcalde <strong>'dirigir, inspeccionar e impulsar los servicios y obras municipales'</strong>. Es una atribución de impulso, dirección y control sobre toda la actividad municipal, sin perjuicio de delegaciones."
},

{
    texto: "El desarrollo de la gestión económica, disponer gastos, concertar operaciones de crédito y ordenar pagos corresponde al Alcalde:",
    opciones: [
        "De acuerdo con el Presupuesto aprobado y dentro de los límites de su competencia según la Ley de Haciendas Locales.",
        "Sin limitación alguna, al ser responsable de la gestión municipal.",
        "Previa autorización de la Junta de Gobierno en cada caso."
    ],
    correcta: 0,
    explicacion: "El art. 21.f) LBRL y art. 14.m) Ley 22/2006 atribuyen al Alcalde gestión económica <strong>de acuerdo con Presupuesto aprobado</strong>, disponer gastos <strong>dentro de límites de su competencia</strong>, concertar operaciones de crédito (con límites), ordenar pagos y rendir cuentas, conforme a Ley Haciendas Locales."
},

{
    texto: "La aprobación de la oferta de empleo público corresponde según el art. 21.g) LBRL a:",
    opciones: [
        "Al Alcalde, de acuerdo con el Presupuesto y plantilla aprobados por el Pleno.",
        "Al Pleno que aprueba tanto plantilla como oferta de empleo.",
        "A la Junta de Gobierno Local en materia de personal."
    ],
    correcta: 0,
    explicacion: "El art. 21.g) LBRL atribuye al Alcalde <strong>aprobar la oferta de empleo público de acuerdo con Presupuesto y plantilla aprobados por el Pleno</strong>, aprobar bases pruebas selección y distribuir retribuciones complementarias no fijas y periódicas."
},

{
    texto: "Según el art. 21.h) LBRL, el Alcalde desempeña la jefatura superior de todo el personal y acuerda su nombramiento y sanciones. Respecto a la separación de servicio de funcionarios y despido de laborales:",
    opciones: [
        "Las acuerda dando cuenta al Pleno en la primera sesión que celebre.",
        "Requiere autorización previa del Pleno en todo caso.",
        "Son competencia exclusiva del Pleno indelegable."
    ],
    correcta: 0,
    explicacion: "El art. 21.h) LBRL establece que el Alcalde acuerda nombramiento y sanciones, <strong>incluida separación del servicio de funcionarios y despido de laborales</strong>, <strong>dando cuenta al Pleno en la primera sesión</strong> que celebre en estos dos últimos casos. No necesita autorización previa."
},

{
    texto: "El ejercicio de la jefatura de la Policía Municipal corresponde según el art. 21.i) LBRL a:",
    opciones: [
        "Al Alcalde.",
        "Al Concejal Delegado de Seguridad.",
        "Al Jefe del Cuerpo de Policía Municipal."
    ],
    correcta: 0,
    explicacion: "El art. 21.i) LBRL atribuye al Alcalde <strong>'ejercer la jefatura de la Policía Municipal'</strong>. Es jefatura política superior de la Policía. Puede delegar gestión pero retiene la jefatura y responsabilidad."
},

{
    texto: "Las aprobaciones de instrumentos de planeamiento de desarrollo del planeamiento general no atribuidas al Pleno corresponden según el art. 21.j) LBRL a:",
    opciones: [
        "Al Alcalde, así como instrumentos de gestión urbanística y proyectos de urbanización.",
        "A la Junta de Gobierno Local por delegación.",
        "A la Comisión de Urbanismo del Pleno."
    ],
    correcta: 0,
    explicacion: "El art. 21.j) LBRL atribuye al Alcalde <strong>aprobaciones de instrumentos de planeamiento de desarrollo del planeamiento general</strong> no expresamente atribuidas al Pleno, así como <strong>instrumentos de gestión urbanística y proyectos de urbanización</strong>."
},

{
    texto: "El ejercicio de acciones judiciales y administrativas en materias de competencia del Alcalde corresponde a:",
    opciones: [
        "Al Alcalde, incluso cuando las hubiere delegado, y en caso de urgencia en materias del Pleno dando cuenta al mismo.",
        "Al órgano delegado si existe delegación previa.",
        "Al Pleno en todo caso por ser materias de representación."
    ],
    correcta: 0,
    explicacion: "El art. 21.k) LBRL atribuye al Alcalde ejercicio de acciones judiciales/administrativas en materias de su competencia, <strong>incluso cuando las hubiere delegado</strong>, y <strong>en caso de urgencia en materias del Pleno</strong>, dando cuenta al mismo en primera sesión para ratificación."
},

{
    texto: "La iniciativa para proponer al Pleno la declaración de lesividad en materias de competencia de la Alcaldía corresponde a:",
    opciones: [
        "Al Alcalde.",
        "Al Pleno de oficio.",
        "A la Junta de Gobierno Local."
    ],
    correcta: 0,
    explicacion: "El art. 21.l) LBRL atribuye al Alcalde <strong>'la iniciativa para proponer al Pleno la declaración de lesividad en materias de la competencia de la Alcaldía'</strong>. El Alcalde propone; el Pleno decide (art. 22.2.k)."
},

{
    texto: "Sancionar las faltas de desobediencia a su autoridad o por infracción de ordenanzas municipales corresponde al Alcalde:",
    opciones: [
        "Salvo en casos en que tal facultad esté atribuida a otros órganos.",
        "En todos los casos sin excepción.",
        "Previa ratificación de la Junta de Gobierno Local."
    ],
    correcta: 0,
    explicacion: "El art. 21.n) LBRL atribuye al Alcalde <strong>sancionar faltas de desobediencia a su autoridad o infracciones de ordenanzas</strong>, <strong>salvo en casos en que tal facultad esté atribuida a otros órganos</strong>. Hay potestad sancionadora general del Alcalde con excepciones legales."
},

{
    texto: "La aprobación de proyectos de obras y servicios corresponde al Alcalde según el art. 21.o) LBRL cuando:",
    opciones: [
        "Sea competente para su contratación o concesión y estén previstos en el presupuesto.",
        "En cualquier caso, aunque no estén presupuestados.",
        "Previa autorización del Pleno en todo caso."
    ],
    correcta: 0,
    explicacion: "El art. 21.o) LBRL atribuye al Alcalde <strong>aprobación de proyectos de obras y servicios</strong> cuando sea <strong>competente para su contratación o concesión</strong> y <strong>estén previstos en el presupuesto</strong>. Si no están presupuestados corresponde al Pleno."
},

{
    texto: "El otorgamiento de licencias corresponde al Alcalde según el art. 21.q) LBRL:",
    opciones: [
        "Salvo que las leyes sectoriales lo atribuyan expresamente al Pleno o a la Junta de Gobierno Local.",
        "En todos los casos sin excepción.",
        "Solo en licencias de obras menores; las mayores corresponden al Pleno."
    ],
    correcta: 0,
    explicacion: "El art. 21.q) LBRL atribuye al Alcalde <strong>'el otorgamiento de las licencias'</strong>, <strong>salvo que las leyes sectoriales lo atribuyan expresamente al Pleno o a la Junta de Gobierno Local</strong>. Competencia general del Alcalde con excepciones legales."
},

{
    texto: "Ordenar la publicación, ejecución y hacer cumplir los acuerdos del Ayuntamiento corresponde a:",
    opciones: [
        "Al Alcalde.",
        "Al Secretario General del Ayuntamiento.",
        "Al órgano que adoptó el acuerdo."
    ],
    correcta: 0,
    explicacion: "El art. 21.r) LBRL atribuye al Alcalde <strong>'ordenar la publicación, ejecución y hacer cumplir los acuerdos del Ayuntamiento'</strong>. Es función de impulso y garantía de ejecución de todas las decisiones municipales."
},

{
    texto: "Según el art. 14.h) Ley 22/2006, corresponde al Alcalde al inicio del mandato:",
    opciones: [
        "Acordar el número, denominación y competencias de las áreas en que se estructura la Administración municipal, en el marco de las normas orgánicas del Pleno.",
        "Proponer al Pleno la estructura de áreas para su aprobación.",
        "Ejecutar la estructura aprobada por la Junta de Gobierno."
    ],
    correcta: 0,
    explicacion: "El art. 14.h) Ley 22/2006 atribuye al Alcalde <strong>acordar al inicio del mandato el número, denominación y competencias de las áreas</strong> en que se estructura la Administración, <strong>en el marco de las normas orgánicas aprobadas por el Pleno</strong>. Es competencia del Alcalde dentro del marco normativo."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 6: ALCALDE - DELEGACIÓN DE COMPETENCIAS (8 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 21.3 LBRL, el Alcalde puede delegar el ejercicio de sus atribuciones, salvo:",
    opciones: [
        "Convocar y presidir Pleno/JG, decidir empates, concertar operaciones crédito, jefatura personal, separación/despido personal, y las de los párrafos a), e), j), k), l) y m).",
        "Solo puede delegar en la Junta de Gobierno, no en miembros individuales.",
        "Puede delegar todas sus competencias sin excepción."
    ],
    correcta: 0,
    explicacion: "El art. 21.3 LBRL establece que el Alcalde <strong>NO puede delegar</strong>: convocar y presidir Pleno/JG, decidir empates voto calidad, concertación operaciones crédito, jefatura superior personal, separación/despido personal, y las de párrafos a) (dirigir gobierno), e) (bandos), j) (planeamiento desarrollo-solo puede delegar en JG), k) (acciones judiciales), l) (proponer lesividad) y m) (medidas extraordinarias)."
},

{
    texto: "Según el art. 23.4 LBRL, el Alcalde puede delegar atribuciones en:",
    opciones: [
        "Los miembros de la Junta de Gobierno Local, los Tenientes de Alcalde donde no exista JG, y delegaciones especiales en cualquier Concejal.",
        "Solo en los Tenientes de Alcalde.",
        "Exclusivamente en la Junta de Gobierno Local como órgano colegiado."
    ],
    correcta: 0,
    explicacion: "El art. 23.4 LBRL permite al Alcalde delegar en: <strong>miembros de la JG</strong> (donde existe) o <strong>Tenientes de Alcalde</strong> (donde no existe JG), sin perjuicio de <strong>delegaciones especiales para cometidos específicos</strong> en <strong>favor de cualesquiera Concejales</strong>, aunque no pertenezcan a la JG."
},

{
    texto: "Según el art. 14.4 Ley 22/2006, el Alcalde puede delegar o desconcentrar competencias mediante:",
    opciones: [
        "Decreto, en la Junta de Gobierno, sus miembros, los demás Concejales y órganos directivos.",
        "Acuerdo del Pleno a propuesta del Alcalde.",
        "Resolución administrativa con eficacia inmediata."
    ],
    correcta: 0,
    explicacion: "El art. 14.4 Ley 22/2006 establece que el Alcalde puede <strong>delegar o desconcentrar mediante decreto</strong> las competencias en: <strong>JG, miembros de JG, demás Concejales y órganos directivos</strong>, con excepciones legales. El decreto es el instrumento formal de delegación."
},

{
    texto: "Las atribuciones del art. 14.3.a) (determinar programa acción política) y h) (acordar áreas municipales) del Alcalde:",
    opciones: [
        "Solo son delegables en la Junta de Gobierno.",
        "Son indelegables en todo caso.",
        "Pueden delegarse en cualquier Concejal con responsabilidades."
    ],
    correcta: 0,
    explicacion: "El art. 14.4 Ley 22/2006 establece que las atribuciones de los párrafos <strong>a) (determinar programa acción política, directrices, supervisión) y h) (acordar áreas)</strong> <strong>solo serán delegables en la Junta de Gobierno</strong>. Son estratégicas y solo admiten delegación en el órgano colegiado ejecutivo."
},

{
    texto: "Según el art. 21.3 LBRL, el Alcalde puede delegar en la Junta de Gobierno Local el ejercicio de las atribuciones del párrafo j) (planeamiento). Esto significa:",
    opciones: [
        "Que solo esta atribución es delegable en JG de entre las inicialmente indelegables.",
        "Que todas las atribuciones indelegables pueden delegarse en JG.",
        "Que el planeamiento debe aprobarse siempre en JG."
    ],
    correcta: 0,
    explicacion: "El art. 21.3 LBRL establece que <strong>podrá delegar en la JG el ejercicio de las atribuciones contempladas en el párrafo j)</strong> (aprobaciones instrumentos planeamiento desarrollo). Es una <strong>excepción</strong> específica a la indelegabilidad; las demás atribuciones indelegables no pueden delegarse ni siquiera en JG."
},

{
    texto: "Las delegaciones especiales del Alcalde en Concejales para cometidos específicos según el art. 23.4 LBRL:",
    opciones: [
        "Pueden realizarse en favor de cualesquiera Concejales, aunque no pertenezcan a la Junta de Gobierno.",
        "Solo pueden realizarse en miembros de la Junta de Gobierno.",
        "Requieren autorización previa del Pleno en cada caso."
    ],
    correcta: 0,
    explicacion: "El art. 23.4 LBRL permite delegaciones especiales <strong>'para cometidos específicos'</strong> en <strong>favor de cualesquiera Concejales</strong>, <strong>aunque no pertenecieran a aquélla</strong> (la JG). Son delegaciones específicas, no generales, en cualquier Concejal."
},

{
    texto: "Según el art. 14.4 Ley 22/2006, NO pueden delegarse las atribuciones de:",
    opciones: [
        "Convocar/presidir Pleno/JG (excepto si hay Presidente Pleno designado), decidir empates, nombrar/cesar miembros JG/Tenientes/Presidentes Distritos, dictar bandos y adoptar medidas extraordinarias.",
        "Solo convocar y presidir el Pleno.",
        "Ninguna; todas son delegables."
    ],
    correcta: 0,
    explicacion: "El art. 14.4 Ley 22/2006 enumera como <strong>indelegables</strong>: párrafos b) (convocar/presidir, salvo Presidente Pleno designado), c) (decidir empates), d) (nombrar/cesar miembros JG/Tenientes/Presidentes Distritos), e) (bandos, en cuanto a su adopción) y f) (medidas extraordinarias urgencia)."
},

{
    texto: "La firma de convenios según el art. 14.k) Ley 22/2006 corresponde:",
    opciones: [
        "Al Alcalde y es delegable.",
        "Al Alcalde y es indelegable.",
        "A la Junta de Gobierno por mayoría absoluta."
    ],
    correcta: 0,
    explicacion: "El art. 14.k) Ley 22/2006 atribuye al Alcalde <strong>'la firma de convenios'</strong>. No está en la lista de atribuciones indelegables del art. 14.4, por lo que <strong>es delegable</strong> conforme a las reglas generales de delegación."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 7: TENIENTES DE ALCALDE (7 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 23.3 LBRL, los Tenientes de Alcalde son designados por:",
    opciones: [
        "El Alcalde libremente de entre los miembros de la Junta de Gobierno Local o, donde no exista, de entre los Concejales.",
        "El Pleno a propuesta del Alcalde.",
        "La Junta de Gobierno Local entre sus miembros."
    ],
    correcta: 0,
    explicacion: "El art. 23.3 LBRL establece que los Tenientes de Alcalde son <strong>libremente designados y removidos</strong> por el Alcalde <strong>de entre los miembros de la JG</strong> y, <strong>donde ésta no exista, de entre los Concejales</strong>. Es designación libre del Alcalde."
},

{
    texto: "Según el art. 15 Ley 22/2006, el Alcalde de Madrid puede nombrar Tenientes de Alcalde de entre:",
    opciones: [
        "Los miembros de la Junta de Gobierno que ostenten la condición de Concejal.",
        "Cualquier miembro de la Junta de Gobierno, sea o no Concejal.",
        "Cualquier Concejal, pertenezca o no a la Junta de Gobierno."
    ],
    correcta: 0,
    explicacion: "El art. 15 Ley 22/2006 establece que el Alcalde puede nombrar Tenientes de Alcalde <strong>de entre los miembros de la Junta de Gobierno que ostenten la condición de Concejal</strong>. Los miembros no electos de la JG NO pueden ser Tenientes de Alcalde."
},

{
    texto: "Los Tenientes de Alcalde sustituyen al Alcalde según el art. 23.3 LBRL:",
    opciones: [
        "Por el orden de su nombramiento en casos de vacante, ausencia o enfermedad.",
        "Por votación de la Junta de Gobierno Local en cada caso.",
        "Por orden alfabético de apellidos."
    ],
    correcta: 0,
    explicacion: "El art. 23.3 LBRL y art. 15 Ley 22/2006 establecen que los Tenientes <strong>sustituyen al Alcalde por el orden de su nombramiento</strong> en casos de <strong>vacante, ausencia o enfermedad</strong>. Es sustitución automática según orden establecido en el nombramiento."
},

{
    texto: "¿Qué significa que los Tenientes sustituyen al Alcalde 'por el orden de su nombramiento'?",
    opciones: [
        "Que existe un orden de prelación: primero el Primer Teniente, luego el Segundo, etc., que determina quién sustituye en cada momento.",
        "Que todos los Tenientes sustituyen simultáneamente al Alcalde formando un órgano colegiado.",
        "Que el orden lo decide la Junta de Gobierno cada vez que hay ausencia."
    ],
    correcta: 0,
    explicacion: "La expresión <strong>'por el orden de su nombramiento'</strong> establece un <strong>orden de prelación o sucesión</strong>: hay un Primer Teniente de Alcalde, Segundo, Tercero, etc. En caso de ausencia del Alcalde, sustituye el primero; si éste también falta, el segundo; y así sucesivamente."
},

{
    texto: "Los Tenientes de Alcalde sustituyen al Alcalde 'en los casos de vacante, ausencia o enfermedad'. ¿Qué significa 'vacante'?",
    opciones: [
        "Que el puesto de Alcalde queda sin titular por fallecimiento, renuncia, pérdida condición de Concejal o sentencia judicial firme.",
        "Que el Alcalde está de vacaciones.",
        "Que el Alcalde delega temporalmente sus funciones."
    ],
    correcta: 0,
    explicacion: "<strong>Vacante</strong> significa que el cargo de Alcalde queda sin titular de forma definitiva por: <strong>fallecimiento, renuncia, pérdida de la condición de Concejal, incapacidad declarada judicialmente, sentencia judicial firme que lo inhabilite</strong>. Es cesación definitiva, no temporal como ausencia."
},

{
    texto: "Cuando un Teniente de Alcalde sustituye al Alcalde por vacante del cargo:",
    opciones: [
        "Asume todas las funciones del Alcalde hasta que se elija nuevo Alcalde.",
        "Solo asume las funciones de gestión ordinaria, no las políticas.",
        "Convoca automáticamente elecciones municipales."
    ],
    correcta: 0,
    explicacion: "Cuando sustituye por <strong>vacante</strong>, el Teniente <strong>asume todas las funciones y atribuciones del Alcalde</strong> con plenitud hasta que se elija nuevo Alcalde. No es una sustitución limitada; es plena pero provisional hasta la elección de nuevo Alcalde por el Pleno."
},

{
    texto: "El nombramiento y cese de los Tenientes de Alcalde por el Alcalde:",
    opciones: [
        "Se realiza libremente sin necesidad de ratificación del Pleno, aunque debe darse cuenta al Pleno.",
        "Requiere aprobación previa del Pleno por mayoría simple.",
        "Debe ser ratificado por la Junta de Gobierno Local."
    ],
    correcta: 0,
    explicacion: "El art. 23.3 LBRL establece que son <strong>'libremente designados y removidos'</strong> por el Alcalde. El art. 23.1 LBRL indica que los nombramientos de miembros de JG se dan cuenta al Pleno. Es <strong>libre designación</strong> del Alcalde; el Pleno no interviene, solo toma conocimiento."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 8: JUNTA DE GOBIERNO LOCAL - COMPOSICIÓN Y NATURALEZA (10 preguntas)
// ═══════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 23.1 LBRL, la Junta de Gobierno Local se integra por:",
    opciones: [
        "El Alcalde y un número de Concejales no superior al tercio del número legal de los mismos, nombrados libremente por el Alcalde.",
        "El Alcalde y todos los Tenientes de Alcalde.",
        "El Alcalde y los portavoces de todos los grupos políticos municipales."
    ],
    correcta: 0,
    explicacion: "El art. 23.1 LBRL establece: <strong>la JG se integra por el Alcalde</strong> y un <strong>número de Concejales no superior al tercio del número legal</strong>, <strong>nombrados y separados libremente por el Alcalde</strong>, dando cuenta al Pleno. En Madrid (57 Concejales): máximo 19 miembros (57/3=19)."
},

{
    texto: "En el Ayuntamiento de Madrid con 57 Concejales, el número máximo de miembros de la Junta de Gobierno (incluido el Alcalde) es:",
    opciones: [
        "19 miembros.",
        "20 miembros.",
        "18 miembros."
    ],
    correcta: 0,
    explicacion: "El art. 23.1 LBRL establece: <strong>Alcalde + número no superior al tercio del número legal de Concejales</strong>. En Madrid: 57 Concejales / 3 = 19. Por tanto: Alcalde + hasta 19 Concejales = máximo <strong>19 miembros totales</strong> (el Alcalde también es Concejal y cuenta en el tercio)."
},

{
    texto: "Según el art. 16.2 Ley 22/2006, el Alcalde de Madrid puede nombrar como miembros de la Junta de Gobierno a:",
    opciones: [
        "Personas que no ostenten la condición de Concejales, en los términos de la legislación básica reguladora del gobierno local.",
        "Solo Concejales electos, sin excepciones.",
        "Concejales y personal funcionario con habilitación nacional."
    ],
    correcta: 0,
    explicacion: "El art. 16.2 Ley 22/2006 permite nombrar como miembros de JG <strong>personas que no ostenten la condición de Concejales</strong>, en términos previstos en legislación básica (art. 130 LBRL: máximo 1/3 de miembros JG pueden ser no electos). Sus derechos económicos los establece el Pleno."
},

{
    texto: "Los miembros de la Junta de Gobierno que no son Concejales según el art. 16.2 Ley 22/2006:",
    opciones: [
        "Pueden asistir a sesiones del Pleno e intervenir en debates, sin perjuicio de facultades que corresponden al Presidente.",
        "No pueden asistir a sesiones del Pleno bajo ningún concepto.",
        "Pueden asistir al Pleno pero sin derecho a intervenir."
    ],
    correcta: 0,
    explicacion: "El art. 16.2 Ley 22/2006 (igual que art. 9.1) establece que <strong>los miembros de JG podrán asistir a sesiones del Pleno e intervenir en los debates</strong>, sin perjuicio de facultades del Presidente. Asisten e intervienen pero <strong>no votan</strong> (no son Concejales)."
},

{
    texto: "Según la Ley 22/2006 (art. 16.1), la Junta de Gobierno es:",
    opciones: [
        "El órgano ejecutivo de dirección política y administrativa.",
        "Un órgano consultivo del Alcalde.",
        "El órgano de máxima representación política de los ciudadanos."
    ],
    correcta: 0,
    explicacion: "El art. 16.1 Ley 22/2006 define: <strong>'La Junta de Gobierno es el órgano ejecutivo de dirección política y administrativa'</strong>. No es representativo (eso es el Pleno) ni consultivo; es el <strong>órgano colegiado ejecutivo</strong> del gobierno municipal."
},

{
    texto: "Según el art. 16.3 Ley 22/2006, la Junta de Gobierno responde políticamente ante el Pleno de su gestión:",
    opciones: [
        "De forma solidaria, sin perjuicio de la responsabilidad directa de cada miembro por su gestión.",
        "Solo el Alcalde responde; los demás miembros no tienen responsabilidad política.",
        "Cada miembro responde individualmente pero no existe responsabilidad solidaria."
    ],
    correcta: 0,
    explicacion: "El art. 16.3 Ley 22/2006 establece: la JG <strong>responde políticamente ante el Pleno</strong> de su gestión <strong>de forma solidaria</strong>, sin perjuicio de la <strong>responsabilidad directa de cada uno de sus miembros por su gestión</strong>. Doble responsabilidad: colegiada (solidaria) e individual."
},

{
    texto: "Según el art. 16.4 Ley 22/2006, la Secretaría de la Junta de Gobierno corresponde a:",
    opciones: [
        "Uno de sus miembros, designado por el Alcalde, que redacta actas y certifica acuerdos.",
        "El Secretario General del Ayuntamiento.",
        "Un funcionario habilitado nacional designado por el Alcalde."
    ],
    correcta: 0,
    explicacion: "El art. 16.4 Ley 22/2006 establece: <strong>la Secretaría de la JG corresponderá a uno de sus miembros</strong>, <strong>designado por el Alcalde</strong>, quien redactará actas de sesiones y certificará sobre acuerdos. Es un miembro de la JG, no el Secretario General del Ayuntamiento."
},

{
    texto: "Las sesiones de la Junta de Gobierno son según el art. 16.5 Ley 22/2006:",
    opciones: [
        "Secretas, aunque podrán celebrarse sesiones públicas por acuerdo de la propia Junta cuando la naturaleza de los asuntos lo haga procedente.",
        "Públicas siempre.",
        "Secretas sin excepciones."
    ],
    correcta: 0,
    explicacion: "El art. 16.5 Ley 22/2006 establece: <strong>sesiones de JG son secretas</strong>; no obstante <strong>podrán celebrarse sesiones públicas por acuerdo de la propia Junta</strong> cuando la naturaleza de los asuntos a debatir así lo haga procedente. Regla: secretas. Excepción: públicas si JG lo acuerda."
},

{
    texto: "A las sesiones de la Junta de Gobierno pueden asistir según el art. 16.5 Ley 22/2006:",
    opciones: [
        "Los Concejales no pertenecientes a la JG y los titulares de órganos directivos, cuando sean convocados expresamente por el Alcalde.",
        "Solo los miembros de la Junta de Gobierno.",
        "Todos los Concejales tienen derecho a asistir."
    ],
    correcta: 0,
    explicacion: "El art. 16.5 Ley 22/2006 establece que a las sesiones de JG <strong>podrán asistir</strong> los <strong>Concejales no pertenecientes a la JG</strong> y los <strong>titulares de órganos directivos</strong>, en ambos supuestos <strong>cuando sean convocados expresamente por el Alcalde</strong>. No es asistencia de derecho; es por convocatoria."
},

{
    texto: "El nombramiento y separación de los miembros de la Junta de Gobierno se realiza por:",
    opciones: [
        "El Alcalde libremente, dando cuenta al Pleno.",
        "El Pleno a propuesta del Alcalde por mayoría simple.",
        "El Alcalde previa autorización de la Junta de Gobierno."
    ],
    correcta: 0,
    explicacion: "El art. 23.1 LBRL y art. 16.2 Ley 22/2006 establecen que corresponde al Alcalde <strong>nombrar y separar libremente</strong> a los miembros de la JG, <strong>dando cuenta al Pleno</strong>. Es competencia personal del Alcalde; el Pleno solo toma conocimiento."
}

,

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 9: JUNTA DE GOBIERNO - ATRIBUCIONES (15 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 23.2 LBRL, corresponde a la Junta de Gobierno Local:",
    opciones: [
        "La asistencia al Alcalde en el ejercicio de sus atribuciones, y las que el Alcalde u otro órgano le delegue o le atribuyan las leyes.",
        "Exclusivamente las atribuciones que expresamente le delegue el Alcalde.",
        "Las mismas atribuciones que el Pleno pero con carácter ejecutivo."
    ],
    correcta: 0,
    explicacion: "El art. 23.2 LBRL establece dos tipos de competencias de la JG: <strong>(a) asistencia al Alcalde en ejercicio de sus atribuciones</strong> (competencia propia de colaboración), y <strong>(b) atribuciones que el Alcalde u otro órgano municipal le delegue o le atribuyan las leyes</strong>."
},

{
    texto: "Según el art. 17.a) Ley 22/2006, la Junta de Gobierno aprueba los proyectos de ordenanzas y reglamentos:",
    opciones: [
        "Con excepción de las normas reguladoras del Pleno y sus Comisiones.",
        "En todos los casos sin excepción.",
        "Solo los reglamentos de naturaleza orgánica."
    ],
    correcta: 0,
    explicacion: "El art. 17.a) Ley 22/2006 atribuye a la JG aprobar proyectos de ordenanzas, reglamentos (incluidos orgánicos), <strong>con excepción de las normas reguladoras del Pleno y sus Comisiones</strong>, y proyectos de estatutos de OO.AA., EPE, sociedades y fundaciones."
},

{
    texto: "La aprobación de planes, programas y directrices vinculantes para todos los órganos ejecutivos del Ayuntamiento corresponde según la Ley 22/2006 a:",
    opciones: [
        "La Junta de Gobierno.",
        "El Alcalde exclusivamente.",
        "El Pleno del Ayuntamiento."
    ],
    correcta: 0,
    explicacion: "El art. 17.b) Ley 22/2006 atribuye a la JG <strong>adoptar planes, programas y directrices vinculantes para todos los órganos ejecutivos, organismos y empresas</strong> del Ayuntamiento. Son instrumentos de planificación y dirección del órgano colegiado ejecutivo."
},

{
    texto: "La aprobación del proyecto de presupuesto corresponde según el art. 17.c) Ley 22/2006 a:",
    opciones: [
        "La Junta de Gobierno, que lo eleva al Pleno para su aprobación definitiva.",
        "El Alcalde directamente.",
        "El Pleno exclusivamente desde su inicio."
    ],
    correcta: 0,
    explicacion: "El art. 17.c) Ley 22/2006 atribuye a la JG <strong>'la aprobación del proyecto de presupuesto'</strong>. La JG prepara el proyecto; luego el Pleno lo aprueba definitivamente (art. 11.h). Es un sistema de elaboración ejecutiva y aprobación representativa."
},

{
    texto: "Las aprobaciones de instrumentos de planeamiento urbanístico no atribuidas expresamente al Pleno corresponden según la Ley 22/2006 a:",
    opciones: [
        "La Junta de Gobierno, así como instrumentos de gestión urbanística y proyectos de urbanización.",
        "Al Alcalde en todos los casos.",
        "A la Comisión de Urbanismo del Pleno."
    ],
    correcta: 0,
    explicacion: "El art. 17.d) Ley 22/2006 atribuye a la JG: sometimiento a información pública de Avances, <strong>aprobaciones de instrumentos de planeamiento urbanístico no atribuidas expresamente al Pleno</strong>, instrumentos de gestión urbanística y proyectos de urbanización."
},

{
    texto: "Las competencias de gestión en materia de contratos, concesiones y patrimonio corresponden según el art. 17.e) Ley 22/2006 a:",
    opciones: [
        "La Junta de Gobierno, que también designa miembros y presidentes de mesas de contratación.",
        "Al Alcalde exclusivamente.",
        "Al Pleno en todos los casos."
    ],
    correcta: 0,
    explicacion: "El art. 17.e) Ley 22/2006 atribuye a la JG <strong>competencias de gestión en materia de contratos, concesiones y patrimonio</strong>, así como <strong>designación de miembros de mesas de contratación y sus presidentes</strong>. Son competencias ejecutivas de contratación y patrimonio."
},

{
    texto: "Según el art. 17.g) Ley 22/2006, la aprobación de gastos de carácter plurianual corresponde a:",
    opciones: [
        "La Junta de Gobierno.",
        "El Pleno exclusivamente.",
        "El Alcalde con informe del Interventor."
    ],
    correcta: 0,
    explicacion: "El art. 17.g) Ley 22/2006 atribuye a la JG: desarrollo de gestión económica y, en particular, <strong>aprobación de gastos de carácter plurianual</strong>, ampliación de anualidades, modificación de porcentajes de gastos plurianuales y concertación de operaciones de crédito."
},

{
    texto: "Las modificaciones presupuestarias según el art. 17.g) Ley 22/2006 corresponden a:",
    opciones: [
        "La Junta de Gobierno, salvo concesión de crédito extraordinario o suplemento de crédito que corresponde al Pleno.",
        "El Pleno en todos los casos.",
        "El Alcalde hasta el 10% del presupuesto."
    ],
    correcta: 0,
    explicacion: "El art. 17.g) Ley 22/2006 atribuye a la JG <strong>aprobación de todas las modificaciones presupuestarias</strong>, <strong>salvo las que se refieran a crédito extraordinario o suplemento de crédito</strong> que corresponderá en todo caso al Pleno (por ser incrementos nuevos del presupuesto)."
},

{
    texto: "Establecer la organización y estructura de la Administración municipal ejecutiva corresponde según el art. 17.h) Ley 22/2006 a:",
    opciones: [
        "La Junta de Gobierno, en el marco de las normas orgánicas aprobadas por el Pleno.",
        "Al Alcalde exclusivamente.",
        "Al Pleno directamente."
    ],
    correcta: 0,
    explicacion: "El art. 17.h) Ley 22/2006 atribuye a la JG <strong>establecer organización y estructura de la Administración municipal ejecutiva</strong>, en el marco de normas orgánicas del Pleno, y <strong>nombramiento y cese de titulares de órganos directivos</strong>. El Pleno fija marco; JG organiza."
},

{
    texto: "El ejercicio de la potestad sancionadora y la concesión de licencias corresponde según el art. 17.k) Ley 22/2006 a:",
    opciones: [
        "La Junta de Gobierno.",
        "Al Alcalde exclusivamente como autoridad ejecutiva.",
        "A cada Concejal delegado en su área."
    ],
    correcta: 0,
    explicacion: "El art. 17.k) Ley 22/2006 atribuye a la JG <strong>'el ejercicio de la potestad sancionadora y la concesión de licencias'</strong>. Es una atribución general; el Alcalde también tiene potestad sancionadora (art. 21.n LBRL) y puede otorgar licencias (art. 21.q LBRL) salvo que leyes sectoriales las atribuyan a Pleno o JG."
},

{
    texto: "Las modificaciones de la plantilla de personal según el art. 17.m) Ley 22/2006 corresponden a:",
    opciones: [
        "La Junta de Gobierno, de acuerdo con las normas de las bases de ejecución del presupuesto.",
        "Al Pleno exclusivamente.",
        "Al Alcalde como jefe superior del personal."
    ],
    correcta: 0,
    explicacion: "El art. 17.m) Ley 22/2006 atribuye a la JG <strong>modificaciones de plantilla de personal de acuerdo con normas bases de ejecución presupuesto</strong>. El Pleno aprueba la plantilla inicialmente (art. 22.2.i LBRL); la JG puede modificarla según bases presupuestarias."
},

{
    texto: "La aprobación de la relación de puestos de trabajo según el art. 17.m) Ley 22/2006 corresponde a:",
    opciones: [
        "La Junta de Gobierno.",
        "Al Pleno del Ayuntamiento.",
        "Al Alcalde por delegación."
    ],
    correcta: 0,
    explicacion: "El art. 17.m) Ley 22/2006 atribuye a la JG <strong>aprobar relación de puestos de trabajo</strong>. IMPORTANTE: la LBRL (art. 22.2.i) atribuye al Pleno aprobar plantilla y RPT; pero la Ley 22/2006 (especial para Madrid) atribuye la RPT a la JG, manteniendo solo la plantilla en el Pleno."
},

{
    texto: "La separación del servicio de funcionarios y el despido de personal laboral corresponden según el art. 17.m) Ley 22/2006 a:",
    opciones: [
        "La Junta de Gobierno, sin perjuicio de lo previsto en legislación básica sobre funcionarios con habilitación nacional.",
        "Al Alcalde exclusivamente.",
        "Al Pleno por tratarse de decisiones graves."
    ],
    correcta: 0,
    explicacion: "El art. 17.m) Ley 22/2006 atribuye a la JG <strong>separación del servicio de funcionarios</strong> y <strong>despido del personal laboral</strong>, <strong>sin perjuicio de lo previsto en legislación básica sobre funcionarios con habilitación de carácter nacional</strong> (que tienen régimen especial)."
},

{
    texto: "Según el art. 17.2 Ley 22/2006, la Junta de Gobierno puede delegar o desconcentrar sus competencias:",
    opciones: [
        "En alguno de sus miembros, demás Concejales y órganos directivos, excepto las de los párrafos a), b), c), d), h) e i).",
        "En cualquier órgano sin excepciones.",
        "Solo en sus miembros, no en otros Concejales."
    ],
    correcta: 0,
    explicacion: "El art. 17.2 Ley 22/2006 permite a la JG <strong>delegar o desconcentrar en sus miembros, demás Concejales y órganos directivos</strong> sus funciones, <strong>excepto</strong>: a) proyectos normativos, b) planes/programas, c) proyecto presupuesto, d) planeamiento urbanístico, h) organización Administración e i) acciones judiciales."
},

{
    texto: "Las competencias de la Junta de Gobierno previstas en el art. 17.1.a) (proyectos normativos), b) (planes), c) (presupuesto), d) (planeamiento), h) (organización) e i) (acciones judiciales) son:",
    opciones: [
        "Indelegables por la Junta de Gobierno según el art. 17.2 Ley 22/2006.",
        "Delegables en sus miembros.",
        "Delegables en cualquier Concejal."
    ],
    correcta: 0,
    explicacion: "El art. 17.2 Ley 22/2006 establece que la JG puede delegar/desconcentrar sus funciones <strong>con excepción de las previstas en párrafos a), b), c), d), h) e i)</strong>. Son competencias estratégicas del órgano colegiado ejecutivo que no admiten delegación individual."
}

    ,
// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 10: PREGUNTAS ULTRA-DIFÍCILES NIVEL EXAMEN SERIO (30 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "El art. 22.2.m) LBRL atribuye al Pleno la concertación de operaciones de crédito que excedan del 10% de recursos ordinarios. Las operaciones de tesorería le corresponderán cuando:",
    opciones: [
        "El importe acumulado de las operaciones vivas en cada momento supere el 15% de los ingresos corrientes liquidados en el ejercicio anterior.",
        "El importe acumulado supere el 10% de los recursos ordinarios del presupuesto vigente.",
        "Sean superiores a 6 meses de duración independientemente de su cuantía."
    ],
    correcta: 0,
    explicacion: "El art. 22.2.m) LBRL establece una <strong>excepción específica para operaciones de tesorería</strong>: corresponden al Pleno cuando <strong>el importe acumulado de las operaciones vivas en cada momento supere el 15%</strong> de los <strong>ingresos corrientes liquidados en el ejercicio anterior</strong>. No es el 10% ni del presupuesto vigente; es criterio distinto por ser tesorería."
},

{
    texto: "Según el art. 21.3 LBRL, el Alcalde NO puede delegar la jefatura superior de todo el personal. Sin embargo, el art. 21.h) LBRL le atribuye acordar nombramiento y sanciones del personal. Esta atribución de nombramiento y sanciones:",
    opciones: [
        "Es delegable al ser distinta de la jefatura superior indelegable.",
        "Es indelegable por formar parte de la jefatura superior del personal.",
        "Solo es delegable en la Junta de Gobierno, no en otros órganos."
    ],
    correcta: 0,
    explicacion: "El art. 21.3 LBRL prohíbe delegar <strong>'la jefatura superior de todo el personal'</strong>, pero NO prohíbe delegar las funciones concretas de <strong>nombramiento y sanciones</strong>. Son atribuciones <strong>derivadas pero separables</strong> de la jefatura superior. La jefatura es posición institucional (indelegable); las funciones ejecutivas derivadas (nombrar, sancionar) SÍ son delegables."
},

{
    texto: "El art. 23.1 LBRL establece que la JG se integra por el Alcalde y 'un número de Concejales no superior al tercio del número legal de los mismos'. En un municipio con 57 Concejales, si el Alcalde nombra 19 Concejales (además de él mismo) para la JG:",
    opciones: [
        "Es ilegal porque superaría el tercio (57/3=19, y con el Alcalde serían 20).",
        "Es legal porque el Alcalde ya está incluido en el cómputo del tercio, siendo 19 el máximo total.",
        "Es legal porque el límite del tercio no incluye al Alcalde en el cálculo."
    ],
    correcta: 1,
    explicacion: "El art. 23.1 LBRL dice <strong>'el Alcalde y un número de Concejales no superior al tercio'</strong>. Interpretación mayoritaria: el <strong>Alcalde ES Concejal</strong>, por lo que el tercio se calcula sobre el total y el Alcalde ya está dentro. 57/3=19 → <strong>máximo 19 miembros totales</strong> (incluido Alcalde). Nombrar Alcalde + 19 más = 20 = ILEGAL. Legal: Alcalde + 18 más."
},

{
    texto: "El Alcalde de Madrid convoca una sesión extraordinaria del Pleno para las 10:00 horas. A las 10:15 solo están presentes 25 Concejales (incluido el Alcalde). El Alcalde decide:",
    opciones: [
        "Suspender la sesión por no alcanzar quórum, que requiere mayoría absoluta (29 Concejales).",
        "Constituir válidamente el Pleno en segunda convocatoria (30 minutos después) con los presentes, sea cual sea su número.",
        "Esperar a que llegue un Concejal más para alcanzar quórum de mayoría simple (la mitad de 57 = 28,5 → 29)."
    ],
    correcta: 1,
    explicacion: "Según normativa de funcionamiento de órganos colegiados aplicable a entidades locales, las sesiones extraordinarias se constituyen en <strong>primera convocatoria con mayoría absoluta</strong> de miembros. Si no hay quórum, <strong>en segunda convocatoria</strong> (típicamente 30 minutos después) se constituye <strong>con los miembros presentes</strong> sea cual sea su número (quórum mínimo puede ser 1/3). Con 25 presentes en segunda convocatoria = VÁLIDO."
},

{
    texto: "El art. 21.f) LBRL permite al Alcalde concertar operaciones de crédito 'con exclusión de las contempladas en el artículo 158.5 de la Ley Reguladora de las Haciendas Locales'. El art. 158.5 LRHL se refiere a:",
    opciones: [
        "Operaciones de crédito a largo plazo superiores a un ejercicio presupuestario.",
        "Operaciones de crédito que requieran el aval del Estado o de la Comunidad Autónoma.",
        "Operaciones de crédito que necesiten autorización de órgano superior por superar determinados umbrales."
    ],
    correcta: 0,
    explicacion: "El art. 158.5 LRHL (antiguo, derogado por normativa posterior pero referenciado en LBRL) se refería a <strong>operaciones de crédito a largo plazo</strong>. La LBRL actual excluye de la competencia del Alcalde las operaciones que <strong>no estén previstas en presupuesto o superen ciertos límites</strong>. Interpretación: el Alcalde puede operaciones ordinarias/tesorería; las <strong>estructurales o a largo plazo extraordinarias</strong> corresponden al Pleno."
},

{
    texto: "El art. 22.2.p) LBRL atribuye al Pleno 'aquellas otras que deban corresponder al Pleno por exigir su aprobación una mayoría especial'. ¿Qué implica esta cláusula?",
    opciones: [
        "Que el Pleno tiene competencia residual sobre todas las materias no atribuidas expresamente a otros órganos.",
        "Que cualquier materia que por ley requiera mayoría absoluta, 2/3 o 3/5 debe ser aprobada por el Pleno aunque esté atribuida a otro órgano.",
        "Que el Reglamento Orgánico puede crear nuevas competencias del Pleno si establece mayorías especiales para ellas."
    ],
    correcta: 1,
    explicacion: "El art. 22.2.p) LBRL establece una <strong>cláusula de atracción competencial</strong>: si alguna norma legal exige para una materia <strong>mayoría especial</strong> (absoluta, 2/3, 3/5), esa materia <strong>debe decidirse en el Pleno</strong> aunque orgánicamente pudiera corresponder a otro órgano. Razón: las mayorías especiales requieren el <strong>órgano de representación política</strong> (Pleno)."
},

{
    texto: "El Alcalde de Madrid ha delegado en un Concejal no miembro de la Junta de Gobierno la competencia de 'otorgamiento de licencias de terrazas'. Posteriormente, el Concejal delegado otorga una licencia ilegal. ¿Quién es competente para declarar la lesividad del acto?",
    opciones: [
        "El Pleno, porque la declaración de lesividad siempre corresponde al Pleno (art. 22.2.k LBRL).",
        "El Alcalde, porque aunque delegó la competencia de otorgar, retiene la de revisar (art. 21.k LBRL) y proponer lesividad (art. 21.l).",
        "El propio Concejal delegado que otorgó la licencia, en ejercicio de la competencia delegada."
    ],
    correcta: 0,
    explicacion: "El art. 22.2.k) LBRL atribuye al <strong>Pleno 'la declaración de lesividad de los actos del Ayuntamiento'</strong>. Es competencia <strong>indelegable del Pleno</strong> (art. 22.4). El Alcalde puede <strong>proponer</strong> (art. 21.l), pero <strong>solo el Pleno puede declarar</strong>. No importa quién dictó el acto (Alcalde, delegado, JG): la lesividad siempre la declara el Pleno."
},

{
    texto: "Un Teniente de Alcalde está sustituyendo al Alcalde por enfermedad de éste. Durante la sustitución, ¿puede el Teniente ejercer la atribución del Alcalde de 'nombrar y cesar a los miembros de la Junta de Gobierno' (art. 14.d Ley 22/2006)?",
    opciones: [
        "Sí, porque la sustitución es plena y el Teniente asume todas las funciones del Alcalde.",
        "No, porque el nombramiento de miembros de la JG es una atribución personalísima del Alcalde no ejercitable por sustituto.",
        "Sí, pero solo para ceses, no para nombramientos que requieren la voluntad personal del titular."
    ],
    correcta: 0,
    explicacion: "La <strong>sustitución del Alcalde</strong> por Teniente de Alcalde (art. 23.3 LBRL, art. 15 Ley 22/2006) en casos de vacante, ausencia o enfermedad es <strong>plena y completa</strong>. El Teniente <strong>asume todas las funciones y atribuciones</strong> del Alcalde, incluidas las de nombramiento y cese de miembros JG. No hay atribuciones 'personalísimas' exceptuadas. Sustitución ≠ delegación; es <strong>subrogación total</strong>."
},

{
    texto: "El art. 11.1.c) Ley 22/2006 establece que tienen naturaleza orgánica (entre otros reglamentos) 'la regulación de la organización política y administrativa del Ayuntamiento'. La Junta de Gobierno aprueba un proyecto de reglamento que modifica la estructura de las áreas administrativas. ¿Puede hacerlo?",
    opciones: [
        "Sí, porque el art. 17.a) Ley 22/2006 atribuye a la JG aprobar proyectos de reglamentos orgánicos.",
        "No, porque el art. 17.a) excluye de la competencia de la JG las 'normas reguladoras del Pleno y sus Comisiones', y la organización política es competencia del Pleno.",
        "Sí, porque aunque sea orgánico, la estructura administrativa ejecutiva corresponde a la JG (art. 17.h) y puede regularla."
    ],
    correcta: 2,
    explicacion: "Distinción clave: <strong>organización política ≠ organización administrativa ejecutiva</strong>. El art. 17.a) Ley 22/2006 excluye solo <strong>'normas reguladoras del Pleno y sus Comisiones'</strong>. El art. 17.h) atribuye a la JG <strong>'establecer organización y estructura de la Administración municipal ejecutiva'</strong>. Áreas administrativas = organización ejecutiva = <strong>competencia JG</strong>. Solo órganos políticos (Pleno, Alcalde, JG) van al Pleno."
},

{
    texto: "El Pleno aprueba una ordenanza fiscal con 28 votos a favor, 26 en contra y 3 abstenciones (total 57 Concejales presentes). ¿Es válida la aprobación?",
    opciones: [
        "No, porque requiere mayoría absoluta (29 votos) al ser materia tributaria del art. 22.2.e) LBRL.",
        "Sí, porque la mayoría simple de los presentes (más de 28,5) es suficiente para ordenanzas.",
        "No, porque las abstenciones se computan como votos negativos en materias tributarias."
    ],
    correcta: 1,
    explicacion: "El art. 22.2.e) LBRL atribuye al Pleno <strong>'la determinación de los recursos propios de carácter tributario'</strong> (crear tributos), pero <strong>NO exige mayoría especial para ordenanzas fiscales</strong> (regular tributos ya existentes). El art. 11.2 Ley 22/2006 exige mayoría absoluta solo para reglamentos <strong>orgánicos</strong> y otras materias específicas. Ordenanzas fiscales = <strong>mayoría simple</strong>. 28 votos de 57 presentes = VÁLIDO."
},

{
    texto: "El Alcalde adopta mediante decreto una medida administrativa. Un Concejal solicita al Secretario General certificación del decreto. El Secretario:",
    opciones: [
        "Debe expedir la certificación porque cualquier Concejal tiene derecho a información sobre documentos municipales.",
        "Puede denegar la certificación si el decreto contiene datos sensibles, aunque se trate de un Concejal.",
        "Debe consultar al Alcalde si autoriza la expedición de la certificación."
    ],
    correcta: 0,
    explicacion: "Los <strong>Concejales tienen derecho pleno a la información</strong> sobre todos los expedientes y documentación municipal para ejercer sus funciones (art. 77 LBRL). El Secretario General <strong>debe expedir certificación</strong> de documentos municipales a los Concejales sin necesidad de autorización del Alcalde. Excepción: datos especialmente protegidos (intimidad art. 18 CE) con régimen específico, pero no es norma general."
},

{
    texto: "En Madrid, el Alcalde puede nombrar como miembros de la Junta de Gobierno a personas que no ostenten la condición de Concejales (art. 16.2 Ley 22/2006). Estos miembros no electos:",
    opciones: [
        "No pueden superar 1/3 del número de miembros de la Junta de Gobierno.",
        "No pueden superar 1/3 del número legal de Concejales del Ayuntamiento.",
        "No tienen límite numérico siempre que haya al menos un Concejal además del Alcalde."
    ],
    correcta: 0,
    explicacion: "La legislación básica (art. 130 LBRL modificado) establece que los <strong>miembros no electos de la JG no pueden superar 1/3 del número de miembros de la Junta</strong>, no del total de Concejales. Si JG tiene 15 miembros: máximo 5 no electos. Si tiene 18: máximo 6 no electos. Es sobre el tamaño de la JG, no del Pleno."
},

{
    texto: "El art. 21.h) LBRL atribuye al Alcalde 'la separación del servicio de los funcionarios de la Corporación', dando cuenta al Pleno. El art. 99.1 LBRL establece un régimen especial para funcionarios con habilitación de carácter nacional. ¿Qué implica esta reserva 'sin perjuicio de lo dispuesto en el art. 99.1'?",
    opciones: [
        "Que los funcionarios con habilitación nacional no pueden ser separados por el Alcalde bajo ningún concepto.",
        "Que la separación de funcionarios con habilitación nacional tiene un procedimiento especial con garantías reforzadas establecido en legislación específica.",
        "Que la separación de estos funcionarios requiere informe preceptivo y vinculante de la Comunidad Autónoma."
    ],
    correcta: 1,
    explicacion: "El art. 99.1 LBRL establece que los <strong>funcionarios con habilitación de carácter nacional</strong> (Secretarios, Interventores, Tesoreros) tienen <strong>régimen jurídico específico estatal</strong> en cuanto a selección, provisión y <strong>régimen disciplinario</strong>. La separación del servicio de estos funcionarios requiere <strong>expediente especial con garantías reforzadas</strong> regulado en normativa estatal específica, no solo decisión del Alcalde."
},

{
    texto: "El Pleno de Madrid aprueba delegar en la Junta de Gobierno la competencia de 'aprobación de formas de gestión de servicios' (art. 22.2.f LBRL). Esta delegación es:",
    opciones: [
        "Válida, porque el art. 22.4 LBRL permite al Pleno delegar en la JG salvo excepciones, y el párrafo f) no está entre ellas.",
        "Nula, porque el art. 22.4 LBRL prohíbe delegar las competencias del apartado 2 párrafo f).",
        "Válida solo si se refiere a servicios menores, no a servicios estratégicos municipales."
    ],
    correcta: 1,
    explicacion: "El art. 22.4 LBRL establece que <strong>el Pleno puede delegar en Alcalde y JG</strong>, <strong>salvo las enunciadas en apartado 2 párrafos a), b), c), d), e), f), g), h), i), l) y p)</strong>. El párrafo <strong>f) 'formas de gestión de servicios' está expresamente EXCLUIDO</strong> de delegación. Es competencia <strong>indelegable del Pleno</strong> por afectar a decisiones estratégicas sobre servicios públicos."
},

{
    texto: "Un Concejal de la oposición solicita por escrito al Alcalde información sobre un expediente de contratación en tramitación. El Alcalde puede:",
    opciones: [
        "Denegar la información por ser un expediente en tramitación no finalizado.",
        "Facilitar la información porque los Concejales tienen derecho a información de todos los expedientes en tramitación.",
        "Solicitar que el Concejal justifique la necesidad de la información para sus funciones."
    ],
    correcta: 1,
    explicacion: "El art. 77 LBRL reconoce a <strong>todos los Concejales el derecho a obtener información</strong> de todos los <strong>expedientes y documentación municipal</strong>, sin distinguir si están finalizados o en tramitación. Límites: secreto por ley, protección datos personales (intimidad), seguridad pública. Pero <strong>NO puede denegarse por estar en tramitación</strong>. Es derecho de control político de los representantes."
},

{
    texto: "El art. 17.g) Ley 22/2006 atribuye a la Junta de Gobierno 'la autorización y disposición de gastos en materias de su competencia'. El art. 17.2 permite delegar competencias excepto ciertas materias. La autorización y disposición de gastos:",
    opciones: [
        "Es delegable porque no está en la lista de excepciones del art. 17.2.",
        "Es indelegable porque forma parte de la gestión económica estratégica.",
        "Solo es delegable en miembros de la JG, no en otros Concejales."
    ],
    correcta: 0,
    explicacion: "El art. 17.2 Ley 22/2006 permite a la JG <strong>delegar o desconcentrar</strong> sus funciones <strong>excepto</strong> las de los párrafos a) (proyectos normativos), b) (planes), c) (proyecto presupuesto), d) (planeamiento), h) (organización) e i) (acciones judiciales). La <strong>autorización y disposición de gastos NO está en las excepciones</strong>, por lo que <strong>SÍ es delegable</strong> en miembros JG, Concejales o directivos."
},

{
    texto: "El Alcalde está de viaje oficial en el extranjero. El Primer Teniente de Alcalde (que lo sustituye) recibe una demanda judicial contra el Ayuntamiento en materia urbanística (competencia del Pleno según art. 22.2.j LBRL). El plazo para contestar vence en 3 días. El Teniente puede:",
    opciones: [
        "Ejercer la acción judicial en virtud del art. 21.k LBRL que permite al Alcalde actuar en urgencia en materias del Pleno, dando cuenta después.",
        "Convocar Pleno extraordinario urgente porque las acciones judiciales en materias del Pleno solo las puede ejercer el Pleno.",
        "No puede actuar porque el art. 21.k solo permite al Alcalde titular actuar en urgencia, no al sustituto."
    ],
    correcta: 0,
    explicacion: "El art. 21.k) LBRL permite al Alcalde <strong>'en caso de urgencia, en materias de la competencia del Pleno'</strong> ejercer acciones judiciales/administrativas, <strong>dando cuenta al Pleno para ratificación</strong>. Como el <strong>Teniente sustituye plenamente al Alcalde</strong> (art. 23.3), <strong>puede ejercer esta atribución de urgencia</strong>. La sustitución es plena; incluye las competencias de urgencia."
},

{
    texto: "El art. 16.5 Ley 22/2006 establece que 'las sesiones de la Junta de Gobierno son secretas'. ¿Puede un Concejal que no es miembro de la JG solicitar información sobre lo tratado en una sesión de la JG?",
    opciones: [
        "No, porque las sesiones son secretas y eso impide el acceso a su contenido.",
        "Sí, porque el secreto de las sesiones se refiere al público en general, no a los Concejales que tienen derecho a información.",
        "Solo puede acceder a los acuerdos adoptados, no a las deliberaciones."
    ],
    correcta: 1,
    explicacion: "El <strong>secreto de las sesiones</strong> de la JG se refiere a que <strong>no son públicas para los ciudadanos</strong>, pero NO excluye el <strong>derecho de información de los Concejales</strong> (art. 77 LBRL). Los Concejales pueden acceder a <strong>acuerdos, expedientes y documentación</strong> de la JG para ejercer funciones de control. El secreto es frente al público, no frente a los representantes electos."
},

{
    texto: "El Pleno aprueba inicialmente un Plan General de Ordenación Urbana. Antes de la aprobación definitiva, se presenta una reclamación de un vecino. ¿Quién es competente para resolver la reclamación?",
    opciones: [
        "El Pleno, porque aprobó inicialmente el Plan y tiene competencia sobre planeamiento general (art. 22.2.c LBRL).",
        "El Alcalde, porque las reclamaciones en vía administrativa corresponden al órgano que dictó el acto.",
        "La Junta de Gobierno, si el Pleno ha delegado en ella la tramitación del planeamiento."
    ],
    correcta: 0,
    explicacion: "El art. 22.2.c) LBRL atribuye al Pleno <strong>'la aprobación inicial del planeamiento general y la aprobación que ponga fin a la tramitación municipal'</strong>. La <strong>resolución de reclamaciones</strong> presentadas tras aprobación inicial es parte de la <strong>tramitación municipal</strong> que culmina en la aprobación definitiva (que pone fin). Por tanto, <strong>el Pleno resuelve las reclamaciones</strong> en el mismo acto de aprobación definitiva."
},

{
    texto: "El art. 11.2 Ley 22/2006 exige mayoría absoluta para aprobar reglamentos orgánicos y para 'los acuerdos que corresponda adoptar al Pleno en la tramitación de los instrumentos de planeamiento general'. Un Plan Parcial (instrumento de desarrollo) se aprueba:",
    opciones: [
        "Por mayoría absoluta porque es instrumento de planeamiento urbanístico.",
        "Por mayoría simple porque el art. 11.2 solo exige mayoría absoluta para 'planeamiento general', y un Plan Parcial es de desarrollo.",
        "Por mayoría absoluta solo si afecta a más del 20% del territorio municipal."
    ],
    correcta: 1,
    explicacion: "El art. 11.2 Ley 22/2006 exige <strong>mayoría absoluta</strong> solo para: reglamentos orgánicos, alteración término, participación supramunicipal, transferencias/delegaciones y <strong>'instrumentos de planeamiento GENERAL'</strong>. Un <strong>Plan Parcial es instrumento de desarrollo</strong>, no general. Planeamiento general = PGOU, Normas Subsidiarias. Desarrollo = Planes Parciales, Especiales, Estudios Detalle. Plan Parcial = <strong>mayoría simple</strong>."
},

{
    texto: "El Alcalde ha delegado en la Junta de Gobierno la aprobación de instrumentos de planeamiento de desarrollo (art. 21.3 LBRL in fine permite delegar el párrafo j en JG). La JG aprueba un Plan Especial. Un vecino recurre. ¿Quién es competente para resolver el recurso de reposición?",
    opciones: [
        "La Junta de Gobierno, porque es el órgano que dictó el acto.",
        "El Alcalde, porque aunque delegó, retiene la competencia para revisar sus propios actos.",
        "El Pleno, porque los recursos contra actos urbanísticos siempre corresponden al Pleno."
    ],
    correcta: 1,
    explicacion: "Principio general: <strong>los recursos administrativos se resuelven por el órgano que dictó el acto</strong>. PERO existe un principio superior: <strong>quien delega retiene la competencia de revisión</strong> (avocación, revisión de oficio). El <strong>Alcalde, aunque haya delegado</strong> en la JG, <strong>puede resolver recursos</strong> contra actos de la JG porque conserva la titularidad de la competencia. La delegación transfiere ejercicio, no titularidad."
},

{
    texto: "El art. 17.m) Ley 22/2006 atribuye a la Junta de Gobierno 'la separación del servicio de los funcionarios del Ayuntamiento'. El art. 21.h) LBRL atribuye al Alcalde la misma competencia. ¿Cómo se resuelve esta aparente contradicción en Madrid?",
    opciones: [
        "Prevalece el art. 21.h) LBRL por ser normativa básica estatal que prima sobre la autonómica.",
        "Prevalece el art. 17.m) Ley 22/2006 por ser ley especial posterior y específica para Madrid.",
        "Ambos órganos son competentes concurrentemente; puede decidir el Alcalde o la JG."
    ],
    correcta: 1,
    explicacion: "La <strong>Ley 22/2006 es ley especial específica para Madrid</strong> aprobada posteriormente a la LBRL. Principio: <strong>ley especial posterior deroga ley general anterior</strong> en lo que se opongan. En Madrid, la <strong>separación del servicio corresponde a la JG</strong> (art. 17.m Ley 22/2006), no al Alcalde. Es una <strong>especialidad del régimen de Madrid</strong> frente al régimen general LBRL."
},

{
    texto: "El Pleno acuerda delegar en la Junta de Gobierno la competencia de 'la aprobación de proyectos de obras cuando sea competente para su contratación y estén previstos en presupuesto' (art. 22.2.ñ LBRL). Esta delegación es:",
    opciones: [
        "Nula, porque el art. 22.4 LBRL incluye el párrafo ñ) entre las competencias indelegables del Pleno.",
        "Válida, porque el párrafo ñ) no está en la lista de indelegables del art. 22.4 LBRL.",
        "Válida solo para proyectos de cuantía inferior al 10% del presupuesto."
    ],
    correcta: 1,
    explicacion: "El art. 22.4 LBRL establece que el Pleno <strong>puede delegar</strong> salvo competencias de los <strong>párrafos a), b), c), d), e), f), g), h), i), l) y p)</strong>. El párrafo <strong>ñ) NO está en esta lista de excepciones</strong>. Por tanto, <strong>la aprobación de proyectos de obras del art. 22.2.ñ SÍ es delegable</strong> en Alcalde o JG. Confusión típica: creer que todo lo del art. 22.2 es indelegable."
},

{
    texto: "Un miembro no electo de la Junta de Gobierno asiste a una sesión del Pleno e interviene en el debate de un asunto (art. 16.2 Ley 22/2006 lo permite). Durante la votación:",
    opciones: [
        "Puede votar porque está asistiendo como miembro de un órgano de gobierno.",
        "No puede votar porque solo los Concejales tienen derecho a voto en el Pleno.",
        "Puede votar solo en materias de competencia de la Junta de Gobierno."
    ],
    correcta: 1,
    explicacion: "El art. 16.2 Ley 22/2006 y art. 9.1 permiten a los miembros no electos de la JG <strong>asistir a sesiones del Pleno e intervenir en deliberaciones</strong>. PERO esto <strong>NO incluye derecho a voto</strong>. El voto en el Pleno es exclusivo de los <strong>Concejales</strong> (representantes electos). Los no electos pueden asistir, informar, opinar, pero <strong>NO votar</strong>."
},

{
    texto: "El Alcalde adopta una medida en ejercicio de su atribución del art. 21.m) LBRL (medidas extraordinarias en caso de catástrofe). No da cuenta inmediata al Pleno. El acuerdo:",
    opciones: [
        "Es nulo por omitir un requisito esencial (dar cuenta al Pleno).",
        "Es válido pero puede ser anulado si el Pleno lo estima improcedente cuando se le dé cuenta.",
        "Es válido y la omisión de dar cuenta es mera irregularidad sin consecuencias."
    ],
    correcta: 1,
    explicacion: "El art. 21.m) LBRL permite al Alcalde <strong>adoptar medidas necesarias</strong> en catástrofe/infortunio/grave riesgo <strong>'dando cuenta inmediata al Pleno'</strong>. Este requisito es de <strong>control posterior</strong>, no condición de validez del acto. El acto es <strong>válido desde su adopción</strong> (para actuar con urgencia), pero el Pleno <strong>puede ratificarlo o revocarlo</strong> cuando se le dé cuenta. No es nulidad; es ratificación posterior necesaria."
},

{
    texto: "El art. 22.2.i) LBRL atribuye al Pleno 'la aprobación de la plantilla de personal'. El art. 17.m) Ley 22/2006 atribuye a la JG 'las modificaciones de la plantilla de personal de acuerdo con las normas que se establezcan en las bases de ejecución del presupuesto'. ¿Puede la JG crear una nueva plaza de Arquitecto Técnico?",
    opciones: [
        "No, porque crear plazas nuevas es aprobación/modificación de plantilla que corresponde al Pleno.",
        "Sí, si las bases de ejecución del presupuesto autorizan a la JG a crear plazas dentro del límite presupuestario.",
        "No, porque aunque la Ley 22/2006 lo permitiera, prevalece la LBRL que atribuye plantilla al Pleno."
    ],
    correcta: 1,
    explicacion: "El art. 17.m) Ley 22/2006 permite a la JG <strong>modificar la plantilla</strong> (incluye crear/suprimir plazas) <strong>'de acuerdo con las normas de las bases de ejecución del presupuesto'</strong>. Si las <strong>bases autorizan</strong> a la JG crear plazas (típicamente dentro de límites: crédito disponible, tope plantilla), la JG <strong>puede hacerlo</strong>. Es especialidad Madrid; delega en JG lo que LBRL general atribuye al Pleno."
},

{
    texto: "El Alcalde decreta la delegación de la competencia de 'firma de convenios' en un Concejal. Posteriormente, el Concejal delegado firma un convenio que excede de su competencia material. El convenio es:",
    opciones: [
        "Nulo porque el delegado actuó fuera de su competencia.",
        "Anulable porque es un vicio de competencia no invalidante si el órgano delegante (Alcalde) lo ratifica.",
        "Válido si el convenio es beneficioso para el Ayuntamiento independientemente del vicio competencial."
    ],
    correcta: 1,
    explicacion: "Los <strong>vicios de competencia por delegación</strong> (actuar fuera de los límites de la delegación) producen <strong>anulabilidad</strong>, no nulidad de pleno derecho. El acto es <strong>anulable</strong> pero puede ser <strong>ratificado</strong> por el órgano competente (Alcalde delegante) o <strong>convalidado</strong> si no hay oposición. No es nulidad radical; es vicio subsanable. Si nadie lo impugna y el Alcalde lo ratifica = VÁLIDO."
},

{
    texto: "El art. 20.1.e) LBRL establece que 'la Comisión Especial de Cuentas existe en todos los municipios'. El art. 116 LBRL desarrolla esta Comisión. Su función es:",
    opciones: [
        "Aprobar las cuentas municipales antes de elevarlas al Pleno.",
        "Examinar e informar la Cuenta General antes de que el Pleno la apruebe.",
        "Fiscalizar en tiempo real la ejecución presupuestaria durante el ejercicio."
    ],
    correcta: 1,
    explicacion: "El art. 116 LBRL establece que la <strong>Comisión Especial de Cuentas</strong> tiene función de <strong>examen e informe de la Cuenta General</strong> del ejercicio antes de su aprobación por el Pleno. NO aprueba (eso es el Pleno); NO fiscaliza en tiempo real (eso es Intervención). Es órgano <strong>instructor previo</strong> que examina e informa para que el Pleno decida con conocimiento."
},

{
    texto: "El Pleno delega en la Junta de Gobierno la competencia de 'ejercicio de acciones judiciales en materias de competencia plenaria' (art. 22.2.j LBRL). Esta delegación es:",
    opciones: [
        "Válida porque el art. 22.4 permite al Pleno delegar en JG salvo excepciones, y el párrafo j) no está excluido.",
        "Nula porque el art. 22.4 LBRL prohíbe delegar las competencias del párrafo j) 'ejercicio de acciones judiciales en materias de competencia plenaria'.",
        "Válida solo para acciones judiciales de cuantía menor."
    ],
    correcta: 1,
    explicacion: "El art. 22.4 LBRL establece que el Pleno puede delegar <strong>salvo</strong> las competencias de los párrafos <strong>a), b), c), d), e), f), g), h), i), l) y p)</strong>. El párrafo <strong>j) 'ejercicio de acciones judiciales y administrativas en materias de competencia plenaria' SÍ está en la lista</strong> de indelegables. Es competencia <strong>indelegable del Pleno</strong>."
},

{
    texto: "El Alcalde dictó un bando recordando la obligación de recoger excrementos caninos. Un vecino alega que el bando crea una nueva obligación no prevista en ordenanza. El bando es:",
    opciones: [
        "Ilegal porque los bandos no pueden crear obligaciones nuevas, solo recordar las existentes.",
        "Válido porque el Alcalde tiene potestad normativa mediante bandos.",
        "Válido si el Pleno lo ratifica posteriormente."
    ],
    correcta: 0,
    explicacion: "El art. 21.e) LBRL permite al Alcalde <strong>dictar bandos</strong> para <strong>'recordar y precisar los términos del cumplimiento de normas en vigor'</strong> o apelar a la población. Los bandos <strong>NO pueden crear derecho nuevo</strong> ni obligaciones no previstas en normas; solo <strong>recuerdan y aclaran</strong> obligaciones ya existentes. Crear obligaciones = ordenanza (Pleno). Recordar = bando (Alcalde)."
},

{
    texto: "La Junta de Gobierno adopta un acuerdo en sesión secreta. Un Concejal no miembro de la JG solicita certificación del acuerdo. El Secretario de la JG:",
    opciones: [
        "Debe expedir certificación porque los Concejales tienen derecho a información (art. 77 LBRL).",
        "Puede denegar la certificación por ser acuerdo adoptado en sesión secreta.",
        "Debe consultar a la Junta de Gobierno si autoriza la expedición."
    ],
    correcta: 0,
    explicacion: "El <strong>secreto de las sesiones</strong> de la JG se refiere a que <strong>no son públicas para ciudadanos</strong>, NO a que los <strong>Concejales</strong> no puedan acceder a los acuerdos. El art. 77 LBRL reconoce <strong>derecho de información de todos los Concejales</strong> sobre expedientes y documentación. El Secretario <strong>debe certificar</strong> los acuerdos a petición de Concejales. Sesión secreta ≠ acuerdos inaccesibles para representantes."
}


,

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 11: COMISIONES DEL PLENO (10 preguntas adicionales)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 20.1.c) LBRL, en los municipios de gran población existirán, además del Pleno y el Alcalde:",
    opciones: [
        "Las Comisiones del Pleno y la Junta de Portavoces.",
        "Las Comisiones del Pleno.",
        "Las Comisiones Informativas permanentes y las Especiales."
    ],
    correcta: 1,
    explicacion: "El art. 20.1.c) LBRL establece que en municipios de gran población existirán <strong>las Comisiones del Pleno</strong> como órganos necesarios. No menciona la Junta de Portavoces (que puede existir pero no es obligatoria) ni especifica qué tipos de comisiones (eso lo desarrolla cada Ayuntamiento)."
},

{
    texto: "El art. 10.1 de la Ley 22/2006 establece que las Comisiones del Pleno en Madrid tendrán carácter:",
    opciones: [
        "Consultivo y de estudio de los asuntos que hayan de ser sometidos a la decisión del Pleno.",
        "Decisorio en las materias que expresamente les delegue el Pleno.",
        "Consultivo exclusivamente, sin competencias decisorias bajo ningún concepto."
    ],
    correcta: 0,
    explicacion: "El art. 10.1 Ley 22/2006 establece que <strong>las Comisiones del Pleno tendrán carácter consultivo y de estudio de los asuntos</strong> que hayan de ser sometidos a la decisión del Pleno, y de seguimiento de la gestión del Alcalde, la Junta de Gobierno y los Concejales que ostenten delegaciones. Son órganos preparatorios e informadores, no decisorios."
},

{
    texto: "Además de las funciones consultivas y de estudio, las Comisiones del Pleno tienen función de:",
    opciones: [
        "Fiscalización y control de los órganos ejecutivos municipales.",
        "Seguimiento de la gestión del Alcalde, la Junta de Gobierno y los Concejales con delegaciones.",
        "Aprobación de los proyectos de acuerdos que el Pleno deba adoptar."
    ],
    correcta: 1,
    explicacion: "El art. 10.1 Ley 22/2006 establece expresamente que las Comisiones tienen función de <strong>seguimiento de la gestión del Alcalde, la Junta de Gobierno y los Concejales que ostenten delegaciones</strong>. Es una función de control y seguimiento, no de fiscalización formal (que corresponde al Pleno) ni de aprobación (solo informan)."
},

{
    texto: "La composición de las Comisiones del Pleno se determinará:",
    opciones: [
        "Por el Alcalde en función de las necesidades de cada Comisión.",
        "Por el Pleno, garantizando la representación proporcional de los grupos políticos.",
        "Por acuerdo entre los portavoces de los grupos políticos municipales."
    ],
    correcta: 1,
    explicacion: "La composición de las Comisiones del Pleno se determina <strong>por el Pleno</strong>, debiendo <strong>garantizar la representación proporcional de los distintos grupos políticos</strong> que integran la corporación. Este principio de proporcionalidad es fundamental en la organización municipal democrática."
},

{
    texto: "Según el art. 10.2 Ley 22/2006, será obligatoria la existencia de:",
    opciones: [
        "La Comisión Especial de Cuentas y la Comisión Especial de Sugerencias y Reclamaciones.",
        "Comisiones Informativas permanentes por cada Área de Gobierno.",
        "La Comisión de Hacienda y la Comisión de Urbanismo."
    ],
    correcta: 0,
    explicacion: "El art. 10.2 Ley 22/2006 establece que <strong>será obligatoria la existencia de la Comisión Especial de Cuentas y la Comisión Especial de Sugerencias y Reclamaciones</strong>. Son las dos únicas comisiones cuya existencia es preceptiva por ley. El resto son potestativamente creadas por cada Ayuntamiento."
},

{
    texto: "La Comisión Especial de Sugerencias y Reclamaciones tiene por finalidad:",
    opciones: [
        "La defensa de los derechos de los vecinos ante la Administración municipal.",
        "Canalizar las quejas de los ciudadanos sobre servicios municipales deficientes.",
        "Fiscalizar el funcionamiento de los servicios administrativos municipales."
    ],
    correcta: 0,
    explicacion: "La Comisión Especial de Sugerencias y Reclamaciones tiene como finalidad <strong>la defensa de los derechos de los vecinos ante la Administración municipal</strong>. Es una figura similar al Defensor del Pueblo a nivel local, que recibe y tramita quejas y sugerencias ciudadanas sobre la actuación administrativa."
},

{
    texto: "La Comisión Especial de Cuentas tiene por función:",
    opciones: [
        "Aprobar la Cuenta General del Ayuntamiento antes de su elevación al Pleno.",
        "Examinar e informar la Cuenta General del Ayuntamiento antes de su aprobación por el Pleno.",
        "Fiscalizar en tiempo real la ejecución del presupuesto municipal."
    ],
    correcta: 1,
    explicacion: "Según el art. 116 LBRL, la <strong>Comisión Especial de Cuentas</strong> tiene como función <strong>examinar e informar la Cuenta General</strong> del Ayuntamiento antes de su aprobación por el Pleno. No aprueba (eso es competencia del Pleno) ni fiscaliza en tiempo real (eso es función de la Intervención General)."
},

{
    texto: "La Comisión Especial de Cuentas es:",
    opciones: [
        "Un órgano técnico dependiente de la Intervención General.",
        "Una Comisión del Pleno de carácter permanente con competencias específicas.",
        "Un órgano consultivo de la Junta de Gobierno en materia presupuestaria."
    ],
    correcta: 1,
    explicacion: "La Comisión Especial de Cuentas es <strong>una Comisión del Pleno</strong> (no un órgano de la Intervención ni de la JG) de <strong>carácter permanente</strong> que existe obligatoriamente en todos los Ayuntamientos. Tiene competencias específicas definidas en la ley (examinar e informar la Cuenta General)."
},

{
    texto: "Las Comisiones del Pleno pueden:",
    opciones: [
        "Solicitar la comparecencia de los titulares de los órganos directivos municipales para informar sobre cuestiones de su competencia.",
        "Requerir la presencia obligatoria del Alcalde cuando lo estimen necesario.",
        "Citar a cualquier funcionario municipal para que explique su actuación administrativa."
    ],
    correcta: 0,
    explicacion: "Las Comisiones del Pleno, en el ejercicio de su función de seguimiento y control, pueden <strong>solicitar la comparecencia de los titulares de los órganos directivos</strong> (Concejales delegados, directores generales, etc.) para informar sobre asuntos de su competencia. No pueden 'requerir' al Alcalde (solo solicitarlo) ni citar funcionarios directamente."
},

{
    texto: "Los acuerdos de las Comisiones del Pleno se adoptan:",
    opciones: [
        "Por mayoría simple de los miembros presentes.",
        "Las Comisiones no adoptan acuerdos, solo informan y dictaminan.",
        "Por mayoría absoluta de los miembros que las integran."
    ],
    correcta: 1,
    explicacion: "Las <strong>Comisiones del Pleno tienen carácter consultivo</strong>, no decisorio. Por tanto, <strong>NO adoptan acuerdos</strong> en sentido estricto, sino que <strong>emiten informes, dictámenes y propuestas</strong> que eleva al Pleno para su decisión. El Pleno es el órgano que adopta los acuerdos definitivos."
}


    ]
},

{
    id: 4,
    nombre: "Tema 4 - Administración del Ayuntamiento de Madrid",
    icono: "🏢",
    preguntas: [
// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 1: ADMINISTRACIÓN PÚBLICA MUNICIPAL (10 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 19 de la Ley 22/2006 de Capitalidad, la Administración del Ayuntamiento de Madrid se organiza bajo la superior dirección de:",
    opciones: [
        "El Alcalde, quien desarrolla las funciones ejecutivas y administrativas.",
        "La Junta de Gobierno, que ejerce las competencias ejecutivas delegadas por el Pleno.",
        "El Pleno, como órgano supremo de gobierno y administración municipal."
    ],
    correcta: 0,
    explicacion: "El art. 19 Ley 22/2006 establece que <strong>la Administración del Ayuntamiento de Madrid, bajo la superior dirección del Alcalde</strong>, se organiza y actúa con sometimiento pleno a la Ley y al Derecho. El Alcalde es quien dirige la Administración municipal, no el Pleno (órgano político) ni la Junta de Gobierno (órgano ejecutivo colegiado)."
},

{
    texto: "Los principios que rigen para la Administración del Ayuntamiento de Madrid según el art. 19 de la Ley 22/2006 incluyen todos los siguientes EXCEPTO:",
    opciones: [
        "Jerarquía y coordinación.",
        "Eficacia y descentralización funcional.",
        "Subsidiariedad y proporcionalidad."
    ],
    correcta: 2,
    explicacion: "El art. 19 Ley 22/2006 enumera los principios: jerarquía, eficacia, descentralización funcional, desconcentración, coordinación y servicio al ciudadano. Los principios de <strong>subsidiariedad y proporcionalidad</strong> son principios del Derecho de la Unión Europea y de la Administración Pública en general, pero <strong>no están expresamente recogidos en este artículo</strong> específico."
},

{
    texto: "El Código de Buenas Prácticas Administrativas del Ayuntamiento de Madrid fue aprobado por:",
    opciones: [
        "Acuerdo del Pleno de 4 de julio de 2008.",
        "Acuerdo de la Junta de Gobierno de 4 de diciembre de 2008.",
        "Decreto del Alcalde de 4 de diciembre de 2008."
    ],
    correcta: 1,
    explicacion: "El Código de Buenas Prácticas Administrativas del Ayuntamiento de Madrid fue aprobado por <strong>Acuerdo de la Junta de Gobierno de la Ciudad de Madrid, de 4 de diciembre de 2008</strong>. Establece principios jurídicos generales para el funcionamiento del Ayuntamiento como Administración Pública."
},

{
    texto: "Uno de los principios establecidos en el Código de Buenas Prácticas Administrativas es la 'Legalidad'. Este principio implica que:",
    opciones: [
        "El Ayuntamiento solo puede actuar cuando una norma le otorgue competencia expresa.",
        "El Ayuntamiento actuará con sometimiento pleno a la Ley y al Derecho, aplicando las normas establecidas.",
        "Los actos del Ayuntamiento deben ser conformes con la Constitución y el Estatuto de Autonomía."
    ],
    correcta: 1,
    explicacion: "El principio de <strong>legalidad</strong> en el Código de Buenas Prácticas establece que <strong>el Ayuntamiento actuará en todo momento con sometimiento pleno a la Ley y al Derecho</strong>, aplicando las normas y procedimientos establecidos. No es el principio de competencia (opción A) ni de jerarquía normativa (opción C), aunque están relacionados."
},

{
    texto: "El principio de 'Seguridad Jurídica' recogido en el Código de Buenas Prácticas significa que:",
    opciones: [
        "El Ayuntamiento evitará utilizar potestades para objetivos sin fundamento legal o motivados por interés público.",
        "El Ayuntamiento otorgará certeza y confianza a los ciudadanos frente a cambios normativos o de criterio no razonablemente previsibles.",
        "El Ayuntamiento garantizará que los actos administrativos que afecten a derechos de los ciudadanos se basen en la ley."
    ],
    correcta: 1,
    explicacion: "El principio de <strong>seguridad jurídica</strong> implica que el Ayuntamiento de Madrid <strong>otorgará certeza y confianza a los ciudadanos frente a cambios normativos o de criterio que no sean razonablemente previsibles</strong>, respetando el principio de buena fe. No debe confundirse con legalidad (opción C) ni con la prohibición de arbitrariedad o desviación de poder (opción A)."
},

{
    texto: "Según el Código de Buenas Prácticas, el principio de 'Proporcionalidad' establece que:",
    opciones: [
        "Las medidas adoptadas por el Ayuntamiento deben ser proporcionadas al objetivo que se persigue, evitando restringir derechos cuando no sea razonable.",
        "El Ayuntamiento debe ponderar los intereses particulares de los ciudadanos y los intereses generales buscando la conciliación entre ambos.",
        "Toda actividad del Ayuntamiento debe facilitar el ejercicio por los ciudadanos de sus derechos y libertades en el marco legal."
    ],
    correcta: 0,
    explicacion: "El principio de <strong>proporcionalidad</strong> establece que <strong>el Ayuntamiento garantizará que las medidas adoptadas sean proporcionales al objetivo que se persigue</strong>, evitando restringir derechos de los ciudadanos o imponerles cargas cuando no sean razonables con respecto al objetivo perseguido. La opción B describe el principio de imparcialidad, y la C describe facilitación de derechos."
},

{
    texto: "En relación con las potestades administrativas, el Código de Buenas Prácticas establece que:",
    opciones: [
        "Las potestades se ejercerán únicamente para las finalidades para las que han sido otorgadas por las disposiciones pertinentes.",
        "El Ayuntamiento solo utilizará potestades discrecionales cuando no existan criterios reglados aplicables.",
        "El uso de potestades administrativas requiere informe previo de la Asesoría Jurídica en todos los casos."
    ],
    correcta: 0,
    explicacion: "Respecto a las potestades administrativas, el Código establece que <strong>estas se ejercerán únicamente para las finalidades para las que han sido otorgadas</strong> por las disposiciones pertinentes. El Ayuntamiento evitará utilizar dichas potestades para objetivos que no posean fundamento legal o que no estén motivados por un interés público."
},

{
    texto: "El art. 19 de la Ley 22/2006 establece que la Administración del Ayuntamiento de Madrid se ajustará a los principios de información, colaboración, coordinación y respeto a los ámbitos competenciales respectivos en sus relaciones con:",
    opciones: [
        "Los ciudadanos y las entidades privadas que actúan en el ámbito municipal.",
        "Las demás Administraciones Públicas.",
        "Los órganos colegiados y directivos del propio Ayuntamiento."
    ],
    correcta: 1,
    explicacion: "El art. 19 Ley 22/2006 establece que <strong>en sus relaciones con las demás Administraciones Públicas</strong>, la Administración del Ayuntamiento de Madrid se ajustará a los principios de información, colaboración, coordinación y respeto a los ámbitos competenciales respectivos. En sus relaciones con los ciudadanos actúa conforme a los principios de transparencia y participación."
},

{
    texto: "La Ley 22/2006 amplía sus principios a los recogidos en:",
    opciones: [
        "La Ley 30/1992 de Régimen Jurídico de las Administraciones Públicas y del Procedimiento Administrativo Común.",
        "La Constitución Española de 1978, específicamente el art. 103.1.",
        "El Estatuto de Autonomía de la Comunidad de Madrid."
    ],
    correcta: 0,
    explicacion: "El texto del documento indica que <strong>la Ley 22/2006 amplía sus principios a los recogidos en la Ley 30/1992</strong>, de 26 de noviembre, de Régimen Jurídico de las Administraciones Públicas y del Procedimiento Administrativo Común. Esta ley establecía principios fundamentales para todas las Administraciones Públicas."
},

{
    texto: "El principio de 'Imparcialidad' establecido en el Código de Buenas Prácticas requiere que:",
    opciones: [
        "El Ayuntamiento actúe de manera justa y razonable en toda su actividad.",
        "El Ayuntamiento pondere los intereses particulares de los ciudadanos y los intereses generales, buscando la conciliación entre ambos.",
        "La prevalencia del interés público sobre los intereses particulares exija justificación expresa y racional en la disposición correspondiente."
    ],
    correcta: 1,
    explicacion: "El principio de <strong>imparcialidad</strong> establece que el Ayuntamiento de Madrid actuará de manera imparcial, justa y razonable en toda su actividad. <strong>En la adopción de actos administrativos, el Ayuntamiento ponderará los intereses particulares de los ciudadanos y los intereses generales y buscará la conciliación entre ambos.</strong>"
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 2: INTERVENCIÓN GENERAL - NATURALEZA Y FUNCIONES (15 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 23 de la Ley 22/2006, la Intervención General es el órgano directivo al que corresponde:",
    opciones: [
        "La gestión económica y financiera del sector público municipal.",
        "El control interno de la gestión económica y financiera del sector público municipal y la función contable.",
        "La supervisión de la ejecución presupuestaria y la recaudación de ingresos públicos."
    ],
    correcta: 1,
    explicacion: "El art. 23.1 Ley 22/2006 establece que <strong>la Intervención General es el órgano directivo al que corresponde el control interno de la gestión económica y financiera del sector público municipal y la función contable</strong>. No gestiona (opción A), sino que controla y fiscaliza. La recaudación corresponde a otros órganos como la Tesorería o la Agencia Tributaria."
},

{
    texto: "La Intervención General del Ayuntamiento de Madrid ejercerá sus funciones en los términos establecidos en:",
    opciones: [
        "El Texto Refundido de la Ley Reguladora de las Haciendas Locales.",
        "La Ley 7/1985 Reguladora de las Bases del Régimen Local.",
        "El Reglamento Orgánico del Gobierno y de la Administración del Ayuntamiento de Madrid."
    ],
    correcta: 0,
    explicacion: "El art. 23.1 Ley 22/2006 establece que la Intervención General <strong>ejercerá sus funciones en los términos establecidos en el Texto Refundido de la Ley Reguladora de las Haciendas Locales</strong>, aprobado por Real Decreto Legislativo 2/2004, de 5 de marzo. Esta es la normativa específica que regula las funciones de intervención y control financiero."
},

{
    texto: "Según el art. 59 del Reglamento Orgánico del Gobierno y de la Administración del Ayuntamiento de Madrid, la función pública de control y fiscalización interna comprende:",
    opciones: [
        "Función interventora y función de auditoría externa.",
        "Función interventora, función de control financiero y función de control de eficacia.",
        "Función de fiscalización previa, función de auditoría interna y función de asesoramiento económico."
    ],
    correcta: 1,
    explicacion: "El art. 59.1 del Reglamento Orgánico establece que la función pública de control y fiscalización interna de la gestión económico-financiera y presupuestaria, <strong>en su triple acepción de función interventora, función de control financiero y función de control de eficacia</strong>, corresponde a la Intervención General."
},

{
    texto: "La Intervención General del Ayuntamiento de Madrid ejercerá sus funciones:",
    opciones: [
        "Bajo la dirección del titular del Área competente en materia de Hacienda.",
        "Con plena autonomía respecto de los órganos y entidades municipales cuya gestión fiscalice.",
        "Mediante coordinación con la Asesoría Jurídica en materias económico-financieras."
    ],
    correcta: 1,
    explicacion: "El art. 59.2 del Reglamento Orgánico establece expresamente que <strong>la Intervención General ejercerá sus funciones con plena autonomía respecto de los órganos y entidades municipales y cargos directivos cuya gestión fiscalice</strong>, teniendo completo acceso a la contabilidad y a cuantos documentos sean necesarios. Esta autonomía funcional es esencial para garantizar un control efectivo e independiente."
},

{
    texto: "La Intervención General del Ayuntamiento de Madrid se adscribe orgánicamente:",
    opciones: [
        "Directamente al Alcalde, como órgano de control superior.",
        "Al Pleno del Ayuntamiento, por ser el órgano de fiscalización política.",
        "Al Área competente en materia de Hacienda."
    ],
    correcta: 2,
    explicacion: "Aunque la Intervención General ejerce sus funciones con plena autonomía funcional, el art. 59.2 del Reglamento Orgánico establece que, <strong>sin perjuicio de lo anterior, la Intervención General se adscribe orgánicamente al Área competente en materia de Hacienda</strong>. Hay que distinguir entre autonomía funcional (independencia en el ejercicio de funciones) y adscripción orgánica (ubicación administrativa)."
},

{
    texto: "El titular de la Intervención General tiene carácter:",
    opciones: [
        "Directivo y será nombrado entre funcionarios de Administración Local con habilitación de carácter nacional.",
        "Técnico y será nombrado entre funcionarios del Cuerpo Superior de Interventores y Auditores del Estado.",
        "Asesor y será designado por la Junta de Gobierno entre expertos en economía y finanzas públicas."
    ],
    correcta: 0,
    explicacion: "El art. 59.4 del Reglamento Orgánico establece claramente que <strong>el titular de la Intervención General tiene carácter directivo y será nombrado entre funcionarios de Administración Local con habilitación de carácter nacional</strong>. Esta habilitación garantiza la cualificación técnica y el régimen jurídico específico de estos funcionarios."
},

{
    texto: "Según el art. 23 de la Ley 22/2006, el titular de la Intervención General debe ser un funcionario de Administración local con habilitación de carácter nacional o estatal. Su nombramiento corresponderá a:",
    opciones: [
        "La Junta de Gobierno, a propuesta del Alcalde.",
        "El Pleno del Ayuntamiento por mayoría absoluta.",
        "La Junta de Gobierno."
    ],
    correcta: 2,
    explicacion: "El art. 23 Ley 22/2006 establece que el titular de la Intervención General deberá ser un funcionario de Administración local con habilitación de carácter nacional o estatal. <strong>Su nombramiento corresponderá a la Junta de Gobierno</strong>. No requiere propuesta específica del Alcalde ni mayoría especial del Pleno."
},

{
    texto: "La provisión del puesto de Interventor General se efectuará por los sistemas previstos en:",
    opciones: [
        "La Ley 7/1985 LBRL y sus disposiciones reglamentarias de desarrollo.",
        "El art. 99 de la Ley 7/1985 LBRL y las disposiciones reglamentarias de desarrollo.",
        "El Reglamento de Ordenación del Personal del Ayuntamiento de Madrid."
    ],
    correcta: 1,
    explicacion: "Según el art. 23 Ley 22/2006, la provisión del puesto se efectuará por los sistemas previstos en <strong>el artículo 99 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local, y en las disposiciones reglamentarias de desarrollo</strong>. El art. 99 LBRL regula específicamente el régimen de los funcionarios con habilitación de carácter nacional."
},

{
    texto: "En todo caso, la provisión del puesto de Interventor General requerirá:",
    opciones: [
        "Una previa convocatoria pública y proceso selectivo entre funcionarios habilitados.",
        "Informe favorable del Pleno sobre la idoneidad del candidato propuesto.",
        "Una previa convocatoria pública."
    ],
    correcta: 2,
    explicacion: "El art. 23 Ley 22/2006 establece expresamente que la provisión del puesto <strong>requerirá, en todo caso, una previa convocatoria pública</strong>. Esto garantiza la transparencia y la igualdad de oportunidades en el acceso al puesto, aunque no necesariamente implica un proceso selectivo completo ni informe del Pleno."
},

{
    texto: "Según el art. 59.3 del Reglamento Orgánico, podrán atribuirse al Interventor General:",
    opciones: [
        "Funciones distintas o complementarias de las de control y fiscalización, de conformidad con el art. 166 del RDL 781/1986.",
        "Funciones de gestión económica cuando así lo determine el Área de Hacienda.",
        "Competencias en materia de recaudación tributaria en coordinación con la Agencia Tributaria."
    ],
    correcta: 0,
    explicacion: "El art. 59.3 del Reglamento Orgánico establece que, <strong>de conformidad con lo previsto en el artículo 166 del Real Decreto Legislativo 781/1986, de 18 de abril, podrán atribuirse al interventor general funciones distintas o complementarias</strong> de las asignadas en los apartados anteriores. Esto permite flexibilidad en la asignación de funciones adicionales."
},

{
    texto: "La función interventora de la Intervención General consiste en:",
    opciones: [
        "La verificación previa de todo acto que pueda dar lugar a reconocimiento de derechos o a la realización de gastos.",
        "La auditoría posterior de la gestión económico-financiera de los órganos municipales.",
        "El control permanente de la ejecución del presupuesto y del cumplimiento de la legalidad."
    ],
    correcta: 0,
    explicacion: "La <strong>función interventora</strong> es el control previo de legalidad que realiza la Intervención General sobre <strong>todo acto, documento o expediente susceptible de producir derechos u obligaciones de contenido económico o movimiento de fondos de valores</strong>. Se trata de un control previo, no posterior como la auditoría (opción B) ni continuo como el control financiero (opción C)."
},

{
    texto: "El control financiero que ejerce la Intervención General se refiere a:",
    opciones: [
        "La verificación del cumplimiento de la legalidad en la gestión de los fondos públicos mediante técnicas de auditoría.",
        "La autorización previa de gastos y reconocimiento de obligaciones económicas.",
        "La elaboración y seguimiento del presupuesto municipal y sus modificaciones."
    ],
    correcta: 0,
    explicacion: "El <strong>control financiero</strong> es una función de fiscalización <strong>posterior</strong> ejercida mediante técnicas de auditoría, que verifica el cumplimiento de la legalidad financiera y presupuestaria, así como los principios de buena gestión financiera. Se diferencia de la función interventora (control previo) y de la función de control de eficacia."
},

{
    texto: "La función de control de eficacia que corresponde a la Intervención General tiene por objeto:",
    opciones: [
        "Verificar que la gestión de los recursos públicos se realiza de acuerdo con los principios de economía, eficiencia y eficacia.",
        "Fiscalizar que los gastos municipales se ejecutan dentro de los créditos presupuestarios aprobados.",
        "Comprobar que los ingresos municipales se recaudan conforme a la normativa tributaria vigente."
    ],
    correcta: 0,
    explicacion: "La <strong>función de control de eficacia</strong> (o control de gestión) tiene por objeto <strong>verificar que la gestión de los recursos públicos se realiza de acuerdo con los principios de economía, eficiencia y eficacia</strong>, evaluando el cumplimiento de los objetivos y la calidad de los servicios. No se limita al control de legalidad, sino que evalúa la gestión."
},

{
    texto: "La Intervención General tiene completo acceso:",
    opciones: [
        "Únicamente a la documentación contable y presupuestaria del Ayuntamiento.",
        "A la contabilidad y a cuantos documentos sean necesarios para el ejercicio de sus funciones.",
        "A los expedientes administrativos previa autorización del órgano gestor correspondiente."
    ],
    correcta: 1,
    explicacion: "El art. 59.2 del Reglamento Orgánico establece que la Intervención General, en el ejercicio de sus funciones de fiscalización, tiene <strong>completo acceso a la contabilidad y a cuantos documentos sean necesarios para el ejercicio de sus funciones</strong>. Este acceso es ilimitado y no requiere autorización previa de otros órganos."
},

{
    texto: "La función contable que corresponde a la Intervención General comprende:",
    opciones: [
        "Únicamente el registro de las operaciones presupuestarias del Ayuntamiento.",
        "La llevanza de la contabilidad financiera, presupuestaria y económica del sector público municipal.",
        "La elaboración de las cuentas anuales que deben rendirse al Tribunal de Cuentas."
    ],
    correcta: 1,
    explicacion: "Aunque el art. 23 Ley 22/2006 menciona la función contable de forma genérica, esta comprende <strong>la llevanza de la contabilidad financiera, presupuestaria y económica del sector público municipal</strong>, que incluye el registro de operaciones, elaboración de cuentas, estados financieros y toda la documentación contable necesaria conforme a la normativa de haciendas locales."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 3: INTERVENCIÓN GENERAL - ORGANIZACIÓN (10 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Los órganos y entidades municipales y cargos directivos tienen respecto de la Intervención General el deber de:",
    opciones: [
        "Facilitar completo acceso a la contabilidad y documentos necesarios para el ejercicio de sus funciones.",
        "Consultar previamente todas las decisiones económicas antes de su adopción.",
        "Remitir trimestralmente informes sobre la ejecución presupuestaria de sus áreas."
    ],
    correcta: 0,
    explicacion: "El art. 59.2 del Reglamento Orgánico establece que la Intervención General tiene <strong>completo acceso a la contabilidad y a cuantos documentos sean necesarios para el ejercicio de sus funciones</strong>. Esto implica el deber correlativo de los órganos fiscalizados de facilitar dicho acceso sin restricciones ni demoras."
},

{
    texto: "Cuando la Intervención General formula reparo a un expediente de gasto, el órgano gestor:",
    opciones: [
        "Debe subsanar las deficiencias señaladas antes de continuar la tramitación.",
        "Puede continuar la tramitación asumiendo la responsabilidad, dando cuenta al órgano competente.",
        "Queda obligado a archivar el expediente salvo que obtenga la conformidad de la Asesoría Jurídica."
    ],
    correcta: 1,
    explicacion: "En el procedimiento de fiscalización previa, cuando la Intervención formula <strong>reparo</strong>, el órgano gestor puede optar por: a) subsanar las deficiencias, o b) <strong>ratificar el acto (discrepancia con el reparo), asumiendo la responsabilidad</strong>. En este caso, el expediente continúa pero se da cuenta al Pleno. El reparo suspende pero no anula automáticamente el expediente."
},

{
    texto: "La fiscalización e intervención previa de la Intervención General se extiende:",
    opciones: [
        "Únicamente a los actos del Ayuntamiento, no a sus organismos autónomos.",
        "A los órganos municipales y a las entidades de derecho público vinculadas o dependientes del mismo.",
        "Solo a los actos que superen determinadas cuantías establecidas por el Pleno."
    ],
    correcta: 1,
    explicacion: "La función de fiscalización e intervención de la Intervención General se extiende <strong>a todos los órganos y entidades municipales</strong>, incluidos organismos autónomos y entidades de derecho público vinculadas o dependientes del Ayuntamiento. No se limita al Ayuntamiento en sentido estricto ni hay umbrales de cuantía para la fiscalización obligatoria."
},

{
    texto: "Los informes de control financiero emitidos por la Intervención General:",
    opciones: [
        "Son vinculantes para el órgano fiscalizado, que debe adoptar las medidas correctoras propuestas.",
        "Tienen carácter preceptivo pero no vinculante, salvo que detecten infracciones legales.",
        "Se elevan al Pleno para su conocimiento y, en su caso, adopción de medidas."
    ],
    correcta: 2,
    explicacion: "Los informes de control financiero (auditorías y otros) que emite la Intervención General <strong>se elevan al Pleno del Ayuntamiento</strong> para su conocimiento y, en su caso, para la adopción de las medidas que procedan. No son directamente vinculantes para el órgano auditado, pero sí tienen consecuencias al conocerlos el Pleno."
},

{
    texto: "En el ejercicio de la función interventora, si el Interventor emite informe de omisiones o deficiencias en un expediente:",
    opciones: [
        "El expediente queda suspendido hasta que se subsanen las deficiencias.",
        "Se trata de un reparo, que impide la tramitación salvo que se levante el reparo.",
        "El órgano gestor puede continuar la tramitación tomando nota de las observaciones."
    ],
    correcta: 0,
    explicacion: "En la función interventora (fiscalización previa), cuando se detectan <strong>omisiones o deficiencias</strong>, la Intervención formula <strong>reparo</strong>, que suspende la tramitación del expediente. Para continuar, el órgano gestor debe: subsanar las deficiencias o ratificar el acto asumiendo responsabilidad. No puede continuar ignorando el reparo."
},

{
    texto: "La Intervención General debe rendir cuenta anual de su gestión:",
    opciones: [
        "Al Pleno del Ayuntamiento, que la aprueba junto con la Cuenta General.",
        "Al Tribunal de Cuentas, como órgano fiscalizador externo.",
        "Al Área de Hacienda, al que se adscribe orgánicamente."
    ],
    correcta: 0,
    explicacion: "La Intervención General elabora la <strong>Cuenta General del Ayuntamiento</strong>, que incluye la rendición de cuentas de todos los órganos y entidades municipales. Esta Cuenta General se presenta al <strong>Pleno del Ayuntamiento para su aprobación</strong>, tras el informe de la Comisión Especial de Cuentas, y posteriormente se remite al Tribunal de Cuentas."
},

{
    texto: "Según la normativa de haciendas locales, la Cuenta General del Ayuntamiento debe ser formada por:",
    opciones: [
        "El titular del Área competente en materia de Hacienda.",
        "La Intervención General.",
        "La Comisión Especial de Cuentas del Pleno."
    ],
    correcta: 1,
    explicacion: "La normativa de haciendas locales establece que <strong>la Cuenta General</strong> del Ayuntamiento y de todos sus organismos autónomos y sociedades mercantiles dependientes <strong>será formada por la Intervención General</strong>, que es el órgano contable del Ayuntamiento. La Comisión de Cuentas la examina e informa, y el Pleno la aprueba."
},

{
    texto: "La Intervención General del Ayuntamiento de Madrid podrá emitir informes sobre:",
    opciones: [
        "Únicamente materias económico-financieras y presupuestarias de su competencia.",
        "Cualquier asunto que le sea solicitado por el Alcalde o la Junta de Gobierno.",
        "Proyectos de ordenanzas fiscales y reglamentos de gestión tributaria."
    ],
    correcta: 0,
    explicacion: "La Intervención General tiene competencia específica en <strong>materias económico-financieras, presupuestarias y contables</strong>. Sus informes se circunscriben a estas materias, que son las de su ámbito competencial. No emite informes sobre cualquier asunto, sino sobre aquellos relacionados con el control financiero y la fiscalización."
},

{
    texto: "El plazo para que la Intervención General emita el informe de fiscalización previa en los expedientes de gasto es:",
    opciones: [
        "10 días hábiles desde la recepción del expediente completo.",
        "15 días hábiles, prorrogables por otros 10 en expedientes complejos.",
        "El establecido en la normativa de haciendas locales y en las instrucciones de fiscalización aprobadas."
    ],
    correcta: 2,
    explicacion: "Los plazos para la emisión de informes de fiscalización previa están establecidos en <strong>la normativa de haciendas locales</strong> (Texto Refundido de la Ley Reguladora de las Haciendas Locales) y desarrollados en las <strong>Instrucciones de Fiscalización</strong> que aprueba cada Ayuntamiento. No hay un plazo único fijo, sino que varía según el tipo de expediente."
},

{
    texto: "Respecto a la función de control de eficacia, la Intervención General:",
    opciones: [
        "Debe ejercerla obligatoriamente sobre todos los servicios municipales cada ejercicio.",
        "La ejerce mediante auditorías de gestión y evaluación de programas conforme al plan anual.",
        "Solo puede realizarla cuando el Pleno o la Junta de Gobierno lo soliciten expresamente."
    ],
    correcta: 1,
    explicacion: "El <strong>control de eficacia</strong> (o control de gestión) se ejerce mediante <strong>auditorías operativas y de gestión</strong>, evaluación de programas y análisis de cumplimiento de objetivos. La Intervención elabora un <strong>Plan Anual de Control Financiero</strong> que incluye las actuaciones a realizar, no siendo obligatorio fiscalizar todos los servicios anualmente."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 4: TESORERÍA MUNICIPAL (12 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 24 de la Ley 22/2006, la Tesorería es el órgano directivo al que corresponde:",
    opciones: [
        "La gestión de los recursos y disponibilidades financieras del Ayuntamiento de Madrid.",
        "La recaudación de los tributos e ingresos de derecho público municipales.",
        "El control de la tesorería y la fiscalización de los pagos municipales."
    ],
    correcta: 0,
    explicacion: "El art. 24 Ley 22/2006 establece que <strong>la Tesorería es el órgano directivo al que corresponde la gestión de los recursos y disponibilidades financieras del Ayuntamiento de Madrid</strong> en los términos previstos en el Texto Refundido de la Ley Reguladora de las Haciendas Locales. La recaudación corresponde a la Agencia Tributaria."
},

{
    texto: "Las funciones que ejerce la Tesorería se regulan en:",
    opciones: [
        "El Reglamento Orgánico del Gobierno y de la Administración del Ayuntamiento de Madrid.",
        "El Texto Refundido de la Ley Reguladora de las Haciendas Locales.",
        "La Ley 22/2006 de Capitalidad y de Régimen Especial de Madrid."
    ],
    correcta: 1,
    explicacion: "El art. 24 Ley 22/2006 remite expresamente a que la Tesorería ejercerá sus funciones <strong>en los términos previstos en el Texto Refundido de la Ley Reguladora de las Haciendas Locales</strong>, aprobado por Real Decreto Legislativo 2/2004, de 5 de marzo. Esta es la normativa básica estatal que regula las funciones de tesorería."
},

{
    texto: "El titular de la Tesorería deberá ser:",
    opciones: [
        "Un funcionario de Administración Local con habilitación de carácter nacional o estatal.",
        "Un funcionario del Cuerpo Superior de Gestión Financiera de la Administración del Estado.",
        "Un experto en gestión financiera designado libremente por la Junta de Gobierno."
    ],
    correcta: 0,
    explicacion: "El art. 24 Ley 22/2006 establece que <strong>el titular de la Tesorería deberá ser un funcionario de Administración Local con habilitación de carácter nacional o estatal</strong>. Esta habilitación nacional garantiza la cualificación técnica específica en gestión económico-financiera de las entidades locales."
},

{
    texto: "El nombramiento del Tesorero corresponderá a:",
    opciones: [
        "La Junta de Gobierno.",
        "El Alcalde, previo informe del Área de Hacienda.",
        "El Pleno, a propuesta del Alcalde."
    ],
    correcta: 0,
    explicacion: "El art. 24 Ley 22/2006 establece que <strong>su nombramiento corresponderá a la Junta de Gobierno</strong>. Es competencia del órgano colegiado ejecutivo, igual que el nombramiento del Interventor General, garantizando así la importancia de estos puestos directivos."
},

{
    texto: "La provisión del puesto de Tesorero se efectuará:",
    opciones: [
        "Por el sistema de libre designación entre funcionarios habilitados nacionales.",
        "Por los sistemas previstos en el art. 99 de la LBRL y disposiciones reglamentarias de desarrollo.",
        "Mediante concurso de méritos abierto a funcionarios del subgrupo A1."
    ],
    correcta: 1,
    explicacion: "El art. 24 Ley 22/2006 establece que la provisión del puesto se efectuará por <strong>los sistemas previstos en el artículo 99 de la Ley 7/1985 Reguladora de las Bases del Régimen Local, y en las disposiciones reglamentarias de desarrollo</strong>. El art. 99 LBRL regula el régimen específico de los funcionarios con habilitación nacional."
},

{
    texto: "La provisión del puesto de Tesorero requerirá en todo caso:",
    opciones: [
        "Una previa convocatoria pública.",
        "Acuerdo del Pleno con mayoría simple.",
        "Informe favorable de la Intervención General sobre la idoneidad del candidato."
    ],
    correcta: 0,
    explicacion: "El art. 24 Ley 22/2006 establece expresamente que la provisión del puesto de Tesorero <strong>requerirá, en todo caso, una previa convocatoria pública</strong>. Este requisito garantiza transparencia y publicidad en el acceso al puesto, al igual que ocurre con la Intervención General."
},

{
    texto: "Según el art. 60 del Reglamento Orgánico, las funciones públicas de tesorería se ejercerán por:",
    opciones: [
        "El tesorero municipal, excluida la recaudación.",
        "El tesorero municipal, incluida la función de recaudación ejecutiva.",
        "El Área de Hacienda, a través de sus órganos directivos competentes."
    ],
    correcta: 0,
    explicacion: "El art. 60.1 del Reglamento Orgánico establece que <strong>las funciones públicas de tesorería, excluida la recaudación, se ejercerán por el tesorero municipal</strong>. La recaudación en Madrid está atribuida a la Agencia Tributaria Madrid, no a la Tesorería municipal."
},

{
    texto: "El órgano de Tesorería se adscribe:",
    opciones: [
        "Directamente al Alcalde, como órgano de gestión financiera estratégica.",
        "Al Área competente en materia de Hacienda.",
        "A la Intervención General, para coordinación del control financiero."
    ],
    correcta: 1,
    explicacion: "El art. 60.2 del Reglamento Orgánico establece que <strong>dicho órgano se adscribe al Área competente en materia de Hacienda</strong>, dependiendo directamente de su titular, o del director general con competencias en materia de política financiera, de acuerdo con lo que determine el Alcalde en los decretos de organización de dicha Área."
},

{
    texto: "El Tesorero municipal puede depender:",
    opciones: [
        "Directamente del titular del Área de Hacienda o del director general con competencias en materia de política financiera.",
        "Únicamente del titular del Área competente en materia de Hacienda.",
        "Del Interventor General, por razones de coordinación en la gestión económico-financiera."
    ],
    correcta: 0,
    explicacion: "El art. 60.2 del Reglamento Orgánico establece que el Tesorero dependerá <strong>directamente de su titular (del Área de Hacienda), o del director general con competencias en materia de política financiera</strong>, de acuerdo con lo que determine el Alcalde en los decretos de organización de dicha Área. Hay flexibilidad organizativa."
},

{
    texto: "Las funciones de la Tesorería municipal comprenden:",
    opciones: [
        "La custodia y gestión de fondos, valores y efectos del Ayuntamiento.",
        "La elaboración del presupuesto de ingresos y la previsión de recursos financieros.",
        "El control de la legalidad de los ingresos y gastos municipales."
    ],
    correcta: 0,
    explicacion: "Entre las funciones de la Tesorería municipal (art. 194 y ss. del Texto Refundido de la Ley Reguladora de las Haciendas Locales) está <strong>la custodia y gestión de fondos, valores y efectos</strong> del Ayuntamiento, la gestión de cobros y pagos, operaciones financieras, etc. No elabora el presupuesto (función de presupuestación) ni fiscaliza (función de intervención)."
},

{
    texto: "La Tesorería municipal tiene encomendada la gestión de:",
    opciones: [
        "Únicamente los cobros y pagos del presupuesto municipal.",
        "Los recursos y disponibilidades financieras del Ayuntamiento, incluyendo operaciones de tesorería.",
        "Los ingresos tributarios y tasas municipales en coordinación con la Agencia Tributaria."
    ],
    correcta: 1,
    explicacion: "La Tesorería tiene encomendada <strong>la gestión de los recursos y disponibilidades financieras</strong> del Ayuntamiento, lo que incluye no solo cobros y pagos presupuestarios, sino también <strong>operaciones de tesorería</strong> (préstamos a corto plazo para cubrir desfases temporales), gestión de la liquidez, inversiones temporales de excedentes de tesorería, etc."
},

{
    texto: "En el ejercicio de sus funciones, el Tesorero municipal:",
    opciones: [
        "Actúa bajo la supervisión directa de la Intervención General en todas las operaciones de pago.",
        "Ejerce con autonomía funcional en la gestión de tesorería, sin perjuicio de la fiscalización de la Intervención.",
        "Requiere autorización previa del Área de Hacienda para las operaciones que superen determinados importes."
    ],
    correcta: 1,
    explicacion: "El Tesorero municipal <strong>ejerce sus funciones con autonomía funcional</strong> en la gestión de los recursos financieros, sin perjuicio de la <strong>fiscalización e intervención que corresponde a la Intervención General</strong>. No actúa bajo supervisión directa de Intervención, sino que esta fiscaliza conforme a sus competencias. No requiere autorización del Área de Hacienda para cada operación."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 5: TRIBUNAL ECONÓMICO-ADMINISTRATIVO MUNICIPAL (13 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "El Tribunal Económico-Administrativo Municipal de Madrid fue creado en virtud de:",
    opciones: [
        "La Ley 7/1985 Reguladora de las Bases del Régimen Local.",
        "El art. 137 de la Ley 7/1985 y la Ley 57/2003 de Modernización del Gobierno Local.",
        "La Ley 22/2006 de Capitalidad y de Régimen Especial de Madrid."
    ],
    correcta: 1,
    explicacion: "El Tribunal Económico-Administrativo Municipal de Madrid se crea en el Ayuntamiento de Madrid <strong>el Órgano para la resolución de las reclamaciones económico-administrativas previsto en el artículo 137 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local</strong>, en la redacción dada por la Ley 57/2003, de 16 de diciembre, de Medidas para la Modernización del Gobierno Local."
},

{
    texto: "El Tribunal Económico-Administrativo Municipal de Madrid es el órgano especializado en:",
    opciones: [
        "El control de la legalidad de todos los actos administrativos del Ayuntamiento.",
        "El conocimiento y resolución de las reclamaciones económico-administrativas sobre actos tributarios.",
        "La fiscalización de la gestión económico-financiera del Ayuntamiento y sus organismos."
    ],
    correcta: 1,
    explicacion: "Según el art. 25 Ley 22/2006, el Tribunal Económico-Administrativo Municipal de Madrid es <strong>el órgano especializado en el conocimiento y resolución de las reclamaciones económico-administrativas</strong> sobre actos tributarios y demás ingresos de derecho público de competencia del Ayuntamiento de Madrid y de las entidades de derecho público vinculadas o dependientes del mismo."
},

{
    texto: "El Tribunal Económico-Administrativo Municipal se regula por:",
    opciones: [
        "El Reglamento Orgánico del Tribunal aprobado por el Pleno el 20 de diciembre de 2007.",
        "La Ley General Tributaria y la normativa estatal reguladora de las reclamaciones económico-administrativas.",
        "Las disposiciones del Reglamento Orgánico del Gobierno y de la Administración del Ayuntamiento de Madrid."
    ],
    correcta: 0,
    explicacion: "El art. 25 Ley 22/2006 establece que el Tribunal se rige <strong>por lo dispuesto en el artículo 25 de la Ley de Capitalidad</strong> y por el <strong>Reglamento Orgánico del Tribunal Económico-Administrativo Municipal del Ayuntamiento de Madrid aprobado el 20 de diciembre de 2007</strong>, y publicado en los Boletines del Ayuntamiento y de la Comunidad de Madrid de fecha 27 de diciembre de 2007."
},

{
    texto: "En las materias no expresamente reguladas por el Reglamento Orgánico del TEAM, se estará a lo dispuesto en:",
    opciones: [
        "La Ley 22/2006 de Capitalidad como norma supletoria de primer grado.",
        "La Ley General Tributaria y la normativa dictada para su desarrollo en relación a las reclamaciones económico-administrativas.",
        "El Reglamento General de Recaudación aprobado por Real Decreto 939/2005."
    ],
    correcta: 1,
    explicacion: "El documento establece que en todas aquellas materias no expresamente reguladas por el Reglamento Orgánico del TEAM, <strong>se estará a lo dispuesto en la Ley General Tributaria y la normativa dictada para su desarrollo</strong> en relación a las reclamaciones económico-administrativas, sin perjuicio de las adaptaciones necesarias en consideración al ámbito de actuación y funcionamiento del Tribunal."
},

{
    texto: "El Tribunal Económico-Administrativo Municipal ostenta competencia exclusiva para conocer en única instancia de las reclamaciones que se interpongan en relación con:",
    opciones: [
        "La aplicación de los tributos y la imposición de sanciones tributarias que realicen el Ayuntamiento y sus entidades dependientes.",
        "Todos los actos administrativos del Ayuntamiento que tengan contenido económico.",
        "Los actos de gestión tributaria, recaudación y sancionadores, siempre que no se trate de materias delegadas."
    ],
    correcta: 0,
    explicacion: "El art. 25 Ley 22/2006 establece la competencia exclusiva del TEAM para conocer <strong>en única instancia, de las reclamaciones que se sustancien en relación con la aplicación de los tributos y la imposición de sanciones tributarias</strong> que realicen el Ayuntamiento de Madrid y las entidades de derecho público vinculadas o dependientes del mismo, <strong>sin perjuicio del recurso de reposición que con carácter potestativo podrán interponer previamente los interesados</strong>."
},

{
    texto: "El recurso de reposición previo a la interposición de la reclamación económico-administrativa ante el TEAM es:",
    opciones: [
        "Obligatorio en todos los casos, como trámite previo necesario.",
        "Potestativo para los interesados.",
        "Obligatorio solo para reclamaciones superiores a 6.000 euros."
    ],
    correcta: 1,
    explicacion: "El art. 25 Ley 22/2006 establece expresamente que el TEAM conoce en única instancia de las reclamaciones, <strong>sin perjuicio del recurso de reposición que con carácter potestativo podrán interponer previamente los interesados</strong>, de acuerdo con lo dispuesto en el artículo 14.2 del Real Decreto Legislativo 2/2004, de 5 de marzo."
},

{
    texto: "Contra la resolución del citado recurso de reposición podrá interponerse:",
    opciones: [
        "Recurso de alzada ante el Tribunal Económico-Administrativo Regional.",
        "Reclamación económico-administrativa ante el Tribunal.",
        "Recurso contencioso-administrativo directamente."
    ],
    correcta: 1,
    explicacion: "El procedimiento establece que <strong>contra la resolución del recurso de reposición podrá interponerse reclamación económico-administrativa</strong> ante el Tribunal. Es decir, si el interesado interpone primero recurso de reposición, después puede acudir al TEAM. Si no interpone reposición (es potestativo), va directamente al TEAM."
},

{
    texto: "La resolución que dicte el Tribunal pone fin a la vía administrativa y contra ella:",
    opciones: [
        "Cabe interponer recurso de alzada ante el Tribunal Económico-Administrativo Central.",
        "Solo cabrá la interposición del recurso contencioso-administrativo.",
        "Cabe recurso extraordinario de revisión ante el propio Tribunal."
    ],
    correcta: 1,
    explicacion: "El art. 25 Ley 22/2006 establece claramente que <strong>la resolución que dicte el Tribunal pondrá fin a la vía administrativa y contra ella sólo cabrá la interposición del recurso contencioso-administrativo</strong>. No hay recursos administrativos posteriores; se agota la vía administrativa y solo cabe la vía judicial."
},

{
    texto: "El Tribunal es competente para emitir dictamen sobre:",
    opciones: [
        "Los proyectos de ordenanzas tributarias a solicitud de la Junta de Gobierno.",
        "Los proyectos de Ordenanzas fiscales, a solicitud del Área de Hacienda y Administración Pública, para elaboración de estudios y propuestas en materia tributaria.",
        "Todos los expedientes sancionadores en materia tributaria antes de su resolución."
    ],
    correcta: 1,
    explicacion: "Según el documento, el Tribunal es competente para <strong>emitir dictamen sobre los proyectos de Ordenanzas fiscales y, a solicitud del Área de Hacienda y Administración Pública, para elaboración de estudios y propuestas en materia tributaria</strong>. Es una función consultiva adicional a la función resolutoria de reclamaciones."
},

{
    texto: "El Tribunal estará integrado por:",
    opciones: [
        "Un número fijo de cinco miembros designados por el Pleno.",
        "Un número impar de miembros, con un mínimo de tres, todos ellos con voz y voto.",
        "Un Presidente, Vocales técnicos y un Secretario que asiste con voz pero sin voto."
    ],
    correcta: 1,
    explicacion: "Según el documento, el Tribunal estará integrado por <strong>un número impar de miembros, con un mínimo de tres, todos ellos con voz y voto</strong>. No se establece un número fijo, sino un mínimo, y todos los miembros tienen voz y voto, incluido quien ejerza la secretaría."
},

{
    texto: "El Presidente y los Vocales del Tribunal serán designados por:",
    opciones: [
        "El Alcalde, mediante Decreto.",
        "El Pleno del Ayuntamiento de Madrid, a propuesta del Alcalde.",
        "La Junta de Gobierno, a propuesta del titular del Área de Hacienda."
    ],
    correcta: 1,
    explicacion: "El art. 25 Ley 22/2006 establece que <strong>el Presidente y los Vocales del Tribunal serán designados por el Pleno del Ayuntamiento de Madrid, a propuesta del Alcalde</strong>, con el voto favorable de la mayoría absoluta de los miembros que legalmente lo integren, de entre personas de reconocida competencia técnica en materia tributaria."
},

{
    texto: "Los miembros del Tribunal serán designados de entre:",
    opciones: [
        "Funcionarios del Ayuntamiento de Madrid con titulación superior en Derecho o Económicas.",
        "Personas de reconocida competencia técnica en materia tributaria.",
        "Funcionarios de reconocida competencia técnica en materia tributaria, preferentemente del Cuerpo Superior de Interventores y Auditores."
    ],
    correcta: 1,
    explicacion: "El art. 25 Ley 22/2006 establece que los miembros del Tribunal serán designados <strong>de entre personas de reconocida competencia técnica en materia tributaria</strong>. No se exige que sean funcionarios (aunque el art. 25.4 indica que no habla de funcionarios sino de personas de reconocida competencia técnica), lo que permite flexibilidad en la designación."
},

{
    texto: "El mandato de los miembros del Tribunal tendrá una duración de:",
    opciones: [
        "Cuatro años, coincidiendo con el mandato de la Corporación.",
        "Cuatro años y cesarán por alguna de las causas previstas en el art. 137 de la LBRL.",
        "Seis años renovables, para garantizar su independencia."
    ],
    correcta: 1,
    explicacion: "Según el documento, <strong>el mandato de los miembros del Tribunal tendrá una duración de cuatro años y cesarán por alguna de las siguientes causas</strong> previstas en el artículo 137, apartado 4, de la Ley 7/1985: a petición propia, por acuerdo del Pleno con la misma mayoría que para su nombramiento, por condena firme por delito doloso, por sentencia firme que declare incompatibilidad, o por incapacidad."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 6: TEAM - COMPOSICIÓN Y ORGANIZACIÓN (10 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "El cargo de miembro del Tribunal se retribuirá:",
    opciones: [
        "Con cargo a los presupuestos municipales mediante retribuciones fijas mensuales.",
        "Con cargo a los presupuestos municipales.",
        "Mediante asistencias por cada sesión celebrada, con el límite establecido anualmente."
    ],
    correcta: 1,
    explicacion: "El documento establece que <strong>el cargo de miembro del Tribunal se retribuirá con cargo a los presupuestos municipales</strong>. No especifica el sistema concreto de retribución (fijo o por asistencias), pero sí que debe estar presupuestado y que corresponderá retribución económica por el desempeño de las funciones."
},

{
    texto: "A los miembros del Tribunal les será de aplicación el régimen de incompatibilidades previsto en:",
    opciones: [
        "La Ley 53/1984, de 26 de diciembre, de incompatibilidades del personal al servicio de las Administraciones Públicas.",
        "La normativa de incompatibilidades establecida para los funcionarios del Ayuntamiento de Madrid.",
        "El Reglamento Orgánico del Tribunal, que establece incompatibilidades específicas."
    ],
    correcta: 0,
    explicacion: "El documento establece que <strong>a los miembros del Tribunal les será de aplicación el régimen de incompatibilidades previsto en la Ley 53/1984, de 26 de diciembre</strong>, de incompatibilidades del personal al servicio de las Administraciones Públicas. Es el régimen general de incompatibilidades de los empleados públicos."
},

{
    texto: "El Tribunal funcionará:",
    opciones: [
        "En Pleno exclusivamente, con asistencia de todos sus miembros.",
        "En Pleno, en Salas de reclamaciones y a través de órganos unipersonales.",
        "En Salas de reclamaciones y mediante órganos unipersonales delegados del Presidente."
    ],
    correcta: 1,
    explicacion: "Según el documento, el Tribunal funcionará <strong>en Pleno, en Salas de reclamaciones y a través de órganos unipersonales</strong>. Esta estructura permite distribuir el trabajo y agilizar la tramitación según la complejidad y cuantía de las reclamaciones. Para asistir al Presidente en el ejercicio de sus funciones gubernativas se constituirá una Sala de Gobierno."
},

{
    texto: "El Pleno del Tribunal estará compuesto por:",
    opciones: [
        "El Presidente y los Vocales. A sus reuniones asistirá, con voz pero sin voto, quien ostente la Secretaría General del Tribunal.",
        "El Presidente, los Vocales y el Secretario General, todos con voz y voto.",
        "El Presidente, todos los Vocales de todas las Salas y el Secretario, con voz pero sin voto."
    ],
    correcta: 1,
    explicacion: "El documento establece que <strong>el Pleno del Tribunal estará compuesto por el Presidente y los Vocales</strong>. Recuérdese que el art. 25 Ley 22/2006 estableció que el Tribunal estaría integrado por un número impar de miembros <strong>todos ellos con voz y voto</strong>, lo que incluye a quien ostente la secretaría general."
},

{
    texto: "El Pleno del Tribunal estará compuesto por el Presidente y los Vocales. A sus reuniones asistirá:",
    opciones: [
        "El Secretario General del Tribunal, con voz pero sin voto.",
        "El titular del Área de Hacienda o persona en quien delegue, con voz pero sin voto.",
        "Todos los miembros del Tribunal tienen voz y voto, incluido quien ostente la Secretaría."
    ],
    correcta: 2,
    explicacion: "Aunque pueda parecer que el Secretario asiste sin voto (formulación habitual en órganos colegiados), el art. 25.3 Ley 22/2006 establece expresamente que el Tribunal estará integrado por un número impar de miembros <strong>todos ellos con voz y voto</strong>. Por tanto, <strong>todos los miembros, incluido quien ejerza la Secretaría General, tienen voz y voto</strong>."
},

{
    texto: "Para asistir al Presidente en el ejercicio de sus funciones gubernativas se constituirá:",
    opciones: [
        "Una Comisión Permanente integrada por el Presidente y dos Vocales.",
        "Una Sala de Gobierno.",
        "Un Consejo Asesor integrado por juristas expertos en Derecho Tributario."
    ],
    correcta: 1,
    explicacion: "El documento establece que <strong>para asistir al Presidente en el ejercicio de sus funciones gubernativas se constituirá una Sala de Gobierno</strong>. Es un órgano interno del Tribunal que ayuda al Presidente en las funciones de organización, gestión y gobierno del Tribunal, no en las funciones resolutorias."
},

{
    texto: "El funcionamiento del Tribunal se basará en criterios de:",
    opciones: [
        "Independencia técnica y celeridad procesal.",
        "Independencia técnica, celeridad y gratuidad.",
        "Objetividad, imparcialidad y seguridad jurídica."
    ],
    correcta: 1,
    explicacion: "El documento establece que <strong>su funcionamiento se basará en criterios de independencia técnica, celeridad y gratuidad</strong>. La independencia técnica garantiza imparcialidad; la celeridad, rapidez en la resolución; y la gratuidad, que no hay costas ni gastos para el reclamante."
},

{
    texto: "La composición, competencias, organización y funcionamiento del Tribunal se regularán por:",
    opciones: [
        "Reglamento aprobado por el Pleno, de acuerdo en todo caso con lo establecido en la Ley General Tributaria.",
        "Decreto del Alcalde, previo informe de la Asesoría Jurídica.",
        "Acuerdo de la Junta de Gobierno a propuesta del Área de Hacienda."
    ],
    correcta: 0,
    explicacion: "El art. 25 Ley 22/2006 establece que la composición, competencias, organización y funcionamiento del Tribunal, así como las reclamaciones que se regularán, <strong>se regularán por reglamento aprobado por el Pleno</strong>, de acuerdo en todo caso con lo establecido en la Ley General Tributaria y en la normativa estatal reguladora de las reclamaciones económico-administrativas."
},

{
    texto: "El Tribunal estará constituido por un número impar de miembros designados por el Pleno. El art. 25.4 de la Ley 22/2006 indica que no habla de:",
    opciones: [
        "Funcionarios, sino de personas de reconocida competencia técnica.",
        "Cargos políticos, sino de expertos técnicos independientes.",
        "Letrados, sino de personas con titulación en Derecho, Economía o Administración de Empresas."
    ],
    correcta: 0,
    explicacion: "El art. 25.4 Ley 22/2006 hace una aclaración importante: <strong>no habla de funcionarios sino de personas de reconocida competencia técnica</strong>. Esto significa que los miembros del TEAM no tienen que ser necesariamente funcionarios públicos; pueden ser profesionales del sector privado con reconocida competencia en materia tributaria."
},

{
    texto: "La reclamación regulada en el Reglamento del TEAM se entiende sin perjuicio de:",
    opciones: [
        "Los recursos administrativos ordinarios que procedan conforme a la legislación general.",
        "Los supuestos en los que la ley prevé la reclamación económico-administrativa ante los Tribunales Económico-Administrativos del Estado.",
        "El recurso de alzada ante el Tribunal Económico-Administrativo Regional de la Comunidad de Madrid."
    ],
    correcta: 1,
    explicacion: "El documento establece que la reclamación regulada <strong>se entiende sin perjuicio de los supuestos en los que la ley prevé la reclamación económico-administrativa ante los Tribunales Económico-Administrativos del Estado</strong>. Es decir, en ciertos casos (por ejemplo, tributos cedidos) puede corresponder la competencia a los Tribunales estatales o autonómicos."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 7: ASESORÍA JURÍDICA (10 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 28 de la Ley 22/2006, la asistencia jurídica al Alcalde, a la Junta de Gobierno y a los órganos directivos corresponderá a:",
    opciones: [
        "Los Letrados del Ayuntamiento de Madrid integrados en la Asesoría Jurídica.",
        "La Asesoría Jurídica del Ayuntamiento de Madrid.",
        "El Servicio Jurídico de la Administración Municipal bajo dirección del titular del Área competente."
    ],
    correcta: 0,
    explicacion: "El art. 28 Ley 22/2006 establece que <strong>la asistencia jurídica al Alcalde, a la Junta de Gobierno y a los órganos directivos</strong>, comprensiva del asesoramiento jurídico y de la representación y defensa en juicio del Ayuntamiento y de los Organismos autónomos y Entidades públicas empresariales municipales, <strong>corresponderá a los Letrados del Ayuntamiento de Madrid integrados en la Asesoría Jurídica</strong>."
},

{
    texto: "La Asesoría Jurídica es un órgano directivo cuyo titular será nombrado y separado por:",
    opciones: [
        "La Junta de Gobierno, entre funcionarios del Estado, de las Comunidades Autónomas o de los Entes Locales.",
        "El Alcalde, previo informe favorable de la Junta de Gobierno.",
        "El Pleno, a propuesta del Alcalde."
    ],
    correcta: 0,
    explicacion: "El art. 28 Ley 22/2006 establece que <strong>la Asesoría Jurídica es un órgano directivo cuyo titular será nombrado y separado por la Junta de Gobierno</strong>, entre funcionarios del Estado, de las Comunidades Autónomas o de los Entes Locales a los que se exija para su ingreso el título de licenciado en Derecho."
},

{
    texto: "El titular de la Asesoría Jurídica será nombrado entre:",
    opciones: [
        "Funcionarios de Administración Local con habilitación de carácter nacional, subescala Secretaría.",
        "Funcionarios del Estado, de las Comunidades Autónomas o de los Entes Locales a los que se exija para su ingreso el título de licenciado en Derecho.",
        "Letrados colegiados con al menos 10 años de ejercicio profesional."
    ],
    correcta: 1,
    explicacion: "El art. 28 Ley 22/2006 establece que el titular será nombrado <strong>entre funcionarios del Estado, de las Comunidades Autónomas o de los Entes Locales a los que se exija para su ingreso el título de licenciado en Derecho</strong>, o bien funcionario de Administración local con habilitación de carácter nacional. No se admiten profesionales privados para el cargo de titular."
},

{
    texto: "Según el art. 51 del Reglamento Orgánico (en su redacción actual tras la modificación de 2023), la Asesoría Jurídica es el órgano encargado de:",
    opciones: [
        "La asistencia jurídica del Ayuntamiento de Madrid y a sus organismos públicos.",
        "La representación y defensa en juicio del Ayuntamiento exclusivamente.",
        "El asesoramiento jurídico previo y preceptivo en todos los expedientes administrativos."
    ],
    correcta: 0,
    explicacion: "El art. 51.1 del Reglamento Orgánico (modificado por Reglamento Orgánico 1/2023) establece que <strong>la Asesoría Jurídica es el órgano encargado de la asistencia jurídica del Ayuntamiento de Madrid y a sus organismos públicos</strong>, en el que se integra el Cuerpo de Letrados del Ayuntamiento de Madrid, así como el resto de los empleados públicos que componen sus diferentes unidades."
},

{
    texto: "La Asesoría Jurídica se adscribe al Área que ostente la competencia de dirección superior de:",
    opciones: [
        "Los servicios jurídicos.",
        "Los servicios de asesoramiento y defensa legal.",
        "La administración de justicia y asuntos jurídicos."
    ],
    correcta: 0,
    explicacion: "Según el documento, <strong>la Asesoría Jurídica se adscribe al Área que ostente la competencia de dirección superior de los servicios jurídicos</strong>. La redacción es genérica para adaptarse a las diferentes estructuras organizativas que pueda adoptar el Ayuntamiento en cada mandato."
},

{
    texto: "En la Asesoría Jurídica están integrados:",
    opciones: [
        "Únicamente los Letrados del Ayuntamiento de Madrid.",
        "Los letrados de los servicios jurídicos del Ayuntamiento de Madrid y el resto del personal funcionario que integren las diferentes unidades dependientes de aquélla.",
        "Los Letrados del Ayuntamiento y el resto de empleados públicos que componen sus diferentes unidades."
    ],
    correcta: 2,
    explicacion: "El art. 51.1 del Reglamento Orgánico establece que en la Asesoría Jurídica <strong>se integra el Cuerpo de Letrados del Ayuntamiento de Madrid, así como el resto de los empleados públicos que componen sus diferentes unidades dependientes de aquélla</strong>. Incluye tanto funcionarios como personal laboral."
},

{
    texto: "Los puestos de trabajo de Letrados figurarán:",
    opciones: [
        "En la relación de puestos de trabajo de la Asesoría Jurídica, de la que dependerán orgánica y funcionalmente.",
        "En las relaciones de puestos de trabajo de las diferentes Áreas del Ayuntamiento, pero dependerán funcionalmente de la Asesoría Jurídica.",
        "En una relación de puestos de trabajo específica del Cuerpo de Letrados, independiente de la estructura orgánica."
    ],
    correcta: 0,
    explicacion: "El documento establece que <strong>los puestos de trabajo de Letrados figurarán, sin exclusión alguna, en la relación de puestos de trabajo de la Asesoría Jurídica</strong>, de la que dependerán orgánica y funcionalmente. Esto garantiza la unidad y coherencia del servicio jurídico municipal."
},

{
    texto: "La Asesoría Jurídica, sus funciones y el Cuerpo de Letrados del Ayuntamiento de Madrid se regularán por:",
    opciones: [
        "Su propio reglamento orgánico.",
        "El Reglamento Orgánico del Gobierno y de la Administración del Ayuntamiento de Madrid.",
        "La Ley 22/2006 de Capitalidad y de Régimen Especial de Madrid."
    ],
    correcta: 0,
    explicacion: "El art. 51.2 del Reglamento Orgánico (modificado en 2023) establece que <strong>la Asesoría Jurídica, sus funciones y el Cuerpo de Letrados del Ayuntamiento de Madrid se regularán por su propio reglamento orgánico</strong>. Este es el Reglamento Orgánico 1/2023, de 31 de enero, de la Asesoría Jurídica del Ayuntamiento de Madrid."
},

{
    texto: "El Director General de la Asesoría Jurídica asume la dirección:",
    opciones: [
        "Del servicio jurídico del Ayuntamiento de Madrid únicamente.",
        "Del servicio jurídico del Ayuntamiento de Madrid y sus organismos públicos.",
        "De todos los servicios de asesoramiento legal del sector público municipal."
    ],
    correcta: 1,
    explicacion: "Según el documento, <strong>el Director General de la Asesoría Jurídica asume la dirección del servicio jurídico del Ayuntamiento de Madrid y sus organismos públicos</strong>, y en tal concepto le corresponde la dirección, coordinación e inspección de las funciones encomendadas a los servicios jurídicos municipales."
},

{
    texto: "La Dirección General de la Asesoría Jurídica y las unidades que la forman desempeñan sus funciones bajo la superior y única dirección:",
    opciones: [
        "Del titular del Área de la que dependa la Asesoría Jurídica.",
        "Del titular del Área de la que dependa orgánicamente, es el Área de Coordinación Institucional.",
        "Del Alcalde, como máximo responsable de la Administración municipal."
    ],
    correcta: 1,
    explicacion: "El documento establece que <strong>la Dirección General de la Asesoría Jurídica y las unidades que la forman, desempeñan sus funciones bajo la superior y única dirección del titular del Área de la que dependa orgánicamente</strong>, que como ya se ha indicado, es el <strong>Área de Coordinación Institucional</strong> (o el Área que tenga las competencias en servicios jurídicos en cada momento)."
},

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 8: AGENCIA TRIBUTARIA MADRID (10 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "Según el art. 26 de la Ley 22/2006, para la consecución de una gestión integral del sistema tributario municipal, el Pleno podrá crear:",
    opciones: [
        "Una Agencia Tributaria como organismo autónomo de carácter administrativo.",
        "Un ente autónomo de gestión tributaria.",
        "Una empresa pública de gestión de ingresos municipales."
    ],
    correcta: 1,
    explicacion: "El art. 26 Ley 22/2006 establece que para la consecución de una gestión integral del sistema tributario municipal, regido por los principios de eficiencia, suficiencia, agilidad y unidad en la gestión, <strong>el Pleno podrá crear un ente autónomo de gestión tributaria</strong>, responsable de ejercer como propias las competencias municipales de gestión en materia tributaria."
},

{
    texto: "El Pleno determinará las competencias, organización y funcionamiento de dicho ente, al que corresponderá ejercer la función de:",
    opciones: [
        "Recaudación de los tributos municipales en régimen de gestión directa.",
        "Recaudación, respetando, en su caso, lo dispuesto en la legislación básica en materia de gobierno y administración local.",
        "Gestión tributaria integral, incluida liquidación, inspección y recaudación."
    ],
    correcta: 1,
    explicacion: "El art. 26 Ley 22/2006 establece que <strong>al que corresponderá ejercer la función de recaudación</strong>, respetando, en su caso, lo dispuesto en la legislación básica en materia de gobierno y administración local. Aunque puede tener más funciones (gestión, liquidación, inspección), la ley menciona expresamente la recaudación."
},

{
    texto: "La función de recaudación se ejercerá por el titular del ente de gestión tributaria, así como:",
    opciones: [
        "Por los funcionarios adscritos al mismo de acuerdo con las disposiciones que, en su caso, se adopten.",
        "Por funcionarios con habilitación nacional en exclusiva.",
        "Por el personal técnico especializado que designe la Junta de Gobierno."
    ],
    correcta: 0,
    explicacion: "El art. 26 Ley 22/2006 establece que la función de recaudación se ejercerá <strong>por el titular del ente de gestión tributaria</strong>, así como <strong>por los funcionarios adscritos al mismo de acuerdo con las disposiciones que, en su caso, se adopten</strong>. Permite flexibilidad organizativa y de personal."
},

{
    texto: "La Agencia Tributaria Madrid es un Organismo Autónomo adscrito al:",
    opciones: [
        "Área de Hacienda y Administración Pública del Ayuntamiento de Madrid.",
        "Área competente en materia de Hacienda.",
        "Pleno del Ayuntamiento como órgano de control tributario."
    ],
    correcta: 0,
    explicacion: "Según el documento, <strong>la Agencia Tributaria Madrid es un Organismo Autónomo adscrito al Área de Hacienda y Administración Pública del Ayuntamiento de Madrid</strong>, creado por Acuerdo del Pleno del Ayuntamiento de Madrid de 29 de octubre de 2004, al que corresponden las competencias que a éste le atribuya la legislación para la aplicación efectiva de su sistema tributario."
},

{
    texto: "La Agencia Tributaria Madrid es un Organismo Autónomo dotado de:",
    opciones: [
        "Personalidad jurídica pública diferenciada y autonomía de gestión.",
        "Personalidad jurídica pública, patrimonio propio y autonomía de gestión para el cumplimiento de sus fines.",
        "Plena capacidad jurídica para el ejercicio de todas las potestades administrativas."
    ],
    correcta: 1,
    explicacion: "El documento establece que la Agencia Tributaria Madrid es <strong>un Organismo Autónomo dotado de personalidad jurídica pública diferenciada, patrimonio propio y autonomía de gestión para el cumplimiento de sus fines</strong>. Estos tres elementos (personalidad, patrimonio y autonomía) son característicos de los organismos autónomos."
},

{
    texto: "Dentro de la esfera de sus competencias, le corresponden las potestades administrativas precisas para el cumplimiento de sus fines, en los términos establecidos en:",
    opciones: [
        "Sus Estatutos y de acuerdo con la legislación aplicable.",
        "La Ley 22/2006 de Capitalidad y de Régimen Especial de Madrid.",
        "El Reglamento Orgánico del Gobierno y de la Administración del Ayuntamiento de Madrid."
    ],
    correcta: 0,
    explicacion: "El documento establece que <strong>dentro de la esfera de sus competencias, le corresponden las potestades administrativas precisas para el cumplimiento de sus fines, en los términos establecidos en sus Estatutos</strong> y de acuerdo con la legislación aplicable. Los Estatutos de la Agencia fueron aprobados el 22 de diciembre de 2008."
},

{
    texto: "De conformidad con lo previsto en el artículo 26 de la Ley 22/2006, la Agencia Tributaria Madrid ejerce como propias las competencias municipales de gestión en materia tributaria, y las relativas a:",
    opciones: [
        "Aquellos recursos públicos cuya gestión le corresponda o se le encomiende.",
        "La recaudación en período ejecutivo de todos los ingresos municipales.",
        "La inspección tributaria y el régimen sancionador."
    ],
    correcta: 0,
    explicacion: "El documento indica que de conformidad con el art. 26 Ley 22/2006, la Agencia Tributaria Madrid <strong>ejerce como propias las competencias municipales de gestión en materia tributaria, y las relativas a aquellos recursos públicos cuya gestión le corresponda o se le encomiende</strong>. Esto incluye tributos y otros ingresos de derecho público."
},

{
    texto: "La Agencia Tributaria Madrid se adscribe al Área competente en materia de Hacienda, a cuyo titular le corresponde:",
    opciones: [
        "La dirección estratégica de la misma, así como la evaluación y el control de los resultados de su actividad.",
        "La supervisión directa de todas las actuaciones de gestión, liquidación e inspección.",
        "El nombramiento del Presidente y Director de la Agencia."
    ],
    correcta: 0,
    explicacion: "El documento establece que la Agencia se adscribe al Área competente en materia de Hacienda, <strong>a cuyo titular le corresponde la dirección estratégica de la misma, así como la evaluación y el control de los resultados de su actividad</strong>. No supervisa actuaciones concretas (la Agencia tiene autonomía de gestión), sino que ejerce dirección estratégica y control de resultados."
},

{
    texto: "Los créditos y la recaudación derivados de los tributos o recursos de derecho público gestionados por la Agencia serán:",
    opciones: [
        "Titularidad del Ayuntamiento de Madrid o, en su caso, de los organismos autónomos dependientes de éste.",
        "Titularidad de la Agencia Tributaria Madrid como organismo gestor.",
        "Compartidos entre el Ayuntamiento y la Agencia según los porcentajes que establezcan los Estatutos."
    ],
    correcta: 0,
    explicacion: "El documento establece claramente que <strong>los créditos y la recaudación derivados de los tributos o recursos de derecho público gestionados por la Agencia serán titularidad del Ayuntamiento de Madrid</strong> o, en su caso, de los organismos autónomos dependientes de éste a cuyo favor hubiesen sido ordenados e impuestos. La Agencia gestiona pero no es titular de los ingresos."
},

{
    texto: "Los órganos de dirección de la Agencia Tributaria Madrid son:",
    opciones: [
        "Consejo Rector, Presidente y Vicepresidente.",
        "Consejo Rector, Presidente, Vicepresidente y Director.",
        "Director General y Subdirectores de Área."
    ],
    correcta: 1,
    explicacion: "El documento establece que <strong>los órganos de dirección de la Agencia Tributaria Madrid son los siguientes: Consejo Rector, Presidente, Vicepresidente y Director</strong>. Estos son los órganos superiores de gobierno y gestión del organismo autónomo, sin perjuicio de otros órganos ejecutivos."
},
,
// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 9: PREGUNTAS ULTRA-DIFÍCILES NIVEL EXAMEN SERIO (30 preguntas)
// ═════════════════════════════════════════════════════════════════════════════

{
    texto: "La Intervención General ejerce sus funciones con plena autonomía funcional, pero se adscribe orgánicamente al Área de Hacienda. Si el titular del Área de Hacienda ordena a la Intervención modificar un informe de fiscalización desfavorable, el Interventor:",
    opciones: [
        "Debe obedecer por estar adscrito orgánicamente al Área, modificando el informe.",
        "Puede negarse invocando su autonomía funcional, manteniendo el informe original.",
        "Debe elevar consulta a la Asesoría Jurídica sobre la procedencia de la orden."
    ],
    correcta: 1,
    explicacion: "La <strong>adscripción orgánica</strong> al Área de Hacienda es puramente administrativa (ubicación, recursos). La <strong>autonomía funcional</strong> (art. 59.2 Reglamento Orgánico) implica que <strong>en el ejercicio de sus funciones de fiscalización, la Intervención actúa con independencia total</strong> de los órganos fiscalizados, incluido el Área al que se adscribe. El Interventor NO puede modificar informes por presión del Área; su criterio técnico es independiente."
},

{
    texto: "El art. 59.3 del Reglamento Orgánico permite atribuir al Interventor General 'funciones distintas o complementarias' según el art. 166 del RDL 781/1986. ¿Puede la Junta de Gobierno atribuirle funciones de gestión económica directa de un servicio municipal?",
    opciones: [
        "Sí, porque son funciones 'complementarias' de su función de control financiero.",
        "No, porque las funciones de gestión son incompatibles con las de fiscalización del mismo servicio.",
        "Sí, siempre que no fiscalice posteriormente esa misma gestión."
    ],
    correcta: 1,
    explicacion: "Aunque el art. 59.3 permite atribuir funciones complementarias, existe un <strong>principio de incompatibilidad entre funciones de gestión y de fiscalización</strong>. El Interventor NO puede gestionar y luego fiscalizar lo que él mismo gestionó (conflicto de intereses). Las funciones complementarias pueden ser de asesoramiento, coordinación, formación, pero <strong>nunca de gestión económica directa</strong> de servicios que luego deba fiscalizar."
},

{
    texto: "La Intervención formula reparo a un expediente de gasto. El Alcalde ratifica el acto. ¿A quién se da cuenta de esta ratificación?",
    opciones: [
        "Al Pleno del Ayuntamiento en la siguiente sesión.",
        "A la Junta de Gobierno para su conocimiento.",
        "Al Tribunal de Cuentas si el gasto supera determinada cuantía."
    ],
    correcta: 0,
    explicacion: "Cuando hay <strong>discrepancia entre el órgano gestor (Alcalde) y la Intervención (reparo)</strong>, y el Alcalde ratifica el acto asumiendo la responsabilidad, la normativa de haciendas locales establece que <strong>debe darse cuenta al Pleno</strong>. El Pleno, como órgano de control político, debe conocer las discrepancias entre la gestión y el control financiero. Es un mecanismo de transparencia y control."
},

{
    texto: "El Tesorero municipal gestiona un préstamo a corto plazo (operación de tesorería) para cubrir un desfase temporal de tesorería. Esta operación requiere:",
    opciones: [
        "Fiscalización previa de la Intervención General antes de su formalización.",
        "Solo comunicación posterior a la Intervención para su registro contable.",
        "Autorización previa de la Junta de Gobierno si supera el 10% de los ingresos corrientes."
    ],
    correcta: 0,
    explicacion: "Todas las operaciones que generen derechos u obligaciones de contenido económico están sujetas a <strong>fiscalización previa de la Intervención</strong> (función interventora). Aunque las operaciones de tesorería son gestión del Tesorero, <strong>requieren fiscalización previa</strong> para verificar que se ajustan a la normativa (límites, procedimiento). No es una mera comunicación posterior."
},

{
    texto: "El art. 24 Ley 22/2006 dice que el Tesorero será funcionario con habilitación nacional 'o estatal'. ¿Qué significa esta alternativa 'o estatal'?",
    opciones: [
        "Que puede ser funcionario del Estado con titulación equivalente.",
        "Que tras la supresión de las habilitaciones 'nacionales', ahora son 'estatales' (nueva denominación).",
        "Que puede ser funcionario de la Administración del Estado destinado en el Ayuntamiento."
    ],
    correcta: 1,
    explicacion: "La normativa posterior a 2007 <strong>suprimió las habilitaciones de 'carácter nacional'</strong> (Interventores, Secretarios, Tesoreros) y las sustituyó por <strong>funcionarios de Administración Local con habilitación de carácter 'estatal'</strong> (nueva denominación). El 'o estatal' no es una alternativa distinta, sino la <strong>actualización terminológica</strong> de lo que antes se llamaba 'nacional'. Es el mismo cuerpo con nombre nuevo."
},

{
    texto: "La Cuenta General del Ayuntamiento es formada por la Intervención General y aprobada por el Pleno tras informe de la Comisión Especial de Cuentas. Si el Pleno no aprueba la Cuenta (voto en contra de la mayoría):",
    opciones: [
        "La Cuenta queda rechazada y debe reformularse por la Intervención.",
        "La Cuenta se considera aprobada por silencio administrativo positivo tras el plazo legal.",
        "El Pleno puede no aprobarla, pero debe remitirse al Tribunal de Cuentas igualmente."
    ],
    correcta: 2,
    explicacion: "La <strong>aprobación del Pleno</strong> de la Cuenta General es un trámite de control político, pero <strong>la Cuenta debe rendirse al Tribunal de Cuentas</strong> con independencia de si el Pleno la aprobó o no. Si el Pleno no la aprueba, eso se hace constar, pero <strong>la obligación de rendir cuentas al Tribunal de Cuentas subsiste</strong>. El Tribunal hará su propia fiscalización externa."
},

{
    texto: "Un Concejal de la oposición solicita a la Intervención General copia de un informe de auditoría sobre un contrato municipal. La Intervención:",
    opciones: [
        "Debe facilitar la copia porque los Concejales tienen derecho a información.",
        "Puede denegar la copia si el informe no ha sido elevado aún al Pleno.",
        "Debe consultar al órgano auditado si autoriza la entrega de la documentación."
    ],
    correcta: 0,
    explicacion: "Los <strong>Concejales tienen derecho pleno a la información</strong> (art. 77 LBRL) sobre todos los expedientes y documentación municipal. Los informes de control financiero (auditorías) son <strong>documentos municipales</strong> que los Concejales pueden solicitar. La Intervención debe facilitar la copia sin necesidad de autorización de terceros ni esperar a que se eleven al Pleno."
},

{
    texto: "El TEAM resuelve una reclamación económico-administrativa estimándola parcialmente. El contribuyente considera insuficiente la estimación. ¿Puede interponer recurso de alzada ante otro Tribunal?",
    opciones: [
        "Sí, ante el Tribunal Económico-Administrativo Regional de Madrid.",
        "No, la resolución del TEAM pone fin a la vía administrativa; solo cabe recurso contencioso-administrativo.",
        "Sí, puede interponer recurso extraordinario de revisión ante el mismo TEAM."
    ],
    correcta: 1,
    explicacion: "El art. 25 Ley 22/2006 es tajante: <strong>la resolución del TEAM pondrá fin a la vía administrativa y contra ella sólo cabrá la interposición del recurso contencioso-administrativo</strong>. NO hay recurso de alzada (no hay instancia superior administrativa). El contribuyente insatisfecho debe acudir a la vía judicial, no a otro tribunal administrativo."
},

{
    texto: "El Pleno designa a una persona como Vocal del TEAM. Dos meses después, esa persona es condenada por sentencia firme por un delito imprudente. ¿Cesa automáticamente?",
    opciones: [
        "Sí, porque toda condena penal firme es causa de cese según el art. 137.4 LBRL.",
        "No, porque el art. 137.4 LBRL solo prevé cese por condena por delito doloso, no imprudente.",
        "Solo cesa si la condena lleva aparejada inhabilitación para empleo público."
    ],
    correcta: 1,
    explicacion: "El art. 137.4 LBRL establece como causa de cese de los miembros del TEAM <strong>'por condena firme por delito doloso'</strong>. La diferencia es crucial: <strong>delito doloso = con intención</strong>; delito imprudente = por negligencia. Solo los delitos <strong>dolosos</strong> son causa de cese automático. Los imprudentes NO, salvo que lleven inhabilitación."
},

{
    texto: "El TEAM tiene competencia para 'emitir dictamen sobre los proyectos de Ordenanzas fiscales a solicitud del Área de Hacienda'. Este dictamen es:",
    opciones: [
        "Preceptivo y vinculante; sin él no puede aprobarse la Ordenanza.",
        "Facultativo (solo si se solicita) y no vinculante.",
        "Preceptivo pero no vinculante; debe solicitarse siempre."
    ],
    correcta: 1,
    explicacion: "El documento dice que el TEAM puede emitir dictamen <strong>'a solicitud del Área de Hacienda'</strong>. Esto significa que <strong>es facultativo</strong> (el Área puede solicitarlo o no). Además, siendo un dictamen (no una resolución), <strong>no es vinculante</strong>; es un asesoramiento técnico que el Área puede seguir o no. Es una función consultiva adicional del TEAM."
},

{
    texto: "El Pleno designa a los miembros del TEAM 'con el voto favorable de la mayoría absoluta'. En un Pleno de 57 Concejales, ¿cuántos votos son necesarios?",
    opciones: [
        "29 votos (mayoría absoluta del número legal de miembros).",
        "28 votos (mayoría simple de los presentes si todos asisten).",
        "La mayoría de los votos emitidos, excluidas las abstenciones."
    ],
    correcta: 0,
    explicacion: "El art. 25 Ley 22/2006 exige <strong>'el voto favorable de la mayoría absoluta de los miembros que legalmente lo integren'</strong>. Mayoría absoluta = <strong>más de la mitad del número legal de miembros del Pleno</strong>. 57 Concejales → mayoría absoluta = 29 votos. No importa cuántos estén presentes; se necesitan 29 votos a favor. Las abstenciones NO cuentan como votos favorables."
},

{
    texto: "Un miembro del TEAM fallece antes de cumplir los cuatro años de mandato. Para cubrir la vacante, el Pleno debe:",
    opciones: [
        "Designar un nuevo miembro por el tiempo que reste hasta completar los cuatro años del anterior.",
        "Designar un nuevo miembro por cuatro años completos nuevos.",
        "Designar un suplente de entre los Vocales restantes del Tribunal."
    ],
    correcta: 0,
    explicacion: "Aunque el Reglamento del TEAM no lo especifica expresamente, el principio general en órganos colegiados es que <strong>quien cubre una vacante lo hace por el tiempo que restara al sustituido</strong>, no por un mandato nuevo completo. Esto evita que los mandatos se descompensen. El nuevo Vocal termina cuando hubiera terminado el anterior (a los cuatro años desde la designación original)."
},

{
    texto: "La Asesoría Jurídica del Ayuntamiento de Madrid, tras la modificación de 2023, se regula por su propio Reglamento Orgánico (Reglamento 1/2023). Los artículos 52 a 57 del Reglamento Orgánico del Gobierno y Administración fueron:",
    opciones: [
        "Modificados y adaptados al nuevo Reglamento de la Asesoría Jurídica.",
        "Suprimidos, porque el Reglamento 1/2023 de la Asesoría Jurídica los sustituye.",
        "Mantenidos con remisión al Reglamento específico de la Asesoría."
    ],
    correcta: 1,
    explicacion: "El documento indica expresamente que los artículos <strong>52, 53, 54, 55, 56 y 57 fueron SUPRIMIDOS</strong> por el Reglamento Orgánico 1/2023 de la Asesoría Jurídica. Solo se mantiene el art. 51 (modificado) que dice que la Asesoría Jurídica se regularán por su propio reglamento. Los artículos antiguos desaparecen porque el nuevo Reglamento específico de 2023 los sustituye completamente."
},

{
    texto: "El art. 28 Ley 22/2006 dice que la asistencia jurídica 'corresponderá a los Letrados del Ayuntamiento de Madrid integrados en la Asesoría Jurídica'. ¿Puede el Alcalde contratar abogados externos para un asunto concreto si lo considera conveniente?",
    opciones: [
        "No, porque la asistencia jurídica corresponde exclusivamente a los Letrados municipales integrados en la Asesoría.",
        "Sí, en casos excepcionales de extraordinaria complejidad o especialización, previo informe de la Asesoría Jurídica.",
        "Sí, mediante contrato de servicios profesionales sin más requisitos."
    ],
    correcta: 1,
    explicacion: "Aunque el art. 28 atribuye la asistencia jurídica a los <strong>Letrados municipales</strong>, la normativa de contratación pública y el art. 551.3 LOPJ permiten <strong>contratar abogados externos en casos excepcionales</strong>: extraordinaria complejidad técnica, especialización no disponible internamente, volumen de trabajo que excede la capacidad. Requiere <strong>justificación motivada e informe de la Asesoría Jurídica</strong> sobre la necesidad."
},

{
    texto: "Conforme a lo dispuesto en el art. 551.3 LOPJ, el Ayuntamiento y los Organismos autónomos podrán designar para su representación y defensa en juicio a abogado colegiado o confiar éste solo la defensa y la representación a:",
    opciones: [
        "Un Letrado del Ayuntamiento de Madrid, en cuyo caso no es necesaria la colegiación.",
        "Un procurador, cuando la legislación procesal así lo requiera.",
        "La Asesoría Jurídica en su conjunto, sin designación individualizada."
    ],
    correcta: 1,
    explicacion: "El art. 551.3 LOPJ permite dos opciones: <strong>designar abogado colegiado</strong> (externo o Letrado del Ayuntamiento colegiado) <strong>o confiar éste solo la defensa y la representación a un procurador</strong>. En el segundo caso, el procurador representa al Ayuntamiento sin necesidad de abogado aparte (opción menos usada). Los Letrados municipales deben estar colegiados para ejercer ante los tribunales."
},

{
    texto: "Los Letrados del Ayuntamiento de Madrid pueden participar en órganos colegiados:",
    opciones: [
        "Solo cuando sean designados para formar parte de los mismos por normativa específica.",
        "Cuando sean designados para formar parte de los mismos o cuando así esté previsto en la normativa vigente.",
        "Únicamente en órganos consultivos, no en órganos decisorios."
    ],
    correcta: 1,
    explicacion: "El documento establece que <strong>los Letrados del Ayuntamiento de Madrid pueden participar en órganos colegiados cuando sean designados para formar parte de los mismos o cuando así esté previsto en la normativa vigente</strong>. Esto incluye mesas de contratación, tribunales de selección, comisiones técnicas, etc. Pueden tener voz y voto o solo voz según el caso."
},

{
    texto: "En casos de extraordinaria y urgente necesidad, el titular del Área de la que dependa la Asesoría Jurídica podrá:",
    opciones: [
        "Habilitar a funcionarios del Ayuntamiento que sean licenciados en Derecho para ejercer funciones propias de Letrado temporalmente.",
        "Habilitar a funcionarios del Ayuntamiento que sean licenciados en Derecho, para que ejerzan funciones propias de Letrado, con carácter provisional y sin ocupar puesto de Letrado.",
        "Contratar abogados externos mediante procedimiento de urgencia sin más trámites."
    ],
    correcta: 1,
    explicacion: "El documento prevé que en casos excepcionales, el titular del Área <strong>podrá habilitar a funcionarios del Ayuntamiento que sean licenciados en Derecho, para que ejerzan funciones propias de Letrado</strong>, con carácter <strong>provisional</strong> y <strong>sin ocupar, en ningún caso, puesto de Letrado</strong>. Es una habilitación temporal de emergencia. La habilitación se extinguirá en el plazo de un año si no se revoca previamente."
},

{
    texto: "La Agencia Tributaria Madrid gestiona la recaudación de los tributos municipales. Los créditos recaudados son titularidad:",
    opciones: [
        "De la Agencia Tributaria Madrid como organismo gestor.",
        "Del Ayuntamiento de Madrid o del organismo a cuyo favor se ordenaron.",
        "Compartida entre el Ayuntamiento (principal) y la Agencia (comisión de gestión)."
    ],
    correcta: 1,
    explicacion: "El documento es claro: <strong>los créditos y la recaudación derivados de los tributos o recursos de derecho público gestionados por la Agencia serán titularidad del Ayuntamiento de Madrid</strong> o, en su caso, <strong>de los organismos autónomos dependientes de éste a cuyo favor hubiesen sido ordenados e impuestos</strong>. La Agencia gestiona pero NO es titular de los ingresos."
},

{
    texto: "El art. 26 Ley 22/2006 dice que la función de recaudación 'se ejercerá por el titular del ente de gestión tributaria'. En Madrid, ¿quién es ese titular?",
    opciones: [
        "El Presidente de la Agencia Tributaria Madrid.",
        "El Director de la Agencia Tributaria Madrid.",
        "El Consejo Rector de la Agencia Tributaria Madrid."
    ],
    correcta: 1,
    explicacion: "Aunque el art. 26 Ley 22/2006 habla del <strong>'titular del ente'</strong>, los Estatutos de la Agencia Tributaria Madrid establecen que el <strong>órgano directivo ejecutivo</strong> es el <strong>Director</strong>. El Presidente es un órgano de representación y dirección colegiada (preside el Consejo Rector), pero <strong>el Director es quien ejerce la dirección ejecutiva</strong>, incluida la función de recaudación."
},

{
    texto: "La Agencia Tributaria Madrid tiene autonomía de gestión. ¿Puede el titular del Área de Hacienda anular un acto de liquidación tributaria dictado por la Agencia?",
    opciones: [
        "Sí, porque el Área tiene la dirección estratégica de la Agencia.",
        "No, porque la Agencia ejerce 'como propias' las competencias municipales de gestión tributaria.",
        "Sí, mediante avocación o revisión de oficio si el acto es contrario a Derecho."
    ],
    correcta: 1,
    explicacion: "El art. 26 Ley 22/2006 establece que la Agencia <strong>ejerce 'como propias'</strong> las competencias municipales de gestión tributaria. Esto significa que <strong>la Agencia sustituye al Ayuntamiento</strong> en esas competencias; los actos son de la Agencia, no del Ayuntamiento. El Área de Hacienda tiene dirección estratégica y control de resultados, pero <strong>NO puede anular actos concretos</strong>. El contribuyente recurre ante la Agencia o el TEAM."
},

{
    texto: "Los Estatutos de la Agencia Tributaria fueron aprobados el 22 de diciembre de 2008 y publicados en el Boletín del Ayuntamiento el 30 de diciembre de 2008. ¿Cuándo entraron en vigor?",
    opciones: [
        "El 1 de enero de 2009 (como los presupuestos municipales).",
        "A los 20 días de su publicación en el Boletín (plazo general).",
        "El mismo día de su publicación en el Boletín o al día siguiente."
    ],
    correcta: 1,
    explicacion: "Las disposiciones generales (reglamentos, estatutos) entran en vigor según lo que dispongan o, en su defecto, <strong>a los 20 días de su publicación</strong> en el boletín oficial correspondiente (art. 2.1 Código Civil, aplicable supletoriamente). Salvo que los Estatutos dijeran expresamente otra cosa, entrarían en vigor <strong>20 días después del 30 de diciembre de 2008</strong>."
},

{
    texto: "El Consejo Rector de la Agencia Tributaria Madrid es un órgano colegiado. Sus acuerdos requieren:",
    opciones: [
        "Mayoría simple de los miembros presentes con voto.",
        "Mayoría absoluta de los miembros que lo componen legalmente.",
        "Lo que establezcan sus normas de funcionamiento aprobadas por el propio Consejo."
    ],
    correcta: 2,
    explicacion: "Los <strong>órganos colegiados de los organismos autónomos</strong> funcionan según sus <strong>normas de régimen interior</strong> o estatutos. Normalmente se rigen por <strong>mayoría simple</strong> de presentes salvo que los Estatutos exijan mayoría especial para ciertas materias. Sin conocer los Estatutos concretos de la Agencia, la respuesta correcta es que <strong>se rige por lo que establezcan sus normas de funcionamiento</strong>."
},

{
    texto: "El art. 60.2 del Reglamento Orgánico dice que el Tesorero 'dependerá directamente de su titular (del Área de Hacienda), o del director general con competencias en materia de política financiera, de acuerdo con lo que determine el Alcalde'. ¿Puede el Alcalde hacer depender al Tesorero del Interventor General?",
    opciones: [
        "Sí, porque el Alcalde tiene libertad organizativa dentro del Área de Hacienda.",
        "No, porque el Reglamento solo admite dependencia del titular del Área o del DG de política financiera.",
        "Sí, si lo justifica por razones de coordinación del control financiero."
    ],
    correcta: 1,
    explicacion: "El art. 60.2 es <strong>taxativo</strong>: el Tesorero dependerá <strong>directamente del titular del Área o del director general con competencias en materia de política financiera</strong>. El Alcalde puede elegir entre estas <strong>dos opciones</strong>, pero <strong>no tiene libertad para establecer otra dependencia</strong> (como del Interventor). Las normas orgánicas delimitan las opciones del Alcalde."
},

{
    texto: "La Intervención General formula reparo de legalidad a un expediente. El órgano gestor está convencido de que la Intervención se equivoca. ¿Puede el gestor solicitar un informe de la Asesoría Jurídica para resolver la discrepancia?",
    opciones: [
        "Sí, y si la Asesoría Jurídica contradice el reparo, el gestor puede continuar sin más trámites.",
        "Sí, pero el informe de la Asesoría no elimina el reparo; el gestor debe ratificar asumiendo responsabilidad.",
        "No, porque el reparo de Intervención solo puede levantarse por la propia Intervención o por ratificación del gestor."
    ],
    correcta: 1,
    explicacion: "El <strong>reparo de la Intervención</strong> es un acto de fiscalización que solo puede levantarse por: a) <strong>subsanación de deficiencias</strong>, o b) <strong>ratificación del acto por el órgano competente</strong> asumiendo responsabilidad. Un <strong>informe de la Asesoría Jurídica</strong> puede aportar otra opinión técnica, pero <strong>NO levanta automáticamente el reparo</strong>. El gestor sigue teniendo que ratificar si mantiene su criterio. El informe jurídico es un elemento más de decisión."
},

{
    texto: "El TEAM conoce de reclamaciones sobre 'actos tributarios y demás ingresos de derecho público'. Un ciudadano recurre una sanción de tráfico (multa de circulación). ¿Es competente el TEAM?",
    opciones: [
        "Sí, porque las sanciones de tráfico son ingresos de derecho público municipales.",
        "No, porque las sanciones de tráfico no tienen naturaleza tributaria ni son reclamables ante el TEAM.",
        "Depende de si la Ordenanza Municipal de Tráfico atribuye la competencia al TEAM."
    ],
    correcta: 0,
    explicacion: "Las <strong>sanciones administrativas (multas de tráfico)</strong> son <strong>ingresos de derecho público</strong> aunque no sean tributos. El art. 25 Ley 22/2006 atribuye al TEAM competencia sobre <strong>'actos tributarios y demás ingresos de derecho público'</strong>. Por tanto, <strong>las reclamaciones contra sanciones de tráfico SÍ son competencia del TEAM</strong>. Es una competencia amplia que cubre todos los ingresos públicos municipales."
},

{
    texto: "Un Vocal del TEAM cesa por petición propia. ¿Requiere la aceptación de su renuncia el mismo quórum que su nombramiento (mayoría absoluta del Pleno)?",
    opciones: [
        "Sí, porque el cese por petición propia requiere acuerdo del Pleno con la misma mayoría que el nombramiento.",
        "No, el cese por petición propia es automático; no requiere acuerdo del Pleno.",
        "Requiere acuerdo del Pleno pero por mayoría simple, no absoluta."
    ],
    correcta: 1,
    explicacion: "El art. 137.4 LBRL distingue entre <strong>causas de cese</strong>: a) <strong>petición propia</strong> (voluntaria), b) acuerdo del Pleno con la misma mayoría que para el nombramiento, c) condena, d) sentencia de incompatibilidad, e) incapacidad. La <strong>petición propia (dimisión)</strong> es un <strong>acto voluntario del miembro</strong> que <strong>no requiere acuerdo del Pleno</strong>; el cese es automático. El Pleno solo toma conocimiento y procede a cubrir la vacante."
},

{
    texto: "La Asesoría Jurídica emite un informe preceptivo sobre un contrato. El informe es desfavorable. ¿Puede la Junta de Gobierno aprobar el contrato pese al informe negativo?",
    opciones: [
        "No, porque los informes preceptivos de la Asesoría Jurídica son vinculantes.",
        "Sí, porque los informes preceptivos no son vinculantes; el órgano decisor puede apartarse motivadamente.",
        "Solo si obtiene un segundo informe favorable de un letrado externo."
    ],
    correcta: 1,
    explicacion: "En Derecho Administrativo, <strong>informe preceptivo ≠ informe vinculante</strong>. <strong>Preceptivo</strong> = obligatorio solicitarlo; <strong>vinculante</strong> = el órgano debe seguirlo. Los informes de la Asesoría Jurídica son generalmente <strong>preceptivos pero NO vinculantes</strong>. El órgano decisor puede apartarse del informe, pero debe <strong>motivar expresamente por qué</strong> discrepa del criterio jurídico. Apartarse sin motivación = vicio del acto."
},

{
    texto: "El Director General de la Asesoría Jurídica 'asume la dirección del servicio jurídico del Ayuntamiento y sus organismos públicos'. ¿Puede dar instrucciones directas a un Letrado adscrito a un organismo autónomo?",
    opciones: [
        "Sí, porque todos los Letrados dependen orgánica y funcionalmente de la Asesoría Jurídica.",
        "No, porque los Letrados de los organismos dependen del organismo, no de la Asesoría.",
        "Solo puede dar instrucciones generales, no sobre asuntos concretos del organismo."
    ],
    correcta: 0,
    explicacion: "El documento establece que <strong>todos los puestos de trabajo de Letrados figurarán, sin exclusión alguna, en la relación de puestos de trabajo de la Asesoría Jurídica</strong>, de la que <strong>dependerán orgánica y funcionalmente</strong>. Esto incluye Letrados adscritos a organismos autónomos. El Director General de la Asesoría puede dar <strong>instrucciones técnico-jurídicas a todos los Letrados</strong> municipales, estén donde estén adscritos."
},

{
    texto: "Un contribuyente interpone recurso de reposición contra una liquidación tributaria. El recurso se desestima. Posteriormente interpone reclamación económico-administrativa ante el TEAM. ¿En qué plazo?",
    opciones: [
        "Un mes desde la notificación de la desestimación del recurso de reposición.",
        "Tres meses desde la notificación del acto original (la liquidación).",
        "El que establezca la Ley General Tributaria para las reclamaciones económico-administrativas."
    ],
    correcta: 2,
    explicacion: "El plazo para interponer reclamación económico-administrativa se regula en la <strong>Ley General Tributaria</strong> (art. 235 y ss.). Actualmente es de <strong>un mes</strong> desde la notificación del acto recurrido (o de la desestimación del recurso de reposición si se interpuso este). Como el Reglamento del TEAM remite a la LGT en lo no regulado, <strong>el plazo es el que establezca la LGT</strong>."
},
,

{
    texto: "La Intervención General y la Tesorería son órganos con titulares que deben ser funcionarios con habilitación nacional. ¿Pueden coincidir ambos puestos en la misma persona?",
    opciones: [
        "Sí, en municipios pequeños donde no hay suficiente carga de trabajo para dos funcionarios.",
        "No, porque son funciones incompatibles que requieren separación por control interno.",
        "Sí, temporalmente en caso de vacante de uno de los puestos hasta su provisión definitiva."
    ],
    correcta: 1,
    explicacion: "Las funciones de <strong>Intervención (control y fiscalización)</strong> y de <strong>Tesorería (gestión de recursos financieros)</strong> son <strong>incompatibles</strong> por razones de control interno. No puede la misma persona gestionar fondos y fiscalizarse a sí misma. Aunque ambos sean funcionarios con habilitación nacional, <strong>deben ser personas distintas</strong>. En el Ayuntamiento de Madrid (municipio gran población) esta separación es obligatoria."
}

    ]
},

{
    id: 5,
    nombre: "Tema 5: Los Distritos",
    icono: "🗺️",
    preguntas: [
        // BLOQUE 1: Naturaleza y regulación de los Distritos (15 preguntas)
        {
            texto: "¿Cuál es la norma que aprueba el Reglamento Orgánico de los Distritos de la Ciudad de Madrid?",
            opciones: [
                "Acuerdo plenario de 23 de diciembre de 2004",
                "Decreto de la Junta de Gobierno de 20 de enero de 2005",
                "Resolución del Alcalde de 15 de noviembre de 2004"
            ],
            correcta: 0,
            explicacion: "Según el texto, el ROD fue aprobado por acuerdo plenario de 23 de diciembre de 2004."
        },
        {
            texto: "Según el art. 22 LCREM, ¿qué artículo de la LRBRL sigue literalmente en cuanto a la creación de Distritos?",
            opciones: [
                "Artículo 128 de la LRBRL",
                "Artículo 124 de la LRBRL",
                "Artículo 130 de la LRBRL"
            ],
            correcta: 0,
            explicacion: "El art. 22 LCREM dispone, siguiendo la dicción literal del art. 128 de la LRBRL."
        },
        {
            texto: "Los Distritos son órganos de existencia necesaria en:",
            opciones: [
                "Ayuntamientos de municipios de gran población",
                "Todos los municipios con más de 20.000 habitantes",
                "Únicamente en las capitales de provincia"
            ],
            correcta: 0,
            explicacion: "Los Distritos son órganos de existencia necesaria en los ayuntamientos de los municipios de gran población."
        },
        {
            texto: "¿En qué tres normas encuentran su regulación los Distritos?",
            opciones: [
                "LCREM, ROGAM y ROD",
                "LRBRL, LCREM y ROGAM",
                "ROF, ROGAM y ROD"
            ],
            correcta: 0,
            explicacion: "Encuentran su regulación en la LCREM, el ROGAM y el ROD."
        },
        {
            texto: "Según el art. 1.2 ROD, los distritos han de ajustarse a los principios de unidad de gobierno, eficacia, coordinación, solidaridad y:",
            opciones: [
                "Homogeneización de sus estándares de equipamiento",
                "Descentralización de competencias municipales",
                "Participación ciudadana en la gestión"
            ],
            correcta: 0,
            explicacion: "La actuación de los distritos ha de ajustarse a los principios de unidad de gobierno, eficacia, coordinación, solidaridad, y se tenderá a la homogeneización de sus estándares de equipamiento."
        },
        {
            texto: "¿Qué artículo de la LCREM establece que la división de la ciudad en distritos se debe llevar a cabo mediante norma de carácter orgánico?",
            opciones: [
                "Artículo 11.c)",
                "Artículo 22.2",
                "Artículo 15.a)"
            ],
            correcta: 0,
            explicacion: "Por el artículo 11.c) de la LCREM la división de la ciudad en distritos y la determinación y regulación de sus órganos se ha de llevar a cabo mediante norma de carácter orgánico."
        },
        {
            texto: "Según el art. 1.3 ROD, ¿qué debe ser la desconcentración de competencias que supone el distrito?",
            opciones: [
                "Un proceso continuado para hacer más eficaces las políticas y servicios municipales",
                "Un mecanismo puntual de reorganización administrativa",
                "Una transferencia definitiva de competencias al distrito"
            ],
            correcta: 0,
            explicacion: "La desconcentración de competencias que supone el distrito debe ser un proceso continuado para hacer más eficaces las políticas y los servicios municipales."
        },
        {
            texto: "¿Cuál es el órgano competente para alterar la división del término municipal en distritos en cuanto a su número y denominación?",
            opciones: [
                "El Pleno del Ayuntamiento",
                "La Junta de Gobierno Local",
                "El Alcalde mediante decreto"
            ],
            correcta: 0,
            explicacion: "El Pleno del Ayuntamiento es el órgano municipal competente para alterar la división del término municipal en distritos."
        },
        {
            texto: "Según el art. 22.2 LCREM, ¿a quién corresponde en todo caso la presidencia del Distrito?",
            opciones: [
                "A un Concejal",
                "Al Coordinador del Distrito",
                "A un vocal vecino elegido democráticamente"
            ],
            correcta: 0,
            explicacion: "El apartado 2 del art. 22 LCREM determina que la presidencia del Distrito corresponderá en todo caso a un Concejal."
        },
        {
            texto: "¿Cuántos Distritos integran el término municipal de Madrid según el art. 2 ROD?",
            opciones: [
                "21 Distritos",
                "20 Distritos",
                "22 Distritos"
            ],
            correcta: 0,
            explicacion: "Según el artículo 2 del ROD, el término municipal de Madrid se divide en 21 Distritos."
        },
        {
            texto: "Los Distritos son denominados preferentemente como:",
            opciones: [
                "Órganos territoriales o Administración Territorial",
                "Órganos periféricos de la Administración",
                "Órganos descentralizados municipales"
            ],
            correcta: 0,
            explicacion: "Después de la publicación de la Ley de Organización y Funcionamiento de la AGE, son denominados preferentemente órganos territoriales o Administración Territorial."
        },
        {
            texto: "¿Qué debe determinar el Pleno en norma de carácter orgánico respecto a los recursos presupuestarios?",
            opciones: [
                "El porcentaje mínimo que deberán gestionarse por los distritos en su conjunto",
                "El presupuesto individualizado de cada distrito",
                "La distribución de ingresos entre todos los distritos"
            ],
            correcta: 0,
            explicacion: "En norma orgánica el Pleno determinará el porcentaje mínimo de los recursos presupuestarios que deberán gestionarse por los distritos en su conjunto."
        },
        {
            texto: "Según el art. 1.2 ROD, los distritos son instrumento esencial para:",
            opciones: [
                "La corrección de los desequilibrios y la representación de los intereses de los distintos barrios",
                "La descentralización completa de competencias municipales",
                "La creación de una administración paralela al Ayuntamiento"
            ],
            correcta: 0,
            explicacion: "Los distritos son instrumento esencial para la aplicación de una política municipal orientada a la corrección de los desequilibrios y a la representación de los intereses de los distintos barrios."
        },
        {
            texto: "¿Mediante qué procedimiento se puede acordar la modificación de los límites territoriales de los distritos?",
            opciones: [
                "Mediante la modificación del ROD por el Pleno",
                "Por Decreto del Alcalde previa consulta vecinal",
                "Por Acuerdo de la Junta de Gobierno Local"
            ],
            correcta: 0,
            explicacion: "El Pleno es competente para acordar la modificación de los límites territoriales de los distritos mediante la modificación del ROD."
        },
        {
            texto: "El ROD contiene en un anexo:",
            opciones: [
                "La relación de barrios por Distritos",
                "El presupuesto asignado a cada Distrito",
                "Los límites geográficos exactos de cada Distrito"
            ],
            correcta: 0,
            explicacion: "El ROD contiene en un anexo la relación de barrios por Distritos."
        },

        // BLOQUE 2: Competencias de los Distritos (12 preguntas)
        {
            texto: "¿Cuál de las siguientes NO es una materia en la que ejercen funciones los Distritos según el art. 3 ROD?",
            opciones: [
                "Política exterior y relaciones internacionales",
                "Movilidad y Transportes",
                "Servicios Sociales"
            ],
            correcta: 0,
            explicacion: "La política exterior no es competencia de los Distritos. Sí lo son movilidad, transportes y servicios sociales."
        },
        {
            texto: "Entre las competencias de los Distritos según el art. 3 ROD se encuentra:",
            opciones: [
                "Autorización de matrimonios civiles",
                "Aprobación del presupuesto municipal",
                "Nombramiento de funcionarios municipales"
            ],
            correcta: 0,
            explicacion: "Entre las competencias está la autorización de matrimonios civiles, pero no la aprobación presupuestaria ni nombramientos."
        },
        {
            texto: "¿Qué competencia pueden ejercer los Distritos en materia urbanística según el art. 3 ROD?",
            opciones: [
                "Disciplina Urbanística",
                "Aprobación de Planes Generales",
                "Declaración de Bienes de Interés Cultural"
            ],
            correcta: 0,
            explicacion: "Los Distritos ejercen funciones en Disciplina Urbanística, no en aprobación de planes ni declaraciones BIC."
        },
        {
            texto: "Los Distritos ejercen funciones en materia de:",
            opciones: [
                "Licencias y autorizaciones",
                "Gestión tributaria municipal",
                "Aprobación de ordenanzas fiscales"
            ],
            correcta: 0,
            explicacion: "Los Distritos ejercen funciones en licencias y autorizaciones, pero no en gestión tributaria ni aprobación de ordenanzas fiscales."
        },
        {
            texto: "¿Cuál de estas materias está incluida entre las competencias de los Distritos?",
            opciones: [
                "Salud, Consumo y Comercio",
                "Hacienda y Contratación Municipal",
                "Personal y Régimen Interior"
            ],
            correcta: 0,
            explicacion: "Salud, Consumo y Comercio está entre las competencias del art. 3 ROD, no las otras opciones."
        },
        {
            texto: "Los Distritos ejercen funciones en:",
            opciones: [
                "Cultura, Educación, Juventud y Deportes",
                "Relaciones Institucionales y Protocolo",
                "Planificación Estratégica Municipal"
            ],
            correcta: 0,
            explicacion: "Cultura, Educación, Juventud y Deportes es una de las materias del art. 3 ROD."
        },
        {
            texto: "¿Qué competencia tienen los Distritos en materia sancionadora?",
            opciones: [
                "Sanciones administrativas",
                "Ejecución de sentencias penales",
                "Imposición de multas de tráfico exclusivamente"
            ],
            correcta: 0,
            explicacion: "Los Distritos tienen competencias en sanciones administrativas, no en ejecución penal."
        },
        {
            texto: "Según el art. 3 ROD, los Distritos ejercen funciones en:",
            opciones: [
                "Recursos administrativos",
                "Recursos contencioso-administrativos",
                "Procesos judiciales civiles"
            ],
            correcta: 0,
            explicacion: "Los Distritos ejercen funciones en recursos administrativos, no en los contencioso-administrativos ni civiles."
        },
        {
            texto: "¿Qué órganos pueden delegar competencias en los Distritos?",
            opciones: [
                "El Alcalde, la Junta de Gobierno Local u otros órganos municipales",
                "Únicamente el Pleno del Ayuntamiento",
                "Solo la Junta de Gobierno Local"
            ],
            correcta: 0,
            explicacion: "Los Distritos ejercerán funciones delegadas por el Alcalde, la Junta de Gobierno Local u otros órganos municipales."
        },
        {
            texto: "¿En qué materia de seguridad tienen competencias los Distritos?",
            opciones: [
                "Seguridad (en general)",
                "Dirección de la Policía Municipal",
                "Coordinación con Fuerzas y Cuerpos de Seguridad del Estado"
            ],
            correcta: 0,
            explicacion: "Los Distritos ejercen funciones en Seguridad según el art. 3 ROD."
        },
        {
            texto: "Los Distritos ejercen funciones en materia de:",
            opciones: [
                "Parques y Jardines",
                "Urbanismo estratégico",
                "Grandes proyectos de infraestructuras"
            ],
            correcta: 0,
            explicacion: "Parques y Jardines está entre las competencias del art. 3 ROD."
        },
        {
            texto: "¿Qué competencia tienen los Distritos en materia ambiental?",
            opciones: [
                "Calidad y Evaluación Ambiental",
                "Aprobación de Planes de Sostenibilidad",
                "Declaración de Espacios Naturales Protegidos"
            ],
            correcta: 0,
            explicacion: "Los Distritos ejercen funciones en Calidad y Evaluación Ambiental."
        },

        // BLOQUE 3: Órganos de los Distritos (15 preguntas)
        {
            texto: "Según el art. 4 ROD, ¿cuántos y cuáles son los órganos de los Distritos?",
            opciones: [
                "Cuatro: Junta Municipal, Concejal-presidente, Coordinador y Foro Local",
                "Tres: Junta Municipal, Concejal-presidente y Coordinador",
                "Cinco: Junta Municipal, Concejal-presidente, Coordinador, Foro Local y Secretario"
            ],
            correcta: 0,
            explicacion: "Son cuatro órganos: Junta Municipal del Distrito, Concejal-presidente, Coordinador del Distrito y Foro Local."
        },
        {
            texto: "La Junta Municipal del Distrito es:",
            opciones: [
                "El órgano colegiado de representación político-vecinal",
                "Un órgano meramente consultivo sin capacidad de decisión",
                "Un órgano exclusivamente técnico-administrativo"
            ],
            correcta: 0,
            explicacion: "La Junta Municipal es el órgano colegiado de representación político-vecinal donde se articula la participación ciudadana."
        },
        {
            texto: "¿Quién nombra y separa libremente al Concejal-presidente del Distrito?",
            opciones: [
                "El Alcalde",
                "El Pleno del Ayuntamiento",
                "La Junta de Gobierno Local"
            ],
            correcta: 0,
            explicacion: "El Concejal-presidente es nombrado y separado libremente por el Alcalde."
        },
        {
            texto: "El Coordinador del Distrito es:",
            opciones: [
                "El órgano directivo al que corresponde la dirección y gestión de los servicios bajo la superior dirección del concejal-presidente",
                "Un órgano administrativo sin funciones directivas",
                "El representante político elegido por los vecinos"
            ],
            correcta: 0,
            explicacion: "El Coordinador es el órgano directivo para la dirección y gestión de servicios, bajo la superior dirección del concejal-presidente."
        },
        {
            texto: "El Foro Local es:",
            opciones: [
                "Órgano de información y participación ciudadana presencial y deliberativa, con capacidad para la adopción de acuerdos de iniciativas y propuestas",
                "Un órgano meramente informativo sin capacidad de acuerdo",
                "Un órgano ejecutivo con competencias de gestión"
            ],
            correcta: 0,
            explicacion: "El Foro Local es órgano de información y participación ciudadana con capacidad para adoptar acuerdos de iniciativas y propuestas."
        },
        {
            texto: "¿Quién nombra al Coordinador del Distrito?",
            opciones: [
                "La Junta de Gobierno a propuesta del Concejal-Presidente",
                "El Alcalde directamente",
                "El Pleno del Ayuntamiento"
            ],
            correcta: 0,
            explicacion: "El Coordinador será nombrado por la Junta de Gobierno a propuesta del Concejal-Presidente de cada Junta."
        },
        {
            texto: "¿Qué rango ostenta el Coordinador del Distrito?",
            opciones: [
                "Rango de director general",
                "Rango de subdirector general",
                "Rango de jefe de servicio"
            ],
            correcta: 0,
            explicacion: "El Coordinador ostenta a todos los efectos el rango de director general."
        },
        {
            texto: "El Coordinador del Distrito ostenta la condición de:",
            opciones: [
                "Órgano directivo territorial",
                "Órgano de gobierno local",
                "Órgano consultivo del distrito"
            ],
            correcta: 0,
            explicacion: "El Coordinador ostenta la condición de órgano directivo territorial."
        },
        {
            texto: "¿Qué forma revisten las decisiones administrativas que adopte el Coordinador?",
            opciones: [
                "Resolución",
                "Decreto",
                "Acuerdo"
            ],
            correcta: 0,
            explicacion: "Las decisiones administrativas que adopte el Coordinador revestirán la forma de 'resolución'."
        },
        {
            texto: "¿Quién puede sustituir al Coordinador en caso de ausencia, vacante o enfermedad?",
            opciones: [
                "El Concejal Presidente o quien éste designe",
                "El Secretario del Distrito automáticamente",
                "El vocal de mayor antigüedad en la Junta"
            ],
            correcta: 0,
            explicacion: "En caso de ausencia, vacante o enfermedad, el Coordinador podrá ser sustituido por el Concejal Presidente o por quien éste designe."
        },
        {
            texto: "¿De quién depende orgánica y funcionalmente el Interventor Delegado del Distrito?",
            opciones: [
                "Del Interventor General",
                "Del Concejal-Presidente del Distrito",
                "Del Coordinador del Distrito"
            ],
            correcta: 0,
            explicacion: "El Interventor Delegado depende orgánica y funcionalmente del Interventor General."
        },
        {
            texto: "¿Quién nombra al Interventor Delegado del Distrito?",
            opciones: [
                "El Interventor General a propuesta propia entre funcionarios del Subgrupo A1",
                "La Junta de Gobierno a propuesta del Concejal-Presidente",
                "El Alcalde directamente"
            ],
            correcta: 0,
            explicacion: "Será nombrado a propuesta del Interventor General entre funcionarios de carrera pertenecientes al Subgrupo A1."
        },
        {
            texto: "¿Entre quiénes debe nombrarse el Secretario del Distrito?",
            opciones: [
                "Funcionarios de carrera del Subgrupo A1",
                "Cualquier funcionario municipal",
                "Personal eventual de confianza"
            ],
            correcta: 0,
            explicacion: "Su nombramiento se realizará a propuesta del Concejal Presidente entre funcionarios de carrera del Subgrupo A1."
        },
        {
            texto: "¿Quién preside el Consejo Territorial del Distrito en sustitución del concejal-presidente?",
            opciones: [
                "El Coordinador del Distrito",
                "El Secretario del Distrito",
                "El Vicepresidente de la Junta Municipal"
            ],
            correcta: 0,
            explicacion: "Entre las funciones del Coordinador está presidir el Consejo Territorial del Distrito en sustitución del concejal-presidente."
        },
        {
            texto: "En la Junta Municipal del Distrito se articula:",
            opciones: [
                "La participación ciudadana a través de los vocales vecinos",
                "Solo la representación de los concejales",
                "Únicamente la gestión administrativa"
            ],
            correcta: 0,
            explicacion: "En la Junta Municipal, junto a cargos electivos, se articula la participación ciudadana a través de los vocales vecinos."
        },

        // BLOQUE 4: Recursos presupuestarios y estructura (10 preguntas)
        {
            texto: "Según el art. 6 ROD, ¿qué porcentaje mínimo del presupuesto del Ayuntamiento debe ser gestionado por los Distritos en su conjunto?",
            opciones: [
                "11 por ciento",
                "10 por ciento",
                "12 por ciento"
            ],
            correcta: 0,
            explicacion: "Los recursos presupuestarios gestionados por los Distritos no serán inferiores al 11 por ciento del presupuesto del Ayuntamiento."
        },
        {
            texto: "¿Quiénes son los jefes superiores de la organización administrativa del Distrito según el art. 29 ROD?",
            opciones: [
                "Los concejales-presidentes",
                "Los coordinadores de Distrito",
                "Los secretarios de Distrito"
            ],
            correcta: 0,
            explicacion: "El art. 29 del ROD dispone que los concejales-presidentes son los jefes superiores de la organización administrativa."
        },
        {
            texto: "¿A quién corresponde la dirección y coordinación de los servicios de competencia del Distrito?",
            opciones: [
                "Al coordinador del Distrito bajo la superior dirección del concejal-presidente",
                "Exclusivamente al concejal-presidente",
                "A la Junta Municipal del Distrito"
            ],
            correcta: 0,
            explicacion: "Bajo la superior dirección del concejal-presidente, corresponde al coordinador la dirección y coordinación de los servicios."
        },
        {
            texto: "¿Cómo se estructura la organización administrativa del distrito?",
            opciones: [
                "En unidades administrativas funcionalmente homogéneas determinadas en las relaciones de puestos de trabajo",
                "En departamentos ministeriales con autonomía plena",
                "Por áreas temáticas sin vinculación jerárquica"
            ],
            correcta: 0,
            explicacion: "La organización se estructura en unidades administrativas funcionalmente homogéneas determinadas en las relaciones de puestos de trabajo."
        },
        {
            texto: "¿Cómo se efectúa el nombramiento del Coordinador según el art. 49 ROGAM?",
            opciones: [
                "Como dispone el art. 49 ROGAM para el nombramiento de los titulares de los órganos directivos",
                "Por concurso de méritos entre funcionarios",
                "Por elección de la Junta Municipal"
            ],
            correcta: 0,
            explicacion: "Su nombramiento ha de efectuarse como dispone el art. 49 del ROGAM para el nombramiento de los titulares de los órganos directivos."
        },
        {
            texto: "¿Quién tiene la responsabilidad de la elaboración, seguimiento y control del presupuesto anual asignado al Distrito?",
            opciones: [
                "El Coordinador del Distrito",
                "El Concejal-Presidente exclusivamente",
                "La Junta Municipal del Distrito"
            ],
            correcta: 0,
            explicacion: "Entre las funciones del Coordinador está la elaboración, seguimiento y control del presupuesto anual que se le asigne."
        },
        {
            texto: "¿A quién corresponde la evaluación de los servicios del Distrito?",
            opciones: [
                "Al Coordinador del Distrito",
                "A la Intervención General",
                "Al Área de Gobierno competente"
            ],
            correcta: 0,
            explicacion: "La evaluación de los servicios del Distrito corresponde al Coordinador."
        },
        {
            texto: "¿Quién coordina las relaciones de la Junta Municipal con el Área de Gobierno competente en materia de coordinación territorial?",
            opciones: [
                "El Coordinador del Distrito",
                "El Secretario del Distrito",
                "El Concejal-Presidente directamente"
            ],
            correcta: 0,
            explicacion: "El Coordinador coordina las relaciones de la Junta Municipal con el Área de Gobierno competente en coordinación territorial."
        },
        {
            texto: "¿Qué debe contener el presupuesto gestionado por los Distritos?",
            opciones: [
                "No será inferior al 11% del presupuesto municipal en su conjunto",
                "Será exactamente el 15% para cada Distrito",
                "Se distribuirá equitativamente entre los 21 Distritos"
            ],
            correcta: 0,
            explicacion: "Los recursos presupuestarios gestionados por los Distritos en su conjunto no serán inferiores al 11%."
        },
        {
            texto: "¿Qué naturaleza tienen las unidades administrativas del Distrito?",
            opciones: [
                "Funcionalmente homogéneas",
                "Jerárquicamente independientes",
                "Temporales y rotativas"
            ],
            correcta: 0,
            explicacion: "La organización administrativa del distrito se estructura en unidades administrativas funcionalmente homogéneas."
        },

        // BLOQUE 5: El Secretario del Distrito (8 preguntas)
        {
            texto: "¿A quién corresponde la asistencia, apoyo y asesoramiento jurídico, técnico y administrativo de los órganos del Distrito?",
            opciones: [
                "Al Secretario del Distrito",
                "Al Coordinador del Distrito",
                "Al Interventor Delegado"
            ],
            correcta: 0,
            explicacion: "Según el art. 32 ROD, corresponde al Secretario la asistencia, apoyo y asesoramiento jurídico, técnico y administrativo."
        },
        {
            texto: "¿Quién propone el nombramiento del Secretario del Distrito?",
            opciones: [
                "El Concejal Presidente",
                "La Junta de Gobierno",
                "El Alcalde"
            ],
            correcta: 0,
            explicacion: "Su nombramiento se realizará a propuesta del Concejal Presidente entre funcionarios de carrera del Subgrupo A1."
        },
        {
            texto: "¿Qué función tiene el Secretario respecto al Foro Local del Distrito?",
            opciones: [
                "Ejercer la secretaría del Foro Local",
                "Presidirlo en ausencia del Concejal-Presidente",
                "Nombrar a sus miembros"
            ],
            correcta: 0,
            explicacion: "Entre las funciones del Secretario está ejercer la secretaría del Foro Local del Distrito."
        },
        {
            texto: "¿A quién corresponde la dirección, coordinación y seguimiento de la actividad de los departamentos, unidades y negociados de la Oficina Municipal del Distrito?",
            opciones: [
                "Al Secretario del Distrito",
                "Al Coordinador exclusivamente",
                "Al Concejal-Presidente"
            ],
            correcta: 0,
            explicacion: "Esta función corresponde al Secretario según el art. 33 ROD."
        },
        {
            texto: "¿Qué control ejerce el Secretario sobre las propuestas de acuerdo o resolución?",
            opciones: [
                "Control jurídico-administrativo",
                "Control presupuestario",
                "Control político de oportunidad"
            ],
            correcta: 0,
            explicacion: "El Secretario ejerce el control jurídico-administrativo de cuantas propuestas de acuerdo o resolución se eleven a los órganos del Distrito."
        },
        {
            texto: "¿A quién corresponde la jefatura y gestión del personal adscrito al Distrito?",
            opciones: [
                "Al Secretario del Distrito",
                "Al Coordinador del Distrito",
                "Al Concejal-Presidente"
            ],
            correcta: 0,
            explicacion: "La jefatura y gestión del personal adscrito al Distrito corresponde al Secretario."
        },
        {
            texto: "¿Qué función tiene el Secretario respecto al inventario de bienes municipales?",
            opciones: [
                "Supervisión del mantenimiento del inventario de bienes adscritos al Distrito",
                "Aprobación del inventario",
                "Enajenación de bienes del inventario"
            ],
            correcta: 0,
            explicacion: "El Secretario tiene la función de supervisión del mantenimiento del inventario de bienes municipales adscritos al Distrito."
        },
        {
            texto: "¿Qué responsabilidad tiene el Secretario en materia informática?",
            opciones: [
                "Propuesta y control de la implantación y mejora de aplicaciones informáticas en coordinación con los servicios responsables",
                "Gestión autónoma de todos los sistemas informáticos",
                "Solo uso de las aplicaciones ya implantadas"
            ],
            correcta: 0,
            explicacion: "El Secretario tiene la propuesta y control de implantación y mejora de aplicaciones informáticas en coordinación con servicios responsables."
        },

        // BLOQUE 6: Interventor Delegado (5 preguntas)
        {
            texto: "¿Qué funciones realiza el Interventor Delegado del Distrito?",
            opciones: [
                "Funciones de fiscalización y control de actuaciones de gestión económica por delegación del Interventor General",
                "Únicamente funciones de asesoramiento económico",
                "Control político de la gestión del Distrito"
            ],
            correcta: 0,
            explicacion: "Le corresponde la realización de funciones de fiscalización y control de actuaciones de gestión económica por delegación del Interventor General."
        },
        {
            texto: "¿Sobre qué actuaciones ejerce control el Interventor Delegado?",
            opciones: [
                "Actuaciones de gestión económica del coordinador, Concejal Presidente o Junta Municipal",
                "Solo las del Concejal-Presidente",
                "Todas las decisiones políticas del Distrito"
            ],
            correcta: 0,
            explicacion: "Fiscaliza y controla actuaciones de gestión económica que sean competencia del coordinador, Concejal Presidente o Junta Municipal."
        },
        {
            texto: "El Interventor Delegado actúa:",
            opciones: [
                "Por delegación del Interventor General",
                "Con plena autonomía funcional",
                "Por nombramiento del Concejal-Presidente"
            ],
            correcta: 0,
            explicacion: "El Interventor Delegado actúa bajo la dependencia del Interventor General y por delegación de éste."
        },
        {
            texto: "¿Entre quiénes se nombra al Interventor Delegado?",
            opciones: [
                "Funcionarios de carrera pertenecientes al Subgrupo A1",
                "Interventores y auditores del Estado",
                "Personal eventual con conocimientos económicos"
            ],
            correcta: 0,
            explicacion: "Será nombrado a propuesta del Interventor General entre funcionarios de carrera pertenecientes al Subgrupo A1."
        },
        {
            texto: "¿Qué tipo de dependencia tiene el Interventor Delegado respecto del Interventor General?",
            opciones: [
                "Dependencia orgánica y funcional",
                "Solo dependencia funcional",
                "Dependencia jerárquica del Concejal-Presidente"
            ],
            correcta: 0,
            explicacion: "El Interventor Delegado tiene dependencia orgánica y funcional del Interventor General."
        },

        // BLOQUE 7: Creación de Juntas Municipales (12 preguntas)
        {
            texto: "Según el art. 24 LRBRL, ¿con qué finalidad pueden los municipios establecer órganos territoriales de gestión desconcentrada?",
            opciones: [
                "Para facilitar la participación ciudadana en la gestión de los asuntos locales y mejorar esta",
                "Exclusivamente para descentralizar competencias",
                "Solo para crear estructuras administrativas paralelas"
            ],
            correcta: 0,
            explicacion: "El art. 24 LRBRL establece que es para facilitar la participación ciudadana y mejorar la gestión de los asuntos locales."
        },
        {
            texto: "¿Qué límite establece el art. 24 LRBRL para la creación de órganos territoriales?",
            opciones: [
                "Sin perjuicio de la unidad de gobierno y gestión del municipio",
                "Sin superar el 20% del presupuesto municipal",
                "Solo en municipios de más de 100.000 habitantes"
            ],
            correcta: 0,
            explicacion: "Los órganos territoriales se crean sin perjuicio de la unidad de gobierno y gestión del municipio."
        },
        {
            texto: "Según el ROF, ¿qué carácter tienen las Juntas Municipales de Distrito?",
            opciones: [
                "Órganos territoriales de gestión desconcentrada",
                "Órganos autónomos con personalidad jurídica propia",
                "Entidades locales menores"
            ],
            correcta: 0,
            explicacion: "Para el ROF las Juntas Municipales tienen carácter de órganos territoriales de gestión desconcentrada (art. 128)."
        },
        {
            texto: "¿Qué órgano crea las Juntas Municipales de Distrito?",
            opciones: [
                "El Pleno mediante acuerdo",
                "El Alcalde por decreto",
                "La Junta de Gobierno"
            ],
            correcta: 0,
            explicacion: "Son creadas por acuerdo plenario para la mejor gestión y facilitar la participación ciudadana."
        },
        {
            texto: "¿Dónde se establecen la composición, organización, ámbito territorial y funcionamiento de las Juntas Municipales?",
            opciones: [
                "En el correspondiente Reglamento regulador aprobado por el Pleno",
                "Por Decreto del Alcalde",
                "En las Bases de Ejecución del Presupuesto"
            ],
            correcta: 0,
            explicacion: "Se establecen en el correspondiente Reglamento regulador aprobado por el Pleno que se considerará parte integrante del Reglamento Orgánico."
        },
        {
            texto: "Según el ROF, ¿de quiénes se integran las Juntas Municipales?",
            opciones: [
                "De Concejales, de representantes de los vecinos y de las asociaciones ciudadanas",
                "Solo de Concejales",
                "Únicamente de vecinos elegidos democráticamente"
            ],
            correcta: 0,
            explicacion: "Se integran de Concejales, de representantes de los vecinos y de las asociaciones ciudadanas."
        },
        {
            texto: "¿Quién nombra al Concejal-Presidente de la Junta Municipal?",
            opciones: [
                "El Alcalde",
                "El Pleno del Ayuntamiento",
                "Los propios miembros de la Junta"
            ],
            correcta: 0,
            explicacion: "Serán presididas por un Concejal-Presidente, nombrado por el Alcalde."
        },
        {
            texto: "¿Qué competencias ejercerá el Concejal-Presidente?",
            opciones: [
                "Las competencias delegadas por el Alcalde",
                "Solo las establecidas en el ROD",
                "Las que él mismo determine"
            ],
            correcta: 0,
            explicacion: "El Concejal-Presidente ejercerá las competencias delegadas por el Alcalde."
        },
        {
            texto: "Según la Ley 57/2003, el Distrito debe contar con:",
            opciones: [
                "Un órgano de gestión desconcentrada que es la Junta Municipal con carácter de órgano político-representativo",
                "Solo órganos administrativos sin carácter político",
                "Únicamente un órgano consultivo"
            ],
            correcta: 0,
            explicacion: "El Distrito debe contar con un órgano de gestión desconcentrada (Junta Municipal), ahora con carácter de órgano político-representativo."
        },
        {
            texto: "¿Qué consideración tiene el Reglamento regulador de las Juntas Municipales?",
            opciones: [
                "Parte integrante del Reglamento Orgánico",
                "Norma independiente sin vinculación orgánica",
                "Simple instrucción administrativa"
            ],
            correcta: 0,
            explicacion: "El Reglamento regulador se considerará a todos los efectos parte integrante del Reglamento Orgánico."
        },
        {
            texto: "¿Qué Real Decreto aprueba el Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales (ROF)?",
            opciones: [
                "Real Decreto 2568/1986, de 28 de noviembre",
                "Real Decreto 1732/1994, de 29 de julio",
                "Real Decreto 896/1991, de 7 de junio"
            ],
            correcta: 0,
            explicacion: "El ROF fue aprobado por Real Decreto 2568/1986, de 28 de noviembre."
        },
        {
            texto: "¿Qué papel han tenido las Juntas Municipales en la organización municipal española?",
            opciones: [
                "Han formado parte de la organización complementaria de municipios de mayor población",
                "Solo existían en Madrid capital",
                "Eran obligatorias en todos los municipios"
            ],
            correcta: 0,
            explicacion: "Las Juntas Municipales han formado parte de la organización municipal complementaria de los municipios de mayor población."
        },

        // BLOQUE 8: Junta Municipal - Composición y Constitución (10 preguntas)
        {
            texto: "¿Quién determina el número de miembros de la Junta Municipal?",
            opciones: [
                "El Pleno del Ayuntamiento al inicio de cada mandato",
                "El Alcalde mediante decreto",
                "La propia Junta Municipal"
            ],
            correcta: 0,
            explicacion: "El número de miembros lo determinará el Pleno del Ayuntamiento al inicio de cada mandato."
        },
        {
            texto: "¿Cómo se realiza la distribución de miembros de la Junta Municipal entre los grupos políticos?",
            opciones: [
                "En proporción a su representación en el Pleno, garantizándose la presencia de todos los grupos",
                "A partes iguales entre todos los grupos",
                "Solo los grupos con más del 10% de representación"
            ],
            correcta: 0,
            explicacion: "Se realiza en proporción a su representación en el Pleno, garantizándose la presencia de todos los grupos políticos."
        },
        {
            texto: "Según el art. 7.2 ROD, ¿quiénes componen la Junta Municipal del Distrito?",
            opciones: [
                "Concejal-Presidente, Vicepresidente y vocales",
                "Solo Concejal-Presidente y vocales",
                "Concejal-Presidente, Coordinador y vocales"
            ],
            correcta: 0,
            explicacion: "La componen: Concejal-Presidente, Vicepresidente y vocales."
        },
        {
            texto: "¿Quién designa al Vicepresidente de la Junta Municipal?",
            opciones: [
                "El Alcalde libremente entre los vocales que sean concejales",
                "La propia Junta Municipal por votación",
                "El Concejal-Presidente"
            ],
            correcta: 0,
            explicacion: "El Vicepresidente será designado libremente por el Alcalde entre los vocales de la Junta que sean concejales."
        },
        {
            texto: "¿Cuál es la función del Vicepresidente de la Junta Municipal?",
            opciones: [
                "Sustituir al presidente en los supuestos de vacante, ausencia, enfermedad o impedimento",
                "Ejercer funciones ejecutivas propias",
                "Coordinar a los vocales vecinos"
            ],
            correcta: 0,
            explicacion: "El Vicepresidente tiene la función de sustituir al presidente en casos de vacante, ausencia, enfermedad o impedimento."
        },
        {
            texto: "¿Cómo se nombran los vocales de la Junta Municipal?",
            opciones: [
                "Por el Alcalde a propuesta de los grupos políticos",
                "Por elección directa de los vecinos",
                "Por sorteo entre los candidatos"
            ],
            correcta: 0,
            explicacion: "Los vocales son nombrados por el Alcalde a propuesta de los grupos políticos."
        },
        {
            texto: "¿Entre quiénes se nombran los vocales de la Junta Municipal?",
            opciones: [
                "Entre concejales y vecinos",
                "Solo entre concejales",
                "Solo entre vecinos no concejales"
            ],
            correcta: 0,
            explicacion: "Los vocales son nombrados entre concejales y vecinos."
        },
        {
            texto: "¿Qué designa cada grupo político en la Junta Municipal?",
            opciones: [
                "Un portavoz y un portavoz adjunto",
                "Solo un portavoz",
                "Tres portavoces rotativos"
            ],
            correcta: 0,
            explicacion: "Cada grupo político designará un portavoz, así como un portavoz adjunto."
        },
        {
            texto: "¿Cuándo se procede a la constitución de la Junta Municipal del Distrito?",
            opciones: [
                "Una vez nombrados presidente, vicepresidente y vocales después de elecciones municipales",
                "Antes de las elecciones municipales",
                "Seis meses después de las elecciones"
            ],
            correcta: 0,
            explicacion: "Se constituye una vez nombrados el Presidente, vicepresidente y vocales, después de celebradas elecciones municipales."
        },
        {
            texto: "¿Qué quórum se requiere en la sesión constitutiva de la Junta Municipal?",
            opciones: [
                "Mayoría absoluta de los miembros, o en segunda convocatoria dos días después cualquier número",
                "Unanimidad de todos los miembros",
                "Mayoría simple en primera convocatoria"
            ],
            correcta: 0,
            explicacion: "Se requiere mayoría absoluta, o en caso contrario se celebrará sesión dos días después quedando constituida con cualquier número de miembros presentes."
        },

        // BLOQUE 9: Régimen de sesiones y Junta de Portavoces (8 preguntas)
        {
            texto: "¿Con qué periodicidad celebran las Juntas Municipales sesión plenaria ordinaria?",
            opciones: [
                "Una vez al mes, excepto agosto",
                "Dos veces al mes",
                "Una vez cada dos meses"
            ],
            correcta: 0,
            explicacion: "Las Juntas celebrarán sesión plenaria ordinaria una vez al mes, a excepción del mes de agosto."
        },
        {
            texto: "¿Qué mes se considera periodo vacacional para las Juntas Municipales?",
            opciones: [
                "Agosto",
                "Julio",
                "Diciembre"
            ],
            correcta: 0,
            explicacion: "El mes de agosto se considerará periodo vacacional."
        },
        {
            texto: "¿Quién preside la Junta de Portavoces del Distrito?",
            opciones: [
                "El concejal presidente",
                "El vocal de mayor antigüedad",
                "Se turnan rotativamente"
            ],
            correcta: 0,
            explicacion: "La Junta de Portavoces está presidida por el concejal presidente."
        },
        {
            texto: "¿Quiénes integran la Junta de Portavoces?",
            opciones: [
                "Los portavoces de los grupos municipales que tienen representación en la Junta Municipal",
                "Todos los vocales de la Junta Municipal",
                "Solo los concejales miembros de la Junta"
            ],
            correcta: 0,
            explicacion: "Se integra de los portavoces de los grupos municipales que tienen representación en la Junta Municipal del Distrito."
        },
        {
            texto: "¿Cuándo queda constituida la Junta de Portavoces?",
            opciones: [
                "Por resolución del concejal presidente, tan pronto como se hubiera formalizado la designación de representantes",
                "Por acuerdo de la Junta Municipal",
                "Automáticamente tras las elecciones"
            ],
            correcta: 0,
            explicacion: "Queda constituida por resolución del concejal presidente tan pronto como se hubiera formalizado la designación de sus representantes."
        },
        {
            texto: "¿Qué función principal tiene la Junta de Portavoces?",
            opciones: [
                "Examinar el orden del día de las sesiones ordinarias de la Junta Municipal",
                "Aprobar el presupuesto del Distrito",
                "Nombrar al Coordinador del Distrito"
            ],
            correcta: 0,
            explicacion: "Le corresponde examinar el orden del día de las sesiones ordinarias de la Junta Municipal."
        },
        {
            texto: "¿Cómo se adoptan los acuerdos de la Junta de Portavoces?",
            opciones: [
                "Por voto ponderado",
                "Por mayoría simple",
                "Por unanimidad"
            ],
            correcta: 0,
            explicacion: "Sus acuerdos se adoptan por voto ponderado."
        },
        {
            texto: "Entre las funciones de la Junta de Portavoces NO se encuentra:",
            opciones: [
                "Aprobar el presupuesto del Distrito",
                "Determinar los asuntos sobre los que se va a entablar debate",
                "Establecer el orden de intervención de los grupos"
            ],
            correcta: 0,
            explicacion: "La aprobación presupuestaria no es función de la Junta de Portavoces. Sí lo son determinar asuntos de debate y orden de intervención."
        },

        // BLOQUE 10: El Concejal-Presidente (15 preguntas)
        {
            texto: "¿Qué representa el Concejal-Presidente?",
            opciones: [
                "Al distrito",
                "Solo a su grupo político",
                "A todos los distritos conjuntamente"
            ],
            correcta: 0,
            explicacion: "El Concejal-Presidente representa al distrito y dirige su administración."
        },
        {
            texto: "¿Qué función tiene el Concejal-Presidente en las sesiones de la Junta Municipal?",
            opciones: [
                "Convoca, preside, dirime empates con voto de calidad y ejecuta acuerdos",
                "Solo las convoca",
                "Únicamente ejecuta los acuerdos"
            ],
            correcta: 0,
            explicacion: "Convoca y preside las sesiones, dirime los empates con su voto de calidad y ejecuta los acuerdos."
        },
        {
            texto: "¿Qué le corresponde al Concejal-Presidente respecto a los servicios del Distrito?",
            opciones: [
                "La dirección, planificación y coordinación de los servicios municipales de competencia del Distrito",
                "Solo la coordinación administrativa",
                "Únicamente la inspección de servicios"
            ],
            correcta: 0,
            explicacion: "Le corresponden la dirección, planificación y coordinación de los servicios municipales de la competencia del Distrito."
        },
        {
            texto: "¿Qué debe hacer el Concejal-Presidente con las dudas de interpretación del ROD?",
            opciones: [
                "Canalizarlas al órgano correspondiente",
                "Resolverlas autónomamente",
                "Consultarlas con la Junta Municipal"
            ],
            correcta: 0,
            explicacion: "Debe cumplir y hacer cumplir los preceptos del ROD, canalizando las dudas de interpretación al órgano correspondiente."
        },
        {
            texto: "Entre las competencias del Concejal-Presidente se encuentra:",
            opciones: [
                "Fijar los objetivos del Distrito y aprobar los planes de actuación",
                "Aprobar el presupuesto municipal general",
                "Nombrar al Alcalde del municipio"
            ],
            correcta: 0,
            explicacion: "Le corresponde fijar los objetivos del Distrito, aprobar los planes de actuación y asignar los recursos necesarios."
        },
        {
            texto: "¿A quién da traslado el Concejal-Presidente de las propuestas de la Junta Municipal?",
            opciones: [
                "A otros órganos municipales",
                "Directamente a los vecinos",
                "Solo al Coordinador del Distrito"
            ],
            correcta: 0,
            explicacion: "Da traslado a otros órganos municipales de las propuestas de la Junta Municipal del Distrito."
        },
        {
            texto: "¿Qué función tiene el Concejal-Presidente respecto a las entidades del Distrito?",
            opciones: [
                "Fomentar las relaciones con las entidades cívicas, culturales y deportivas",
                "Dirigir todas sus actividades",
                "Financiarlas directamente"
            ],
            correcta: 0,
            explicacion: "Le corresponde fomentar las relaciones con las entidades cívicas, culturales y deportivas del Distrito."
        },
        {
            texto: "¿Qué autoridad ejerce el Concejal-Presidente sobre el personal del Distrito?",
            opciones: [
                "La superior autoridad, sin perjuicio de las competencias del Alcalde respecto de todo el personal",
                "Autoridad absoluta sin limitaciones",
                "Solo supervisión administrativa"
            ],
            correcta: 0,
            explicacion: "Ejerce la superior autoridad sobre el personal de su Distrito, sin perjuicio de las competencias del Alcalde respecto de todo el personal."
        },
        {
            texto: "¿Qué competencias adicionales ejerce el Concejal-Presidente?",
            opciones: [
                "Las atribuciones que le hayan sido delegadas por el Alcalde o por la Junta de Gobierno",
                "Solo las establecidas expresamente en el ROD",
                "Ninguna competencia delegada"
            ],
            correcta: 0,
            explicacion: "Ejercerá además las atribuciones que le hayan sido delegadas por el Alcalde o por la Junta de Gobierno."
        },
        {
            texto: "Entre las competencias delegadas por el Alcalde al Concejal-Presidente puede estar:",
            opciones: [
                "Autorizar matrimonios conforme dispone el artículo 51 del Código Civil",
                "Nombrar funcionarios municipales",
                "Aprobar el presupuesto del Ayuntamiento"
            ],
            correcta: 0,
            explicacion: "Puede autorizar matrimonios conforme al art. 51 del Código Civil en el ámbito territorial de los Distritos."
        },
        {
            texto: "¿Cómo responde políticamente el Concejal-Presidente de su gestión?",
            opciones: [
                "En los términos establecidos en el ROGAM para los miembros de la Junta de Gobierno, y ante la Junta Municipal del Distrito",
                "Solo ante el Alcalde",
                "Únicamente ante el Pleno"
            ],
            correcta: 0,
            explicacion: "Respondera políticamente en los términos del ROGAM para miembros de la Junta de Gobierno, y ante la Junta Municipal del Distrito."
        },
        {
            texto: "¿Qué forma revisten las resoluciones administrativas del Concejal-Presidente?",
            opciones: [
                "Decreto denominado 'Decretos del concejal-presidente de la Junta Municipal de Distrito'",
                "Resolución",
                "Acuerdo"
            ],
            correcta: 0,
            explicacion: "Sus resoluciones revestirán la forma de decreto y se denominarán 'Decretos del concejal-presidente de la Junta Municipal de Distrito'."
        },
        {
            texto: "¿Quién convoca las sesiones de los órganos colegiados del Distrito?",
            opciones: [
                "El Concejal-Presidente",
                "El Coordinador del Distrito",
                "El Secretario del Distrito"
            ],
            correcta: 0,
            explicacion: "Le corresponde convocar y presidir las sesiones de los órganos colegiados del Distrito."
        },
        {
            texto: "¿Quién establece el orden del día de las sesiones de la Junta Municipal?",
            opciones: [
                "El Concejal-Presidente",
                "La Junta de Portavoces",
                "El Secretario del Distrito"
            ],
            correcta: 0,
            explicacion: "Le corresponde convocar y presidir las sesiones de la Junta Municipal del Distrito, así como establecer el orden del día."
        },
        {
            texto: "¿Qué función tiene el Concejal-Presidente respecto a la Administración Municipal?",
            opciones: [
                "Asegurar la relación constante con los diferentes sectores",
                "Dirigir toda la Administración Municipal",
                "Solo coordinar con su propio Distrito"
            ],
            correcta: 0,
            explicacion: "Le corresponde asegurar la relación constante con los diferentes sectores de la Administración Municipal."
        },

        // BLOQUE 11: Competencias de las Juntas Municipales (10 preguntas)
        {
            texto: "¿Qué órganos pueden delegar competencias administrativas o ejecutivas en la Junta Municipal de Distrito?",
            opciones: [
                "El Alcalde o la Junta de Gobierno",
                "Solo el Pleno del Ayuntamiento",
                "Únicamente el Alcalde"
            ],
            correcta: 0,
            explicacion: "La Junta Municipal ejercerá las competencias que les deleguen el Alcalde o la Junta de Gobierno."
        },
        {
            texto: "¿Qué órgano puede atribuir competencias a las Juntas Municipales mediante el ROD?",
            opciones: [
                "El Pleno",
                "El Alcalde",
                "La Junta de Gobierno"
            ],
            correcta: 0,
            explicacion: "El Pleno puede atribuir competencias mediante el Reglamento Orgánico de los Distritos."
        },
        {
            texto: "Entre las competencias de la Junta Municipal según el art. 22 ROD se encuentra:",
            opciones: [
                "El control y seguimiento de los órganos de gobierno del Distrito",
                "La aprobación de ordenanzas municipales",
                "El nombramiento de funcionarios"
            ],
            correcta: 0,
            explicacion: "Le corresponde el control y seguimiento de los órganos de gobierno del Distrito, sin perjuicio del superior control del Pleno."
        },
        {
            texto: "¿Qué puede acordar la Junta Municipal respecto a las aspiraciones del vecindario?",
            opciones: [
                "Acordar la elevación a otros órganos municipales cuando la competencia no le corresponda",
                "Resolverlas directamente en todo caso",
                "Remitirlas a la Comunidad Autónoma"
            ],
            correcta: 0,
            explicacion: "Puede acordar elevar a otros órganos municipales las aspiraciones del vecindario en materias de interés cuando la competencia no corresponda al Distrito."
        },
        {
            texto: "¿A quién traslada la Junta Municipal las propuestas de mejora en centros y equipamientos del Distrito?",
            opciones: [
                "A la Administración competente por razón de la materia a través del Área de Gobierno competente",
                "Directamente al Alcalde",
                "Al Pleno del Ayuntamiento"
            ],
            correcta: 0,
            explicacion: "Traslada a la Administración competente las propuestas de mejora a través del Área de Gobierno competente."
        },
        {
            texto: "¿Qué puede proponer la Junta Municipal respecto a equipamientos?",
            opciones: [
                "Mejoras en la gestión de los equipamientos que dependen de las Áreas de Gobierno",
                "La creación de nuevos Distritos",
                "La supresión de competencias municipales"
            ],
            correcta: 0,
            explicacion: "Puede proponer mejoras en la gestión de los equipamientos que dependen de las Áreas de Gobierno."
        },
        {
            texto: "¿Qué resuelve la Junta Municipal respecto a sus miembros?",
            opciones: [
                "Las recusaciones que puedan plantearse contra los miembros",
                "Su nombramiento y cese",
                "Su remuneración"
            ],
            correcta: 0,
            explicacion: "Resuelve las recusaciones que puedan plantearse contra los miembros de la Junta Municipal del Distrito."
        },
        {
            texto: "¿Qué debe conocer la Junta Municipal con carácter previo a su aprobación por el Pleno?",
            opciones: [
                "El presupuesto anual del Distrito",
                "Todas las ordenanzas municipales",
                "Los nombramientos de directivos"
            ],
            correcta: 0,
            explicacion: "Conocerá con carácter previo a su aprobación por el Pleno el presupuesto anual del Distrito."
        },
        {
            texto: "¿Qué instrumentos de ordenación urbanística debe conocer la Junta Municipal?",
            opciones: [
                "Los que afecten al Distrito",
                "Todos los del municipio de Madrid",
                "Solo los de ámbito supramunicipal"
            ],
            correcta: 0,
            explicacion: "Conocerá los instrumentos de ordenación urbanística que afecten al Distrito."
        },
        {
            texto: "¿Qué forma revisten las resoluciones administrativas de la Junta Municipal?",
            opciones: [
                "Acuerdo denominado 'Acuerdos de la Junta Municipal del Distrito'",
                "Decreto",
                "Resolución"
            ],
            correcta: 0,
            explicacion: "Las resoluciones revestirán la forma de acuerdo y se denominarán 'Acuerdos de la Junta Municipal del Distrito'."
        },

        // BLOQUE 12: PREGUNTAS ULTRA-DIFÍCILES (30 preguntas)
        {
            texto: "¿Qué artículo del ROD establece que los concejales-presidentes son los jefes superiores de la organización administrativa?",
            opciones: [
                "Artículo 29",
                "Artículo 31",
                "Artículo 27"
            ],
            correcta: 0,
            explicacion: "El art. 29 del ROD dispone que los concejales-presidentes son los jefes superiores de la organización administrativa."
        },
        {
            texto: "Las funciones generales del Coordinador del Distrito las establece el art. 71 del ROGAM y las completa:",
            opciones: [
                "El art. 31 del ROD",
                "El art. 29 del ROD",
                "El art. 33 del ROD"
            ],
            correcta: 0,
            explicacion: "Las funciones del Coordinador las establece el art. 71 del ROGAM y las completa el art. 31 del ROD."
        },
        {
            texto: "¿Qué artículo del ROD regula las funciones del Secretario del Distrito?",
            opciones: [
                "Artículo 33",
                "Artículo 32",
                "Artículo 34"
            ],
            correcta: 0,
            explicacion: "El art. 33 ROD establece las funciones del Secretario del Distrito."
        },
        {
            texto: "Según el art. 9 del ROD, ¿qué dispone sobre el régimen de sesiones de las Juntas Municipales?",
            opciones: [
                "Celebrarán sesión plenaria ordinaria una vez al mes excepto agosto",
                "Celebrarán sesión plenaria dos veces al mes",
                "No tienen sesiones ordinarias predeterminadas"
            ],
            correcta: 0,
            explicacion: "El art. 9 del ROD dispone que celebrarán sesión plenaria ordinaria una vez al mes, excepto agosto."
        },
        {
            texto: "¿Qué artículo del ROD se refiere a la Junta de Portavoces?",
            opciones: [
                "Artículo 23",
                "Artículo 22",
                "Artículo 24"
            ],
            correcta: 0,
            explicacion: "El art. 23 del ROD se refiere a la Junta de Portavoces como órgano deliberante y consultivo."
        },
        {
            texto: "Las competencias del Concejal-Presidente están establecidas en:",
            opciones: [
                "Art. 65.1 ROGAM y 27 ROD",
                "Art. 64 ROGAM y 26 ROD",
                "Art. 66 ROGAM y 28 ROD"
            ],
            correcta: 0,
            explicacion: "En particular le corresponden las competencias del art. 65.1 ROGAM y 27 ROD."
        },
        {
            texto: "¿Qué artículo del ROGAM establece la forma de respuesta política del Concejal-Presidente?",
            opciones: [
                "Artículo 66 ROGAM",
                "Artículo 65 ROGAM",
                "Artículo 67 ROGAM"
            ],
            correcta: 0,
            explicacion: "El Concejal-Presidente responderá políticamente según el art. 66 ROGAM."
        },
        {
            texto: "¿Qué artículo del ROGAM regula la denominación de los decretos del Concejal-Presidente?",
            opciones: [
                "Artículo 67 ROGAM",
                "Artículo 66 ROGAM",
                "Artículo 68 ROGAM"
            ],
            correcta: 0,
            explicacion: "El art. 67 ROGAM y 27.2 ROD establecen que se denominarán 'Decretos del concejal-presidente de la Junta Municipal de Distrito'."
        },
        {
            texto: "¿Qué artículo del ROGAM establece las competencias que ejercerá la Junta Municipal?",
            opciones: [
                "Artículo 68 ROGAM",
                "Artículo 67 ROGAM",
                "Artículo 69 ROGAM"
            ],
            correcta: 0,
            explicacion: "El art. 68 ROGAM establece que ejercerá las competencias que les deleguen el Alcalde o la Junta de Gobierno."
        },
        {
            texto: "¿Qué artículo del ROD atribuye competencias específicas a las Juntas Municipales?",
            opciones: [
                "Artículo 22",
                "Artículo 21",
                "Artículo 23"
            ],
            correcta: 0,
            explicacion: "El art. 22 del ROD atribuye las competencias específicas de las Juntas Municipales."
        },
        {
            texto: "¿Qué artículo de la LRBRL modificado por la Ley 57/2003 se refiere al Distrito?",
            opciones: [
                "Artículo 24 LRBRL",
                "Artículo 23 LRBRL",
                "Artículo 25 LRBRL"
            ],
            correcta: 0,
            explicacion: "El art. 24 LRBRL redactado por la Ley 57/2003 establece la regulación de los Distritos."
        },
        {
            texto: "Según el art. 20.2 y 3 LRBRL, ¿qué pueden establecer las leyes autonómicas sobre régimen local?",
            opciones: [
                "Una organización complementaria de la prevista en el art. 20",
                "Solo la organización necesaria",
                "Únicamente órganos consultivos"
            ],
            correcta: 0,
            explicacion: "Las leyes autonómicas y los reglamentos orgánicos pueden establecer una organización complementaria de la prevista en el art. 20."
        },
        {
            texto: "¿Qué artículo del ROF regula el carácter de las Juntas Municipales?",
            opciones: [
                "Artículo 128",
                "Artículo 127",
                "Artículo 129"
            ],
            correcta: 0,
            explicacion: "Para el ROF las Juntas Municipales tendrán carácter de órganos territoriales de gestión desconcentrada (art. 128)."
        },
        {
            texto: "¿Qué artículo del ROF establece la composición y funcionamiento de las Juntas Municipales?",
            opciones: [
                "Artículo 129",
                "Artículo 128",
                "Artículo 130"
            ],
            correcta: 0,
            explicacion: "El art. 129 ROF establece que la composición, organización, ámbito territorial y funcionamiento se determinarán en el Reglamento regulador."
        },
        {
            texto: "¿Qué artículo del ROD establece la composición de la Junta Municipal?",
            opciones: [
                "Artículo 7.2",
                "Artículo 7.1",
                "Artículo 8.1"
            ],
            correcta: 0,
            explicacion: "Según el artículo 7.2 del ROD la Junta tendrá: Concejal-Presidente, Vicepresidente y vocales."
        },
        {
            texto: "¿Qué artículos del ROD regulan la constitución de la Junta Municipal?",
            opciones: [
                "Art. 8.1 y 2 del ROD",
                "Art. 7.1 y 2 del ROD",
                "Art. 9.1 y 2 del ROD"
            ],
            correcta: 0,
            explicacion: "La constitución se regula en el art. 8.1 y 2 del ROD sobre sesión constitutiva y quórum."
        },
        {
            texto: "¿Qué artículos del ROGAM y ROD regulan la representación del Concejal-Presidente?",
            opciones: [
                "Art. 64 ROGAM y 26 ROD",
                "Art. 65 ROGAM y 27 ROD",
                "Art. 63 ROGAM y 25 ROD"
            ],
            correcta: 0,
            explicacion: "El art. 64 ROGAM y 26 ROD establecen que representa al distrito y dirige su administración."
        },
        {
            texto: "¿Qué apartado del art. 24 LRBRL redactado por la Ley 57/2003 permite establecer órganos territoriales?",
            opciones: [
                "Apartado 1",
                "Apartado 2",
                "Apartado 3"
            ],
            correcta: 0,
            explicacion: "El art. 24.1 LRBRL dispone que los municipios podrán establecer órganos territoriales de gestión desconcentrada."
        },
        {
            texto: "¿Qué artículo del ROD establece que el Distrito contará con un Secretario?",
            opciones: [
                "Artículo 32",
                "Artículo 31",
                "Artículo 33"
            ],
            correcta: 0,
            explicacion: "Según el artículo 32 del ROD, el Distrito contará con un Secretario."
        },
        {
            texto: "¿Bajo la dirección de quién actúa el Secretario del Distrito según el art. 32 ROD?",
            opciones: [
                "Del Concejal Presidente",
                "Del Coordinador del Distrito",
                "Del Alcalde"
            ],
            correcta: 0,
            explicacion: "Al Secretario le corresponde, bajo la dirección del Concejal Presidente, la asistencia y asesoramiento."
        },
        {
            texto: "¿Qué día de 2004 fue aprobado por acuerdo plenario el ROD?",
            opciones: [
                "23 de diciembre",
                "20 de diciembre",
                "15 de diciembre"
            ],
            correcta: 0,
            explicacion: "El ROD fue aprobado por acuerdo plenario de 23 de diciembre de 2004."
        },
        {
            texto: "¿Qué artículo del Código Civil regula los matrimonios que puede autorizar el Concejal-Presidente?",
            opciones: [
                "Artículo 51",
                "Artículo 49",
                "Artículo 52"
            ],
            correcta: 0,
            explicacion: "Puede autorizar matrimonios conforme dispone el artículo 51 del Código Civil."
        },
        {
            texto: "¿Qué principios establece el art. 1.2 del ROD para la actuación de los distritos además de unidad de gobierno, eficacia y coordinación?",
            opciones: [
                "Solidaridad y homogeneización de estándares de equipamiento",
                "Descentralización y autonomía presupuestaria",
                "Jerarquía y subordinación administrativa"
            ],
            correcta: 0,
            explicacion: "Deben ajustarse a: unidad de gobierno, eficacia, coordinación, solidaridad, y homogeneización de estándares de equipamiento."
        },
        {
            texto: "¿En qué apartado del art. 22 de la LCREM se determina que la presidencia del Distrito corresponde a un Concejal?",
            opciones: [
                "Apartado 2",
                "Apartado 1",
                "Apartado 3"
            ],
            correcta: 0,
            explicacion: "El apartado 2 de este precepto determina que la presidencia corresponderá en todo caso a un Concejal."
        },
        {
            texto: "¿Qué apartado del art. 1 ROD establece que el distrito es instrumento para asegurar la cercanía de los ciudadanos?",
            opciones: [
                "Apartado 3",
                "Apartado 2",
                "Apartado 1"
            ],
            correcta: 0,
            explicacion: "El art. 1.3 ROD establece que el distrito es instrumento para asegurar una cercanía mayor de los ciudadanos."
        },
        {
            texto: "¿Qué letra del art. 11 de la LCREM establece la división de la ciudad en distritos mediante norma orgánica?",
            opciones: [
                "Letra c)",
                "Letra a)",
                "Letra b)"
            ],
            correcta: 0,
            explicacion: "Por el artículo 11.c) de la LCREM la división se ha de llevar a cabo mediante norma de carácter orgánico."
        },
        {
            texto: "¿Qué letra del art. 3 ROD incluye las licencias y autorizaciones entre las competencias de los Distritos?",
            opciones: [
                "Letra e)",
                "Letra d)",
                "Letra f)"
            ],
            correcta: 0,
            explicacion: "La letra e) del art. 3 ROD establece: Licencias y autorizaciones."
        },
        {
            texto: "¿En qué letra del art. 27 ROD se establece que el Concejal-Presidente asegura la relación con sectores de la Administración Municipal?",
            opciones: [
                "Letra f)",
                "Letra e)",
                "Letra g)"
            ],
            correcta: 0,
            explicacion: "La letra f) establece: Asegurar la relación constante con los diferentes sectores de la Administración Municipal."
        },
        {
            texto: "¿Qué apartado del art. 7 ROD establece la distribución de miembros de la Junta Municipal entre grupos políticos?",
            opciones: [
                "Apartado 1",
                "Apartado 2",
                "Apartado 3"
            ],
            correcta: 0,
            explicacion: "El art. 7.1 del ROD establece que su distribución se realizará en proporción a su representación en el Pleno."
        },
        {
            texto: "¿Qué letra del art. 22 ROD establece el conocimiento de instrumentos de ordenación urbanística como competencia de la Junta Municipal?",
            opciones: [
                "Letra g)",
                "Letra f)",
                "Letra h)"
            ],
            correcta: 0,
            explicacion: "La letra g) del art. 22 ROD: Conocer los instrumentos de ordenación urbanística que afecten al Distrito."
        }
    ]
},

{
    id: 6,
    nombre: "Tema 6 Ley 39/2015 I",
    icono: "📋",
    preguntas: []
},

{
    id: 7,
    nombre: "Tema 7 Ley 39/2015 II",
    icono: "📋",
    preguntas: [
{
    texto: "El procedimiento administrativo puede definirse como:",
    opciones: [
        "El conjunto de resoluciones dictadas por la Administración en un ejercicio",
        "El cauce formal de actos en que se concreta la actuación administrativa para un fin",
        "La sucesión de expedientes tramitados por cada unidad administrativa"
    ],
    correcta: 1,
    explicacion: "El PDF lo define textualmente como 'el cauce formal de una serie de actos en que se concreta la actuación administrativa para la realización de un fin'."
},
{
    texto: "El procedimiento administrativo como garantía jurídica para el particular se entiende cuando se concibe como:",
    opciones: [
        "Forma de integración de la voluntad administrativa",
        "Mecanismo de coordinación entre órganos administrativos",
        "Conjunto de trámites a que se sujeta la Administración para dictar actos"
    ],
    correcta: 2,
    explicacion: "El PDF distingue dos puntos de vista y señala que 'Es en el segundo sentido cuando el procedimiento administrativo representa una garantía jurídica para el particular', refiriéndose al conjunto de trámites."
},
{
    texto: "El Título IV de la Ley 39/2015 abarca los artículos:",
    opciones: [
        "Del 53 al 105",
        "Del 54 al 83",
        "Del 70 al 120"
    ],
    correcta: 0,
    explicacion: "El documento indica expresamente que el Título IV 'abarca los artículos 53 al 105'."
},
{
    texto: "El Capítulo I del Título IV regula:",
    opciones: [
        "La iniciación del procedimiento administrativo",
        "Los derechos de los interesados en el procedimiento",
        "La ordenación y concentración de trámites"
    ],
    correcta: 1,
    explicacion: "El PDF señala que 'En el Capítulo I se regulan los Derechos específicos, de los interesados respecto al Procedimiento Administrativo'."
},
{
    texto: "El Capítulo V del Título IV regula:",
    opciones: [
        "Las formas de finalización: resolución, desistimiento, renuncia o caducidad",
        "La tramitación simplificada del procedimiento administrativo",
        "Los medios de ejecución forzosa de los actos administrativos"
    ],
    correcta: 0,
    explicacion: "El documento indica que el Capítulo V regula 'las formas y efectos de la finalización del procedimiento, a través de resolución, desistimiento, renuncia o caducidad'."
},
{
    texto: "La ejecutividad de los actos administrativos y los medios de ejecución forzosa se recogen en:",
    opciones: [
        "El Capítulo V del Título IV",
        "El Capítulo VI del Título IV",
        "El Capítulo VII y último del Título IV"
    ],
    correcta: 2,
    explicacion: "El PDF establece que 'La ejecutividad de los actos administrativos y los medios de ejecución forzosa quedan recogidos en el Capítulo VII y último'."
},
{
    texto: "La autotutela de la Administración Pública queda subordinada a:",
    opciones: [
        "La previa autorización judicial en todos los casos",
        "Los límites constitucionales y el principio de proporcionalidad",
        "La conformidad expresa del obligado al cumplimiento"
    ],
    correcta: 1,
    explicacion: "El documento establece que queda 'subordinada a los límites constitucionales, debiendo adoptarse los medios precisos para la ejecución, de modo que se restrinja al mínimo la libertad individual y de acuerdo con el principio de proporcionalidad'."
},
{
    texto: "El procedimiento regulado en el Título IV es común a:",
    opciones: [
        "Solo la Administración General del Estado",
        "Todas las Administraciones Públicas y Organismos dependientes sin excepción",
        "Las Administraciones territoriales excluyendo organismos autónomos"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'dicho procedimiento es común a todas las Administraciones Públicas, todas estas sin excepción, a la vez que los Organismos públicos dependientes'."
},

// BLOQUE 2: GARANTÍAS - DERECHOS DE LOS INTERESADOS (I)

{
    texto: "El artículo 53 establece derechos exclusivamente para quienes tengan la condición de:",
    opciones: [
        "Ciudadanos en general ante cualquier Administración",
        "Interesados, es decir, partes en un procedimiento administrativo",
        "Empleados públicos que tramitan los expedientes"
    ],
    correcta: 1,
    explicacion: "El PDF señala que el artículo 53 'establece una serie de derechos previstos únicamente para aquellos que tienen la condición de interesados, es decir, son parte, en un procedimiento administrativo'."
},
{
    texto: "Cuando la condición de interesado derive de una relación jurídica transmisible, el derecho-habiente:",
    opciones: [
        "Debe iniciar nuevo procedimiento con su propia solicitud",
        "Sucede en tal condición cualquiera que sea el estado del procedimiento",
        "Solo puede intervenir si la transmisión es anterior al trámite de audiencia"
    ],
    correcta: 1,
    explicacion: "El documento establece que 'el derecho-habiente sucederá en tal condición cualquiera que sea el estado del procedimiento'."
},
{
    texto: "El procedimiento administrativo está diseñado para que el ciudadano pueda actuar:",
    opciones: [
        "Siempre asistido obligatoriamente por Abogado y Procurador",
        "Sin necesidad de Abogado ni de Procurador",
        "Con Abogado obligatorio solo en procedimientos sancionadores"
    ],
    correcta: 1,
    explicacion: "El PDF afirma que 'el Procedimiento Administrativo está diseñado para que el ciudadano pueda actuar ante la Administración sin necesidad de Abogado ni de Procurador'."
},
{
    texto: "La obligación de facilitar copias de documentos del procedimiento se entiende cumplida mediante:",
    opciones: [
        "Entrega presencial en oficinas durante horario laboral",
        "Puesta a disposición en el Punto de Acceso General electrónico o sedes electrónicas",
        "Envío postal certificado al domicilio declarado por el interesado"
    ],
    correcta: 1,
    explicacion: "El PDF indica que se cumple 'mediante la puesta a disposición de las mismas en el Punto de Acceso General electrónico de la Administración competente o en las sedes electrónicas que correspondan'."
},
{
    texto: "Tendrán consideración de copia auténtica las realizadas por órganos competentes de las Administraciones Públicas:",
    opciones: [
        "Solo en soporte electrónico mediante firma avanzada",
        "Cualquiera que sea su soporte, garantizando identidad del órgano y contenido",
        "Únicamente si se trata de documentos públicos administrativos"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'tendrán la consideración de copia auténtica de un documento público administrativo o privado las realizadas, cualquiera que sea su soporte, por los órganos competentes de las Administraciones Públicas en las que quede garantizada la identidad del órgano que ha realizado la copia y su contenido'."
},
{
    texto: "Las copias auténticas tendrán:",
    opciones: [
        "Eficacia limitada al procedimiento en que se emitan",
        "La misma validez y eficacia que los documentos originales",
        "Validez condicionada a la verificación posterior del órgano emisor"
    ],
    correcta: 1,
    explicacion: "El documento indica que 'Las copias auténticas tendrán la misma validez y eficacia que los documentos originales'."
},
{
    texto: "La solicitud de expedición de copias auténticas se dirige al órgano que emitió el original, debiendo expedirse en el plazo de:",
    opciones: [
        "Diez días desde la recepción en el registro",
        "Quince días desde la recepción de la solicitud",
        "Veinte días hábiles desde la solicitud"
    ],
    correcta: 1,
    explicacion: "El PDF establece el plazo de 'quince días a contar desde la recepción de la solicitud en el registro electrónico de la Administración u Organismo competente'."
},
{
    texto: "Las Administraciones están obligadas a expedir copias auténticas electrónicas de documentos en papel cuando:",
    opciones: [
        "El interesado lo solicite expresamente en cualquier caso",
        "Los presenten interesados y se vayan a incorporar a un expediente administrativo",
        "Se trate de documentos con antigüedad superior a cinco años"
    ],
    correcta: 1,
    explicacion: "El documento señala que están obligadas 'a expedir copias auténticas electrónicas de cualquier documento en papel que presenten los interesados y que se vaya a incorporar a un expediente administrativo'."
},

// BLOQUE 3: GARANTÍAS - DERECHOS DE LOS INTERESADOS (II)

{
    texto: "La Resolución de 3 de febrero de 1993 define el sistema de identificación del personal al servicio de:",
    opciones: [
        "Todas las Administraciones Públicas españolas",
        "La Administración General del Estado",
        "Solo las Corporaciones Locales de más de 50.000 habitantes"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'se define el sistema de identificación común del personal al servicio de la Administración General del Estado'."
},
{
    texto: "La identificación del personal se concreta básicamente en dos aspectos:",
    opciones: [
        "Atención presencial y atención telefónica exclusivamente",
        "Atención directa al ciudadano y documentos escritos",
        "Relaciones formales y relaciones informales con ciudadanos"
    ],
    correcta: 1,
    explicacion: "El documento señala dos aspectos: 'En la atención directa al ciudadano' y 'En los informes, resoluciones, certificaciones, comunicaciones y documentos análogos que se sustenten sobre supuesto escrito'."
},
{
    texto: "El Código de Buenas Prácticas del Ayuntamiento de Madrid fue aprobado por:",
    opciones: [
        "Decreto del Alcalde de 17 de enero de 2005",
        "Acuerdo de la Junta de Gobierno de la Ciudad de Madrid de 4 de diciembre de 2008",
        "Resolución de la Secretaría General del Pleno de 2010"
    ],
    correcta: 1,
    explicacion: "El PDF indica que fue 'aprobado por Acuerdo de la Junta de Gobierno de la Ciudad de Madrid con fecha 4 de diciembre de 2008'."
},
{
    texto: "En despachos de utilización común del Ayuntamiento de Madrid, el rótulo debe figurar con:",
    opciones: [
        "Solo el nombre del jefe de la unidad administrativa",
        "La relación de nombres, apellidos, cargo y puesto de todo el personal",
        "Únicamente el nombre de la unidad sin datos personales"
    ],
    correcta: 1,
    explicacion: "El documento establece que 'en el caso de despachos de utilización común, figurará en el rótulo de despacho la relación de los nombres y apellidos del personal que lo ocupa y cargo o puesto de trabajo que desempeñan'."
},
{
    texto: "La no exigencia de documentos originales según el artículo 28 admite como excepción:",
    opciones: [
        "Los procedimientos tributarios en todo caso",
        "Que la normativa reguladora aplicable establezca lo contrario con carácter excepcional",
        "Los documentos firmados por autoridad extranjera"
    ],
    correcta: 1,
    explicacion: "El PDF indica que no se exigirán originales 'salvo que, con carácter excepcional, la normativa reguladora aplicable establezca lo contrario'."
},
{
    texto: "Las copias aportadas por los interesados tendrán eficacia:",
    opciones: [
        "Plena en cualquier ámbito jurídico público o privado",
        "Exclusivamente en el ámbito de la actividad de las Administraciones Públicas",
        "Condicionada a la autenticación posterior del órgano competente"
    ],
    correcta: 1,
    explicacion: "El PDF señala que 'Las copias que aporten los interesados al procedimiento administrativo tendrán eficacia, exclusivamente en el ámbito de la actividad de las Administraciones Públicas'."
},
{
    texto: "Los interesados no están obligados a aportar documentos elaborados por cualquier Administración:",
    opciones: [
        "Solo si la presentación tiene carácter facultativo",
        "Con independencia de que la presentación sea preceptiva o facultativa",
        "Únicamente si fueron elaborados hace menos de cinco años"
    ],
    correcta: 1,
    explicacion: "El documento establece que no estarán obligados 'con independencia de que la presentación de los citados documentos tenga carácter preceptivo o facultativo'."
},
{
    texto: "Se presumirá que la consulta u obtención de documentos por la Administración es autorizada por los interesados salvo que conste:",
    opciones: [
        "Silencio del interesado durante más de diez días",
        "Oposición expresa del interesado o la ley requiera consentimiento expreso",
        "Cualquier tipo de observación del interesado en la solicitud"
    ],
    correcta: 1,
    explicacion: "El PDF indica 'Se presumirá que la consulta u obtención es autorizada por los interesados salvo que conste en el procedimiento su oposición expresa o la ley especial aplicable requiera consentimiento expreso'."
},
{
    texto: "Cuando la Administración no pueda recabar documentos ya aportados por el interesado, podrá:",
    opciones: [
        "Archivar el procedimiento por imposibilidad material",
        "Solicitar nuevamente al interesado su aportación",
        "Prescindir del documento y resolver sin él"
    ],
    correcta: 1,
    explicacion: "El documento señala que 'Excepcionalmente, si las Administraciones Públicas no pudieran recabar los citados documentos, podrán solicitar nuevamente al interesado su aportación'."
},
{
    texto: "Los informes preceptivos ya elaborados por órgano distinto al que tramita deben remitirse en plazo de:",
    opciones: [
        "Cinco días hábiles",
        "Diez días desde la solicitud",
        "Quince días naturales"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'éstos deberán ser remitidos en el plazo de diez días a contar desde su solicitud'."
},

// BLOQUE 4: GARANTÍAS - DERECHOS 5 A 9

{
    texto: "El quinto derecho reconocido es formular alegaciones, utilizar medios de defensa del Ordenamiento Jurídico y aportar documentos:",
    opciones: [
        "Solo durante el trámite de audiencia",
        "En cualquier fase del procedimiento anterior al trámite de audiencia",
        "Únicamente en la fase de instrucción del procedimiento"
    ],
    correcta: 1,
    explicacion: "El PDF reconoce el derecho 'A formular alegaciones, utilizar los medios de defensa admitidos por el Ordenamiento Jurídico, y a aportar documentos en cualquier fase del procedimiento anterior al trámite de audiencia'."
},
{
    texto: "Las alegaciones sobre defectos de tramitación se refieren especialmente a:",
    opciones: [
        "Errores materiales en los datos personales del interesado",
        "Paralización, infracción de plazos u omisión de trámites subsanables",
        "Discrepancias con el contenido jurídico de la resolución"
    ],
    correcta: 1,
    explicacion: "El documento indica 'Estas alegaciones son las que se refieren a los defectos de tramitación y, en especial, contra las actuaciones que supongan paralización, infracción de plazos reglamentarios u omisión de trámites que puedan ser subsanados'."
},
{
    texto: "El derecho a obtener información y orientación sobre requisitos jurídicos o técnicos se regula en:",
    opciones: [
        "Solo la Ley 39/2015 del Procedimiento Administrativo Común",
        "El Real Decreto 208/1996 de 9 de febrero",
        "La Ley 40/2015 de Régimen Jurídico del Sector Público"
    ],
    correcta: 1,
    explicacion: "El PDF desarrolla este derecho haciendo referencia al 'Real Decreto 208/1996, de 9 de febrero'."
},
{
    texto: "El séptimo derecho es actuar asistidos de asesor. El artículo 78.2 establece que en la notificación de la práctica de la prueba se incluirá:",
    opciones: [
        "Solo el lugar donde se practicará la misma",
        "Lugar, fecha y hora con la advertencia de poder nombrar técnicos",
        "Únicamente la fecha límite para presentar alegaciones"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'en la notificación se consignará el lugar, fecha y hora en que se practicará la prueba, con la advertencia, en su caso, de que el interesado puede nombrar técnicos para que le asistan'."
},
{
    texto: "El octavo derecho reconocido es cumplir obligaciones de pago:",
    opciones: [
        "Solo en efectivo o transferencia bancaria tradicional",
        "A través de los medios electrónicos previstos en la Ley 39/2015",
        "Únicamente mediante ingreso presencial en entidad colaboradora"
    ],
    correcta: 1,
    explicacion: "El documento recoge el derecho '8.- A cumplir las obligaciones de pago a través de los medios electrónicos previstos en la propia Ley 39/2015'."
},
{
    texto: "El noveno derecho es a cualesquiera otros que les reconozcan la Constitución y las Leyes. Esto implica que:",
    opciones: [
        "Solo incluye derechos desarrollados expresamente por normas reglamentarias",
        "Cualquier derecho constitucional pasará a ampliar la esfera jurídica del interesado",
        "Se limita a los derechos fundamentales del Título I CE"
    ],
    correcta: 1,
    explicacion: "El PDF señala que 'cualquier precepto constitucional tiene un rango superior y preferente a la propia Ley, razón por la cual cualquier derecho reconocido en la Constitución, ahora o en el futuro, relativo al procedimiento administrativo pasará a ampliar la esfera jurídica del interesado'."
},

// BLOQUE 5: DERECHOS EN PROCEDIMIENTOS SANCIONADORES

{
    texto: "En procedimientos de naturaleza sancionadora, el presunto responsable tiene derecho a ser notificado de:",
    opciones: [
        "Solo los hechos imputados y la sanción propuesta",
        "Hechos, infracciones, sanciones, identidad del instructor, autoridad competente y norma atributiva",
        "Únicamente la resolución sancionadora una vez dictada"
    ],
    correcta: 1,
    explicacion: "El PDF enumera: 'los hechos que se le imputen, de las infracciones que tales hechos puedan constituir y de las sanciones que, en su caso, se les pudieran imponer, así como de la identidad del instructor, de la autoridad competente para imponer la sanción y de la norma que atribuya tal competencia'."
},
{
    texto: "La presunción de no existencia de responsabilidad administrativa consiste en:",
    opciones: [
        "La inversión de la carga de la prueba en favor de la Administración",
        "La traslación al ámbito administrativo de la presunción de inocencia del derecho penal",
        "La obligación del interesado de probar que no cometió la infracción"
    ],
    correcta: 1,
    explicacion: "El documento afirma que 'El presente derecho consiste en la traslación al ámbito administrativo de un principio propio del derecho penal, como es el de la presunción de inocencia'."
},
{
    texto: "La Administración debe ejercer con cautela su poder exorbitante para no causar:",
    opciones: [
        "Demoras innecesarias en la tramitación",
        "Situaciones de injusticia o indefensión al interesado o al ciudadano",
        "Gastos excesivos con cargo al presupuesto público"
    ],
    correcta: 1,
    explicacion: "El PDF establece que debe actuar 'con cautela para no causar, al interesado en particular ni al ciudadano en general, situaciones de injusticia o indefensión'."
},

// BLOQUE 6: INFORMACIÓN ADMINISTRATIVA - RD 208/1996

{
    texto: "La información administrativa puede ser según el Real Decreto 208/1996:",
    opciones: [
        "General, especializada y particular",
        "General y particular",
        "Básica, intermedia y avanzada"
    ],
    correcta: 1,
    explicacion: "El RD 208/1996 distingue solo entre información general y particular. Es el Decreto del Alcalde de Madrid de 2005 el que añade la especializada."
},
{
    texto: "La información general se facilitará a los ciudadanos:",
    opciones: [
        "Solo previa acreditación de interés legítimo",
        "Obligatoriamente sin exigir legitimación alguna",
        "Tras solicitud formal en el registro de entrada"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'La información general se facilitará obligatoriamente a los ciudadanos, sin exigir para ello la acreditación de legitimación alguna'."
},
{
    texto: "La información particular solo puede facilitarse a:",
    opciones: [
        "Cualquier ciudadano por el principio de transparencia",
        "Interesados o representantes legales según artículos 31 y 32 de la Ley 30/1992",
        "Funcionarios públicos acreditados del mismo órgano"
    ],
    correcta: 1,
    explicacion: "El documento señala que 'Esta información sólo podrá ser facilitada a las personas que tengan la condición de interesados en cada procedimiento o a sus representantes legales de acuerdo con lo dispuesto en los artículos 31 y 32 de la Ley 30/1992'."
},
{
    texto: "La información sobre documentos que contengan datos que afecten a la intimidad estará reservada:",
    opciones: [
        "A cualquier persona que la solicite formalmente",
        "A las personas a que se refieran con las limitaciones de la Ley Orgánica",
        "Solo a las autoridades judiciales competentes"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'La información sobre documentos que contengan datos de esta naturaleza estará reservada a las personas a que se refieran con las limitaciones y en los términos establecidos en la Ley Orgánica'."
},

// BLOQUE 7: INFORMACIÓN - DECRETO ALCALDE MADRID 2005

{
    texto: "La principal diferencia entre el RD 208/1996 y el Decreto del Alcalde de 2005 respecto a tipos de información es:",
    opciones: [
        "El Decreto del Alcalde suprime la categoría de información particular",
        "El Decreto del Alcalde añade la información especializada como tercera categoría",
        "El Decreto del Alcalde unifica todas las categorías en una sola"
    ],
    correcta: 1,
    explicacion: "El PDF señala que 'el Decreto del Alcalde establece tres clases de información administrativa, añadiendo a la ya clásica diferencia entre información general y particular, la información especializada'."
},
{
    texto: "La información se entenderá especializada cuando:",
    opciones: [
        "Afecte a materias de competencia exclusiva del Estado",
        "Requiera mayor profundización en la respuesta o sea preciso efectuar consultas complementarias",
        "Solo pueda proporcionarse por personal técnico cualificado"
    ],
    correcta: 1,
    explicacion: "El documento establece que 'La información se entenderá especializada cuando, por sus características específicas, requiera una mayor profundización en la respuesta o sea preciso efectuar consultas complementarias'."
},
{
    texto: "Las solicitudes de información general del Ayuntamiento de Madrid deberán ser resueltas en plazo no superior a:",
    opciones: [
        "Veinticuatro horas",
        "Cuarenta y ocho horas",
        "Setenta y dos horas"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'Dichas solicitudes de información general deberán ser resueltas en un plazo no superior a 48 horas'."
},
{
    texto: "Según el Código de Buenas Prácticas del Ayuntamiento, la información se puede obtener por:",
    opciones: [
        "Solo presencialmente y por teléfono en horario de oficina",
        "Presencialmente, por escrito, telefónicamente o por cualquier medio electrónico",
        "Exclusivamente a través de la sede electrónica municipal"
    ],
    correcta: 1,
    explicacion: "El documento señala que 'la información se podrá obtener por cualquiera de los canales de atención al ciudadano, ya sea presencialmente, por escrito, telefónicamente o por cualquier otro medio electrónico'."
},
{
    texto: "Los ciudadanos pueden acceder a la información de la Base de Datos de Información al Ciudadano directamente a través de:",
    opciones: [
        "Solo las oficinas de atención presencial",
        "Cualquiera de los canales de Línea Madrid",
        "Únicamente la sede electrónica con certificado digital"
    ],
    correcta: 1,
    explicacion: "El PDF establece que pueden acceder 'directamente a través de cualquiera de los canales de Línea Madrid'."
},
{
    texto: "Si la demanda de información no puede resolverse inmediatamente, el compromiso de respuesta es de cuarenta y ocho horas si es general, y para especializada o particular será:",
    opciones: [
        "En el plazo máximo de diez días hábiles",
        "Con la mayor celeridad posible",
        "En un plazo máximo de setenta y dos horas"
    ],
    correcta: 1,
    explicacion: "El documento señala 'con el compromiso de contactarle en un plazo de cuarenta y ocho horas si la demanda es de información general, y con la mayor celeridad posible si la demanda es de información especializada o particular'."
},
{
    texto: "Según el Reglamento Orgánico de Participación Ciudadana, las peticiones de información por escrito deben contestarse en plazo máximo de:",
    opciones: [
        "Quince días naturales",
        "Treinta días",
        "Dos meses"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'sus peticiones habrán de ser contestadas, en el sentido que en cada caso proceda, en el plazo máximo de treinta días'."
},
{
    texto: "Las unidades administrativas con subsistemas de información propios deben facilitar su integración en la Base de Datos de Información al Ciudadano para:",
    opciones: [
        "Cumplir requisitos formales sin utilidad práctica",
        "Posibilitar su consulta por ciudadanos y otras unidades del Ayuntamiento",
        "Alimentar exclusivamente las estadísticas internas municipales"
    ],
    correcta: 1,
    explicacion: "El PDF señala que deben facilitar 'su integración en la misma y así posibilitar su consulta por los ciudadanos y por otras unidades del Ayuntamiento de Madrid'."
},
{
    texto: "La petición de información particular del Decreto del Alcalde vendrá avalada por:",
    opciones: [
        "Cualquier documento sin verificación de identidad",
        "La identificación del solicitante, garantizando confidencialidad e integridad de datos personales",
        "Solo la firma manuscrita del interesado ante empleado público"
    ],
    correcta: 1,
    explicacion: "El documento establece que 'La petición de información de carácter particular vendrá avalada por la identificación del solicitante, garantizándose la confidencialidad e integridad de los datos de carácter personal'."
},
{
    texto: "Las informaciones que se suministren según el Decreto del Alcalde serán:",
    opciones: [
        "Sintéticas limitándose a respuestas afirmativas o negativas",
        "Claras, comprensibles, concretas, íntegras y adecuadas",
        "Exhaustivas incluyendo toda la normativa aplicable completa"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'Las informaciones que se suministren serán claras y comprensibles, concretas, íntegras y adecuadas a la información solicitada'."
},

// BLOQUE 8: INICIACIÓN - DISPOSICIONES GENERALES

{
    texto: "El artículo 54 contempla las clases de iniciación del procedimiento, que son:",
    opciones: [
        "De oficio, a solicitud del interesado y por denuncia",
        "De oficio o a solicitud de persona interesada",
        "De oficio, a instancia de parte y mixta"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'El artículo 54 contempla únicamente dos clases de iniciación del procedimiento, pudiendo iniciarse de oficio o a solicitud de persona interesada'."
},
{
    texto: "Según el artículo 55, el órgano competente podrá abrir un período de información o actuaciones previas con el fin de:",
    opciones: [
        "Resolver directamente el fondo del asunto",
        "Conocer las circunstancias del caso y la conveniencia o no de iniciar el procedimiento",
        "Notificar a todos los posibles interesados la existencia del procedimiento"
    ],
    correcta: 1,
    explicacion: "El documento señala que el órgano 'podrá abrir un período de información o actuaciones previas con el fin de conocer las circunstancias del caso concreto y la conveniencia o no de iniciar el procedimiento'."
},
{
    texto: "En procedimientos sancionadores, las actuaciones previas se orientarán a determinar con la mayor precisión posible:",
    opciones: [
        "Solo la identidad del presunto responsable",
        "Hechos, identificación de responsables y circunstancias relevantes",
        "Únicamente el tipo de sanción aplicable"
    ],
    correcta: 1,
    explicacion: "El PDF indica que se orientarán a determinar 'los hechos susceptibles de motivar la incoación del procedimiento, la identificación de la persona o personas que pudieran resultar responsables y las circunstancias relevantes que concurran'."
},
{
    texto: "Las actuaciones previas serán realizadas por los órganos con funciones de investigación, averiguación e inspección y, en defecto de éstos, por:",
    opciones: [
        "Cualquier funcionario disponible de la Administración",
        "La persona u órgano que determine el competente para la iniciación o resolución",
        "Solo por la inspección general de servicios"
    ],
    correcta: 1,
    explicacion: "El documento establece que en defecto de los órganos investigadores, actuarán 'la persona u órgano administrativo que se determine por el órgano competente para la iniciación o resolución del procedimiento'."
},

// BLOQUE 9: MEDIDAS PROVISIONALES

{
    texto: "Las medidas provisionales pueden adoptarse:",
    opciones: [
        "Solo después de iniciado formalmente el procedimiento",
        "De oficio o a instancia de parte, de forma motivada, incluso antes de la iniciación",
        "Únicamente a solicitud del interesado con aval bancario"
    ],
    correcta: 1,
    explicacion: "El artículo 56 permite adoptarlas 'de oficio o a instancia de parte y de forma motivada'. Además, contempla su adopción 'antes de la iniciación del procedimiento administrativo' en casos de urgencia inaplazable."
},
{
    texto: "Las medidas provisionales deben respetar los principios de:",
    opciones: [
        "Legalidad, eficacia y jerarquía normativa",
        "Proporcionalidad, efectividad y menor onerosidad",
        "Transparencia, publicidad y buena administración"
    ],
    correcta: 1,
    explicacion: "El PDF indica que se adoptarán 'de acuerdo con los principios de proporcionalidad, efectividad y menor onerosidad'."
},
{
    texto: "Antes de la iniciación del procedimiento, solo pueden adoptarse medidas provisionales en casos de:",
    opciones: [
        "Especial complejidad técnica del procedimiento",
        "Urgencia inaplazable y para protección provisional de intereses implicados",
        "Solicitud expresa del interesado con justificación documental"
    ],
    correcta: 1,
    explicacion: "El documento señala que antes de la iniciación solo proceden 'en los casos de urgencia inaplazable y para la protección provisional de los intereses implicados'."
},
{
    texto: "Las medidas provisionales adoptadas antes de la iniciación deberán ser confirmadas, modificadas o levantadas en el acuerdo de iniciación dentro de:",
    opciones: [
        "Los diez días siguientes a su adopción",
        "Los quince días siguientes a su adopción",
        "Los veinte días siguientes a su adopción"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'deberán ser confirmadas, modificadas o levantadas en el acuerdo de iniciación del procedimiento, que deberá efectuarse dentro de los quince días siguientes a su adopción'."
},
{
    texto: "Las medidas provisionales quedarán sin efecto si:",
    opciones: [
        "El interesado interpone recurso contra las mismas",
        "No se inicia el procedimiento en plazo o el acuerdo de iniciación no se pronuncia expresamente sobre ellas",
        "Se produce un cambio de titular en el órgano competente"
    ],
    correcta: 1,
    explicacion: "El documento indica que 'dichas medidas quedarán sin efecto si no se inicia el procedimiento en dicho plazo o cuando el acuerdo de iniciación no contenga un pronunciamiento expreso acerca de las mismas'."
},
{
    texto: "NO podrán adoptarse medidas provisionales que:",
    opciones: [
        "Impliquen gastos superiores a la cuantía del procedimiento",
        "Causen perjuicio de difícil o imposible reparación o violen derechos amparados por las leyes",
        "Requieran la intervención de más de un órgano administrativo"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'No se podrán adoptar medidas provisionales que puedan causar perjuicio de difícil o imposible reparación a los interesados o que impliquen violación de derechos amparados por las leyes'."
},
{
    texto: "Las medidas provisionales pueden ser alzadas o modificadas durante la tramitación por circunstancias:",
    opciones: [
        "Solo por orden judicial motivada",
        "Sobrevenidas o que no pudieron ser tenidas en cuenta al adoptarlas",
        "Apreciadas exclusivamente por el superior jerárquico"
    ],
    correcta: 1,
    explicacion: "El documento señala que pueden alzarse 'de oficio o a instancia de parte, en virtud de circunstancias sobrevenidas o que no pudieron ser tenidas en cuenta en el momento de su adopción'."
},
{
    texto: "Las medidas provisionales se extinguirán cuando:",
    opciones: [
        "Transcurran seis meses desde su adopción",
        "Surta efectos la resolución administrativa que ponga fin al procedimiento",
        "El interesado lo solicite expresamente"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'se extinguirán cuando surta efectos la resolución administrativa que ponga fin al procedimiento correspondiente'."
},

// BLOQUE 10: ACUMULACIÓN E INICIACIÓN DE OFICIO

{
    texto: "El artículo 57 permite la acumulación de procedimientos que guarden:",
    opciones: [
        "Relación temporal por haberse iniciado en el mismo trimestre",
        "Identidad sustancial o íntima conexión entre sí",
        "Competencia del mismo órgano y cuantía similar"
    ],
    correcta: 1,
    explicacion: "El documento establece que puede disponerse acumulación 'a otros con los que guarde identidad sustancial o íntima conexión'."
},
{
    texto: "Contra el acuerdo de acumulación procede:",
    opciones: [
        "Recurso de alzada ante el superior jerárquico",
        "No procede recurso alguno",
        "Recurso potestativo de reposición"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'Contra el acuerdo de acumulación no procederá recurso alguno'."
},
{
    texto: "Según el artículo 58, los procedimientos se iniciarán de oficio por acuerdo del órgano competente por:",
    opciones: [
        "Propia iniciativa, orden superior, petición razonada de otros órganos o denuncia",
        "Solo propia iniciativa o denuncia de particulares",
        "Únicamente orden superior o petición razonada de órganos inspectores"
    ],
    correcta: 0,
    explicacion: "El PDF enumera cuatro formas de inicio de oficio: 'por propia iniciativa o como consecuencia de orden superior, a petición razonada de otros órganos o por denuncia'."
},
{
    texto: "Se entiende por propia iniciativa la actuación derivada de:",
    opciones: [
        "La planificación anual del órgano administrativo",
        "El conocimiento directo o indirecto de circunstancias, conductas o hechos por el órgano competente",
        "La obligación legal periódica de revisar expedientes"
    ],
    correcta: 1,
    explicacion: "El documento define propia iniciativa como 'la actuación derivada del conocimiento directo o indirecto de las circunstancias, conductas o hechos objeto del procedimiento por el órgano que tiene atribuida la competencia de iniciación'."
},
{
    texto: "La orden superior es la emitida por:",
    opciones: [
        "Cualquier órgano de la misma Administración",
        "Un órgano administrativo superior jerárquico del competente para la iniciación",
        "Solo el Ministro o máxima autoridad del departamento"
    ],
    correcta: 1,
    explicacion: "El PDF define orden superior como 'la emitida por un órgano administrativo superior jerárquico del competente para la iniciación del procedimiento'."
},
{
    texto: "La petición razonada es una propuesta de iniciación formulada por órgano que:",
    opciones: [
        "Tiene competencia para iniciar pero prefiere delegarla",
        "No tiene competencia para iniciar pero conoce los hechos",
        "Está obligado por ley a iniciar el procedimiento"
    ],
    correcta: 1,
    explicacion: "El documento indica que es 'la propuesta de iniciación del procedimiento formulada por cualquier órgano administrativo que no tiene competencia para iniciar el mismo'."
},
{
    texto: "La petición razonada:",
    opciones: [
        "Vincula al órgano competente para iniciar",
        "No vincula al competente, pero debe comunicarle los motivos de la no iniciación",
        "Obliga a iniciar salvo que exista causa legal expresa"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'La petición no vincula al órgano competente para iniciar el procedimiento, si bien deberá comunicar al órgano que la hubiera formulado los motivos por los que, en su caso, no procede la iniciación'."
},
{
    texto: "Se entiende por denuncia el acto por el que cualquier persona:",
    opciones: [
        "Ejerce una acción popular ante los tribunales de justicia",
        "Pone en conocimiento de un órgano administrativo la existencia de un hecho que pudiera justificar la iniciación de oficio",
        "Solicita el inicio de un procedimiento como interesado directo"
    ],
    correcta: 1,
    explicacion: "El documento define denuncia como 'el acto por el que cualquier persona, en cumplimiento o no de una obligación legal, pone en conocimiento de un órgano administrativo la existencia de un determinado hecho que pudiera justificar la iniciación de oficio'."
},
{
    texto: "Las denuncias deberán expresar:",
    opciones: [
        "Solo los hechos sin necesidad de identificar al denunciante",
        "La identidad de quien las presenta y el relato de los hechos",
        "Únicamente la norma que se considera infringida"
    ],
    correcta: 1,
    explicacion: "El PDF señala que 'Las denuncias deberán expresar la identidad de la persona o personas que las presentan y el relato de los hechos que se ponen en conocimiento de la Administración'."
},
{
    texto: "Cuando la denuncia invoque perjuicio en el patrimonio de las Administraciones Públicas:",
    opciones: [
        "Se iniciará el procedimiento automáticamente",
        "La no iniciación deberá ser motivada y se notificará al denunciante",
        "Se trasladará directamente a la jurisdicción penal"
    ],
    correcta: 1,
    explicacion: "El documento indica que 'la no iniciación del procedimiento deberá ser motivada y se notificará a los denunciantes la decisión de si se ha iniciado o no el procedimiento'."
},
{
    texto: "La presentación de una denuncia, por sí sola:",
    opciones: [
        "Confiere la condición de interesado en el procedimiento",
        "No confiere la condición de interesado",
        "Obliga a la Administración a iniciar el procedimiento"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'La presentación de una denuncia no confiere, por sí sola, la condición de interesado en el procedimiento'."
},
{
    texto: "El denunciante que haya participado en la infracción podrá ser eximido de la multa cuando sea el primero en aportar pruebas y:",
    opciones: [
        "Se presente voluntariamente ante la Administración",
        "Cese en la participación y no haya destruido pruebas",
        "Identifique a todos los demás infractores implicados"
    ],
    correcta: 1,
    explicacion: "El PDF establece como condición 'que el denunciante cese en la participación de la infracción y no haya destruido elementos de prueba relacionados con el objeto de la denuncia'."
},

// BLOQUE 11: INICIACIÓN A SOLICITUD DEL INTERESADO

{
    texto: "El artículo 66 determina que las solicitudes deberán contener, entre otros requisitos:",
    opciones: [
        "Solo nombre del interesado, hechos y firma",
        "Nombre, medio electrónico o lugar físico para notificaciones, hechos y petición, lugar y fecha, firma y órgano al que se dirige con código",
        "Únicamente los datos de contacto y la petición concreta"
    ],
    correcta: 1,
    explicacion: "El PDF enumera seis elementos: nombre y apellidos, medio electrónico o lugar físico, hechos-razones-petición, lugar y fecha, firma o acreditación de voluntad, y órgano con código de identificación."
},
{
    texto: "Si el interesado desconoce el código de identificación del órgano al que dirige su solicitud:",
    opciones: [
        "Puede omitir este dato sin consecuencias",
        "Las oficinas de asistencia en materia de registros están obligadas a facilitárselo",
        "Debe buscarlo en la sede electrónica antes de presentarla"
    ],
    correcta: 1,
    explicacion: "El documento señala que 'Las oficinas de asistencia en materia de registros estarán obligadas a facilitar a los interesados el código de identificación si el interesado lo desconoce'."
},
{
    texto: "Cuando varias personas tengan pretensiones con contenido y fundamento idéntico o sustancialmente similar:",
    opciones: [
        "Deben presentar solicitudes individuales obligatoriamente",
        "Podrán formularlas en una única solicitud, salvo norma específica en contrario",
        "Solo pueden acumularlas si designan representante común"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'podrán ser formuladas en una única solicitud, salvo que las normas reguladoras de los procedimientos específicos dispongan otra cosa'."
},
{
    texto: "Los interesados podrán exigir de sus solicitudes presentadas:",
    opciones: [
        "Solo acuse de recibo por correo electrónico",
        "El correspondiente recibo que acredite fecha y hora de presentación",
        "Únicamente certificación postal de envío"
    ],
    correcta: 1,
    explicacion: "El documento indica que 'podrán éstos exigir el correspondiente recibo que acredite la fecha y hora de presentación'."
},
{
    texto: "Los modelos de presentación masiva de solicitudes son:",
    opciones: [
        "Obligatorios para todos los interesados",
        "De uso voluntario para los interesados",
        "Solo obligatorios para personas jurídicas"
    ],
    correcta: 1,
    explicacion: "El PDF establece que estos modelos son 'de uso voluntario'."
},
{
    texto: "Los elementos adicionales que los solicitantes acompañen para precisar o completar los datos del modelo:",
    opciones: [
        "Serán rechazados si no están previstos en el formulario",
        "Deberán ser admitidos y tenidos en cuenta por el órgano destinatario",
        "Solo se admitirán si son documentos administrativos oficiales"
    ],
    correcta: 1,
    explicacion: "El documento indica que los elementos adicionales 'deberán ser admitidos y tenidos en cuenta por el órgano al que se dirijan'."
},
{
    texto: "Cuando la Administración establezca expresamente modelos específicos en un procedimiento concreto:",
    opciones: [
        "Serán siempre de uso voluntario para los interesados",
        "Serán de uso obligatorio por los interesados",
        "Solo serán obligatorios si lo indica resolución motivada"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'éstos serán de uso obligatorio por los interesados'."
},
{
    texto: "Si la solicitud no reúne los requisitos exigidos, se requerirá al interesado para subsanar en plazo de:",
    opciones: [
        "Cinco días hábiles improrrogables",
        "Diez días con indicación de desistimiento",
        "Quince días naturales sin apercibimiento"
    ],
    correcta: 1,
    explicacion: "El artículo 68 establece 'un plazo de diez días, subsane la falta o acompañe los documentos preceptivos, con indicación de que, si así no lo hiciera, se le tendrá por desistido de su petición'."
},
{
    texto: "El plazo de subsanación puede ampliarse prudencialmente hasta cinco días más cuando:",
    opciones: [
        "El interesado lo solicite sin justificación alguna",
        "La aportación presente dificultades especiales, salvo procedimientos selectivos o de concurrencia competitiva",
        "Se trate de interesados residentes en el extranjero"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'Siempre que no se trate de procedimientos selectivos o de concurrencia competitiva, este plazo podrá ser ampliado prudencialmente, hasta cinco días, a petición del interesado o a iniciativa del órgano, cuando la aportación de los documentos requeridos presente dificultades especiales'."
},
{
    texto: "En procedimientos iniciados a solicitud, el órgano competente podrá recabar del solicitante la modificación o mejora voluntaria, levantándose:",
    opciones: [
        "Diligencia firmada por todos los interesados",
        "Acta sucinta que se incorporará al procedimiento",
        "Resolución motivada que sustituya a la solicitud inicial"
    ],
    correcta: 1,
    explicacion: "El documento señala que 'De ello se levantará acta sucinta, que se incorporará al procedimiento'."
},

// BLOQUE 12: DECLARACIÓN RESPONSABLE Y COMUNICACIÓN

{
    texto: "La declaración responsable es un documento en el que el interesado manifiesta bajo su responsabilidad que:",
    opciones: [
        "Solicita autorización administrativa para iniciar una actividad",
        "Cumple requisitos, dispone de documentación acreditativa y se compromete a mantener el cumplimiento",
        "Renuncia a su derecho de recurrir la resolución final"
    ],
    correcta: 1,
    explicacion: "El artículo 69 define la declaración responsable como documento en que 'manifiesta, bajo su responsabilidad, que cumple con los requisitos establecidos, que dispone de la documentación que así lo acredita, que la pondrá a disposición de la Administración cuando le sea requerida, y que se compromete a mantener el cumplimiento'."
},
{
    texto: "Los requisitos de la declaración responsable deberán estar recogidos de manera:",
    opciones: [
        "Genérica con referencia a normativa aplicable",
        "Expresa, clara y precisa en la propia declaración",
        "Resumida sin necesidad de especificar detalles"
    ],
    correcta: 1,
    explicacion: "El PDF establece que deben estar recogidos 'de manera expresa, clara y precisa en la correspondiente declaración responsable'."
},
{
    texto: "La comunicación es el documento mediante el que los interesados ponen en conocimiento de la Administración:",
    opciones: [
        "Su oposición a una actuación administrativa en curso",
        "Sus datos identificativos o dato relevante para inicio de actividad o ejercicio de derecho",
        "Su renuncia expresa a un derecho previamente reconocido"
    ],
    correcta: 1,
    explicacion: "El artículo 69 define comunicación como documento para poner en conocimiento 'sus datos identificativos o cualquier otro dato relevante para el inicio de una actividad o el ejercicio de un derecho'."
},
{
    texto: "Las declaraciones responsables y comunicaciones permiten el inicio de actividad desde:",
    opciones: [
        "La resolución administrativa de conformidad",
        "El día de su presentación",
        "Los quince días siguientes a su presentación"
    ],
    correcta: 1,
    explicacion: "El documento establece que permiten el ejercicio 'desde el día de su presentación, sin perjuicio de las facultades de comprobación, control e inspección'."
},
{
    texto: "La comunicación podrá presentarse dentro de un plazo posterior al inicio de la actividad cuando:",
    opciones: [
        "El interesado justifique motivos de urgencia",
        "La legislación correspondiente lo prevea expresamente",
        "Se trate de actividades clasificadas como de bajo riesgo"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'la comunicación podrá presentarse dentro de un plazo posterior al inicio de la actividad cuando la legislación correspondiente lo prevea expresamente'."
},
{
    texto: "La inexactitud, falsedad u omisión de carácter esencial en declaración responsable o comunicación determina:",
    opciones: [
        "La imposición automática de una sanción pecuniaria",
        "La imposibilidad de continuar con el ejercicio del derecho o actividad afectada",
        "Solo un requerimiento de subsanación en plazo de diez días"
    ],
    correcta: 1,
    explicacion: "El documento señala que determinará 'la imposibilidad de continuar con el ejercicio del derecho o actividad afectada desde el momento en que se tenga constancia de tales hechos, sin perjuicio de las responsabilidades penales, civiles o administrativas'."
},
{
    texto: "La resolución que declare estas circunstancias podrá determinar, además de la restitución de la situación jurídica previa:",
    opciones: [
        "Solo la publicación del nombre del infractor en boletín oficial",
        "La imposibilidad de instar nuevo procedimiento con el mismo objeto durante período determinado por ley",
        "La inhabilitación permanente para relacionarse con la Administración"
    ],
    correcta: 1,
    explicacion: "El PDF establece que puede determinarse 'la imposibilidad de instar un nuevo procedimiento con el mismo objeto durante un período de tiempo determinado por la ley'."
},
{
    texto: "Para iniciar una misma actividad, respecto a declaración responsable y comunicación:",
    opciones: [
        "Deben presentarse ambas acumulativamente para mayor seguridad jurídica",
        "Solo será exigible una de las dos, sin que sea posible exigir ambas acumulativamente",
        "La Administración puede exigir ambas si lo considera oportuno"
    ],
    correcta: 1,
    explicacion: "El documento establece que 'únicamente será exigible, bien una declaración responsable, bien una comunicación, sin que sea posible la exigencia de ambas acumulativamente'."
},

// BLOQUE 13: ORDENACIÓN DEL PROCEDIMIENTO

{
    texto: "El expediente administrativo se define como:",
    opciones: [
        "El documento final que contiene la resolución motivada",
        "El conjunto ordenado de documentos y actuaciones que sirven de antecedente y fundamento a la resolución",
        "La carpeta física donde se archivan las notificaciones"
    ],
    correcta: 1,
    explicacion: "El artículo 70 define expediente como 'el conjunto ordenado de documentos y actuaciones que sirven de antecedente y fundamento a la resolución administrativa, así como las diligencias encaminadas a ejecutarla'."
},
{
    texto: "Los expedientes tendrán formato electrónico y se formarán con la agregación ordenada de documentos y además:",
    opciones: [
        "Un resumen ejecutivo de las actuaciones realizadas",
        "Un índice numerado de todos los documentos que contenga",
        "Una carátula con los datos del procedimiento y plazos"
    ],
    correcta: 1,
    explicacion: "El PDF señala que se formarán 'mediante la agregación ordenada de cuantos documentos, pruebas, dictámenes, informes, acuerdos, notificaciones y demás diligencias deban integrarlos, así como un índice numerado de todos los documentos que contenga'."
},
{
    texto: "Al remitir un expediente electrónico se hará conforme al Esquema Nacional de Interoperabilidad, enviándose:",
    opciones: [
        "Solo la resolución final certificada electrónicamente",
        "Completo, foliado, autentificado y con índice autentificado",
        "En formato PDF con firma electrónica del titular del órgano"
    ],
    correcta: 1,
    explicacion: "El documento indica que 'se enviará completo, foliado, autentificado y acompañado de un índice, asimismo autentificado, de los documentos que contenga'."
},
{
    texto: "NO formará parte del expediente administrativo:",
    opciones: [
        "Los informes preceptivos solicitados antes de la resolución final",
        "Notas, borradores, opiniones, resúmenes y comunicaciones internas entre órganos",
        "Los dictámenes emitidos por órganos consultivos externos"
    ],
    correcta: 1,
    explicacion: "El PDF excluye 'la información que tenga carácter auxiliar o de apoyo, como la contenida en aplicaciones, ficheros y bases de datos informáticas, notas, borradores, opiniones, resúmenes, comunicaciones e informes internos o entre órganos o entidades administrativas'."
},
{
    texto: "Un mismo documento puede formar parte de:",
    opciones: [
        "Solo un expediente electrónico sin excepciones",
        "Distintos expedientes electrónicos simultáneamente",
        "Dos expedientes como máximo por restricción legal"
    ],
    correcta: 1,
    explicacion: "El documento establece que 'es admisible que un mismo documento forme parte de distintos expedientes electrónicos'."
},
{
    texto: "La tramitación del expediente hacia su resolución final se hará:",
    opciones: [
        "A instancia de parte y en formato mixto papel-electrónico",
        "De oficio y a través de medios electrónicos en todas sus partes",
        "De forma semipresencial con archivado físico de originales"
    ],
    correcta: 1,
    explicacion: "El artículo 71 establece que 'Dicha tramitación se hará de oficio y a través de medios electrónicos en todas sus partes, respetando los principios de transparencia y publicidad'."
},
{
    texto: "En el despacho de expedientes de homogénea naturaleza debe guardarse:",
    opciones: [
        "El orden alfabético por apellidos del interesado principal",
        "Un orden de incoación, salvo orden motivada y escrita en contrario del titular de la unidad",
        "El orden de prioridad que establezca el plan de trabajo anual"
    ],
    correcta: 1,
    explicacion: "El PDF señala que 'Ha de guardarse en el despacho de los expedientes de homogénea naturaleza un orden de incoación, salvo que por el titular de la unidad administrativa se dé orden motivada y escrita en contrario'."
},
{
    texto: "El incumplimiento del orden de despacho de expedientes dará lugar a:",
    opciones: [
        "Una simple anotación en el expediente personal del funcionario",
        "Responsabilidad disciplinaria del infractor o remoción del puesto de trabajo",
        "Solo una advertencia verbal del superior inmediato"
    ],
    correcta: 1,
    explicacion: "El documento establece que dará lugar 'a la exigencia de responsabilidad disciplinaria del infractor o, en su caso, será causa de remoción del puesto de trabajo'."
},
{
    texto: "El principio de concentración de trámites del artículo 72 establece que se acuerden en un solo acto:",
    opciones: [
        "Todos los trámites del procedimiento sin distinción",
        "Los trámites que admitan impulsión simultánea y no sea obligado su cumplimiento sucesivo",
        "Solo los trámites de audiencia e información pública"
    ],
    correcta: 1,
    explicacion: "El PDF determina que se acuerden en un solo acto 'todos los trámites que, por su naturaleza, admitan una impulsión simultánea y no sea obligado su cumplimiento sucesivo'."
},
{
    texto: "Los trámites que deban cumplimentar los interesados se realizarán en plazo de:",
    opciones: [
        "Cinco días hábiles desde la notificación",
        "Diez días desde la notificación, salvo norma que fije otro distinto",
        "Quince días naturales improrrogables"
    ],
    correcta: 1,
    explicacion: "El artículo 73 establece 'el plazo de diez días a partir de la notificación del correspondiente acto, salvo en el caso que la norma aplicable fije otro distinto'."
},
{
    texto: "Los interesados podrán ser declarados decaídos en su derecho al trámite, pero se admitirá su actuación si se produce:",
    opciones: [
        "En cualquier momento posterior al decaimiento",
        "Antes o dentro del día que se notifique la resolución de decaimiento",
        "Solo si presentan recurso contra la declaración de decaimiento"
    ],
    correcta: 1,
    explicacion: "El PDF señala que 'se admitirá la actuación del interesado y producirá sus efectos legales, si se produjera antes o dentro del día que se notifique la resolución en la que se tenga por transcurrido el plazo'."
},
{
    texto: "Las cuestiones incidentales, incluso las que se refieran a nulidad de actuaciones:",
    opciones: [
        "Suspenden automáticamente toda la tramitación",
        "No suspenderán la tramitación, salvo la recusación",
        "Paralizan el procedimiento hasta resolución firme"
    ],
    correcta: 1,
    explicacion: "El artículo 74 establece que 'Las cuestiones incidentales que se susciten en el procedimiento, incluso las que se refieran a la nulidad de actuaciones, no suspenderán la tramitación del mismo, salvo la recusación'."
},

// BLOQUE 14: INSTRUCCIÓN - DISPOSICIONES GENERALES Y ALEGACIONES

{
    texto: "Los actos de instrucción son actuaciones incluidas en el expediente para la determinación, conocimiento y comprobación de los datos en virtud de los cuales:",
    opciones: [
        "Se archiva o continúa el procedimiento administrativo",
        "Deba pronunciarse la resolución",
        "Se notifica al interesado el inicio de las actuaciones"
    ],
    correcta: 1,
    explicacion: "El artículo 75 define actos de instrucción como los que se incluyen 'para la determinación, conocimiento y comprobación de los actos en virtud de los cuales deba pronunciarse la resolución'."
},
{
    texto: "Los actos de instrucción se realizarán:",
    opciones: [
        "A instancia de parte y presencialmente en oficinas",
        "De oficio y por medios electrónicos por el órgano tramitador",
        "Solo cuando lo solicite expresamente el interesado"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'se realizarán de oficio y por medios electrónicos por el órgano que tramite el procedimiento'."
},
{
    texto: "Las aplicaciones informáticas utilizadas para la instrucción deberán garantizar:",
    opciones: [
        "Solo la seguridad y confidencialidad de los datos",
        "Control de tiempos y plazos, identificación de órganos responsables y tramitación ordenada",
        "Únicamente el registro cronológico de actuaciones"
    ],
    correcta: 1,
    explicacion: "El documento señala que deberán garantizar 'el control de los tiempos y plazos, la identificación de los órganos responsables y la tramitación ordenada de los expedientes, así como facilitar la simplificación y la publicidad de los procedimientos'."
},
{
    texto: "Los actos de instrucción que requieran intervención de los interesados se practicarán:",
    opciones: [
        "Siempre en horario de oficina de 9 a 14 horas",
        "En la forma más conveniente y compatible con sus obligaciones laborales o profesionales",
        "Solo presencialmente en la sede del órgano instructor"
    ],
    correcta: 1,
    explicacion: "El artículo 75 indica que 'habrán de practicarse en la forma que resulte más conveniente para ellos y sea compatible, en la medida de lo posible, con sus obligaciones laborales o profesionales'."
},
{
    texto: "El órgano instructor debe lograr el pleno respeto a los principios de:",
    opciones: [
        "Eficacia y economía procesal",
        "Contradicción e igualdad de los interesados",
        "Celeridad y concentración de trámites"
    ],
    correcta: 1,
    explicacion: "El PDF establece que adoptará medidas para lograr 'el pleno respeto a los principios de contradicción y de igualdad de los interesados en el procedimiento'."
},
{
    texto: "Los interesados podrán aducir alegaciones y aportar documentos en cualquier momento anterior a:",
    opciones: [
        "La resolución final del procedimiento",
        "El trámite de audiencia",
        "La apertura del período de prueba"
    ],
    correcta: 1,
    explicacion: "El artículo 76 establece que podrán hacerlo 'en cualquier momento del procedimiento anterior al trámite de audiencia'."
},
{
    texto: "Las alegaciones y documentos aportados serán tenidos en cuenta por el órgano competente al redactar:",
    opciones: [
        "El acuerdo de iniciación del procedimiento",
        "La correspondiente propuesta de resolución",
        "La resolución final sin más trámites"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'serán tenidos en cuenta por el órgano competente al redactar la correspondiente propuesta de resolución'."
},
{
    texto: "Las alegaciones sobre defectos de tramitación pueden dar lugar, si hubiere razones, a:",
    opciones: [
        "La nulidad automática de todo el procedimiento",
        "La exigencia de responsabilidad disciplinaria",
        "Solo un retraso adicional en la resolución final"
    ],
    correcta: 1,
    explicacion: "El documento señala que 'Dichas alegaciones podrán dar lugar, si hubiere razones para ello, a la exigencia de la correspondiente responsabilidad disciplinaria'."
},

// BLOQUE 15: PRUEBA

{
    texto: "Los hechos relevantes podrán acreditarse por cualquier medio de prueba admisible en Derecho, valorándose según:",
    opciones: [
        "El criterio libre del instructor del procedimiento",
        "Los criterios de la Ley 1/2000 de Enjuiciamiento Civil",
        "Las reglas de la sana crítica del derecho penal"
    ],
    correcta: 1,
    explicacion: "El artículo 77 establece que la valoración 'se realizará de acuerdo con los criterios establecidos en la Ley 1/2000, de 7 de enero, de Enjuiciamiento Civil'."
},
{
    texto: "El período de prueba acordado por el instructor tendrá un plazo:",
    opciones: [
        "No inferior a cinco ni superior a veinte días",
        "No superior a treinta ni inferior a diez días",
        "Siempre de quince días naturales"
    ],
    correcta: 1,
    explicacion: "El PDF señala 'un plazo no superior a treinta días ni inferior a diez'."
},
{
    texto: "El instructor solo podrá rechazar pruebas propuestas por los interesados cuando sean:",
    opciones: [
        "Costosas o de difícil práctica para la Administración",
        "Manifiestamente improcedentes o innecesarias, mediante resolución motivada",
        "Propuestas fuera del período de prueba establecido"
    ],
    correcta: 1,
    explicacion: "El artículo 77 indica que 'sólo podrá rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resolución motivada'."
},
{
    texto: "En procedimientos sancionadores, los hechos declarados probados por resoluciones judiciales penales firmes:",
    opciones: [
        "No tienen valor en el ámbito administrativo",
        "Vincularán a las Administraciones Públicas",
        "Solo orientan pero no obligan al instructor"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'vincularán a las Administraciones Públicas respecto de los procedimientos sancionadores que substancien'."
},
{
    texto: "Los documentos formalizados por funcionarios con condición de autoridad, observando requisitos legales:",
    opciones: [
        "Tienen el mismo valor que un documento privado",
        "Hacen prueba de los hechos salvo que se acredite lo contrario",
        "Son nulos si no están certificados notarialmente"
    ],
    correcta: 1,
    explicacion: "El documento indica que 'harán prueba de éstos salvo que se acredite lo contrario'."
},
{
    texto: "Cuando la prueba consista en informe de un órgano administrativo u organismo público, se entenderá que tiene carácter:",
    opciones: [
        "Meramente orientativo y facultativo",
        "Preceptivo",
        "Vinculante para la resolución"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'se entenderá que éste tiene carácter preceptivo'."
},
{
    texto: "Cuando la valoración de las pruebas pueda constituir el fundamento básico de la decisión:",
    opciones: [
        "Se mencionará solo en la resolución final",
        "Deberá incluirse en la propuesta de resolución",
        "Se comunicará al interesado por trámite separado"
    ],
    correcta: 1,
    explicacion: "El artículo 77 señala que 'deberá incluirse en la propuesta de resolución'."
},
{
    texto: "La Administración comunicará a los interesados el inicio de operaciones de prueba:",
    opciones: [
        "El mismo día de la práctica sin antelación previa",
        "Con antelación suficiente indicando lugar, fecha y hora",
        "Solo si la prueba requiere la presencia física del interesado"
    ],
    correcta: 1,
    explicacion: "El artículo 78.2 indica que comunicará 'con antelación suficiente, el inicio de las operaciones necesarias para la realización de las pruebas que hubieren sido admitidas, consignándose en la notificación el lugar, fecha y hora'."
},
{
    texto: "Cuando la prueba implique gastos que no deba soportar la Administración, ésta podrá:",
    opciones: [
        "Rechazar la prueba automáticamente por motivos económicos",
        "Exigir el anticipo de los mismos a reserva de la liquidación definitiva",
        "Obligar al interesado a renunciar a la prueba propuesta"
    ],
    correcta: 1,
    explicacion: "El PDF establece que 'ésta podrá exigir el anticipo de los mismos, a reserva de la liquidación definitiva, una vez practicada la prueba'."
},

// BLOQUE 16: INFORMES

{
    texto: "Se solicitarán todos los informes que sean preceptivos por disposiciones legales y los que se juzguen necesarios, citando:",
    opciones: [
        "Solo el órgano al que se solicita el informe",
        "El precepto que los exija o la conveniencia de reclamarlos",
        "Únicamente el plazo máximo para su emisión"
    ],
    correcta: 1,
    explicacion: "El artículo 80 indica que se solicitarán 'citándose el precepto que los exija o fundamentando, en su caso, la conveniencia de reclamarlos'."
},
{
    texto: "En la petición de informe se concretará:",
    opciones: [
        "Solo el plazo máximo de emisión deseado",
        "El extremo o extremos acerca de los que se solicita",
        "Únicamente la norma que fundamenta la solicitud"
    ],
    correcta: 1,
    explicacion: "El documento señala que 'En la petición de informe se concretará el extremo o extremos acerca de los que se solicita'."
},
{
    texto: "Salvo disposición expresa en contrario, los informes serán:",
    opciones: [
        "Preceptivos y vinculantes para el órgano decisor",
        "Facultativos y no vinculantes",
        "Obligatorios pero no vinculantes"
    ],
    correcta: 1,
    explicacion: "El artículo 80 establece que 'Salvo disposición expresa en contrario, los informes serán facultativos y no vinculantes'."
},
{
    texto: "Los informes se emitirán en el plazo de:",
    opciones: [
        "Cinco días hábiles improrrogables",
        "Diez días, salvo que disposición o plazos del procedimiento exijan otro",
        "Quince días naturales como regla general"
    ],
    correcta: 1,
    explicacion: "El PDF establece 'en el plazo de diez días, salvo que una disposición o el cumplimiento del resto de los plazos del procedimiento permita o exija otro plazo mayor o menor'."
},
{
    texto: "De no emitirse el informe en plazo, podrán proseguirse las actuaciones salvo que:",
    opciones: [
        "El interesado se oponga expresamente a continuar sin él",
        "Se trate de un informe preceptivo, pudiendo suspenderse el plazo máximo de resolución",
        "El órgano instructor considere esencial el informe"
    ],
    correcta: 1,
    explicacion: "El documento indica que 'se podrán proseguir las actuaciones salvo que se trate de un informe preceptivo, en cuyo caso se podrá suspender el transcurso del plazo máximo legal para resolver el procedimiento'."
},
{
    texto: "El informe emitido fuera de plazo:",
    opciones: [
        "Debe ser tenido en cuenta obligatoriamente",
        "Podrá no ser tenido en cuenta al adoptar la resolución",
        "Es nulo de pleno derecho y debe repetirse"
    ],
    correcta: 1,
    explicacion: "El artículo 80 establece que 'El informe emitido fuera de plazo podrá no ser tenido en cuenta al adoptar la correspondiente resolución'."
},

// BLOQUE 17: TRÁMITE DE AUDIENCIA

{
    texto: "El trámite de audiencia se realiza:",
    opciones: [
        "Al inicio del procedimiento antes de la instrucción",
        "Instruidos los procedimientos, inmediatamente antes de la propuesta de resolución",
        "Después de emitirse la propuesta de resolución"
    ],
    correcta: 1,
    explicacion: "El artículo 82 establece que se realiza 'Instruidos los procedimientos, e inmediatamente antes de redactar la propuesta de resolución'."
},
{
    texto: "La audiencia a los interesados será anterior a la solicitud del informe del órgano de asesoramiento jurídico o:",
    opciones: [
        "Al acuerdo de iniciación del procedimiento",
        "Al Dictamen del Consejo de Estado u órgano consultivo equivalente",
        "A la apertura del período de prueba"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'La audiencia a los interesados será anterior a la solicitud del informe del órgano competente para el asesoramiento jurídico o a la solicitud del Dictamen del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma'."
},
{
    texto: "El plazo para alegar y presentar documentos en el trámite de audiencia es:",
    opciones: [
        "No inferior a diez ni superior a quince días",
        "Siempre de veinte días naturales",
        "No inferior a cinco ni superior a diez días"
    ],
    correcta: 0,
    explicacion: "El artículo 82 establece 'un plazo no inferior a diez días ni superior a quince'."
},
{
    texto: "Se podrá prescindir del trámite de audiencia cuando no figuren en el procedimiento:",
    opciones: [
        "Más de dos interesados con posiciones contradictorias",
        "Otros hechos, alegaciones y pruebas distintos de los aducidos por el interesado",
        "Informes preceptivos pendientes de emisión"
    ],
    correcta: 1,
    explicacion: "El PDF permite prescindir 'cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resolución otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado'."
},
{
    texto: "En procedimientos de responsabilidad patrimonial del art. 32.9 Ley Régimen Jurídico, será necesario en todo caso:",
    opciones: [
        "Publicar anuncio de información pública en el BOE",
        "Dar audiencia al contratista notificándole todas las actuaciones",
        "Recabar dictamen vinculante del Consejo de Estado"
    ],
    correcta: 1,
    explicacion: "El artículo 82 establece que 'será necesario en todo caso dar audiencia al contratista, notificándole cuantas actuaciones se realicen en el procedimiento'."
},
{
    texto: "Según García de Enterría, la omisión del trámite de audiencia puede ser:",
    opciones: [
        "Subsanable mediante recurso de reposición",
        "Causa de nulidad de la resolución final",
        "Irrelevante si el interesado no lo reclama"
    ],
    correcta: 1,
    explicacion: "El documento señala que según García de Enterría 'su omisión puede ser causa de nulidad de la resolución final'."
},
{
    texto: "Si antes de vencer el plazo los interesados manifiestan no efectuar alegaciones:",
    opciones: [
        "Deben esperar obligatoriamente al vencimiento del plazo",
        "Se tendrá por realizado el trámite",
        "Se les concederá un nuevo plazo de reflexión de cinco días"
    ],
    correcta: 1,
    explicacion: "El artículo 82 indica que 'Si antes del vencimiento del plazo los interesados manifiestan su decisión de no efectuar alegaciones ni aportar nuevos documentos o justificaciones, se tendrá por realizado el trámite'."
},

// BLOQUE 18: INFORMACIÓN PÚBLICA

{
    texto: "El período de información pública se acordará cuando:",
    opciones: [
        "Lo soliciten al menos diez ciudadanos simultáneamente",
        "La naturaleza del procedimiento lo requiera",
        "Se trate exclusivamente de disposiciones generales"
    ],
    correcta: 1,
    explicacion: "El artículo 83 establece que puede acordarse 'cuando la naturaleza de éste lo requiera'."
},
{
    texto: "El período de información pública se anuncia en:",
    opciones: [
        "Solo en la sede electrónica del órgano competente",
        "El Boletín Oficial correspondiente",
        "Únicamente en tablones de anuncios físicos"
    ],
    correcta: 1,
    explicacion: "El PDF indica que 'se anunciará en el Boletín Oficial correspondiente'."
},
{
    texto: "El plazo para formular alegaciones en información pública no podrá ser inferior a:",
    opciones: [
        "Diez días hábiles",
        "Veinte días",
        "Treinta días naturales"
    ],
    correcta: 1,
    explicacion: "El artículo 83 establece que 'en ningún caso podrá ser inferior a veinte días'."
},
{
    texto: "La incomparecencia en el trámite de información pública:",
    opciones: [
        "Impide interponer recursos contra la resolución definitiva",
        "No impide interponer los recursos procedentes contra la resolución definitiva",
        "Supone conformidad tácita con el contenido del procedimiento"
    ],
    correcta: 1,
    explicacion: "El documento señala que 'La incomparecencia en este trámite no impedirá a los interesados interponer los recursos procedentes contra la resolución definitiva del procedimiento'."
},
{
    texto: "La comparecencia en información pública:",
    opciones: [
        "Otorga automáticamente la condición de interesado",
        "No otorga por sí misma la condición de interesado",
        "Confiere legitimación activa para interponer recursos"
    ],
    correcta: 1,
    explicacion: "El artículo 83 establece que 'La comparecencia en el trámite de información pública no otorga, por sí misma, la condición de interesado'."
},
{
    texto: "Quienes presenten alegaciones en información pública tienen derecho a obtener:",
    opciones: [
        "Copia íntegra del expediente administrativo completo",
        "Una respuesta razonada, que podrá ser común para cuestiones sustancialmente iguales",
        "Solo acuse de recibo de la alegación presentada"
    ],
    correcta: 1,
    explicacion: "El PDF indica el derecho a 'una respuesta razonada, que podrá ser común para todas aquellas alegaciones que planteen cuestiones sustancialmente iguales'."
},
{
    texto: "Las Administraciones podrán establecer otras formas de participación ciudadana:",
    opciones: [
        "Solo mediante información pública y audiencia, sin más cauces",
        "Directamente o a través de organizaciones y asociaciones reconocidas por la Ley",
        "Únicamente mediante consultas populares vinculantes"
    ],
    correcta: 1,
    explicacion: "El documento concluye indicando que podrán establecerse 'directamente o a través de las organizaciones y asociaciones reconocidas por la Ley en el procedimiento de elaboración de las disposiciones y actos administrativos'."
}
]
},

{
    id: 8,
    nombre: "Tema 8 Ley 39/2015 III",
    icono: "📋",
    preguntas: [
// BLOQUE 1: FINALIZACION DEL PROCEDIMIENTO - FORMAS
{
    texto: "Segun el articulo 84 de la Ley 39/2015, pondran fin al procedimiento:",
    opciones: [
        "La resolucion, el desistimiento, la renuncia y la declaracion de caducidad",
        "La resolucion, el silencio administrativo y la prescripcion",
        "La resolucion, la caducidad y el recurso de alzada"
    ],
    correcta: 0,
    explicacion: "El articulo 84 enumera: la resolucion, el desistimiento, la renuncia al derecho en que se funde la solicitud, cuando tal renuncia no este prohibida por el Ordenamiento Juridico, y la declaracion de caducidad."
},
{
    texto: "Ademas de las formas ordinarias de finalizacion, tambien se producira la terminacion cuando:",
    opciones: [
        "El interesado presente recurso contencioso-administrativo",
        "Exista imposibilidad material de continuarlo por causas sobrevenidas",
        "El organo instructor sea recusado por el interesado"
    ],
    correcta: 1,
    explicacion: "El PDF indica que tambien se producira la terminacion cuando exista imposibilidad material de continuarlo por causas sobrevenidas."
},
{
    texto: "La resolucion que se dicte en caso de imposibilidad material de continuar el procedimiento:",
    opciones: [
        "Sera motivada en todo caso",
        "No requiere motivacion si es por causas sobrevenidas",
        "Solo requiere motivacion si afecta a derechos fundamentales"
    ],
    correcta: 0,
    explicacion: "El documento establece que la resolucion que se dicte debera ser motivada en todo caso."
},
// BLOQUE 2: TERMINACION CONVENCIONAL
{
    texto: "La terminacion convencional del articulo 86 permite a las Administraciones celebrar acuerdos, pactos, convenios o contratos con personas de Derecho:",
    opciones: [
        "Solo de Derecho publico, nunca con particulares",
        "Tanto de Derecho publico como privado",
        "Solo de Derecho privado mediante licitacion publica"
    ],
    correcta: 1,
    explicacion: "El PDF indica que podran celebrar acuerdos, pactos, convenios o contratos con personas tanto de Derecho publico como privado."
},
{
    texto: "Los acuerdos de terminacion convencional no podran versar sobre materias:",
    opciones: [
        "Que afecten a competencias de otras Administraciones Publicas",
        "No susceptibles de transaccion ni contrarias al ordenamiento juridico",
        "Que impliquen gasto publico superior a 50.000 euros"
    ],
    correcta: 1,
    explicacion: "El documento senala que no podran versar sobre materias no susceptibles de transaccion y tendran por objeto satisfacer el interes publico."
},
{
    texto: "Los instrumentos de terminacion convencional deberan establecer como contenido minimo:",
    opciones: [
        "Solo las partes intervinientes y el plazo de vigencia",
        "Identificacion de partes, ambito personal, funcional y territorial, y plazo de vigencia",
        "Unicamente el objeto del acuerdo y la firma de las partes"
    ],
    correcta: 1,
    explicacion: "El PDF establece que deberan establecer como contenido minimo la identificacion de las partes intervinientes, el ambito personal, funcional y territorial, y el plazo de vigencia."
},
{
    texto: "Los acuerdos que versen sobre materias de competencia directa del Consejo de Ministros u organo equivalente autonomico:",
    opciones: [
        "No requieren aprobacion adicional si las partes consienten",
        "Requeriran en todo caso la aprobacion expresa de dicho organo",
        "Solo necesitan ratificacion si superan el ano de vigencia"
    ],
    correcta: 1,
    explicacion: "El documento indica que requeriran en todo caso la aprobacion expresa del Consejo de Ministros u organo equivalente de las Comunidades Autonomas."
},
{
    texto: "Los acuerdos de terminacion convencional suscritos:",
    opciones: [
        "Alteran las competencias atribuidas a los organos administrativos",
        "No supondran alteracion de competencias ni de responsabilidades de autoridades y funcionarios",
        "Modifican el funcionamiento de los servicios publicos afectados"
    ],
    correcta: 1,
    explicacion: "El PDF senala que los acuerdos que se suscriban no supondran alteracion de las competencias atribuidas a los organos administrativos, ni de las responsabilidades que correspondan a las autoridades y funcionarios."
},
{
    texto: "En procedimientos de responsabilidad patrimonial, el acuerdo de terminacion convencional debe fijar la indemnizacion segun los criterios del articulo:",
    opciones: [
        "32 de la Ley 39/2015 del Procedimiento Administrativo Comun",
        "34 de la Ley de Regimen Juridico del Sector Publico",
        "86 de la Ley 39/2015 del Procedimiento Administrativo Comun"
    ],
    correcta: 1,
    explicacion: "El documento establece que el acuerdo fijara la cuantia y modo de indemnizacion de acuerdo con los criterios del articulo 34 de la Ley de Regimen Juridico del Sector Publico."
},
// BLOQUE 3: RESOLUCION
{
    texto: "Segun el articulo 87, antes de dictar resolucion, el organo competente podra decidir la realizacion de actuaciones complementarias mediante:",
    opciones: [
        "Simple providencia del instructor sin requisitos formales",
        "Acuerdo motivado",
        "Resolucion definitiva que incluya dichas actuaciones"
    ],
    correcta: 1,
    explicacion: "El PDF indica que el organo competente para resolver podra decidir, mediante acuerdo motivado, la realizacion de las actuaciones complementarias indispensables."
},
{
    texto: "No tendran la consideracion de actuaciones complementarias:",
    opciones: [
        "Las pruebas periciales solicitadas por el interesado",
        "Los informes que preceden inmediatamente a la resolucion final del procedimiento",
        "Las diligencias de verificacion de datos del expediente"
    ],
    correcta: 1,
    explicacion: "El documento senala que no tendran la consideracion de actuaciones complementarias los informes que preceden inmediatamente a la resolucion final del procedimiento."
},
{
    texto: "El acuerdo de realizacion de actuaciones complementarias se notificara a los interesados, concediendoles un plazo de:",
    opciones: [
        "Cinco dias para formular alegaciones pertinentes",
        "Siete dias para formular alegaciones pertinentes",
        "Diez dias para formular alegaciones pertinentes"
    ],
    correcta: 1,
    explicacion: "El PDF establece un plazo de siete dias para formular las alegaciones que tengan por pertinentes tras la finalizacion de las mismas."
},
{
    texto: "Las actuaciones complementarias deberan practicarse en un plazo no superior a:",
    opciones: [
        "Diez dias habiles",
        "Quince dias",
        "Treinta dias naturales"
    ],
    correcta: 1,
    explicacion: "El documento indica que las actuaciones complementarias deberan practicarse en un plazo no superior a quince dias."
},
{
    texto: "El plazo para resolver el procedimiento quedara suspendido:",
    opciones: [
        "Desde la notificacion del acuerdo hasta su terminacion",
        "Hasta la terminacion de las actuaciones complementarias",
        "Solo si el interesado presenta alegaciones a dichas actuaciones"
    ],
    correcta: 1,
    explicacion: "El PDF senala que el plazo para resolver el procedimiento quedara suspendido hasta la terminacion de las actuaciones complementarias."
},
{
    texto: "Segun el articulo 88, la resolucion que ponga fin al procedimiento decidira:",
    opciones: [
        "Solo las cuestiones planteadas por los interesados en sus alegaciones",
        "Todas las cuestiones planteadas por los interesados y aquellas otras derivadas del mismo",
        "Unicamente la cuestion principal excluyendo las accesorias"
    ],
    correcta: 1,
    explicacion: "El documento establece que la resolucion decidira todas las cuestiones planteadas por los interesados y aquellas otras derivadas del mismo."
},
{
    texto: "Cuando se trate de cuestiones conexas no planteadas por los interesados, el organo competente podra pronunciarse poniendolo de manifiesto por un plazo no superior a:",
    opciones: [
        "Diez dias para alegaciones y medios de prueba",
        "Quince dias para alegaciones y medios de prueba",
        "Veinte dias para alegaciones y medios de prueba"
    ],
    correcta: 1,
    explicacion: "El PDF indica un plazo no superior a quince dias para que formulen las alegaciones que estimen pertinentes y aporten medios de prueba."
},
{
    texto: "En procedimientos tramitados a solicitud del interesado, la resolucion sera congruente con las peticiones formuladas, sin que en ningun caso pueda:",
    opciones: [
        "Modificar los plazos de ejecucion solicitados",
        "Agravar su situacion inicial",
        "Inadmitir la solicitud por motivos de forma"
    ],
    correcta: 1,
    explicacion: "El documento senala que la resolucion sera congruente con las peticiones formuladas por este, sin que en ningun caso pueda agravar su situacion inicial."
},
{
    texto: "Las resoluciones contendran la decision motivada y expresaran ademas:",
    opciones: [
        "Solo el fallo y la fecha de notificacion",
        "Los recursos que procedan, organo ante el que presentarse y plazo para interponerlos",
        "Unicamente la parte dispositiva sin indicacion de recursos"
    ],
    correcta: 1,
    explicacion: "El PDF establece que expresaran los recursos que contra la misma procedan, organo administrativo o judicial ante el que hubieran de presentarse y plazo para interponerlos."
},
{
    texto: "La resolucion del procedimiento se dictara electronicamente y garantizara:",
    opciones: [
        "Solo la fecha de emision y el organo emisor",
        "La identidad del organo competente y la autenticidad e integridad del documento",
        "Unicamente la firma electronica del titular del organo"
    ],
    correcta: 1,
    explicacion: "El documento indica que se dictara electronicamente y garantizara la identidad del organo competente, asi como la autenticidad e integridad del documento."
},
{
    texto: "La Administracion podra abstenerse de resolver so pretexto de silencio, oscuridad o insuficiencia de los preceptos legales:",
    opciones: [
        "Si, cuando los preceptos sean manifiestamente insuficientes",
        "En ningun caso, aunque podra acordar la inadmision de solicitudes de derechos no previstos",
        "Solo cuando exista un recurso alternativo disponible"
    ],
    correcta: 1,
    explicacion: "El PDF senala que en ningun caso podra la Administracion abstenerse de resolver, aunque podra acordarse la inadmision de solicitudes de reconocimiento de derechos no previstos en el ordenamiento juridico."
},
{
    texto: "La aceptacion de informes o dictamenes servira de motivacion a la resolucion cuando:",
    opciones: [
        "Sean emitidos por organos consultivos externos",
        "Se incorporen al texto de la misma",
        "Tengan caracter vinculante para el organo decisor"
    ],
    correcta: 1,
    explicacion: "El documento establece que la aceptacion de informes o dictamenes servira de motivacion a la resolucion cuando se incorporen al texto de la misma."
},
{
    texto: "Cuando la competencia para instruir y resolver no recaiga en un mismo organo:",
    opciones: [
        "Se nombrara un instructor ad hoc para unificar ambas funciones",
        "El instructor elevara al organo competente para resolver una propuesta de resolucion",
        "La instruccion se delegara automaticamente en el organo resolutor"
    ],
    correcta: 1,
    explicacion: "El PDF indica que sera necesario que el instructor eleve al organo competente para resolver una propuesta de resolucion."
},
// BLOQUE 4: DESISTIMIENTO Y RENUNCIA
{
    texto: "El desistimiento consiste en:",
    opciones: [
        "El abandono del procedimiento pero sin renunciar al derecho",
        "La renuncia definitiva al derecho que fundamenta la solicitud",
        "La paralizacion temporal del procedimiento por causa justificada"
    ],
    correcta: 0,
    explicacion: "El PDF define desistimiento como el abandono del procedimiento por el interesado, pero sin renunciar al derecho, lo cual le deja el camino abierto para la incoacion de nuevo procedimiento."
},
{
    texto: "La renuncia se diferencia del desistimiento en que:",
    opciones: [
        "Solo puede hacerse por escrito ante notario",
        "Supone el abandono del derecho mismo",
        "Requiere autorizacion previa de la Administracion"
    ],
    correcta: 1,
    explicacion: "El documento senala que la renuncia supone el abandono del derecho mismo."
},
{
    texto: "El articulo 94 establece que todo interesado podra desistir o renunciar cuando:",
    opciones: [
        "Haya transcurrido al menos la mitad del plazo para resolver",
        "Ello no este prohibido por el Ordenamiento Juridico",
        "Lo autorice expresamente el organo instructor del procedimiento"
    ],
    correcta: 1,
    explicacion: "El PDF indica que todo interesado podra desistir de su solicitud o, cuando ello no este prohibido por el Ordenamiento Juridico, renunciar a sus derechos."
},
{
    texto: "Si el escrito de iniciacion fue formulado por dos o mas interesados, el desistimiento o renuncia:",
    opciones: [
        "Afectara a todos los interesados por igual",
        "Solo afectara a aquellos que la hubiesen formulado",
        "Requerira el consentimiento de todos los demas interesados"
    ],
    correcta: 1,
    explicacion: "El documento establece que el desistimiento o la renuncia solo afectara a aquellos que la hubiesen formulado."
},
{
    texto: "Tanto el desistimiento como la renuncia podran hacerse por:",
    opciones: [
        "Solo mediante escrito formal ante el registro de entrada",
        "Cualquier medio que permita su constancia con las firmas correspondientes",
        "Unicamente en comparecencia presencial ante el organo instructor"
    ],
    correcta: 1,
    explicacion: "El PDF senala que podran hacerse por cualquier medio que permita su constancia, siempre que incorpore las firmas que correspondan."
},
{
    texto: "La Administracion aceptara de pleno el desistimiento o la renuncia y declarara concluso el procedimiento, salvo que:",
    opciones: [
        "El procedimiento lleve mas de seis meses de tramitacion",
        "Hubiese otros interesados que instasen la continuacion en diez dias desde la notificacion",
        "El organo instructor considere que existen motivos de interes publico"
    ],
    correcta: 1,
    explicacion: "El documento indica que lo aceptara salvo que hubiese otros interesados que podran continuar si lo instasen en el plazo de diez dias desde que fueron notificados del desistimiento."
},
{
    texto: "Si la cuestion suscitada por la incoacion del procedimiento entranase interes general o fuera conveniente sustanciarla:",
    opciones: [
        "Se archivara igualmente por prevalecer el desistimiento",
        "La Administracion podra limitar los efectos del desistimiento al interesado y seguira el procedimiento",
        "Se suspendera hasta que un tribunal se pronuncie"
    ],
    correcta: 1,
    explicacion: "El PDF establece que la Administracion podra limitar los efectos del desistimiento al interesado y seguira el procedimiento."
},
// BLOQUE 5: CADUCIDAD
{
    texto: "La caducidad es la terminacion del procedimiento cuando queda paralizado por causa imputable:",
    opciones: [
        "A la Administracion por no resolver en plazo",
        "Al interesado que lo promovio",
        "A ambas partes conjuntamente"
    ],
    correcta: 1,
    explicacion: "El PDF define caducidad como la terminacion del procedimiento cuando queda paralizado por causa imputable al interesado que lo promovio."
},
{
    texto: "Segun el articulo 95, cuando se produzca paralizacion por causa imputable al interesado, la Administracion le advertira que, transcurridos:",
    opciones: [
        "Un mes, se producira la caducidad del procedimiento",
        "Tres meses, se producira la caducidad del procedimiento",
        "Seis meses, se producira la caducidad del procedimiento"
    ],
    correcta: 1,
    explicacion: "El documento indica que la Administracion le advertira que, transcurridos tres meses, se producira la caducidad del mismo."
},
{
    texto: "Consumido el plazo de tres meses sin que el interesado realice las actividades necesarias, la Administracion:",
    opciones: [
        "Dictara resolucion resolviendo el fondo del asunto",
        "Acordara el archivo de las actuaciones, notificandoselo al interesado",
        "Ampliara el plazo otros tres meses de forma automatica"
    ],
    correcta: 1,
    explicacion: "El PDF senala que la Administracion acordara el archivo de las actuaciones, notificandoselo al interesado."
},
{
    texto: "Contra la resolucion que declare la caducidad:",
    opciones: [
        "No procedera recurso alguno",
        "Procederan los recursos pertinentes",
        "Solo cabe recurso extraordinario de revision"
    ],
    correcta: 1,
    explicacion: "El documento indica que contra la resolucion que declare la caducidad procederan los recursos pertinentes."
},
{
    texto: "No podra acordarse la caducidad por la simple inactividad del interesado en la cumplimentacion de tramites cuando:",
    opciones: [
        "Hayan transcurrido mas de seis meses desde el inicio",
        "No sean indispensables para dictar resolucion",
        "El interesado alegue causa de fuerza mayor"
    ],
    correcta: 1,
    explicacion: "El PDF establece que no podra acordarse la caducidad por la simple inactividad del interesado en tramites que no sean indispensables para dictar resolucion."
},
{
    texto: "La inactividad del interesado en tramites no indispensables tendra como efecto:",
    opciones: [
        "La caducidad automatica del procedimiento",
        "Solo la perdida de su derecho al referido tramite",
        "La suspension del procedimiento hasta su subsanacion"
    ],
    correcta: 1,
    explicacion: "El documento senala que dicha inactividad no tendra otro efecto que la perdida de su derecho al referido tramite."
},
{
    texto: "La caducidad no producira por si sola la prescripcion de las acciones, pero:",
    opciones: [
        "Interrumpira el plazo de prescripcion en todo caso",
        "Los procedimientos caducados no interrumpiran el plazo de prescripcion",
        "Suspendera el plazo de prescripcion durante seis meses"
    ],
    correcta: 1,
    explicacion: "El PDF indica que la caducidad no producira por si sola la prescripcion pero los procedimientos caducados no interrumpiran el plazo de prescripcion."
},
{
    texto: "Podra no ser aplicable la caducidad cuando:",
    opciones: [
        "El interesado justifique motivos economicos para la paralizacion",
        "La cuestion suscitada afecte al interes general o fuere conveniente sustanciarla",
        "Hayan transcurrido menos de treinta dias desde la advertencia"
    ],
    correcta: 1,
    explicacion: "El documento establece que podra no ser aplicable cuando la cuestion suscitada afecte al interes general, o fuera conveniente suscitarla para su definicion y esclarecimiento."
},
// BLOQUE 6: TRAMITACION SIMPLIFICADA
{
    texto: "La tramitacion simplificada podra acordarse:",
    opciones: [
        "Solo de oficio por razones de interes publico",
        "De oficio o a solicitud del interesado, por razones de interes publico o falta de complejidad",
        "Unicamente a solicitud del interesado con autorizacion del superior jerarquico"
    ],
    correcta: 1,
    explicacion: "El PDF establece que las Administraciones podran acordar, de oficio o a solicitud del interesado, la tramitacion simplificada por razones de interes publico o falta de complejidad."
},
{
    texto: "En cualquier momento anterior a la resolucion, el organo competente podra acordar:",
    opciones: [
        "El archivo definitivo sin posibilidad de continuacion",
        "Continuar con arreglo a la tramitacion ordinaria",
        "La suspension indefinida del procedimiento"
    ],
    correcta: 1,
    explicacion: "El documento indica que en cualquier momento anterior a su resolucion podra acordar continuar con arreglo a la tramitacion ordinaria."
},
{
    texto: "Cuando la Administracion acuerde de oficio la tramitacion simplificada y alguno de los interesados manifieste oposicion expresa:",
    opciones: [
        "Se archivara el procedimiento sin mas tramites",
        "La Administracion debera seguir la tramitacion ordinaria",
        "La oposicion se desestimara si hay interes publico"
    ],
    correcta: 1,
    explicacion: "El PDF senala que si alguno manifestara su oposicion expresa, la Administracion debera seguir la tramitacion ordinaria."
},
{
    texto: "Si el interesado solicita la tramitacion simplificada y el organo aprecia que no concurren razones, podra desestimar dicha solicitud en plazo de:",
    opciones: [
        "Tres dias desde su presentacion",
        "Cinco dias desde su presentacion, sin recurso posible",
        "Diez dias habiles desde su presentacion"
    ],
    correcta: 1,
    explicacion: "El documento establece que podra desestimar dicha solicitud en el plazo de cinco dias desde su presentacion, sin que exista posibilidad de recurso."
},
{
    texto: "Transcurrido el plazo de cinco dias sin desestimacion de la solicitud de tramitacion simplificada:",
    opciones: [
        "Se entendera estimada la solicitud por silencio positivo",
        "El interesado debera reiterar su solicitud formalmente",
        "Se entendera desestimada la solicitud"
    ],
    correcta: 2,
    explicacion: "El PDF indica que transcurrido el mencionado plazo de cinco dias se entendera desestimada la solicitud."
},
{
    texto: "Los procedimientos tramitados de manera simplificada deberan ser resueltos en:",
    opciones: [
        "Quince dias desde el acuerdo de tramitacion simplificada",
        "Treinta dias desde el siguiente al que se notifique el acuerdo",
        "Dos meses desde la solicitud del interesado"
    ],
    correcta: 1,
    explicacion: "El documento establece que deberan ser resueltos en treinta dias, a contar desde el siguiente al que se notifique al interesado el acuerdo de tramitacion simplificada."
},
{
    texto: "En la tramitacion simplificada, las alegaciones se formularan al inicio del procedimiento durante el plazo de:",
    opciones: [
        "Tres dias habiles",
        "Cinco dias",
        "Diez dias naturales"
    ],
    correcta: 1,
    explicacion: "El PDF indica que uno de los tramites es: alegaciones formuladas al inicio del procedimiento durante el plazo de cinco dias."
},
{
    texto: "El tramite de audiencia en la tramitacion simplificada solo se realizara:",
    opciones: [
        "En todos los procedimientos sin excepcion",
        "Unicamente cuando la resolucion vaya a ser desfavorable para el interesado",
        "Cuando lo solicite expresamente el interesado por escrito"
    ],
    correcta: 1,
    explicacion: "El documento senala que el tramite de audiencia procedera unicamente cuando la resolucion vaya a ser desfavorable para el interesado."
},
{
    texto: "En procedimientos sancionadores, se podra adoptar la tramitacion simplificada cuando existan elementos para calificar la infraccion como leve:",
    opciones: [
        "Con la conformidad expresa del interesado en todo caso",
        "Sin que quepa la oposicion expresa por parte del interesado",
        "Solo si el interesado renuncia al recurso de alzada"
    ],
    correcta: 1,
    explicacion: "El PDF indica que en procedimientos sancionadores se podra adoptar cuando existen elementos suficientes para calificar la infraccion como leve, sin que quepa la oposicion expresa por parte del interesado."
},
{
    texto: "Cuando el Dictamen del Consejo de Estado sea preceptivo en la tramitacion simplificada, desde que se solicite hasta su emision se producira:",
    opciones: [
        "La ampliacion del plazo de resolucion en quince dias adicionales",
        "La suspension automatica del plazo para resolver",
        "Solo se notificara al interesado sin efecto suspensivo"
    ],
    correcta: 1,
    explicacion: "El documento establece que desde que se solicite el Dictamen hasta que este sea emitido, se producira la suspension automatica del plazo para resolver."
},
{
    texto: "El Dictamen en la tramitacion simplificada podra ser emitido en el plazo de:",
    opciones: [
        "Diez dias si asi lo solicita el organo competente",
        "Quince dias si asi lo solicita el organo competente",
        "Treinta dias como plazo maximo improrrogable"
    ],
    correcta: 1,
    explicacion: "El PDF indica que el Dictamen podra ser emitido en el plazo de quince dias si asi lo solicita el organo competente."
},
{
    texto: "Cuando el Dictamen del Consejo de Estado sea contrario al fondo de la propuesta de resolucion:",
    opciones: [
        "La Administracion debera acatar obligatoriamente el Dictamen",
        "El organo competente acordara continuar con la tramitacion ordinaria",
        "Se archivara el procedimiento por imposibilidad de resolucion"
    ],
    correcta: 1,
    explicacion: "El documento senala que cuando el Dictamen sea contrario al fondo de la propuesta, el organo competente para resolver acordara continuar el procedimiento con arreglo a la tramitacion ordinaria."
},
{
    texto: "Cuando se acuerde continuar con la tramitacion ordinaria tras Dictamen contrario, las actuaciones realizadas durante la tramitacion simplificada:",
    opciones: [
        "Se anularan y deberan repetirse integramente",
        "Se entenderan convalidadas todas, a excepcion del Dictamen del Consejo de Estado",
        "Solo se convalidaran las pruebas practicadas"
    ],
    correcta: 1,
    explicacion: "El PDF establece que se entenderan convalidadas todas las actuaciones realizadas durante la tramitacion simplificada, a excepcion del Dictamen del Consejo de Estado u organo consultivo equivalente."
},
{
    texto: "Si un procedimiento simplificado exige la realizacion de un tramite no previsto en el articulo 96:",
    opciones: [
        "Se omitira dicho tramite por no estar contemplado",
        "Debera ser tramitado de manera ordinaria",
        "Se solicitara autorizacion al Consejo de Estado"
    ],
    correcta: 1,
    explicacion: "El documento indica que en caso de que exija un tramite no previsto, debera ser tramitado de manera ordinaria."
},
{
    texto: "En responsabilidad patrimonial, cuando el organo considere inequivoca la relacion de causalidad, valoracion del dano y calculo de indemnizacion:",
    opciones: [
        "Debera resolver directamente sin mas tramites",
        "Podra acordar de oficio la suspension del procedimiento general y la iniciacion de uno simplificado",
        "Remitira el expediente al Consejo de Estado para dictamen"
    ],
    correcta: 1,
    explicacion: "El PDF senala que podra acordar de oficio la suspension del procedimiento general y la iniciacion de un procedimiento simplificado."
},
// BLOQUE 7: EJECUCION FORZOSA
{
    texto: "La ejecucion forzosa implica llevar a su aplicacion practica el acto administrativo ante:",
    opciones: [
        "La solicitud voluntaria del administrado",
        "La resistencia, pasiva o activa, de la persona obligada",
        "La conformidad expresa de todas las partes interesadas"
    ],
    correcta: 1,
    explicacion: "El PDF define ejecucion forzosa como llevar el acto a su aplicacion practica ante la resistencia, pasiva o activa, de la persona obligada a su cumplimiento."
},
{
    texto: "La ejecucion forzosa por la Administracion es aplicable cuando del acto resulta obligada:",
    opciones: [
        "La propia Administracion que dicto el acto",
        "Otra persona distinta de la Administracion",
        "Ambas partes conjuntamente"
    ],
    correcta: 1,
    explicacion: "El documento senala que es aplicable cuando del acto resulta ser otra la persona obligada."
},
{
    texto: "Segun el articulo 97, las Administraciones no iniciaran actuacion material de ejecucion sin que previamente:",
    opciones: [
        "Se haya publicado en el Boletin Oficial correspondiente",
        "Haya sido adoptada la resolucion que le sirva de fundamento juridico",
        "El interesado haya agotado todos los recursos administrativos"
    ],
    correcta: 1,
    explicacion: "El PDF indica que no iniciaran ninguna actuacion material de ejecucion sin que previamente haya sido adoptada la resolucion que le sirva de fundamento juridico."
},
{
    texto: "Segun el articulo 99, las Administraciones podran proceder a la ejecucion forzosa:",
    opciones: [
        "En todos los casos sin excepcion alguna",
        "Previo apercibimiento, salvo suspension o cuando la Constitucion o la Ley exijan intervencion judicial",
        "Solo cuando el obligado preste su consentimiento expreso"
    ],
    correcta: 1,
    explicacion: "El documento establece que podran proceder previo apercibimiento, salvo en los supuestos de suspension o cuando la Constitucion o la Ley exijan la intervencion de un organo judicial."
},
{
    texto: "Los medios de ejecucion forzosa del articulo 100 son:",
    opciones: [
        "Apremio sobre el patrimonio, ejecucion subsidiaria, multa coercitiva y compulsion sobre las personas",
        "Embargo preventivo, ejecucion subsidiaria, sancion coercitiva y coaccion directa",
        "Apremio patrimonial, ejecucion directa, multa ejecutiva y compulsion personal"
    ],
    correcta: 0,
    explicacion: "El PDF enumera: Apremio sobre el patrimonio, Ejecucion subsidiaria, Multa coercitiva, Compulsion sobre las personas."
},
{
    texto: "Si fueran varios los medios de ejecucion admisibles se elegira:",
    opciones: [
        "El mas eficaz para garantizar el cumplimiento inmediato",
        "El menos restrictivo de la libertad individual",
        "El que determine discrecionalmente el organo ejecutor"
    ],
    correcta: 1,
    explicacion: "El documento senala que se elegira el menos restrictivo de la libertad individual."
},
{
    texto: "Si fuese necesario entrar en el domicilio del afectado, las Administraciones deberan obtener:",
    opciones: [
        "Solo la orden del superior jerarquico del organo ejecutor",
        "El consentimiento del afectado o, en su defecto, autorizacion judicial",
        "Autorizacion del Delegado del Gobierno en la Comunidad Autonoma"
    ],
    correcta: 1,
    explicacion: "El PDF establece que deberan obtener el consentimiento del mismo, o en su defecto, la oportuna autorizacion judicial."
},
// BLOQUE 8: MEDIOS DE EJECUCION FORZOSA
{
    texto: "El apremio sobre el patrimonio se aplica cuando del acto resulte:",
    opciones: [
        "Una obligacion personalissima de hacer del administrado",
        "Una cantidad liquida a satisfacer mediante procedimiento recaudatorio en via ejecutiva",
        "La necesidad de demoler una construccion ilegal"
    ],
    correcta: 1,
    explicacion: "El articulo 101 indica que si en virtud de acto administrativo hubiera de satisfacerse cantidad liquida se seguira el procedimiento recaudatorio en via ejecutiva."
},
{
    texto: "En ningun caso podra imponerse a los administrados una obligacion pecuniaria que:",
    opciones: [
        "Supere el importe de 3.000 euros sin autorizacion judicial",
        "No estuviese establecida con arreglo a una norma de rango legal",
        "No haya sido previamente notificada al interesado en plazo"
    ],
    correcta: 1,
    explicacion: "El PDF senala que no podra imponerse una obligacion pecuniaria que no estuviese establecida con arreglo a una norma de rango legal."
},
{
    texto: "La ejecucion subsidiaria procede cuando se trate de actos que:",
    opciones: [
        "Impongan obligaciones personalissimas de hacer al obligado",
        "Por no ser personalissimos puedan ser realizados por sujetos distintos del obligado",
        "Requieran la intervencion directa de la autoridad judicial"
    ],
    correcta: 1,
    explicacion: "El documento establece que procede cuando se trate de actos que por no ser personalissimos puedan ser realizados por sujetos distintos del obligado."
},
{
    texto: "En la ejecucion subsidiaria, las Administraciones realizaran el acto:",
    opciones: [
        "Gratuitamente asumiendo los costes con cargo al presupuesto publico",
        "Por si o a traves de las personas que determinen, a costa del obligado",
        "Solo mediante contratacion de empresa privada"
    ],
    correcta: 1,
    explicacion: "El PDF indica que las Administraciones realizaran el acto, por si o a traves de las personas que determinen, a costa del obligado."
},
{
    texto: "El importe de gastos de la ejecucion subsidiaria se exigira conforme a:",
    opciones: [
        "La Ley de Contratos del Sector Publico",
        "Lo dispuesto para el apremio sobre el patrimonio",
        "El procedimiento sancionador ordinario"
    ],
    correcta: 1,
    explicacion: "El documento senala que el importe se exigira conforme a lo dispuesto para el apremio sobre el patrimonio."
},
{
    texto: "El importe de la ejecucion subsidiaria podra liquidarse de forma provisional y realizarse:",
    opciones: [
        "Solo despues de la ejecucion completa del acto",
        "Antes de la ejecucion, a reserva de liquidacion definitiva",
        "Simultaneamente con la resolucion que ordena la ejecucion"
    ],
    correcta: 1,
    explicacion: "El PDF establece que dicho importe podra liquidarse de forma provisional y realizarse antes de la ejecucion, a reserva de liquidacion definitiva."
},
{
    texto: "Las multas coercitivas pueden imponerse en tres supuestos. Uno de ellos es:",
    opciones: [
        "Actos que impongan obligaciones de dar una cantidad liquida",
        "Actos personalissimos en que no proceda la compulsion directa sobre la persona del obligado",
        "Actos de tramite que requieran la intervencion del interesado"
    ],
    correcta: 1,
    explicacion: "El documento enumera tres supuestos, incluyendo actos personalissimos en que no proceda la compulsion directa sobre la persona del obligado."
},
{
    texto: "La multa coercitiva es independiente de las sanciones que puedan imponerse y:",
    opciones: [
        "Es incompatible con cualquier otra medida de ejecucion",
        "Es compatible con ellas",
        "Sustituye a la sancion cuando esta sea de caracter pecuniario"
    ],
    correcta: 1,
    explicacion: "El PDF senala que la multa coercitiva es independiente de las sanciones que puedan imponerse con tal caracter y compatible con ellas."
},
{
    texto: "La compulsion sobre las personas del articulo 104 procede para ejecutar actos que impongan:",
    opciones: [
        "Cualquier tipo de obligacion al administrado",
        "Una obligacion personalissima de no hacer o soportar",
        "Solo obligaciones de dar una cantidad determinada"
    ],
    correcta: 1,
    explicacion: "El documento indica que los actos que impongan una obligacion personalissima de no hacer o soportar podran ser ejecutados por compulsion directa sobre las personas."
},
{
    texto: "La compulsion sobre las personas solo procede cuando:",
    opciones: [
        "El obligado se niegue a comparecer ante la Administracion",
        "La Ley expresamente lo autorice, dentro del respeto a la dignidad y derechos constitucionales",
        "La Administracion lo considere proporcionado segun su criterio"
    ],
    correcta: 1,
    explicacion: "El PDF establece que solo procede en los casos en que la Ley expresamente lo autorice, dentro del respeto a la dignidad y derechos constitucionales."
},
{
    texto: "Si tratandose de obligaciones personalissimas de hacer no se realizase la prestacion:",
    opciones: [
        "Se impondra multa coercitiva hasta que se cumpla",
        "El obligado debera resarcir los danos y perjuicios, liquidandose y cobrandose en via administrativa",
        "Se trasladara el asunto a la jurisdiccion civil ordinaria"
    ],
    correcta: 1,
    explicacion: "El documento senala que el obligado debera resarcir los danos y perjuicios, a cuya liquidacion y cobro procedera en via administrativa."
},
// BLOQUE 9: PROCEDIMIENTO SANCIONADOR - INICIO
{
    texto: "Segun el articulo 63, los procedimientos sancionadores se iniciaran siempre:",
    opciones: [
        "A solicitud del interesado o por denuncia de terceros",
        "De oficio por acuerdo del organo competente, con separacion entre fase instructora y sancionadora",
        "Indistintamente de oficio o a instancia de parte"
    ],
    correcta: 1,
    explicacion: "El PDF establece que se iniciaran siempre de oficio por acuerdo del organo competente y estableceran la debida separacion entre la fase instructora y la sancionadora, encomendada a organos distintos."
},
{
    texto: "En ningun caso se podra imponer una sancion sin que:",
    opciones: [
        "El interesado haya prestado declaracion ante el instructor",
        "Se haya tramitado el oportuno procedimiento",
        "Se haya recabado dictamen del Consejo de Estado"
    ],
    correcta: 1,
    explicacion: "El documento indica que en ningun caso se podra imponer una sancion sin que se haya tramitado el oportuno procedimiento."
},
{
    texto: "No se podran iniciar nuevos procedimientos sancionadores por hechos en cuya comision el infractor persista de forma continuada, en tanto:",
    opciones: [
        "No se haya impuesto la sancion maxima prevista",
        "No haya recaido una primera resolucion sancionadora con caracter ejecutivo",
        "No haya transcurrido el plazo de prescripcion de la infraccion"
    ],
    correcta: 1,
    explicacion: "El PDF senala que no se podran iniciar nuevos procedimientos en tanto no haya recaido una primera resolucion sancionadora, con caracter ejecutivo."
},
{
    texto: "El acuerdo de iniciacion se notificara a los interesados, entendiendo en todo caso por tal:",
    opciones: [
        "Solo al denunciante que promovio la actuacion",
        "Al inculpado",
        "A todos los que pudieran verse afectados indirectamente"
    ],
    correcta: 1,
    explicacion: "El documento establece que se notificara a los interesados, entendiendo en todo caso por tal al inculpado."
},
{
    texto: "Excepcionalmente, cuando no existan elementos suficientes para la calificacion inicial de los hechos en el acuerdo de iniciacion:",
    opciones: [
        "Se archivara el procedimiento por falta de tipificacion",
        "La calificacion podra realizarse en fase posterior mediante un Pliego de cargos notificado a los interesados",
        "Se suspendera el procedimiento hasta obtener nuevos elementos"
    ],
    correcta: 1,
    explicacion: "El PDF indica que la calificacion podra realizarse en una fase posterior mediante la elaboracion de un Pliego de cargos, que debera ser notificado a los interesados."
},
{
    texto: "El articulo 60.2 establece que en el supuesto de inicio por orden superior en procedimientos sancionadores, la orden expresara:",
    opciones: [
        "Solo la identidad del presunto responsable",
        "La persona o personas responsables, las conductas o hechos que pudieran constituir infraccion, el lugar, la fecha y el periodo de tiempo continuado",
        "Unicamente la sancion propuesta y el organo competente"
    ],
    correcta: 1,
    explicacion: "El documento senala que la orden expresara, en la medida de lo posible, la persona o personas presuntamente responsables; las conductas o hechos que pudieran constituir infraccion administrativa y su tipificacion; asi como el lugar, la fecha, fechas o periodo de tiempo continuado en que los hechos se produjeron."
},
// BLOQUE 10: PROCEDIMIENTO SANCIONADOR - TERMINACION Y RESOLUCION
{
    texto: "Si el infractor reconoce su responsabilidad, se podra resolver el procedimiento con:",
    opciones: [
        "El archivo sin imposicion de sancion alguna",
        "La imposicion de la sancion que proceda",
        "La suspension del procedimiento durante un ano"
    ],
    correcta: 1,
    explicacion: "El PDF indica que si el infractor reconoce su responsabilidad, se podra resolver el procedimiento con la imposicion de la sancion que proceda."
},
{
    texto: "Cuando la sancion sea unicamente pecuniaria, el pago voluntario anterior a la resolucion implicara:",
    opciones: [
        "Solo el reconocimiento de los hechos sin efecto procesal",
        "La terminacion del procedimiento, salvo lo relativo a reposicion de situacion alterada o indemnizacion",
        "La suspension del procedimiento hasta nueva orden"
    ],
    correcta: 1,
    explicacion: "El documento establece que el pago voluntario implicara la terminacion del procedimiento, salvo en lo relativo a la reposicion de la situacion alterada o a la determinacion de la indemnizacion."
},
{
    texto: "Cuando la sancion sea unicamente pecuniaria, el organo competente aplicara reducciones de al menos:",
    opciones: [
        "El 10% sobre el importe de la sancion propuesta",
        "El 20% sobre el importe de la sancion propuesta, siendo acumulables entre si",
        "El 30% sobre el importe de la sancion propuesta"
    ],
    correcta: 1,
    explicacion: "El PDF senala reducciones de al menos el 20% sobre el importe de la sancion propuesta, siendo estos acumulables entre si."
},
{
    texto: "La efectividad de las reducciones por pago voluntario esta condicionada a:",
    opciones: [
        "La conformidad del denunciante con la resolucion",
        "El desistimiento o renuncia de cualquier accion o recurso en via administrativa contra la sancion",
        "La publicacion del acuerdo en el Boletin Oficial"
    ],
    correcta: 1,
    explicacion: "El documento indica que su efectividad estara condicionada al desistimiento o renuncia de cualquier accion o recurso en via administrativa contra la sancion."
},
{
    texto: "El organo instructor resolvera sin propuesta de resolucion cuando en la instruccion se ponga de manifiesto alguna circunstancia como:",
    opciones: [
        "Solo la prescripcion de la infraccion",
        "Inexistencia de hechos, hechos no acreditados, hechos que no constituyan infraccion, no identificacion del responsable o prescripcion",
        "Unicamente que los hechos no resulten acreditados"
    ],
    correcta: 1,
    explicacion: "El PDF enumera cinco circunstancias: inexistencia de hechos, hechos no acreditados, hechos que no constituyan infraccion, no identificacion del responsable o prescripcion."
},
{
    texto: "Segun el articulo 90, en la resolucion sancionadora no se podran aceptar hechos distintos de los determinados en el curso del procedimiento:",
    opciones: [
        "Bajo ninguna circunstancia ni valoracion diferente",
        "Con independencia de su diferente valoracion juridica",
        "Salvo que el inculpado lo consienta expresamente"
    ],
    correcta: 1,
    explicacion: "El documento senala que en la resolucion no se podran aceptar hechos distintos de los determinados en el curso del procedimiento, con independencia de su diferente valoracion juridica."
},
{
    texto: "Cuando el organo considere que la infraccion o sancion revistan mayor gravedad que la determinada en la propuesta:",
    opciones: [
        "Dictara resolucion directamente con la nueva calificacion",
        "Se notificara al inculpado para que alegue en plazo de quince dias",
        "Se archivara y se iniciara un nuevo procedimiento"
    ],
    correcta: 1,
    explicacion: "El PDF indica que se notificara al inculpado para que aporte cuantas alegaciones estime convenientes en el plazo de quince dias."
},
{
    texto: "La resolucion sancionadora sera ejecutiva cuando:",
    opciones: [
        "Sea notificada al interesado en forma legal",
        "No quepa contra ella ningun recurso ordinario en via administrativa",
        "Transcurran diez dias desde su notificacion"
    ],
    correcta: 1,
    explicacion: "El documento establece que sera ejecutiva cuando no quepa contra ella ningun recurso ordinario en via administrativa."
},
{
    texto: "Cuando la resolucion sea ejecutiva, el interesado podra solicitar la suspension cautelar si manifiesta su intencion de interponer recurso:",
    opciones: [
        "Solo ante el organo instructor del procedimiento",
        "Contencioso-administrativo contra la resolucion firme en via administrativa",
        "De alzada ante el superior jerarquico"
    ],
    correcta: 1,
    explicacion: "El PDF senala que se podra suspender cautelarmente si el interesado manifiesta su intencion de interponer recurso contencioso-administrativo contra la resolucion firme en via administrativa."
},
{
    texto: "Cuando las conductas sancionadas hubieran causado danos y la cuantia indemnizatoria no estuviera determinada en el expediente, se fijara mediante:",
    opciones: [
        "Acuerdo entre el infractor y la Administracion",
        "Un procedimiento complementario cuya resolucion sera inmediatamente ejecutiva",
        "Peritaje judicial independiente vinculante"
    ],
    correcta: 1,
    explicacion: "El documento indica que se fijara mediante un procedimiento complementario, cuya resolucion sera inmediatamente ejecutiva."
},
// BLOQUE 11: RESPONSABILIDAD PATRIMONIAL
{
    texto: "Los procedimientos especiales sobre potestad sancionadora y responsabilidad patrimonial en la Ley 39/2015:",
    opciones: [
        "Se mantienen en titulos independientes como en la Ley 30/1992",
        "Se han integrado como especialidades del procedimiento administrativo comun",
        "Se han derogado y remitido a legislacion sectorial"
    ],
    correcta: 1,
    explicacion: "El PDF senala que ahora se han integrado como especialidades del procedimiento administrativo comun."
},
{
    texto: "Para iniciar de oficio un procedimiento de responsabilidad patrimonial sera necesario que:",
    opciones: [
        "La Administracion lo acuerde libremente sin requisitos",
        "No haya prescrito el derecho a la reclamacion del interesado segun el articulo 67",
        "El Consejo de Estado emita dictamen previo favorable"
    ],
    correcta: 1,
    explicacion: "El documento indica que sera necesario que no haya prescrito el derecho a la reclamacion del interesado."
},
{
    texto: "El acuerdo de iniciacion de oficio en responsabilidad patrimonial se notificara a los particulares lesionados concediendoles plazo de:",
    opciones: [
        "Cinco dias para presentar alegaciones",
        "Diez dias para aportar alegaciones, documentos y pruebas",
        "Quince dias para manifestar su conformidad"
    ],
    correcta: 1,
    explicacion: "El PDF senala un plazo de diez dias para que aporten cuantas alegaciones, documentos o informacion estimen conveniente."
},
{
    texto: "El derecho a reclamar responsabilidad patrimonial prescribira:",
    opciones: [
        "A los seis meses de producido el hecho lesivo",
        "Al ano de producido el hecho o acto que motive la indemnizacion o se manifieste su efecto lesivo",
        "A los dos anos desde la notificacion de la resolucion causante"
    ],
    correcta: 1,
    explicacion: "El documento establece que prescribira al ano de producido el hecho o el acto que motive la indemnizacion o se manifieste su efecto lesivo."
},
{
    texto: "En danos fisicos o psiquicos a personas, el plazo de prescripcion empezara a computarse desde:",
    opciones: [
        "El momento exacto en que se produce el dano",
        "La curacion o la determinacion del alcance de las secuelas",
        "La fecha de la solicitud de indemnizacion"
    ],
    correcta: 1,
    explicacion: "El PDF indica que el plazo empezara a computarse desde la curacion o la determinacion del alcance de las secuelas."
},
{
    texto: "En la solicitud de responsabilidad patrimonial, los interesados deberan especificar:",
    opciones: [
        "Solo el dano sufrido y la cuantia reclamada",
        "Las lesiones, la presunta relacion de causalidad, la evaluacion economica y el momento de la lesion",
        "Unicamente la norma infringida y el acto causante del dano"
    ],
    correcta: 1,
    explicacion: "El documento establece que deberan especificar las lesiones producidas, la presunta relacion de causalidad, la evaluacion economica y el momento en que la lesion se produjo."
},
{
    texto: "En responsabilidad patrimonial por anulacion de un acto o disposicion, el derecho a reclamar prescribira:",
    opciones: [
        "Al ano de la firmeza de la sentencia anulatoria",
        "Al ano de haberse notificado la resolucion administrativa o la sentencia definitiva",
        "A los seis meses desde la publicacion de la anulacion en el BOE"
    ],
    correcta: 1,
    explicacion: "El PDF senala que el derecho a reclamar prescribira al ano de haberse notificado la resolucion administrativa o la sentencia definitiva."
},
// BLOQUE 12: RESPONSABILIDAD PATRIMONIAL - INFORMES, DICTAMENES Y RESOLUCION
{
    texto: "Sera preceptivo solicitar informe al servicio cuyo funcionamiento haya ocasionado la presunta lesion, no pudiendo exceder de:",
    opciones: [
        "Cinco dias el plazo de emision",
        "Diez dias el plazo de su emision",
        "Quince dias el plazo de emision"
    ],
    correcta: 1,
    explicacion: "El PDF indica que sera preceptivo solicitar informe, no pudiendo exceder de diez dias el plazo de su emision."
},
{
    texto: "Cuando las indemnizaciones reclamadas sean de cuantia igual o superior a 50.000 euros:",
    opciones: [
        "Sera facultativo solicitar dictamen del Consejo de Estado",
        "Sera preceptivo solicitar dictamen del Consejo de Estado o del organo consultivo autonomico",
        "Se resolvera directamente por el Consejo de Ministros"
    ],
    correcta: 1,
    explicacion: "El documento senala que sera preceptivo solicitar dictamen del Consejo de Estado o, en su caso, del organo consultivo de la Comunidad Autonoma."
},
{
    texto: "El dictamen del Consejo de Estado en responsabilidad patrimonial se emitira en plazo de:",
    opciones: [
        "Un mes desde su solicitud",
        "Dos meses, pronunciandose sobre relacion de causalidad, valoracion del dano y cuantia de indemnizacion",
        "Tres meses desde la remision del expediente"
    ],
    correcta: 1,
    explicacion: "El PDF establece que el dictamen se emitira en el plazo de dos meses y debera pronunciarse sobre la existencia de relacion de causalidad, la valoracion del dano y la cuantia y modo de indemnizacion."
},
{
    texto: "En responsabilidad patrimonial del Estado por funcionamiento anormal de la Administracion de Justicia, sera preceptivo:",
    opciones: [
        "Solo el informe del servicio causante del dano",
        "El informe del Consejo General del Poder Judicial, evacuado en plazo maximo de dos meses",
        "El dictamen vinculante del Tribunal Constitucional"
    ],
    correcta: 1,
    explicacion: "El documento indica que sera preceptivo el informe del Consejo General del Poder Judicial que sera evacuado en el plazo maximo de dos meses."
},
{
    texto: "En la resolucion de responsabilidad patrimonial, sera necesario que se pronuncie sobre:",
    opciones: [
        "Solo la cuantia de la indemnizacion y el plazo de pago",
        "Existencia de relacion de causalidad, valoracion del dano, cuantia y modo de indemnizacion segun articulo 34 LRJSP",
        "Unicamente si procede o no la indemnizacion solicitada"
    ],
    correcta: 1,
    explicacion: "El PDF senala que la resolucion se pronunciara sobre la existencia de relacion de causalidad, la valoracion del dano, la cuantia y el modo de la indemnizacion segun los criterios del articulo 34 de la Ley de Regimen Juridico del Sector Publico."
},
{
    texto: "Transcurridos seis meses desde el inicio del procedimiento de responsabilidad patrimonial sin resolucion expresa:",
    opciones: [
        "Se entendera estimada la pretension por silencio positivo",
        "Podra entenderse que la resolucion es contraria a la indemnizacion del particular",
        "Se archivara el procedimiento por caducidad"
    ],
    correcta: 1,
    explicacion: "El documento establece que transcurridos seis meses podra entenderse que la resolucion es contraria a la indemnizacion del particular."
},
{
    texto: "En la Administracion General del Estado, los procedimientos de responsabilidad patrimonial se resolveran por:",
    opciones: [
        "Siempre por el Consejo de Ministros en pleno",
        "El Ministro respectivo o por el Consejo de Ministros en los casos del articulo 32.3 LRJSP",
        "Solo por el Ministro competente sin excepciones"
    ],
    correcta: 1,
    explicacion: "El PDF indica que se resolveran por el Ministro respectivo o por el Consejo de Ministros en los casos del articulo 32.3 de la Ley de Regimen Juridico del Sector Publico o cuando una ley asi lo disponga."
},
{
    texto: "En el ambito autonomico y local, los procedimientos de responsabilidad patrimonial se resolveran por:",
    opciones: [
        "Solo el Presidente de la Comunidad Autonoma o el Alcalde",
        "Los organos correspondientes de las Comunidades Autonomas o de las Entidades de la Administracion Local",
        "El Consejo de Estado o el organo consultivo equivalente"
    ],
    correcta: 1,
    explicacion: "El documento senala que se resolveran por los organos correspondientes de las Comunidades Autonomas o de las Entidades que integran la Administracion Local."
},
// PREGUNTAS ADICIONALES PARA CUBRIR HUECOS
{
    texto: "Los actos de terminacion convencional podran tener la consideracion de finalizadores de los procedimientos administrativos o:",
    opciones: [
        "Ser impugnados directamente ante la jurisdiccion contenciosa",
        "Insertarse en los mismos con caracter previo, vinculante o no, a la resolucion que les ponga fin",
        "Sustituir en todo caso a la resolucion administrativa expresa"
    ],
    correcta: 1,
    explicacion: "El PDF indica que tales actos podran tener la consideracion de finalizadores de los procedimientos administrativos o insertarse en los mismos con caracter previo, vinculante o no, a la resolucion que les ponga fin."
},
{
    texto: "Los instrumentos de terminacion convencional deberan publicarse o no segun:",
    opciones: [
        "Lo que decida unilateralmente la Administracion",
        "Su naturaleza y las personas a las que estuvieran destinados",
        "Si superan o no el importe de 50.000 euros"
    ],
    correcta: 1,
    explicacion: "El documento establece que deberan publicarse o no segun su naturaleza y las personas a las que estuvieran destinados."
},
{
    texto: "En procedimientos a solicitud del interesado, la resolucion congruente con las peticiones no agravara su situacion inicial, sin perjuicio de:",
    opciones: [
        "La obligacion de motivar en todos los casos",
        "La potestad de la Administracion de incoar de oficio un nuevo procedimiento, si procede",
        "El derecho del interesado a recurrir en alzada"
    ],
    correcta: 1,
    explicacion: "El PDF anade que la resolucion no podra agravar su situacion inicial 'y sin perjuicio de la potestad de la Administracion de incoar de oficio un nuevo procedimiento, si procede'."
},
{
    texto: "La tramitacion simplificada constara unicamente de los siguientes tramites, entre ellos:",
    opciones: [
        "Inicio, subsanacion, alegaciones en cinco dias, audiencia si es desfavorable, informe servicio juridico y resolucion",
        "Inicio, alegaciones en diez dias, periodo de prueba y resolucion",
        "Inicio, audiencia obligatoria, dictamen del Consejo de Estado y resolucion"
    ],
    correcta: 0,
    explicacion: "El PDF enumera los tramites: a) Inicio de oficio o a solicitud, b) Subsanacion, c) Alegaciones en cinco dias, d) Audiencia solo si desfavorable, e) Informe del servicio juridico si preceptivo, f) Informe CGPJ si preceptivo, g) Dictamen Consejo de Estado si preceptivo, h) Resolucion."
},
{
    texto: "En el expediente que se remita al Consejo de Estado en tramitacion simplificada:",
    opciones: [
        "Solo se incluiran las alegaciones del interesado",
        "Se incluira una propuesta de resolucion",
        "No es necesario incluir documentacion adicional"
    ],
    correcta: 1,
    explicacion: "El PDF indica que en el expediente que se remita al Consejo de Estado u organo consultivo equivalente, se incluira una propuesta de resolucion."
},
{
    texto: "La coaccion administrativa no es un sistema habil de ejecucion forzosa porque:",
    opciones: [
        "Esta prohibida expresamente por la Constitucion",
        "La Administracion no puede aplicarse a si misma su propia coaccion",
        "Solo puede ejercerla la autoridad judicial"
    ],
    correcta: 1,
    explicacion: "El PDF senala que la coaccion administrativa no es un sistema habil de ejecucion forzosa, puesto que la Administracion no puede aplicarse a si misma su propia coaccion."
},
{
    texto: "El organo que ordene un acto de ejecucion material de resoluciones estara obligado a:",
    opciones: [
        "Publicarlo en el Boletin Oficial correspondiente",
        "Notificar al particular interesado la resolucion que autorice la actuacion administrativa",
        "Solicitar autorizacion judicial previa en todos los casos"
    ],
    correcta: 1,
    explicacion: "El documento establece que el organo que ordene un acto de ejecucion material de resoluciones estara obligado a notificar al particular interesado la resolucion que autorice la actuacion administrativa."
},
{
    texto: "Las multas coercitivas se caracterizan por ser:",
    opciones: [
        "Unicas e irrepetibles para cada incumplimiento",
        "Reiteradas por lapsos de tiempo que sean suficientes para cumplir lo ordenado",
        "Impuestas una sola vez con caracter definitivo"
    ],
    correcta: 1,
    explicacion: "El PDF indica que las multas coercitivas pueden imponerse reiteradas por lapsos de tiempo que sean suficientes para cumplir lo ordenado."
},
{
    texto: "El segundo supuesto en que proceden las multas coercitivas es:",
    opciones: [
        "Actos que impongan obligaciones de dar cantidad liquida",
        "Actos en que, procediendo la compulsion, la Administracion no la estimara conveniente",
        "Actos que requieran autorizacion judicial para su ejecucion"
    ],
    correcta: 1,
    explicacion: "El documento enumera como segundo supuesto: actos en que, procediendo la compulsion, la Administracion no la estimara conveniente."
},
{
    texto: "El tercer supuesto de multa coercitiva se refiere a:",
    opciones: [
        "Actos cuya ejecucion requiera intervencion judicial",
        "Actos cuya ejecucion pueda el obligado encargar a otra persona",
        "Actos de contenido economico no satisfechos voluntariamente"
    ],
    correcta: 1,
    explicacion: "El PDF senala como tercer supuesto: actos cuya ejecucion pueda el obligado encargar a otra persona."
},
{
    texto: "Se considerara que un organo es competente para iniciar el procedimiento sancionador cuando:",
    opciones: [
        "Lo decida el superior jerarquico mediante orden",
        "Asi lo determinen las normas reguladoras del mismo",
        "Lo solicite el denunciante expresamente"
    ],
    correcta: 1,
    explicacion: "El documento indica que se considerara competente para iniciar el procedimiento cuando asi lo determinen las normas reguladoras del mismo."
},
{
    texto: "La incoacion del procedimiento sancionador se comunicara al denunciante:",
    opciones: [
        "En todos los casos obligatoriamente",
        "Cuando las normas reguladoras del procedimiento asi lo prevean",
        "Solo si el denunciante lo solicita expresamente"
    ],
    correcta: 1,
    explicacion: "El PDF establece que la incoacion se comunicara al denunciante cuando las normas reguladoras del procedimiento asi lo prevean."
},
{
    texto: "El acuerdo de iniciacion del procedimiento sancionador debera contener, entre otros, la identificacion del instructor y, en su caso, Secretario, con expresa indicacion de:",
    opciones: [
        "Su numero de registro personal y destino administrativo",
        "El regimen de recusacion de los mismos",
        "Su titulacion academica y experiencia profesional"
    ],
    correcta: 1,
    explicacion: "El documento indica que el acuerdo contendra: c) Identificacion del instructor y, en su caso, Secretario del procedimiento, con expresa indicacion del regimen de recusacion de los mismos."
},
{
    texto: "El acuerdo de iniciacion sancionador indicara la posibilidad de que el presunto responsable pueda reconocer voluntariamente su responsabilidad con los efectos previstos en:",
    opciones: [
        "El articulo 84 de la Ley 39/2015",
        "El articulo 85 de la Ley 39/2015",
        "El articulo 90 de la Ley 39/2015"
    ],
    correcta: 1,
    explicacion: "El PDF senala que se indicara la posibilidad de que el presunto responsable pueda reconocer voluntariamente su responsabilidad, con los efectos previstos en el articulo 85."
},
{
    texto: "El articulo 61.3, dedicado al inicio por peticion razonada de otros organos en procedimientos sancionadores, establece que las peticiones deberan especificar:",
    opciones: [
        "Solo la identidad del presunto infractor",
        "La persona o personas responsables, las conductas o hechos, su tipificacion, el lugar, la fecha o periodo de tiempo continuado",
        "Unicamente los hechos y la norma infringida"
    ],
    correcta: 1,
    explicacion: "El documento establece que las peticiones deberan especificar, en la medida de lo posible, la persona o personas presuntamente responsables; las conductas o hechos que pudieran constituir infraccion administrativa y su tipificacion; asi como el lugar, la fecha, fechas o periodo de tiempo continuado en que los hechos se produjeron."
},
{
    texto: "El porcentaje de reduccion del 20% previsto para el pago voluntario en procedimientos sancionadores:",
    opciones: [
        "Es un maximo que no puede superarse en ningun caso",
        "Podra ser incrementado reglamentariamente",
        "Solo se aplica a infracciones de caracter leve"
    ],
    correcta: 1,
    explicacion: "El PDF indica que el porcentaje de reduccion previsto en este apartado podra ser incrementado reglamentariamente."
},
{
    texto: "La propuesta de resolucion en el procedimiento sancionador debera indicar:",
    opciones: [
        "Solo la sancion propuesta y su fundamento legal",
        "La puesta de manifiesto del procedimiento y el plazo para formular alegaciones y presentar documentos",
        "Unicamente los hechos probados sin calificacion juridica"
    ],
    correcta: 1,
    explicacion: "El PDF senala que la propuesta de resolucion debera indicar la puesta de manifiesto del procedimiento y el plazo para formular alegaciones y presentar los documentos e informaciones que se estimen pertinentes."
},
{
    texto: "Cuando la instruccion concluya la inexistencia de infraccion o responsabilidad, o se haga uso de la facultad del apartado primero del articulo 89:",
    opciones: [
        "Se archivara el procedimiento sin mas tramite",
        "La propuesta declarara esa circunstancia",
        "Se remitira al organo competente para que resuelva"
    ],
    correcta: 1,
    explicacion: "El documento establece que cuando la instruccion concluya la inexistencia de infraccion o responsabilidad y no se haga uso de la facultad prevista, la propuesta declarara esa circunstancia."
},
{
    texto: "La resolucion sancionadora ejecutiva podra adoptar disposiciones cautelares para garantizar su eficacia en tanto no sea ejecutiva, pudiendo consistir en:",
    opciones: [
        "El embargo preventivo de bienes del sancionado",
        "El mantenimiento de las medidas provisionales que en su caso se hubieran adoptado",
        "La publicacion inmediata de la sancion en el Boletin Oficial"
    ],
    correcta: 1,
    explicacion: "El PDF indica que pudiendo adoptarse las disposiciones cautelares precisas para garantizar su eficacia en tanto no sea ejecutiva y que podran consistir en el mantenimiento de las medidas provisionales."
},
{
    texto: "La suspension cautelar de la resolucion sancionadora ejecutiva finalizara cuando haya transcurrido el plazo legalmente previsto sin que el interesado haya interpuesto recurso contencioso-administrativo, o bien cuando, habiendolo interpuesto:",
    opciones: [
        "El organo judicial dicte sentencia firme en cualquier sentido",
        "No se haya solicitado la suspension cautelar de la resolucion impugnada, o el organo judicial se pronuncie sobre la suspension",
        "Transcurran seis meses desde la interposicion del recurso"
    ],
    correcta: 1,
    explicacion: "El PDF establece que finalizara cuando: a) haya transcurrido el plazo sin recurso contencioso, o b) habiendolo interpuesto: 1. No se haya solicitado en el mismo tramite la suspension cautelar de la resolucion impugnada, 2. El organo judicial se pronuncie sobre la suspension cautelar solicitada."
},
{
    texto: "El procedimiento complementario para fijar la cuantia indemnizatoria por danos de conductas sancionadas:",
    opciones: [
        "Sera susceptible de terminacion convencional en todos los casos",
        "No sera susceptible de terminacion convencional, y ni la aceptacion ni el reconocimiento voluntario del infractor implicaran exencion",
        "Podra finalizarse por acuerdo entre el infractor y la Administracion"
    ],
    correcta: 1,
    explicacion: "El PDF senala que este procedimiento no sera susceptible de terminacion convencional, pero ni esta ni la aceptacion por el infractor de la resolucion que pudiera recaer implicaran el reconocimiento voluntario de su responsabilidad."
},
{
    texto: "El procedimiento de responsabilidad patrimonial iniciado se instruira:",
    opciones: [
        "Solo si los particulares presuntamente lesionados se personan en plazo",
        "Aunque los particulares presuntamente lesionados no se personen en el plazo establecido",
        "Unicamente si el Consejo de Estado emite dictamen favorable"
    ],
    correcta: 1,
    explicacion: "El documento establece que el procedimiento iniciado se instruira aunque los particulares presuntamente lesionados no se personen en el plazo establecido."
},
{
    texto: "En los casos de responsabilidad patrimonial del articulo 32, apartados 4 y 5 de la LRJSP, el derecho a reclamar prescribira:",
    opciones: [
        "A los seis meses desde la firmeza de la sentencia",
        "Al ano de la publicacion en el BOE o en el Diario Oficial de la Union Europea de la sentencia que declare la inconstitucionalidad o su caracter contrario al Derecho de la UE",
        "A los dos anos desde la resolucion administrativa firme"
    ],
    correcta: 1,
    explicacion: "El PDF indica que el derecho a reclamar prescribira al ano de la publicacion en el Boletin Oficial del Estado o en el Diario Oficial de la Union Europea, segun el caso, de la sentencia que declare la inconstitucionalidad de la norma o su caracter contrario al Derecho de la Union Europea."
},
{
    texto: "En procedimientos de responsabilidad patrimonial iniciados a peticion razonada de otro organo, la peticion debera individualizar:",
    opciones: [
        "Solo la identidad de los posibles afectados",
        "La lesion producida en una persona o grupo, su relacion de causalidad con el servicio publico, su evaluacion economica y el momento en que se produjo",
        "Unicamente el acto administrativo causante del dano"
    ],
    correcta: 1,
    explicacion: "El PDF senala que la peticion debera individualizar la lesion producida en una persona o grupo de personas, su relacion de causalidad con el funcionamiento del servicio publico, su evaluacion economica si fuera posible, y el momento en que la lesion efectivamente se produjo."
},
{
    texto: "El organo instructor en responsabilidad patrimonial, en el plazo de diez dias a contar desde la finalizacion del tramite de audiencia, remitira al organo competente para solicitar:",
    opciones: [
        "La resolucion definitiva del procedimiento",
        "El dictamen una propuesta de resolucion, o la propuesta de acuerdo por el que se podria terminar convencionalmente",
        "Solo el expediente completo sin propuesta"
    ],
    correcta: 1,
    explicacion: "El documento indica que el organo instructor, en el plazo de diez dias desde la finalizacion del tramite de audiencia, remitira al organo competente para solicitar el dictamen una propuesta de resolucion, o en su caso, la propuesta de acuerdo por el que se podria terminar convencionalmente el procedimiento."
},
{
    texto: "El plazo para dictar resolucion en responsabilidad patrimonial del Estado por la Administracion de Justicia quedara suspendido:",
    opciones: [
        "Solo durante el periodo de audiencia al interesado",
        "Por el tiempo que medie entre la solicitud del informe del CGPJ y su recepcion, no pudiendo exceder de dos meses",
        "Desde el inicio del procedimiento hasta la emision del dictamen"
    ],
    correcta: 1,
    explicacion: "El PDF establece que el plazo para dictar resolucion quedara suspendido por el tiempo que medie entre la solicitud, del informe y su recepcion, no pudiendo exceder dicho plazo de los citados dos meses."
},
{
    texto: "En las Entidades de Derecho Publico que determinen su regimen juridico, la competencia para resolver procedimientos de responsabilidad patrimonial:",
    opciones: [
        "Corresponde siempre al Ministro de adscripcion",
        "Podra ser establecida por las normas de su regimen juridico; en defecto, se aplicaran las normas generales",
        "Sera delegada obligatoriamente en el organo de control interno"
    ],
    correcta: 1,
    explicacion: "El documento indica que las normas que determinen su regimen juridico podran establecer los organos a quien corresponde la resolucion. En su defecto, se aplicaran las normas previstas en este articulo."
}
]
},

{
    id: 9,
    nombre: "Tema 9 Ley 39/2015 IV",
    icono: "📋",
    preguntas: []
},

{
    id: 10,
    nombre: "Tema 10 Ley 40/2015",
    icono: "📜",
    preguntas: []
},

{
    id: 11,
    nombre: "Tema 11 Personal",
    icono: "👥",
    preguntas: []
},

{
    id: 12,
    nombre: "Tema 12 Normas seguridad social",
    icono: "🛡️",
    preguntas: [
{
        texto: "Según la configuración jurídica del sistema, la relación entre el individuo y la entidad gestora se caracteriza por:",
        opciones: [
            "Una relación unilateral de derecho público sin obligaciones recíprocas",
            "Una relación jurídica compleja con obligaciones y derechos para ambas partes",
            "Un vínculo exclusivamente asistencial sin carácter contributivo"
        ],
        correcta: 1,
        explicacion: "El texto define la relación como jurídica compleja, donde el individuo tiene obligación de cotizar y la entidad derecho a percibir cuotas."
    },
    {
        texto: "En el marco del sistema de Seguridad Social, el individuo incluido en su ámbito presenta principalmente:",
        opciones: [
            "Un derecho exclusivo a prestaciones sin contraprestación económica",
            "Una obligación de pago de cuotas o primas para sostener el sistema",
            "Una facultad discrecional de cotización en función de su renta"
        ],
        correcta: 1,
        explicacion: "El texto indica que el individuo es titular de la obligación de pago de cuotas o primas necesarias para sostener el régimen."
    },
    {
        texto: "El artículo 41 de la Constitución establece que los poderes públicos:",
        opciones: [
            "Podrán establecer sistemas privados complementarios obligatorios",
            "Mantendrán un régimen público de Seguridad Social para todos los ciudadanos",
            "Garantizarán únicamente prestaciones contributivas vinculadas al empleo"
        ],
        correcta: 1,
        explicacion: "Se recoge literalmente que los poderes públicos mantendrán un régimen público de Seguridad Social para todos los ciudadanos."
    },
    {
        texto: "Según el texto, la finalidad del sistema de Seguridad Social es:",
        opciones: [
            "Garantizar exclusivamente prestaciones económicas contributivas",
            "Proteger únicamente a trabajadores en activo",
            "Garantizar protección adecuada ante contingencias definidas legalmente"
        ],
        correcta: 2,
        explicacion: "El sistema garantiza protección adecuada frente a contingencias y situaciones definidas por la ley."
    },
    {
        texto: "Dentro del sistema, las prestaciones complementarias:",
        opciones: [
            "Son obligatorias para los poderes públicos",
            "Son libres",
            "Están prohibidas salvo autorización expresa"
        ],
        correcta: 1,
        explicacion: "El artículo 41 indica que la asistencia y prestaciones complementarias serán libres."
    },
    {
        texto: "El sistema de Seguridad Social protege a:",
        opciones: [
            "Únicamente a quienes realizan actividad profesional",
            "Solo a trabajadores afiliados en régimen contributivo",
            "Personas incluidas en su ámbito y también familiares o asimilados a su cargo"
        ],
        correcta: 2,
        explicacion: "El texto incluye tanto a quienes realizan actividad profesional como a familiares o asimilados."
    },
    {
        texto: "La inclusión en el sistema de Seguridad Social puede derivar de:",
        opciones: [
            "Exclusivamente del ejercicio de actividad profesional",
            "Actividad profesional o cumplimiento de requisitos en modalidad no contributiva",
            "Decisión voluntaria del interesado sin requisitos legales"
        ],
        correcta: 1,
        explicacion: "El texto menciona tanto la actividad profesional como la modalidad no contributiva."
    },
    {
        texto: "Las reivindicaciones históricas de los trabajadores mencionadas en el texto incluyen:",
        opciones: [
            "Reducción de impuestos y liberalización del mercado laboral",
            "Derecho a prestaciones sociales, jornada digna y condiciones saludables",
            "Acceso prioritario a empleo público y pensiones privadas"
        ],
        correcta: 1,
        explicacion: "El texto señala estas reivindicaciones como fundamentales para los trabajadores."
    },
    {
        texto: "El derecho de la entidad gestora dentro de la relación jurídica consiste en:",
        opciones: [
            "Determinar libremente las prestaciones sin base legal",
            "Percibir cuotas o primas necesarias para sostener el sistema",
            "Imponer sanciones sin procedimiento administrativo"
        ],
        correcta: 1,
        explicacion: "Se indica que la entidad es titular del derecho a la percepción de cuotas o primas."
    },
    {
        texto: "El sistema de Seguridad Social se define como:",
        opciones: [
            "Un organismo administrativo único centralizado",
            "Un conjunto de regímenes que garantizan protección",
            "Un sistema exclusivamente financiero sin cobertura social"
        ],
        correcta: 1,
        explicacion: "El texto lo define como un conjunto de regímenes a través de los cuales el Estado garantiza protección."
    }, {
        texto: "La acción protectora del sistema de Seguridad Social se articula a través de:",
        opciones: [
            "Prestaciones económicas y servicios determinados legalmente",
            "Únicamente subsidios monetarios de carácter contributivo",
            "Ayudas discrecionales sin regulación normativa específica"
        ],
        correcta: 0,
        explicacion: "El sistema prevé prestaciones económicas y servicios conforme a lo establecido en la normativa."
    },
    {
        texto: "Las contingencias protegidas por la Seguridad Social se caracterizan por:",
        opciones: [
            "Ser definidas libremente por la Administración en cada caso",
            "Estar previamente determinadas en la ley",
            "Depender exclusivamente de la cotización individual del sujeto"
        ],
        correcta: 1,
        explicacion: "El texto señala que las contingencias y situaciones protegidas están definidas por la ley."
    },
    {
        texto: "En relación con los familiares del sujeto protegido, el sistema:",
        opciones: [
            "Solo reconoce derechos si existe convivencia acreditada judicialmente",
            "Puede extender la protección a familiares o asimilados a su cargo",
            "Excluye cualquier tipo de protección indirecta"
        ],
        correcta: 1,
        explicacion: "Se contempla la protección de familiares o asimilados a cargo del sujeto."
    },
    {
        texto: "La modalidad no contributiva del sistema se aplica cuando:",
        opciones: [
            "Existe relación laboral pero no cotización suficiente",
            "No se realiza actividad profesional pero se cumplen requisitos legales",
            "El sujeto opta voluntariamente por no cotizar"
        ],
        correcta: 1,
        explicacion: "El texto indica que procede cuando no hay actividad profesional pero se cumplen requisitos legales."
    },
    {
        texto: "El sostenimiento financiero del sistema descansa fundamentalmente en:",
        opciones: [
            "Las aportaciones voluntarias de los beneficiarios",
            "Las cuotas o primas exigidas a los obligados",
            "Los ingresos derivados de inversiones privadas"
        ],
        correcta: 1,
        explicacion: "El sistema se sostiene mediante las cuotas o primas que deben abonar los sujetos obligados."
    },
    {
        texto: "La naturaleza del sistema de Seguridad Social, según el texto, es:",
        opciones: [
            "Privada con intervención pública subsidiaria",
            "Mixta con predominio de entidades privadas",
            "Pública bajo responsabilidad de los poderes públicos"
        ],
        correcta: 2,
        explicacion: "El artículo 41 establece el mantenimiento de un régimen público de Seguridad Social."
    },
    {
        texto: "El derecho a la protección en el sistema se configura como:",
        opciones: [
            "Un derecho condicionado a la discrecionalidad administrativa",
            "Un derecho garantizado dentro de los límites legales",
            "Un derecho exclusivo de los trabajadores activos"
        ],
        correcta: 1,
        explicacion: "El sistema garantiza la protección en los términos establecidos por la ley."
    },
    {
        texto: "Las prestaciones del sistema tienen como finalidad:",
        opciones: [
            "Cubrir exclusivamente situaciones de desempleo",
            "Atender diversas situaciones de necesidad definidas legalmente",
            "Sustituir completamente la renta en cualquier circunstancia"
        ],
        correcta: 1,
        explicacion: "El sistema cubre diversas contingencias o situaciones de necesidad previstas en la ley."
    },
    {
        texto: "La obligatoriedad de cotizar en el sistema se vincula a:",
        opciones: [
            "La voluntad del sujeto protegido",
            "La inclusión en el ámbito de aplicación del sistema",
            "La obtención previa de una prestación"
        ],
        correcta: 1,
        explicacion: "La obligación de cotizar surge por la inclusión en el sistema."
    },
    {
        texto: "El modelo de Seguridad Social descrito responde a un principio de:",
        opciones: [
            "Universalidad en la protección",
            "Exclusividad profesional",
            "Capitalización individual estricta"
        ],
        correcta: 0,
        explicacion: "El artículo 41 menciona que el sistema se dirige a todos los ciudadanos, reflejando el principio de universalidad."
    }, {
        texto: "La inclusión en el sistema de Seguridad Social implica para el sujeto protegido:",
        opciones: [
            "Únicamente el acceso a prestaciones asistenciales",
            "La existencia simultánea de derechos y obligaciones",
            "Una relación voluntaria sin efectos jurídicos obligatorios"
        ],
        correcta: 1,
        explicacion: "La relación jurídica es compleja e implica tanto derechos como obligaciones para el sujeto incluido."
    },
    {
        texto: "El carácter contributivo del sistema se manifiesta en que:",
        opciones: [
            "Las prestaciones dependen exclusivamente del presupuesto del Estado",
            "Existe una correlación entre cotización y determinadas prestaciones",
            "Todos los beneficiarios reciben idénticas prestaciones sin relación con cotizaciones"
        ],
        correcta: 1,
        explicacion: "El sistema presenta un componente contributivo donde existe relación entre cotización y prestaciones."
    },
    {
        texto: "El principio de suficiencia en la acción protectora implica:",
        opciones: [
            "La cobertura mínima indispensable sin garantía de adecuación",
            "La garantía de una protección adecuada frente a situaciones de necesidad",
            "La igualdad absoluta de cuantías en todas las prestaciones"
        ],
        correcta: 1,
        explicacion: "El texto menciona la protección adecuada, lo que conecta con el principio de suficiencia."
    },
    {
        texto: "Las prestaciones no contributivas se caracterizan por:",
        opciones: [
            "Exigir necesariamente cotización previa del beneficiario",
            "Derivar exclusivamente de relaciones laborales",
            "No requerir cotización previa pero sí cumplimiento de requisitos legales"
        ],
        correcta: 2,
        explicacion: "Se otorgan sin cotización previa, siempre que se cumplan los requisitos legales."
    },
    {
        texto: "El sistema de Seguridad Social actúa frente a:",
        opciones: [
            "Cualquier situación económica sin delimitación normativa",
            "Contingencias previamente tipificadas en la normativa",
            "Exclusivamente riesgos derivados del trabajo"
        ],
        correcta: 1,
        explicacion: "Las contingencias están definidas previamente en la ley."
    },
    {
        texto: "El derecho a las prestaciones dentro del sistema nace:",
        opciones: [
            "Automáticamente por el mero hecho de ser ciudadano",
            "Solo mediante resolución discrecional administrativa",
            "Cuando se cumplen los requisitos establecidos legalmente"
        ],
        correcta: 2,
        explicacion: "El acceso a prestaciones está condicionado al cumplimiento de requisitos legales."
    },
    {
        texto: "La extensión de la protección a familiares responde al principio de:",
        opciones: [
            "Individualización estricta de derechos",
            "Solidaridad y protección familiar",
            "Contributividad exclusiva del titular"
        ],
        correcta: 1,
        explicacion: "El sistema incorpora protección a familiares como manifestación de solidaridad."
    },
    {
        texto: "El sistema de Seguridad Social se configura como instrumento de:",
        opciones: [
            "Política económica exclusivamente recaudatoria",
            "Protección social frente a situaciones de necesidad",
            "Regulación del mercado laboral sin finalidad social"
        ],
        correcta: 1,
        explicacion: "Su finalidad es proteger frente a situaciones de necesidad."
    },
    {
        texto: "La obligación de cotizar se establece con carácter:",
        opciones: [
            "Voluntario en función de la capacidad económica",
            "General para quienes están incluidos en el sistema",
            "Exclusivo para trabajadores autónomos"
        ],
        correcta: 1,
        explicacion: "La obligación es general para los sujetos incluidos en el sistema."
    },
    {
        texto: "El sistema descrito combina elementos de:",
        opciones: [
            "Asistencia social pura sin contributividad",
            "Seguro privado individual",
            "Modelo contributivo y asistencial"
        ],
        correcta: 2,
        explicacion: "El texto refleja la coexistencia de modalidades contributivas y no contributivas."
    },  {
        texto: "El reconocimiento del derecho a la protección social en el sistema implica que:",
        opciones: [
            "Se otorga sin necesidad de regulación normativa específica",
            "Depende exclusivamente de la disponibilidad presupuestaria anual",
            "Se encuentra sujeto a los términos y condiciones establecidos en la ley"
        ],
        correcta: 2,
        explicacion: "El sistema garantiza la protección, pero siempre dentro de los términos definidos legalmente."
    },
    {
        texto: "El sistema de Seguridad Social se diferencia de un seguro privado en que:",
        opciones: [
            "Carece de financiación económica estable",
            "Se basa en principios de solidaridad y universalidad",
            "Solo cubre riesgos profesionales concretos"
        ],
        correcta: 1,
        explicacion: "A diferencia del seguro privado, el sistema se fundamenta en la solidaridad y la universalidad."
    },
    {
        texto: "El principio de solidaridad en el sistema implica:",
        opciones: [
            "La equivalencia exacta entre lo cotizado y lo percibido",
            "La redistribución de recursos entre distintos colectivos",
            "La financiación exclusiva mediante impuestos generales"
        ],
        correcta: 1,
        explicacion: "La solidaridad supone redistribución entre generaciones y colectivos."
    },
    {
        texto: "El ámbito subjetivo de protección del sistema incluye:",
        opciones: [
            "Solo a trabajadores por cuenta ajena",
            "Exclusivamente a quienes cotizan de forma continuada",
            "A personas incluidas por actividad o por cumplimiento de requisitos legales"
        ],
        correcta: 2,
        explicacion: "Incluye tanto a quienes trabajan como a quienes acceden por vía no contributiva."
    },
    {
        texto: "El carácter público del sistema implica que:",
        opciones: [
            "La gestión corresponde a entidades privadas supervisadas",
            "La responsabilidad última recae en los poderes públicos",
            "La financiación es exclusivamente voluntaria"
        ],
        correcta: 1,
        explicacion: "El artículo 41 CE atribuye a los poderes públicos la responsabilidad del sistema."
    },
    {
        texto: "La protección frente a contingencias se produce:",
        opciones: [
            "De forma automática sin necesidad de acreditar requisitos",
            "Solo mediante decisión discrecional de la Administración",
            "Cuando concurren las circunstancias previstas en la normativa"
        ],
        correcta: 2,
        explicacion: "Es necesario cumplir los requisitos previstos legalmente para acceder a la protección."
    },
    {
        texto: "La acción protectora del sistema puede incluir:",
        opciones: [
            "Únicamente prestaciones económicas periódicas",
            "Prestaciones económicas y asistencia en determinadas situaciones",
            "Exclusivamente prestaciones de carácter indemnizatorio"
        ],
        correcta: 1,
        explicacion: "El sistema contempla tanto prestaciones económicas como servicios o asistencia."
    },
    {
        texto: "El acceso a la modalidad contributiva requiere:",
        opciones: [
            "Exclusivamente la residencia legal en el territorio",
            "La previa cotización conforme a lo establecido",
            "La simple solicitud del interesado"
        ],
        correcta: 1,
        explicacion: "La modalidad contributiva exige cotización previa."
    },
    {
        texto: "El sistema garantiza la protección social:",
        opciones: [
            "Solo en situaciones derivadas de actividad laboral",
            "Únicamente en casos de incapacidad permanente",
            "En diversas situaciones de necesidad definidas normativamente"
        ],
        correcta: 2,
        explicacion: "La protección se extiende a múltiples contingencias previstas por la ley."
    },
    {
        texto: "La relación jurídica en el sistema se caracteriza por:",
        opciones: [
            "Ser exclusivamente unilateral a favor del ciudadano",
            "Carecer de obligaciones para la Administración",
            "Incluir derechos y deberes recíprocos entre las partes"
        ],
        correcta: 2,
        explicacion: "Existe una relación compleja con derechos y obligaciones recíprocos."
    }, {
        texto: "El sistema de Seguridad Social responde a una finalidad de:",
        opciones: [
            "Equilibrio presupuestario sin intervención social",
            "Protección frente a riesgos y necesidades sociales",
            "Fomento exclusivo del ahorro individual"
        ],
        correcta: 1,
        explicacion: "Su finalidad es la protección frente a riesgos y situaciones de necesidad."
    },
    {
        texto: "El derecho a prestaciones no implica:",
        opciones: [
            "El cumplimiento de requisitos previos",
            "Una garantía absoluta al margen de la ley",
            "La acreditación de la contingencia protegida"
        ],
        correcta: 1,
        explicacion: "El derecho está condicionado a lo que establezca la normativa."
    },
    {
        texto: "La financiación del sistema se apoya principalmente en:",
        opciones: [
            "Aportaciones obligatorias de los sujetos incluidos",
            "Donaciones privadas voluntarias",
            "Ingresos derivados de actividades comerciales"
        ],
        correcta: 0,
        explicacion: "El sistema se financia fundamentalmente mediante cotizaciones obligatorias."
    },
    {
        texto: "El reconocimiento de prestaciones requiere:",
        opciones: [
            "Una decisión política sin base normativa",
            "El cumplimiento de condiciones legalmente establecidas",
            "La simple inscripción en el sistema"
        ],
        correcta: 1,
        explicacion: "Es imprescindible cumplir los requisitos establecidos en la normativa."
    },
    {
        texto: "El sistema tiene como rasgo esencial:",
        opciones: [
            "La ausencia de intervención estatal",
            "La protección selectiva de determinados colectivos",
            "La vocación de cobertura generalizada"
        ],
        correcta: 2,
        explicacion: "Se orienta a cubrir a la generalidad de ciudadanos."
    },
    {
        texto: "Las prestaciones complementarias en el sistema:",
        opciones: [
            "Son obligatorias para todos los ciudadanos",
            "Están prohibidas en cualquier caso",
            "Tienen carácter libre"
        ],
        correcta: 2,
        explicacion: "El artículo 41 CE establece que serán libres."
    },
    {
        texto: "El sistema integra mecanismos de protección que:",
        opciones: [
            "Actúan únicamente en situaciones previsibles",
            "Cubren contingencias definidas legalmente",
            "Dependen de la voluntad del beneficiario"
        ],
        correcta: 1,
        explicacion: "Las contingencias están previamente definidas en la normativa."
    },
    {
        texto: "El carácter obligatorio del sistema implica que:",
        opciones: [
            "La afiliación depende de la voluntad individual",
            "Las obligaciones surgen por inclusión legal en el sistema",
            "Solo se aplica a quienes solicitan prestaciones"
        ],
        correcta: 1,
        explicacion: "Las obligaciones derivan de la inclusión en el sistema."
    },
    {
        texto: "El modelo de Seguridad Social descrito persigue:",
        opciones: [
            "La rentabilidad financiera individual",
            "La cobertura de riesgos sociales mediante intervención pública",
            "La eliminación de cualquier tipo de prestación asistencial"
        ],
        correcta: 1,
        explicacion: "El objetivo es cubrir riesgos sociales mediante un sistema público."
    },
    {
        texto: "La acción protectora del sistema se fundamenta en:",
        opciones: [
            "Principios jurídicos establecidos normativamente",
            "Decisiones arbitrarias de la Administración",
            "Acuerdos individuales con los beneficiarios"
        ],
        correcta: 0,
        explicacion: "La acción protectora se rige por principios y normas jurídicas."
    },     
    {
       texto: "El mandato constitucional del artículo 41 implica que el régimen de Seguridad Social debe:",
        opciones: [
            "Limitarse a garantizar prestaciones contributivas",
            "Asegurar protección suficiente ante situaciones de necesidad",
            "Actuar únicamente en casos de incapacidad laboral"
        ],
        correcta: 1,
        explicacion: "El art. 41 CE establece la garantía de asistencia y prestaciones suficientes ante situaciones de necesidad."
    },
    {
        texto: "El concepto de 'situaciones de necesidad' en el sistema se caracteriza por:",
        opciones: [
            "Ser definido discrecionalmente por cada entidad gestora",
            "Estar delimitado por la normativa aplicable",
            "Depender exclusivamente de la situación económica del interesado"
        ],
        correcta: 1,
        explicacion: "Las situaciones de necesidad están definidas normativamente dentro del sistema."
    },
    {
        texto: "La intervención de los poderes públicos en la Seguridad Social tiene carácter:",
        opciones: [
            "Residual respecto de la iniciativa privada",
            "Principal en la organización y mantenimiento del sistema",
            "Limitado a funciones de control financiero"
        ],
        correcta: 1,
        explicacion: "El sistema es público y su mantenimiento corresponde a los poderes públicos."
    },
    {
        texto: "La inclusión de sujetos en el sistema se produce:",
        opciones: [
            "Mediante decisión voluntaria del interesado",
            "Por aplicación de normas que determinan su ámbito subjetivo",
            "Solo tras reconocimiento administrativo expreso"
        ],
        correcta: 1,
        explicacion: "La inclusión deriva de la normativa que define el ámbito de aplicación del sistema."
    },
    {
        texto: "El derecho a la protección social se configura como:",
        opciones: [
            "Un derecho absoluto e incondicionado",
            "Un derecho de configuración legal",
            "Un derecho exclusivo de trabajadores cotizantes"
        ],
        correcta: 1,
        explicacion: "El derecho depende de los términos establecidos por la ley."
    },
    {
        texto: "La relación entre cotización y prestaciones en el sistema:",
        opciones: [
            "Es inexistente en cualquier modalidad",
            "Existe únicamente en el ámbito no contributivo",
            "Se manifiesta especialmente en la modalidad contributiva"
        ],
        correcta: 2,
        explicacion: "La relación es característica del nivel contributivo del sistema."
    },
    {
        texto: "La acción protectora del sistema no se limita a:",
        opciones: [
            "Prestaciones económicas periódicas",
            "Cobertura de riesgos laborales",
            "Una única forma de prestación"
        ],
        correcta: 2,
        explicacion: "El sistema contempla diversas formas de protección, no una única."
    },
    {
        texto: "La obligación de contribuir al sistema tiene fundamento en:",
        opciones: [
            "La libre decisión del sujeto",
            "La inclusión en su ámbito de aplicación",
            "La obtención previa de beneficios económicos"
        ],
        correcta: 1,
        explicacion: "La obligación nace por la inclusión en el sistema."
    },
    {
        texto: "El sistema se orienta a garantizar:",
        opciones: [
            "Una cobertura uniforme sin atender a circunstancias",
            "Protección suficiente ante contingencias definidas",
            "Prestaciones idénticas para todos los beneficiarios"
        ],
        correcta: 1,
        explicacion: "La protección es adecuada y vinculada a contingencias previstas."
    },
    {
        texto: "Las prestaciones del sistema tienen como presupuesto básico:",
        opciones: [
            "La existencia de una situación protegida",
            "La voluntad del beneficiario",
            "La disponibilidad presupuestaria inmediata"
        ],
        correcta: 0,
        explicacion: "Es necesario que concurra una contingencia o situación protegida."
    },   {
        texto: "El sistema de Seguridad Social garantiza protección:",
        opciones: [
            "Solo a quienes mantienen una relación laboral vigente",
            "A quienes cumplen los requisitos dentro de su ámbito de aplicación",
            "Exclusivamente a nacionales del Estado"
        ],
        correcta: 1,
        explicacion: "La protección se extiende a quienes cumplan los requisitos legales, no solo a trabajadores activos."
    },
    {
        texto: "El carácter público del sistema implica que:",
        opciones: [
            "La gestión queda al margen del ordenamiento jurídico",
            "Está sometido a normas y principios de derecho público",
            "Funciona como una entidad privada supervisada"
        ],
        correcta: 1,
        explicacion: "El sistema se rige por el derecho público."
    },
    {
        texto: "La estructura del sistema permite:",
        opciones: [
            "Una única forma de protección homogénea",
            "La coexistencia de distintos niveles de protección",
            "La exclusión de modalidades asistenciales"
        ],
        correcta: 1,
        explicacion: "Existen niveles contributivos y no contributivos."
    },
    {
        texto: "El acceso a la protección no contributiva exige:",
        opciones: [
            "Una relación laboral previa",
            "Únicamente la nacionalidad",
            "El cumplimiento de requisitos específicos sin cotización previa"
        ],
        correcta: 2,
        explicacion: "Se accede sin cotización previa pero con requisitos legales."
    },
    {
        texto: "La acción protectora del sistema tiene carácter:",
        opciones: [
            "Limitado a situaciones excepcionales",
            "General respecto de las contingencias previstas",
            "Discrecional según la Administración"
        ],
        correcta: 1,
        explicacion: "El sistema cubre de forma general las contingencias definidas."
    },
    {
        texto: "La obligación de cotizar constituye:",
        opciones: [
            "Un deber jurídico derivado de la inclusión en el sistema",
            "Una opción voluntaria del sujeto protegido",
            "Una obligación exclusiva de la Administración"
        ],
        correcta: 0,
        explicacion: "Es un deber jurídico para los sujetos incluidos."
    },
    {
        texto: "El sistema persigue garantizar:",
        opciones: [
            "El equilibrio individual entre aportación y prestación",
            "La protección frente a situaciones de necesidad",
            "La autofinanciación completa del individuo"
        ],
        correcta: 1,
        explicacion: "La finalidad es la protección social frente a necesidades."
    },
    {
        texto: "La protección del sistema se activa:",
        opciones: [
            "Automáticamente sin necesidad de requisitos",
            "Al producirse situaciones previstas y cumplir condiciones",
            "Solo mediante decisión judicial"
        ],
        correcta: 1,
        explicacion: "Se requiere contingencia + requisitos legales."
    },
    {
        texto: "El modelo descrito incorpora:",
        opciones: [
            "Exclusivamente mecanismos de seguro privado",
            "Elementos de protección pública y cobertura social",
            "Únicamente prestaciones asistenciales"
        ],
        correcta: 1,
        explicacion: "Se trata de un sistema público con función social."
    },
    {
        texto: "La universalidad del sistema implica:",
        opciones: [
            "Cobertura para todos los ciudadanos en los términos legales",
            "Prestaciones idénticas sin condiciones",
            "Acceso libre sin requisitos"
        ],
        correcta: 0,
        explicacion: "Se garantiza cobertura para todos dentro de los límites legales."
    }, {
        texto: "Según el artículo 41 de la Constitución, la acción protectora se dirigirá especialmente a:",
        opciones: [
            "Las situaciones derivadas de actividad laboral",
            "Las situaciones de necesidad, especialmente en caso de desempleo",
            "Las contingencias profesionales exclusivamente"
        ],
        correcta: 1,
        explicacion: "El artículo 41 menciona expresamente la protección ante situaciones de necesidad, especialmente en caso de desempleo."
    },
    {
        texto: "En relación con el artículo 41 de la Constitución, señale la afirmación correcta:",
        opciones: [
            "Impone la obligatoriedad de las prestaciones complementarias",
            "Establece un sistema privado supervisado por el Estado",
            "Reconoce la libertad de las prestaciones complementarias"
        ],
        correcta: 2,
        explicacion: "El artículo 41 establece que las prestaciones complementarias serán libres."
    },
    {
        texto: "Señale la opción INCORRECTA respecto al sistema de Seguridad Social:",
        opciones: [
            "Se configura como un régimen público",
            "Su mantenimiento corresponde a los poderes públicos",
            "Su existencia depende de la iniciativa privada"
        ],
        correcta: 2,
        explicacion: "El sistema es público y responsabilidad de los poderes públicos, no depende de iniciativa privada."
    },
    {
        texto: "La expresión 'régimen público' implica que:",
        opciones: [
            "La gestión puede quedar completamente externalizada",
            "El sistema está bajo responsabilidad y garantía estatal",
            "Su financiación es exclusivamente voluntaria"
        ],
        correcta: 1,
        explicacion: "El carácter público implica responsabilidad de los poderes públicos."
    },
    {
        texto: "El sistema protege situaciones de necesidad que:",
        opciones: [
            "Son determinadas caso por caso por la Administración",
            "Están previamente definidas en la normativa",
            "Dependen únicamente del nivel de renta"
        ],
        correcta: 1,
        explicacion: "Las situaciones protegidas están definidas legalmente."
    },
    {
        texto: "La inclusión en el sistema no depende de:",
        opciones: [
            "La voluntad del sujeto",
            "La normativa aplicable",
            "La realización de actividad profesional o requisitos legales"
        ],
        correcta: 0,
        explicacion: "La inclusión no es voluntaria, viene determinada por la ley."
    },
    {
        texto: "Señale la afirmación correcta sobre la acción protectora:",
        opciones: [
            "Se limita a prestaciones económicas periódicas",
            "Comprende distintas formas de protección establecidas legalmente",
            "Solo cubre riesgos derivados del trabajo"
        ],
        correcta: 1,
        explicacion: "La acción protectora incluye diversas formas de protección."
    },
    {
        texto: "El derecho a las prestaciones se configura como:",
        opciones: [
            "Un derecho automático sin requisitos",
            "Un derecho condicionado al cumplimiento de requisitos legales",
            "Un derecho discrecional de la Administración"
        ],
        correcta: 1,
        explicacion: "El acceso depende del cumplimiento de requisitos."
    },
    {
        texto: "La obligación de cotizar no se fundamenta en:",
        opciones: [
            "La inclusión en el sistema",
            "La existencia de normativa aplicable",
            "La voluntad individual del sujeto"
        ],
        correcta: 2,
        explicacion: "No es voluntaria, es una obligación legal."
    },
    {
        texto: "El sistema de Seguridad Social garantiza protección:",
        opciones: [
            "Solo a quienes cotizan activamente",
            "A quienes cumplen los requisitos en su ámbito de aplicación",
            "Exclusivamente a trabajadores por cuenta ajena"
        ],
        correcta: 1,
        explicacion: "Incluye tanto contributivos como no contributivos."
    },{
        texto: "La relación jurídica en el sistema implica que el sujeto protegido:",
        opciones: [
            "Solo tiene derechos frente al sistema",
            "Tiene derechos y obligaciones recíprocas",
            "No tiene obligación económica alguna"
        ],
        correcta: 1,
        explicacion: "Existe una relación jurídica compleja con derechos y obligaciones."
    },
    {
        texto: "El sistema se diferencia de un modelo privado en que:",
        opciones: [
            "Se basa en principios de cobertura social general",
            "Funciona mediante contratos individuales",
            "Depende exclusivamente del ahorro personal"
        ],
        correcta: 0,
        explicacion: "El sistema tiene una base pública y social."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre las prestaciones:",
        opciones: [
            "Se reconocen cuando se cumplen requisitos legales",
            "Pueden responder a diversas contingencias",
            "Se conceden sin necesidad de acreditar situación protegida"
        ],
        correcta: 2,
        explicacion: "Siempre debe existir una contingencia o situación protegida."
    },
    {
        texto: "La modalidad no contributiva se caracteriza por:",
        opciones: [
            "Exigir cotización previa",
            "Basarse exclusivamente en actividad profesional",
            "No requerir cotización previa pero sí requisitos legales"
        ],
        correcta: 2,
        explicacion: "No exige cotización previa."
    },
    {
        texto: "La acción protectora del sistema:",
        opciones: [
            "Tiene carácter limitado a determinados colectivos",
            "Se dirige a cubrir contingencias definidas normativamente",
            "Depende de decisiones discrecionales"
        ],
        correcta: 1,
        explicacion: "Las contingencias están definidas por ley."
    },
    {
        texto: "El sistema garantiza protección adecuada lo que implica:",
        opciones: [
            "Cobertura mínima sin referencia a suficiencia",
            "Adecuación a las situaciones de necesidad previstas",
            "Igualdad absoluta en todas las prestaciones"
        ],
        correcta: 1,
        explicacion: "La protección debe ser adecuada a la situación."
    },
    {
        texto: "La inclusión de familiares en la protección responde a:",
        opciones: [
            "Un principio de individualización estricta",
            "Una extensión de la protección social",
            "Una obligación contributiva directa"
        ],
        correcta: 1,
        explicacion: "Se extiende la protección a familiares."
    },
    {
        texto: "El sistema se articula como:",
        opciones: [
            "Un único mecanismo uniforme",
            "Un conjunto de regímenes de protección",
            "Una entidad administrativa aislada"
        ],
        correcta: 1,
        explicacion: "Se define como un conjunto de regímenes."
    },
    {
        texto: "Señale la afirmación correcta sobre las contingencias:",
        opciones: [
            "Son determinadas libremente por el beneficiario",
            "Están previamente definidas por la normativa",
            "Se fijan en función de la renta del sujeto"
        ],
        correcta: 1,
        explicacion: "Las contingencias están legalmente definidas."
    },
    {
        texto: "El sistema de Seguridad Social tiene como finalidad última:",
        opciones: [
            "La obtención de beneficios económicos",
            "La protección frente a situaciones de necesidad",
            "La financiación de servicios privados"
        ],
        correcta: 1,
        explicacion: "Su finalidad es la protección social."
    }, {
        texto: "Según el artículo 41 de la Constitución, la protección se garantiza:",
        opciones: [
            "En cualquier situación de necesidad sin excepción",
            "En situaciones de necesidad, con especial referencia a determinadas contingencias",
            "Exclusivamente en situaciones derivadas de actividad laboral"
        ],
        correcta: 1,
        explicacion: "El artículo menciona situaciones de necesidad, especialmente en caso de desempleo, no todas sin excepción."
    },
    {
        texto: "Señale la afirmación MÁS precisa respecto al término 'protección adecuada':",
        opciones: [
            "Implica una cobertura uniforme para todos los beneficiarios",
            "Supone una cobertura suficiente en función de la situación protegida",
            "Garantiza la equivalencia exacta entre cotización y prestación"
        ],
        correcta: 1,
        explicacion: "Adecuada implica suficiencia adaptada a la situación, no uniformidad ni equivalencia exacta."
    },
    {
        texto: "Señale la opción INCORRECTA sobre el sistema de Seguridad Social:",
        opciones: [
            "Se configura como un conjunto de regímenes",
            "Tiene carácter público bajo responsabilidad de los poderes públicos",
            "Se basa en la libre adhesión del sujeto protegido"
        ],
        correcta: 2,
        explicacion: "La inclusión no es voluntaria, viene determinada por la ley."
    },
    {
        texto: "La expresión 'especialmente en caso de desempleo' implica que:",
        opciones: [
            "El desempleo es la única contingencia protegida",
            "El desempleo tiene un tratamiento destacado dentro del sistema",
            "El desempleo queda fuera de la protección general"
        ],
        correcta: 1,
        explicacion: "Se destaca el desempleo sin excluir otras contingencias."
    },
    {
        texto: "El derecho a las prestaciones en el sistema se caracteriza por:",
        opciones: [
            "Ser automático desde la inclusión en el sistema",
            "Depender exclusivamente de la cotización previa",
            "Exigir el cumplimiento de requisitos legales específicos"
        ],
        correcta: 2,
        explicacion: "No basta inclusión ni cotización; deben cumplirse requisitos."
    },
    {
        texto: "La naturaleza jurídica de la relación en el sistema implica que:",
        opciones: [
            "El sujeto protegido solo ostenta derechos",
            "Existe una relación bilateral con derechos y obligaciones",
            "La Administración carece de derechos frente al sujeto"
        ],
        correcta: 1,
        explicacion: "Es una relación jurídica compleja con reciprocidad."
    },
    {
        texto: "Señale la afirmación correcta respecto a las prestaciones complementarias:",
        opciones: [
            "Forman parte obligatoria del sistema público",
            "Son libres y ajenas al carácter obligatorio del sistema",
            "Sustituyen a las prestaciones básicas"
        ],
        correcta: 1,
        explicacion: "El art. 41 establece que serán libres."
    },
    {
        texto: "La inclusión en el sistema se produce:",
        opciones: [
            "Por voluntad expresa del interesado",
            "Por la concurrencia de los supuestos previstos normativamente",
            "Únicamente tras reconocimiento administrativo constitutivo"
        ],
        correcta: 1,
        explicacion: "La inclusión deriva de la norma, no de la voluntad."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre las contingencias:",
        opciones: [
            "Son situaciones determinadas por el beneficiario",
            "Son situaciones tipificadas previamente en la normativa",
            "Son hechos valorados discrecionalmente por la Administración"
        ],
        correcta: 1,
        explicacion: "Las contingencias están previamente definidas legalmente."
    },
    {
        texto: "El sistema de Seguridad Social no garantiza:",
        opciones: [
            "Protección suficiente ante situaciones de necesidad",
            "Prestaciones en los términos establecidos legalmente",
            "Cobertura incondicionada al margen de requisitos"
        ],
        correcta: 2,
        explicacion: "Siempre exige cumplimiento de requisitos."
    }, {
        texto: "Señale la afirmación INCORRECTA sobre el carácter público del sistema:",
        opciones: [
            "Implica responsabilidad de los poderes públicos",
            "Permite la existencia de prestaciones complementarias libres",
            "Excluye cualquier intervención normativa estatal"
        ],
        correcta: 2,
        explicacion: "El sistema está plenamente sometido a normativa estatal."
    },
    {
        texto: "La obligación de cotizar se caracteriza por ser:",
        opciones: [
            "Voluntaria según la capacidad económica",
            "Derivada de la inclusión en el sistema",
            "Condicionada a la solicitud de prestaciones"
        ],
        correcta: 1,
        explicacion: "Surge por la inclusión, no por voluntad ni solicitud."
    },
    {
        texto: "El sistema protege a los sujetos incluidos:",
        opciones: [
            "Exclusivamente de forma directa",
            "Directa e indirectamente a través de familiares o asimilados",
            "Solo si existe relación laboral vigente"
        ],
        correcta: 1,
        explicacion: "Incluye protección a familiares o asimilados."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la modalidad no contributiva:",
        opciones: [
            "No exige ningún requisito legal",
            "Exige cotización previa reducida",
            "Se reconoce sin cotización previa pero con requisitos legales"
        ],
        correcta: 2,
        explicacion: "No hay cotización previa, pero sí requisitos."
    },
    {
        texto: "La acción protectora del sistema se activa:",
        opciones: [
            "Con la mera inclusión en el sistema",
            "Al concurrir contingencia y requisitos legales",
            "Exclusivamente por decisión administrativa discrecional"
        ],
        correcta: 1,
        explicacion: "Se requiere contingencia + cumplimiento de requisitos."
    },
    {
        texto: "Señale la afirmación INCORRECTA:",
        opciones: [
            "El sistema se configura como un conjunto de regímenes",
            "Las prestaciones se reconocen al margen de la normativa",
            "El sistema garantiza protección frente a contingencias"
        ],
        correcta: 1,
        explicacion: "Las prestaciones siempre dependen de la normativa."
    },
    {
        texto: "El principio de universalidad implica:",
        opciones: [
            "Acceso sin condiciones",
            "Cobertura para todos dentro de los términos legales",
            "Igualdad absoluta en las prestaciones"
        ],
        correcta: 1,
        explicacion: "Universalidad no elimina requisitos ni iguala cuantías."
    },
    {
        texto: "La relación jurídica con el sistema implica que la entidad gestora:",
        opciones: [
            "Carece de derechos frente al sujeto",
            "Tiene derecho a exigir el cumplimiento de obligaciones",
            "Actúa únicamente como órgano asistencial"
        ],
        correcta: 1,
        explicacion: "Tiene derecho a exigir cotizaciones."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre el sistema:",
        opciones: [
            "Es un mecanismo exclusivamente contributivo",
            "Integra modalidades contributivas y no contributivas",
            "Se limita a prestaciones asistenciales"
        ],
        correcta: 1,
        explicacion: "Combina ambas modalidades."
    },
    {
        texto: "El concepto de 'situación protegida' implica:",
        opciones: [
            "Cualquier circunstancia personal del sujeto",
            "Una situación definida previamente por la normativa",
            "Una valoración subjetiva del beneficiario"
        ],
        correcta: 1,
        explicacion: "Debe estar tipificada en la normativa."
    }
]
},

{
    id: 13,
    nombre: "Tema 13 - Haciendas Locales I",
    icono: "💰",
    preguntas: []
},

{
    id: 14,
    nombre: "Tema 14 - Haciendas Locales II",
    icono: "💰",
    preguntas: []
},

{
    id: 15,
    nombre: "Tema 15 - Gestión y recaudación tributos",
    icono: "💳",
    preguntas: []
},

{
    id: 16,
    nombre: "Tema 16 - Presupuesto entidades locales I",
    icono: "📊",
    preguntas: []
},

{
    id: 17,
    nombre: "Tema 17 - Presupuesto entidades locales II",
    icono: "📊",
    preguntas: []
},

{
    id: 18,
    nombre: "Tema 18 - Intervención urbanística I",
    icono: "🏗️",
    preguntas: [
 {
        texto: "La intervención administrativa en la edificación y uso del suelo tiene como fundamento principal:",
        opciones: [
            "La libre iniciativa de los particulares en el uso del suelo",
            "El control público para garantizar el cumplimiento de la legalidad urbanística",
            "La regulación exclusiva de actividades económicas vinculadas a la construcción"
        ],
        correcta: 1,
        explicacion: "La intervención se justifica como mecanismo de control para garantizar la legalidad urbanística y el interés general."
    },
    {
        texto: "Según la normativa analizada, la intervención administrativa en materia urbanística se configura como:",
        opciones: [
            "Una actividad discrecional sin límites normativos",
            "Una actividad reglada sometida a principios de legalidad y proporcionalidad",
            "Una función exclusivamente sancionadora"
        ],
        correcta: 1,
        explicacion: "La intervención debe ajustarse a legalidad, igualdad, proporcionalidad y necesidad."
    },
    {
        texto: "La sustitución de autorizaciones por declaraciones responsables o comunicaciones previas responde a:",
        opciones: [
            "Un aumento del control administrativo previo",
            "La simplificación administrativa y libre acceso a servicios",
            "La eliminación total del control administrativo"
        ],
        correcta: 1,
        explicacion: "Se busca simplificar procedimientos conforme a normativa europea y estatal."
    },
    {
        texto: "Las declaraciones responsables se caracterizan por:",
        opciones: [
            "Requerir autorización expresa previa de la Administración",
            "Permitir el inicio de la actividad bajo responsabilidad del interesado",
            "Ser actos administrativos que sustituyen completamente el control posterior"
        ],
        correcta: 1,
        explicacion: "Permiten iniciar la actividad desde su presentación, bajo responsabilidad del interesado."
    },
    {
        texto: "La comunicación previa implica que:",
        opciones: [
            "La Administración debe resolver antes del inicio de la actividad",
            "El interesado informa previamente para iniciar una actividad sin autorización expresa",
            "Se trata de un procedimiento sancionador encubierto"
        ],
        correcta: 1,
        explicacion: "Es una comunicación que permite iniciar la actividad sin necesidad de autorización previa."
    },
    {
        texto: "Las órdenes individuales en el ámbito de la intervención administrativa son:",
        opciones: [
            "Actos normativos de carácter general",
            "Mandatos concretos que obligan a realizar o abstenerse de una conducta",
            "Recomendaciones sin efectos jurídicos"
        ],
        correcta: 1,
        explicacion: "Son actos concretos que imponen obligaciones o prohibiciones específicas."
    },
    {
        texto: "El principio de proporcionalidad en la intervención administrativa implica:",
        opciones: [
            "La imposición de medidas máximas en todos los casos",
            "La adecuación de la medida al fin perseguido",
            "La eliminación de cualquier control administrativo"
        ],
        correcta: 1,
        explicacion: "Las medidas deben ser adecuadas y necesarias para el fin perseguido."
    },
    {
        texto: "La Ley 2/2011 de Economía Sostenible establece que:",
        opciones: [
            "Todas las actividades deben someterse a autorización previa",
            "Se debe evitar imponer autorizaciones innecesarias y desproporcionadas",
            "Se eliminan todos los controles administrativos"
        ],
        correcta: 1,
        explicacion: "La ley promueve evitar controles innecesarios y favorecer la libertad de acceso."
    },
    {
        texto: "Cuando una actividad no precise autorización previa:",
        opciones: [
            "No puede ser objeto de ningún control",
            "Las entidades locales deben establecer mecanismos de comprobación posterior",
            "Se considera automáticamente ilegal"
        ],
        correcta: 1,
        explicacion: "Se prevén controles posteriores para verificar el cumplimiento."
    },
    {
        texto: "La intervención administrativa en el ámbito urbanístico se orienta a:",
        opciones: [
            "Facilitar exclusivamente el desarrollo económico",
            "Garantizar el cumplimiento de la normativa urbanística y el interés general",
            "Sustituir la iniciativa privada en el uso del suelo"
        ],
        correcta: 1,
        explicacion: "El objetivo es asegurar la legalidad urbanística y proteger el interés general."
    },
 {
        texto: "La licencia urbanística se configura jurídicamente como:",
        opciones: [
            "Un acto discrecional que habilita libremente el uso del suelo",
            "Un acto reglado de control preventivo de la legalidad urbanística",
            "Una autorización general sin efectos jurídicos individualizados"
        ],
        correcta: 1,
        explicacion: "La licencia es un acto reglado de control previo que verifica la adecuación a la normativa urbanística."
    },
    {
        texto: "La concesión de una licencia urbanística implica que:",
        opciones: [
            "Se reconoce un derecho preexistente si cumple la normativa",
            "Se crea un derecho nuevo con independencia de la legalidad",
            "Se otorga una facultad discrecional al interesado"
        ],
        correcta: 0,
        explicacion: "La licencia reconoce el derecho si la actuación se ajusta al ordenamiento jurídico."
    },
    {
        texto: "El carácter reglado de la licencia urbanística implica que:",
        opciones: [
            "La Administración puede decidir libremente su otorgamiento",
            "Debe concederse o denegarse conforme al cumplimiento de la normativa",
            "Se otorga siempre que exista interés económico"
        ],
        correcta: 1,
        explicacion: "La Administración no tiene discrecionalidad: debe ajustarse a la legalidad."
    },
    {
        texto: "El control que ejerce la licencia urbanística se sitúa en:",
        opciones: [
            "La fase posterior a la ejecución de las obras",
            "La fase previa al ejercicio del derecho urbanístico",
            "La fase sancionadora exclusivamente"
        ],
        correcta: 1,
        explicacion: "Es un control preventivo previo al inicio de la actuación."
    },
    {
        texto: "La licencia urbanística no implica:",
        opciones: [
            "Control de legalidad urbanística",
            "Convalidación de actuaciones contrarias a la normativa",
            "Verificación del cumplimiento del planeamiento"
        ],
        correcta: 1,
        explicacion: "No puede convalidar actuaciones ilegales."
    },
    {
        texto: "El otorgamiento de la licencia urbanística se produce:",
        opciones: [
            "Con carácter discrecional atendiendo al interés público",
            "De forma automática sin comprobación previa",
            "Tras verificar la adecuación del proyecto a la normativa urbanística"
        ],
        correcta: 2,
        explicacion: "Se concede tras comprobar la conformidad con la normativa."
    },
    {
        texto: "La licencia urbanística se diferencia del permiso en que:",
        opciones: [
            "El permiso es siempre discrecional y la licencia no",
            "La licencia tiene carácter constitutivo y el permiso declarativo",
            "No existe diferencia jurídica entre ambos conceptos"
        ],
        correcta: 0,
        explicacion: "El permiso tiene mayor componente discrecional, mientras la licencia es reglada."
    },
    {
        texto: "El otorgamiento de la licencia urbanística:",
        opciones: [
            "Excluye cualquier control posterior",
            "No elimina la posibilidad de control posterior por la Administración",
            "Supone la imposibilidad de revisión administrativa"
        ],
        correcta: 1,
        explicacion: "Puede existir control posterior aunque haya licencia."
    },
    {
        texto: "La licencia urbanística actúa como:",
        opciones: [
            "Un instrumento de planificación urbanística",
            "Un mecanismo de control de la legalidad aplicable a actos concretos",
            "Un acto normativo de carácter general"
        ],
        correcta: 1,
        explicacion: "No planifica, controla actos concretos conforme a la normativa."
    },
    {
        texto: "La naturaleza jurídica de la licencia urbanística implica que:",
        opciones: [
            "Puede otorgarse aun siendo contraria al planeamiento",
            "Debe ajustarse estrictamente al ordenamiento jurídico vigente",
            "Depende exclusivamente de criterios técnicos no jurídicos"
        ],
        correcta: 1,
        explicacion: "La licencia está vinculada al cumplimiento del ordenamiento jurídico."
    },
{
        texto: "En relación con la tipología de licencias urbanísticas, puede afirmarse que:",
        opciones: [
            "Existe un único tipo de licencia aplicable a todas las actuaciones",
            "La tipología depende de la naturaleza del acto urbanístico a controlar",
            "Las licencias se clasifican exclusivamente en función del sujeto solicitante"
        ],
        correcta: 1,
        explicacion: "La clasificación de licencias se realiza según el tipo de actuación urbanística."
    },
    {
        texto: "El control de legalidad que realiza la licencia urbanística implica:",
        opciones: [
            "Un control indefinido que se prolonga tras la ejecución de la actuación",
            "Un control previo que verifica la adecuación al planeamiento y normativa",
            "Un control exclusivamente económico de la actividad"
        ],
        correcta: 1,
        explicacion: "La licencia es un control preventivo de legalidad antes de la actuación."
    },
    {
        texto: "La licencia urbanística tiene carácter real, lo que implica que:",
        opciones: [
            "Se vincula exclusivamente a la persona solicitante",
            "Se refiere a la actividad o actuación sobre el suelo con independencia del titular",
            "Solo puede transmitirse mediante autorización administrativa expresa"
        ],
        correcta: 1,
        explicacion: "Se vincula al objeto (suelo/actuación), no a la persona."
    },
    {
        texto: "La transmisibilidad de las licencias urbanísticas supone que:",
        opciones: [
            "No pueden transmitirse en ningún caso",
            "Se transmiten automáticamente con la titularidad del bien afectado",
            "Solo pueden transmitirse mediante resolución administrativa expresa"
        ],
        correcta: 1,
        explicacion: "La licencia sigue al bien, no a la persona."
    },
    {
        texto: "En caso de transmisión de una licencia urbanística:",
        opciones: [
            "Se extinguen automáticamente los efectos de la licencia",
            "El nuevo titular asume derechos y obligaciones derivados de la licencia",
            "Debe solicitarse una nueva licencia obligatoriamente"
        ],
        correcta: 1,
        explicacion: "El adquirente se subroga en la posición jurídica del anterior titular."
    },
    {
        texto: "El otorgamiento de la licencia urbanística no excluye:",
        opciones: [
            "La responsabilidad por actuaciones contrarias a la normativa",
            "El cumplimiento de la normativa urbanística",
            "La posibilidad de ejecución de obras"
        ],
        correcta: 0,
        explicacion: "La licencia no legitima actuaciones ilegales ni elimina responsabilidades."
    },
    {
        texto: "La cláusula 'sin perjuicio de tercero' implica que:",
        opciones: [
            "La licencia elimina cualquier conflicto entre particulares",
            "La licencia no afecta a derechos privados de terceros",
            "La licencia prevalece sobre cualquier derecho privado"
        ],
        correcta: 1,
        explicacion: "La licencia se otorga sin afectar a derechos de terceros."
    },
    {
        texto: "El carácter reglado de la licencia urbanística implica que la Administración:",
        opciones: [
            "Puede denegarla por razones de oportunidad",
            "Debe otorgarla si se cumplen los requisitos legales",
            "Tiene libertad para modificar sus condiciones"
        ],
        correcta: 1,
        explicacion: "Si se cumplen los requisitos, la licencia debe concederse."
    },
    {
        texto: "El control preventivo de la licencia urbanística se justifica en:",
        opciones: [
            "La necesidad de evitar actuaciones contrarias al planeamiento",
            "La obtención de ingresos por parte de la Administración",
            "La supervisión económica de las obras"
        ],
        correcta: 0,
        explicacion: "Su finalidad es garantizar el cumplimiento del planeamiento urbanístico."
    },
    {
        texto: "La reiteración del control mediante licencias implica que:",
        opciones: [
            "Solo se concede una licencia por cada inmueble",
            "Puede exigirse licencia para distintas actuaciones sucesivas",
            "Las licencias tienen carácter indefinido para cualquier actuación futura"
        ],
        correcta: 1,
        explicacion: "Cada actuación urbanística puede requerir su propia licencia."
    },
{
        texto: "Las parcelaciones, segregaciones y divisiones de fincas se encuadran dentro de:",
        opciones: [
            "Actos de uso del suelo exclusivamente edificatorio",
            "Actos sujetos a licencia relacionados con el uso del suelo",
            "Actos excluidos del control urbanístico"
        ],
        correcta: 1,
        explicacion: "Se incluyen como actos sujetos a licencia en el ámbito del uso del suelo."
    },
    {
        texto: "Los movimientos de tierra y obras de desmonte o explanación se consideran:",
        opciones: [
            "Actuaciones exentas de control urbanístico",
            "Actos sujetos a licencia en cualquier clase de suelo",
            "Actos sometidos únicamente a comunicación previa"
        ],
        correcta: 1,
        explicacion: "Son actos sujetos a licencia en cualquier tipo de suelo."
    },
    {
        texto: "Las obras de ampliación, reforma o rehabilitación de edificaciones se clasifican como:",
        opciones: [
            "Actos de implantación de usos exclusivamente",
            "Actos de construcción y edificación sujetos a licencia",
            "Actos excluidos del control administrativo"
        ],
        correcta: 1,
        explicacion: "Se integran dentro de los actos de construcción y edificación."
    },
    {
        texto: "Las actuaciones sobre infraestructuras como presas, defensas o encauzamientos:",
        opciones: [
            "Quedan fuera del ámbito urbanístico",
            "Se consideran actos de construcción sujetos a licencia",
            "Se someten únicamente a control ambiental"
        ],
        correcta: 1,
        explicacion: "Se incluyen como actos de construcción o intervención sujetos a licencia."
    },
    {
        texto: "La demolición de construcciones se somete a licencia:",
        opciones: [
            "Solo cuando exista planeamiento específico",
            "Con carácter general, salvo excepciones previstas",
            "Únicamente en suelo urbano consolidado"
        ],
        correcta: 1,
        explicacion: "La demolición es un acto sujeto a licencia con carácter general."
    },
    {
        texto: "La primera utilización u ocupación de edificaciones se considera:",
        opciones: [
            "Un acto libre sin control administrativo",
            "Un acto sujeto a licencia urbanística",
            "Un acto exclusivamente privado"
        ],
        correcta: 1,
        explicacion: "Está sujeta a licencia como acto de implantación o uso."
    },
    {
        texto: "Los usos de edificaciones con carácter provisional:",
        opciones: [
            "No requieren ningún tipo de control administrativo",
            "Se consideran actos sujetos a licencia urbanística",
            "Solo requieren autorización judicial"
        ],
        correcta: 1,
        explicacion: "Los usos provisionales están sujetos a licencia."
    },
    {
        texto: "La instalación de casas prefabricadas o similares:",
        opciones: [
            "Está excluida del control urbanístico",
            "Se considera acto sujeto a licencia",
            "Solo requiere declaración responsable"
        ],
        correcta: 1,
        explicacion: "Se incluye como acto sujeto a licencia urbanística."
    },
    {
        texto: "La instalación de tendidos eléctricos o telecomunicaciones:",
        opciones: [
            "No requiere licencia si es de interés general",
            "Está sujeta a licencia urbanística",
            "Se somete únicamente a normativa sectorial sin control urbanístico"
        ],
        correcta: 1,
        explicacion: "Estas instalaciones están sujetas a control urbanístico mediante licencia."
    },
    {
        texto: "Las actividades extractivas como canteras o extracción de áridos:",
        opciones: [
            "Se excluyen del ámbito de la licencia urbanística",
            "Se consideran actos sujetos a licencia urbanística",
            "Solo requieren autorización ambiental"
        ],
        correcta: 1,
        explicacion: "Se incluyen dentro de los actos sujetos a licencia."
    },
 {
        texto: "El procedimiento para la concesión de licencias urbanísticas se inicia:",
        opciones: [
            "De oficio por la Administración en todos los casos",
            "A instancia de parte mediante solicitud del interesado",
            "Únicamente por denuncia de terceros"
        ],
        correcta: 1,
        explicacion: "El procedimiento se inicia mediante solicitud del interesado."
    },
    {
        texto: "En el procedimiento de concesión de licencias, los informes técnicos y jurídicos:",
        opciones: [
            "Son potestativos y pueden omitirse",
            "Son preceptivos para verificar la adecuación a la normativa",
            "Solo son necesarios en caso de duda"
        ],
        correcta: 1,
        explicacion: "Son necesarios para comprobar la conformidad con el ordenamiento."
    },
    {
        texto: "El informe técnico en el procedimiento de licencia tiene por objeto:",
        opciones: [
            "Valorar la oportunidad económica del proyecto",
            "Comprobar la adecuación técnica al planeamiento y normativa",
            "Determinar la rentabilidad de la actuación"
        ],
        correcta: 1,
        explicacion: "El informe técnico verifica la adecuación del proyecto a la normativa."
    },
    {
        texto: "El informe jurídico en el procedimiento de licencia se dirige a:",
        opciones: [
            "Evaluar la viabilidad económica del proyecto",
            "Analizar la legalidad de la actuación propuesta",
            "Determinar la calidad constructiva de la obra"
        ],
        correcta: 1,
        explicacion: "Su función es valorar la conformidad jurídica de la actuación."
    },
    {
        texto: "La resolución de la licencia urbanística debe ser:",
        opciones: [
            "Discrecional y no motivada",
            "Motivada y ajustada a la normativa aplicable",
            "Opcional en función del interés económico"
        ],
        correcta: 1,
        explicacion: "Debe estar motivada y fundamentada en derecho."
    },
    {
        texto: "El silencio administrativo en materia de licencias urbanísticas:",
        opciones: [
            "Tiene siempre carácter positivo",
            "Puede tener carácter negativo según la normativa aplicable",
            "No existe en ningún caso"
        ],
        correcta: 1,
        explicacion: "El silencio puede ser negativo en determinados supuestos urbanísticos."
    },
    {
        texto: "El silencio administrativo negativo en licencias urbanísticas se justifica en:",
        opciones: [
            "La necesidad de agilizar procedimientos",
            "La protección del interés general y del ordenamiento urbanístico",
            "La falta de medios administrativos"
        ],
        correcta: 1,
        explicacion: "Evita la adquisición de derechos contrarios al planeamiento."
    },
    {
        texto: "La concesión por silencio administrativo positivo:",
        opciones: [
            "Permite adquirir derechos contrarios a la normativa urbanística",
            "No puede producir efectos contrarios al ordenamiento jurídico",
            "Sustituye completamente el control administrativo"
        ],
        correcta: 1,
        explicacion: "El silencio positivo no legitima actuaciones ilegales."
    },
    {
        texto: "El plazo para resolver las licencias urbanísticas:",
        opciones: [
            "Es indefinido",
            "Está fijado por la normativa aplicable",
            "Depende exclusivamente del interesado"
        ],
        correcta: 1,
        explicacion: "Los plazos están establecidos legalmente."
    },
    {
        texto: "La falta de resolución expresa en plazo:",
        opciones: [
            "Implica automáticamente la concesión de la licencia",
            "Produce los efectos del silencio administrativo según normativa",
            "Carece de cualquier efecto jurídico"
        ],
        correcta: 1,
        explicacion: "Se aplica el régimen de silencio previsto legalmente."
    },
{
        texto: "El control posterior de la Administración en materia urbanística se ejerce:",
        opciones: [
            "Únicamente cuando no existe licencia previa",
            "Para verificar el cumplimiento de la normativa tras la actuación",
            "Solo en procedimientos sancionadores iniciados de oficio"
        ],
        correcta: 1,
        explicacion: "El control posterior permite comprobar la adecuación de la actuación a la normativa."
    },
    {
        texto: "La existencia de licencia urbanística:",
        opciones: [
            "Impide cualquier actuación inspectora posterior",
            "No excluye el ejercicio de potestades de inspección y control",
            "Elimina la posibilidad de sanción administrativa"
        ],
        correcta: 1,
        explicacion: "La Administración puede seguir ejerciendo control e inspección."
    },
    {
        texto: "La disciplina urbanística tiene como finalidad:",
        opciones: [
            "Recaudar ingresos mediante sanciones",
            "Garantizar el cumplimiento del ordenamiento urbanístico",
            "Sustituir la planificación urbanística"
        ],
        correcta: 1,
        explicacion: "Busca asegurar el respeto a la legalidad urbanística."
    },
    {
        texto: "El restablecimiento de la legalidad urbanística implica:",
        opciones: [
            "La regularización automática de cualquier actuación ilegal",
            "La adopción de medidas para corregir actuaciones contrarias a la normativa",
            "La sustitución de la sanción por indemnización económica"
        ],
        correcta: 1,
        explicacion: "Consiste en corregir o revertir actuaciones ilegales."
    },
    {
        texto: "Las medidas de restablecimiento de la legalidad urbanística:",
        opciones: [
            "Tienen carácter sancionador",
            "Son independientes de las sanciones administrativas",
            "Solo se aplican cuando existe dolo"
        ],
        correcta: 1,
        explicacion: "Son medidas restauradoras, no sancionadoras."
    },
    {
        texto: "La ejecución de obras sin licencia:",
        opciones: [
            "Es válida si no causa perjuicio",
            "Constituye una infracción urbanística",
            "Solo genera responsabilidad civil"
        ],
        correcta: 1,
        explicacion: "Se considera infracción urbanística conforme a la normativa."
    },
    {
        texto: "Las declaraciones responsables en materia urbanística:",
        opciones: [
            "Eliminan cualquier control administrativo",
            "Permiten el inicio de la actuación sin perjuicio del control posterior",
            "Sustituyen definitivamente a las licencias en todos los casos"
        ],
        correcta: 1,
        explicacion: "Permiten actuar, pero están sujetas a control posterior."
    },
    {
        texto: "La inexactitud o falsedad en una declaración responsable:",
        opciones: [
            "Carece de efectos jurídicos",
            "Impide el ejercicio de la actuación desde su constatación",
            "Solo tiene consecuencias civiles"
        ],
        correcta: 1,
        explicacion: "Puede impedir la continuación de la actuación y dar lugar a responsabilidades."
    },
    {
        texto: "La potestad inspectora en materia urbanística tiene carácter:",
        opciones: [
            "Voluntario para la Administración",
            "Obligatorio para garantizar el cumplimiento normativo",
            "Exclusivamente sancionador"
        ],
        correcta: 1,
        explicacion: "Es una función necesaria para garantizar la legalidad urbanística."
    },
    {
        texto: "La intervención administrativa mediante declaraciones responsables implica que:",
        opciones: [
            "Se elimina la necesidad de cumplimiento normativo",
            "Se desplaza el control al momento posterior al inicio de la actividad",
            "Se sustituye el control por la autorregulación absoluta"
        ],
        correcta: 1,
        explicacion: "El control pasa a ser posterior, sin eliminar la exigencia de legalidad."
    },
 {
        texto: "Señale la afirmación MÁS precisa sobre los medios de intervención administrativa en materia urbanística:",
        opciones: [
            "Se limitan exclusivamente a la licencia urbanística",
            "Incluyen licencias, declaraciones responsables, comunicaciones previas y órdenes",
            "Se reducen a mecanismos sancionadores posteriores"
        ],
        correcta: 1,
        explicacion: "El sistema incluye diversos medios de intervención, no solo la licencia."
    },
    {
        texto: "La sustitución de licencias por declaraciones responsables implica que:",
        opciones: [
            "Se elimina el control administrativo en todos los casos",
            "Se mantiene el control, pero desplazado al momento posterior",
            "Se sustituye por control judicial directo"
        ],
        correcta: 1,
        explicacion: "El control no desaparece, se traslada al momento posterior."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la licencia urbanística:",
        opciones: [
            "Es un acto reglado",
            "Puede otorgarse en contra del planeamiento por razones de interés público",
            "Tiene carácter de control preventivo"
        ],
        correcta: 1,
        explicacion: "Nunca puede concederse contra la normativa urbanística."
    },
    {
        texto: "La diferencia esencial entre licencia y declaración responsable radica en:",
        opciones: [
            "La existencia o no de control administrativo",
            "El momento en que se produce el control de la Administración",
            "La naturaleza pública o privada del acto"
        ],
        correcta: 1,
        explicacion: "La diferencia clave es el control previo (licencia) frente a posterior (declaración)."
    },
    {
        texto: "Señale la opción que NO corresponde a un acto sujeto a licencia urbanística:",
        opciones: [
            "Movimientos de tierra",
            "Instalación de edificaciones prefabricadas",
            "Actos de uso interno sin relevancia urbanística"
        ],
        correcta: 2,
        explicacion: "Los actos sin relevancia urbanística no están sujetos a licencia."
    },
    {
        texto: "La licencia urbanística se otorga siempre:",
        opciones: [
            "Sin perjuicio de derechos de terceros",
            "Con carácter preferente frente a derechos privados",
            "Con efectos absolutos frente a cualquier tercero"
        ],
        correcta: 0,
        explicacion: "Se otorga sin afectar a derechos privados de terceros."
    },
    {
        texto: "La reiteración del control administrativo en materia urbanística implica que:",
        opciones: [
            "Una licencia cubre todas las actuaciones futuras",
            "Cada actuación relevante puede requerir su propio control",
            "Solo se controla la primera actuación realizada"
        ],
        correcta: 1,
        explicacion: "Cada acto urbanístico relevante puede requerir control independiente."
    },
    {
        texto: "El carácter real de la licencia implica que:",
        opciones: [
            "Se vincula exclusivamente al titular que la solicita",
            "Se vincula al objeto de la actuación urbanística",
            "No puede transmitirse en ningún caso"
        ],
        correcta: 1,
        explicacion: "La licencia se vincula al bien o actuación, no a la persona."
    },
    {
        texto: "En relación con la transmisibilidad de la licencia:",
        opciones: [
            "Requiere nueva licencia en todo caso",
            "El adquirente se subroga en la posición del anterior titular",
            "Se extingue automáticamente con el cambio de titularidad"
        ],
        correcta: 1,
        explicacion: "El nuevo titular asume derechos y obligaciones."
    },
    {
        texto: "El silencio administrativo positivo en materia urbanística:",
        opciones: [
            "Permite adquirir derechos contrarios al planeamiento",
            "No puede legitimar actuaciones contrarias a la normativa",
            "Sustituye la necesidad de control técnico"
        ],
        correcta: 1,
        explicacion: "Nunca puede generar derechos ilegales."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre el control posterior:",
        opciones: [
            "Es inexistente cuando hay licencia previa",
            "Permite verificar el cumplimiento tras la actuación",
            "Tiene carácter exclusivamente sancionador"
        ],
        correcta: 1,
        explicacion: "El control posterior verifica el cumplimiento normativo."
    },
    {
        texto: "La disciplina urbanística se diferencia de la potestad sancionadora en que:",
        opciones: [
            "Tiene carácter exclusivamente económico",
            "Persigue restaurar la legalidad, no solo sancionar",
            "Se limita a actuaciones dolosas"
        ],
        correcta: 1,
        explicacion: "Busca restablecer la legalidad urbanística."
    },
    {
        texto: "El restablecimiento de la legalidad urbanística:",
        opciones: [
            "Depende de la existencia de sanción previa",
            "Es independiente de la imposición de sanciones",
            "Solo procede en caso de infracciones graves"
        ],
        correcta: 1,
        explicacion: "Son mecanismos independientes."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre declaraciones responsables:",
        opciones: [
            "Permiten iniciar la actuación desde su presentación",
            "Eximen del cumplimiento de la normativa urbanística",
            "Están sujetas a control posterior"
        ],
        correcta: 1,
        explicacion: "Nunca eximen del cumplimiento de la normativa."
    },
    {
        texto: "La falsedad en una declaración responsable implica:",
        opciones: [
            "La validez de la actuación mientras no se sancione",
            "La imposibilidad de continuar la actuación desde su constatación",
            "La conversión automática en licencia"
        ],
        correcta: 1,
        explicacion: "Impide continuar la actuación y genera responsabilidad."
    },
    {
        texto: "El principio de necesidad en la intervención administrativa implica:",
        opciones: [
            "Imponer siempre control previo mediante licencia",
            "Utilizar el medio menos restrictivo para alcanzar el fin",
            "Eliminar cualquier forma de control"
        ],
        correcta: 1,
        explicacion: "Se debe aplicar la medida menos restrictiva posible."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre los informes en el procedimiento:",
        opciones: [
            "Son irrelevantes para la resolución final",
            "Garantizan la adecuación técnica y jurídica de la actuación",
            "Se limitan a valorar la oportunidad económica"
        ],
        correcta: 1,
        explicacion: "Son esenciales para comprobar legalidad y viabilidad."
    },
    {
        texto: "El otorgamiento de licencia no implica:",
        opciones: [
            "La conformidad con la normativa urbanística",
            "La exoneración de responsabilidad por actuaciones ilegales",
            "El reconocimiento del derecho si se ajusta a la ley"
        ],
        correcta: 1,
        explicacion: "No elimina responsabilidad por incumplimientos."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la intervención administrativa:",
        opciones: [
            "Debe respetar el principio de proporcionalidad",
            "Puede imponerse sin base normativa",
            "Se orienta al interés general"
        ],
        correcta: 1,
        explicacion: "Siempre debe tener base normativa."
    },
    {
        texto: "El sistema de intervención urbanística se caracteriza por:",
        opciones: [
            "La ausencia de control en determinadas actuaciones",
            "La combinación de control previo y posterior",
            "La sustitución total del control por la iniciativa privada"
        ],
        correcta: 1,
        explicacion: "Combina distintos mecanismos de control."
    },
{
        texto: "Señale la opción MÁS precisa sobre la coexistencia de medios de intervención urbanística:",
        opciones: [
            "La declaración responsable excluye cualquier otro control administrativo",
            "Los distintos medios pueden coexistir en función de la naturaleza de la actuación",
            "La licencia es siempre sustituida por medios menos restrictivos"
        ],
        correcta: 1,
        explicacion: "Los medios se aplican según la naturaleza de la actuación, no se excluyen automáticamente."
    },
    {
        texto: "La aplicación del principio de proporcionalidad en urbanismo exige:",
        opciones: [
            "Aplicar siempre licencia por seguridad jurídica",
            "Seleccionar el medio de intervención menos restrictivo que garantice la legalidad",
            "Eliminar el control previo en todas las actuaciones"
        ],
        correcta: 1,
        explicacion: "Debe elegirse el instrumento menos restrictivo que garantice el control."
    },
    {
        texto: "Señale la afirmación INCORRECTA respecto al control administrativo:",
        opciones: [
            "Puede ejercerse con carácter previo o posterior",
            "Puede desaparecer en determinados supuestos",
            "Debe garantizar el cumplimiento de la normativa urbanística"
        ],
        correcta: 1,
        explicacion: "El control no desaparece, solo cambia de momento (previo/posterior)."
    },
    {
        texto: "La eficacia de la declaración responsable queda condicionada a:",
        opciones: [
            "Su validación expresa por la Administración",
            "La veracidad y cumplimiento de los requisitos legales",
            "La inexistencia de control posterior"
        ],
        correcta: 1,
        explicacion: "Depende del cumplimiento real de los requisitos."
    },
    {
        texto: "En caso de contradicción entre una licencia otorgada y el planeamiento:",
        opciones: [
            "Prevalece la licencia por ser acto administrativo",
            "Prevalece el planeamiento urbanístico",
            "Se resuelve según la voluntad del interesado"
        ],
        correcta: 1,
        explicacion: "La licencia no puede contradecir el planeamiento."
    },
    {
        texto: "La función de la licencia urbanística NO comprende:",
        opciones: [
            "Verificar la adecuación a la normativa",
            "Otorgar derechos contrarios al ordenamiento",
            "Controlar la legalidad de la actuación"
        ],
        correcta: 1,
        explicacion: "Nunca puede generar derechos ilegales."
    },
    {
        texto: "Señale la opción MÁS precisa sobre el carácter reglado de la licencia:",
        opciones: [
            "Implica margen de apreciación administrativa amplio",
            "Excluye cualquier valoración jurídica",
            "Vincula la decisión administrativa al cumplimiento de la normativa"
        ],
        correcta: 2,
        explicacion: "La Administración debe resolver conforme a la legalidad."
    },
    {
        texto: "El control posterior en actuaciones sujetas a declaración responsable permite:",
        opciones: [
            "Revisar exclusivamente aspectos formales",
            "Verificar íntegramente la adecuación a la normativa",
            "Limitarse a la imposición de sanciones económicas"
        ],
        correcta: 1,
        explicacion: "El control posterior es completo, no solo formal."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre actos sujetos a licencia:",
        opciones: [
            "Incluyen actos materiales sobre el suelo",
            "Excluyen actuaciones con incidencia urbanística relevante",
            "Comprenden obras de construcción y demolición"
        ],
        correcta: 1,
        explicacion: "Las actuaciones relevantes sí están sujetas a licencia."
    },
    {
        texto: "El inicio de una actuación mediante declaración responsable:",
        opciones: [
            "Supone una autorización tácita administrativa",
            "Se realiza bajo responsabilidad del interesado",
            "Equivale a la concesión de licencia"
        ],
        correcta: 1,
        explicacion: "El interesado asume la responsabilidad desde el inicio."
    },
    {
        texto: "Señale la opción MÁS precisa sobre el principio de legalidad en urbanismo:",
        opciones: [
            "Permite excepciones por interés económico",
            "Impide cualquier actuación contraria al planeamiento",
            "Se aplica solo a actos sancionadores"
        ],
        correcta: 1,
        explicacion: "Toda actuación debe ajustarse al planeamiento."
    },
    {
        texto: "La intervención administrativa no puede fundamentarse en:",
        opciones: [
            "La protección del interés general",
            "La ausencia de normativa aplicable",
            "El cumplimiento de la legalidad urbanística"
        ],
        correcta: 1,
        explicacion: "Siempre requiere base normativa."
    },
    {
        texto: "La relación entre control previo y posterior implica que:",
        opciones: [
            "Son excluyentes entre sí",
            "Pueden coexistir en función del instrumento utilizado",
            "Solo uno puede aplicarse en cada sistema jurídico"
        ],
        correcta: 1,
        explicacion: "Ambos pueden coexistir según el medio de intervención."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la disciplina urbanística:",
        opciones: [
            "Busca restaurar la legalidad",
            "Se limita a sancionar económicamente",
            "Se aplica ante incumplimientos urbanísticos"
        ],
        correcta: 1,
        explicacion: "No se limita a sancionar, también restaura."
    },
    {
        texto: "El restablecimiento de la legalidad urbanística se caracteriza por:",
        opciones: [
            "Tener naturaleza exclusivamente sancionadora",
            "Ser independiente de la culpabilidad del infractor",
            "Exigir siempre procedimiento penal previo"
        ],
        correcta: 1,
        explicacion: "No depende de la culpabilidad, sino del incumplimiento."
    },
    {
        texto: "Señale la opción MÁS precisa sobre la intervención administrativa:",
        opciones: [
            "Se orienta exclusivamente a prevenir infracciones",
            "Tiene carácter preventivo y reactivo",
            "Se limita a la fase de planificación"
        ],
        correcta: 1,
        explicacion: "Actúa antes y después de la actuación."
    },
    {
        texto: "La existencia de distintos medios de intervención implica que:",
        opciones: [
            "Todos tienen la misma intensidad de control",
            "Se aplican según la relevancia de la actuación urbanística",
            "Se eligen libremente por el interesado"
        ],
        correcta: 1,
        explicacion: "Dependen de la naturaleza y relevancia de la actuación."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre el sistema de intervención:",
        opciones: [
            "Combina distintos mecanismos de control",
            "Permite actuaciones sin control en determinados casos",
            "Se adapta a la naturaleza de la actividad"
        ],
        correcta: 1,
        explicacion: "Siempre existe algún tipo de control."
    },
    {
        texto: "El incumplimiento de los requisitos en una actuación sujeta a control:",
        opciones: [
            "Carece de consecuencias si no hay denuncia",
            "Puede dar lugar a medidas de restauración y sanción",
            "Se subsana automáticamente con el tiempo"
        ],
        correcta: 1,
        explicacion: "Puede implicar restauración de legalidad y sanción."
    },
    {
        texto: "La finalidad última del sistema de intervención urbanística es:",
        opciones: [
            "Facilitar la actividad económica sin restricciones",
            "Garantizar el respeto al ordenamiento urbanístico",
            "Reducir la intervención administrativa al mínimo"
        ],
        correcta: 1,
        explicacion: "El objetivo es garantizar la legalidad urbanística."
    },
{
        texto: "Señale la afirmación MÁS correcta respecto a la relación entre licencia urbanística y legalidad:",
        opciones: [
            "La licencia valida la actuación incluso si posteriormente se comprueba su ilegalidad",
            "La licencia solo produce efectos si la actuación se ajusta al ordenamiento jurídico",
            "La licencia sustituye al planeamiento en caso de contradicción"
        ],
        correcta: 1,
        explicacion: "La licencia no puede legitimar actuaciones contrarias a la normativa."
    },
    {
        texto: "En el sistema de intervención urbanística, la ausencia de control previo:",
        opciones: [
            "Implica la inexistencia de control administrativo",
            "Supone el desplazamiento del control al momento posterior",
            "Determina la legalidad automática de la actuación"
        ],
        correcta: 1,
        explicacion: "El control se desplaza, pero no desaparece."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre el principio de proporcionalidad:",
        opciones: [
            "Exige adecuación entre medio y finalidad",
            "Permite imponer medidas más restrictivas si son más eficaces",
            "Impone la elección del medio menos restrictivo posible"
        ],
        correcta: 1,
        explicacion: "No se puede elegir un medio más restrictivo si existe otro menos restrictivo igualmente eficaz."
    },
    {
        texto: "La eficacia jurídica de una declaración responsable depende principalmente de:",
        opciones: [
            "Su aceptación expresa por la Administración",
            "La realidad del cumplimiento de los requisitos legales",
            "La ausencia de control posterior"
        ],
        correcta: 1,
        explicacion: "Depende del cumplimiento material de los requisitos."
    },
    {
        texto: "Señale la opción MÁS precisa sobre el carácter del control administrativo:",
        opciones: [
            "Se ejerce únicamente antes de la actuación",
            "Puede ejercerse antes o después según el instrumento utilizado",
            "Se limita a actuaciones sancionadoras"
        ],
        correcta: 1,
        explicacion: "El control puede ser previo o posterior."
    },
    {
        texto: "La licencia urbanística no produce efectos cuando:",
        opciones: [
            "Es contraria al planeamiento urbanístico",
            "No ha sido notificada al interesado",
            "Se otorga con condiciones"
        ],
        correcta: 0,
        explicacion: "No puede producir efectos si contradice la normativa."
    },
    {
        texto: "Señale la afirmación MÁS correcta sobre el silencio administrativo en urbanismo:",
        opciones: [
            "Genera derechos en todo caso",
            "Puede generar efectos, pero nunca contra el ordenamiento jurídico",
            "Sustituye la necesidad de control técnico"
        ],
        correcta: 1,
        explicacion: "El silencio no legitima actuaciones ilegales."
    },
    {
        texto: "La intervención administrativa urbanística tiene como límite:",
        opciones: [
            "La voluntad del interesado",
            "Los principios de legalidad y proporcionalidad",
            "La rentabilidad de la actuación"
        ],
        correcta: 1,
        explicacion: "Está limitada por principios jurídicos."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre los actos sujetos a control:",
        opciones: [
            "Dependen de su incidencia urbanística",
            "Incluyen cualquier actuación sin excepción",
            "Se determinan por la normativa aplicable"
        ],
        correcta: 1,
        explicacion: "No cualquier actuación está sujeta a control."
    },
    {
        texto: "El control posterior permite:",
        opciones: [
            "Únicamente sancionar infracciones ya cometidas",
            "Verificar y, en su caso, corregir actuaciones contrarias a la normativa",
            "Sustituir completamente el control previo"
        ],
        correcta: 1,
        explicacion: "Incluye verificación y corrección."
    },
    {
        texto: "La disciplina urbanística se caracteriza por:",
        opciones: [
            "Actuar solo cuando existe sanción firme",
            "Tener autonomía respecto del procedimiento sancionador",
            "Depender exclusivamente de la voluntad administrativa"
        ],
        correcta: 1,
        explicacion: "Es independiente del procedimiento sancionador."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la relación entre medios de intervención:",
        opciones: [
            "Son excluyentes entre sí",
            "Se aplican según la naturaleza de la actuación",
            "Se sustituyen automáticamente unos por otros"
        ],
        correcta: 1,
        explicacion: "Dependen del tipo de actuación urbanística."
    },
    {
        texto: "La inexactitud en una declaración responsable produce:",
        opciones: [
            "La nulidad automática de la normativa aplicable",
            "La imposibilidad de continuar la actuación desde su constatación",
            "La transformación en licencia urbanística"
        ],
        correcta: 1,
        explicacion: "Impide continuar la actuación."
    },
    {
        texto: "Señale la opción MÁS correcta sobre la finalidad del control urbanístico:",
        opciones: [
            "Facilitar la actividad privada sin límites",
            "Garantizar el cumplimiento del ordenamiento urbanístico",
            "Maximizar la intervención administrativa"
        ],
        correcta: 1,
        explicacion: "Su finalidad es la legalidad urbanística."
    },
    {
        texto: "El sistema de intervención urbanística no permite:",
        opciones: [
            "La combinación de distintos medios de control",
            "La inexistencia absoluta de control en actuaciones relevantes",
            "El control posterior mediante inspección"
        ],
        correcta: 1,
        explicacion: "Siempre debe existir algún tipo de control."
    },
{
        texto: "Señale la opción MÁS correcta respecto a los actos sujetos a licencia urbanística:",
        opciones: [
            "Se determinan en función de la relevancia urbanística de la actuación conforme a la normativa",
            "Incluyen cualquier actuación realizada sobre el suelo sin excepción",
            "Se limitan a actos de edificación exclusivamente"
        ],
        correcta: 0,
        explicacion: "Los actos sujetos a licencia se determinan por su incidencia urbanística conforme a la normativa."
    },
    {
        texto: "Señale la opción INCORRECTA en relación con los medios de intervención administrativa:",
        opciones: [
            "Pueden variar según la naturaleza de la actuación",
            "Se aplican siempre de forma acumulativa",
            "Están sujetos a principios de necesidad y proporcionalidad"
        ],
        correcta: 1,
        explicacion: "No se aplican siempre de forma acumulativa, sino según el caso."
    },
    {
        texto: "La declaración responsable permite el inicio de la actuación siempre que:",
        opciones: [
            "Exista resolución administrativa previa favorable",
            "Se cumplan los requisitos exigidos por la normativa",
            "No exista control posterior por parte de la Administración"
        ],
        correcta: 1,
        explicacion: "El inicio depende del cumplimiento de requisitos legales."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la comunicación previa:",
        opciones: [
            "Tiene efectos equivalentes a una licencia urbanística",
            "Permite el inicio de la actividad tras su presentación sin resolución expresa",
            "Exime del cumplimiento de la normativa urbanística"
        ],
        correcta: 1,
        explicacion: "Permite iniciar la actuación sin necesidad de resolución previa."
    },
    {
        texto: "En relación con el control urbanístico, señale la afirmación INCORRECTA:",
        opciones: [
            "Puede ejercerse mediante control previo o posterior",
            "Puede eliminarse en actuaciones de escasa entidad",
            "Debe garantizar el cumplimiento del ordenamiento urbanístico"
        ],
        correcta: 1,
        explicacion: "Nunca desaparece completamente el control administrativo."
    },
    {
        texto: "Señale la afirmación MÁS correcta sobre la licencia urbanística:",
        opciones: [
            "Tiene carácter constitutivo de derechos con independencia de la normativa",
            "Reconoce el derecho a actuar si se cumple la normativa aplicable",
            "Se otorga por criterios de oportunidad administrativa"
        ],
        correcta: 1,
        explicacion: "Reconoce un derecho preexistente condicionado a la legalidad."
    },
    {
        texto: "La vinculación de la licencia al objeto implica que:",
        opciones: [
            "Se extingue automáticamente con el cambio de titular",
            "Se refiere a la actuación urbanística con independencia del sujeto",
            "Solo puede ejercerse por el solicitante original"
        ],
        correcta: 1,
        explicacion: "Es un acto de carácter real vinculado al objeto."
    },
    {
        texto: "Señale la opción MÁS precisa sobre el silencio administrativo en materia urbanística:",
        opciones: [
            "Produce efectos estimatorios sin límite alguno",
            "No puede generar derechos contrarios al ordenamiento jurídico",
            "Implica la ausencia de control administrativo"
        ],
        correcta: 1,
        explicacion: "Nunca puede legitimar actuaciones ilegales."
    },
    {
        texto: "El principio de necesidad en la intervención administrativa implica:",
        opciones: [
            "La utilización del medio más restrictivo para garantizar el control",
            "La elección del medio imprescindible para alcanzar el fin perseguido",
            "La eliminación de cualquier control previo"
        ],
        correcta: 1,
        explicacion: "Se debe aplicar el medio estrictamente necesario."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre los informes en el procedimiento:",
        opciones: [
            "Permiten comprobar la adecuación técnica y jurídica",
            "Son irrelevantes para la resolución final",
            "Constituyen elementos esenciales del procedimiento"
        ],
        correcta: 1,
        explicacion: "Son esenciales para la resolución."
    },
    {
        texto: "La diferencia entre control previo y posterior radica en:",
        opciones: [
            "La intensidad del control ejercido",
            "El momento en que se realiza la verificación administrativa",
            "La naturaleza pública o privada del acto"
        ],
        correcta: 1,
        explicacion: "La diferencia clave es temporal."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la disciplina urbanística:",
        opciones: [
            "Tiene carácter exclusivamente sancionador",
            "Incluye medidas para restablecer la legalidad vulnerada",
            "Depende de la existencia de infracción penal"
        ],
        correcta: 1,
        explicacion: "No solo sanciona, también restaura la legalidad."
    },
    {
        texto: "El restablecimiento de la legalidad urbanística:",
        opciones: [
            "Depende de la voluntad del infractor",
            "Se dirige a corregir la situación contraria a la normativa",
            "Tiene naturaleza exclusivamente económica"
        ],
        correcta: 1,
        explicacion: "Su finalidad es restaurar la legalidad."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre las declaraciones responsables:",
        opciones: [
            "Permiten iniciar la actuación sin resolución previa",
            "Eximen del cumplimiento de la normativa",
            "Están sujetas a control posterior"
        ],
        correcta: 1,
        explicacion: "Nunca eximen del cumplimiento de la normativa."
    },
    {
        texto: "La intervención administrativa urbanística se caracteriza por:",
        opciones: [
            "La ausencia de control en determinados supuestos",
            "La adaptación del control a la naturaleza de la actuación",
            "La aplicación uniforme de un único mecanismo"
        ],
        correcta: 1,
        explicacion: "Se adapta a cada tipo de actuación."
    },
    {
        texto: "Señale la afirmación MÁS correcta sobre el sistema de intervención:",
        opciones: [
            "Sustituye completamente la iniciativa privada",
            "Garantiza el cumplimiento del ordenamiento urbanístico",
            "Se orienta exclusivamente a fines económicos"
        ],
        correcta: 1,
        explicacion: "Su finalidad es la legalidad urbanística."
    },
    {
        texto: "El incumplimiento de los requisitos en actuaciones urbanísticas:",
        opciones: [
            "Carece de consecuencias si no hay denuncia",
            "Puede dar lugar a medidas de restauración y sanción",
            "Se regulariza automáticamente con el tiempo"
        ],
        correcta: 1,
        explicacion: "Puede implicar sanción y restablecimiento."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la función administrativa:",
        opciones: [
            "Debe basarse en la legalidad",
            "Puede actuar sin base normativa en supuestos urgentes",
            "Se orienta al interés general"
        ],
        correcta: 1,
        explicacion: "Siempre requiere base normativa."
    },
    {
        texto: "La combinación de medios de intervención implica que:",
        opciones: [
            "Todos los medios se aplican simultáneamente",
            "Se seleccionan según la naturaleza de la actuación",
            "Dependen exclusivamente del interesado"
        ],
        correcta: 1,
        explicacion: "Dependen del tipo de actuación."
    },
    {
        texto: "La finalidad última del sistema de intervención urbanística es:",
        opciones: [
            "Reducir la intervención administrativa",
            "Garantizar el respeto al ordenamiento urbanístico",
            "Facilitar la actividad económica sin control"
        ],
        correcta: 1,
        explicacion: "Su objetivo es asegurar la legalidad urbanística."
    }
]
},

{
    id: 19,
    nombre: "Tema 19 - Intervención urbanística II",
    icono: "🏗️",
    preguntas: [
{
        texto: "El deber de conservación de los terrenos, instalaciones y construcciones implica:",
        opciones: [
            "La facultad discrecional del propietario de mantenerlos en cualquier estado",
            "La obligación de mantenerlos en condiciones legales de seguridad, salubridad y ornato",
            "La obligación exclusiva de conservar elementos estructurales"
        ],
        correcta: 1,
        explicacion: "El deber de conservación exige condiciones de seguridad, salubridad, accesibilidad y ornato."
    },
    {
        texto: "El deber de conservación tiene carácter:",
        opciones: [
            "Voluntario en función de la capacidad económica del propietario",
            "General, cualquiera que sea la situación del inmueble",
            "Limitado a edificaciones en suelo urbano"
        ],
        correcta: 1,
        explicacion: "El texto establece que tiene carácter general."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre el deber de conservación:",
        opciones: [
            "Incluye mantener condiciones de seguridad",
            "Se limita a actuaciones de mejora voluntaria",
            "Puede implicar ejecución de obras necesarias"
        ],
        correcta: 1,
        explicacion: "No es voluntario, es una obligación legal."
    },
    {
        texto: "El deber de conservación comprende:",
        opciones: [
            "Solo la reparación de daños visibles",
            "La realización de obras necesarias para mantener condiciones legales",
            "Exclusivamente la limpieza del inmueble"
        ],
        correcta: 1,
        explicacion: "Incluye todas las actuaciones necesarias."
    },
    {
        texto: "Cuando la Administración ordena obras de conservación:",
        opciones: [
            "Siempre debe asumir su coste",
            "Puede ejecutarlas a costa del obligado dentro de límites legales",
            "Solo puede recomendarlas sin carácter obligatorio"
        ],
        correcta: 1,
        explicacion: "Puede imponerlas al propietario."
    },
    {
        texto: "El límite del deber de conservación se refiere a:",
        opciones: [
            "La voluntad del propietario",
            "El coste de las obras en relación con el valor del inmueble",
            "La antigüedad del edificio"
        ],
        correcta: 1,
        explicacion: "Existe un límite económico legal."
    },
    {
        texto: "El deber de conservación incluye también:",
        opciones: [
            "La adaptación obligatoria a cualquier innovación técnica",
            "La ejecución de obras ordenadas por la Administración para el interés general",
            "La reconstrucción total en todos los casos"
        ],
        correcta: 1,
        explicacion: "Puede incluir obras por interés general dentro de límites."
    },
    {
        texto: "Señale la afirmación MÁS precisa:",
        opciones: [
            "El deber de conservación es ajeno al derecho de propiedad",
            "Forma parte del contenido del derecho de propiedad",
            "Es una obligación administrativa independiente"
        ],
        correcta: 1,
        explicacion: "Es inherente al derecho de propiedad."
    },
    {
        texto: "El incumplimiento del deber de conservación puede dar lugar a:",
        opciones: [
            "Ninguna actuación administrativa",
            "Órdenes de ejecución o medidas de disciplina urbanística",
            "Únicamente responsabilidad civil"
        ],
        correcta: 1,
        explicacion: "Puede dar lugar a órdenes y medidas administrativas."
    },
    {
        texto: "El deber de conservación tiene como finalidad:",
        opciones: [
            "Incrementar el valor económico del inmueble",
            "Garantizar condiciones adecuadas de uso y seguridad",
            "Sustituir la planificación urbanística"
        ],
        correcta: 1,
        explicacion: "Su finalidad es garantizar condiciones adecuadas."
    },
{
        texto: "El deber de conservación según el planeamiento urbanístico implica mantener los inmuebles en condiciones de:",
        opciones: [
            "Rentabilidad, eficiencia y uso",
            "Seguridad, salubridad y ornato público",
            "Habitabilidad y aprovechamiento económico"
        ],
        correcta: 1,
        explicacion: "Las condiciones clásicas son seguridad, salubridad y ornato."
    },
    {
        texto: "Las condiciones de seguridad implican:",
        opciones: [
            "La adecuación estética del inmueble al entorno urbano",
            "La ausencia de riesgos para personas y bienes",
            "El cumplimiento de criterios energéticos"
        ],
        correcta: 1,
        explicacion: "Se refieren a evitar riesgos estructurales o de otro tipo."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre las condiciones de salubridad:",
        opciones: [
            "Incluyen condiciones higiénicas y sanitarias",
            "Se refieren exclusivamente a elementos estructurales",
            "Evitan riesgos para la salud de las personas"
        ],
        correcta: 1,
        explicacion: "No se limitan a estructura, abarcan condiciones sanitarias."
    },
    {
        texto: "Las condiciones de ornato público implican:",
        opciones: [
            "El mantenimiento de la estética y aspecto exterior del inmueble",
            "La adaptación obligatoria a cualquier estilo arquitectónico",
            "La conservación exclusivamente del interior del edificio"
        ],
        correcta: 0,
        explicacion: "Se refieren al aspecto exterior y estética."
    },
    {
        texto: "En relación con las fachadas, el deber de conservación exige:",
        opciones: [
            "Únicamente su estabilidad estructural",
            "Su mantenimiento mediante limpieza, pintura o reparación",
            "Su modificación estética obligatoria"
        ],
        correcta: 1,
        explicacion: "Se exige mantenimiento del aspecto exterior."
    },
    {
        texto: "Los solares deben:",
        opciones: [
            "Permanecer sin intervención hasta su edificación",
            "Mantenerse vallados y en condiciones de seguridad y salubridad",
            "Ser utilizados libremente sin restricciones"
        ],
        correcta: 1,
        explicacion: "Deben estar vallados y en condiciones adecuadas."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre los solares:",
        opciones: [
            "Deben permanecer abiertos al uso público",
            "Deben evitar riesgos mediante su adecuado cerramiento",
            "No están sujetos al deber de conservación"
        ],
        correcta: 1,
        explicacion: "El vallado evita riesgos y cumple la normativa."
    },
    {
        texto: "El deber de conservación en relación con instalaciones implica:",
        opciones: [
            "Su sustitución obligatoria periódica",
            "Su mantenimiento en condiciones de funcionamiento seguro",
            "Su eliminación cuando sean antiguas"
        ],
        correcta: 1,
        explicacion: "Se exige mantenimiento, no sustitución automática."
    },
    {
        texto: "Las condiciones de accesibilidad forman parte del deber de conservación:",
        opciones: [
            "Solo en edificios públicos",
            "Como requisito legal junto a seguridad y salubridad",
            "Únicamente en nuevas construcciones"
        ],
        correcta: 1,
        explicacion: "Forma parte del contenido legal del deber."
    },
    {
        texto: "El incumplimiento de las condiciones de conservación puede dar lugar a:",
        opciones: [
            "La extinción automática del derecho de propiedad",
            "La intervención administrativa mediante órdenes de ejecución",
            "La libre disposición del inmueble por la Administración"
        ],
        correcta: 1,
        explicacion: "La Administración puede imponer órdenes de ejecución."
    },
{
        texto: "Las órdenes de ejecución se configuran como:",
        opciones: [
            "Actos discrecionales de la Administración sin obligación de motivación",
            "Actos administrativos que imponen al propietario la realización de obras necesarias",
            "Recomendaciones técnicas sin efectos jurídicos obligatorios"
        ],
        correcta: 1,
        explicacion: "Son actos administrativos obligatorios que imponen la realización de obras."
    },
    {
        texto: "La finalidad principal de las órdenes de ejecución es:",
        opciones: [
            "Incrementar el valor del inmueble",
            "Garantizar el cumplimiento del deber de conservación",
            "Sustituir la iniciativa privada en la edificación"
        ],
        correcta: 1,
        explicacion: "Sirven para asegurar el cumplimiento del deber de conservación."
    },
    {
        texto: "Las órdenes de ejecución tienen carácter:",
        opciones: [
            "Voluntario para el propietario",
            "Obligatorio y vinculante",
            "Condicionado a la aceptación del interesado"
        ],
        correcta: 1,
        explicacion: "Son de obligado cumplimiento."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre las órdenes de ejecución:",
        opciones: [
            "Deben estar motivadas",
            "Pueden imponerse sin base legal",
            "Imponen la realización de obras necesarias"
        ],
        correcta: 1,
        explicacion: "Siempre deben tener base legal."
    },
    {
        texto: "El contenido de una orden de ejecución debe:",
        opciones: [
            "Ser genérico y abierto",
            "Precisar las obras o actuaciones a realizar",
            "Limitarse a una advertencia"
        ],
        correcta: 1,
        explicacion: "Debe concretar las actuaciones exigidas."
    },
    {
        texto: "En relación con el procedimiento de las órdenes de ejecución:",
        opciones: [
            "No requiere audiencia al interesado",
            "Debe respetar las garantías del procedimiento administrativo",
            "Se tramita sin necesidad de expediente"
        ],
        correcta: 1,
        explicacion: "Debe respetar el procedimiento administrativo."
    },
    {
        texto: "Si el obligado incumple una orden de ejecución:",
        opciones: [
            "No se pueden adoptar medidas adicionales",
            "La Administración puede ejecutar subsidiariamente las obras",
            "La orden pierde automáticamente eficacia"
        ],
        correcta: 1,
        explicacion: "Se puede ejecutar de forma subsidiaria."
    },
    {
        texto: "La ejecución subsidiaria implica que:",
        opciones: [
            "El propietario realiza voluntariamente las obras",
            "La Administración ejecuta las obras a costa del obligado",
            "Se suspende la actuación administrativa"
        ],
        correcta: 1,
        explicacion: "La Administración actúa y repercute el coste."
    },
    {
        texto: "Las órdenes de ejecución pueden referirse a:",
        opciones: [
            "Únicamente obras estructurales",
            "Cualquier actuación necesaria para cumplir condiciones legales",
            "Solo actuaciones estéticas"
        ],
        correcta: 1,
        explicacion: "Abarcan todo lo necesario para cumplir el deber de conservación."
    },
    {
        texto: "Señale la afirmación MÁS precisa:",
        opciones: [
            "Las órdenes de ejecución son sanciones administrativas",
            "Son medidas de restablecimiento del deber de conservación",
            "Son actos discrecionales sin control judicial"
        ],
        correcta: 1,
        explicacion: "No son sanciones, son medidas de cumplimiento."
    },
 {
        texto: "La declaración de ruina de una construcción implica:",
        opciones: [
            "Su demolición automática sin procedimiento",
            "La constatación de una situación que justifica medidas como demolición o reparación",
            "La pérdida inmediata del derecho de propiedad"
        ],
        correcta: 1,
        explicacion: "Es una declaración administrativa que permite adoptar medidas como demolición o reparación."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la ruina urbanística:",
        opciones: [
            "Se basa exclusivamente en criterios económicos",
            "Se fundamenta en supuestos legales tasados",
            "Depende únicamente de la antigüedad del edificio"
        ],
        correcta: 1,
        explicacion: "Los supuestos están definidos legalmente."
    },
    {
        texto: "Uno de los supuestos de declaración de ruina es:",
        opciones: [
            "La falta de uso del inmueble",
            "El deterioro generalizado que afecta a la estabilidad",
            "La baja rentabilidad económica"
        ],
        correcta: 1,
        explicacion: "El deterioro estructural es un supuesto típico de ruina."
    },
    {
        texto: "Señale la opción INCORRECTA sobre la ruina:",
        opciones: [
            "Puede basarse en razones estructurales",
            "Puede basarse en criterios de seguridad",
            "Se declara por motivos estéticos exclusivamente"
        ],
        correcta: 2,
        explicacion: "No se basa exclusivamente en estética."
    },
    {
        texto: "La ruina económica se produce cuando:",
        opciones: [
            "El coste de reparación supera el límite legal respecto al valor del inmueble",
            "El inmueble carece de uso",
            "El propietario no puede afrontar las obras"
        ],
        correcta: 0,
        explicacion: "Se basa en la relación coste-valor."
    },
    {
        texto: "La ruina técnica se refiere a:",
        opciones: [
            "La imposibilidad jurídica de uso del inmueble",
            "El deterioro estructural que compromete la estabilidad",
            "La falta de rentabilidad económica"
        ],
        correcta: 1,
        explicacion: "Se refiere al estado físico del edificio."
    },
    {
        texto: "La ruina puede declararse cuando:",
        opciones: [
            "Exista riesgo para la seguridad de personas o bienes",
            "El inmueble tenga más de cierta antigüedad",
            "El propietario lo solicite sin justificación"
        ],
        correcta: 0,
        explicacion: "El riesgo es un elemento clave."
    },
    {
        texto: "Señale la afirmación MÁS correcta:",
        opciones: [
            "La ruina implica siempre demolición obligatoria",
            "Puede dar lugar a distintas medidas según el caso",
            "Supone la extinción automática de la propiedad"
        ],
        correcta: 1,
        explicacion: "No siempre implica demolición."
    },
    {
        texto: "La declaración de ruina tiene carácter:",
        opciones: [
            "Discrecional absoluto",
            "Reglado conforme a supuestos legales",
            "Voluntario del propietario"
        ],
        correcta: 1,
        explicacion: "Se basa en supuestos tasados."
    },
    {
        texto: "La apreciación de la ruina exige:",
        opciones: [
            "Informe técnico que justifique la situación",
            "Decisión unilateral sin base técnica",
            "Simple inspección visual sin documentación"
        ],
        correcta: 0,
        explicacion: "Debe basarse en informes técnicos."
    },
{
        texto: "El procedimiento de declaración de ruina se inicia:",
        opciones: [
            "Exclusivamente de oficio por la Administración competente",
            "De oficio o a instancia de cualquier interesado con legitimación",
            "Únicamente a solicitud del propietario del inmueble"
        ],
        correcta: 1,
        explicacion: "Puede iniciarse de oficio o a instancia de interesado."
    },
    {
        texto: "En el procedimiento de ruina, la fase de instrucción exige:",
        opciones: [
            "Únicamente la comprobación visual del estado del inmueble",
            "La emisión de informes técnicos que acrediten la situación de ruina",
            "La conformidad previa del propietario afectado"
        ],
        correcta: 1,
        explicacion: "Los informes técnicos son esenciales para fundamentar la ruina."
    },
    {
        texto: "La audiencia al interesado en el procedimiento de ruina:",
        opciones: [
            "Puede omitirse por razones de urgencia sin justificación",
            "Forma parte de las garantías del procedimiento administrativo",
            "Solo procede cuando el procedimiento se inicia a instancia de parte"
        ],
        correcta: 1,
        explicacion: "Debe respetarse la audiencia como garantía procedimental."
    },
    {
        texto: "La resolución que declara la ruina debe:",
        opciones: [
            "Limitarse a declarar el estado del inmueble sin adoptar medidas",
            "Determinar las medidas a adoptar en función de la situación",
            "Delegar la decisión en el propietario afectado"
        ],
        correcta: 1,
        explicacion: "Debe establecer las medidas: demolición, reparación, etc."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la resolución de ruina:",
        opciones: [
            "Debe estar motivada",
            "Puede basarse exclusivamente en criterios económicos del propietario",
            "Debe apoyarse en informes técnicos"
        ],
        correcta: 1,
        explicacion: "No puede basarse solo en criterios económicos del propietario."
    },
    {
        texto: "Entre las posibles consecuencias de la declaración de ruina se encuentra:",
        opciones: [
            "La demolición total o parcial del inmueble",
            "La exoneración automática del deber de conservación",
            "La libre disposición del inmueble por la Administración"
        ],
        correcta: 0,
        explicacion: "La demolición es una de las medidas posibles."
    },
    {
        texto: "La ejecución de las medidas derivadas de la ruina corresponde:",
        opciones: [
            "Exclusivamente a la Administración en todos los casos",
            "Al propietario, salvo ejecución subsidiaria en caso de incumplimiento",
            "A los ocupantes del inmueble"
        ],
        correcta: 1,
        explicacion: "El obligado es el propietario, con posibilidad de ejecución subsidiaria."
    },
    {
        texto: "En caso de incumplimiento de las medidas ordenadas:",
        opciones: [
            "La Administración debe iniciar un nuevo procedimiento",
            "Puede proceder a la ejecución subsidiaria a costa del obligado",
            "Se extingue la declaración de ruina"
        ],
        correcta: 1,
        explicacion: "Se puede ejecutar subsidiariamente."
    },
    {
        texto: "La declaración de ruina no implica necesariamente:",
        opciones: [
            "La adopción de medidas administrativas",
            "La demolición del inmueble en todos los casos",
            "La intervención de la Administración"
        ],
        correcta: 1,
        explicacion: "No siempre conlleva demolición."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre el procedimiento:",
        opciones: [
            "Es un procedimiento discrecional sin sujeción a reglas",
            "Está sujeto a las garantías del procedimiento administrativo común",
            "Depende exclusivamente de la voluntad del propietario"
        ],
        correcta: 1,
        explicacion: "Debe respetar las garantías procedimentales."
    },
 {
        texto: "Señale la afirmación MÁS precisa sobre la relación entre deber de conservación y ruina:",
        opciones: [
            "La declaración de ruina elimina automáticamente el deber de conservación",
            "El deber de conservación subsiste hasta la adopción de medidas derivadas de la ruina",
            "Ambos conceptos son independientes y no guardan relación jurídica"
        ],
        correcta: 1,
        explicacion: "El deber de conservación no desaparece automáticamente con la ruina."
    },
    {
        texto: "La orden de ejecución y la declaración de ruina se diferencian en que:",
        opciones: [
            "Ambas tienen la misma finalidad y efectos",
            "La orden de ejecución busca conservar, mientras la ruina constata un estado que puede exigir medidas más drásticas",
            "La ruina es siempre previa a la orden de ejecución"
        ],
        correcta: 1,
        explicacion: "La orden mantiene; la ruina puede implicar demolición u otras medidas."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre las órdenes de ejecución:",
        opciones: [
            "Son actos administrativos obligatorios",
            "Tienen naturaleza sancionadora",
            "Se dirigen a garantizar el cumplimiento del deber de conservación"
        ],
        correcta: 1,
        explicacion: "No son sanciones, son medidas de cumplimiento."
    },
    {
        texto: "En relación con la ruina económica, señale la opción MÁS precisa:",
        opciones: [
            "Se basa exclusivamente en la capacidad económica del propietario",
            "Se determina por la relación entre el coste de las obras y el valor del inmueble",
            "Depende del uso del inmueble"
        ],
        correcta: 1,
        explicacion: "El criterio es objetivo: coste vs valor."
    },
    {
        texto: "El deber de conservación alcanza:",
        opciones: [
            "Únicamente a edificaciones habitadas",
            "A terrenos, construcciones e instalaciones en general",
            "Solo a inmuebles de titularidad privada"
        ],
        correcta: 1,
        explicacion: "Tiene carácter general."
    },
    {
        texto: "Señale la afirmación MÁS correcta sobre la ejecución subsidiaria:",
        opciones: [
            "Tiene carácter sancionador",
            "Es un mecanismo para garantizar el cumplimiento de obligaciones",
            "Exime al obligado del pago de los costes"
        ],
        correcta: 1,
        explicacion: "Es un medio de ejecución forzosa, no sanción."
    },
    {
        texto: "La declaración de ruina exige:",
        opciones: [
            "Únicamente la apreciación subjetiva de la Administración",
            "La concurrencia de supuestos legalmente previstos acreditados técnicamente",
            "La solicitud expresa del propietario"
        ],
        correcta: 1,
        explicacion: "Debe basarse en supuestos legales acreditados."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre el deber de conservación:",
        opciones: [
            "Forma parte del contenido del derecho de propiedad",
            "Tiene límites económicos legalmente establecidos",
            "Desaparece automáticamente en caso de deterioro grave"
        ],
        correcta: 2,
        explicacion: "No desaparece automáticamente."
    },
    {
        texto: "Las órdenes de ejecución pueden dictarse:",
        opciones: [
            "Solo tras declaración de ruina",
            "Cuando se incumplen las condiciones de conservación",
            "Únicamente a solicitud del propietario"
        ],
        correcta: 1,
        explicacion: "Se dictan ante incumplimientos del deber de conservación."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la intervención administrativa:",
        opciones: [
            "Se limita a sancionar infracciones",
            "Incluye medidas preventivas y correctoras",
            "Depende exclusivamente de la iniciativa privada"
        ],
        correcta: 1,
        explicacion: "Incluye prevención y corrección."
    },
    {
        texto: "La ruina técnica se diferencia de la económica en que:",
        opciones: [
            "Se basa en criterios de rentabilidad",
            "Se fundamenta en el estado físico del inmueble",
            "Depende del valor del suelo"
        ],
        correcta: 1,
        explicacion: "La técnica es estructural, la económica es coste-valor."
    },
    {
        texto: "Señale la opción MÁS correcta sobre el procedimiento de ruina:",
        opciones: [
            "Puede omitirse el trámite de audiencia si existe urgencia",
            "Debe respetar las garantías del procedimiento administrativo",
            "Se basa exclusivamente en criterios técnicos sin intervención jurídica"
        ],
        correcta: 1,
        explicacion: "Debe respetar garantías procedimentales."
    },
    {
        texto: "El incumplimiento de una orden de ejecución permite:",
        opciones: [
            "La anulación automática de la orden",
            "La adopción de medidas de ejecución forzosa",
            "La suspensión del procedimiento administrativo"
        ],
        correcta: 1,
        explicacion: "Permite ejecución subsidiaria u otras medidas."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la ruina:",
        opciones: [
            "Se declara mediante procedimiento administrativo",
            "Implica siempre demolición inmediata",
            "Puede dar lugar a distintas medidas según el caso"
        ],
        correcta: 1,
        explicacion: "No siempre implica demolición."
    },
    {
        texto: "La finalidad del sistema de intervención en la edificación es:",
        opciones: [
            "Maximizar el valor económico del suelo",
            "Garantizar condiciones adecuadas de seguridad, salubridad y ornato",
            "Reducir la intervención administrativa"
        ],
        correcta: 1,
        explicacion: "Se orienta a garantizar condiciones legales."
    },
 {
        texto: "Señale la afirmación MÁS precisa sobre el límite del deber de conservación:",
        opciones: [
            "Se determina por la voluntad del propietario",
            "Se vincula al coste de las obras en relación con el valor del inmueble",
            "Depende exclusivamente de la antigüedad del edificio"
        ],
        correcta: 1,
        explicacion: "El límite es económico: coste vs valor."
    },
    {
        texto: "Cuando el coste de las obras supera el límite legal:",
        opciones: [
            "Se mantiene el deber de conservación sin modificaciones",
            "Puede dar lugar a la declaración de ruina económica",
            "Se extingue automáticamente la intervención administrativa"
        ],
        correcta: 1,
        explicacion: "Es un supuesto típico de ruina económica."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la ruina económica:",
        opciones: [
            "Se basa en un criterio objetivo",
            "Depende exclusivamente de la capacidad económica del propietario",
            "Se relaciona con el coste de reparación"
        ],
        correcta: 1,
        explicacion: "No depende del propietario, sino del inmueble."
    },
    {
        texto: "La diferencia esencial entre orden de ejecución y ruina es que:",
        opciones: [
            "Ambas implican demolición",
            "La orden mantiene el inmueble y la ruina puede implicar su desaparición",
            "La ruina es una medida preventiva"
        ],
        correcta: 1,
        explicacion: "La orden conserva, la ruina puede eliminar."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre el procedimiento:",
        opciones: [
            "Puede omitirse la audiencia si existen informes técnicos",
            "Debe respetar las fases del procedimiento administrativo",
            "Depende exclusivamente del técnico competente"
        ],
        correcta: 1,
        explicacion: "Debe seguir el procedimiento administrativo."
    },
    {
        texto: "El deber de conservación incluye:",
        opciones: [
            "Solo actuaciones estructurales",
            "Actuaciones necesarias para garantizar condiciones legales",
            "Únicamente mantenimiento estético"
        ],
        correcta: 1,
        explicacion: "Incluye todo lo necesario."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la ruina técnica:",
        opciones: [
            "Se refiere al estado físico del inmueble",
            "Puede implicar riesgo estructural",
            "Se basa en criterios económicos"
        ],
        correcta: 2,
        explicacion: "Eso corresponde a la ruina económica."
    },
    {
        texto: "La ejecución subsidiaria se caracteriza por:",
        opciones: [
            "Tener naturaleza sancionadora",
            "Ser un medio de ejecución forzosa",
            "Requerir consentimiento del obligado"
        ],
        correcta: 1,
        explicacion: "Es ejecución forzosa, no sanción."
    },
    {
        texto: "Señale la afirmación MÁS correcta sobre el sistema:",
        opciones: [
            "Se basa exclusivamente en sanciones",
            "Combina medidas de conservación, ejecución y ruina",
            "Se limita a actuaciones voluntarias"
        ],
        correcta: 1,
        explicacion: "Integra todos los mecanismos."
    },
    {
        texto: "La finalidad del sistema es:",
        opciones: [
            "Maximizar el valor económico del inmueble",
            "Garantizar condiciones de seguridad, salubridad y ornato",
            "Reducir la intervención administrativa"
        ],
        correcta: 1,
        explicacion: "Ese es el objetivo esencial."
    },
 {
        texto: "Señale la afirmación MÁS precisa sobre el límite del deber de conservación:",
        opciones: [
            "Se determina en función del coste de las obras en relación con el valor del inmueble",
            "Depende de la capacidad económica del propietario",
            "Se fija discrecionalmente por la Administración"
        ],
        correcta: 0,
        explicacion: "El límite es objetivo: coste de obras vs valor del inmueble."
    },
    {
        texto: "Cuando se supera el límite del deber de conservación:",
        opciones: [
            "Se mantiene la obligación sin modificaciones",
            "Puede declararse la ruina económica del inmueble",
            "Se extingue automáticamente cualquier obligación"
        ],
        correcta: 1,
        explicacion: "Es uno de los supuestos de ruina económica."
    },
    {
        texto: "Señale la opción INCORRECTA sobre el procedimiento de ruina:",
        opciones: [
            "Incluye la audiencia al interesado",
            "Puede resolverse sin informes técnicos",
            "Debe tramitarse conforme al procedimiento administrativo"
        ],
        correcta: 1,
        explicacion: "Los informes técnicos son imprescindibles."
    },
    {
        texto: "En el procedimiento de ruina, el orden correcto es:",
        opciones: [
            "Resolución → informes → audiencia",
            "Inicio → informes → audiencia → resolución",
            "Audiencia → resolución → informes"
        ],
        correcta: 1,
        explicacion: "Ese es el orden procedimental correcto."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la ruina técnica:",
        opciones: [
            "Se basa en el coste de las obras",
            "Se fundamenta en el estado físico y estructural del inmueble",
            "Depende del uso del edificio"
        ],
        correcta: 1,
        explicacion: "La ruina técnica es estructural."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la ruina económica:",
        opciones: [
            "Se basa en un criterio objetivo",
            "Depende de la situación económica del propietario",
            "Relaciona coste de obras y valor del inmueble"
        ],
        correcta: 1,
        explicacion: "No depende del propietario."
    },
    {
        texto: "La orden de ejecución se dicta:",
        opciones: [
            "Cuando existe incumplimiento del deber de conservación",
            "Solo tras declaración de ruina",
            "Exclusivamente a solicitud del interesado"
        ],
        correcta: 0,
        explicacion: "Se dicta por incumplimiento del deber."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre las condiciones de conservación:",
        opciones: [
            "Se limitan a la estructura del edificio",
            "Incluyen seguridad, salubridad, ornato y accesibilidad",
            "Se refieren exclusivamente al interior del inmueble"
        ],
        correcta: 1,
        explicacion: "Incluyen todas esas condiciones."
    },
    {
        texto: "El deber de conservación alcanza a:",
        opciones: [
            "Solo edificaciones",
            "Terrenos, instalaciones y construcciones",
            "Únicamente inmuebles habitados"
        ],
        correcta: 1,
        explicacion: "Tiene carácter general."
    },
    {
        texto: "La diferencia clave entre conservación y ruina es que:",
        opciones: [
            "La conservación busca mantener el inmueble y la ruina puede implicar su eliminación",
            "Ambas implican demolición",
            "La ruina es una medida preventiva"
        ],
        correcta: 0,
        explicacion: "La ruina puede llevar a demolición."
    },
 {
        texto: "El deber legal de conservación comprende el mantenimiento de los inmuebles en condiciones de:",
        opciones: [
            "Seguridad, salubridad, accesibilidad y ornato público conforme a lo establecido en la normativa",
            "Seguridad, habitabilidad, accesibilidad y eficiencia energética conforme a la normativa vigente",
            "Salubridad, accesibilidad, estética urbana y adecuación funcional al uso previsto"
        ],
        correcta: 0,
        explicacion: "La formulación literal incluye seguridad, salubridad, accesibilidad y ornato público."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre el límite del deber de conservación:",
        opciones: [
            "Viene determinado por el coste de las obras necesarias en relación con el valor de reposición del inmueble",
            "Se fija en función del coste de las obras respecto al valor actual del inmueble excluido el suelo",
            "Se determina por el coste de las obras en relación con el valor del inmueble en su conjunto"
        ],
        correcta: 1,
        explicacion: "El criterio se refiere al valor del inmueble excluido el suelo."
    },
    {
        texto: "Cuando el coste de las obras excede el límite legal del deber de conservación:",
        opciones: [
            "Procede automáticamente la demolición del inmueble",
            "Puede declararse la situación de ruina económica",
            "Se extingue el deber de conservación sin necesidad de actuación administrativa"
        ],
        correcta: 1,
        explicacion: "Da lugar a posible ruina económica, no demolición automática."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre las órdenes de ejecución:",
        opciones: [
            "Tienen por objeto garantizar el cumplimiento del deber de conservación",
            "Pueden imponerse sin concreción de las actuaciones exigidas",
            "Deben dictarse con base en la normativa aplicable"
        ],
        correcta: 1,
        explicacion: "Deben concretar las actuaciones a realizar."
    },
    {
        texto: "Las órdenes de ejecución pueden referirse a:",
        opciones: [
            "Actuaciones estrictamente necesarias para asegurar condiciones legales del inmueble",
            "Cualquier actuación que mejore el valor económico del inmueble",
            "Exclusivamente obras estructurales de consolidación"
        ],
        correcta: 0,
        explicacion: "Se limitan a lo necesario para cumplir condiciones legales."
    },
    {
        texto: "En el procedimiento de declaración de ruina, la intervención técnica tiene por objeto:",
        opciones: [
            "Determinar la conveniencia económica de la demolición",
            "Acreditar la concurrencia de los supuestos legales de ruina",
            "Valorar el uso más adecuado del inmueble"
        ],
        correcta: 1,
        explicacion: "Debe acreditar los supuestos legales de ruina."
    },
    {
        texto: "Señale la opción MÁS precisa sobre la ruina técnica:",
        opciones: [
            "Se produce cuando el coste de reparación supera el límite legal",
            "Se refiere a daños estructurales que comprometen la estabilidad del inmueble",
            "Se determina por la imposibilidad de uso del inmueble"
        ],
        correcta: 1,
        explicacion: "La ruina técnica es estructural."
    },
    {
        texto: "La ruina económica se caracteriza por:",
        opciones: [
            "La imposibilidad material de uso del inmueble",
            "La relación entre el coste de las obras y el valor del inmueble excluido el suelo",
            "La falta de mantenimiento continuado por parte del propietario"
        ],
        correcta: 1,
        explicacion: "Ese es el criterio definitorio."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre el procedimiento de ruina:",
        opciones: [
            "Debe incluir trámite de audiencia al interesado",
            "Puede resolverse sin informe técnico en supuestos evidentes",
            "Debe concluir mediante resolución motivada"
        ],
        correcta: 1,
        explicacion: "Siempre requiere base técnica."
    },
    {
        texto: "El orden procedimental correcto en la declaración de ruina es:",
        opciones: [
            "Inicio → audiencia → informes → resolución",
            "Inicio → informes → audiencia → resolución",
            "Informes → inicio → resolución → audiencia"
        ],
        correcta: 1,
        explicacion: "Ese es el orden correcto."
    },
    {
        texto: "La ejecución subsidiaria de una orden de ejecución implica que:",
        opciones: [
            "La Administración ejecuta las obras con cargo al obligado",
            "El propietario ejecuta las obras bajo supervisión administrativa",
            "Se sustituye la obligación por una sanción económica"
        ],
        correcta: 0,
        explicacion: "La Administración actúa y repercute el coste."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre el deber de conservación:",
        opciones: [
            "Tiene carácter accesorio respecto al derecho de propiedad",
            "Forma parte del contenido esencial del derecho de propiedad",
            "Se limita a supuestos de intervención administrativa"
        ],
        correcta: 1,
        explicacion: "Es inherente al derecho de propiedad."
    },
    {
        texto: "Las condiciones de ornato público se refieren a:",
        opciones: [
            "El cumplimiento de requisitos estructurales",
            "El mantenimiento del aspecto exterior del inmueble conforme a su entorno",
            "La adecuación del inmueble a su uso funcional"
        ],
        correcta: 1,
        explicacion: "Se refiere a la estética exterior."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre el sistema de intervención:",
        opciones: [
            "Incluye medidas de conservación, ejecución y ruina",
            "Se basa exclusivamente en la potestad sancionadora",
            "Tiene como finalidad garantizar condiciones legales del inmueble"
        ],
        correcta: 1,
        explicacion: "No se limita a sancionar."
    },
    {
        texto: "La declaración de ruina:",
        opciones: [
            "Implica necesariamente la demolición del inmueble",
            "Permite adoptar medidas en función de la situación concreta",
            "Supone la pérdida automática del derecho de propiedad"
        ],
        correcta: 1,
        explicacion: "No siempre implica demolición."
    },
{
        texto: "El deber de conservación alcanza a:",
        opciones: [
            "Terrenos, construcciones e instalaciones en condiciones de seguridad, salubridad, accesibilidad y ornato",
            "Edificaciones en condiciones de seguridad, habitabilidad y eficiencia energética",
            "Construcciones destinadas a uso residencial en condiciones de salubridad"
        ],
        correcta: 0,
        explicacion: "Esa es la formulación completa correcta."
    },
    {
        texto: "El límite del deber de conservación se determina por:",
        opciones: [
            "El coste de las obras en relación con el valor del inmueble excluido el suelo",
            "El coste de las obras en relación con el valor de mercado total",
            "La capacidad económica del propietario"
        ],
        correcta: 0,
        explicacion: "Clave: valor excluido el suelo."
    },
    {
        texto: "Señale la afirmación INCORRECTA:",
        opciones: [
            "La ruina económica depende del coste de reparación",
            "La ruina técnica depende del estado estructural",
            "La ruina económica depende del propietario"
        ],
        correcta: 2,
        explicacion: "No depende del propietario."
    },
    {
        texto: "El procedimiento de ruina sigue el orden:",
        opciones: [
            "Inicio → informes → audiencia → resolución",
            "Inicio → resolución → informes → audiencia",
            "Informes → inicio → audiencia → resolución"
        ],
        correcta: 0,
        explicacion: "Orden clave de examen."
    },
    {
        texto: "La orden de ejecución se dicta:",
        opciones: [
            "Para restablecer condiciones legales del inmueble",
            "Para sancionar incumplimientos",
            "Para declarar la ruina del inmueble"
        ],
        correcta: 0,
        explicacion: "No es sanción ni ruina."
    },
{
        texto: "En relación con los solares, señale la afirmación MÁS precisa:",
        opciones: [
            "Deben mantenerse en condiciones de seguridad y salubridad mediante su adecuado vallado",
            "Pueden permanecer abiertos si no presentan riesgo inmediato",
            "No están sujetos al deber de conservación hasta su edificación"
        ],
        correcta: 0,
        explicacion: "El vallado y mantenimiento es obligatorio."
    },
    {
        texto: "El deber de conservación en solares incluye:",
        opciones: [
            "Exclusivamente su limpieza periódica",
            "Medidas necesarias para evitar riesgos y garantizar condiciones legales",
            "Su uso obligatorio conforme al planeamiento"
        ],
        correcta: 1,
        explicacion: "Incluye todas las medidas necesarias."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre el límite económico:",
        opciones: [
            "Opera automáticamente sin intervención administrativa",
            "Determina la transición entre conservación y posible ruina económica",
            "Se aplica únicamente a edificios antiguos"
        ],
        correcta: 1,
        explicacion: "Es clave para la ruina económica."
    },
    {
        texto: "La superación del límite del deber de conservación:",
        opciones: [
            "Impide cualquier actuación administrativa",
            "Puede justificar la declaración de ruina económica",
            "Obliga siempre a la demolición"
        ],
        correcta: 1,
        explicacion: "No implica demolición automática."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la ruina técnica:",
        opciones: [
            "Se refiere a la estabilidad estructural",
            "Se basa en el estado físico del inmueble",
            "Se determina por el coste de las obras"
        ],
        correcta: 2,
        explicacion: "Eso corresponde a la ruina económica."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la ruina económica:",
        opciones: [
            "Depende del valor del suelo incluido",
            "Relaciona el coste de las obras con el valor del inmueble excluido el suelo",
            "Se basa en la antigüedad del edificio"
        ],
        correcta: 1,
        explicacion: "Clave: valor sin suelo."
    },
    {
        texto: "En el procedimiento de ruina, la audiencia:",
        opciones: [
            "Puede omitirse en todos los casos",
            "Constituye una garantía esencial del procedimiento",
            "Solo se realiza si lo solicita el interesado"
        ],
        correcta: 1,
        explicacion: "Es garantía básica."
    },
    {
        texto: "Señale la opción MÁS precisa sobre el orden procedimental:",
        opciones: [
            "Inicio → informes → audiencia → resolución",
            "Inicio → audiencia → resolución → informes",
            "Informes → inicio → resolución → audiencia"
        ],
        correcta: 0,
        explicacion: "Orden correcto."
    },
    {
        texto: "La ejecución subsidiaria en órdenes de ejecución:",
        opciones: [
            "Tiene carácter sancionador",
            "Permite a la Administración ejecutar a costa del obligado",
            "Sustituye la obligación del propietario"
        ],
        correcta: 1,
        explicacion: "Es ejecución forzosa."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre el sistema:",
        opciones: [
            "Se basa exclusivamente en sanciones",
            "Integra conservación, ejecución y ruina como mecanismos complementarios",
            "Depende de la iniciativa del propietario"
        ],
        correcta: 1,
        explicacion: "Es un sistema integrado."
    }
]
},

{
    id: 20,
    nombre: "Tema 20 - Intervención urbanística III",
    icono: "🏗️",
    preguntas: [
{
        texto: "La protección de la legalidad urbanística se refiere a:",
        opciones: [
            "La potestad administrativa sancionadora exclusivamente",
            "La potestad administrativa para garantizar el cumplimiento del ordenamiento urbanístico",
            "La intervención administrativa en materia económica del suelo"
        ],
        correcta: 1,
        explicacion: "Incluye potestades para garantizar el cumplimiento de la normativa urbanística."
    },
    {
        texto: "La disciplina urbanística comprende:",
        opciones: [
            "Únicamente la potestad sancionadora",
            "La inspección, restauración de la legalidad y sanción",
            "Solo la ejecución de planeamiento urbanístico"
        ],
        correcta: 1,
        explicacion: "Incluye inspección, restauración y sanción."
    },
    {
        texto: "La potestad sancionadora en materia urbanística tiene como finalidad:",
        opciones: [
            "Recaudar ingresos para la Administración",
            "Garantizar el cumplimiento del ordenamiento urbanístico",
            "Regular el mercado del suelo"
        ],
        correcta: 1,
        explicacion: "Su finalidad es garantizar la legalidad."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la disciplina urbanística:",
        opciones: [
            "Incluye medidas de restauración del orden urbanístico",
            "Se limita a sancionar infracciones",
            "Tiene carácter administrativo"
        ],
        correcta: 1,
        explicacion: "No se limita a sancionar."
    },
    {
        texto: "La normativa urbanística aplicable en esta materia incluye:",
        opciones: [
            "Solo normativa estatal",
            "Normativa estatal, autonómica y local",
            "Exclusivamente ordenanzas municipales"
        ],
        correcta: 1,
        explicacion: "Es un sistema multinivel."
    },
    {
        texto: "La intervención administrativa en urbanismo tiene carácter:",
        opciones: [
            "Discrecional absoluto",
            "Reglado conforme a la normativa",
            "Voluntario del interesado"
        ],
        correcta: 1,
        explicacion: "Está sometida al principio de legalidad."
    },
    {
        texto: "La restauración del orden urbanístico tiene como finalidad:",
        opciones: [
            "Imponer sanciones económicas",
            "Reponer la realidad física alterada",
            "Regularizar automáticamente cualquier actuación"
        ],
        correcta: 1,
        explicacion: "Busca restablecer la legalidad física."
    },
    {
        texto: "Señale la afirmación MÁS precisa:",
        opciones: [
            "La disciplina urbanística actúa solo tras infracción",
            "Incluye funciones preventivas y reactivas",
            "Se limita a la actuación judicial"
        ],
        correcta: 1,
        explicacion: "Incluye prevención y reacción."
    },
    {
        texto: "El ejercicio de la potestad sancionadora se rige por:",
        opciones: [
            "El principio de oportunidad",
            "Principios como legalidad y tipicidad",
            "La voluntad administrativa"
        ],
        correcta: 1,
        explicacion: "Se rige por principios sancionadores."
    },
    {
        texto: "La disciplina urbanística se integra dentro de:",
        opciones: [
            "La actividad económica del Estado",
            "La intervención administrativa en el uso del suelo",
            "La planificación territorial exclusivamente"
        ],
        correcta: 1,
        explicacion: "Forma parte de la intervención administrativa."
    },
    {
        texto: "La inspección urbanística tiene como finalidad principal:",
        opciones: [
            "Imponer sanciones directamente",
            "Vigilar y comprobar el cumplimiento de la normativa urbanística",
            "Autorizar actuaciones urbanísticas"
        ],
        correcta: 1,
        explicacion: "Su función principal es de vigilancia y control."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la inspección urbanística:",
        opciones: [
            "Tiene carácter exclusivamente sancionador",
            "Forma parte de la potestad de disciplina urbanística",
            "Se limita a actuaciones técnicas sin efectos jurídicos"
        ],
        correcta: 1,
        explicacion: "Se integra en la disciplina urbanística."
    },
    {
        texto: "Las funciones de la inspección urbanística incluyen:",
        opciones: [
            "Únicamente la detección de infracciones",
            "Vigilancia, control, denuncia e información",
            "Exclusivamente la imposición de sanciones"
        ],
        correcta: 1,
        explicacion: "Incluye varias funciones, no solo sanción."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la inspección:",
        opciones: [
            "Puede informar a las autoridades competentes",
            "Puede denunciar anomalías urbanísticas",
            "Puede imponer directamente sanciones"
        ],
        correcta: 2,
        explicacion: "No impone sanciones directamente."
    },
    {
        texto: "Los inspectores urbanísticos tienen la condición de:",
        opciones: [
            "Autoridad pública en el ejercicio de sus funciones",
            "Funcionarios sin facultades especiales",
            "Técnicos sin capacidad de actuación administrativa"
        ],
        correcta: 0,
        explicacion: "Tienen condición de autoridad."
    },
    {
        texto: "Las actas de inspección:",
        opciones: [
            "Carecen de valor probatorio",
            "Tienen presunción de veracidad respecto a los hechos constatados",
            "Son meros documentos informativos sin efectos"
        ],
        correcta: 1,
        explicacion: "Tienen presunción de veracidad."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre las actas:",
        opciones: [
            "Vinculan de forma absoluta a la Administración",
            "Pueden ser desvirtuadas mediante prueba en contrario",
            "No requieren firma del inspector"
        ],
        correcta: 1,
        explicacion: "Admiten prueba en contrario."
    },
    {
        texto: "Los inspectores pueden:",
        opciones: [
            "Acceder libremente a cualquier propiedad sin limitaciones",
            "Acceder a los lugares objeto de inspección en los términos legales",
            "Actuar solo previa autorización judicial en todos los casos"
        ],
        correcta: 1,
        explicacion: "El acceso está sujeto a condiciones legales."
    },
    {
        texto: "Señale la afirmación INCORRECTA:",
        opciones: [
            "Los inspeccionados deben colaborar con la inspección",
            "La negativa a colaborar puede tener consecuencias jurídicas",
            "La colaboración es voluntaria y sin efectos"
        ],
        correcta: 2,
        explicacion: "La colaboración es obligatoria."
    },
    {
        texto: "La inspección urbanística puede dar lugar a:",
        opciones: [
            "La imposición directa de sanciones",
            "La iniciación de procedimientos administrativos",
            "La legalización automática de actuaciones"
        ],
        correcta: 1,
        explicacion: "Puede iniciar procedimientos."
    },
    {
        texto: "La suspensión de actos de edificación o uso del suelo procede cuando:",
        opciones: [
            "Se realizan con licencia válida",
            "Se ejecutan sin licencia u orden de ejecución o contraviniendo sus condiciones",
            "Exista simple duda sobre su legalidad"
        ],
        correcta: 1,
        explicacion: "Procede cuando se actúa sin título habilitante o contra sus condiciones."
    },
    {
        texto: "La medida de suspensión tiene carácter:",
        opciones: [
            "Discrecional absoluto",
            "Obligatorio cuando concurren los supuestos legales",
            "Voluntario para la Administración"
        ],
        correcta: 1,
        explicacion: "Es una medida obligatoria en los supuestos previstos."
    },
    {
        texto: "La suspensión de obras se acuerda por:",
        opciones: [
            "El inspector urbanístico",
            "El Alcalde o autoridad competente",
            "El propietario del inmueble"
        ],
        correcta: 1,
        explicacion: "La competencia corresponde al Alcalde o autoridad competente."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la suspensión:",
        opciones: [
            "Se comunica al interesado",
            "Se comunica a la Consejería competente",
            "No requiere motivación"
        ],
        correcta: 2,
        explicacion: "Debe estar motivada."
    },
    {
        texto: "Tras la suspensión de obras, se concede un plazo para:",
        opciones: [
            "Finalizar la obra",
            "Solicitar la legalización o ajustar la actuación",
            "Proceder automáticamente a la demolición"
        ],
        correcta: 1,
        explicacion: "Se concede plazo para legalizar o ajustar."
    },
    {
        texto: "El plazo para solicitar la legalización es:",
        opciones: [
            "Indefinido",
            "El establecido en la normativa aplicable",
            "A discreción del interesado"
        ],
        correcta: 1,
        explicacion: "Está fijado legalmente."
    },
    {
        texto: "Si la legalización no es posible:",
        opciones: [
            "Se mantiene la obra sin cambios",
            "Se ordena la demolición o reposición",
            "Se impone únicamente una multa"
        ],
        correcta: 1,
        explicacion: "Procede la reposición de la legalidad."
    },
    {
        texto: "Señale la afirmación MÁS precisa:",
        opciones: [
            "La suspensión es una sanción",
            "Es una medida cautelar de protección de la legalidad",
            "Es una actuación voluntaria"
        ],
        correcta: 1,
        explicacion: "Tiene carácter cautelar."
    },
    {
        texto: "La legalización de obras implica:",
        opciones: [
            "Aceptar cualquier actuación realizada",
            "Ajustar la actuación a la normativa urbanística",
            "Sustituir la normativa aplicable"
        ],
        correcta: 1,
        explicacion: "Debe adecuarse a la normativa."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la legalización:",
        opciones: [
            "Procede si la actuación es conforme a la normativa",
            "Puede implicar modificaciones de la obra",
            "Se concede automáticamente en todos los casos"
        ],
        correcta: 2,
        explicacion: "No se concede automáticamente."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre los actos de edificación o uso del suelo finalizados sin licencia:",
        opciones: [
            "La Administración no puede actuar una vez terminados",
            "Dan lugar a actuaciones de restablecimiento de la legalidad urbanística",
            "Se consideran automáticamente legalizados por el transcurso del tiempo"
        ],
        correcta: 1,
        explicacion: "Pueden dar lugar a restauración de la legalidad."
    },
    {
        texto: "El conocimiento de una actuación finalizada determina que:",
        opciones: [
            "Se inicie el procedimiento de restauración si procede",
            "Se archive automáticamente el expediente",
            "Se entienda convalidada la actuación"
        ],
        correcta: 0,
        explicacion: "Se inicia procedimiento de restauración."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre actos finalizados:",
        opciones: [
            "Pueden ser objeto de legalización si cumplen la normativa",
            "Quedan fuera de cualquier actuación administrativa",
            "Pueden dar lugar a demolición"
        ],
        correcta: 1,
        explicacion: "No quedan fuera del control administrativo."
    },
    {
        texto: "La presunción de terminación de las obras implica:",
        opciones: [
            "Que no puede acreditarse lo contrario",
            "Que se entienden terminadas cuando están dispuestas para su uso sin actuaciones materiales posteriores",
            "Que se consideran terminadas desde su inicio"
        ],
        correcta: 1,
        explicacion: "Se basa en la aptitud para el uso."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la presunción:",
        opciones: [
            "Es absoluta y no admite prueba en contrario",
            "Puede desvirtuarse mediante prueba",
            "Se aplica únicamente a obras con licencia"
        ],
        correcta: 1,
        explicacion: "Admite prueba en contrario."
    },
    {
        texto: "El momento de terminación de una obra se determina:",
        opciones: [
            "Por la voluntad del promotor",
            "Por la situación objetiva de aptitud para el uso",
            "Por la fecha de inicio de las obras"
        ],
        correcta: 1,
        explicacion: "Se basa en criterio objetivo."
    },
    {
        texto: "Señale la afirmación INCORRECTA:",
        opciones: [
            "Las obras terminadas pueden ser objeto de inspección",
            "La Administración pierde competencias tras la terminación",
            "Pueden adoptarse medidas de restauración"
        ],
        correcta: 1,
        explicacion: "La Administración mantiene sus competencias."
    },
    {
        texto: "La actuación administrativa frente a obras terminadas puede incluir:",
        opciones: [
            "Exclusivamente sanciones económicas",
            "Medidas de restauración y sanción",
            "Únicamente advertencias sin efectos jurídicos"
        ],
        correcta: 1,
        explicacion: "Incluye restauración y sanción."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la legalización posterior:",
        opciones: [
            "Solo procede antes de la terminación de la obra",
            "Puede plantearse también respecto de obras finalizadas",
            "No es posible una vez finalizada la actuación"
        ],
        correcta: 1,
        explicacion: "Puede plantearse tras la terminación."
    },
    {
        texto: "En relación con los actos finalizados, señale la opción INCORRECTA:",
        opciones: [
            "Pueden generar responsabilidades administrativas",
            "Quedan automáticamente regularizados si no se detectan",
            "Pueden dar lugar a reposición de la legalidad"
        ],
        correcta: 1,
        explicacion: "No se regularizan automáticamente."
    },
    {
        texto: "La suspensión de los efectos de una licencia urbanística procede cuando:",
        opciones: [
            "Existan dudas sobre su oportunidad administrativa",
            "Se estime que la licencia constituye infracción urbanística grave o muy grave",
            "El interesado lo solicite voluntariamente"
        ],
        correcta: 1,
        explicacion: "Procede cuando la licencia es constitutiva de infracción grave o muy grave."
    },
    {
        texto: "La suspensión de la eficacia de la licencia implica:",
        opciones: [
            "La anulación automática de la licencia",
            "La paralización de las obras o del uso autorizado",
            "La legalización provisional de la actuación"
        ],
        correcta: 1,
        explicacion: "Supone la paralización de la actividad autorizada."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la suspensión:",
        opciones: [
            "Puede acordarse por el órgano competente",
            "Produce efectos inmediatos",
            "Supone la extinción definitiva de la licencia"
        ],
        correcta: 2,
        explicacion: "No extingue la licencia, solo suspende su eficacia."
    },
    {
        texto: "La revisión de una licencia urbanística puede realizarse:",
        opciones: [
            "Únicamente a instancia del interesado",
            "De oficio en determinados supuestos legalmente previstos",
            "Solo mediante resolución judicial"
        ],
        correcta: 1,
        explicacion: "Puede realizarse de oficio conforme a la normativa."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la revisión:",
        opciones: [
            "Procede en cualquier caso sin limitaciones",
            "Está sujeta a los supuestos y plazos establecidos legalmente",
            "Se basa exclusivamente en criterios de oportunidad"
        ],
        correcta: 1,
        explicacion: "Está limitada por la normativa."
    },
    {
        texto: "La revisión de licencias puede afectar a:",
        opciones: [
            "Licencias válidas y ajustadas a derecho",
            "Licencias que constituyan infracción urbanística grave o muy grave",
            "Licencias caducadas exclusivamente"
        ],
        correcta: 1,
        explicacion: "Se centra en licencias ilegales graves."
    },
    {
        texto: "Señale la afirmación INCORRECTA:",
        opciones: [
            "La revisión puede implicar la anulación de la licencia",
            "La suspensión es previa a la revisión en ciertos casos",
            "La revisión sustituye automáticamente al procedimiento sancionador"
        ],
        correcta: 2,
        explicacion: "Son procedimientos distintos."
    },
    {
        texto: "La nulidad o revisión de la licencia implica:",
        opciones: [
            "La legalización automática de las obras",
            "La posible adopción de medidas de restablecimiento de la legalidad",
            "La extinción de cualquier responsabilidad"
        ],
        correcta: 1,
        explicacion: "Puede implicar restauración de la legalidad."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre los efectos de la suspensión:",
        opciones: [
            "Impide cualquier actuación administrativa posterior",
            "Puede mantenerse mientras se tramita el procedimiento correspondiente",
            "Tiene carácter meramente simbólico"
        ],
        correcta: 1,
        explicacion: "Se mantiene durante la tramitación."
    },
    {
        texto: "La relación entre suspensión y revisión implica que:",
        opciones: [
            "Son medidas independientes sin conexión",
            "La suspensión puede adoptarse como medida previa a la revisión",
            "La revisión siempre precede a la suspensión"
        ],
        correcta: 1,
        explicacion: "La suspensión puede ser previa."
    },
    {
        texto: "Las infracciones urbanísticas se clasifican en:",
        opciones: [
            "Leves, graves y muy graves",
            "Simples, complejas y especiales",
            "Administrativas, civiles y penales"
        ],
        correcta: 0,
        explicacion: "Clasificación clásica: leves, graves y muy graves."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la clasificación:",
        opciones: [
            "Depende exclusivamente del daño económico causado",
            "Se determina conforme a la normativa urbanística aplicable",
            "Se basa en la voluntad del infractor"
        ],
        correcta: 1,
        explicacion: "Se regula normativamente."
    },
    {
        texto: "Constituyen infracciones muy graves aquellas actuaciones que:",
        opciones: [
            "Suponen incumplimientos formales sin relevancia urbanística",
            "Afectan de forma grave al orden urbanístico o al uso del suelo",
            "No requieren licencia en ningún caso"
        ],
        correcta: 1,
        explicacion: "Las muy graves afectan de forma intensa al orden urbanístico."
    },
    {
        texto: "Señale la afirmación INCORRECTA:",
        opciones: [
            "Las infracciones leves tienen menor entidad",
            "Las infracciones graves afectan de forma significativa al orden urbanístico",
            "Las infracciones muy graves carecen de consecuencias relevantes"
        ],
        correcta: 2,
        explicacion: "Son las más graves, con mayores consecuencias."
    },
    {
        texto: "Las infracciones leves se caracterizan por:",
        opciones: [
            "Afectar gravemente al planeamiento",
            "Tener escasa entidad y menor impacto urbanístico",
            "Implicar siempre demolición"
        ],
        correcta: 1,
        explicacion: "Son de menor entidad."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre las infracciones graves:",
        opciones: [
            "No afectan al orden urbanístico",
            "Suponen incumplimientos relevantes de la normativa urbanística",
            "Carecen de sanción"
        ],
        correcta: 1,
        explicacion: "Tienen impacto relevante."
    },
    {
        texto: "La tipificación de las infracciones responde al principio de:",
        opciones: [
            "Oportunidad administrativa",
            "Legalidad y tipicidad",
            "Discrecionalidad técnica"
        ],
        correcta: 1,
        explicacion: "Se rige por legalidad y tipicidad."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre las infracciones:",
        opciones: [
            "Deben estar tipificadas en la normativa",
            "Pueden sancionarse sin regulación previa",
            "Se clasifican según su gravedad"
        ],
        correcta: 1,
        explicacion: "No pueden sancionarse sin tipificación."
    },
    {
        texto: "La gravedad de la infracción se determina:",
        opciones: [
            "Por la voluntad del infractor",
            "Por los criterios establecidos en la normativa",
            "Por el criterio del inspector"
        ],
        correcta: 1,
        explicacion: "Se basa en la normativa."
    },
    {
        texto: "Señale la afirmación MÁS precisa:",
        opciones: [
            "Todas las infracciones tienen la misma sanción",
            "La clasificación influye en la cuantía de la sanción",
            "La gravedad no afecta a la sanción"
        ],
        correcta: 1,
        explicacion: "La gravedad determina la sanción."
    },
    {
        texto: "Son responsables de las infracciones urbanísticas:",
        opciones: [
            "Únicamente los propietarios del suelo",
            "Quienes promuevan, construyan o ejecuten las actuaciones constitutivas de infracción",
            "Exclusivamente los técnicos redactores del proyecto"
        ],
        correcta: 1,
        explicacion: "Incluye a promotores, constructores y ejecutores."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la responsabilidad:",
        opciones: [
            "Es exclusivamente individual y no puede compartirse",
            "Puede ser solidaria entre varios sujetos intervinientes",
            "Recae únicamente en el titular de la licencia"
        ],
        correcta: 1,
        explicacion: "Puede existir responsabilidad solidaria."
    },
    {
        texto: "En relación con los técnicos intervinientes:",
        opciones: [
            "Nunca pueden ser responsables",
            "Pueden ser responsables si intervienen en la infracción",
            "Son responsables automáticamente en todos los casos"
        ],
        correcta: 1,
        explicacion: "Depende de su intervención."
    },
    {
        texto: "Señale la afirmación INCORRECTA:",
        opciones: [
            "El promotor puede ser responsable",
            "El constructor puede ser responsable",
            "El propietario nunca puede ser responsable"
        ],
        correcta: 2,
        explicacion: "El propietario también puede ser responsable."
    },
    {
        texto: "La responsabilidad en materia urbanística:",
        opciones: [
            "Depende exclusivamente de la titularidad del suelo",
            "Se vincula a la participación en la actuación infractora",
            "Se limita a quien solicita la licencia"
        ],
        correcta: 1,
        explicacion: "Se basa en la participación en la infracción."
    },
    {
        texto: "Señale la afirmación MÁS precisa:",
        opciones: [
            "Solo responde quien ejecuta materialmente la obra",
            "Pueden responder varios sujetos por una misma infracción",
            "La responsabilidad es siempre subsidiaria"
        ],
        correcta: 1,
        explicacion: "Puede haber varios responsables."
    },
    {
        texto: "En caso de pluralidad de responsables:",
        opciones: [
            "Se excluye la responsabilidad individual",
            "Puede existir responsabilidad solidaria",
            "Se sanciona únicamente al principal"
        ],
        correcta: 1,
        explicacion: "Puede ser solidaria."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre los sujetos responsables:",
        opciones: [
            "Incluyen a quienes ordenan la actuación",
            "Incluyen a quienes ejecutan la actuación",
            "Excluyen a quienes participan indirectamente"
        ],
        correcta: 2,
        explicacion: "También pueden incluir participación indirecta."
    },
    {
        texto: "La responsabilidad administrativa urbanística:",
        opciones: [
            "Se extingue con la transmisión del inmueble",
            "Puede mantenerse independientemente de la transmisión",
            "Depende exclusivamente de la propiedad actual"
        ],
        correcta: 1,
        explicacion: "No se extingue automáticamente con la transmisión."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la imputación:",
        opciones: [
            "Se basa en la intervención en la infracción",
            "Depende de la capacidad económica",
            "Se determina por la antigüedad del inmueble"
        ],
        correcta: 0,
        explicacion: "Se basa en la participación en la infracción."
    },
    {
        texto: "Las circunstancias agravantes en materia urbanística tienen como efecto:",
        opciones: [
            "Excluir la responsabilidad administrativa",
            "Incrementar la gravedad de la infracción a efectos sancionadores",
            "Anular la sanción impuesta"
        ],
        correcta: 1,
        explicacion: "Aumentan la gravedad y la sanción."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre las agravantes:",
        opciones: [
            "Se aplican automáticamente en todos los casos",
            "Se valoran conforme a las circunstancias concurrentes",
            "Dependen exclusivamente de la voluntad administrativa"
        ],
        correcta: 1,
        explicacion: "Se valoran según el caso concreto."
    },
    {
        texto: "Constituye circunstancia agravante:",
        opciones: [
            "La reparación voluntaria del daño",
            "La reiteración o reincidencia en la infracción",
            "La colaboración con la Administración"
        ],
        correcta: 1,
        explicacion: "La reincidencia es agravante."
    },
    {
        texto: "Señale la afirmación INCORRECTA:",
        opciones: [
            "Las agravantes pueden aumentar la sanción",
            "Las agravantes eliminan la infracción",
            "Las agravantes se aplican conforme a la normativa"
        ],
        correcta: 1,
        explicacion: "No eliminan la infracción."
    },
    {
        texto: "Las circunstancias atenuantes tienen como efecto:",
        opciones: [
            "Incrementar la sanción",
            "Reducir la responsabilidad o la sanción",
            "Eliminar automáticamente la infracción"
        ],
        correcta: 1,
        explicacion: "Reducen la sanción."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre las atenuantes:",
        opciones: [
            "Se aplican sin necesidad de valoración",
            "Se valoran en función de las circunstancias del caso",
            "Excluyen siempre la sanción"
        ],
        correcta: 1,
        explicacion: "Se aplican tras valoración."
    },
    {
        texto: "Constituye circunstancia atenuante:",
        opciones: [
            "La reincidencia en la infracción",
            "La reparación voluntaria del daño causado",
            "La ocultación de la infracción"
        ],
        correcta: 1,
        explicacion: "La reparación voluntaria atenúa la sanción."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre las atenuantes:",
        opciones: [
            "Pueden reducir la sanción",
            "Se aplican conforme a la normativa",
            "Eliminan la responsabilidad administrativa"
        ],
        correcta: 2,
        explicacion: "No eliminan la responsabilidad."
    },
    {
        texto: "La aplicación de agravantes y atenuantes:",
        opciones: [
            "Es discrecional sin límites",
            "Debe ajustarse a criterios legales",
            "Depende exclusivamente del inspector"
        ],
        correcta: 1,
        explicacion: "Se rige por la normativa."
    },
    {
        texto: "Señale la afirmación MÁS precisa:",
        opciones: [
            "Las agravantes y atenuantes son irrelevantes en la sanción",
            "Influyen en la graduación de la sanción",
            "Determinan la inexistencia de infracción"
        ],
        correcta: 1,
        explicacion: "Sirven para graduar la sanción."
    },
    {
        texto: "Las sanciones urbanísticas se imponen en función de:",
        opciones: [
            "La voluntad del órgano sancionador",
            "La gravedad de la infracción y las circunstancias concurrentes",
            "La capacidad económica del infractor exclusivamente"
        ],
        correcta: 1,
        explicacion: "Se basan en la gravedad y circunstancias."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la cuantía de las sanciones:",
        opciones: [
            "Es fija para cada tipo de infracción",
            "Se gradúa dentro de los límites establecidos legalmente",
            "Depende exclusivamente del valor del suelo"
        ],
        correcta: 1,
        explicacion: "Se fija dentro de rangos legales."
    },
    {
        texto: "Las infracciones muy graves llevan aparejadas:",
        opciones: [
            "Sanciones de menor cuantía",
            "Sanciones de mayor gravedad y cuantía",
            "Únicamente apercibimientos"
        ],
        correcta: 1,
        explicacion: "Son las más graves."
    },
    {
        texto: "Señale la afirmación INCORRECTA:",
        opciones: [
            "Las sanciones deben ser proporcionales",
            "Las sanciones pueden superar los límites legales",
            "Las sanciones dependen de la gravedad"
        ],
        correcta: 1,
        explicacion: "No pueden superar límites legales."
    },
    {
        texto: "La proporcionalidad en la sanción implica:",
        opciones: [
            "Igual sanción para todas las infracciones",
            "Adecuación entre la infracción y la sanción impuesta",
            "Aplicación automática de la sanción máxima"
        ],
        correcta: 1,
        explicacion: "Debe existir adecuación."
    },
    {
        texto: "Señale la afirmación MÁS precisa:",
        opciones: [
            "Las sanciones tienen carácter recaudatorio",
            "Las sanciones tienen finalidad disuasoria y de cumplimiento",
            "Las sanciones sustituyen la restauración de la legalidad"
        ],
        correcta: 1,
        explicacion: "Tienen función disuasoria."
    },
    {
        texto: "La imposición de sanciones:",
        opciones: [
            "Excluye la restauración de la legalidad",
            "Es compatible con medidas de restauración",
            "Sustituye cualquier otra medida"
        ],
        correcta: 1,
        explicacion: "Son compatibles."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre las sanciones:",
        opciones: [
            "Se determinan conforme a la normativa",
            "Pueden imponerse sin procedimiento",
            "Se gradúan según circunstancias"
        ],
        correcta: 1,
        explicacion: "Siempre requieren procedimiento."
    },
    {
        texto: "La graduación de la sanción tiene en cuenta:",
        opciones: [
            "Únicamente el tipo de infracción",
            "Circunstancias agravantes y atenuantes",
            "Exclusivamente la voluntad del infractor"
        ],
        correcta: 1,
        explicacion: "Incluye agravantes y atenuantes."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la sanción:",
        opciones: [
            "Tiene carácter automático",
            "Se determina tras la valoración de los hechos",
            "Depende exclusivamente del inspector"
        ],
        correcta: 1,
        explicacion: "Requiere valoración previa."
    },
    {
        texto: "El procedimiento sancionador en materia urbanística se rige por:",
        opciones: [
            "El principio de oportunidad administrativa",
            "La normativa general de procedimiento administrativo y normativa urbanística",
            "La decisión discrecional del órgano competente"
        ],
        correcta: 1,
        explicacion: "Se rige por normativa administrativa y urbanística."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre el procedimiento:",
        opciones: [
            "Puede iniciarse sin acto formal",
            "Debe iniciarse mediante acuerdo de iniciación",
            "Depende exclusivamente de la denuncia del interesado"
        ],
        correcta: 1,
        explicacion: "Requiere acuerdo de iniciación."
    },
    {
        texto: "La fase de instrucción del procedimiento incluye:",
        opciones: [
            "Únicamente la propuesta de sanción",
            "La práctica de pruebas y recopilación de hechos",
            "La ejecución de la sanción"
        ],
        correcta: 1,
        explicacion: "Incluye pruebas y hechos."
    },
    {
        texto: "Señale la afirmación INCORRECTA:",
        opciones: [
            "El procedimiento incluye audiencia al interesado",
            "La resolución puede adoptarse sin motivación",
            "Debe respetar las garantías procedimentales"
        ],
        correcta: 1,
        explicacion: "La resolución debe estar motivada."
    },
    {
        texto: "La resolución del procedimiento sancionador:",
        opciones: [
            "Puede ser verbal",
            "Debe ser motivada y ajustada a la normativa",
            "Depende exclusivamente del instructor"
        ],
        correcta: 1,
        explicacion: "Debe ser motivada."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la competencia:",
        opciones: [
            "Corresponde exclusivamente a la Administración estatal",
            "Se atribuye a los órganos administrativos competentes según la normativa",
            "Depende del inspector urbanístico"
        ],
        correcta: 1,
        explicacion: "Se determina normativamente."
    },
    {
        texto: "La prescripción de las infracciones implica:",
        opciones: [
            "La eliminación automática de la infracción desde su comisión",
            "La imposibilidad de sancionar una vez transcurrido el plazo legal",
            "La suspensión del procedimiento administrativo"
        ],
        correcta: 1,
        explicacion: "Impide sancionar tras el plazo."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la prescripción:",
        opciones: [
            "Se determina por la normativa",
            "Depende de la gravedad de la infracción",
            "Es ilimitada en el tiempo"
        ],
        correcta: 2,
        explicacion: "Siempre tiene límite temporal."
    },
    {
        texto: "La prescripción de las sanciones implica:",
        opciones: [
            "La extinción de la sanción por el transcurso del tiempo",
            "La anulación de la infracción",
            "La legalización de la actuación"
        ],
        correcta: 0,
        explicacion: "Se extingue la sanción."
    },
    {
        texto: "Señale la afirmación MÁS precisa:",
        opciones: [
            "La prescripción afecta solo a las infracciones",
            "Afecta tanto a infracciones como a sanciones",
            "No tiene efectos en el ámbito urbanístico"
        ],
        correcta: 1,
        explicacion: "Afecta a ambos."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la relación entre restauración de la legalidad y sanción:",
        opciones: [
            "La imposición de sanción excluye la restauración de la legalidad urbanística",
            "Ambas son independientes y pueden coexistir",
            "La restauración solo procede si no hay sanción"
        ],
        correcta: 1,
        explicacion: "Son medidas distintas y compatibles."
    },
    {
        texto: "La suspensión de obras sin licencia se configura como:",
        opciones: [
            "Una sanción administrativa anticipada",
            "Una medida cautelar dirigida a evitar la consolidación de la infracción",
            "Un acto discrecional sin efectos jurídicos inmediatos"
        ],
        correcta: 1,
        explicacion: "Es una medida cautelar, no sancionadora."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la inspección urbanística:",
        opciones: [
            "Puede dar lugar a la incoación de procedimientos sancionadores",
            "Tiene presunción de veracidad en sus actas",
            "Puede imponer directamente sanciones"
        ],
        correcta: 2,
        explicacion: "La inspección no impone sanciones directamente."
    },
    {
        texto: "En relación con las licencias urbanísticas ilegales:",
        opciones: [
            "No pueden ser objeto de revisión una vez otorgadas",
            "Pueden ser suspendidas y posteriormente revisadas",
            "Se consideran válidas mientras no se ejecuten las obras"
        ],
        correcta: 1,
        explicacion: "Pueden suspenderse y revisarse."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la prescripción:",
        opciones: [
            "Impide la restauración de la legalidad urbanística",
            "Impide la imposición de sanciones transcurrido el plazo legal",
            "Legaliza automáticamente la actuación realizada"
        ],
        correcta: 1,
        explicacion: "Afecta a la sanción, no a la legalidad material."
    },
    {
        texto: "La responsabilidad en materia urbanística se caracteriza por:",
        opciones: [
            "Ser exclusivamente individual",
            "Poder ser solidaria entre los intervinientes",
            "Recaer únicamente en el propietario del suelo"
        ],
        correcta: 1,
        explicacion: "Puede ser solidaria."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la legalización de obras:",
        opciones: [
            "Procede automáticamente tras la suspensión",
            "Requiere adecuación a la normativa urbanística vigente",
            "Sustituye la necesidad de licencia"
        ],
        correcta: 1,
        explicacion: "Debe ajustarse a la normativa."
    },
    {
        texto: "En relación con las infracciones muy graves:",
        opciones: [
            "Se caracterizan por su escasa entidad",
            "Suponen una alteración grave del orden urbanístico",
            "No llevan aparejadas sanciones económicas relevantes"
        ],
        correcta: 1,
        explicacion: "Son las de mayor impacto."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre las circunstancias agravantes:",
        opciones: [
            "Incrementan la sanción",
            "Se valoran conforme a la normativa",
            "Eliminan la infracción"
        ],
        correcta: 2,
        explicacion: "No eliminan la infracción."
    },
    {
        texto: "La ejecución subsidiaria en materia urbanística:",
        opciones: [
            "Tiene carácter sancionador",
            "Es un medio de ejecución forzosa de obligaciones",
            "Sustituye la potestad sancionadora"
        ],
        correcta: 1,
        explicacion: "Es ejecución forzosa, no sanción."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre actos finalizados sin licencia:",
        opciones: [
            "Quedan fuera de cualquier control administrativo",
            "Pueden ser objeto de restauración de la legalidad",
            "Se consideran legalizados por el mero transcurso del tiempo"
        ],
        correcta: 1,
        explicacion: "Siguen sujetos a control."
    },
    {
        texto: "El procedimiento sancionador se caracteriza por:",
        opciones: [
            "La ausencia de garantías para el interesado",
            "El respeto a los principios de legalidad y tipicidad",
            "La discrecionalidad absoluta de la Administración"
        ],
        correcta: 1,
        explicacion: "Se rige por principios jurídicos."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la graduación de sanciones:",
        opciones: [
            "Se fija automáticamente según la infracción",
            "Tiene en cuenta circunstancias agravantes y atenuantes",
            "Depende exclusivamente del órgano sancionador"
        ],
        correcta: 1,
        explicacion: "Se gradúa según circunstancias."
    },
    {
        texto: "La disciplina urbanística tiene como finalidad:",
        opciones: [
            "Exclusivamente sancionar conductas",
            "Garantizar el cumplimiento del ordenamiento urbanístico",
            "Regular el valor económico del suelo"
        ],
        correcta: 1,
        explicacion: "Busca garantizar la legalidad urbanística."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre la suspensión de licencias:",
        opciones: [
            "Puede acordarse en determinados supuestos",
            "Tiene carácter definitivo",
            "Puede preceder a la revisión de la licencia"
        ],
        correcta: 1,
        explicacion: "Es una medida provisional."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre la restauración de la legalidad:",
        opciones: [
            "Tiene carácter sancionador",
            "Tiene como finalidad reponer la realidad física alterada",
            "Depende exclusivamente de la sanción"
        ],
        correcta: 1,
        explicacion: "No es sanción, es restauración."
    },
    {
        texto: "La suspensión de obras se configura como:",
        opciones: [
            "Una sanción administrativa",
            "Una medida cautelar previa",
            "Una medida definitiva"
        ],
        correcta: 1,
        explicacion: "Es medida cautelar."
    },
    {
        texto: "Señale la afirmación INCORRECTA sobre las infracciones:",
        opciones: [
            "Deben estar tipificadas",
            "Se sancionan conforme a la normativa",
            "Pueden sancionarse sin regulación previa"
        ],
        correcta: 2,
        explicacion: "No pueden sancionarse sin tipificación."
    },
    {
        texto: "La responsabilidad urbanística:",
        opciones: [
            "Es siempre individual",
            "Puede ser solidaria",
            "Recae solo en el propietario"
        ],
        correcta: 1,
        explicacion: "Puede ser solidaria."
    },
    {
        texto: "La prescripción de infracciones implica:",
        opciones: [
            "La legalización automática",
            "La imposibilidad de sancionar",
            "La desaparición del daño urbanístico"
        ],
        correcta: 1,
        explicacion: "Impide sancionar."
    },
    {
        texto: "Señale la afirmación MÁS precisa sobre sanciones:",
        opciones: [
            "Sustituyen la restauración",
            "Son compatibles con la restauración",
            "Eliminan la infracción"
        ],
        correcta: 1,
        explicacion: "Son compatibles."
    },
    {
        texto: "La inspección urbanística:",
        opciones: [
            "Impone sanciones",
            "Tiene funciones de control y vigilancia",
            "Legaliza actuaciones"
        ],
        correcta: 1,
        explicacion: "No sanciona directamente."
    },
    {
        texto: "La revisión de licencias:",
        opciones: [
            "Es automática",
            "Está sujeta a supuestos legales",
            "Depende del interesado"
        ],
        correcta: 1,
        explicacion: "Está regulada."
    }
]
},

{
    id: 21,
    nombre: "Tema 21 - Contratos Sector Público I",
    icono: "📝",
    preguntas: []
},

{
    id: 22,
    nombre: "Tema 22 - Contratos Sector Público II",
    icono: "📝",
    preguntas: []
}

];
