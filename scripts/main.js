/**
 * @fileoverview SubliMomentos V&M — Lógica principal
 * v5 + Speed Dial abanico + Lightbox de productos
 */
"use strict";
 
/* ================================================================
   01. CONSTANTES
================================================================ */
const WHATSAPP_NUMERO = "50672911998";
const CLASE_OSCURO          = "modo-oscuro";
const CLASE_NAV_VISIBLE     = "is-visible";
const CLASE_HEADER_SCROLLED = "site-header--scrolled";
const CLASE_REVEAL_HIDDEN   = "reveal-hidden";
const CLASE_REVEAL_VISIBLE  = "reveal-visible";
 
const STORAGE = {
  TEMA:          "sm_tema",
  CARRITO:       "sm_carrito",
  FORM_NOMBRE:   "sm_form_nombre",
  FORM_PRODUCTO: "sm_form_producto",
  FORM_MENSAJE:  "sm_form_mensaje",
};
 
/* ================================================================
   02. DATOS DEL CATÁLOGO
================================================================ */
const PRODUCTOS = {
  tazas: [
    { nombre: "Taza navideña",               precio: 3500,  detalle: "Personalizable con nombre",           emoji: "☕", imagenes: ["taza-navidad-1.png","taza-navidad-2.png","taza-navidad-3.png","taza-navidad-4.png","taza-navidad-5.png","taza-navidad-6.png","taza-navidad-7.png"] },
    { nombre: "Taza con asa de corazón",     precio: 4500,  detalle: "Sublimada",                           emoji: "☕", imagenes: ["taza-corazon.png"] },
    { nombre: "Taza para café bambú",        precio: 9500,  detalle: "Acero inox cubierta de bambú",        emoji: "☕", imagenes: ["taza-bambu-1.png","taza-bambu-2.png"] },
    { nombre: "Taza calendario 2024",        precio: 3500,  detalle: "Sublimada",                           emoji: "☕", imagenes: [] },
    { nombre: "Taza Funko Avengers",         precio: 3500,  detalle: "Sublimada",                           emoji: "☕", imagenes: ["taza-funko-avengers-1.jpeg","taza-funko-avengers.jp-2.jpeg"] },
    { nombre: "Taza marmoleada",             precio: 4500,  detalle: "Personalizada a tu gusto",            emoji: "☕", imagenes: ["taza-marmoleada-1.jpeg","taza-marmoleada-2.jpeg","taza-marmoleada-3.jpeg","taza-marmoleada-todas.jpeg"] },
    { nombre: "Taza con bordes de colores",  precio: 4000,  detalle: "Variedad de colores",                 emoji: "☕", imagenes: ["taza-borde-colores.jpeg","taza-borde-colores-1.jpeg","taza-borde-colores-2.jpeg","taza-borde-colores-3.jpeg"] },
    { nombre: "Taza color neón",             precio: 4500,  detalle: "Color neón",                          emoji: "☕", imagenes: ["taza-color-neon.jpeg","taza-flourecente-1.jpeg","taza-flourecente-2.jpeg"] },
    { nombre: "Taza mágica escarchada",      precio: 5500,  detalle: "Cambia de color con el calor",        emoji: "☕", imagenes: ["taza-escarchada-azul.jpeg","taza-escarchada-negra.jpeg","taza-escarchada-negra-2.jpeg","taza-escarchada-roja.jpeg"] },
    { nombre: "Taza mágica mate",            precio: 5500,  detalle: "Recubrimiento negro en fondo",        emoji: "☕", imagenes: ["taza-magica-mate-1.jpeg","taza-magica-mate-2.jpeg"] },
    { nombre: "Taza primera comunión",       precio: 3500,  detalle: "Con foto y nombre",                   emoji: "☕", imagenes: ["taza-primera-comunion-nina-1.jpeg","taza-primera-comunion-nina-2.jpeg","taza-primera-comunion-nina-3.jpeg","taza-primera-comunion-nina-4.jpeg","taza-primera-comunion-nino-1.jpeg","taza-primera-comunion-nino-2.jpeg","taza-primera-comunion-nino-3.jpeg","taza-primera-comunion-nino-4.jpeg"] },
    { nombre: "Taza mágica",                 precio: 5500,  detalle: "Sublimada",                           emoji: "☕", imagenes: ["taza-magica.jpeg"] },
    { nombre: "Taza enamel",                 precio: 3000,  detalle: "Personalizada",                       emoji: "☕", imagenes: ["taza-enamel-1.jpeg","taza-enamel-2.jpeg"] },
    { nombre: "Taza glaseada 11 oz",         precio: 3200,  detalle: "11 onzas",                            emoji: "☕", imagenes: ["taza-glaseada-1.jpeg","taza-glaseada-2.jpeg","taza-glaseada-3.jpeg"] },
    { nombre: "Taza térmica con tapa",       precio: 10000, detalle: "Acero inoxidable",                    emoji: "☕", imagenes: ["taza-termica-tapa-1.jpeg","taza-termica-tapa-2.jpeg","taza-termica-tapa-3.jpeg"] },
    { nombre: "Taza refrescos clásicos",     precio: 3500,  detalle: "Diseños de refrescos clásicos",       emoji: "☕", imagenes: ["taza-refrescos-1.jpeg","taza-refrescos-2.jpeg","taza-refrescos-3.jpeg","taza-refrescos-4.jpeg","taza-refrescos-5.jpeg"] },
    { nombre: "Taza San Valentín",           precio: 3000,  detalle: "Temática San Valentín",               emoji: "☕", imagenes: ["taza-tematica-san-valentin-1.jpeg","taza-tematica-san-valentin-2.jpeg"] },
    { nombre: "Taza cerámica + cajita",      precio: 6000,  detalle: "Taza + cajita personalizada",         emoji: "☕", imagenes: ["taza-ceramica-mas-caja.jpeg"] },
    { nombre: "Taza tapa de silicon",        precio: 5000,  detalle: "11 oz, asa corazón, tapa silicon",    emoji: "☕", imagenes: ["taza-tapa-silicon-1.jpeg","taza-tapa-silicon-2.jpeg"] },
    { nombre: "Taza 15 oz",                  precio: 5500,  detalle: "Grande, sublimada",                   emoji: "☕", imagenes: [] },
    { nombre: "Taza fútbolera",              precio: 4500,  detalle: "Diseños de fútbol",                   emoji: "☕", imagenes: ["taza-futbolera-1.jpeg","taza-futbolera-2.jpeg","taza-futbolera-3.jpeg"] },
    { nombre: "Taza borde de color",         precio: 4000,  detalle: "Variedad de bordes",                  emoji: "☕", imagenes: ["taza-borde-color.jpeg"] },
    { nombre: "Taza plástica para niños",    precio: 4500,  detalle: "Especial para niños",                 emoji: "☕", imagenes: ["taza-plastica-ninos.jpeg","taza-plastica-ninos-2.jpeg"] },
    { nombre: "Taza Champions League",       precio: 3000,  detalle: "Colección Champions",                 emoji: "☕", imagenes: ["taza-champiosn-league.jpeg","taza-champiosn-league-1.jpeg","taza-champiosn-league-2.jpeg","taza-champiosn-league-3.jpeg"] },
    { nombre: "Taza cónica mágica",          precio: 5000,  detalle: "Cónica 11 oz con revestimiento",     emoji: "☕", imagenes: ["taza-conica-magica-1.jpeg","taza-conica-magica-2.jpeg"] },
    { nombre: "Taza borde personalizada",    precio: 4000,  detalle: "Personalizada con diseño único",      emoji: "☕", imagenes: ["taza-borde-colores-personalizada-4.jpeg","taza-borde-colores-personalizada-5.jpeg"] },
    { nombre: "Taza bordes y asa colores",   precio: 4500,  detalle: "Cerámica 11 oz con asa de color",    emoji: "☕", imagenes: ["taza-borde-colores-personalizada-1.jpeg","taza-borde-colores-personalizada-2.jpeg","taza-borde-colores-personalizada-3.jpeg"] },
    { nombre: "Taza colores fluorescentes",  precio: 5000,  detalle: "Colores fluorescentes",               emoji: "☕", imagenes: ["taza-flourecente-1.jpeg","taza-flourecente-2.jpeg"] },
    { nombre: "Taza Saprissa",               precio: 3500,  detalle: "Edición Saprissa — La Morada",        emoji: "☕", imagenes: ["taza-saprissa.jpeg"] },
  ],
  botellas: [
    { nombre: "Botella bambu", precio: 15000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-bambu-1.png"] },
    { nombre: "Botella degradado grabado láser", precio: 16000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-degradado-doble-acero-dise-u00f1os-en-grabado-laser-1.jpeg","botella-degradado-doble-acero-dise-u00f1os-en-grabado-laser-2.jpeg","botella-degradado-doble-acero-dise-u00f1os-en-grabado-laser-3.jpeg"] },
    { nombre: "Botella grabado lazer personalizada", precio: 16000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-grabado-lazer-personalizada-1.jpeg","botella-grabado-lazer-personalizada-2.jpeg"] },
    { nombre: "Botella tapa rosca pajilla 500 ml", precio: 7000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-tapa-rosca-con-pajilla-500-ml-1.jpeg","botella-tapa-rosca-con-pajilla-500-ml-2.jpeg","botella-tapa-rosca-con-pajilla-500-ml-3.jpeg"] },
    { nombre: "Botellas boton press", precio: 7000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botellas-boton-press-1.jpeg","botellas-boton-press-2.jpeg","botellas-boton-press-3.jpeg","botellas-boton-press-4.jpeg","botellas-boton-press-5.jpeg","botellas-boton-press-6.jpeg"] },
    { nombre: "Botella aluminio tapa carabina", precio: 7000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-aluminio-tapa-carabina-1.png"] },
    { nombre: "Botella con grabado laser", precio: 17000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-con-grabado-laser-1.png"] },
    { nombre: "Botella pajilla aluminio 600 ml", precio: 8000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-con-pajilla-de-aluminio-600-ml-1.jpeg","botella-con-pajilla-de-aluminio-600-ml-2.jpeg","botella-con-pajilla-de-aluminio-600-ml-3.jpeg","botella-con-pajilla-de-aluminio-600-ml-4.jpeg","botella-con-pajilla-de-aluminio-600-ml-5.jpeg"] },
    { nombre: "Botella insulada", precio: 9500, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-insulada-1.jpeg","botella-insulada-2.jpeg"] },
    { nombre: "Botella tapa llavero de aluminio", precio: 4500, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-tapa-llavero-de-aluminio-1.jpeg","botella-tapa-llavero-de-aluminio-2.jpeg","botella-tapa-llavero-de-aluminio-3.jpeg","botella-tapa-llavero-de-aluminio-4.jpeg","botella-tapa-llavero-de-aluminio-5.jpeg","botella-tapa-llavero-de-aluminio-6.jpeg","botella-tapa-llavero-de-aluminio-7.jpeg"] },
    { nombre: "Botella termica", precio: 16000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-termica-1.jpeg","botella-termica-2.jpeg","botella-termica-3.jpeg"] },
    { nombre: "Botella termica acero inoxidable", precio: 16000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-termica-acero-inoxidable-1.jpeg","botella-termica-acero-inoxidable-2.jpeg","botella-termica-acero-inoxidable-3.jpeg","botella-termica-acero-inoxidable-4.jpeg","botella-termica-acero-inoxidable-5.jpeg","botella-termica-acero-inoxidable-6.jpeg","botella-termica-acero-inoxidable-7.jpeg"] },
    { nombre: "Botella térmica cubierta bambú", precio: 18500, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-termica-de-acero-inoxidable-con-cubierta-de-bambu-1.png"] },
    { nombre: "Botella termica grabado laser", precio: 20000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-termica-grabado-laser-1.jpeg","botella-termica-grabado-laser-2.jpeg"] },
    { nombre: "Botella termica personalizada", precio: 12000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botella-termica-personalizada-1.jpeg"] },
    { nombre: "Botella plástica escolar 350 ml", precio: 5000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botellas-de-plastico-perzonalizadas-especial-para-llevar-a-la-escuela-350-ml-cuesta-1.jpeg","botellas-de-plastico-perzonalizadas-especial-para-llevar-a-la-escuela-350-ml-cuesta-2.jpeg"] },
    { nombre: "Botellita plastica personalizada", precio: 5000, detalle: "Personalizado a tu gusto", emoji: "🫙", imagenes: ["botellita-plastica-personalizada-1.jpeg"] },
  ],
  tumblers: [
    { nombre: "Grabado Laser", precio: 13000, detalle: "Personalizado a tu gusto", emoji: "🥤", imagenes: ["grabado-laser-1.jpeg","grabado-laser-2.jpeg"] },
    { nombre: "Tumbler 20 oz", precio: 12000, detalle: "Personalizado a tu gusto", emoji: "🥤", imagenes: ["onz-tumbler-1.png","onz-tumbler-2.png","onz-tumbler-3.png","onz-tumbler-4.png","onz-tumbler-5.png","onz-tumbler-6.png","onz-tumbler-7.png","onz-tumbler-8.png","onz-tumbler-9.png","onz-tumbler-10.png"] },
    { nombre: "Tumbler", precio: 12000, detalle: "Personalizado a tu gusto", emoji: "🥤", imagenes: ["tumbler-1.jpeg"] },
    { nombre: "Tumbler Degradado", precio: 13000, detalle: "Personalizado a tu gusto", emoji: "🥤", imagenes: ["tumbler-degradado-1.jpeg","tumbler-degradado-2.jpeg"] },
    { nombre: "Tumblers", precio: 12000, detalle: "Personalizado a tu gusto", emoji: "🥤", imagenes: ["tumblers-1.png","tumblers-2.png","tumblers-3.png","tumblers-4.png","tumblers-5.png","tumblers-6.png","tumblers-7.png","tumblers-8.png","tumblers-9.png"] },
    { nombre: "Tumblers 20 onzas", precio: 12000, detalle: "Personalizado a tu gusto", emoji: "🥤", imagenes: ["tumblers-20-onzas-1.png","tumblers-20-onzas-2.png","tumblers-20-onzas-3.png","tumblers-20-onzas-4.png","tumblers-20-onzas-5.png","tumblers-20-onzas-6.png","tumblers-20-onzas-7.png","tumblers-20-onzas-8.png","tumblers-20-onzas-9.png","tumblers-20-onzas-10.png"] },
    { nombre: "Tumbler con agarradera láser", precio: 16500, detalle: "Personalizado a tu gusto", emoji: "🥤", imagenes: ["tumblers-con-agarradera-grabado-laser-1.png"] },
  ],
  vasos: [
    { nombre: "Vasos plásticos con pajilla",  precio: 4000,  detalle: "Personalizados a tu gusto",          emoji: "🧃", imagenes: ["vasos-plasticos-pajilla-1.jpeg","vasos-plasticos-pajilla-2.jpeg"] },
    { nombre: "Vasos plásticos",              precio: 5000,  detalle: "Personalizados con vinil adhesivo",  emoji: "🧃", imagenes: ["vasos-plasticos-2.jpeg","vasos-plasticos-3.jpeg","vasos-plasticos-4.jpeg","vasos-plasticos-5.jpeg","vasos-plasticos-de-color.jpeg"] },
    { nombre: "Vaso acero inox bambú",        precio: 14500, detalle: "Acero inox cubierta bambú",          emoji: "🧃", imagenes: ["vaso-acero-bambu-1.jpeg","vaso-acero-bambu-2.jpeg"] },
  ],
  vasos_cafe: [
    { nombre: "Vaso café cerámico",           precio: 0,     detalle: "Consultar precio — Diseño a tu gusto", emoji: "☕", imagenes: [] },
  ],
  jarras: [
    { nombre: "Jarra Térmica",                precio: 8000,  detalle: "Acero inox, mantiene temperatura",   emoji: "🍺", imagenes: ["jarra-termica-1.jpeg","jarra-termica-2.jpeg","jarra-termica-3.jpeg","jarra-termica-4.jpeg","jarra-termica-5.jpeg","jarra-termica-6.jpeg","jarra-termica-7.jpeg","jarra-termica-8.jpeg"] },
    { nombre: "Jarra térmica blanca",         precio: 8000,  detalle: "Personalización a tu gusto",         emoji: "🍺", imagenes: ["jarra-termica-blanca.jpeg"] },
    { nombre: "Jarra cervecera CR-Qatar 22",  precio: 5000,  detalle: "Edición especial",                   emoji: "🍺", imagenes: ["jarra-cervecera-1.jpeg","jarra-cervecera-2.jpeg","jarra-cervecera-3.jpeg","jarra-cervecera-4.jpeg","jarra-cervecera-5.jpeg"] },
    { nombre: "Jarra cervecera glaseada",     precio: 5000,  detalle: "Glaseada personalizada",             emoji: "🍺", imagenes: ["jarra-cervecera-glaseada-1.jpeg","jarra-cervecera-glaseada-2.jpeg"] },
    { nombre: "Jarra cervecera degradado",    precio: 5500,  detalle: "Glaseada degradado de colores",      emoji: "🍺", imagenes: ["jarra-glaseada-colores-1.jpeg","jarra-glaseada-colores-2.jpeg","jarra-glaseada-colores-3.jpeg","jarra-glaseada-colores-4.jpeg"] },
  ],
  gorras: [
    { nombre: "Gorra plana personalizada", precio: 9500, detalle: "Algodón y mallita ajustable", emoji: "🧢", imagenes: ["gorra-plana.jpeg","gorras-colores-1.jpeg","gorras-colores-2.jpeg","gorras-colores-3.jpeg","gorras-colores-4.jpeg","gorras-colores-5.jpeg","gorras-colores-6.jpeg"] },
    { nombre: "Gorra stampada", precio: 4500, detalle: "Diseño pesca, personalizable", emoji: "🧢", imagenes: ["gorra-estampada-1.jpeg","gorra-estampada-2.jpeg"] },
    { nombre: "Gorras personalizadas", precio: 9500, detalle: "Múltiples colores disponibles", emoji: "🧢", imagenes: ["gorras-colores-1.jpeg","gorras-colores-2.jpeg","gorras-colores-3.jpeg","gorras-colores-4.jpeg","gorras-colores-5.jpeg","gorras-colores-6.jpeg"] },
    { nombre: "Gorras estampadas", precio: 5000, detalle: "Personalizado a tu gusto", emoji: "🧢", imagenes: ["gorras-estampadas-1.jpeg","gorras-estampadas-2.jpeg"] },
  ],
  camisetas: [
    { nombre: "Camiseta Yamaha/Honda", precio: 13000, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camiseta-yamaha-honda-tela-algodon-o-deportiva-1.jpeg","camiseta-yamaha-honda-tela-algodon-o-deportiva-2.jpeg"] },
    { nombre: "Camiseta algodon jaspeado", precio: 9000, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camiseta-algodon-jaspeado-1.jpeg","camiseta-algodon-jaspeado-2.jpeg","camiseta-algodon-jaspeado-3.jpeg","camiseta-algodon-jaspeado-4.jpeg","camiseta-algodon-jaspeado-5.jpeg"] },
    { nombre: "Camiseta cuello V flores", precio: 9000, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camiseta-cuello-v-color-negra-detalles-flores-1.jpeg","camiseta-cuello-v-color-negra-detalles-flores-2.jpeg"] },
    { nombre: "Camiseta Fox DTF algodón", precio: 11000, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camiseta-de-algodon-coleccion-fox-personalizadas-con-dtf-1.jpeg","camiseta-de-algodon-coleccion-fox-personalizadas-con-dtf-2.jpeg","camiseta-de-algodon-coleccion-fox-personalizadas-con-dtf-3.jpeg","camiseta-de-algodon-coleccion-fox-personalizadas-con-dtf-4.jpeg"] },
    { nombre: "Camiseta negra DTF", precio: 10000, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camiseta-negra-algodon-personalizada-con-dtf-1.jpeg","camiseta-negra-algodon-personalizada-con-dtf-2.jpeg","camiseta-negra-algodon-personalizada-con-dtf-3.jpeg","camiseta-negra-algodon-personalizada-con-dtf-4.jpeg"] },
    { nombre: "Camiseta niño Batman", precio: 8500, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camiseta-ni-u00f1o-batman-algodon-estampadas-con-vinil-termoadhesivo-1.jpeg"] },
    { nombre: "Camiseta A3 deportiva", precio: 8500, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisetas-a3-deportivas-incluye-un-logo-y-nombre-1.jpeg","camisetas-a3-deportivas-incluye-un-logo-y-nombre-2.jpeg"] },
    { nombre: "Camisetas U-waffit", precio: 9500, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisetas-u-waffit-1.jpeg","camisetas-u-waffit-2.jpeg","camisetas-u-waffit-3.jpeg","camisetas-u-waffit-4.jpeg","camisetas-u-waffit-5.jpeg"] },
    { nombre: "Camiseta algodón liso", precio: 8000, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisetas-algodon-liso-tallas-2-en-adelante-1.jpeg","camisetas-algodon-liso-tallas-2-en-adelante-2.jpeg","camisetas-algodon-liso-tallas-2-en-adelante-3.jpeg"] },
    { nombre: "Camisetas de North Face", precio: 8500, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisetas-de-north-face-1.jpeg"] },
    { nombre: "Camiseta algodón vinilo", precio: 10000, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisetas-de-algodon-estampadas-con-vinilo-termoadhesivo-1.jpeg","camisetas-de-algodon-estampadas-con-vinilo-termoadhesivo-2.jpeg","camisetas-de-algodon-estampadas-con-vinilo-termoadhesivo-3.jpeg","camisetas-de-algodon-estampadas-con-vinilo-termoadhesivo-4.jpeg","camisetas-de-algodon-estampadas-con-vinilo-termoadhesivo-5.jpeg","camisetas-de-algodon-estampadas-con-vinilo-termoadhesivo-6.jpeg","camisetas-de-algodon-estampadas-con-vinilo-termoadhesivo-7.jpeg"] },
    { nombre: "Camiseta Che Guevara", precio: 10000, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisetas-estampadas-che-guevara-con-vinilo-termoadhesivo-1.jpeg","camisetas-estampadas-che-guevara-con-vinilo-termoadhesivo-2.jpeg","camisetas-estampadas-che-guevara-con-vinilo-termoadhesivo-3.jpeg","camisetas-estampadas-che-guevara-con-vinilo-termoadhesivo-4.jpeg","camisetas-estampadas-che-guevara-con-vinilo-termoadhesivo-5.jpeg"] },
    { nombre: "Camiseta Mujer Maravilla DTF", precio: 10000, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisetas-mujer-maravilla-algodon-personalizado-con-dtf-dise-u00f1o-estetico-1.jpeg","camisetas-mujer-maravilla-algodon-personalizado-con-dtf-dise-u00f1o-estetico-2.jpeg","camisetas-mujer-maravilla-algodon-personalizado-con-dtf-dise-u00f1o-estetico-3.jpeg","camisetas-mujer-maravilla-algodon-personalizado-con-dtf-dise-u00f1o-estetico-4.jpeg","camisetas-mujer-maravilla-algodon-personalizado-con-dtf-dise-u00f1o-estetico-5.jpeg","camisetas-mujer-maravilla-algodon-personalizado-con-dtf-dise-u00f1o-estetico-6.jpeg"] },
    { nombre: "Camisetas negras algodon", precio: 9500, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisetas-negras-algodon-1.jpeg","camisetas-negras-algodon-2.jpeg","camisetas-negras-algodon-3.jpeg","camisetas-negras-algodon-4.jpeg"] },
    { nombre: "Camisetas negras niños", precio: 8500, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisetas-negras-ni-u00f1os-1.jpeg","camisetas-negras-ni-u00f1os-2.jpeg","camisetas-negras-ni-u00f1os-3.jpeg"] },
    { nombre: "Camiseta algodón estampado grande", precio: 11000, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisetas-stampadas-en-algodon-stampado-grande-1.jpeg","camisetas-stampadas-en-algodon-stampado-grande-2.jpeg","camisetas-stampadas-en-algodon-stampado-grande-3.jpeg"] },
    { nombre: "Camiseta Choppers DTF", precio: 14000, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisseta-choppers-algodon-estampado-dtf-1.jpeg"] },
    { nombre: "Camiseta algodón DTF", precio: 10500, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camiseta-algodon-personalizada-con-dtf-1.jpeg"] },
    { nombre: "Camiseta estampadas tallas juveniles", precio: 8500, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camiseta-estampadas-tallas-juveniles-1.jpeg","camiseta-estampadas-tallas-juveniles-2.jpeg","camiseta-estampadas-tallas-juveniles-3.jpeg"] },
    { nombre: "Camisetas de algodon", precio: 9000, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisetas-de-algodon-1.jpeg","camisetas-de-algodon-2.jpeg"] },
    { nombre: "Camiseta Nike algodón", precio: 10500, detalle: "Personalizado a tu gusto", emoji: "👕", imagenes: ["camisetas-de-algodon-coleccion-nike-1.jpeg","camisetas-de-algodon-coleccion-nike-2.jpeg","camisetas-de-algodon-coleccion-nike-3.jpeg","camisetas-de-algodon-coleccion-nike-4.jpeg"] },
  ],
  abrigos: [
    { nombre: "Abrigos", precio: 20000, detalle: "Personalizado a tu gusto", emoji: "🧥", imagenes: ["abrigos-1.jpeg","abrigos-2.jpeg"] },
  ],
  almohadones: [
    { nombre: "Almohadón lentejuelas mamá",   precio: 8000,  detalle: "Con lentejuelas personalizadas",     emoji: "🛏️", imagenes: ["almohadones-lentejuelas-mama-1.jpeg","almohadones-lentejuelas-mama-2.jpeg","almohadones-lentejuelas-mama-3.jpeg"] },
    { nombre: "Almohada con datos personales",precio: 6000,  detalle: "30x30 cm — Nombre, fecha, foto",     emoji: "🛏️", imagenes: ["almohada-ninos-ninas.jpeg","almohadon-datos-1.jpeg","almohadon-datos-2.jpeg","almohadon-datos-3.jpeg","almohadon-datos-4.jpeg","almohadon-datos-5.jpeg","almohadon-datos-6.jpeg","almohadon-datos-7.jpeg"] },
    { nombre: "Almohadón PlayStation",        precio: 7500,  detalle: "35x35 cm",                           emoji: "🛏️", imagenes: ["almohadon-playstation-1.jpeg","almohadon-playstation-2.jpeg"] },
    { nombre: "Almohadón anime",              precio: 7000,  detalle: "Diseños de anime personalizados",    emoji: "🛏️", imagenes: ["almohadon-anime-1.jpeg","almohadon-anime-2.jpeg","almohadon-anime-3.jpeg"] },
  ],
  llaveros: [
    { nombre: "Llavero metálico",             precio: 3000,  detalle: "Personalizado a tu gusto",           emoji: "🔑", imagenes: ["llaveros-metalicos.jpeg"] },
    { nombre: "Llavero con brújula",          precio: 4000,  detalle: "Personalizado",                      emoji: "🔑", imagenes: ["llavero-brujula.jpeg"] },
    { nombre: "Llavero corazón",              precio: 3000,  detalle: "Diseño corazón personalizado",       emoji: "🔑", imagenes: ["llavero-corazon.jpeg"] },
    { nombre: "Llavero Mickey",               precio: 3000,  detalle: "Diseño Mickey personalizado",        emoji: "🔑", imagenes: ["llavero-mikey.jpeg"] },
  ],
};
 
const CATEGORIAS_INFO = {
  tazas:       { label: "☕ Tazas" },
  botellas:    { label: "🫙 Botellas" },
  tumblers:    { label: "🥤 Tumblers" },
  vasos:       { label: "🧃 Vasos" },
  vasos_cafe:  { label: "☕ Vasos Café" },
  jarras:      { label: "🍺 Jarras" },
  gorras:      { label: "🧢 Gorras" },
  camisetas:   { label: "👕 Camisetas" },
  abrigos:     { label: "🧥 Abrigos" },
  almohadones: { label: "🛏️ Almohadones" },
  llaveros:    { label: "🔑 Llaveros" },
};
 
/* ================================================================
   03. ESTADO
================================================================ */
let carrito    = JSON.parse(localStorage.getItem(STORAGE.CARRITO) || "[]");
let lbImagenes = [];
let lbIndice   = 0;
let lbNombre   = "";
 
/* ================================================================
   04. INICIO
================================================================ */
async function iniciarApp() {
  await cargarComponentes();
  iniciarNavegacionMovil();
  iniciarHeaderScroll();
  iniciarReveal();
  iniciarCatalogo();
  iniciarCarrito();
  inyectarLightbox();
  iniciarSpeedDial();
  iniciarFormStorage();
  marcarEnlaceActivo();
  iniciarBotonArriba();
}
 
/* ================================================================
   05. COMPONENTES
================================================================ */
async function cargarComponentes() {
  const hEl = document.getElementById("header-placeholder");
  const fEl = document.getElementById("footer-placeholder");
  try {
    if (hEl) { const r = await fetch("components/header.html"); hEl.innerHTML = await r.text(); }
    if (fEl) { const r = await fetch("components/footer.html"); fEl.innerHTML = await r.text(); }
  } catch (e) { console.error("Error componentes:", e); }
}
 
/* ================================================================
   06. TEMA
================================================================ */
function iniciarNavegacionMovil() {
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".nav-primary__toggle");
    if (b) alternarMenu(b);
  });
  document.addEventListener("click", (e) => {
    const b = document.querySelector(".nav-primary__toggle");
    if (!b) return;
    if (b.getAttribute("aria-expanded") === "true" && !e.target.closest(".nav-primary")) cerrarMenu(b);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const b = document.querySelector(".nav-primary__toggle");
    if (b && b.getAttribute("aria-expanded") === "true") { cerrarMenu(b); b.focus(); }
  });
  document.addEventListener("click", (e) => {
    if (e.target.closest(".nav-primary__enlace")) {
      const b = document.querySelector(".nav-primary__toggle");
      if (b) cerrarMenu(b);
    }
  });
}
 
function alternarMenu(b) { b.getAttribute("aria-expanded") === "true" ? cerrarMenu(b) : abrirMenu(b); }
 
function abrirMenu(b) {
  const l = document.querySelector(".nav-primary__lista");
  if (!l) return;
  b.setAttribute("aria-expanded", "true");
  b.setAttribute("aria-label", "Cerrar menú");
  l.classList.add(CLASE_NAV_VISIBLE);
}
 
function cerrarMenu(b) {
  const l = document.querySelector(".nav-primary__lista");
  if (!l) return;
  b.setAttribute("aria-expanded", "false");
  b.setAttribute("aria-label", "Abrir menú");
  l.classList.remove(CLASE_NAV_VISIBLE);
}
 
/* ================================================================
   08. HEADER SCROLL
================================================================ */
function iniciarHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const c = document.createElement("div");
  c.setAttribute("aria-hidden", "true");
  c.style.cssText = "position:absolute;top:0;height:1px;width:100%;pointer-events:none;";
  document.body.prepend(c);
  new IntersectionObserver(([e]) => {
    header.classList.toggle(CLASE_HEADER_SCROLLED, !e.isIntersecting);
  }, { threshold: 0 }).observe(c);
}
 
/* ================================================================
   09. REVEAL
================================================================ */
function iniciarReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.replace(CLASE_REVEAL_HIDDEN, CLASE_REVEAL_VISIBLE);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(`.${CLASE_REVEAL_HIDDEN}`).forEach((el) => obs.observe(el));
}
 
/* ================================================================
   10. CATÁLOGO
================================================================ */
function categoriaConImagenes(cat) {
  const lista = PRODUCTOS[cat] || [];
  return lista.some((p) => p.imagenes && p.imagenes.length > 0);
}

function iniciarCatalogo() {
  let tabs        = Array.from(document.querySelectorAll(".catalogo__tab"));
  const contenedor = document.getElementById("productos-contenedor");
  if (!tabs.length || !contenedor) return;

  tabs.forEach((tab) => {
    if (!categoriaConImagenes(tab.dataset.categoria)) tab.style.display = "none";
  });
  tabs = tabs.filter((t) => t.style.display !== "none");

  if (tabs.length) {
    tabs.forEach((t) => { t.classList.remove("catalogo__tab--activo"); t.setAttribute("aria-selected","false"); t.setAttribute("tabindex","-1"); });
    tabs[0].classList.add("catalogo__tab--activo");
    tabs[0].setAttribute("aria-selected","true");
    tabs[0].setAttribute("tabindex","0");
  }

  renderizarProductos(tabs[0]?.dataset.categoria || "tazas", contenedor);
 
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const cat = tab.dataset.categoria;
      tabs.forEach((t) => { t.classList.remove("catalogo__tab--activo"); t.setAttribute("aria-selected", "false"); t.setAttribute("tabindex", "-1"); });
      tab.classList.add("catalogo__tab--activo");
      tab.setAttribute("aria-selected", "true");
      tab.setAttribute("tabindex", "0");
      renderizarProductos(cat, contenedor);
    });
  });
 
  contenedor.addEventListener("click", (e) => {
    // Lightbox — clic en imagen del producto
    const imgArea = e.target.closest(".producto__imagen--clickable");
    if (imgArea) {
      const imagenes = JSON.parse(imgArea.dataset.imagenes || "[]");
      const nombre   = imgArea.dataset.nombre || "";
      const indice   = parseInt(imgArea.dataset.indice || "0", 10);
      abrirLightbox(imagenes, indice, nombre);
      return;
    }
 
    // Agregar al pedido
    const btn = e.target.closest(".producto__agregar");
    if (!btn) return;
    const nombre = btn.dataset.nombre;
    const precio = parseInt(btn.dataset.precio, 10);
    const estilo = btn.dataset.estilo || "";
    agregarAlCarrito(nombre, precio, estilo);
    btn.textContent = "✓ Agregado";
    btn.classList.add("producto__agregar--agregado");
    setTimeout(() => {
      btn.textContent = estilo ? `+ Agregar estilo ${estilo} al pedido` : "+ Agregar al pedido";
      btn.classList.remove("producto__agregar--agregado");
    }, 1500);
  });
}
 
function renderizarProductos(categoria, contenedor) {
  const todos = PRODUCTOS[categoria] || [];
  const lista = todos.filter((p) => p.imagenes && p.imagenes.length > 0);
  const info  = CATEGORIAS_INFO[categoria] || { label: categoria };
  contenedor.innerHTML = `
    <h2 class="catalogo__seccion-titulo">${info.label} <span>(${lista.length} producto${lista.length !== 1 ? "s" : ""})</span></h2>
    <div class="catalogo__grilla" role="list">${lista.map(crearTarjetaProducto).join("")}</div>
  `;
  contenedor.querySelectorAll(".reveal-hidden").forEach((el) => {
    new IntersectionObserver(([e], obs) => {
      if (e.isIntersecting) { e.target.classList.replace(CLASE_REVEAL_HIDDEN, CLASE_REVEAL_VISIBLE); obs.unobserve(e.target); }
    }, { threshold: 0.05 }).observe(el);
  });
}
 
function crearTarjetaProducto(p) {
  const tieneImagenes  = p.imagenes && p.imagenes.length > 0;
  const tieneMultiples = p.imagenes && p.imagenes.length > 1;
  const precioTexto    = p.precio > 0 ? `₡${p.precio.toLocaleString("es-CR")}` : "Consultar precio";
 
  const claseImg = tieneImagenes ? "producto__imagen producto__imagen--clickable" : "producto__imagen";
  const dataImg  = tieneImagenes
    ? `data-imagenes='${JSON.stringify(p.imagenes).replace(/'/g,"&#39;")}' data-nombre="${p.nombre.replace(/"/g,"&quot;")}" data-precio="${p.precio}" data-indice="0" role="button" tabindex="0" title="Tocar para ver imagen completa"`
    : "";
 
  const imagenHTML = tieneImagenes
    ? `<img src="assets/images/${p.imagenes[0]}" alt="${p.nombre}" loading="lazy" />`
    : `<span class="producto__emoji" aria-hidden="true">${p.emoji}</span>`;
 
  const badgeHTML = tieneMultiples ? `<div class="producto__badge-estilos">${p.imagenes.length} estilos</div>` : "";
 
  const estiloLabel = tieneMultiples
    ? `<p class="producto__estilo-label">Seleccionado: <span class="producto__estilo-num">Estilo 1</span></p>`
    : "";
 
  const miniaturasHTML = tieneMultiples
    ? `<div class="producto__miniaturas" role="list">
        ${p.imagenes.map((img, i) => `
          <button class="producto__miniatura ${i === 0 ? "producto__miniatura--activa" : ""}"
            onclick="cambiarImagenProducto(this,'${img}',${i+1},'${p.nombre.replace(/'/g,"\\'")}')"
            aria-label="Ver estilo ${i+1}" role="listitem">
            <img src="assets/images/${img}" alt="Estilo ${i+1}" loading="lazy" />
          </button>`).join("")}
       </div>`
    : "";
 
  const btnTexto  = tieneMultiples ? "+ Agregar estilo 1 al pedido" : "+ Agregar al pedido";
  const btnEstilo = tieneMultiples ? 'data-estilo="1"' : "";
 
  return `
    <article class="producto reveal-hidden" role="listitem">
      <div class="${claseImg}" ${dataImg} style="position:relative;overflow:hidden;">
        <div class="producto__imagen-principal">${imagenHTML}</div>
        ${badgeHTML}
      </div>
      <div class="producto__info">
        <h3 class="producto__nombre">${p.nombre}</h3>
        <p class="producto__precio">${precioTexto}</p>
        <p class="producto__detalle">${p.detalle}</p>
        ${estiloLabel}
        ${miniaturasHTML}
        <button class="producto__agregar"
          data-nombre="${p.nombre.replace(/"/g,"&quot;")}"
          data-precio="${p.precio}"
          ${btnEstilo}
          aria-label="Agregar ${p.nombre} al pedido">
          ${btnTexto}
        </button>
      </div>
    </article>`;
}
 
window.cambiarImagenProducto = function(btn, imagen, estiloNum, nombre) {
  const card      = btn.closest(".producto");
  const principal = card.querySelector(".producto__imagen-principal");
  const estiloSpan = card.querySelector(".producto__estilo-num");
  const btnAgregar = card.querySelector(".producto__agregar");
  const imgArea    = card.querySelector(".producto__imagen");
 
  principal.innerHTML = `<img src="assets/images/${imagen}" alt="${nombre} estilo ${estiloNum}" loading="lazy" />`;
  card.querySelectorAll(".producto__miniatura").forEach((m, i) => m.classList.toggle("producto__miniatura--activa", i === estiloNum - 1));
  if (estiloSpan) estiloSpan.textContent = `Estilo ${estiloNum}`;
  if (btnAgregar) { btnAgregar.textContent = `+ Agregar estilo ${estiloNum} al pedido`; btnAgregar.dataset.estilo = estiloNum; }
  if (imgArea)    imgArea.dataset.indice = estiloNum - 1;
};
 
/* ================================================================
   11. LIGHTBOX
================================================================ */
function inyectarLightbox() {
  document.body.insertAdjacentHTML("beforeend", `
    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Imagen completa" aria-hidden="true">
      <button class="lightbox__cerrar" id="lightbox-cerrar" aria-label="Cerrar (Escape)">×</button>
      <button class="lightbox__nav lightbox__nav--prev" id="lightbox-prev" aria-label="Anterior">‹</button>
      <div class="lightbox__contenido">
        <img class="lightbox__imagen" id="lightbox-imagen" src="" alt="" />
        <p class="lightbox__nombre"  id="lightbox-nombre"></p>
        <p class="lightbox__contador" id="lightbox-contador"></p>
      </div>
      <button class="lightbox__nav lightbox__nav--next" id="lightbox-next" aria-label="Siguiente">›</button>
    </div>
  `);
 
  document.getElementById("lightbox-cerrar").addEventListener("click", cerrarLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", () => navLightbox(-1));
  document.getElementById("lightbox-next").addEventListener("click", () => navLightbox(1));
  document.getElementById("lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") cerrarLightbox(); });
  document.addEventListener("keydown", (e) => {
    const lb = document.getElementById("lightbox");
    if (!lb?.classList.contains("is-open")) return;
    if (e.key === "Escape")     cerrarLightbox();
    if (e.key === "ArrowLeft")  navLightbox(-1);
    if (e.key === "ArrowRight") navLightbox(1);
  });
}
 
function abrirLightbox(imagenes, indice, nombre) {
  lbImagenes = imagenes; lbIndice = indice; lbNombre = nombre;
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.add("is-open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  actualizarLightbox();
}
 
function cerrarLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.remove("is-open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
 
function navLightbox(delta) {
  lbIndice = (lbIndice + delta + lbImagenes.length) % lbImagenes.length;
  actualizarLightbox();
}
 
function actualizarLightbox() {
  const img  = document.getElementById("lightbox-imagen");
  const cnt  = document.getElementById("lightbox-contador");
  const nom  = document.getElementById("lightbox-nombre");
  const prev = document.getElementById("lightbox-prev");
  const next = document.getElementById("lightbox-next");
 
  if (img)  { img.src = `assets/images/${lbImagenes[lbIndice]}`; img.alt = `${lbNombre} — Estilo ${lbIndice + 1}`; }
  if (cnt)  cnt.textContent  = lbImagenes.length > 1 ? `Estilo ${lbIndice + 1} de ${lbImagenes.length}` : "";
  if (nom)  nom.textContent  = lbNombre;
  const soloUna = lbImagenes.length <= 1;
  if (prev) prev.style.display = soloUna ? "none" : "";
  if (next) next.style.display = soloUna ? "none" : "";
}
 
/* ================================================================
   12. SPEED DIAL — Abanico de redes sociales
================================================================ */
function iniciarSpeedDial() {
  /* Botón "Contacto" del nav → abre el speed dial */
  document.addEventListener("click", function(e) {
    var navBtn = e.target.closest("#nav-contacto-btn");
    if (navBtn) {
      e.preventDefault();
      var trigger = document.getElementById("speed-dial-trigger");
      if (trigger) trigger.click();
      /* Scroll suave al final de la página donde está el speed dial */
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  });

  /* Botón principal del speed dial */
  document.addEventListener("click", function(e) {
    var btn = e.target.closest("#speed-dial-trigger");
    if (btn) {
      e.stopPropagation();
      var menu = document.getElementById("speed-dial-items");
      if (!menu) return;
      var abierto = menu.classList.contains("is-open");
      menu.classList.toggle("is-open", !abierto);
      btn.classList.toggle("is-open", !abierto);
      btn.setAttribute("aria-expanded", String(!abierto));
      menu.setAttribute("aria-hidden",  String(abierto));
    }
  });

  /* Cerrar al tocar fuera */
  document.addEventListener("click", function(e) {
    if (e.target.closest("#speed-dial-trigger")) return;
    if (!e.target.closest(".speed-dial")) {
      var menu = document.getElementById("speed-dial-items");
      var btn  = document.getElementById("speed-dial-trigger");
      if (menu && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        if (btn) { btn.classList.remove("is-open"); btn.setAttribute("aria-expanded","false"); }
        menu.setAttribute("aria-hidden","true");
      }
    }
  });
}
 
/* ================================================================
   13. CARRITO
================================================================ */
function iniciarCarrito() {
  if (!document.getElementById("productos-contenedor")) return;
  inyectarDrawerCarrito();
  actualizarUICarrito();
}
 
function inyectarDrawerCarrito() {
  document.body.insertAdjacentHTML("beforeend", `
    <div class="overlay" id="overlay-carrito" aria-hidden="true"></div>
    <aside class="carrito-drawer" id="carrito-drawer" role="dialog" aria-modal="true" aria-label="Tu pedido" aria-hidden="true">
      <div class="carrito-drawer__header">
        <h2 class="carrito-drawer__titulo">Tu pedido 🌸</h2>
        <button class="carrito-drawer__cerrar" id="carrito-cerrar" aria-label="Cerrar">×</button>
      </div>
      <div class="carrito-drawer__lista" id="carrito-lista" role="list"></div>
      <div class="carrito-drawer__footer" id="carrito-footer"></div>
    </aside>
    <button class="carrito-flotante" id="carrito-flotante" aria-label="Ver pedido" aria-haspopup="dialog">
      <span class="carrito-flotante__icono" aria-hidden="true">🛍️</span>
      <span>Ver pedido</span>
      <span class="carrito-flotante__badge" id="carrito-badge" aria-live="polite">0</span>
    </button>
  `);
 
  document.getElementById("carrito-flotante").addEventListener("click", abrirDrawer);
  document.getElementById("carrito-cerrar").addEventListener("click", cerrarDrawer);
  document.getElementById("overlay-carrito").addEventListener("click", cerrarDrawer);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarDrawer(); });
}
 
function abrirDrawer() {
  const d = document.getElementById("carrito-drawer");
  const o = document.getElementById("overlay-carrito");
  if (!d) return;
  d.classList.add("is-open"); d.setAttribute("aria-hidden", "false");
  o.classList.add("is-visible");
  document.body.style.overflow = "hidden";
}
 
function cerrarDrawer() {
  const d = document.getElementById("carrito-drawer");
  const o = document.getElementById("overlay-carrito");
  if (!d) return;
  d.classList.remove("is-open"); d.setAttribute("aria-hidden", "true");
  o.classList.remove("is-visible");
  document.body.style.overflow = "";
}
 
function agregarAlCarrito(nombre, precio, estilo) {
  const clave = estilo ? `${nombre} (Estilo ${estilo})` : nombre;
  const ex = carrito.find((i) => i.nombre === clave);
  if (ex) { ex.cantidad++; } else { carrito.push({ nombre: clave, precio, cantidad: 1 }); }
  guardarCarrito();
  actualizarUICarrito();
}
 
window.cambiarCantidad = function(nombre, delta) {
  const idx = carrito.findIndex((i) => i.nombre === nombre);
  if (idx === -1) return;
  carrito[idx].cantidad += delta;
  if (carrito[idx].cantidad <= 0) carrito.splice(idx, 1);
  guardarCarrito(); actualizarUICarrito();
};
 
window.vaciarCarrito = function() { carrito = []; guardarCarrito(); actualizarUICarrito(); };
 
function guardarCarrito() { localStorage.setItem(STORAGE.CARRITO, JSON.stringify(carrito)); }
 
function actualizarUICarrito() {
  const badge    = document.getElementById("carrito-badge");
  const flotante = document.getElementById("carrito-flotante");
  const lista    = document.getElementById("carrito-lista");
  const footer   = document.getElementById("carrito-footer");
 
  const total = carrito.reduce((s, i) => s + i.cantidad, 0);
  if (badge)    badge.textContent = total;
  if (flotante) flotante.classList.toggle("es-visible", total > 0);
  if (!lista || !footer) return;
 
  if (carrito.length === 0) {
    lista.innerHTML = `<div class="carrito-vacio"><span class="carrito-vacio__icono">🛍️</span><p class="carrito-vacio__texto">Tu pedido está vacío.<br>Agregá productos del catálogo.</p></div>`;
    footer.innerHTML = "";
    return;
  }
 
  lista.innerHTML = carrito.map((item) => {
    const sub = item.precio > 0 ? `₡${(item.precio * item.cantidad).toLocaleString("es-CR")}` : "Consultar";
    const n   = item.nombre.replace(/'/g, "\\'");
    return `<div class="carrito-item" role="listitem">
      <div class="carrito-item__info"><p class="carrito-item__nombre">${item.nombre}</p><p class="carrito-item__precio">${sub}</p></div>
      <div class="carrito-item__controles">
        <button class="carrito-item__btn" onclick="cambiarCantidad('${n}',-1)">−</button>
        <span class="carrito-item__cantidad">${item.cantidad}</span>
        <button class="carrito-item__btn" onclick="cambiarCantidad('${n}',1)">+</button>
      </div></div>`;
  }).join("");
 
  const totalCRC = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const totalTexto = totalCRC > 0 ? `₡${totalCRC.toLocaleString("es-CR")}` : "Consultar precio";
 
  footer.innerHTML = `
    <div class="carrito-drawer__total">
      <span class="carrito-drawer__total-label">Total aprox.</span>
      <span class="carrito-drawer__total-precio">${totalTexto}</span>
    </div>
    <p class="carrito-drawer__aviso">Precios referenciales. Pueden variar según el diseño.</p>
    <a href="${generarUrlWhatsApp()}" target="_blank" rel="noopener noreferrer" class="carrito-drawer__whatsapp">
      📲 Enviar pedido por WhatsApp
    </a>
    <button class="carrito-drawer__vaciar" onclick="vaciarCarrito()">Vaciar pedido</button>`;
}
 
function generarUrlWhatsApp() {
  const lineas = carrito.map((i) => {
    const sub = i.precio > 0 ? `₡${(i.precio * i.cantidad).toLocaleString("es-CR")}` : "Consultar";
    return `• ${i.nombre}${i.cantidad > 1 ? ` x${i.cantidad}` : ""} — ${sub}`;
  });
  const total = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const msg = [
    "Hola! Me interesa hacer un pedido en SubliMomentos V&M 🌸", "",
    "Productos seleccionados:", ...lineas, "",
    total > 0 ? `Total aproximado: ₡${total.toLocaleString("es-CR")}` : "Total: Consultar precios",
    "", "¿Pueden ayudarme con mi pedido?",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;
}
 
/* ================================================================
   14. FORMULARIO localStorage
================================================================ */
function iniciarFormStorage() {
  const n = document.getElementById("campo-nombre");
  const p = document.getElementById("campo-producto");
  const m = document.getElementById("campo-mensaje");
  if (!n) return;
  n.value = localStorage.getItem(STORAGE.FORM_NOMBRE)   || "";
  if (p) p.value = localStorage.getItem(STORAGE.FORM_PRODUCTO) || "";
  if (m) m.value = localStorage.getItem(STORAGE.FORM_MENSAJE)  || "";
  n.addEventListener("input", () => localStorage.setItem(STORAGE.FORM_NOMBRE,   n.value));
  if (p) p.addEventListener("input", () => localStorage.setItem(STORAGE.FORM_PRODUCTO, p.value));
  if (m) m.addEventListener("input", () => localStorage.setItem(STORAGE.FORM_MENSAJE,  m.value));
}
 
/* ================================================================
   15. ENLACE ACTIVO
================================================================ */
function marcarEnlaceActivo() {
  const update = () => {
    const hash = window.location.hash || "#inicio";
    document.querySelectorAll(".nav-primary__enlace").forEach((a) => {
      const href = a.getAttribute("href") || "";
      const on   = href === hash || (!window.location.hash && href === "#inicio");
      a.classList.toggle("nav-primary__enlace--activo", on);
      a.setAttribute("aria-current", on ? "true" : "false");
    });
  };
  update();
  window.addEventListener("hashchange", update);
}
 

/* ================================================================
   16. BOTÓN VOLVER ARRIBA
================================================================ */
function iniciarBotonArriba() {
  const btn = document.getElementById("btn-arriba");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    btn.classList.toggle("es-visible", window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ================================================================
   PUNTO DE ENTRADA
================================================================ */
document.addEventListener("DOMContentLoaded", iniciarApp);