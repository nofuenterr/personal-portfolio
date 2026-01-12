import { Link } from 'react-router-dom';
import MoveRight from './icons/MoveRight';
import Globe from './icons/Globe';
import GitHub from './icons/GitHub';
import personalFinanceAppLaptopImage from '../assets/images/personal-finance-app-laptop.png';
import summonersShopLaptopImage from '../assets/images/summoners-shop-laptop.png';
import invoiceAppDarkLaptopImage from '../assets/images/invoice-app-dark-laptop.png';
import weatherAppDarkLaptopImage from '../assets/images/weather-app-dark-laptop.png';

const projects = [
	{
		imageSrc: personalFinanceAppLaptopImage,
		title: 'Personal Finance App',
		description:
			'A personal finance application built to help users track spending, manage savings, and stay on top of recurring bills. ',
		techStack: [
			'React',
			'Vite',
			'Tailwind CSS',
			'TypeScript',
			'Zustand',
			'Recharts',
			'React Router',
			'React Hook Form',
			'Radix UI',
		],
		livePreviewLink: 'https://personal-finance-app-rrn.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/personal-finance-app',
	},
	{
		imageSrc: summonersShopLaptopImage,
		title: "Summoner's Shop",
		description:
			"An E-commerce website inspired by Riot Game's League of Legends. The products are based on the game's in-game items.",
		techStack: [
			'React',
			'Vite',
			'CSS Modules',
			'JavaScript',
			'React Router',
			'HTML',
			'API',
		],
		livePreviewLink: 'https://summoners-shop.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/league-of-legends-item-shop',
	},
	{
		imageSrc: invoiceAppDarkLaptopImage,
		title: 'Invoice App',
		description:
			'An invoice management application where users can create, edit, view, and manage invoices.',
		techStack: [
			'React',
			'Vite',
			'Tailwind CSS',
			'JavaScript',
			'TypeScript',
			'Zustand',
			'React Router',
			'React Hook Form',
			'Radix UI',
		],
		livePreviewLink: 'https://invoice-app-sooty-nine.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/invoice-app',
	},
	{
		imageSrc: weatherAppDarkLaptopImage,
		title: 'Forecaster Weather App',
		description:
			'A weather app that uses the Visual Crossing API. It features toggles between themes and units of measurement.',
		techStack: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'API'],
		livePreviewLink: 'https://weather-app-five-eta-68.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/weather-app',
	},
];

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
		</section>
	);
}

interface ProjectCardProps {
	imageSrc: string;
	title: string;
	description: string;
	techStack: string[];
	livePreviewLink: string;
	githubLink: string;
}

function ProjectCard({
	imageSrc,
	title,
	description,
	techStack,
	livePreviewLink,
	githubLink,
}: ProjectCardProps) {
	return (
		<li className="bg-card-light dark:bg-card-dark text-card-foreground-light dark:text-card-foreground-dark border-border-light dark:border-border-dark group grid grid-rows-[auto_auto_1fr_1fr_auto] items-start gap-3 rounded-lg border p-4">
			<div className="border-border-light dark:border-border-dark h-40 w-full cursor-pointer overflow-hidden rounded-lg border">
				<img
					src={imageSrc}
					alt={`${title} image`}
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
