import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" },
    },
    extend: {
      // Familias tipográficas
      fontFamily: {
        title: ["var(--font-ambit)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // Paleta Data Rebels - Colorimetría oficial
      colors: {
        // DARKBLACK - DB 500 = Fondo Principal (Negro puro)
        db: {
          100: "#1a1a1f",
          200: "#0f0f14",
          300: "#0a0a0f",
          400: "#060609",
          500: "#000000",
        },
        // FILLS & STROKES - Escala para bordes
        fs: {
          50: "#f5f5f5",
          100: "#e5e5e5",
          200: "#d4d4d4",
          300: "#a3a3a3",
          400: "#737373",
          500: "#525252",
        },
        // GRAY - Textos secundarios (50-200)
        "gray-dr": {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
        },
        // BLUE (main) - CTAs sólidos
        "blue-main": "#1330F4",
        // Electric Blue escala
        "electric-blue": {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#1330F4",
          400: "#0f28c4",
          500: "#0c2090",
        },
        // VIOLET - Acentos y luces (200/300)
        violet: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#c4b5fd",
          300: "#a78bfa",
          400: "#8b5cf6",
          500: "#6d28d9",
        },
        // RED (main) - Acentos
        "red-main": "#ef4444",
        "electric-red": {
          100: "#fee2e2",
          200: "#fecaca",
          main: "#ef4444",
          400: "#dc2626",
          500: "#991b1b",
        },
        // Semánticos: Error, Información, Éxito
        error: {
          100: "#fee2e2",
          200: "#fecaca",
          300: "#ef4444",
          400: "#dc2626",
          500: "#991b1b",
        },
        info: {
          100: "#fef9c3",
          200: "#fef08a",
          300: "#eab308",
          400: "#ca8a04",
          500: "#854d0e",
        },
        success: {
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#22c55e",
          400: "#16a34a",
          500: "#14532d",
        },
        // Compatibilidad legacy
        "dark-deep": {
          DEFAULT: "#0a0a0f",
          200: "#0a0a0f",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      // Sistema de espaciado basado en múltiplos de 8px
      spacing: {
        0: "0",
        "0.5": "4px", // Medio paso para bordes y ajustes finos
        1: "8px",     // 8
        2: "16px",   // 16
        3: "24px",   // 24
        4: "32px",   // 32
        5: "40px",   // 40
        6: "48px",   // 48
        7: "56px",   // 56
        8: "64px",   // 64
        9: "72px",   // 72
        10: "80px",  // 80
        11: "88px",  // 88
        12: "96px",  // 96
        14: "112px", // 112
        16: "128px", // 128
        20: "160px", // 160
        24: "192px", // 192
        28: "224px", // 224
        32: "256px", // 256
      },
      // Sistema de tipografía - guía de estilo del proyecto
      fontSize: {
        // Display: para H1 del Hero (Desktop)
        display: ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        // Headings Desktop
        "h1-desktop": ["40px", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "h2-desktop": ["32px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "h3-desktop": ["24px", { lineHeight: "1.35", letterSpacing: "0" }],
        // Headings Móvil
        "h1-mobile": ["32px", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "h2-mobile": ["24px", { lineHeight: "1.3", letterSpacing: "0" }],
        // Body & UI
        "body-large": ["16px", { lineHeight: "1.6", letterSpacing: "0" }],
        "subheading-1": ["20px", { lineHeight: "1.5", letterSpacing: "0" }],
        "subheading-1-mobile": ["16px", { lineHeight: "1.5", letterSpacing: "0" }],
        "button-large": ["16px", { lineHeight: "1.25", letterSpacing: "0.01em" }],
        // Overline (guía de estilo)
        "overline-large": ["12px", { lineHeight: "1.4", letterSpacing: "0.2em" }],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #d946ef 0%, #a855f7 50%, #9333ea 100%)",
        "btn-enroll":
          "linear-gradient(135deg, #1330F4 0%, #7e22ce 100%)",
      },
      keyframes: {
        "mtp-pulse": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.85", filter: "brightness(1.35)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "header-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "header-out": {
          from: { opacity: "1", transform: "scale(1)" },
          to: { opacity: "0", transform: "scale(0.95)" },
        },
      },
      animation: {
        "mtp-pulse": "mtp-pulse 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "header-in": "header-in 0.2s ease-out forwards",
        "header-out": "header-out 0.15s ease-in forwards",
      },
    },
  },
  plugins: [],
};

export default config;
