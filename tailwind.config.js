/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        'filter-color': 'rgba(255, 255, 255, 0.4)',
      },
      backgroundColor: {
        btn: 'rgba(255, 255, 255, 0.1)',
        'btn-dark': 'rgba(0, 0, 0, 0.15)',
        'btn-hover': 'rgba(255, 255, 255, 0.2)',
        ripple: '#ffffffb3',
      },
      gridTemplateColumns: {
        product: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      animation: {
        ripple: 'ripple 600ms linear',
      },
      keyframes: {
        ripple: {
          to: {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
