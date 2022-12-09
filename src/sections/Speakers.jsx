import SpeakerCard from "../components/speakers/SpeakerCard.jsx";
import { speakers } from "../data/data.jsx";

const Speakers = () => {
	return (
		<div className="py-14 px-20 lg:px-[12vw]  flex flex-col font-libre-franklin">
			<h1 className="text-4xl font-bold text-center md:text-left">
				Speakers
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3 ">
				{speakers.map((speaker) => (
					<SpeakerCard speaker={speaker} />
				))}
			</div>
		</div>
	);
};

export default Speakers;
