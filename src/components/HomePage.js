import React from "react";
import SocialsMapped from "./HomePageSocialsMap";
import socialsData from "./socialsData";
import '../styles/Socials.css'

function HomePage() {
    return(
        <div>
            <h1>Personal Portfolio for Sathvik Andhavarapu</h1>
            <SocialsMapped socials={socialsData}/>
        </div>
    );
}

export default HomePage;