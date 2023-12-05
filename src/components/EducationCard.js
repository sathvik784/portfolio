import React from "react";

const EducationCard = ({educationData}) => {
    return(
        <div>
            <h1>{educationData.School}</h1>
            <h2>Attended {educationData.Timeline}</h2>
            <h2>GPA: {educationData.GPA}</h2>

            <p>{educationData.activities}</p>
            
        </div>
    );
}

export default EducationCard;