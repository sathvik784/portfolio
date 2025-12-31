import React from "react";
import EducationMapped from "./EducationMap";
import educationData from "./EducationData";

function Education() {
    return(
        <section id="experience" className="min-h-screen py-20 px-4 flex items-center bg-white">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 text-center mb-4">
                    Experience
                </h2>
                <div className="w-20 h-0.5 bg-black mx-auto mb-16"></div>
                <EducationMapped educations={educationData} />
            </div>
        </section>
    );
}

export default Education;
