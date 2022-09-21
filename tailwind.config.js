const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			typography: ({theme}) => ({
        // Default styles are here (search for "prose" for markdown styles): https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.lspdrz-pink'),
            '--tw-prose-headings': theme('colors.lspdrz-pink'),
            '--tw-prose-bold': theme('colors.lspdrz-pink'),
            '--tw-prose-links': theme('colors.lspdrz-pink'),
            '--tw-prose-invert-body': '#000000',
            '--tw-prose-invert-headings': '#000000',
            '--tw-prose-invert-bold': '#000000',
            '--tw-prose-invert-links': '#000000',
					},
				},
			}),
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
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1.5xl': '1435px', // custom to accommodate size of image on home page perfectly

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
