import React from "react";
import SocialsMapped from "./HomePageSocialsMap";
import socialsData from "./socialsData";
import Typewriter from "./HomePageTypingAn";

function HomePage() {
    return(
		<div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
			{/* Subtle basketball pattern background */}
			<div className="absolute inset-0 opacity-[0.02] pointer-events-none">
				<div className="absolute top-20 left-20 w-32 h-32 rounded-full border-4 border-basketball-orange"></div>
				<div className="absolute bottom-40 right-32 w-24 h-24 rounded-full border-4 border-basketball-orange"></div>
			</div>

			<div className="max-w-4xl w-full text-center z-10">
				<Typewriter />

				<div className="mt-8 space-y-6 animate-fade-in">
					{/* Email with subtle orange accent */}
					<a
						href="mailto:sandhav1@terpmail.umd.edu"
						className="inline-block text-gray-600 hover:text-basketball-orange transition-colors duration-300 text-lg font-medium"
					>
						sandhav1@terpmail.umd.edu
					</a>

					{/* Social links */}
					<div className="flex justify-center gap-4 flex-wrap">
						<SocialsMapped socials={socialsData}/>
					</div>
				</div>
			</div>

			{/* Accent line - subtle court line vibe */}
			<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-basketball-orange/20 to-transparent"></div>
		</div>
    );
}

export default HomePage;
