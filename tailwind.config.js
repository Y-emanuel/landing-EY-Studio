/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#090A0F',        // Fondo base ultra oscuro
          surface: '#12151E',     // Tarjetas y elementos elevados (glassmorphism)
          border: '#222838',      // Bordes neón/oscuros
          primary: '#7C3AED',     // Violeta Neón principal
          primaryHover: '#6D28D9',
          accent: '#A855F7',      // Violeta Neón claro
          cyan: '#00E5FF',        // Cian Neón
          neonGreen: '#00FF87',   // Verde Neón para WhatsApp/CTAs
          text: '#FFFFFF',        // Texto principal
          muted: '#94A3B8',      // Texto secundario
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'], // Fuente principal para títulos impactantes
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}