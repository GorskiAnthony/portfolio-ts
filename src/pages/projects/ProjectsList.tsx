import ProjectCard from "../../components/ProjectCard";

interface ProjectProps {
	projects: {
		title: string;
		description: string;
		tags: string[];
		link: string;
	}[];
}

const Projects: React.FC<ProjectProps> = ({ projects }) => {
	return (
		<div>
			<h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">
				My projects
			</h1>
			{projects.map((project) => (
				<ProjectCard {...project} key={project.title} />
			))}
		</div>
	);
};

export default Projects;
