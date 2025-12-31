import { TypeAnimation } from 'react-type-animation';

export default function Typewriter() {
  return (
    <TypeAnimation
			sequence={[
				"Hi, I'm Sathvik Andhavarapu", 2000,
				"Full‑Stack Developer", 2000,
				"Basketball Enthusiast", 2000,
			]}
			speed={50}
			wrapper="h1"
			cursor={true}
			className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-4"
			repeat={Infinity}
		/>
  );
}
