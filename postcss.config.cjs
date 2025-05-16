// postcss.config.cjs
module.exports = {
	plugins: [
		require("@tailwindcss/postcss"), // 👈 the new bridge
		require("autoprefixer")
	]
};
