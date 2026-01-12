import Contact from '../components/ContactSection';
import FeaturedProjects from '../components/FeaturedProjectsSection';
import Hero from '../components/HeroSection';
import TechStack from '../components/TechStackSection';

export default function Home() {
	return (
		<div>
			<Hero />
			<TechStack />
			<FeaturedProjects />
			<Contact />
		</div>
	);
}
