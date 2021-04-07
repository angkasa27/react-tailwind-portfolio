module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#56CCF2',
          2: '#2F80ED',
        },
        orange: '#FF7F50',
      },
      fontFamily: {
        nunito: ['Nunito', 'Arial', 'sans-serif'],
      },
      height: {
        screen90: '90vh',
        screen80: '80vh',
        screen70: '70vh',
        screen60: '60vh',
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translate(0, -1rem)' },
          '50%': { transform: 'translate(0, 0rem)' },
        },
        scrollDown: {
          '0%, 100%': { transform: 'translate(0, 0rem)' },
          '50%': { transform: 'translate(0, 1rem)' },
        },
        navDown: {
          '0%': { transform: 'translate(0, -4rem)' },
          '100%': { transform: 'translate(0, 0rem)' },
        },
      },
      animation: {
        upDown: 'upDown 3s ease-in-out infinite',
        scrollDown: 'scrollDown 2s ease-in-out infinite',
        navDown: 'navDown .2s ease-out',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
      },
      scale: {
        175: '1.75',
        200: '2',
      },
      rotate: {
        20: '20deg',
        25: '25deg',
      },
      fontSize: {
        '12xl': '12rem',
        '15xl': '15rem',
        '20xl': '20rem',
      },
    },
  },
  variants: {
    fontWeight: ['hover', 'focus'],
  },
  plugins: [],
};
