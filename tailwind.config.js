/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				header: ['Della Respira', 'serif'],
				menu: ['Marcellus', 'serif'],
				body: ['Roboto', 'sans-serif']
			}
		}
	},
	plugins: []
};
