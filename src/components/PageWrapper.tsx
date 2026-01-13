import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useThemeStore } from '../stores/themeStore';
import { useEffect } from 'react';
import ScrollToTop from './ScrollToTop';

export default function PageWrapper() {
	const dark = useThemeStore((s) => s.dark);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', dark);
	}, [dark]);

	return (
		<div className="grid min-h-dvh grid-rows-[auto_1fr_auto] px-4 pt-3.5">
			<ScrollToTop />

			<Header />

			<Outlet />

			<Footer />
		</div>
	);
}
