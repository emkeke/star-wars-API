import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import FilmsPage from './pages/FilmsPage'
import PeoplePage from './pages/PeoplePage'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


const App = () => {

	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/films" element={<FilmsPage />} />
					<Route path="/people" element={<PeoplePage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App;
