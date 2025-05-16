import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";

export default function Projects() {
	const { content } = useContent();
	return (
		<section id="projects" className="py-24 px-6">
			<h2 className="mb-12 text-center text-3xl font-bold">
				Selected Projects
			</h2>
			<div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{content.projects.map((p) => (
					<motion.a
						key={p.id}
						href={p.link}
						target="_blank"
						className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg"
						whileHover={{ y: -4 }}
						transition={{ type: "spring", stiffness: 200, damping: 15 }}
					>
						<img
							src={p.img}
							alt={p.name}
							className="aspect-video object-cover"
						/>
						<div className="flex flex-1 flex-col p-4">
							<h3 className="mb-1 font-bold">{p.name}</h3>
							<p className="mb-3 flex-1 text-sm text-gray-600">{p.desc}</p>
							<span className="self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
								View Project
							</span>
						</div>
					</motion.a>
				))}
			</div>
		</section>
	);
}
