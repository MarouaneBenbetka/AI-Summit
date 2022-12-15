import agenda_neurons from "../../assets/agenda_neurons.svg";
import agenda_link from "../../assets/link_agenda.svg";
import { agendaSatP } from "../../data/data";

export default function AgendaSatP({ mode, setMode }) {
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

      <div className="hidden md:flex justify-center ">
        <div className="flex flex-col justify-start mt-2 lg:w-[500px]">
          {agendaSatP.map((data, index) => {
            if (index % 2 === 0) {
              return (
                <div
                  key={index}
                  className="ml-auto my-6 lg:my-8 text-[18px] lg:text-[22px] text-right"
                >
                  <span className="text-blue ">
                    {data.start} - {data.end} :
                  </span>{" "}
                  {data.activity}
                </div>
              );
            }
          })}
        </div>
        <div className="invisible md:visible sm:visible flex justify-around items-center md:py-10 px-4   ">
          <img
            src={agenda_neurons}
            alt="React Logo"
            className="md:h-[360px] lg:h-[460px] "
          />
        </div>

        <div className="flex flex-col justify-end ml-2 mb-2 lg:w-[400px]">
          {agendaSatP.map((data, index) => {
            if (index % 2 === 1) {
              return (
                <div
                  key={index}
                  className="my-6 lg:my-8 text-[18px] lg:text-[20px] text-left"
                >
                  <span className="text-blue">
                    {data.start} - {data.end} :
                  </span>{" "}
                  <span>{data.activity}</span>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="flex md:hidden my-12  flex-col justify-center items-center">
        {agendaSatP.map((data, index) => (
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
                index == agendaSatP.length - 1
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
