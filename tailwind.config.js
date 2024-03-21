/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xm': '376px',
      // => @media(min-width:376px) 
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
      '3xl': '1536px',
      // => @media (min-width: 1536px)
    },
    extend: {
      // keyframes: {
      //   fadeInUp: {
      //     '0% , 100%': { transform: 'translateX(10px)' },
      //     '50%': { transform: 'translateX(0px)' },
      //   }
      // },
      // animation: { 'fadeInUp': 'fadeInUp 2s ease-in-out infinite' },

      keyframes: {
        fadeInUp: {
          '0%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        fadeInLeft: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        fadeInRight: {
          '0%': { transform: 'translateX(100px)' },
          '100%': { transform: 'translateX(0px)' }
        },
        fadeInSticky: {
          '0%':
          {
            opacity: '0',
            transform: 'translate3d(0, -20px, 0)',
            transform: 'translate3d(0, -20px, 0)'
          },
          '100%': {
            opacity: '1',
            transform: 'none',
            transform: 'none',
          }
        }
      },
      animation: {
        'fadeInUp': ' fadeInUp 1.5s ease-in-out 1',
        'fadeInLeft': 'fadeInLeft 1.5s ease-in-out 1',
        'fadeInRight': 'fadeInRight 1.5s ease-in-out 1',
        'fadeInSticky': 'fadeInsTicky 2s  ease-in-out 1',
      },

      fontFamily: {
        kalam: ["Kalam", 'cursive'],
        robota: ["Roboto Slab", 'serif'],
        lato: ["Lato", 'sans-serif'],
        anta: ["Anta", 'sans-serif'],
        jura: ["Jura", 'sans-serif'],
      },
      colors: {
        textColor: '#7E5109',
      },
    },
  },
  plugins: [],
}

