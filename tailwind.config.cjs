/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.900'),
          },
        },
      }),
      colors: {
        neutral: {
          100: '#FAFAF9',
          200: '#DFDEDD',
          300: '#C3C2C1',
          400: '#A5A4A1',
          500: '#8A8885',
          600: '#6B6A66',
          700: '#4E4D4B',
          800: '#31312F',
          900: '#1B170E',
        },
        primary: {
          100: '#F5FAFF',
          200: '#D6E9FF',
          300: '#8FC3FF',
          400: '#429AFF',
          500: '#0070F0',
          600: '#0058BD',
          700: '#00408A',
          800: '#00326B',
          900: '#002147',
        },
        secondary: {
          100: '#FFFCF5',
          200: '#FFF3D7',
          300: '#FDE296',
          400: '#FAD570',
          500: '#F8C849',
          600: '#E79D08',
          700: '#B97304',
          800: '#693C02',
          900: '#422100',
        },
        positive: {
          100: '#F0FFF7',
          200: '#90FEC1',
          300: '#35FD8F',
          400: '#02D461',
          500: '#017A38',
          600: '#016526',
          700: '#015117',
          800: '#013C0D',
          900: '#002904',
        },
        negative: {
          100: '#FFF5F5',
          200: '#FEDCDC',
          300: '#FCB0B0',
          400: '#ED6868',
          500: '#DE1A1A',
          600: '#A41313',
          700: '#7A0505',
          800: '#550202',
          900: '#330000',
        },
      },
      boxShadow: {
        textfield: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'button-primary':
          '0px 3px 6px rgba(0, 112, 240, 0.15), 0px 2px 4px rgba(0, 112, 240, 0.12)',
        'button-primary-hover':
          '0px 15px 25px rgba(66, 154, 255, 0.15), 0px 5px 10px rgba(66, 154, 255, 0.05)',
        'button-primary-active':
          '0px 1px 3px rgba(0, 88, 189, 0.12), 0px 1px 2px rgba(0, 88, 189, 0.24)',
        'button-negative':
          '0px 3px 6px rgba(222, 26, 26, 0.15), 0px 2px 4px rgba(222, 26, 26, 0.12)',
        'button-negative-hover':
          '0px 15px 25px rgba(237, 104, 104, 0.15), 0px 5px 10px rgba(237, 104, 104, 0.05)',
        'button-negative-active':
          '0px 1px 3px rgba(164, 19, 19, 0.12), 0px 1px 2px rgba(164, 19, 19, 0.24)',
        elevation_minus1:
          'inset 0px 2px 5px 1px rgba(0, 0, 0, 0.16), inset 0px -3px 3px rgba(255, 255, 255, 0.7);',
        elevation_1:
          '0px 1px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
        elevation_2:
          '0px 3px 6px 2px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.12)',
        elevation_3:
          '0px 10px 20px 5px rgba(0, 0, 0, 0.15), 0px 3px 6px rgba(0, 0, 0, 0.1)',
        elevation_4:
          '0px 15px 25px 7px rgba(0, 0, 0, 0.15), 0px 5px 10px rgba(0, 0, 0, 0.05)',
        elevation_5: '0px 20px 40px 9px rgba(0, 0, 0, 0.2)',
        'success-alert': '0px 20px 40px 9px rgba(1, 60, 13, 0.2)',
        'error-alert': '0px 20px 40px 9px rgba(85, 2, 2, 0.2)',
        'info-alert': '0px 20px 40px 9px rgba(0, 50, 107, 0.2)',
        'warning-alert': '0px 20px 40px 9px rgba(105, 60, 2, 0.2)',
      },
      backgroundImage: {
        'textfield-bg':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.105) 0%, rgba(255, 255, 255, 0.025) 10.46%, rgba(247, 247, 247, 0.75) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 89.02%, #D1D1D1 100%)',
        'textfield-bg-focus':
          'linear-gradient(180deg, rgba(0, 112, 240, 0.2) 0%, rgba(255, 255, 255, 0.05) 11.46%, rgba(224, 239, 255, 0.8) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 88.02%, #D1D1D1 100%)',
        'textfield-bg-error':
          'linear-gradient(180deg, rgba(222, 26, 26, 0.2) 0%, rgba(255, 255, 255, 0.05) 11.46%, rgba(252, 228, 228, 0.8) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 88.02%, #F5ADAD 100%)',
        'details-bg-cta':
          'linear-gradient(180deg, rgba(255, 243, 215, 0) 0%, #FFF3D7 100%)',
      },
      width: {
        '5xl': '512px',
      },
      fontSize: {
        xs: ['12px', '24px'],
      },
      screens: {
        'tablet' : '744px',
        'sm-laptop': '950px',  
        'laptop': '1128px',
        'desktop': '1440px',
      },
    },
  },
  daisyui: {
    styled: true,
    themes: ['holidaySun', 'dark'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
};
