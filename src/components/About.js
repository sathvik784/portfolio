import React from "react";
import selfImage from  '../images/self.png';

function About() {
    return(
        <section id="about" className="min-h-screen py-20 px-4 flex items-center bg-gray-50">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 text-center mb-4">
                    About Me
                </h2>
                <div className="w-20 h-0.5 bg-black mx-auto mb-16"></div>

                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    <div className="md:w-2/5 flex justify-center">
                        <img
                            src={selfImage}
                            alt="Sathvik Andhavarapu"
                            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
                        />
                    </div>

                    <div className="md:w-3/5">
                        <p className="text-lg text-gray-700 leading-relaxed font-sans">
                            Hi, I'm Sathvik Andhavarapu. I am an undergraduate student at the University of Maryland, and I am studying Computer
                            Science and Economics. My passion and curiousity for programming has led me to begin learning about web and app
                            development. This has been primarily through my involvement with the App Development Club, where I participated in the
                            Bootcamp and then worked with multiple Fortune 500 companies. You can see more about
                            my App Development Club experience in the 'Experience' section, and my skills in the 'Skills' section. Through these projects,
                            and the work I have done in my internship during the summer of 2025, I have found a passion in backend coding, and building products that
                            I know will be of use to others. In my free time, I love to play/watch basketball, travel, and hike.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
