import { contactInfos, socials } from "../data/data";
const footer = () => {
	return (
		<footer id="footer" className="bg-gradient-to-b from-dark to-red-rgba">
			<div className="bottom-0 z-10 mt-8 w-full  px-10 pt-16">
				<div className="mx-6 gap-x-10 pb-16 sm:mx-0 sm:grid sm:grid-cols-2">
					{/* contact */}
					<div className="mb-16 flex flex-col items-center sm:m-0">
						<div className="pb-10 text-4xl font-bold">
							Contact us
						</div>
						<div className="flex flex-col gap-y-4 font-medium">
							{contactInfos.map((info, i) => (
								<a
									href={info.href}
									key={i}
									className="flex items-center gap-x-4 text-sm"
									target="_blank"
									rel="noreferrer"
								>
									<div className="flex items-center justify-center">
										{info.icon}
									</div>
									<div className="">{info.content}</div>
								</a>
							))}
						</div>
					</div>
					{/* social media */}
					<div className="mb-8 flex flex-col items-center sm:m-0">
						<div className="pb-10 text-4xl font-bold">
							Follow us
						</div>
						<div className="flex gap-x-6">
							{socials.map((social, i) => (
								<div
									key={i}
									className="flex items-center justify-center "
								>
									<a
										href={social.link}
										target="_blank"
										rel="noreferrer"
										className="p-[10px] rounded-full bg-red"
									>
										{social.icon}
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<h5 className="bottom-0 pr-4 pb-8 text-center text-[16px] md:text-[20px] font-semibold">
				© 2022 School of AI - Algiers. All rights reserved.
			</h5>
		</footer>
	);
};

export default footer;
