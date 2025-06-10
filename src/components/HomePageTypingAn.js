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
			style={{
				fontSize: '2.5rem',
				color: '#000000',
				textAlign: 'center',
				margin: '40px 0 20px',
			}}
			repeat={Infinity}
		/>
  );
}
