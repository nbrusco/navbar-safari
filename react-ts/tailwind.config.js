import withMT from '@material-tailwind/react/utils/withMT';

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', ...defaultTheme.fontFamily.serif],
        gotham: ['GothamRounded', ...defaultTheme.fontFamily.serif],
        'arial': ['Arial', ...defaultTheme.fontFamily.serif],
        'akzidenz': ['Akzidenz', ...defaultTheme.fontFamily.serif],
        'roboto': ['Roboto', ...defaultTheme.fontFamily.serif],
        'california': ['California', ...defaultTheme.fontFamily.serif],
        'ultraquick': ['Ultraquick', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'button-inactive': '#B0B0B0',
        'button-inactive-text': '#737273',
        'zona-purple': '#6D3089',
        'zona-light-purple': '#CB67D3',
        'zona-red': '#DF0722',
        'zona-light-gray' : '#D4D4D4',
        'zona-gray': '#DDDDDD',
        'zona-yellow': '#FFD10A',
        'zona-yellow-gourmet': '#F4D600',
        'zona-yellow-dishes': '#FBBD00',
        'zona-lime': '#C4D200',
        'zona-blue': '#1C73C3',
        'zona-game-yellow': '#FFD10A',
        'zona-game-orange': '#E9720A',
        'zona-game-blue': '#008FBE',
        'zona-game-green': '#43A62A',
        'zona-game-tomato': '#F95300',
      },
      screens: {
        'tablet': '800px',
        'hd': '1366px',
        '3xl': '1728px',
        'fhd': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate')
  ],
});
