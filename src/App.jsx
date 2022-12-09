import {
	Navbar,
	Hero,
	About,
	Agenda,
	Speakers,
	Footer,
} from "./sections/index";

import "./App.css";

function App() {
	return (
		<div className="bg-dark text-white font-libre-franklin">
			<Navbar />
			<Hero />
			<About />
			<Speakers />
			<Agenda />
			<Footer />
		</div>
	);
}

export default App;
