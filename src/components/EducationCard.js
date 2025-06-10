import React from "react";
import '../styles/EducationTimeline.css'
import { motion } from "framer-motion";

const EducationCard = ({educationData}) => {
    return(
				<motion.div
				className="educationCard"
				initial={{ opacity: 0, x: (educationData?.id % 2 !== 0) ? -100 : 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: false, amount: 0.2 }}>
        
					{/* <div className="educationCard"> */}
							<h1 id="title">{educationData?.Activity_Name}</h1>
							{educationData.GPA && <h2 id="gpa">GPA: {educationData?.GPA}</h2>}
							{educationData.Activities && <p id="activities">Activities: {educationData?.Activities}</p>}
							{educationData.Description && <p id="description">{educationData?.Description}</p>}
							
							<span className="circle"> </span>
					{/* </div> */}
				</motion.div>
    );
}

export default EducationCard;