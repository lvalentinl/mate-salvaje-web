// js/data.js - Datos desacoplados
const APP_DATA = {
  phoneWhatsApp: "51992237059",
  videoDemoUrl: "https://www.youtube.com/embed/D6AeAkii0es?autoplay=1&cc_load_policy=0&cc_lang_pref=es",
  


  materias: [
    { 
      id: "matematicas", 
      titulo: "Matemáticas", 
      subtitulo: "Aprende a razonar desde cero y sube tus promedios académicos.", 
      icono: "fa-calculator", 
      color: "bg-red-50 text-red-600 border-red-100" 
    },
    { 
      id: "fisica", 
      titulo: "Física", 
      subtitulo: "Entiende los fenómenos y fórmulas sin memorizar de memoria.", 
      icono: "fa-atom", 
      color: "bg-blue-50 text-blue-600 border-blue-100" 
    },
    { 
      id: "quimica", 
      titulo: "Química", 
      subtitulo: "Domina la tabla periódica, estequiometría y reacciones fácilmente.", 
      icono: "fa-flask", 
      color: "bg-amber-50 text-amber-600 border-amber-100" 
    },
    { 
      id: "calculo", 
      titulo: "Cálculo y Superior", 
      subtitulo: "Límites, derivadas e integrales para nivel pre y universitario.", 
      icono: "fa-square-root-variable", 
      color: "bg-emerald-50 text-emerald-600 border-emerald-100" 
    }
  ],

    // Agrega o reemplaza únicamente esta propiedad dentro de APP_DATA
  porQueNosotros: [
    {
      titulo: "Profesor experto con IA",
      descripcion: "Uso de Pizarra Digital Interactiva, IA adaptativa y gamificación para atención total.",
      icono: "fa-graduation-cap",
      color: "bg-sky-50 text-sky-600 border-sky-100"
    },
    {
      titulo: "Aprendizaje flexible 24/7",
      descripcion: "Aprende a cualquier hora y desde cualquier lugar.",
      icono: "fa-laptop-house",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      titulo: "Ambiente seguro y de apoyo",
      descripcion: "Espacio motivador diseñado para elevar la confianza del alumno.",
      icono: "fa-heart",
      color: "bg-rose-50 text-rose-500 border-rose-100"
    },
    {
      titulo: "Listos para el futuro real",
      descripcion: "Lógica de ingeniería para destacar en el colegio y universidad.",
      icono: "fa-star",
      color: "bg-amber-50 text-amber-500 border-amber-100"
    }
  ],

  cursos: [
    {
      id: "grupo-escolar",
      titulo: "Grupo Escolar",
      subtitulo: "Arma tu grupo del mismo grado",
      etiqueta: "Escolar",
      imagen: "assets/img/materias/grupoescolar.webp",
      ofertaGratis: true,
      modalHeader: "Arma tu grupo del mismo grado",
      btnTexto: "Ya tengo mi grupo, ir a WhatsApp",
      preciosHtml: `
        <div class="space-y-2 text-sm font-semibold">
          <div class="text-emerald-600 font-extrabold">📌 6 + alumnos: S/ 120 mes (3x sem)</div>
          <div class="text-slate-500">3 a 5 alumnos: 120 mes (2x sem) o 160 mes (3x sem)</div>
          <div class="text-emerald-600 font-extrabold">📌 2 alumnos: 160 mes (2x sem)</div>
        </div>
      `
    },
    {
      id: "mate-niveles",
      titulo: "Mate por Niveles",
      subtitulo: "Básico - Intermedio - Avanzado",
      etiqueta: "Acelerado",
      imagen: "assets/img/materias/gruponiveles2.webp",
      ofertaGratis: true,
      modalHeader: "Mate por Niveles",
      btnTexto: "Quiero probar",
      preciosHtml: `
        <div class="space-y-2 text-sm font-semibold">
          <div class="text-slate-400 line-through">Precio Regular: S/ 150 / mes</div>
          <div class="text-emerald-600 font-extrabold text-lg">Promoción: S/ 120 / mes</div>
          <div class="text-xs text-slate-600 pt-2">
            ✔ Evaluación de diagnóstico inicial sin costo.<br>
            ✔ Avance adaptativo según el ritmo del estudiante.<br>
            ✔ Soporte de consultas por WhatsApp.
          </div>
        </div>
      `
    },
    {
      id: "mate-personal",
      titulo: "Mate Personalizado",
      subtitulo: "Para tareas, exámenes y nivelación",
      etiqueta: "1 a 1",
      imagen: "assets/img/materias/grupopersonal2.webp",
      ofertaGratis: false,
      modalHeader: "Personalizado: Costo por hora",
      btnTexto: "Agendar por WhatsApp",
      preciosHtml: `
        <div class="space-y-2 text-sm font-bold">
          <div><span class="text-emerald-500">✅</span> Prim: 2º - 4º: <span class="text-emerald-600">S/ 20</span></div>
          <div class="text-slate-400"><span>✅</span> Prim: 5º - 6º: S/ 25</div>
          <div><span class="text-emerald-500">🔥</span> Secu: 1º - 2º: <span class="text-emerald-600">S/ 25</span></div>
          <div class="text-slate-400"><span>🔥</span> Secu: 3º - 5º: S/ 30</div>
          <div><span class="text-emerald-500">🚀</span> Pre: <span class="text-emerald-600">S/ 35</span></div>
          <div class="text-slate-600 pt-1">😎 +1 persona: descuento</div>
        </div>
      `
    },
    {
      id: "mate-universidad",
      titulo: "Mate Universidad",
      subtitulo: "Cálculo, Física, Álgebra Lineal",
      etiqueta: "Superior",
      imagen: "assets/img/materias/mateuniversidad.webp",
      ofertaGratis: false,
      modalHeader: "Personalizado: Costo por hora",
      btnTexto: "Agendar por WhatsApp",
      preciosHtml: `
        <div class="space-y-2 text-sm font-bold text-slate-800">
          <div>📌 S/ 35 ciclo 1</div>
          <div>📌 S/ 40 ciclo 2</div>
          <div>📌 S/ 45 ciclo 3</div>
          <div>📌 S/ 50 ciclo 4</div>
          <div>📌 S/ 55 ciclo 5</div>
          <div>📌 S/ 60 ciclo 6</div>
          <div class="text-slate-600 pt-1">😎 +1 persona: descuento</div>
        </div>
      `
    }
  ],

  testimoniosPadres: [
    {
    nombre: "Elizabeth Mercado",
    rol: "Madre de familia",
    avatar: "assets/img/padres/elizabeth.webp",
    comentario: "Gracias al profe Valentin mi hijo Miguel alcanzó un gran nivel académico. Ahora sus alumnos son mis gemelos, quienes también están contentos con sus clases. Las hace muy amenas y divertidas, cero aburrimiento, y sus notas en el cole están subiendo.",
    estrellas: 5
    },
    {
    nombre: "Glenifer Echavarria",
    rol: "Madre de familia",
    avatar: "assets/img/padres/glenifer3.webp",
    comentario: "Miles de felicitaciones por ser un gran maestro. Como tú hay muy pocos; la paciencia para escuchar, reír y a la vez poner carácter te hacen único. Así les digas 'salvaje', nos haces reír con tu palabra mágica.",
    estrellas: 5
    },
    {
    nombre: "Marcos",
    rol: "Padre de familia",
    avatar: "assets/img/padres/marcos.webp",
    comentario: "La enseñanza es muy buena. A mi hija le ha ayudado a mejorar sus notas y a motivarse a seguir aprendiendo con confianza.",
    estrellas: 5
    },
    {
    nombre: "Janeth Solis",
    rol: "Madre de familia",
    avatar: "assets/img/padres/EVELYN.webp",
    comentario: "He notado cambios en mi menor hijo: antes dudaba al desarrollar, ahora desarrolla y resuelve. Su empatía es fundamental, ya que transmite enseñanza, confianza y, sobre todo, ganas de aprender cada día más. Antes había dudas, hoy hay seguridad. Estoy más que satisfecho con el profesor Valentín.",
    estrellas: 5
    }
    // SOLO AGREGAS MÁS OBJETOS AQUÍ
  ],

  testimoniosExalumnos: [
    {
    nombre: "Ing. Tracy Yanac",
    rol: "Ing. Química - UNMSM",
    comentario: "La metodología del profesor Valentin fue clave en mi formación: lograba que entienda con claridad conceptos que antes me costaban muchísimo. Además, es súper chevere y logra un trato muy cercano, lo que me dio la confianza de preguntar cualquier duda sin temor.",
    avatar: "assets/img/exalumnos/tracy.webp",
    estrellas: 5,
    tag: "Exalumno"
    },
    {
    nombre: "Ing. Shany Becerra",
    rol: "Ing. de Sistemas - UNSA",
    comentario: "Sus clases me ayudaron muchísimo a comprender temas que antes se me complicaban. Su metodología hace que aprender sea dinámico y nada aburrido. Transmite mucha confianza y sabe conectar con sus estudiantes, lo que hizo una gran diferencia en mi formación académica.",
    avatar: "assets/img/exalumnos/ROXANA.webp",
    estrellas: 5,
    tag: "Exalumno"
    },
    {
    nombre: "Ing. Abisaid Basaldua",
    rol: "Ing. Civil - UNI",
    comentario: "Me gustaban mucho sus clases porque eran dinámicas y se entendía todo con mucha claridad. Explica tan bien que despertaba mi curiosidad por los temas y me motivaba a investigar más por mi cuenta para practicar de forma constante y no olvidar lo aprendido.",
    avatar: "assets/img/exalumnos/abisaid.webp",
    estrellas: 5,
    tag: "Exalumno"
    }
  ],

    // Dentro de tu objeto APP_DATA
  stats: {
    students: "+500",
    satisfaction: "98%",
    experience: "+10"
  },

  redesSociales: {
    facebook: "https://www.facebook.com/matesalvaje",
    instagram: "https://instagram.com/matesalvaje.pe",
    youtube: "https://www.youtube.com/@matesalvaje",
    tiktok: "https://tiktok.com/@mate_salvaje"
  }
};