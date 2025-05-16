import { useEffect, useState } from "react";

export default function ScrollProgress() {
	const [pct, setPct] = useState(0);

	useEffect(() => {
		const on = () => {
			const h = document.documentElement;
			setPct(
				(h.scrollTop || document.body.scrollTop) /
					(h.scrollHeight - h.clientHeight)
			);
		};
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);

	return (
		<span
			className="pointer-events-none absolute left-0 top-0 h-[3px]"
			style={{
				width: `${pct * 100}%`,
				background:
					"linear-gradient(90deg, #1e88e5 0%, #ffb300 50%, #4caf50 100%)"
			}}
		/>
	);
}
