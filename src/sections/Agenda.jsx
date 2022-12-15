import { BiTimeFive } from "react-icons/bi";
import { useState } from "react";

import AgendaSatP from "../components/agenda/AgendaSatP";
import AgendaSatO from "../components/agenda/AgendaSatO";
import AgendaFri from "../components/agenda/AgendaFri";

const Agenda = () => {
  const [mode, setMode] = useState("satP");
  return (
    <div id="agenda" className="py-14 pt-20 px-20 lg:px-[12vw]">
      <div className="flex sm:justify-between flex-col items-center sm:flex-row">
        <h1 className="text-4xl font-bold text-center md:text-left">Agenda</h1>
        <div className="sm:space-x-3 flex flex-col sm:flex-row items-center gap-y-3 my-3">
          <button
            onClick={() => setMode("fri")}
            className={`${
              mode == "fri" ? "bg-red" : "bg-red-rgba"
            } ' px-5 hover:bg-red py-2 rounded-xl text-lg sm:text-2xl font-medium'`}
          >
            Friday
          </button>
          <button
            onClick={() => setMode("satP")}
            className={`${
              mode != "fri" ? "bg-red" : "bg-red-rgba"
            } ' px-5 hover:bg-red py-2 rounded-xl text-lg sm:text-2xl font-medium'`}
          >
            Saturday
          </button>
        </div>
      </div>
      <div className="flex items-center gap-0 ">
        <div className="h-1 bg-red-rgba w-full mx-0" />
        <BiTimeFive
          size={50}
          color="#5D2024"
          className="h-fit overflow-visible"
        />
        <div className="h-1 bg-red-rgba w-full" />
      </div>
      {mode == "fri" ? (
        <AgendaFri />
      ) : mode == "satP" ? (
        <AgendaSatP mode={mode} setMode={setMode} />
      ) : (
        <AgendaSatO mode={mode} setMode={setMode} />
      )}

      <div className="h-1 bg-red-rgba w-full" />
    </div>
  );
};

export default Agenda;
