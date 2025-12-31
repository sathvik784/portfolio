import React from "react";
import SocialsMapped from "./HomePageSocialsMap";
import socialsData from "./socialsData";
import Typewriter from "./HomePageTypingAn";

function Hero() {
    return(
		<section id="home" className="min-h-screen flex flex-col items-center justify-center px-4">
			<div className="max-w-4xl w-full text-center">
				<Typewriter />

				<div className="mt-12">
					<div className="flex justify-center gap-4 flex-wrap">
						<SocialsMapped socials={socialsData}/>
					</div>
				</div>
			</div>
		</section>
    );
}

export default Hero;
