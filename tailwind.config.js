/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'musix-blue': '#2193b0',
				'musix-red': '#f3bbcf',
				'musix-red-border': '#ec8db0'
			}
		}
	},
	plugins: []
};
