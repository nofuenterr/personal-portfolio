import { NavLink, Link } from 'react-router-dom';
import { useThemeStore } from '../stores/themeStore';
import Sun from './icons/Sun';
import Moon from './icons/Moon';

export default function Header() {
	const { dark, switchTheme } = useThemeStore();

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
					className="cursor-pointer transition-transform"
				>
					{dark ? (
						<p>
							<Moon className="hover:scale-110" />
						</p>
					) : (
						<p>
							<Sun className="hover:scale-110" />
						</p>
					)}
				</button>
			</div>
		</header>
	);
}
