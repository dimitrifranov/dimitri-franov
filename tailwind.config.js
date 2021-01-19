module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      orange: '#db6b0e',
      ligthBlue: '#8aaca3',
      darkBlue: '#0d1f2f',
      blue: '#3b6670',
    },
    fontFamily: {
      display: ['Montserrat'],
    },
    extend: {
      spacing: {
        half: '50%',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#ffff',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
