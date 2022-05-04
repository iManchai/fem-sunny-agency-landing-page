module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'neutral': {
        100: 'hsl(0, 0%, 100%)',
        200: 'hsl(210, 4%, 67%)',
        300: 'hsl(232, 10%, 55%)',
        400: 'hsl(213, 9%, 39%)',
        500: 'hsl(212, 27%, 19%)'
      },
      'primary': {
        100: 'hsl(7, 99%, 70%)',
        200: 'hsl(51, 100%, 49%)',
        300: 'hsl(167, 40%, 24%)',
        400: 'hsl(198, 62%, 26%)',
        500: 'hsl(168, 34%, 41%)',
        600: '#90d4c5'
      }
    }, 
    fontFamily: {
      title: ['Fraunces, serif'],
      body: ['Barlow, sans-serif']
    },
    screens: {
      'md': '750px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {},
  },
  plugins: [],
}
