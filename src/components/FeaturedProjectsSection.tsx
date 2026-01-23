import { Link } from 'react-router-dom';
import MoveRight from './icons/MoveRight';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {
	return (
		<section className="grid gap-4">
			<div className="flex items-center justify-between">
				<h2 className="bg-muted-light border-border-light dark:border-border-dark dark:bg-muted-dark inline-block justify-self-start rounded-lg border p-2">
					Featured projects
				</h2>
				<Link
					to="/projects"
					className="group hover:text-muted-foreground-light dark:hover:text-muted-foreground-dark flex items-center gap-2 transition-colors"
				>
					<span>View more</span>
					<MoveRight className="transition-transform group-hover:translate-x-1" />
				</Link>
			</div>
			<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{projects.slice(0, 4).map((p) => {
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
			</ul>
		</section>
	);
}
