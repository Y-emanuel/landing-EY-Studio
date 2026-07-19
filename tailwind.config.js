/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050507',
        graphite: '#111116',
        violet: {
          pulse: '#8b5cf6',
          haze: '#a78bfa',
          deep: '#3b0764',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(139, 92, 246, 0.1)', // aún más reducido
      },
    },
  },
  plugins: [],
}