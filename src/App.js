import "./App.css";
import Journal from "./components/Journal";
import Navbar from "./components/Navbar";
import data from "./data.js";

function App() {
	const journalList = data.map((journal) => (
		<Journal key={journal.id} {...journal} />
	));
	return (
		<div className="app">
			<Navbar />
			<div className="journal--list">{journalList}</div>
		</div>
	);
}

export default App;
