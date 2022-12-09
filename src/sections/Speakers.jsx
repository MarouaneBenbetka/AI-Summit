import { speakers } from "../data/data.jsx";

const Speakers = () => {
  return (
    <div className="p-14 flex flex-col font-libre-franklin">
      <h1 className="text-4xl font-bold text-center md:text-left">Speakers</h1>
      <div className="flex justify-around w-full flex-wrap mt-2 ">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className=" rounded-xl m-4 w-[260px] bg-white hover:mx-8 transition-all duration-300 "
          >
            <img
              className="rounded-xl h-52"
              src={speaker.img}
              alt={speaker.name}
            />
            <div className="p-3 mb-2">
              <h3 className="text-lg font-bold text-blue">{speaker.name}</h3>
              <p className="text-sm font-light text-red pb-1">
                {speaker.profession}
              </p>
              <p className="text-gray-600 font-bold text-sm ">
                {speaker.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
