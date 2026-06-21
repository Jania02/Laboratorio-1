(function () {
"use strict";

/**
 * @fileoverview SubliMomentos V&M — Accesibilidad y seguridad
 * Widget de zoom de texto + alto contraste
 */
/* ================================================================
   CONFIGURACIÓN
================================================================ */
const A11Y = {
  STORAGE_ZOOM:     "sm_zoom",
  STORAGE_CONTRASTE:"sm_contraste",
  ZOOM_MIN:  0.9,
  ZOOM_MAX:  1.4,
  ZOOM_PASO: 0.1,
  ZOOM_BASE: 1,
};

/* ================================================================
   ESTADO
================================================================ */
let zoomActual     = parseFloat(localStorage.getItem(A11Y.STORAGE_ZOOM) || A11Y.ZOOM_BASE);
let contrasteActivo = localStorage.getItem(A11Y.STORAGE_CONTRASTE) === "true";

/* ================================================================
   WIDGET HTML
================================================================ */
function inyectarWidget() {
  const widget = document.createElement("div");
  widget.className = "a11y-widget";
  widget.setAttribute("role", "region");
  widget.setAttribute("aria-label", "Opciones de accesibilidad");
  widget.innerHTML = `
    <button class="a11y-widget__trigger" id="a11y-trigger" 
      aria-expanded="false" aria-label="Opciones de accesibilidad">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4M12 16h.01"/>
      </svg>
    </button>
    <div class="a11y-widget__panel" id="a11y-panel" aria-hidden="true">
      <p class="a11y-widget__titulo">Accesibilidad</p>

      <div class="a11y-widget__grupo">
        <span class="a11y-widget__label">Tamaño de texto</span>
        <div class="a11y-widget__controles" role="group" aria-label="Controles de tamaño de texto">
          <button class="a11y-widget__btn" id="a11y-reducir" 
            aria-label="Reducir tamaño de texto">A−</button>
          <span class="a11y-widget__valor" id="a11y-zoom-valor" aria-live="polite">100%</span>
          <button class="a11y-widget__btn" id="a11y-aumentar" 
            aria-label="Aumentar tamaño de texto">A+</button>
          <button class="a11y-widget__btn a11y-widget__btn--reset" id="a11y-reset" 
            aria-label="Restablecer tamaño predeterminado">↺</button>
        </div>
      </div>

      <div class="a11y-widget__grupo">
        <span class="a11y-widget__label">Alto contraste</span>
        <button class="a11y-widget__toggle ${contrasteActivo ? 'a11y-widget__toggle--activo' : ''}" 
          id="a11y-contraste" 
          role="switch" 
          aria-checked="${contrasteActivo}"
          aria-label="Activar alto contraste">
          <span class="a11y-widget__toggle-thumb"></span>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(widget);
}

/* ================================================================
   ZOOM
================================================================ */
function aplicarZoom(valor) {
  zoomActual = Math.min(A11Y.ZOOM_MAX, Math.max(A11Y.ZOOM_MIN, valor));
  document.documentElement.style.fontSize = `${zoomActual * 100}%`;
  localStorage.setItem(A11Y.STORAGE_ZOOM, zoomActual);

  const display = document.getElementById("a11y-zoom-valor");
  if (display) display.textContent = `${Math.round(zoomActual * 100)}%`;

  const btnReducir  = document.getElementById("a11y-reducir");
  const btnAumentar = document.getElementById("a11y-aumentar");
  if (btnReducir)  btnReducir.disabled  = zoomActual <= A11Y.ZOOM_MIN;
  if (btnAumentar) btnAumentar.disabled = zoomActual >= A11Y.ZOOM_MAX;
}

/* ================================================================
   ALTO CONTRASTE
================================================================ */
function aplicarContraste(activo) {
  contrasteActivo = activo;
  document.body.classList.toggle("alto-contraste", activo);
  localStorage.setItem(A11Y.STORAGE_CONTRASTE, activo);

  const btn = document.getElementById("a11y-contraste");
  if (btn) {
    btn.setAttribute("aria-checked", activo);
    btn.classList.toggle("a11y-widget__toggle--activo", activo);
  }
}

/* ================================================================
   PANEL
================================================================ */
function togglePanel() {
  const panel   = document.getElementById("a11y-panel");
  const trigger = document.getElementById("a11y-trigger");
  if (!panel || !trigger) return;

  const abierto = panel.classList.toggle("a11y-widget__panel--visible");
  trigger.setAttribute("aria-expanded", abierto);
  panel.setAttribute("aria-hidden", !abierto);
}

/* ================================================================
   EVENTOS
================================================================ */
function iniciarEventos() {
  document.addEventListener("click", (e) => {
    if (e.target.closest("#a11y-trigger"))   { togglePanel(); return; }
    if (e.target.closest("#a11y-aumentar"))  { aplicarZoom(zoomActual + A11Y.ZOOM_PASO); return; }
    if (e.target.closest("#a11y-reducir"))   { aplicarZoom(zoomActual - A11Y.ZOOM_PASO); return; }
    if (e.target.closest("#a11y-reset"))     { aplicarZoom(A11Y.ZOOM_BASE); return; }
    if (e.target.closest("#a11y-contraste")) { aplicarContraste(!contrasteActivo); return; }

    // Cerrar al hacer clic fuera
    if (!e.target.closest(".a11y-widget")) {
      const panel = document.getElementById("a11y-panel");
      const trigger = document.getElementById("a11y-trigger");
      if (panel?.classList.contains("a11y-widget__panel--visible")) {
        panel.classList.remove("a11y-widget__panel--visible");
        panel.setAttribute("aria-hidden", "true");
        trigger?.setAttribute("aria-expanded", "false");
      }
    }
  });

  // Cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const panel = document.getElementById("a11y-panel");
    if (panel?.classList.contains("a11y-widget__panel--visible")) {
      panel.classList.remove("a11y-widget__panel--visible");
      panel.setAttribute("aria-hidden", "true");
      document.getElementById("a11y-trigger")?.setAttribute("aria-expanded", "false");
      document.getElementById("a11y-trigger")?.focus();
    }
  });
}

/* ================================================================
   INICIO
================================================================ */
function iniciarAccesibilidad() {
  inyectarWidget();
  aplicarZoom(zoomActual);
  aplicarContraste(contrasteActivo);
  iniciarEventos();
}

document.addEventListener("DOMContentLoaded", iniciarAccesibilidad);

})();