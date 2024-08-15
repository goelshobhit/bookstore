const formPlugin = require('@tailwindcss/forms')
const animatePlugin = require('tailwindcss-animate')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [formPlugin, animatePlugin],
}
