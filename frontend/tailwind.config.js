/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FBBF24',
        secondary: '#7dd3fc',
        dark: '#070B15',
        light: '#DBEAFE',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
