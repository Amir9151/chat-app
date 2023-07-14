const colors=[require('./node_modules/tailwindcss/colors')];



module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // container:{
      //   center:true,
      //   padding: '10px',
      // },
      // boxShadow:{
      //   glass:"inset 0 2px 22px 0 rgba(255,255,255,0.6)"
      // },
      // colors:{
      //    'grey':colors.grey
      // }
    },
  },
  variants: {
    // extend: {
    //   animation:['hover','focus']
    // },
  },
  plugins: [ require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/line-clamp'),],
}
