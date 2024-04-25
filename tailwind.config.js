/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		screens: {
			xl: '1450px',
			lg: '1200px',
			md: '992px',
			sm: '768px',
			xs: '480px',
		},
		container: {
			center: true,
			padding: '15px',
		},
		extend: {
			fontFamily: {
				futura: ['Futura PT', 'sans-serif'],
			},
			colors: {
				primary: '#4E5F9D',
				secondary: '#0D7A43',
				orange: {
					200: '#F9F5DC',
					400: '#F7CE24',
					500: '#E86A41',
				},
				brown: {
					200: '#83746D',
				},
				blue: {
					200: '#9EB3CE',
				},
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: 'fade-in .3s ease',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
