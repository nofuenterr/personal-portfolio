import type { ReactNode } from 'react';
import HTML5 from './icons/HTML5';
import CSS from './icons/CSS';
import TypeScript from './icons/TypeScript';
import TailwindCSS from './icons/TailwindCSS';
import React from './icons/React';
import NodeJS from './icons/NodeJS';
import ExpressJS from './icons/ExpressJS';
import PostgreSQL from './icons/PostgreSQL';
import Supabase from './icons/Supabase';
import Axios from './icons/Axios';

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
				<TechCard
					logo={
						<NodeJS className="dark:fill-foreground-dark h-5 group-hover:fill-[#5FA04E]" />
					}
					title="Node.js"
				/>
				<TechCard
					logo={
						<ExpressJS className="dark:fill-foreground-dark h-5 group-hover:fill-[#000000]" />
					}
					title="Express.js"
				/>
				<TechCard
					logo={
						<PostgreSQL className="dark:fill-foreground-dark h-5 group-hover:fill-[#4169E1]" />
					}
					title="PostgreSQL"
				/>
				<TechCard
					logo={
						<Supabase className="dark:fill-foreground-dark h-5 group-hover:fill-[#3FCF8E]" />
					}
					title="Supabase"
				/>
				<TechCard
					logo={
						<Supabase className="dark:fill-foreground-dark h-5 group-hover:fill-[#3FCF8E]" />
					}
					title="Supabase"
				/>
				<TechCard
					logo={
						<Axios className="dark:fill-foreground-dark h-5 group-hover:fill-[#5A29E4]" />
					}
					title="Axios"
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
