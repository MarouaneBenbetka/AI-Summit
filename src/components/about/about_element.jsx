const About_element  =({img,paragraph})=>{
    return <div className="rounded-xl   mx-auto  bg-gradient-to-t p-[2px] from-blue to-red">
            <div className="flex flex-col justify-center h-full bg-dark text-white rounded-lg p-2">
			    <img src={img} className="py-3 h-32 p-7 "/>
			    <p  className="text-center p-8 font-medium text-xl capitalize ">{paragraph}</p>
		    </div>
        </div>
}
export default About_element;