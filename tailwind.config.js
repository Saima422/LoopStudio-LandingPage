const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				black: '#000',
			},
		},
		screens: {
			xsm: '370px',
			sm: '640px',
			mid: '695px',
			md: '768px',
			lm: '950px', //900px
			...screens,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
