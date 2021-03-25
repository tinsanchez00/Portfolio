import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import MainContainer from './components/MainContainer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Nav />
			<Hero />
			<MainContainer>
				<About />
				<Projects />
			</MainContainer>
			<Contact />
			<Footer />
		</>
	);
}

export default App;
