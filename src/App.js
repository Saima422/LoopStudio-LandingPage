import './App.css';
import Banner from './components/Banner';
import CreatorSection from './components/CreatorSection';
import Footer from './components/Footer';
import Header from './components/Header';
import LeaderSection from './components/LeaderSection';
import Data from "./data/data.json";

function App() {
	return (
		<div className='App'>
			<Header data={Data.headerLinks} />
			<Banner />
			<LeaderSection />
			<CreatorSection data={Data.creations} />
			<Footer data={Data.footerLinks} />
		</div>
	);
}

export default App;
