import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Particlesbg = () => {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	return (
		<Particles
			className="h-[80vh] min-h-[500px] w-screen absolute"
			id="tsparticles"
			init={particlesInit}
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
