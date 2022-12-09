/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				red: "#CC2429",
				blue: "#76CFCF",
				dark: "#1B1E21",
			},
			fontFamily: {
				"libre-franklin": ['Libre Franklin', "sans-serif"],
			},
		},
	},
	plugins: [],
};
