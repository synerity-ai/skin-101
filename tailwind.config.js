/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F9AA8', // teal accent
          dark: '#0B737D',
          light: '#4EC4CF',
        },
        accent: '#C18E3C', // warm gold
        ink: '#0F1C2C',
        muted: '#6B7785',
        mist: '#F5F7FA',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        card: '0 20px 45px rgba(15, 26, 44, 0.08)',
      },
    },
  },
  plugins: [],
};

