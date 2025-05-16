import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";

export default function Skills() {
	const { content } = useContent();
	return (
		<section id="skills" className="bg-gray-100 py-24">
			<h2 className="mb-12 text-center text-3xl font-bold">Skills</h2>
			<motion.ul
				className="mx-auto grid max-w-4xl grid-cols-2 gap-4 px-6
                   sm:grid-cols-3 md:grid-cols-4"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={{
					visible: { transition: { staggerChildren: 0.05 } },
					hidden: {}
				}}
			>
				{content.skills.map((s) => (
					<motion.li
						key={s}
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 }
						}}
						className="rounded-xl bg-white p-4 text-center font-semibold shadow"
					>
						{s}
					</motion.li>
				))}
			</motion.ul>
		</section>
	);
}
