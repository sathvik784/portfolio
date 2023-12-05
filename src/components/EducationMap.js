import React from "react";
import EducationCard from "./EducationCard";

const EducationMapped = ({educations}) => {
    return(
        <div>
            {educations.map(education => (
                <EducationCard id={education.id} educationData={education} />
                    )
                )}
        </div>
    );
}

export default EducationMapped;