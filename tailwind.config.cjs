/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,html}"],
	theme: {
		extend: {
			colors: {
				red: "#CC2429",
				blue: "#76CFCF",
				dark: "#1B1E21",
				"red-rgba": "rgba(204, 36, 41, 0.6) ",
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
