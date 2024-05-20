/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				merriweather: ["Merriweather"],
				raleway: ["Raleway Variable"]
			}
		},
	},
	plugins: [],
}
