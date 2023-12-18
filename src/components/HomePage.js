import React from "react";
import SocialsMapped from "./HomePageSocialsMap";
import socialsData from "./socialsData";
import '../styles/Home.css'

function HomePage() {
    return(
        <div>
            <h1 id="name">Sathvik Andhavarapu</h1>
            <SocialsMapped socials={socialsData}/>
        </div>
    );
}

export default HomePage;