import React from "react";
import '../styles/EducationTimeline.css'

const EducationCard = ({educationData}) => {
    return(
        <div className="educationCard">
            <h1 id="title">{educationData.School}</h1>
            <h2 id="time">Attended {educationData.Timeline}</h2>
            <h2 id="gpa">GPA: {educationData.GPA}</h2>

            <p id="description">{educationData.activities}</p>
            
            <span className="circle"> </span>
        </div>
    );
}

export default EducationCard;