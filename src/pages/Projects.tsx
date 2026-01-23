import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../variants/variants';

export default function Projects() {
	return (
		<motion.main
			className="grid gap-8"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.h1 className="text-2xl font-semibold" variants={itemVariants}>
				My Projects
			</motion.h1>
			<motion.ul
				className="grid grid-cols-1 gap-4 sm:grid-cols-2"
				variants={itemVariants}
			>
				{projects.map((p) => {
					return (
						<ProjectCard
							key={p.title}
							image={p.image}
							title={p.title}
							description={p.description}
							techStack={p.techStack}
							livePreviewLink={p.livePreviewLink}
							githubLink={p.githubLink}
						/>
					);
				})}
			</motion.ul>
		</motion.main>
	);
}
