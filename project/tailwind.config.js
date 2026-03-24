/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAF8F5',
        surface: '#FFFFFF',
        primary: '#2B2623',
        secondary: '#8A7F76',
        accent: {
          DEFAULT: '#B07856',
          light: '#F4ECE4',
          hover: '#8F5F3E',
        },
        calm: {
          DEFAULT: '#5B7B8F',
          light: '#EBF1F4',
        },
        divider: '#E8E2DA',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};
