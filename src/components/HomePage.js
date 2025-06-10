import React from "react";
import SocialsMapped from "./HomePageSocialsMap";
import socialsData from "./socialsData";
import '../styles/Home.css'
import Typewriter from "./HomePageTypingAn";

function HomePage() {
    return(
			<div>
				<Typewriter />
				<div className="landingPage">
					<p className="landingPage__contactInfo">sandhav1@terpmail.umd.edu</p>

					<div className="landingPage__socialsContainer">
					<div className="socialsContainer">
                <SocialsMapped socials={socialsData}/>
            </div>
					</div>
				</div>
		</div>
        
    );
}

export default HomePage;