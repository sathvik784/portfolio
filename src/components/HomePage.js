import React from "react";
import SocialsMapped from "./HomePageSocialsMap";
import socialsData from "./socialsData";
import '../styles/Home.css'
import Typewriter from "./HomePageTypingAn";

function HomePage() {
    return(
        <div>
            <Typewriter />
            <div className="contactInfo">
                <p>Email: sandhav1@terpmail.umd.edu</p>
            </div>

            <div className="socialsContainer">
                <SocialsMapped socials={socialsData}/>
            </div>
        </div>
    );
}

export default HomePage;