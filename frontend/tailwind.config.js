/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      white: '#FFFFFF',
      signUpWithGoogle: '#CCCCCC',
      alreadyHaveAccount: '#909296',
      signIn: '#C1C2C5',
      black: '#000000',
      logoBorderColor: '#25262B',
      footerBgColor: '#121212',
      footerText: '#5C5F66',
      sideBarBorderColor: '#343A40',
      sideBarBackgroundColor: '#101113',
      navigationBackgroundColor: '#1F1F1F',
      // navigationBackgroundColor: '#343A40'
      themeBackgroundColor: '#222426',
      messageIllustrationColor: '#9E9E9E',
      eventBackgroundColor: '#2F3030',
      lightThemeOneboxtextColor: '#5B5F66',
      refreshButtonBackgroundColor: '#25262B',
      allInboxsTextColor: '#4285F4',
      inboxSelectedTextColor: '#7F7F7F',
      searchContainerBackgroundColor: '#23272C',
      searchContainerThemeBackgroundColor: '#EEF1F4',
      newRepliesBackgroundColor: '#222426',
      twentySixTextColor: '#5C7CFA',
      newRepliesTextColor: '#E6E6E6',
      detailsTextColor: '#B9B9B9',
      bodyMessageColor: '#E1E0E0',
      bodyMessageBackgroundColor: '#141517',
      emailDetailsTextColor: '#AEAEAE',
      emailDateTimeTextColor: '#7F7F7F',
      newProductTextColor: '#F8FAFC',
      mettingCompltedTextColor: '#D3D7DB',
      todayBackgroundColor: '#171819',
      replyTextColor: '#BAB9BD',
      replyOtherTextColor: '#E7E7E7',
      replyMessageBodyTextColor: '#636970',
      replyMessageBodyThemeTextColor: '#172B4D',
      sidebarLightThemeBackgroundColor: '#FAFAFA',
      lightThemeIconClor:'#919EAB',
      newProductLaunchThemeBckground:'#F9F9F9',
      newProductLaunchThemeTextColor:'#637381',
      leadDeailsthemeBackgroundColor:'#ECEFF3',
      leadDetailsThemeTextColor: '#454F5B'
      
    },

    // 
    fontFamily: {
      openSans: 'Open Sans',
      DMSans: 'DM Sans',
      inter: 'Inter',
      SFPro: 'SF Pro',
      sfPro: 'SF Pro'
    },

    borderWidth: {

    },


    extend: {
      opacity: {
        '48': '48%'
      },

      lineHeight: {
        '31': '31px',
        '14': '14.52px',
        '26': '26.1px',
        '21': '21.7px',
        '24': '24.8px',
        '18': '18.6px',
        '22': '21.79px',
        '36': '36.53px',
        '27': '27.4px',
        '28': '27.24px',
        '19': '19.07px',
        '20': '20px',
        '16': '16.94px',
        '17': '17.7px',
        '23': '18px',
        '34': '16.34px',
        '33': '16.71px',
        '41': '18px',
        '71': '13.62px'
        

      },
      fontSize: {
        '20': '20px',
        '16': '16px',
        '14': '14px',
        '12': '12px',
        '24': '24px',
        '18': '18px',
        '13': '13px',
        '10': '10px',
        '15': '15px',
        '21': '20.43px'

      },
      inset: {
        '57': '32px',
        '65': '-68px',
         '66': '0px',
         '67': '0px',
         '35': '-160px',
         '36': '269px',
         '20': '-30px',
         






      },

      borderRadius: {
        '4': '4px',
        '17': '17px',
        '80': '80px',
        '2': '2px',
        '8': '8px',
        '47': '47px'
       
      },
      width: {
        '24': '24px',
        '114': '114px',
        '268': '268px',
         '9': '9.6px',
        '289': '289px',
        '380': '380px',
        '145': '145px',
        '16': '16px',
        '23': '23.5px',
        '195': '195px',
        '248': '248px',
        '210': '210px',
        '95': '95px',
        '10': '10px',
        '1440': '1440px',
        '156': '156.77px',
        '220': '220px',
        '56': '56px',
        '79': '100px',
        '1383': '1465px',
        '136': '136px',
        '127': '127px',
        '481': '481px',
        '129': '140px',
        '51': '51px',
        '137': '137px',
        '113': '113px',
        '7': '7.78px',
        '832': '832.3px',
        '280': '280.02px',
        '533': '543px',
        '33': '33px',
        '48': '48px',
        '28': '28px',
        '32': '32px',
        '34': '45px',
        '278': '278px',
        '799': '890px',
        '171': '171px',
        '112': '112px',
        '151': '151px',
        '180': '180px',
        '146': '146.56px',
        '50': '50.36px'
       











      },
      height: {
        '22': '22px',
        '54': '54px',
        '13': '13.2px',
        '31': '31px',
        '27': '27px',
        '40': '40px',
        '21': '21px',
        '32': '32px',
        '48': '48px',
        '103': '103px',
        '25': '25px',
        '38': '38px',
        '64': '64px',
        '24': '24px',
        '663': '663px',
        '19': '19px',
        '760': '760px',
        '57': '57px',
        '36': '36px',
        '16': '16px',
        '6': '6.17px',
        '693': '696px',
        '392': '391.4px',
        '229': '229.4px',
        '115': '115px',
        '37': '37px',
        '70': '70px',
        '634': '634px',
        '546': '546px',
        '28': '28px',
        '56': '56px',
        '696': '706px',
        '71': '71px',
        '17': '17px',
        '26': '26px',
        '23': '23px',
        '76': '76px',
        '33': '33px',
        '12': '12px',
        
        
       





      },

      spacing: {

      },
      margin: {
        '25': '25px',
        '40': '40px',
        '24': '24px',
        '8': '8px',
        '99': '99.75px',
        '12': '12px',
        '48': '48px',
        '49': '49px',
        '92': '92.5px',
        '4': '4px',
        '66': '66px',
        '19': '19px',
        '47': '22px',
        '1154': '1154px',
        '21': '21px',
        '3': '3px',
        '22': '22px',
        '1': '1px',
        '7': '7px',
        '68': '68px',
        '142': '142px',
        '274': '274px',
        '276': '276.14px',
        '149': '149.65px',
        '122': '122px',
        '17': '17px',
        '5': '5px',
        '269': '222px',
        '15': '15px',
        '50': '35px',
        '14': '14px',
        '10': '10px',
        '32': '32px',
        '16': '16px',
        '241': '241px',
        '6': '6.91px',
        '9': '6.31px',
        '63': '63px',
        '23': '23px',
        '11': '11.5px',
        '20': '20px',
        '18': '18px',
        '47': '18.5px',
        

      
     
        
       







      },
      padding: {
        '13': '13px',
        '35': '35px',
        '20': '20px',
        '100': '100px',
        '641': '641.62px',
        '610': '610px',
        '6': '6.5px',
        '7': '6px',
        '21': '21px',
        '33': '33.5px',
        '3': '3px',
        '5': '5px',
        '4': '4px',
        '122': '122px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '15': '15px',
        '14': '14px',
        '27': '27px',
        '30': '20.33px',
        '81': '6px',
        '40': '40px',
        '24': '24px',
        '32': '32px',
        '11': '11px',
        '41': '7px'


      },

    },
  },
  plugins: [],
}

