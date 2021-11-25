module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontSize: {
        'xxs': '0.625rem', //  10px   
        '5xxl': '3.25rem', //  52px
        '3xxl': '2rem', //  32px
        'xxl': '1.375rem', //  22px
        '10xl': '16.25rem', //  260px
      },

      colors: {
        sdbGrey:'rgb(68, 76, 97)',  
        sdbBlue: 'rgb(8, 126, 173)',     
        sdbBlack: '#191919',        
        sdbWhite: '#FDFDFD',      
        },

        fontFamily: {      
          'Source-Code-Pro': ['Source Code Pro', 'monospace'],
          'Work-Sans': ['Work Sans', 'sans-serif'],
          'Neuzeit-Grotesk-Bold': ['neuzeit-grotesk', 'sans-serif']
        },      

    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
      textColor: ['group-hover'],
      borderRadius: ['hover', 'focus'],
      mixBlendMode: ['hover', 'focus'],
      translate: ['group-hover'],
      opacity: ['group-hover'],
      borderRadius: ['hover', 'group-hover'],
      transform: ['hover', 'group-hover'],
      transitionProperty: ['hover', 'group-hover'],
      translate: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}