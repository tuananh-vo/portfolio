// src/components/BackToTop.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
	const [show, setShow] = useState(false);

	/* show button after scrolling 400 px */
	useEffect(() => {
		const on = () => setShow(window.scrollY > 400);
		window.addEventListener("scroll", on);
		return () => window.removeEventListener("scroll", on);
	}, []);

	return (
		<AnimatePresence>
			{show && (
				<motion.button
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 40 }}
					whileHover={{ scale: 1.15, rotate: 3 }}
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					aria-label="Back to top"
					/* ★ NEW colourful halo + glassy background + pointer cursor */
					className="fixed bottom-6 right-6 cursor-pointer rounded-full p-[15px]
                     text-white shadow-xl shadow-black/30 backdrop-blur-lg"
					style={{
						background:
							"conic-gradient(from 180deg at 50% 50%, #ff6b6b 0deg, #ffa726 120deg, #1e88e5 240deg, #ff6b6b 360deg)",
						boxShadow:
							"0 8px 20px -4px rgba(30,136,229,0.55), 0 0 0 6px rgba(30,136,229,0.15)"
					}}
				>
					↑
				</motion.button>
			)}
		</AnimatePresence>
	);
}
