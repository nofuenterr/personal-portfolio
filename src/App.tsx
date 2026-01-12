import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Error from './pages/Error';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './styles/global.css';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<PageWrapper />} errorElement={<Error />}>
					<Route errorElement={<Error />}>
						<Route index={true} element={<Home />} />
						<Route path="/projects" element={<Projects />} />
					</Route>
				</Route>
			</Routes>
		</Router>
	);
}
