/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sea-buckthorn': {
          50: '#FEFAF4',
          100: '#FEF6E9',
          200: '#FCE8C8',
          300: '#FBDBA7',
          400: '#F7BF66',
          500: '#F4A424',
          600: '#DC9420',
          700: '#926216',
          800: '#6E4A10',
          900: '#49310B',
        },
      },
      width: {
        box: '500px'
      },
      height: {
        box: '500px'
      }
    }
  },
  variants: {},
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mingcute", "twemoji"]),
    }),
  ],
  safelist: ['i-mingcute-arrows-up-line', 'i-mingcute-arrows-down-line', 'bg-gray-200', 'bg-sea-buckthorn-500', 'bg-sea-buckthorn-100', 'text-gray-500']
}

