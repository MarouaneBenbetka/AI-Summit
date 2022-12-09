const About_element = ({ img_div, paragraph }) => {
	return (
		<div className="rounded-xl   mx-auto  bg-gradient-to-t p-[2px] from-blue to-red">
			<div className="flex flex-col justify-between items-center h-full bg-dark text-white rounded-lg p-2 ">
				{img_div}
				<p className="text-center px-11 mb-11 font-medium text-xl capitalize  ">
					{paragraph}
				</p>
			</div>
		</div>
	);
};
export default About_element;
