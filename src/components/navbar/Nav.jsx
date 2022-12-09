import React, { useState } from "react";
import logo from "../../assets/logo.png";
import logoLine from "../../assets/logoLine.png";
import { navLinks } from "../../data/data";
import { FaBars, FaTimes } from "react-icons/fa";

import { motion } from "framer-motion";
import { navVariants } from "../../styles/motion";

const Nav = () => {
	const [navMobile, setNavMobile] = useState(false);
	const [isHover, setIsHover] = useState(null);
	return (
		<div className="flex justify-between items-center  px-4 sm:px-8  py-4 md:px-4 lg:px-8">
			<div>
				<img src={logo} alt="logoImg" className="w-[10rem]" />
			</div>
			<ul className="hidden md:flex items-center md:gap-6 lg:gap-10">
				{navLinks.map((navLink, index) => (
					<li key={index}>
						<a
							href={`#${navLink.id}`}
							className="active:underline"
							onClick={() => setIsHover(navLink.id)}
						>
							{navLink.title}
						</a>
						{navLink.id === isHover && (
							<div className="w-full h-[4px] bg-red"></div>
						)}
					</li>
				))}
			</ul>

			<div className="hidden md:flex items-center gap-4">
				<button className="px-4 py-2 text-white bg-red rounded-[10px]">
					Register
				</button>
			</div>

			<div className="block md:hidden relative">
				{navMobile ? (
					<FaTimes
						className="text-3xl"
						onClick={() => setNavMobile(!navMobile)}
					/>
				) : (
					<FaBars
						className="text-3xl"
						onClick={() => setNavMobile(!navMobile)}
					/>
				)}

				{navMobile && (
					<div className="absolute flex flex-col z-20 items-center gap-4 bg-black px-8 py-4 text-center top-10 right-0">
						<ul className="flex flex-col gap-10">
							{navLinks.map((navLink, index) => (
								<li key={index}>
									<a
										href={`#${navLink.id}`}
										onClick={() => setNavMobile(false)}
									>
										{navLink.title}
									</a>
								</li>
							))}
						</ul>
						<div className="flex flex-col gap-4">
							<button className="px-4 py-2 text-white bg-red rounded-[10px]">
								Register
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Nav;
