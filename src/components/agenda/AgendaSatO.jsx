import agenda_link from "../../assets/link_agenda.svg";
import { agendaSatO } from "../../data/data";

export default function AgendaSatO({ mode, setMode }) {
  return (
    <div>
      <div className="flex flex-col items-center mt-8 mb-2">
        <div className="text-4xl text-center text-blue font-bold">
          Saturday 17th
        </div>

        <div className="sm:space-x-8 flex flex-col sm:flex-row items-center gap-y-3 my-3">
          <div
            onClick={() => setMode("satO")}
            className="text-2xl cursor-pointer"
          >
            <div
              className={`${
                mode == "satO" ? "" : "text-[#58747a] hover:text-white"
              } ' '`}
            >
              Online
            </div>
            <div
              className={`${
                mode == "satO" ? "bg-blue" : "hidden"
              } ' w-full h-0.5 rounded-full'`}
            />
          </div>
          <div
            onClick={() => setMode("satP")}
            className="text-2xl cursor-pointer"
          >
            <div
              className={`${
                mode == "satP" ? "" : "text-[#58747a] hover:text-white"
              } ' '`}
            >
              In-person
            </div>
            <div
              className={`${
                mode == "satP" ? "bg-blue" : "hidden"
              } ' w-full h-0.5 rounded-full'`}
            />
          </div>
        </div>
      </div>
      <div className="flex my-12 flex-col justify-center items-center">
        {agendaSatO.map((data, index) => (
          <div
            key={index}
            className="text-[18px] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col my-2 items-center justify-center">
              <span className="text-blue block">
                {data.start} - {data.end}
              </span>
              <p className="text-center">{data.activity}</p>
            </div>
            <img
              src={agenda_link}
              alt=""
              className={
                index == agendaSatO.length - 1
                  ? "hidden"
                  : "opacity-70 h-[32px]"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
