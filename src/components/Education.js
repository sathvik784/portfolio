import React from "react";
import EducationMapped from "./EducationMap";
import educationData from "./EducationData";
import '../styles/EducationTimeline.css'

function Education() {
    return(
        <div className="page">
            <EducationMapped educations={educationData} />
        </div>
    );
}

export default Education;