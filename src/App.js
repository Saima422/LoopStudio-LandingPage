import './App.css';
import Banner from './components/Banner';
import CreatorSection from './components/CreatorSection';
import Header from './components/Header';
import LeaderSection from './components/LeaderSection';
import creatorData from "./data/data.json";

function App() {
	return (
		<div className='App'>
			<Header />
			<Banner />
			<LeaderSection />
			<CreatorSection data={creatorData.creations} />
		</div>
	);
}

export default App;
