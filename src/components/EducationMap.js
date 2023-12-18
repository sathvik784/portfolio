import React from "react";
import EducationCard from "./EducationCard";
import '../styles/EducationTimeline.css'

const EducationMapped = ({educations}) => {
    return(
        <div className="educationContainer">
            {educations.map(education => (
                <EducationCard id={education.id} educationData={education} />
                    )
                )}
        </div>
    );
}

export default EducationMapped;