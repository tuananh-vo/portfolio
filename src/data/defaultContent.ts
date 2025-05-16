export const defaultContent = {
	slides: [
		{
			img: "https://picsum.photos/seed/hero1/1600/700",
			cap: "High-performance UI engineering"
		},
		{
			img: "https://picsum.photos/seed/hero2/1600/700",
			cap: "8+ years crafting web apps"
		},
		{
			img: "https://picsum.photos/seed/hero3/1600/700",
			cap: "React • Vue • TypeScript expert"
		}
	],
	hero: {
		title: "Senior Front-End Engineer",
		subtitle:
			"I build performant web experiences with React, Vue & TypeScript.",
		cta: "Hire Me",
		avatar: "https://avatars.githubusercontent.com/u/000000?v=4"
	},
	about: {
		text: `I'm Raymond Võ, a senior front-end developer with 8+ years of experience shipping production apps for fintech, e-commerce and SaaS startups.`
	},
	skills: [
		"React",
		"Vue.js",
		"Next.js",
		"TypeScript",
		"Tailwind CSS",
		"GraphQL",
		"Jest / RTL",
		"CI/CD"
	],
	projects: [
		{
			id: "p1",
			name: "FinTrack Dashboard",
			desc: "Real-time personal finance dashboard built with React, Recharts and Firebase.",
			img: "https://picsum.photos/seed/p1/800/450",
			link: "https://github.com/yourname/fintrack"
		},
		{
			id: "p2",
			name: "ShopSmart",
			desc: "PWA e-commerce template powered by Vue 3 + Pinia, SSR with Vite.",
			img: "https://picsum.photos/seed/p2/800/450",
			link: "https://shopsmart.dev"
		}
	],
	experience: [
		{
			company: "FinTech Co",
			period: "2022 – Present",
			role: "Lead Front-End Engineer",
			details:
				"Led a team of 6 building a trading app used by 40k daily traders."
		},
		{
			company: "E-Shop Ltd",
			period: "2019 – 2022",
			role: "Senior Front-End Developer",
			details: "Migrated legacy Vue 2 shop to Next.js improving LCP by 55%."
		}
	]
} as const;
