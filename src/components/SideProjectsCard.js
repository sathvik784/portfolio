import React from "react";

const SideProjectCard = ({projectData}) => {
    return(
        <div>
            <h1>{projectData.Name}</h1>

            <p>{projectData.Description}</p>
            <a href="{projectData.GitHubLink}">
                <button>GitHub</button>
            </a>
        </div>
    );
}

export default SideProjectCard;