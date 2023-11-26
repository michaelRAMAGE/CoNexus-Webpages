/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			'pt-serif-caption': ['PT Serif Caption', 'serif'],
		  },
		  fontSize: {
			'250': '250px',
			'120': '120px',
			'70': '70px',
		  },
		},
	},
	plugins: [],
}
