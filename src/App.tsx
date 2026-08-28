import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Achievements from './sections/Achievements';
import USA from './sections/USA';
import Why from './sections/Why';
import Contact from './sections/Contact';

export default function App() {
	return (
		<>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only fixed left-4 top-4 z-[200] rounded-lg bg-white px-4 py-3 font-semibold text-[#a91d21] shadow-lg"
			>
				Skip to content
			</a>
			<Navbar />
			<main id="main-content">
				<Hero />
				<About />
				<Achievements />
				<USA />
				<Why />
			</main>
			<Contact />
		</>
	);
}
