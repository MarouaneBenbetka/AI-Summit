/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,html}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				red: "#CC2429",
				blue: "#76CFCF",
				dark: "#1B1E21",
				"red-rgba": "rgba(204, 36, 41, 0.4) ",
			},
			fontFamily: {
				"libre-franklin": ["Libre Franklin", "sans-serif"],
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "9%",
			},
		},
	},
	plugins: [],
};
