import React from "react";
import '../styles/ProjectCard.css'

const SideProjectCard = ({projectData}) => {
    return(
        <div className="projectCards">
            <h1>{projectData.Name}</h1>
            <h2>{projectData.Description}</h2>
            <a href={projectData.GitHubLink}>
                <button>GitHub</button>
            </a>
        </div>
    );
}

export default SideProjectCard;