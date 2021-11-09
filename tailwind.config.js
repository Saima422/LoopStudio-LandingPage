const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				black: '#000',
			},
			spacing: {
				'98': '30rem',
				'100': '44rem',
				'105': '53rem'
			}
		},
		screens: {
			xsm: '370px',
			sm: '640px',
			mid: '695px',
			md: '768px',
			lm: '900px', 
			...screens,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
