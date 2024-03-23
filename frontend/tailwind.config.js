/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors:{
      white: '#FFFFFF',
      signUpWithGoogle: '#CCCCCC',
      alreadyHaveAccount: '#909296',
      signIn: '#C1C2C5',
      black: '#000000',
      logoBorderColor: '#25262B',
      footerBgColor: '#121212',
      footerText: '#5C5F66'

      
    },

    fontFamily:{
      openSans: 'Open Sans',
    },

    borderWidth:{
      
    },


    extend: {
      opacity:{
         '48': '48%'
      },

      lineHeight:{
        '31': '31px',
        '26': '26.1px',
        '21': '21.7px',
        '24':'24.8px',
        '18': '18.6px'
        
      },
      fontSize:{
        '20': '20px',
        '16': '16px',
        '14': '14px',
        '12': '12px'

      },
      inset: {
       

        
        
        
      },

      borderRadius:{
       '4': '4px',
       '17': '17px'
      },
      width:{
       
       '380': '380px',
       '145': '145px',
       '16': '16px',
       '23': '23.5px',
       '195': '195px',
       '248': '248px',
       '1440': '1440px',
       '156': '156.77px',
       '220': '220px'

       

       



      },
      height:{
        '31': '31px',
        '27': '27px',
        '21': '21px',
        '32': '32px',
        '48': '48px',
        '103': '103px',
        '25':'25px',
        '64': '64px',
        '24': '24px',
        '663': '663px',
        '19': '19px'

        

      },

      spacing: {
        
      },
      margin: {
        '40': '40px',
        '24': '24px',
        '8': '8px',
        '99': '99.75px',
        '12': '12px',
        '48': '48px',
        '92': '92.5px',
        '4': '4px',
        '66': '66px',
        
      
      },
      padding: {
        '13': '13px',
        '35': '35px',
        '20': '20px',
        '100': '100px',
        '641':'641.62px',
        '610': '610px',
        '6': '6.5px'

      },

    },
  },
  plugins: [],
}

