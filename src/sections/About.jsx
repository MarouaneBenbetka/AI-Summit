import Ai_sumit_logo from "../assets/AISummit-logo1-white.svg";
import soai_logo from "../assets/soai_logo_white.svg";
import About_element from "../components/about/about_element";
const About = () => {
	return <section id="about" className="container h-screen mx-auto flex flex-col justify-center ">
		<h1 className="py-3 text-4xl leading-10 font-extrabold text-center md:text-left">About</h1>
		<div className="md:flex space-x-0  md:space-x-7 md:space-y-0 space-y-7	">
		<About_element 
			paragraph="School of AI Algeirs is a local community  of developers students and lovers of Artificiel  Intelligence in Algeria, at the higher school  of  computer science ( ESI Algeirs ). "
			img={soai_logo}
		/>
		<About_element
			paragraph="School of AI Algeirs is a local community  of developers students and lovers of Artificiel  Intelligence in Algeria, at the higher school  of  computer science ( ESI Algeirs ). "
			img={Ai_sumit_logo}
		/>
		</div>
	</section>;
};

export default About;
