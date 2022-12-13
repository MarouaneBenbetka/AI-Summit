const SpeakerCard = ({ speaker }) => {
  return (
    <div
      key={speaker.id}
      className="rounded-xl space-x-4 my-2 bg-[#F8F8F8] flex flex-col hover:scale-[1.04] transition duration-200"
    >
      <img className="rounded-lg" src={speaker.img} alt={speaker.name} />
      <div className="py-3 pr-2 mb-2 h-full grid grid-rows-3">
        <h3 className="text-lg font-bold text-blue">{speaker.name}</h3>
        <p className="text-sm font-normal text-red">{speaker.profession}</p>
        <p className="text-gray-600 font-bold text-sm pt-2">
          {speaker.description}
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;
