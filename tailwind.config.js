const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'lspdrz-gray': '#2a2a2a',
        'lspdrz-pink': '#ff6d91'
      },
    },
    fontFamily: {
      /* Kind of a strange way to set the default because Georgia is serif,
      but tailwind defaults to the 'sans' font family */
      'sans': ['Georgia', ...defaultTheme.fontFamily.sans]
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '1.5xl': '1435px', // custom to accommodate size of image on home page perfectly
      '2xl': '1536px',
    },
  },
  plugins: [],
}
