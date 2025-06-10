import React from "react";
import '../styles/ProjectCard.css';
import { motion } from 'framer-motion';

const SideProjectCard = ({ projectData }) => {
    return (
				<motion.div
				className="projectCards"
				initial={{ opacity: 0, x: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				>
					<div className="projectCards">
							<div>
									<h1>{projectData.Name}</h1>
									<h2>{projectData.Description}</h2>
							</div>

							<div>
									{projectData.GitHub && (
											<a href={projectData.GitHub} target="_blank" rel="noopener noreferrer">
													<button>GitHub</button>
											</a>
									)}
									{projectData.GitHubLink && (
											<a href={projectData.GitHubLink} target="_blank" rel="noopener noreferrer">
													<button>Frontend</button>
											</a>
									)}
									{projectData.GitHubLink2 && (
											<a href={projectData.GitHubLink2} target="_blank" rel="noopener noreferrer">
													<button>Backend</button>
											</a>
									)}
									{projectData.PDFLink && (
											<a href={projectData.PDFLink} download target="_blank" rel="noopener noreferrer">
													<button>Findings</button>
											</a>
									)}
							</div>
					</div>
				</motion.div>
    );
};

export default SideProjectCard;
