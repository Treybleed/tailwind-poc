const colors = require('tailwindcss/colors')

module.exports = {
  purge: { 
    enabled: false,

  },
  darkMode: false,
  theme: {
    screens: {
      'sm': '600px',
      'md': '720px',
      'lg': '840px', 
      'xl': '1024px',
      '2xl': '1280px',
    },
    container: { 
      center: true
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      gray: colors.coolGray,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      primary: '#FFE800'
    },   
    fontFamily: { 
      'sans': ['Montserrat Regular'],
      'display': ['Montserrat Semi Bold'],
      'displayBold': ['Montserrat Bold'],
    }, 
    extend: {
      screens: {
        // Pre sm extensions
        '2xs': '360px',
        '1xs': '400px', 
        'xs': '480px',
        // Post 2xl extensions
        '3xl': '1440px',
        '4xl': '1600px',
        '5xl': '1920px',
      }
    },
  },
  variants: {
    extend: {
      backgroundBlendMode: ['hover'],
      mixBlendMode: ['hover']
    },
  },
  plugins: [],
}