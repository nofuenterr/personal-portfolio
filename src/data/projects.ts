import personalFinanceAppLaptopImage from '../assets/images/personal-finance-app-laptop.png';
import summonersShopLaptopImage from '../assets/images/summoners-shop-laptop.png';
import invoiceAppDarkLaptopImage from '../assets/images/invoice-app-dark-laptop.png';
import weatherAppDarkLaptopImage from '../assets/images/weather-app-dark-laptop.png';

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
		imageSrc: weatherAppDarkLaptopImage,
		title: 'Forecaster Weather App',
		description:
			'A weather app that uses the Visual Crossing API. It features toggles between themes and units of measurement.',
		techStack: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'API'],
		livePreviewLink: 'https://weather-app-five-eta-68.vercel.app/',
		githubLink: 'https://github.com/nofuenterr/weather-app',
	},
];
