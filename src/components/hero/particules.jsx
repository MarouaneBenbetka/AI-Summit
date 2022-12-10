import Particles from "react-tsparticles";

const Particlesbg = ({ init, loaded }) => {
	return (
		<Particles
			className="h-screen w-screen absolute"
			id="tsparticles"
			init={init}
			loaded={loaded}
			options={{
				background: {
					color: {
						value: "#1B1E21",
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: "push",
						},
						onHover: {
							enable: true,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 1,
						},
						repulse: {
							distance: 100,
							duration: 0.8,
						},
					},
				},
				particles: {
					color: {
						value: "#CC2429",
					},
					links: {
						color: "#CCD9DA",
						distance: 150,
						enable: true,
						opacity: 0.3,
						width: 1,
					},
					collisions: {
						enable: false,
					},
					move: {
						directions: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 6,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 6 },
					},
				},
				detectRetina: true,
				fullScreen: {
					enable: false,
				},
			}}
		/>
	);
};

export default Particlesbg;
