import agenda_neurons from "../../assets/agenda_neurons.svg";
import agenda_link from "../../assets/link_agenda.svg";
import { agendaSat } from "../../data/data";

export default function AgendaSat() {
  return (
    <div>
      <div className="flex flex-col items-center mt-8 mb-2">
        <div className="text-4xl text-center text-blue font-bold">
          Saturday 17th
        </div>

        <div className="flex flex-col space-y-1">
          <div className="text-2xl">In-person</div>
          <div className="w-full bg-blue h-0.5 rounded-full" />
        </div>
      </div>

      <div className="hidden md:flex justify-center ">
        <div className="flex flex-col justify-start mt-2 lg:w-[500px]">
          {agendaSat.map((data, index) => {
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
          {agendaSat.map((data, index) => {
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
        {agendaSat.map((data, index) => (
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
                index == agendaSat.length - 1 ? "hidden" : "opacity-70 h-[32px]"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
