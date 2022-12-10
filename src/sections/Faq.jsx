import { faq } from "../data/data";

const Faq = () => {
  return (
    <section
      id="faq"
      className="px-8 sm:px-20 lg:px-[12vw] pt-20 min-h-[100vh] flex  justify-center flex-col"
    >
      <h1 className="py-5 text-4xl leading-10 font-extrabold text-center md:text-left">
        FAQ
      </h1>
      <div className="w-full px-8 md:px-20 mx-auto space-y-8 flex items-center justify-center flex-col">
        {faq.map((x, index) => (
          <div
            key={index}
            className="w-[90vw] md:w-[80vw] lg:w-[60vw] p-[2px] rounded-lg cursor-pointer bg-gradient-to-t  from-blue to-red"
          >
            <details className="bg-dark rounded-lg">
              <summary className="font-semibold text-white text-[20px] px-4 py-6">
                {x.question}
              </summary>
              <div className="">
                <p className="text-sm leading-6 text-white px-4 pb-4">
                  {x.answer}
                </p>
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
