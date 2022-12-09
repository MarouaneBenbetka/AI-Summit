import React from "react";
import line from '../assets/line.png'
import underline from '../assets/underline.png'
import lineGauch from '../assets/lineGauch.png'

import {motion} from 'framer-motion'
import { staggerContainer, textVariant } from '../styles/motion'

const Hero = () => {
	return (
	<motion.section
	id="home"
	className="h-[89vh] pl-4 sm:pl-8 pr-4 sm:pr-8 md:pr-0 relative"
	variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
	>
		<div className="flex items-center pt-[2rem] justify-center md:justify-between w-full" >
			<div>
				<motion.h1
				className=" text-[50px] sm:text-[70px] md:text-[60px] text-center md:text-left w-full lg:text-[60px] xl:text-[80px] font-bold font-libre-franklin"
				variants={textVariant(1.1)}
				>Welcome!</motion.h1>
				<motion.p 
				className="text-[35px] sm:text-[50px] md:text-[30px] text-center md:text-left lg:text-[40px] xl:text-[60px]"
				variants={textVariant(1.4)}
				>
					Show us your data & <br /> we'll show you your future</motion.p>
			</div>
			<motion.img
			src={line}
			alt="lineImg"
			className="justify-content-self-end self-end hidden md:block md:w-[450px] lg:w-[500px]"
			variants={textVariant(1.1)}
			/>
		</div>
		<motion.img
		src={underline}
		alt="underlineImg"
		className=" w-[20rem] md:w-fit absolute bottom-0 right-0"
		variants={textVariant(1.2)}
		/>
		<motion.img
		src={lineGauch}
		alt="lineGauchImg"
		className="absolute bottom-4 left-0"
		variants={textVariant(1.3)}
		/>

	</motion.section>
	)
};

export default Hero;
