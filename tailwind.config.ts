import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{ts,tsx,jsx,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#1e88e5",
				accent: "#ffb300"
			},
			borderRadius: {
				xl: "1rem"
			}
		}
	},
	plugins: []
} satisfies Config;
