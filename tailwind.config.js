/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        honeycream: '#F6E7B4',
        honeygold: '#D99A21',
        wood: '#7A4E18',
        forest: '#1F3A2E',
        natural: '#FAF7EF',
        ink: '#1D1D1B',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(31, 58, 46, 0.18)',
        lift: '0 24px 60px -20px rgba(31, 58, 46, 0.28)',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'pollen-drift': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '20%': { opacity: '0.7' },
          '100%': { transform: 'translateY(-120px) translateX(40px)', opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pollen-drift': 'pollen-drift 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
