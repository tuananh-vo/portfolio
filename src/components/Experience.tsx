import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";

export default function Experience() {
	const { content } = useContent();
	return (
		<section id="experience" className="bg-gray-100 py-24 px-6">
			<h2 className="mb-12 text-center text-3xl font-bold">Experience</h2>
			<div className="mx-auto grid max-w-4xl gap-6">
				{content.experience.map((e, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.4, delay: i * 0.1 }}
						className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow
                       md:flex-row md:items-center"
					>
						<div className="font-semibold md:w-1/4">{e.period}</div>
						<div>
							<h3 className="font-bold">
								{e.role} — {e.company}
							</h3>
							<p className="mt-1 text-sm text-gray-600">{e.details}</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
