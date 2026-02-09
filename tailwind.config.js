/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de cores CRX Capital
        navy: {
          DEFAULT: '#000080', // Azul Marinho Profundo
          dark: '#000066',
          light: '#1a1a99',
        },
        lime: {
          DEFAULT: '#b6c939', // Verde da Logo (cor principal)
          light: '#c9d85a',
          dark: '#9fb02f',
        },
        ice: '#F5F5F5', // Branco Gelo
        graphite: '#333333', // Cinza Grafite
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
