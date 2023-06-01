module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				textColor: '#540b0e',
				background: '#f8f9fa',
				'background-dark': '#e8e8e4',
				'accent-100': '#f8edeb',
				'accent-200': '#ffd7ba',
			},
			fontFamily: {
				'banner-heading': ['Courgette', 'cursive'],
				heading: ['Oswald', 'sans-serif'],
				body: ['Itim', 'cursive'],
			},
			fontSize: {
				'2xs': '0.5rem',
			},
		},
	},
	plugins: [],
};
