/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#181e4b',
        coral: '#df6951',
        gold: '#f1a501',
        muted: '#5e6282',
        cream: '#fff1da',
      },
      fontFamily: {
        heading: ['Volkhov', 'Georgia', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 45px rgba(0, 0, 0, 0.08)',
        card: '0 25px 45px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}