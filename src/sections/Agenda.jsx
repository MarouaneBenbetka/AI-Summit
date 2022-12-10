import { agenda } from "../data/data";
import { BiTimeFive } from "react-icons/bi";
import agenda_neurons from "../assets/agenda_neurons.svg";
import agenda_link from "../assets/link_agenda.svg";

const Agenda = () => {
  return (
    <div id="agenda" className=" py-14 pt-20 px-20 lg:px-[12vw]">
      <h1 className="text-4xl font-bold text-center md:text-left">Agenda</h1>

      <div className="flex items-center gap-0 ">
        <div className="h-1 bg-[#5D2024] w-full mx-0" />
        <BiTimeFive
          size={50}
          color="#5D2024"
          className="h-fit overflow-visible"
        />
        <div className="h-1 bg-[#5D2024] w-full" />
      </div>

      <div className="hidden md:flex justify-center ">
        <div className="flex flex-col justify-start mt-2 lg:w-[400px]">
          {agenda.map((data, index) => {
            if (index % 2 === 0) {
              return (
                <div
                  key={index}
                  className="ml-auto my-6 lg:my-8 text-[18px] lg:text-[22px] text-right"
                >
                  <span className="text-blue ">
                    {data.start} - {data.end}
                  </span>{" "}
                  : {data.activity}
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
          {agenda.map((data, index) => {
            if (index % 2 === 1) {
              return (
                <div
                  key={index}
                  className="my-6 lg:my-8 text-[18px] lg:text-[20px] text-left"
                >
                  <span className="text-blue">
                    {data.start} - {data.end}
                  </span>{" "}
                  : {data.activity}
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="flex md:hidden flex-col justify-center items-center">
        {agenda.map((data, index) => (
          <div key={index}>
            <div className="text-[18px] my-2 flex flex-col items-center justify-center">
              <span className="text-blue block">
                {data.start} - {data.end}
              </span>
              <p>{data.activity}</p>
            </div>
            <img
              src={agenda_link}
              alt=""
              className={
                index == agenda.length - 1 ? "hidden" : "opacity-70 h-[32px]"
              }
            />
          </div>
        ))}
      </div>

      <div className="h-1 bg-[#5D2024] w-full" />
    </div>
  );
};

export default Agenda;
