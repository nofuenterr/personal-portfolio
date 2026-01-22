import personalFinanceAppLaptopImage from '../assets/images/personal-finance-app-laptop.png';
import summonersShopLaptopImage from '../assets/images/summoners-shop-laptop.png';
import invoiceAppDarkLaptopImage from '../assets/images/invoice-app-dark-laptop.png';
import weatherAppDarkLaptopImage from '../assets/images/weather-app-dark-laptop.png';
import multiStepFormLaptopImage from '../assets/images/multi-step-form-laptop.png';
import memoryCardGameLaptopImage from '../assets/images/memory-card-game-laptop.png';
import cvApplicationLaptopImage from '../assets/images/cv-application-laptop.png';
import todoAppDarkLaptopImage from '../assets/images/todo-app-dark-laptop.png';
import weatherNowLaptopImage from '../assets/images/weather-now-laptop.png';

interface Project {
	imageSrc: string;
	title: string;
	description: string;
	techStack: string[];
	livePreviewLink: string;
	githubLink: string;
}

export const projects: Project[] = [
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
		imageSrc: weatherNowLaptopImage,
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
		imageSrc: multiStepFormLaptopImage,
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
		imageSrc: memoryCardGameLaptopImage,
		title: 'GOT - Memory Card Game',
		description:
			'A memory card game with multiple levels that features characters from the show Game of Thrones.',
		techStack: ['React', 'Vite', 'CSS', 'JavaScript', 'HTML', 'API'],
		livePreviewLink: 'https://memory-card-game-umber-alpha.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/memory-card-game',
	},
	{
		imageSrc: cvApplicationLaptopImage,
		title: 'CV Application',
		description:
			'A simple website that allows you to enter CV-related information and preview it on a pre-determined template live.',
		techStack: ['React', 'Vite', 'CSS', 'JavaScript', 'HTML'],
		livePreviewLink: 'https://cv-application-seven-nu.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/cv-application',
	},
	{
		imageSrc: weatherAppDarkLaptopImage,
		title: 'Forecaster - Weather App',
		description:
			'A weather app that uses the Visual Crossing API. It features toggles between themes and units of measurement.',
		techStack: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'API'],
		livePreviewLink: 'https://weather-app-five-eta-68.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/weather-app',
	},
	{
		imageSrc: todoAppDarkLaptopImage,
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
