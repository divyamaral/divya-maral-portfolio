/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: '#EFEAE2',
          subtle: '#E6E0D6',
        },
        ink: {
          DEFAULT: '#1C1B1A',
          muted: '#59554E', // 6.17:1 contrast on #EFEAE2 (WCAG AA/AAA compliant)
        },
        forest: {
          DEFAULT: '#064734',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        editorial: '72rem', // 1152px
      },
      transitionDuration: {
        editorial: '500ms',
      },
    },
  },
  plugins: [],
};