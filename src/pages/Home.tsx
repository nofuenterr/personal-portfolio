import Contact from '../components/ContactSection';
import FeaturedProjects from '../components/FeaturedProjectsSection';
import Hero from '../components/HeroSection';
import TechStack from '../components/TechStackSection';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../variants/variants';

export default function Home() {
	return (
		<motion.main
			className="grid gap-8"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={itemVariants}>
				<Hero />
			</motion.div>

			<motion.div variants={itemVariants}>
				<TechStack />
			</motion.div>

			<motion.div variants={itemVariants}>
				<FeaturedProjects />
			</motion.div>

			<motion.div variants={itemVariants}>
				<Contact />
			</motion.div>
		</motion.main>
	);
}
