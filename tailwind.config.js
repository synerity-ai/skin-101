/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EC4899', // pink accent
          dark: '#DB2777',
          light: '#F472B6',
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

