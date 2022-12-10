import Ai_sumit_logo from "../assets/AISummit-logo1-white.svg";
import soai_logo from "../assets/soai_logo_white.svg";
import About_element from "../components/about/about_element";
const About = () => {
	return (
		<section
			id="about"
			className="px-8 sm:px-20 lg:px-[12vw] min-h-screen mb-16 pt-20 mx-auto flex flex-col justify-center "
		>
			<h1 className="py-3 text-4xl leading-10 font-extrabold text-center md:text-left">
				About
			</h1>
			<div className="md:flex space-x-0  md:space-x-7 md:space-y-0 space-y-7	">
				<About_element
					paragraph="School of AI Algeirs is a local community  of developers students and lovers of Artificiel  Intelligence in Algeria, at the higher school  of  computer science ( ESI Algeirs ). "
					img_div={
						<img src={soai_logo} className={`mb-4 mt-6 w-72`} />
					}
				/>
				<About_element
					paragraph="School of AI Algeirs is a local community  of developers students and lovers of Artificiel  Intelligence in Algeria, at the higher school  of  computer science ( ESI Algeirs ). "
					img_div={
						<img
							src={Ai_sumit_logo}
							className={`mb-4 mt-12 w-32`}
						/>
					}
				/>
			</div>
		</section>
	);
};

export default About;
