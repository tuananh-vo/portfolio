import { Link } from "react-router-dom";
import ScrollProgress from "./ScrollProgress";

export default function Header() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
			<ScrollProgress />
			<div className="mx-auto flex max-w-6xl items-center justify-between p-4">
				<a href="#home" className="text-lg font-bold">
					Raymond Võ
				</a>
				<nav className="hidden md:block">
					<ul className="flex gap-6 font-semibold">
						{["about", "skills", "projects", "experience"].map((id) => (
							<li key={id}>
								<a
									href={`#${id}`}
									className="relative after:absolute after:inset-x-0 after:-bottom-1
                             after:h-[2px] after:scale-x-0 after:bg-primary
                             after:transition-transform after:duration-200
                             hover:after:scale-x-100"
								>
									{id.charAt(0).toUpperCase() + id.slice(1)}
								</a>
							</li>
						))}
						<li>
							<Link to="/admin">Admin</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
