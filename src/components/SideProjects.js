import React from "react";
import SideProjectsMap from "./SideProjectsMap";
import projectData from "./SideProjectsData";

function SideProjects() {
    return(
        <div>
            <SideProjectsMap projects={projectData} />
        </div>
    );
}

export default SideProjects;