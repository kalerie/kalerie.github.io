/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      // xxs: '320px',
      xs: '480px',
      sm: '768px', // 640px??
      md: '976px',

      lg: '1024px',
      xl: '1280px',
      // xxl: '1440px',
    },
    colors: {
      'bg': '#282C33',
      'violet': '#C778DD',
      'gray': '#ABB2BF',
    },
    // borderWidth: {
    //   DEFAULT: '1px',
    //   '0': '0',
    //   '2': '2px',
    //   '3': '3px',
    //   '4': '4px',
    //   '6': '6px',
    //   '8': '8px',
    // },
    extend: {


      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },

  plugins: [],
}


