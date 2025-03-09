/** @type {import("tailwindcss").Config} */

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				'primary': '#B5E3F1',
				'primary-shadow': '#7bb3c4',
				'secondary': '#0B2236',
				'dark': '#0A162C',
				'dark-hovered': '#061127',
				'primary-dark': '#B5E3F1',
				'primary-shadow-dark': '#B5E3F1',
				'card': '#F3FBFE',
				'card-hovered': '#f7fdff'
			},
			transitionProperty: {
				width: 'width',
				height: 'height',
				color: 'color',
				background: 'background-color'
			},

			container: {
				center: true
			},
			fontFamily: {
				sigmarOne: ['Sigmar One', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')]
};
