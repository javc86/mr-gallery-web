/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements-react/dist/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tw-elements-react/dist/plugin.cjs')],
  darkMode: 'class',
}
