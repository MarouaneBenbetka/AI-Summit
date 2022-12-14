import agenda_neurons from "../../assets/agenda_neurons.svg";
import agenda_link from "../../assets/link_agenda.svg";
import { agendaFri } from "../../data/data";

export default function AgendaFri() {
  return (
    <div>
      <div className="flex flex-col items-center mt-8 mb-2">
        <div className="text-4xl text-center text-blue font-bold">
          Friday 16th
        </div>
        <div className="flex flex-col space-y-1">
          <div className="text-2xl">Online</div>
          <div className="w-full bg-blue h-0.5 rounded-full" />
        </div>
      </div>
      <div className="flex my-12 flex-col justify-center items-center">
        {agendaFri.map((data, index) => (
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
                index == agendaFri.length - 1 ? "hidden" : "opacity-70 h-[32px]"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
