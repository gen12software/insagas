import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondos
        bg: {
          base: "#161616",
          deep: "#111111",
          card: "#1c1c1c",
          "card-alt": "#191919",
          footer: "#0d0d0d",
        },
        // Acento amarillo
        accent: {
          DEFAULT: "#f5c518",
          hover: "#fad000",
          dim: "rgba(245,197,24,0.25)",
          border: "rgba(245,197,24,0.12)",
        },
        // Escala de texto
        ink: {
          primary: "#f0ede8",
          secondary: "#c8c3bb",
          body: "#b5b0a8",
          muted: "#9a958d",
          dim: "#7e7a74",
          faint: "#5e5a54",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.05)",
          mid: "rgba(255,255,255,0.06)",
        },
        whatsapp: "#25d366",
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "sans-serif"],
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      spacing: {
        section: "96px",
      },
      borderRadius: {
        DEFAULT: "2px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 60s linear infinite",
        "marquee-reverse": "marquee-reverse 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
