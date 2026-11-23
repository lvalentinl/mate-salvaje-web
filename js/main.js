// js/main.js - Controlador de eventos e interactividad
document.addEventListener("DOMContentLoaded", () => {
    if (typeof renderHeroAvatars === "function") renderHeroAvatars();
    if (typeof renderMaterias === "function") renderMaterias();
    if (typeof renderPorQueNosotros === "function") renderPorQueNosotros();
    if (typeof renderCursos === "function") renderCursos();
    if (typeof renderAllTestimonios === "function") renderAllTestimonios();
    if (typeof renderRedesSociales === "function") renderRedesSociales();
    if (typeof renderStats === "function") renderStats(); 

    initModales();

    // Actualiza el año del copyright dinámicamente
    const yearElement = document.getElementById("year-copy");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

function getWhatsAppUrl(mensaje) {
  return `https://wa.me/${APP_DATA.phoneWhatsApp}?text=${encodeURIComponent(mensaje)}`;
}

function renderHeroAvatars() {
  const heroContainer = document.getElementById("hero-avatars");
  if (!heroContainer || typeof APP_DATA === "undefined" || !APP_DATA.testimoniosPadres) return;

  // Tomamos las primeras 4 fotos de testimoniosPadres
  const primerosPadres = APP_DATA.testimoniosPadres.slice(0, 4);

  heroContainer.innerHTML = primerosPadres.map(p => `
    <img class="inline-block h-8 w-8 md:h-9 md:w-9 rounded-full ring-2 ring-white/80 object-cover" 
        src="${p.avatar || 'assets/img/default-avatar.jpg'}" 
        alt="${p.nombre}">
  `).join("");
}

// Función para renderizar estadísticas y métricas clave en la Landing Page
function renderStats() {
    if (typeof APP_DATA === "undefined" || !APP_DATA.stats) return;

    // 1. Barra inferior de KPIs (Alumnos, Satisfacción, Experiencia)
    const elStudents = document.getElementById("stat-students");
    const elSatisfaction = document.getElementById("stat-satisfaction");
    const elExperience = document.getElementById("stat-experience");

    if (elStudents) elStudents.textContent = APP_DATA.stats.students;
    if (elSatisfaction) elSatisfaction.textContent = APP_DATA.stats.satisfaction;
    if (elExperience) elExperience.textContent = APP_DATA.stats.experience;

    // 2. Contador superior sincronizado en el bloque Hero (Padres felices)
    const elHeroStudents = document.getElementById("stat-hero-students");
    if (elHeroStudents) elHeroStudents.textContent = APP_DATA.stats.students;
}

function renderMaterias() {
  const container = document.getElementById("materias-grid");
  if (!container || typeof APP_DATA === "undefined" || !APP_DATA.materias) return;

  container.innerHTML = APP_DATA.materias.map(m => `
    <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between h-full group">
      
      <div>
        <!-- Contenedor del Ícono con micro-animación en hover -->
        <div class="w-12 h-12 rounded-2xl ${m.color} border flex items-center justify-center text-xl mb-4 transition-transform group-hover:scale-105 flex-shrink-0">
          <i class="fa-solid ${m.icono}"></i>
        </div>

        <!-- Título de la Materia -->
        <h3 class="font-bold text-brandDark text-base md:text-lg mb-1.5 leading-snug">
          ${m.titulo}
        </h3>

        <!-- Subtítulo Enfocado en Resultados -->
        <p class="text-xs md:text-sm text-slate-500 leading-relaxed">
          ${m.subtitulo}
        </p>
      </div>

    </div>
  `).join("");
}

// NOSOTROS
function renderPorQueNosotros() {
  const container = document.getElementById("por-que-grid");
  if (!container || typeof APP_DATA === "undefined" || !APP_DATA.porQueNosotros) return;

  container.innerHTML = APP_DATA.porQueNosotros.map(item => `
    <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between h-full">
      <div>
        <div class="w-11 h-11 rounded-xl ${item.color} border flex items-center justify-center text-lg mb-3 flex-shrink-0">
          <i class="fa-solid ${item.icono}"></i>
        </div>
        <h3 class="font-bold text-brandDark text-sm md:text-base mb-1 leading-snug">
          ${item.titulo}
        </h3>
        <p class="text-xs text-slate-500 leading-relaxed">
          ${item.descripcion}
        </p>
      </div>
    </div>
  `).join("");
}

function renderCursos() {
  const container = document.getElementById("cursos-container");
  if (!container || typeof APP_DATA === "undefined" || !APP_DATA.cursos) return;

  container.innerHTML = APP_DATA.cursos.map(c => `
    <div class="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group">
      
      <div>
        <!-- 1. CONTENEDOR MULTIMEDIA DE LA TARJETA -->
        <div class="relative h-48 w-full overflow-hidden bg-slate-100">
          <img src="${c.imagen || 'assets/img/cursos/default.webp'}" 
              alt="${c.titulo}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          
          <!-- Badge / Etiqueta Flotante sobre la imagen -->
          <span class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brandPrimary text-[11px] font-bold uppercase px-3 py-1 rounded-full shadow-sm">
            ${c.etiqueta}
          </span>
        </div>

        <!-- 2. CUERPO DE LA TARJETA (Alineado a la izquierda) -->
        <div class="p-6 text-left">
          <h3 class="text-xl font-extrabold text-brandDark mb-1.5 leading-snug">
            ${c.titulo}
          </h3>
          <p class="text-xs md:text-sm text-slate-500 leading-relaxed">
            ${c.subtitulo}
          </p>
        </div>
      </div>

      <!-- 3. BOTONES DE ACCIÓN EN LA BASE -->
      <div class="px-6 pb-6 mt-2 flex flex-col gap-2.5">
        ${c.ofertaGratis ? `
          <a href="${getWhatsAppUrl(`Hola Valentín, quiero agendar 3 CLASES GRATIS para: ${c.titulo}`)}" 
            target="_blank" 
            class="bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl text-sm text-center transition flex items-center justify-center gap-2 shadow-sm">
            <i class="fab fa-whatsapp text-lg"></i> 3 Clases GRATIS
          </a>
        ` : ''}

        <button onclick="openModalPrecio('${c.id}')" 
                class="bg-brandPrimary hover:bg-sky-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition text-center shadow-sm">
          Ver Costo
        </button>
      </div>

    </div>
  `).join("");
}

// Función genérica reutilizable para renderizar tarjetas de testimonios con altura uniforme
function crearHtmlTestimonios(lista, esFondoOscuro = false) {
  return lista.map(t => `
    <div class="${esFondoOscuro ? 'bg-[#10243B] text-white border-slate-800' : 'bg-white text-slate-800 border-slate-100'} p-6 md:p-8 rounded-3xl border card-hover flex flex-col justify-between self-stretch w-[85%] sm:w-[45%] md:w-[32%] flex-shrink-0 snap-start shadow-sm">
      
      <!-- BLOQUE SUPERIOR -->
      <div class="flex flex-col flex-1 mb-6">
        <!-- 1. Avatar + Nombre + Rol -->
        <div class="flex items-center gap-3 mb-4">
          <img src="${t.avatar || 'assets/img/default-avatar.jpg'}" 
              alt="${t.nombre}" 
              class="w-12 h-12 rounded-full object-cover border ${esFondoOscuro ? 'border-slate-700' : 'border-slate-200'} flex-shrink-0">
          <div>
            <div class="font-bold text-sm md:text-base ${esFondoOscuro ? 'text-white' : 'text-brandDark'} leading-snug">${t.nombre}</div>
            <div class="text-xs ${esFondoOscuro ? 'text-amber-400 font-semibold' : 'text-brandPrimary font-medium'}">${t.rol}</div>
          </div>
        </div>

        <!-- 2. Texto del Comentario (Ocupa todo el espacio sobrante) -->
        <p class="text-xs md:text-sm ${esFondoOscuro ? 'text-slate-300' : 'text-slate-600'} italic leading-relaxed flex-1">
          "${t.comentario}"
        </p>
      </div>

      <!-- 3. PARTE INFERIOR: Estrellas Doradas Ancladas a la Base -->
      <div class="flex items-center text-amber-400 gap-1 text-sm pt-3 border-t ${esFondoOscuro ? 'border-slate-800/60' : 'border-slate-100'} mt-auto">
        ${'★'.repeat(t.estrellas || 5)}
      </div>

    </div>
  `).join("");
}

// Función principal que puebla ambas secciones
function renderAllTestimonios() {
  if (typeof APP_DATA === "undefined") return;

  // 1. Renderizar Padres (Fondo claro)
  const containerPadres = document.getElementById("testimonios-padres");
  if (containerPadres && APP_DATA.testimoniosPadres) {
    containerPadres.innerHTML = crearHtmlTestimonios(APP_DATA.testimoniosPadres, false);
  }

  // 2. Renderizar Exalumnos (Fondo oscuro)
  const containerExalumnos = document.getElementById("testimonios-exalumnos");
  if (containerExalumnos && APP_DATA.testimoniosExalumnos) {
    containerExalumnos.innerHTML = crearHtmlTestimonios(APP_DATA.testimoniosExalumnos, true);
  }
}

function renderRedesSociales() {
  const container = document.getElementById("social-links");
  if (!container || typeof APP_DATA === "undefined" || !APP_DATA.redesSociales) return;

  const redes = APP_DATA.redesSociales;
  const mapaIconos = {
    facebook: "fab fa-facebook-f",
    instagram: "fab fa-instagram",
    youtube: "fab fa-youtube",
    tiktok: "fab fa-tiktok"
  };

  container.innerHTML = Object.keys(redes).map(red => `
    <a href="${redes[red]}" 
      target="_blank" 
      rel="noopener noreferrer"
      class="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-brandYellow hover:text-brandDark flex items-center justify-center text-slate-300 transition-all duration-300">
      <i class="${mapaIconos[red] || 'fas fa-link'} text-sm"></i>
    </a>
  `).join("");
}
// ----------------------------------------------------
// SISTEMA DE MODALES (Precios y Video)
// ----------------------------------------------------

// Modal de Precios Dinámico
window.openModalPrecio = function(id) {
  if (typeof APP_DATA === "undefined" || !APP_DATA.cursos) return;
  const curso = APP_DATA.cursos.find(c => c.id === id);
  if (!curso) return;

  const modal = document.getElementById("modal-precios");
  const content = document.getElementById("modal-precios-content");
  if (!modal || !content) return;

  const waUrl = `https://wa.me/${APP_DATA.phoneWhatsApp}?text=${encodeURIComponent(`Hola Valentín, estuve viendo la opción de ${curso.titulo} en la web y quiero información`)}`;

  content.innerHTML = `
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-lg font-black text-slate-900">${curso.modalHeader}</h3>
      <button onclick="closeModalPrecio()" class="text-slate-400 hover:text-slate-600 text-2xl font-bold">&times;</button>
    </div>

    <div class="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 mb-6">
      ${curso.preciosHtml}
    </div>

    <a href="${waUrl}" target="_blank" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-3.5 px-4 rounded-2xl text-center shadow-lg transition flex items-center justify-center gap-2">
      <i class="fab fa-whatsapp text-xl"></i> ${curso.btnTexto}
    </a>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
};

window.closeModalPrecio = function() {
  const modal = document.getElementById("modal-precios");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

// Modal de Video Demostrativo
function initModales() {
  const btnVideo = document.getElementById("btn-ver-video");
  if (btnVideo) {
    btnVideo.addEventListener("click", () => {
      const modalVideo = document.getElementById("modal-video");
      const iframe = document.getElementById("video-iframe");

      if (modalVideo && iframe && typeof APP_DATA !== "undefined" && APP_DATA.videoDemoUrl) {
        // Asigna la URL solo al presionar "Ver Video"
        iframe.src = APP_DATA.videoDemoUrl; 
        modalVideo.classList.remove("hidden");
        modalVideo.classList.add("flex");
      }
    });
  }
}

window.closeModalVideo = function() {
  const modalVideo = document.getElementById("modal-video");
  const iframe = document.getElementById("video-iframe");

  // 1. Ocultar el modal visualmente
  if (modalVideo) {
    modalVideo.classList.add("hidden");
    modalVideo.classList.remove("flex");
  }

  // 2. Vaciar el src para destruir el reproductor activo y apagar el audio de raíz
  if (iframe) {
    iframe.src = "";
  }
};

// ----------------------------------------------------
// EVENTO DE INICIALIZACIÓN GLOBAL
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  if (typeof renderHeroAvatars === "function") renderHeroAvatars();
  if (typeof renderMaterias === "function") renderMaterias();
  if (typeof renderPorQueNosotros === "function") renderPorQueNosotros();
  if (typeof renderCursos === "function") renderCursos();
  if (typeof renderAllTestimonios === "function") renderAllTestimonios();
  
  initModales();

  // Actualiza el año del copyright dinámicamente
  const yearElement = document.getElementById("year-copy");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});