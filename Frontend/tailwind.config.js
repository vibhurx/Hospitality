/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", "./index.html" ],
  theme: {
    extend: {},
    theme: {
      fontFamily: {
        'display': [ 'Oswald', ],
        'body': [ '"Open Sans"', ],
      }
    },
    screens: {
      '2xs': '0px',
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    minWidth: {
      '1': '30rem',
    },
    colors: {
      'whitish': "#f8f8f8",
      'blue': '#1a61a7',
      'blueHover': '#01478d',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'greenHover': '#13ba46',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#D3D3D3',
      'gray-light': '#d3dce6',
      // 'indigo': 'rgb(99 102 241)',
      'white': '#ffffff',
      'bgcolor': '##f5f5f5',
      'indigo': 'indigo',
      'red': 'red',
      'yellowish': "#b4da55",
      'yellowishHover': "#b4da35",
    },
    // fontFamily: {
    //   sans: [ 'Graphik', 'sans-serif' ],
    //   serif: [ 'Merriweather', 'serif' ],
    // },

  },
  plugins: [
    require( 'tailwindcss-debug-screens' ),
  ],
}
