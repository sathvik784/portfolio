import React from "react";
import SocialsMapped from "./HomePageSocialsMap";
import socialsData from "./socialsData";
import '../styles/Home.css'

function HomePage() {
    return(
        <div>
            <h1 id="name">Sathvik Andhavarapu</h1>
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