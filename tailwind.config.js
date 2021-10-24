// tailwind.config.js

module.exports = {
  purge: {
    content:[
      './_src/**/*.11ty.js',
      './_src/**/*.js', 
      './src/**/**/*.md'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      'sm': '24rem',
      'md': '28rem',
      'lg': '52rem',
      'screen-xl': '1280px',
    },
    extend: {
      colors: {
        'academy-green': '#01592F',
        'business-blue': '#1E688B',
        'community-blue': '#156D8C'
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
