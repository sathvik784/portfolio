import React from "react";
import SideProjectCard from "./SideProjectsCard";

const SideProjectsMap = ({projects}) => {
    return(
        <div>
            {projects.map(project => (
                <SideProjectCard id={project.id} projectData={project} />
            ))}
        </div>
    );
}

export default SideProjectsMap;