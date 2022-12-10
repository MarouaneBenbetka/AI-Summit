import { agenda } from "../data/data";
import {BiTimeFive} from "react-icons/bi"

const Agenda = () => {
  return (
    <div className="py-14 px-20 ">
      <h1 className="text-4xl font-bold text-center md:text-left">Agenda</h1>

	  <div className="flex items-center gap-0 ">
		<div className="h-1 bg-[#5D2024] w-full mx-0"/>
		<BiTimeFive size={50} color="#5D2024" className="h-fit px-[-2]  overflow-visible"/>
		<div className="h-1 bg-[#5D2024] w-full"/>
	  </div>

      <div className="bg-slate-600 py-5">
        {agenda.map((data, index) => (
          <div
            key={index}
            className={`flex   ${
              index % 2 == 1 ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={
                index % 2 == 0 ? "basis-2/5 text-right" : " basis-2/5 text-left"
              }
            >
              <span className="text-blue">
                {data.start} - {data.end}
              </span>{" "}
              : {data.activity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
