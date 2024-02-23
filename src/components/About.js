import React from "react";
import selfImage from  '../images/self.png';
import '../styles/About.css'

function About() {
    return(
        <div>
            <h1>About</h1>
            <img id="imageOfSelf" src={selfImage} alt="selfImage not working"/>
        </div>
    );
}

export default About;