import type { ReactNode } from 'react';
import HTML5 from './icons/HTML5';
import CSS from './icons/CSS';
import TypeScript from './icons/TypeScript';
import TailwindCSS from './icons/TailwindCSS';
import React from './icons/React';

export default function TechStack() {
	return (
		<section className="grid gap-4">
			<h2 className="bg-muted-light border-border-light dark:border-border-dark dark:bg-muted-dark inline-block justify-self-start rounded-lg border p-2">
				Tech stack
			</h2>
			<ul className="grid grid-cols-[repeat(auto-fit,minmax(2rem,1fr))] gap-2">
				<TechCard
					logo={
						<HTML5 className="dark:fill-foreground-dark h-5 group-hover:fill-[#E34F26]" />
					}
					title="HTML 5"
				/>
				<TechCard
					logo={
						<CSS className="dark:fill-foreground-dark h-5 group-hover:fill-[#663399]" />
					}
					title="CSS"
				/>
				<TechCard
					logo={
						<TypeScript className="dark:fill-foreground-dark h-5 group-hover:fill-[#3178C6]" />
					}
					title="TypeScript"
				/>
				<TechCard
					logo={
						<TailwindCSS className="dark:fill-foreground-dark h-5 group-hover:fill-[#06B6D4]" />
					}
					title="Tailwind CSS"
				/>
				<TechCard
					logo={
						<React className="dark:fill-foreground-dark h-5 group-hover:fill-[#61DAFB]" />
					}
					title="React.js"
				/>
			</ul>
		</section>
	);
}

interface TechCardProps {
	logo: ReactNode;
	title: string;
}

function TechCard({ logo, title }: TechCardProps) {
	return (
		<li className="hover:bg-muted-light dark:hover:bg-muted-dark bg-card-light dark:bg-card-dark text-card-foreground-light dark:text-card-foreground-dark border-border-light dark:border-border-dark group grid items-end justify-items-center gap-1 rounded-lg border p-4 text-center">
			<div className="transition-transform group-hover:-translate-y-1">
				{logo}
			</div>
			<p className="hidden text-sm text-nowrap sm:inline-block">{title}</p>
		</li>
	);
}
