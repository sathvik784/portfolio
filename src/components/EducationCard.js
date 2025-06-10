import React from "react";
import '../styles/EducationTimeline.css'

const EducationCard = ({educationData}) => {
    return(
        <div className="educationCard">
            <h1 id="title">{educationData?.Activity_Name}</h1>
            {educationData.GPA && <h2 id="gpa">GPA: {educationData?.GPA}</h2>}
            {educationData.Activities && <p id="activities">Activities: {educationData?.Activities}</p>}
						{educationData.Description && <p id="description">{educationData?.Description}</p>}
            
            <span className="circle"> </span>
        </div>
    );
}

export default EducationCard;