import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Experience />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
}
