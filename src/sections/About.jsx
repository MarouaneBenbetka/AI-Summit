import Ai_sumit_logo from "../assets/AISummit-logo1-white.svg";
import soai_logo from "../assets/soai_logo_white.svg";
import About_element from "../components/about/about_element";
const About = () => {
  return (
    <section
      id="about"
      className="px-8 sm:px-20 lg:px-[12vw] min-h-screen mb-16 pt-20 mx-auto flex flex-col justify-center"
    >
      <h1 className="py-3 text-4xl leading-10 font-extrabold text-center md:text-left">
        About
      </h1>
      <div className="md:flex space-x-0 md:space-x-7 md:space-y-0 space-y-7">
        <About_element
          paragraph="School of AI Algiers or SOAI is a local community of developers, students and Artificial Intelligence lovers in Algeria, located at the Higher School of Computer Science (ESI Algiers). "
          img_div={<img src={soai_logo} className={`mb-4 mt-6 w-72`} />}
        />
        <About_element
          paragraph="AI Summit is a 2 days event organized by SOAI. It's a series of conferences about the advancement of Artificial Intelligence where we get to discuss about the latest research papers in AI."
          img_div={<img src={Ai_sumit_logo} className={`mb-4 mt-12 w-32`} />}
        />
      </div>
    </section>
  );
};

export default About;
