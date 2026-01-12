import Contact from '../components/ContactSection';
import FeaturedProjects from '../components/FeaturedProjectsSection';
import Hero from '../components/HeroSection';
import TechStack from '../components/TechStackSection';

export default function Home() {
	return (
		<main className="grid gap-8">
			<Hero />
			<TechStack />
			<FeaturedProjects />
			<Contact />
		</main>
	);
}
