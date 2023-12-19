import { Generica, Question_test1 } from "./data.model";

interface DataStruct {
  title: string;
  description: string;
  data: Question_test1[];
}

export const genero_list: Generica[] = [
  { value: 'M', viewValue: 'Masculino' },
  { value: 'F', viewValue: 'Femenino' },
  { value: 'O', viewValue: 'Otro' }
];

export const carrera_list: Generica[] = [
  {value: 'Derecho', viewValue: 'Derecho'},
  {value: 'Medicina', viewValue: 'Medicina'},
  {value: 'Ingeniería Civil', viewValue: 'Ingeniería Civil'},
  {value: 'Administración de Empresas', viewValue: 'Administración de Empresas'},
  {value: 'Contabilidad', viewValue: 'Contabilidad'},
  {value: 'Psicología', viewValue: 'Psicología'},
  {value: 'Arquitectura', viewValue: 'Arquitectura'},
  {value: 'Educación', viewValue: 'Educación'},
  {value: 'Ingeniería de Sistemas', viewValue: 'Ingeniería de Sistemas'},
  {value: 'Economía', viewValue: 'Economía'},
  {value: 'Comunicación Social', viewValue: 'Comunicación'},
  {value: 'Enfermería', viewValue: 'Enfermería'},
  {value: 'Odontología', viewValue: 'Odontología'},
  {value: 'Diseño Gráfico', viewValue: 'Diseño'},
  {value: 'Marketing', viewValue: 'Marketing'},
  {value: 'Ciencias de la Computación', viewValue: 'Ciencias'},
  {value: 'Ciencias Políticas', viewValue: 'Ciencias'},
  {value: 'Historia', viewValue: 'Historia'},
  {value: 'Turismo', viewValue: 'Turismo'},
  {value: 'Ingeniería Industrial', viewValue: 'Ingeniería'},
  {value: 'Farmacia', viewValue: 'Farmacia'},
  {value: 'Nutrición y Dietética', viewValue: 'Nutrición'},
  {value: 'Ciencias Ambientales', viewValue: 'Ciencias'},
  {value: 'Relaciones Internacionales', viewValue: 'Relaciones'},
  {value: 'Sociología', viewValue: 'Sociología'},
];

export const distritos_list: Generica[] = [
  { value: 'Ancón', viewValue: 'Ancón' },
  { value: 'Ate', viewValue: 'Ate' },
  { value: 'Barranco', viewValue: 'Barranco' },
  { value: 'Breña', viewValue: 'Breña' },
  { value: 'Carabayllo', viewValue: 'Carabayllo' },
  { value: 'Chaclacayo', viewValue: 'Chaclacayo' },
  { value: 'Chorrillos', viewValue: 'Chorrillos' },
  { value: 'Cieneguilla', viewValue: 'Cieneguilla' },
  { value: 'Comas', viewValue: 'Comas' },
  { value: 'El Agustino', viewValue: 'El Agustino' },
  { value: 'Independencia', viewValue: 'Independencia' },
  { value: 'Jesús María', viewValue: 'Jesús María' },
  { value: 'La Molina', viewValue: 'La Molina' },
  { value: 'La Victoria', viewValue: 'La Victoria' },
  { value: 'Lince', viewValue: 'Lince' },
  { value: 'Los Olivos', viewValue: 'Los Olivos' },
  { value: 'Lurigancho-Chosica', viewValue: 'Lurigancho-Chosica' },
  { value: 'Lurín', viewValue: 'Lurín' },
  { value: 'Magdalena del', viewValue: 'Magdalena del Mar' },
  { value: 'Miraflores', viewValue: 'Miraflores' },
  { value: 'Pachacámac', viewValue: 'Pachacámac' },
  { value: 'Pucusana', viewValue: 'Pucusana' },
  { value: 'Pueblo Libre', viewValue: 'Pueblo Libre' },
  { value: 'Puente Piedra', viewValue: 'Puente Piedra' },
  { value: 'Punta Hermosa', viewValue: 'Punta Hermosa' },
  { value: 'Punta Negra', viewValue: 'Punta Negra' },
  { value: 'Rímac', viewValue: 'Rímac' },
  { value: 'San Bartolo', viewValue: 'San Bartolo' },
  { value: 'San Borja', viewValue: 'San Borja' },
  { value: 'San Isidro', viewValue: 'San Isidro' },
  { value: 'San Juan de Lurigancho', viewValue: 'San Juan de Lurigancho' },
  { value: 'San Juan de Miraflores', viewValue: 'San Juan de Miraflores' },
  { value: 'San Luis', viewValue: 'San Luis' },
  { value: 'San Martín de Porres', viewValue: 'San Martín de Porres' },
  { value: 'San Miguel', viewValue: 'San Miguel' },
  { value: 'Santa Anita', viewValue: 'Santa Anita' },
  { value: 'Santa María del Mar', viewValue: 'Santa María del Mar' },
  { value: 'Santa Rosa', viewValue: 'Santa Rosa' },
  { value: 'Santiago de Surco', viewValue: 'Santiago de Surco' },
  { value: 'Surquillo', viewValue: 'Surquillo' },
  { value: 'Villa El Salvador', viewValue: 'Villa El Salvador' },
  { value: 'Villa María del Triunfo', viewValue: 'Villa María del Triunfo' },
  { value: 'Callao', viewValue: 'Callao' }
];

export const puestos_list: Generica[] = [
  { value: 'Asistente', viewValue: 'Asistente'},
  { value: 'Gerente', viewValue: 'Gerente'},
  { value: 'Director', viewValue: 'Director'},
  { value: 'Analista', viewValue: 'Analista'},
  { value: 'Coordinador', viewValue: 'Coordinador'},
  { value: 'Especialista', viewValue: 'Especialista'},
  { value: 'Técnico', viewValue: 'Técnico'},
  { value: 'Ingeniero', viewValue: 'Ingeniero'},
  { value: 'Consultor', viewValue: 'Consultor'},
  { value: 'Investigador', viewValue: 'Investigador'},
  { value: 'Supervisor', viewValue: 'Supervisor'},
  { value: 'Operario', viewValue: 'Operario'},
  { value: 'Diseñador', viewValue: 'Diseñador'},
  { value: 'Programador', viewValue: 'Programador'},
  { value: 'Arquitecto', viewValue: 'Arquitecto'},
  { value: 'Contador', viewValue: 'Contador'},
  { value: 'Abogado', viewValue: 'Abogado'},
  { value: 'Médico', viewValue: 'Médico'},
  { value: 'Enfermero', viewValue: 'Enfermero'},
  { value: 'Psicólogo', viewValue: 'Psicólogo'},
  { value: 'Profesor', viewValue: 'Profesor'},
  { value: 'Investigador', viewValue: 'Investigador'},
  { value: 'Chef', viewValue: 'Chef'},
  { value: 'Secretario', viewValue: 'Secretario'},
  { value: 'Recepcionista', viewValue: 'Recepcionista'},
  { value: 'Asistente de Recursos Humanos', viewValue: 'Asistente de Recursos Humanos'},
  { value: 'Analista de Datos', viewValue: 'Analista de Datos'},
  { value: 'Analista de Marketing', viewValue: 'Analista de Marketing'},
  { value: 'Representante de Servicio al Cliente', viewValue: 'Representante de Servicio al Cliente'},
  { value: 'Operador de Máquina', viewValue: 'Operador de Máquina'},
  { value: 'Carpintero', viewValue: 'Carpintero'},
  { value: 'Electricista', viewValue: 'Electricista'},
  { value: 'Mecánico', viewValue: 'Mecánico'},
  { value: 'Chofer', viewValue: 'Chofer'},
  { value: 'Guardia de Seguridad', viewValue: 'Guardia de Seguridad'},
  { value: 'Camarero', viewValue: 'Camarero'},
  { value: 'Auxiliar Administrativo', viewValue: 'Auxiliar Administrativo'},
  { value: 'Jefe de Proyecto', viewValue: 'Jefe de Proyecto'},
  { value: 'Asesor Financiero', viewValue: 'Asesor Financiero'},
  { value: 'Diseñador Gráfico', viewValue: 'Diseñador Gráfico'},
  { value: 'Desarrollador Web', viewValue: 'Desarrollador Web'},
  { value: 'Investigador de Mercado', viewValue: 'Investigador de Mercado'},
  { value: 'Enfermero Registrado', viewValue: 'Enfermero Registrado'},
  { value: 'Terapeuta Físico', viewValue: 'Terapeuta Físico'},
  { value: 'Profesor de Secundaria', viewValue: 'Profesor de Secundaria'},
  { value: 'Psiquiatra', viewValue: 'Psiquiatra'},
  { value: 'Gerente de Ventas', viewValue: 'Gerente de Ventas'},
  { value: 'Gerente de Proyectos', viewValue: 'Gerente de Proyectos'},
  { value: 'Gerente de Recursos Humanos', viewValue: 'Gerente de Recursos Humanos'},
  { value: 'Gerente de Marketing', viewValue: 'Gerente de Marketing'}
];

export const grados_list: Generica[] = [
  { value: 'Educación Primaria', viewValue: 'Educación Primaria' },
  { value: 'Educación Secundaria', viewValue: 'Educación Secundaria' },
  { value: 'Licenciatura', viewValue: 'Licenciatura' },
  { value: 'Bachillerato', viewValue: 'Bachillerato' },
  { value: 'Maestría', viewValue: 'Maestría' },
  { value: 'Doctorado (Ph.D.)', viewValue: 'Doctorado (Ph.D.)' },
  { value: 'Diplomado', viewValue: 'Diplomado' },
  { value: 'Técnico', viewValue: 'Técnico' },
  { value: 'Certificaciones Profesionales', viewValue: 'Certificaciones Profesionales' },
  { value: 'Postgrado', viewValue: 'Postgrado' },
  { value: 'Especialización', viewValue: 'Especialización' },
  { value: 'Doctorado Honoris Causa', viewValue: 'Doctorado Honoris Causa' },
  { value: 'Cursos de Formación', viewValue: 'Cursos de Formación' },
  { value: 'Talleres y Seminarios', viewValue: 'Talleres y Seminarios' },
  { value: 'Ninguno', viewValue: 'Ninguno' }
];

export const dependencia_list: Generica[] = [
  { value: 'Dependiente', viewValue: 'Vive con Padres'},
  { value: 'Independiente', viewValue: 'Independiente'},
];

export const ciclo_list: Generica[] = [
  {value: 'I', viewValue: 'Ciclo I'},
  {value: 'II', viewValue: 'Ciclo II'},
  {value: 'III', viewValue: 'Ciclo III'},
  {value: 'IV', viewValue: 'Ciclo IV'},
  {value: 'V', viewValue: 'Ciclo V'},
  {value: 'VI', viewValue: 'Ciclo VI'},
  {value: 'VII', viewValue: 'Ciclo VII'},
  {value: 'VIII', viewValue: 'Ciclo VIII'},
  {value: 'IX', viewValue: 'Ciclo IX'},
  {value: 'X', viewValue: 'Ciclo X'},
  {value: 'XI', viewValue: 'Ciclo XI'},
  {value: 'XII', viewValue: 'Ciclo XII'},
  {value: 'XIII', viewValue: 'Ciclo XIII'},
  {value: 'XIV', viewValue: 'Ciclo XIV'},
  {value: 'XV', viewValue: 'Ciclo XV'}
];

const test2_opt = [
  { opt: '1 = Totalmente falso', value: 1},
  { opt: '2 = Bastante falso', value: 2},
  { opt: '3 = Más bien falso', value: 3},
  { opt: '4 = No sé, Ni verdadero ni falso', value: 4},
  { opt: '5 = Más bien verdadero', value: 5 },
  { opt: '6 = Bastante verdadero', value: 6},
  { opt: '7 = Totalmente verdadero', value: 7},
]

export const questions_test1: DataStruct = {
  title: 'Cuestionario caracterológico de Gastón Berger',
  description: `Esta es una prueba que te ayudará a conocerte mucho mejor.
  Para conseguirlo, solo tendrás que contestar las preguntas indicando tu respuesta
  de la siguiente manera: Cada pregunta contiene la respuesta que mejor describa una característica tuya,
  la cual deberás marcar.<br><br>
  <code>Ejemplo:<br><br>
  &nbsp;&nbsp;&nbsp;¿Le gusta salir a pasear con sus amigos? o<br>
  &nbsp;&nbsp;&nbsp;¿Prefiere salir solo (a)?</code>
  `,
  data: [
    {
      id: 1,
      answer_options: [
        { opt: '¿Toma Ud. a pecho las pequeñas cosas cuya importancia sin embargo sabe que es mínima? ¿Se altera a veces por insignificancias?', value: 9 },
        { opt: 'o ¿Solo le perturban los acontecimientos graves?', value: 1}
      ]
    },
    {
      id: 2,
      answer_options: [
        { opt: '¿Se entusiasma o se indigna con facilidad?', value: 9 },
        { opt: 'o ¿Acepta Ud. tranquilamente las cosas tal como son?', value: 1},
      ]
    },
    {
      id: 3,
      answer_options: [
        { opt: '¿Es Ud. susceptible, se siente herido (a) fácilmente y de manera profunda por una crítica algo viva o por una observación poco amable o burlona?', value: 9 },
        { opt: 'o ¿Soporta las críticas sin sentirse lastimado? ', value: 1 },
      ]
    },
    {
      id: 4,
      answer_options: [
        { opt: '¿Se desconcentra con facilidad ante un suceso imprevisto? ¿Se sobresalta cuando lo llaman intempestivamente? ¿Palidece o se ruboriza con facilidad?', value: 9 },
        { opt: 'o ¿No se desconcierta Ud. sino muy difícilmente?', value: 1 },
      ]
    },
    {
      id: 5,
      answer_options: [
        { opt: '¿Se acelera Ud. al hablar? ¿Eleva la voz en una conversación? ¿Siente la necesidad de emplear términos violentos o palabras demasiado expresiva?', value: 9 },
        { opt: 'o ¿Conversa Ud. con calma, sin prisa, de una manera reposada?', value: 1 },
      ]
    },
    {
      id: 6,
      answer_options: [
        { opt: '¿Se siente Ud. angustiado frente a una tarea nueva o ante perspectiva de cambio?', value: 9 },
        { opt: 'o ¿Afronta Ud. la situación con serenidad?', value: 1 },
      ]
    },
    {
      id: 7,
      answer_options: [
        { opt: '¿Pasa Ud. alternativamente de la exaltación al abatimiento, de la alegría a la tristeza y viceversa, por tonterías y aún sin razón aparente?', value: 9 },
        { opt: 'o ¿Es de humor constante?', value: 1 },
      ]
    },
    {
      id: 8,
      answer_options: [
        { opt: '¿Se siente frecuentemente perturbado con dudas y escrúpulos, frente a actos sin importancia? ¿Conserva Ud. a menudo en la mente un pensamiento completamente inútil y que lo hace sufrir?', value: 9 },
        { opt: 'o ¿No conoce más que por excepción este penoso estado de preocupación?', value: 1 },
      ]
    },
    {
      id: 9,
      answer_options: [
        { opt: '¿A veces Ud. experimenta estados de miedo que le impiden realizar cualquier movimiento, o timidez que no le deja articular una sola palabra?', value: 9 },
        { opt: 'o ¿Por el contrario, jamás los ha experimentado?', value: 1 },
      ]
    },
    {
      id: 10,
      answer_options: [
        { opt: '¿Se siente con frecuencia infeliz?', value: 9 },
        { opt: 'o ¿Esta generalmente contento de su suerte, y aun cuando las cosas no sucedan como Ud. quiera, piensa más en lo que será necesario cambiar, que en sus propios sentimientos?', value: 1 },
      ]
    },
    {
      id: 11,
      answer_options: [
        { opt: '¿Suele usted ocuparse activamente durante sus horas libres (estudios suplementarios, alguna acción social, trabajos manuales o en cualquier tarea voluntaria)?', value: 9 },
        { opt: 'o ¿Para largos ratos sin hacer nada, soñando, meditando o simplemente distrayéndose (con lecturas entretenidas, escuchando la radio, etc.)?', value: 1 },
      ]
    },
    {
      id: 12,
      answer_options: [
        { opt: '¿Lleva a cabo inmediatamente y sin dificultad lo que hadecidido hacer?', value: 9 },
        { opt: 'o ¿Necesita usted realizar mucho esfuerzo para pasar de la idea a la acción, de la decisión a la acción?', value: 1 },
      ]
    },
    {
      id: 13,
      answer_options: [
        { opt: '¿Se siente estimulado por las dificultades y motivado por la idea del esfuerzo a realizar?', value: 9 },
        { opt: 'o ¿Se desanima usted fácilmente ante las dificultades o anteuna tarea que se anuncia demasiado ardua?', value: 1 },
      ]
    },
    {
      id: 14,
      answer_options: [
        { opt: '¿Prefiere Ud. pasar a la acción directamente o por lo menos forjar proyectos que realmente lo preparan para el porvenir?', value: 9 },
        { opt: 'o ¿Le gusta soñar y meditar, ya sea sobre el pasado o sobre el futuro, o también acerca de cosas puramente imaginarias?', value: 1},
      ]
    },
    {
      id: 15,
      answer_options: [
        { opt: '¿Hace Ud. lo que tiene que hacer enseguida y sin que le cueste mucho (por ejemplo, escribir una carta, arreglar un problema, etc.)?', value: 9 },
        { opt: 'o ¿Se siente inclinado a postergar cosas?', value: 1 },
      ]
    },
    {
      id: 16,
      answer_options: [
        { opt: '¿Toma Ud. decisiones rápidamente, aun en los casos difíciles?', value: 9 },
        { opt: 'o ¿Es indeciso y vacila generalmente por largo tiempo?', value: 1 },
      ]
    },
    {
      id: 17,
      answer_options: [
        { opt: '¿Es Ud. movedizo e inquieto (gesticula, se levanta súbitamente de su silla, va y viene por la habitación, etc.) en ausencia de toda emoción viva?', value: 9 },
        { opt: 'o ¿Esta generalmente quieto cuando una emoción no lo agita?', value: 1 },
      ]
    },
    {
      id: 18,
      answer_options: [
        { opt: '¿Jamás vacila usted al emprender una transformación útil cuando sabe que exigirá un gran esfuerzo de su parte?', value: 9 },
        { opt: 'o ¿Retrocedo ante el trabajo a realizar y prefiere contentarse, por dicha causa, con el estado de cosas en el que se encuentra?', value: 1 },
      ]
    },
    {
      id: 19,
      answer_options: [
        { opt: '¿Cuándo han impartido instrucciones para una determinada tarea, ¿Vigila su realización de cerca, asegurándose que todo quede bien hecho en las condiciones y en el momento requerido?', value: 9 },
        { opt: 'o ¿Se desentiende de la ejecución con el sentimiento de haberse desentendido de una preocupación?', value: 1 },
      ]
    },
    {
      id: 20,
      answer_options: [
        { opt: '¿Le gusta más actuar que observar pasivamente, resultándole aburrido el simple espectáculo?', value: 9 },
        { opt: 'o ¿Prefiere Ud. mirar que hacer (siente placer, por ejemplo, en observar a menudo y largamente el desarrollo de un juego que no practica?', value: 1 },
      ]
    },
    {
      id: 21,
      answer_options: [
        { opt: '¿Esta Ud. a menudo guiado en su acción por la idea de un porvenir lejano (ahorrar para la vejez, acumular o reunir materiales y datos para un trabajo a largo plazo, etc.) o por las consecuencias lejanas que puede tener?', value: 9 },
        { opt: 'o ¿Soporta las críticas sin sentirse lastimado? ', value: 1 },
      ]
    },
    {
      id: 22,
      answer_options: [
        { opt: '¿Prevé Ud. “todo lo que puede hacer” y se prepara cuidadosamente para cada caso (por ejemplo, en ocasión de sus viajes o paseos hace equipajes minuciosos, estudios de itinerarios, previsión de posibles accidentes, etc.)?', value: 9 },
        { opt: 'o ¿Prefiere atenerse a la inspiración del momento?', value: 1 },
      ]
    },
    {
      id: 23,
      answer_options: [
        { opt: '¿Tiene Ud. principios estrictos a los que trata de rodear?', value: 9 },
        { opt: 'o ¿Prefiere adaptarse a las circunstancias con flexibilidad?', value: 1 },
      ]
    },
    {
      id: 24,
      answer_options: [
        { opt: '¿Es Ud. constante en sus proyectos? ¿Termina siempre lo que ha comenzado?', value: 9 },
        { opt: 'o ¿Abandona con frecuencia una tarea antes de terminar empezándolo todo sin concluir nada?', value: 1 },
      ]
    },
    {
      id: 25,
      answer_options: [
        { opt: '¿Es Ud. constante en sus simpatías (continua con sus amistades de infancia o frecuenta regularmente a las mismas personas y los mismos círculos)?', value: 9 },
        { opt: 'o ¿Cambia a menudo de amigos (dejando, por ejemplo, sin razón alguna de ver a personas que antes frecuentaba)?', value: 1 },
      ]
    },
    {
      id: 26,
      answer_options: [
        { opt: '¿Después de un exceso de cólera o después de una afrenta se reconcilia con su circunstancial enemigo?', value: 1 },
        { opt: 'o ¿Durante cierto tiempo permanece de mal humor?', value: 5 },
        { opt: 'o más aún ¿Es difícil de reconciliar (resentimiento persistente)?', value: 9 }
      ]
    },
    {
      id: 27,
      answer_options: [
        { opt: '¿Tiene Ud. hábitos sumamente estrictos a los que está apegado? ¿Se siente atraído por el retorno regular de ciertos hechos?', value: 9 },
        { opt: 'o ¿Siente horror por todo lo que es habitual o previsto de antemano, siendo para Ud. lo espontáneo un elemento esencial de su vida?', value: 1 },
      ]
    },
    {
      id: 28,
      answer_options: [
        { opt: '¿Le gusta el orden, la simetría, la regularidad?', value: 9 },
        { opt: 'o bien ¿El orden le parece aburrido y siente la necesidad de encontrar por doquiera huella de fantasía?', value: 1 },
      ]
    },
    {
      id: 29,
      answer_options: [
        { opt: '¿Prevé con anticipación el empleo de su tiempo y de sus fuerzas? ¿Es amigo de hacer planes fijos, horarios y trazar programas?', value: 9 },
        { opt: 'o ¿Se lanza a la acción sin regla precisa, fijada de antemano?', value: 1},
      ]
    },
    {
      id: 30,
      answer_options: [
        { opt: '¿Cuándo ha adoptado una opinión se aferra a ella con insistencia?', value: 9 },
        { opt: 'o ¿Se convence fácilmente de lo contrario y se deja seducir por la novedad de una idea?', value: 1 },
      ]
    },
  ]
}

export const questions_test2: DataStruct = {
  title: 'CUESTIONARIO DEL PROPÓSITO EN LA VIDA',
  description: `Por favor, seleccione el número que más se aproxime a la afirmación que considere mejor
  describa su caso o con la cual más se identifique. En lo posible, evite las respuestas neutras (4)
  y evalúe entre los dos extremos.
  <br><br>
  <code>Ejemplo:<br><br>
  &nbsp;&nbsp;&nbsp;En la vida, por lo general me siento:<br>
  &nbsp;&nbsp;&nbsp;(7)...Entusiasmado exuberante</code>
  `,
  data: [
    { id: 1, question: 'En la vida, por lo general me siento', answer_options: [
      { opt: '1 Completamente aburrido', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Entusiasmado exuberante', value: 7},
    ]},
    { id: 2, question: 'La vida me parece', answer_options: [
      { opt: '1 Siempre emocionalmente', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Una rutina completa', value: 7},
    ]},
    { id: 3, question: 'En la vida yo', answer_options: [
      { opt: '1 No tengo ninguna meta u objetivo claro', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Tengo metas y objetivos muy claros', value: 7},
    ]},
    { id: 4, question: 'Mi existencia personal', answer_options: [
      { opt: '1 Carece de sentido y propósito', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Tiene mucho propósito y sentido', value: 7},
    ]},
    { id: 5, question: 'En mi vida, cada día es', answer_options: [
      { opt: '1 Constantemente nuevo y distinto', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Exactamente igual y monótono', value: 7},
    ]},
    { id: 6, question: 'Si pudiera elegir, yo', answer_options: [
      { opt: '1 Preferiría nunca haber nacido', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Desearía nueve vidas igual a esta', value: 7},
    ]},
    { id: 7, question: 'Después de jubilarme, yo deseo', answer_options: [
      { opt: '1 Hacer alguna de las cosas que siempre quise hacer', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Descansar completamente por el resto de mi vida', value: 7},
    ]},
    { id: 8, question: 'En el logro de las metas de mi vida', answer_options: [
      { opt: '1 No he hecho ningún progreso', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 He progresado hasta conseguir todas', value: 7},
    ]},
    { id: 9, question: 'Mi vida se encuentra', answer_options: [
      { opt: '1 Vacía, solo llena de desesperación', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Rebosante de cosas buenas y emocionantes', value: 7},
    ]},
    { id: 10, question: 'Si muriera hoy, sentiría que mi vida ha sido', answer_options: [
      { opt: '1 Muy provechosa', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Completamente inútil', value: 7},
    ]},
    { id: 11, question: 'Cuando pienso en mi vida', answer_options: [
      { opt: '1 Frecuentemente aburrido', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Es muy clara la razón por la que estoy acá', value: 7},
    ]},
    { id: 12, question: 'En relación con mi vida, el mundo', answer_options: [
      { opt: '1 Me confunde por completo', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Encaja muy bien con ella', value: 7},
    ]},
    { id: 13, question: 'Yo soy una persona', answer_options: [
      { opt: '1 Una persona irresponsable', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Entusiasmado exuberante', value: 7},
    ]},
    { id: 14, question: 'Acerca de la libertad del ser humano para elegir, yo creo que el ser humano', answer_options: [
      { opt: '1 Es absolutamente libre de hacer todas las elecciones de su vida', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Está completamente restringido por sus limitaciones de herencia y ambiente', value: 7},
    ]},
    { id: 15, question: 'Con respecto a la muerte, yo', answer_options: [
      { opt: '1 Estoy preparado y sin temor', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 No estoy preparado y me da temor', value: 7},
    ]},
    { id: 16, question: 'Con respecto al suicidio, yo', answer_options: [
      { opt: '1 He pensado seriamente en él como una salida', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Nunca lo he considerado', value: 7},
    ]},
    { id: 17, question: 'Mi habilidad para encontrar un sentimiento, un propósito o una misión en la vida es', answer_options: [
      { opt: '1 Muy grande', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Prácticamente nula', value: 7},
    ]},
    { id: 18, question: 'Mi vida se encuentra', answer_options: [
      { opt: '1 En mis manos y lo controlo', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Fuera de mis manos y es controlada por factores externos a mi voluntad', value: 7},
    ]},
    { id: 19, question: 'Mis labores diarias son las siguientes', answer_options: [
      { opt: '1 Una fuente de placer y satisfacción', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Una experiencia dolorosa y aburrida', value: 7},
    ]},
    { id: 20, question: 'Me he dado cuenta', answer_options: [
      { opt: '1 Que carezco de sentido y propósito en la vida', value: 1},
      { opt: '2', value: 2},
      { opt: '3', value: 3},
      { opt: '4 (Neutral)', value: 4},
      { opt: '5', value: 5 },
      { opt: '6', value: 6},
      { opt: '7 Tengo metas claras y un propósito satisfactorio para mi vida', value: 7},
    ]}
  ]
}
