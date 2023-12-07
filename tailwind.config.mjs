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
		  colors: {
			'daogrey': '#dedede',
			'daoblue1': '#4e8bff',
			'daoblue2': '#3d6ed1',
			'010113': '#010113',
			'1e0a71': '#1e0a71',
			'241451': '#241451',
		  }
		},
		backgroundColor: {
			'blue': '#2441bd'
		}
	},
	plugins: [],
}
