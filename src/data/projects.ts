import messagingAppPreview from '../assets/images/messaging-app-preview.webp';
import audiophilePreview from '../assets/images/audiophile-preview.webp';
import personalFinanceAppPreview from '../assets/images/personal-finance-app-preview.webp';
import invoiceAppPreview from '../assets/images/invoice-app-preview.webp';
import weatherNowPreview from '../assets/images/weather-now-preview.webp';
import summonersShopPreview from '../assets/images/summoners-shop-preview.webp';
import memoryCardGamePreview from '../assets/images/memory-card-game-preview.webp';
import multiStepFormPreview from '../assets/images/multi-step-form-preview.webp';
import cvApplicationPreview from '../assets/images/cv-application-preview.webp';
import todoAppDarkPreview from '../assets/images/todo-app-preview.webp';

interface Image {
	src: string;
	width: number;
	height: number;
}

export interface Project {
	image: Image;
	title: string;
	description: string;
	techStack: string[];
	livePreviewLink: string;
	githubLink: string;
}

export const projects: Project[] = [
	{
		image: {
			src: messagingAppPreview,
			width: 1440,
			height: 900,
		},
		title: 'Messaging App',
		description:
			'A full-stack messaging app with group chats, media uploads, and user authentication — built with React, Node.js, Express, and PostgreSQL.',
		techStack: [
			'React',
			'NodeJS',
			'ExpressJS',
			'PostgreSQL',
			'Passport',
			'Supabase',
			'Axios',
			'Tailwind CSS',
			'TypeScript',
			'Zustand',
			'React Router',
			'Radix UI',
		],
		livePreviewLink: 'https://messaging-app-rrn.up.railway.app/',
		githubLink: 'https://github.com/nofuenterr/messaging-app',
	},
	{
		image: {
			src: audiophilePreview,
			width: 1440,
			height: 900,
		},
		title: 'Audiophile E-Commerce App',
		description:
			'A multi-page e-commerce storefront for premium audio products with persistent cart, validated checkout, and responsive design.',
		techStack: [
			'React',
			'Vite',
			'Tailwind CSS',
			'TypeScript',
			'Zustand',
			'React Router',
			'React Hook Form',
			'Radix UI',
		],
		livePreviewLink: 'https://audiophile-rrn.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/audiophile',
	},
	{
		image: {
			src: personalFinanceAppPreview,
			width: 1440,
			height: 900,
		},
		title: 'Personal Finance App',
		description:
			'A personal finance dashboard for tracking transactions, managing budgets, growing savings pots, and monitoring recurring bills.',
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
		image: {
			src: invoiceAppPreview,
			width: 1440,
			height: 900,
		},
		title: 'Invoice App',
		description:
			'A responsive invoice management app where users can create, edit, and track invoices — with persistent storage, dark/light themes, and full form validation.',
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
		image: {
			src: weatherNowPreview,
			width: 1440,
			height: 900,
		},
		title: 'Weather Now - Weather App',
		description:
			'A responsive weather app with city search, 7-day and hourly forecasts, and Imperial/Metric unit toggling — powered by the Open-Meteo API.',
		techStack: [
			'React',
			'Vite',
			'Tailwind CSS',
			'TypeScript',
			'Zustand',
			'React Hook Form',
			'React Query',
			'API',
			'Radix UI',
		],
		livePreviewLink: 'https://weather-now-rrn.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/weather-now',
	},
	{
		image: {
			src: summonersShopPreview,
			width: 1440,
			height: 900,
		},
		title: "Summoner's Shop E-Commerce App",
		description:
			"A League of Legends-inspired e-commerce shop where you can browse, filter, sort, and buy in-game items — powered by Riot's Data Dragon API.",
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
		image: {
			src: memoryCardGamePreview,
			width: 1440,
			height: 900,
		},
		title: 'GOT - Memory Card Game',
		description:
			'A Game of Thrones-themed memory card game — click each character only once, or the cards shuffle and you start over.',
		techStack: ['React', 'Vite', 'CSS', 'JavaScript', 'HTML', 'API'],
		livePreviewLink: 'https://memory-card-game-umber-alpha.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/memory-card-game',
	},
	{
		image: {
			src: multiStepFormPreview,
			width: 1440,
			height: 900,
		},
		title: 'Multi-step Form',
		description:
			'A multi-step subscription form with step validation, sidebar navigation, persistent data on submit, and a clean responsive layout.',
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
		livePreviewLink: 'https://multi-step-form-theta-sooty.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/multi-step-form',
	},
	{
		image: {
			src: cvApplicationPreview,
			width: 1440,
			height: 900,
		},
		title: 'CV Application',
		description:
			'A live CV builder — fill in your details and preview them instantly on a pre-styled resume template.',
		techStack: ['React', 'Vite', 'CSS', 'JavaScript', 'HTML'],
		livePreviewLink: 'https://cv-application-seven-nu.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/cv-application',
	},
	{
		image: {
			src: todoAppDarkPreview,
			width: 1440,
			height: 900,
		},
		title: 'Todo App',
		description:
			'A clean todo app with filtering by status, light/dark theme toggle, and persistent data across sessions.',
		techStack: [
			'React',
			'Vite',
			'Tailwind CSS',
			'JavaScript',
			'TypeScript',
			'Zustand',
			'React Hook Form',
			'Radix UI',
			'HTML',
		],
		livePreviewLink: 'https://todo-app-five-jade-30.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/todo-app',
	},
];
