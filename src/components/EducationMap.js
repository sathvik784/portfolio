import React from "react";
import EducationCard from "./EducationCard";

const EducationMapped = ({educations}) => {
    return(
        <div className="relative">
            {educations.map((education, index) => (
                <EducationCard key={education.id} id={education.id} educationData={education} index={index} />
            ))}
        </div>
    );
}

export default EducationMapped;
