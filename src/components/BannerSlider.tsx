import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useContent } from "../context/ContentContext";

export default function BannerSlider() {
	const { content } = useContent();
	const slides = content?.slides || []; // 🎯 now editable in Admin
	console.log("slides", slides);
	const [i, setI] = useState(0);

	/* autoplay */
	useEffect(() => {
		const id = setInterval(() => setI((v) => (v + 1) % slides?.length), 5000);
		return () => clearInterval(id);
	}, [slides?.length]);

	const next = useCallback(
		() => setI((v) => (v + 1) % slides?.length),
		[slides?.length]
	);
	const prev = useCallback(
		() => setI((v) => (v - 1 + slides?.length) % slides?.length),
		[slides?.length]
	);

	/* keyboard arrows */
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "ArrowRight") next();
			if (e.key === "ArrowLeft") prev();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [next, prev]);

	return (
		<div className="relative h-[60vh] w-full overflow-hidden rounded-2xl shadow-lg">
			<AnimatePresence initial={false}>
				<motion.img
					key={i}
					src={slides[i]?.img}
					alt={slides[i]?.cap}
					className="absolute inset-0 h-full w-full object-cover"
					initial={{ opacity: 0, scale: 1.08 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.94 }}
					transition={{ duration: 0.8 }}
				/>
			</AnimatePresence>

			<div className="absolute inset-0 bg-black/40" />
			<div className="absolute inset-0 grid place-items-center">
				<motion.h2
					key={slides[i]?.cap}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.6 }}
					className="px-4 text-center text-3xl font-extrabold text-white drop-shadow-lg md:text-5xl"
				>
					{slides[i]?.cap}
				</motion.h2>
			</div>

			{/* ← Prev */}
			<button
				aria-label="Previous slide"
				onClick={prev}
				className="group absolute left-4 top-1/2 z-10 -translate-y-1/2
                   rounded-full bg-black/30 p-3 text-white transition
                   hover:bg-black/50 focus:outline-none cursor-pointer"
			>
				<svg
					className="h-5 w-5 transition group-hover:-translate-x-1"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M15 18l-6-6 6-6" />
				</svg>
			</button>

			{/* → Next */}
			<button
				aria-label="Next slide"
				onClick={next}
				className="group absolute right-4 top-1/2 z-10 -translate-y-1/2
                   rounded-full bg-black/30 p-3 text-white transition
                   hover:bg-black/50 focus:outline-none cursor-pointer"
			>
				<svg
					className="h-5 w-5 transition group-hover:translate-x-1"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M9 6l6 6-6 6" />
				</svg>
			</button>
		</div>
	);
}
