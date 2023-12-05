import React from "react";
import EducationMapped from "./EducationMap";
import educationData from "./EducationData";

function Education() {
    return(
        <div>
            <h1>Education</h1>

            <EducationMapped educations={educationData} />
        </div>
    );
}

export default Education;