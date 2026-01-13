import { NavLink, Link } from 'react-router-dom';
import { useThemeStore } from '../stores/themeStore';
import Sun from './icons/Sun';
import Moon from './icons/Moon';
import { motion } from 'framer-motion';

export default function Header() {
	const { dark, switchTheme } = useThemeStore();

	const moonVariants = {
		hidden: {
			scale: 0,
			opacity: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut' as const,
			},
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: 'easeOut' as const,
			},
		},
	};

	return (
		<header className="mb-10 flex items-center justify-between gap-4">
			<div className="font-brand text-lg font-bold -tracking-widest">
				<Link to="/">RR</Link>
			</div>

			<div className="flex items-center gap-4">
				<nav className="lowercase">
					<ul className="flex items-center gap-3">
						<li className="hover:text-muted-foreground-light dark:hover:text-muted-foreground-dark transition-colors">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="hover:text-muted-foreground-light dark:hover:text-muted-foreground-dark transition-colors">
							<NavLink to="/projects">Projects</NavLink>
						</li>
						<li className="hover:text-muted-foreground-light dark:hover:text-muted-foreground-dark transition-colors">
							<a href="mailto:rrn091301@gmail.com">Contact</a>
						</li>
					</ul>
				</nav>

				<button
					onClick={() => switchTheme()}
					className="relative cursor-pointer transition-transform"
				>
					<motion.p
						variants={moonVariants}
						initial={dark ? 'visible' : 'hidden'}
						animate={dark ? 'visible' : 'hidden'}
						className="absolute"
					>
						<Moon className="hover:scale-110" />
					</motion.p>

					<motion.p
						variants={moonVariants}
						initial={dark ? 'hidden' : 'visible'}
						animate={dark ? 'hidden' : 'visible'}
						className="relative"
					>
						<Sun className="hover:scale-110" />
					</motion.p>
				</button>
			</div>
		</header>
	);
}
