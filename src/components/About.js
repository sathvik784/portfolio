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
                    Bootcamp and learned languages and frameworks such as HTML, CSS, JavaScript, Python, React, and Django. You can see more about 
										my App Development Club experience in the 'Experience' tab, as I have worked with multiple Fortune 500 companies. Through these projects, 
										and the work I have done in my internship during the summer of 2025, I have found a passion in backend coding, and building products that
										I know will be of use to others. In my free time, I love to play/watch basketball, travel, and hike. I am currently searching for a 
										computer science internship for the summer of 2026, so please feel free to email me with any opportunities at sandhav1@terpmail.umd.edu!
                    </p>
            </div>

            <div className="image">
                <img id="imageOfSelf" src={selfImage} alt="selfImage not working"/>
            </div>
        </div>
    );
}

export default About;