import React from "react";
import SideProjectsMap from "./SideProjectsMap";
import projectData from "./SideProjectsData";

function SideProjects() {
    return(
        <section id="projects" className="min-h-screen py-20 px-4 flex items-center bg-gray-50">
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 text-center mb-4">
                    Projects
                </h2>
                <div className="w-20 h-0.5 bg-black mx-auto mb-16"></div>
                <SideProjectsMap projects={projectData} />
            </div>
        </section>
    );
}

export default SideProjects;
