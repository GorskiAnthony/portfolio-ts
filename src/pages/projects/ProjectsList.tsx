import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { ProjectProps } from "../../config/types";

const Projects: React.FC<ProjectProps> = ({ projects }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 5;

	// Calculer le nombre total de pages
	const totalPages = Math.ceil(projects.length / projectsPerPage);

	// Déterminer les projets à afficher sur la page actuelle
	const startIndex = (currentPage - 1) * projectsPerPage;
	const currentProjects = projects.slice(
		startIndex,
		startIndex + projectsPerPage
	);

	// Gérer le changement de page
	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<div>
			<h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">
				My projects
			</h1>
			{currentProjects.map((project, idx) => (
				<ProjectCard
					name={project.name}
					description={project.description}
					topics={project.topics}
					html_url={project.html_url}
					key={idx}
				/>
			))}
			{totalPages > 1 && (
				<div className="flex justify-center mt-8">
					{Array.from({ length: totalPages }, (_, index) => (
						<button
							key={index}
							onClick={() => handlePageChange(index + 1)}
							disabled={currentPage === index + 1}
							className={`mx-1 px-4 py-2 border rounded ${
								currentPage === index + 1
									? "bg-blue-500 text-white"
									: "bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
							}`}
						>
							{index + 1}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default Projects;
