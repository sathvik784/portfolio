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
                    Bootcamp and learned languages and frameworks such as HTML, CSS, JavaScript, Python, React, and Django. Last semester, 
                    my team and I were in collaboration with Amazon Project Kuiper, where we developed a distributed ledger-based 
                    game theory application to analyze interactions between spacecraft operators and independent space situational 
                    awareness sensor networks during high-risk conjunction events. I am now involved in a different project within the 
                    App Development Club, with the U.S. news. We are creating a data visualization tool by leveraging the 
                    U.S. News’ internal API, as well as creating backend features for data validation and QA functionality, and 
                    implementing heuristics for flagging data anomalies for review. I am currently searching for a computer science or 
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