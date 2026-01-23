import Globe from './icons/Globe';
import GitHub from './icons/GitHub';
import type { Project } from '../data/projects';

export default function ProjectCard({
	image,
	title,
	description,
	techStack,
	livePreviewLink,
	githubLink,
}: Project) {
	return (
		<li className="bg-card-light dark:bg-card-dark text-card-foreground-light dark:text-card-foreground-dark border-border-light dark:border-border-dark group row-span-5 grid grid-rows-subgrid items-start gap-3 rounded-lg border p-4">
			<div className="border-border-light dark:border-border-dark h-40 w-full cursor-pointer overflow-hidden rounded-lg border">
				<img
					loading="lazy"
					width={image.width}
					height={image.height}
					src={image.src}
					alt={`${title} preview`}
					className="transition-transform hover:scale-110"
				/>
			</div>
			<h3 className="text-lg font-semibold">{title}</h3>
			<p>{description}</p>
			<ul className="flex flex-wrap items-center gap-2">
				{techStack.map((tech) => {
					return (
						<li
							key={tech}
							className="bg-secondary-light dark:bg-secondary-dark text-secondary-foreground-light dark:text-secondary-foreground-dark border-border-light dark:border-border-dark rounded-sm border p-1 text-xs"
						>
							{tech}
						</li>
					);
				})}
			</ul>
			<div className="flex items-center gap-2">
				<a
					href={livePreviewLink}
					target="_blank"
					className="bg-primary-light text-primary-foreground-light dark:bg-primary-dark dark:text-primary-foreground-dark hover:bg-input-dark dark:hover:bg-input-light flex cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 text-sm"
				>
					<Globe className="size-4.5" />
					<span>Website</span>
				</a>
				{githubLink ? (
					<a
						href={githubLink}
						target="_blank"
						className="bg-primary-light text-primary-foreground-light dark:bg-primary-dark dark:text-primary-foreground-dark hover:bg-input-dark dark:hover:bg-input-light flex cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 text-sm"
					>
						<GitHub className="fill-primary-foreground-light dark:fill-primary-foreground-dark size-4.5" />
						<span>Source</span>
					</a>
				) : null}
			</div>
		</li>
	);
}
