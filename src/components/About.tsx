import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";

export default function About() {
	const { content } = useContent();
	return (
		<motion.section
			id="about"
			className="mx-auto max-w-3xl px-6 py-24 text-center"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.5 }}
		>
			<h2 className="mb-6 text-3xl font-bold">About Me</h2>
			<p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
				{content.about.text}
			</p>
		</motion.section>
	);
}
