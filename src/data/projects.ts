import personalFinanceAppLaptopImage from '../assets/images/personal-finance-app-laptop.webp';
import summonersShopLaptopImage from '../assets/images/summoners-shop-laptop.webp';
import invoiceAppDarkLaptopImage from '../assets/images/invoice-app-dark-laptop.webp';
import weatherAppDarkLaptopImage from '../assets/images/weather-app-dark-laptop.webp';
import multiStepFormLaptopImage from '../assets/images/multi-step-form-laptop.webp';
import memoryCardGameLaptopImage from '../assets/images/memory-card-game-laptop.webp';
import cvApplicationLaptopImage from '../assets/images/cv-application-laptop.webp';
import todoAppDarkLaptopImage from '../assets/images/todo-app-dark-laptop.webp';
import weatherNowLaptopImage from '../assets/images/weather-now-laptop.webp';

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
			src: personalFinanceAppLaptopImage,
			width: 1280,
			height: 1086,
		},
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
		image: {
			src: summonersShopLaptopImage,
			width: 1280,
			height: 1086,
		},
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
		image: {
			src: invoiceAppDarkLaptopImage,
			width: 1280,
			height: 1085,
		},
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
		image: {
			src: weatherNowLaptopImage,
			width: 1280,
			height: 1000,
		},
		title: 'Weather Now - Weather App',
		description:
			'A responsive weather app with search functionality, unit conversion, and detailed forecasts using the Open-Meteo API.',
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
			src: multiStepFormLaptopImage,
			width: 1280,
			height: 1000,
		},
		title: 'Multi-step Form',
		description:
			'A multi-step form with persistent data on submit, validation on change, links to each step, and responsiveness.',
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
			src: memoryCardGameLaptopImage,
			width: 1280,
			height: 1000,
		},
		title: 'GOT - Memory Card Game',
		description:
			'A memory card game with multiple levels that features characters from the show Game of Thrones.',
		techStack: ['React', 'Vite', 'CSS', 'JavaScript', 'HTML', 'API'],
		livePreviewLink: 'https://memory-card-game-umber-alpha.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/memory-card-game',
	},
	{
		image: {
			src: cvApplicationLaptopImage,
			width: 1280,
			height: 1000,
		},
		title: 'CV Application',
		description:
			'A simple website that allows you to enter CV-related information and preview it on a pre-determined template live.',
		techStack: ['React', 'Vite', 'CSS', 'JavaScript', 'HTML'],
		livePreviewLink: 'https://cv-application-seven-nu.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/cv-application',
	},
	{
		image: {
			src: weatherAppDarkLaptopImage,
			width: 1280,
			height: 1085,
		},
		title: 'Forecaster - Weather App',
		description:
			'A weather app that uses the Visual Crossing API. It features toggles between themes and units of measurement.',
		techStack: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'API'],
		livePreviewLink: 'https://weather-app-five-eta-68.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/weather-app',
	},
	{
		image: {
			src: todoAppDarkLaptopImage,
			width: 4096,
			height: 3200,
		},
		title: 'Todo App',
		description:
			'A simple todo app that lets you create, read, toggle between done and not done, and delete todos.',
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
