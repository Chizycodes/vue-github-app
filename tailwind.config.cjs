/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#0F2330',
				secondary: '#FFCD29',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [],
	},
};
