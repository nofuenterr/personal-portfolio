export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t-border-light dark:border-t-border-dark mt-6 grid place-content-center border-t py-4">
			<p>&copy; {currentYear} - RR Nofuente</p>
		</footer>
	);
}
