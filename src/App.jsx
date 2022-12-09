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
		<div className=" bg-dark text-white font-libre-franklin relative">
			<Navbar />
			<Hero />
			<About />
			<Agenda />
			<Speakers />
			<Footer />
		</div>
	);
}

export default App;
