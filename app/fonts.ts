import localFont from "next/font/local";

/**
 * Ambit - Fuente para títulos
 * Incluye todos los pesos y estilos (normal + italic)
 */
export const fontAmbit = localFont({
  src: [
    { path: "../Fuentes/Ambit Thin.otf", weight: "100", style: "normal" },
    { path: "../Fuentes/Ambit Thin Italic.otf", weight: "100", style: "italic" },
    { path: "../Fuentes/Ambit ExtraLight.otf", weight: "200", style: "normal" },
    {
      path: "../Fuentes/Ambit ExtraLight Italic.otf",
      weight: "200",
      style: "italic",
    },
    { path: "../Fuentes/Ambit Light.otf", weight: "300", style: "normal" },
    { path: "../Fuentes/Ambit Light Italic.otf", weight: "300", style: "italic" },
    { path: "../Fuentes/Ambit Regular.otf", weight: "400", style: "normal" },
    { path: "../Fuentes/Ambit Italic.otf", weight: "400", style: "italic" },
    { path: "../Fuentes/Ambit SemiBold.otf", weight: "600", style: "normal" },
    {
      path: "../Fuentes/Ambit SemiBold Italic.otf",
      weight: "600",
      style: "italic",
    },
    { path: "../Fuentes/Ambit Bold.otf", weight: "700", style: "normal" },
    { path: "../Fuentes/Ambit Bold Italic.otf", weight: "700", style: "italic" },
    { path: "../Fuentes/Ambit Black.otf", weight: "900", style: "normal" },
    { path: "../Fuentes/Ambit Black Italic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-ambit",
  display: "swap",
});

/**
 * Inter - Fuente para texto de cuerpo
 */
export const fontInter = localFont({
  src: [
    { path: "../Fuentes/Inter-Thin.ttf", weight: "100", style: "normal" },
    { path: "../Fuentes/Inter-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../Fuentes/Inter-Light.ttf", weight: "300", style: "normal" },
    { path: "../Fuentes/Inter-Regular.ttf", weight: "400", style: "normal" },
    { path: "../Fuentes/Inter-Medium.ttf", weight: "500", style: "normal" },
    { path: "../Fuentes/Inter-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../Fuentes/Inter-Bold.ttf", weight: "700", style: "normal" },
    { path: "../Fuentes/Inter-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../Fuentes/Inter-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});
