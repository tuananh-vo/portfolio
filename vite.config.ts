import tailwindcss from "@tailwindcss/vite"; // 👈
import react from "@vitejs/plugin-react";
import { defineConfig, type PluginOption } from "vite";

export default defineConfig({
	plugins: [react(), ...(tailwindcss() as PluginOption[])],
	base: "/portfolio/",
	server: {
		host: true,
		port: 3003
	}
});
