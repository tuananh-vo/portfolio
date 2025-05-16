import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";

export default function Hero() {
	const { content } = useContent();
	return (
		<motion.section
			id="home"
			className="grid min-h-screen place-items-center gap-8 px-6 pt-24
                 md:grid-cols-2 max-w-6xl mx-auto"
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div>
				<h1 className="mb-4 text-4xl md:text-5xl font-extrabold leading-tight">
					{content.hero.title}
				</h1>
				<p className="mb-8 text-lg text-gray-700">{content.hero.subtitle}</p>
				<a
					href="#contact"
					className="inline-block rounded-full bg-primary px-6 py-3 font-semibold
                     text-white transition-transform hover:scale-105"
				>
					{content.hero.cta}
				</a>
			</div>
			<motion.img
				src={content.hero.avatar}
				alt="Avatar"
				className="w-full rounded-2xl shadow-lg"
				whileHover={{ scale: 1.05 }}
			/>
		</motion.section>
	);
}
