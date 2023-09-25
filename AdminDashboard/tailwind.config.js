/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
		"./",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			lg2: "1036px",
			xl: "1440px",
		},
		colors: {
			//BACKGROUND
			"dark-bg": "#222b3c",
			"soft-bg": "#384256",
			"main-bg": "#2a3447",

			white: "#FFF",
			brown: "#8A6534",
			beige: "#FFF4DB",
			// "main-blue": "#378795",
			// "blue-light": "#8CC7D2",
			// "blue-extra-light": "#C4E2E7",
			// "blue-dark": "#0F5E6D",
			// "twitter-blue": "#3BBEEF",
			// "facebook-blue":"#245A96",
			// "linkedin-blue":"#037CB7",

			// TEXT
			"main-color": "#fff",
			"soft-color": "#ddd",
			"dark-color": "#2a3447",
		},
		fontFamily: {},
		extend: {
			animation: {
				"slide-down": "slide-down 0.7s ease-out forwards",
				opacity: "opacity 10s ease-out forwards",
			},
			keyframes: {
				"slide-down": {
					"0%": { "max-height": 0 },
					"100%": { "max-height": "20rem" },
				},
				opacity: {
					"0%": { opacity: "0" },
					"40%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
			},
		},
	},
	plugins: [],
};
