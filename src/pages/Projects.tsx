import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
	return (
		<main className="grid gap-8">
			<h1 className="text-2xl font-semibold">My Projects</h1>
			<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{projects.map((p) => {
					return (
						<ProjectCard
							key={p.title}
							imageSrc={p.imageSrc}
							title={p.title}
							description={p.description}
							techStack={p.techStack}
							livePreviewLink={p.livePreviewLink}
							githubLink={p.githubLink}
						/>
					);
				})}
			</ul>
		</main>
	);
}
