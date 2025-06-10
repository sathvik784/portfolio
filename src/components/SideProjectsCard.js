import React from "react";
import '../styles/ProjectCard.css'

const SideProjectCard = ({projectData}) => {
    return(
        <div className="projectCards">
            <h1>{projectData.Name}</h1>
            <h2>{projectData.Description}</h2>
						{projectData.GitHub && <a href={projectData.GitHub}>
                <button>GitHub</button>
            </a>}
            {projectData.GitHubLink && <a href={projectData.GitHubLink}>
                <button>GitHub: Frontend</button>
            </a>}
            { projectData.GitHubLink2 ? (
                <a href={projectData?.GitHubLink2}>
                <button>GitHub: Backend</button>
            </a>
            ) : null}
        </div>
    );
}

export default SideProjectCard;