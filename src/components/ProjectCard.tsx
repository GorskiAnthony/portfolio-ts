import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";
import { Project } from "../config/types";

const ProjectCard: React.FC<Project> = ({
	name,
	description,
	topics,
	html_url,
}) => {
	return (
		<div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
			<a href={html_url}>
				<h1 className="text-xl text-center font-bold">
					{name}{" "}
					<FaExternalLinkAlt className="inline align-baseline" />
				</h1>
			</a>
			<hr className="my-4" />
			<p className="">{description}</p>
			<div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
				{topics.map((tag) => (
					<div className="px-4 py-1 border-2 rounded-full">{tag}</div>
				))}
			</div>
			<div className="w-full text-center">
				<GitHubButton
					href={html_url}
					data-color-scheme="no-preference: light; light: light; dark: light;"
					data-icon="octicon-star"
					data-size="large"
					data-show-count="true"
					aria-label="Star ntkme/github-buttons on GitHub"
				>
					Star
				</GitHubButton>
				{"  "}
				<GitHubButton
					href={html_url + "/fork"}
					data-color-scheme="no-preference: light; light: light; dark: light;"
					data-icon="octicon-repo-forked"
					data-size="large"
					data-show-count="true"
					aria-label="Fork ntkme/github-buttons on GitHub"
				>
					Fork
				</GitHubButton>
			</div>
		</div>
	);
};

export default ProjectCard;
