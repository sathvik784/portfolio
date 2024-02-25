import React from "react";
import selfImage from  '../images/self.png';
import '../styles/About.css'

function About() {
    return(
        <div className="container">
            <div className="text">
                <p>Hi, I'm Sathvik Andhavarapu. I am an undergraduate student at the University of Maryland, and I am studying Computer 
                    Science and Economics. My passion and curiousity for programming has led me to begin learning about web and app 
                    development. This has been primarily through my involvement with the App Development Club, where I participated in the 
                    Bootcamp and learned languages and frameworks such as HTML, CSS, JavaScript, Python, React, and Django. Currently, 
                    my team and I are in collaboration with Amazon Project Kuiper, where we are developing a distributed ledger-based 
                    game theory application to analyze interactions between spacecraft operators and independent space situational 
                    awareness sensor networks during high-risk conjunction events. I am currently searching for a computer science or 
                    economics internship, so email me with any opportunities at sandhav1@terpmail.umd.edu!
                    </p>
            </div>

            <div className="image">
                <img id="imageOfSelf" src={selfImage} alt="selfImage not working"/>
            </div>
        </div>
    );
}

export default About;