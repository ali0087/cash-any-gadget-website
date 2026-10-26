/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Golden yellow — the dominant background and accent palette.
        gold: {
          50: '#FFFBEA',
          100: '#FFF0A6',
          200: '#FFE672',
          300: '#F9D94A',
          400: '#E7C428',
          500: '#D7B936',
          600: '#B89A1E',
          700: '#8C751A',
          800: '#665416',
          900: '#42360F',
        },
        // Deep navy — primary text and header background.
        navy: {
          50: '#E8EEF1',
          100: '#C7D4DB',
          200: '#9AB0BC',
          300: '#6E8C9C',
          400: '#476A7C',
          500: '#2C4F61',
          600: '#1F3D4D',
          700: '#18343F',
          800: '#142B3B',
          900: '#0F212E',
          950: '#0A1822',
        },
        // Deep forest green — secondary accent.
        forest: {
          50: '#E8F0EA',
          100: '#D3E2D6',
          200: '#A7C5AD',
          300: '#7BA884',
          400: '#4F8B5B',
          500: '#356E42',
          600: '#2B5A36',
          700: '#244B3A',
          800: '#1D3C2E',
          900: '#183728',
          950: '#0F261C',
        },
        // Neutral charcoal text & subtle borders.
        ink: {
          50: '#FFFFFF',
          100: '#F6F5EF',
          200: '#D7B936',
          300: '#C9C9C0',
          400: '#5C646C',
          500: '#434A52',
          600: '#333A42',
          700: '#2A3138',
          800: '#20252B',
          900: '#142B3B',
          950: '#0c1015',
        },
        // Aliases so legacy class references resolve to the new palette.
        sage: {
          50: '#FFFBEA',
          100: '#FFF0A6',
          200: '#FFE672',
          300: '#F9D94A',
          400: '#E7C428',
          500: '#D7B936',
          600: '#B89A1E',
          700: '#8C751A',
          800: '#665416',
          900: '#42360F',
          950: '#33280C',
        },
        cash: {
          50: '#FFFBEA',
          100: '#FFF0A6',
          200: '#FFE672',
          300: '#F9D94A',
          400: '#E7C428',
          500: '#D7B936',
          600: '#B89A1E',
          700: '#8C751A',
          800: '#665416',
          900: '#42360F',
          950: '#33280C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,43,59,0.05), 0 6px 20px rgba(20,43,59,0.06)',
        cardHover: '0 4px 10px rgba(20,43,59,0.08), 0 16px 36px rgba(20,43,59,0.10)',
        lift: '0 1px 2px rgba(20,43,59,0.06), 0 10px 28px rgba(20,43,59,0.08)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.5s ease both',
        'scale-in': 'scale-in 0.25s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
};
