import React from "react";
import line from "../assets/line.png";
import underline from "../assets/underline.png";
import lineGauch from "../assets/lineGauch.png";
import logoLine from "../assets/logoLine.png";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../styles/motion";
import Particlesbg from "../components/hero/particules";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Hero = () => {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<>
			<Particlesbg init={particlesInit} loaded={particlesLoaded} />
			<motion.section
				id="home"
				className="px-8 sm:px-20 lg:px-[9vw] h-[89vh] min-h-[500px]  relative flex items-center content-center"
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
			>
				<div className="flex items-center mb-14 w-full">
					<div>
						<motion.h1
							className=" text-[50px]  md:text-[60px] text-center md:text-left w-full lg:text-[80px] xl:text-[94px] font-extrabold font-libre-franklin"
							variants={textVariant(1.1)}
						>
							Welcome!
						</motion.h1>
						<motion.p
							className="text-[35px] sm:text-[50px] md:text-[30px] text-center md:text-left lg:text-[32px] xl:text-[48px] leading-[60px]"
							variants={textVariant(1.4)}
						>
							Show us your data & <br /> we'll show you your
							future
						</motion.p>
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default Hero;
