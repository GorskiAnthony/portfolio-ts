import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card";
import About from "../../components/About";
import data from "../../assets/data";
import Skills from "../skills/SkillList";
import Projects from "../projects/ProjectsList";
import { Project } from "../../config/types";

function transformGitHubData(githubData: any[]): Project[] {
	return githubData.map((repo) => ({
		name: repo.name,
		description: repo.description || "No description available.",
		topics: repo.topics || [],
		html_url: repo.html_url,
	}));
}

function App() {
	const githubData = useLoaderData() as any[]; // Assertion de type pour useLoaderData
	const myProjects = transformGitHubData(githubData);

	console.log(myProjects);

	return (
		<div className="mt-10">
			<Helmet>
				<title>Anthony Gorski | Home</title>
			</Helmet>
			<Card {...data.me} />
			<About {...data.about} />
			<Skills skills={data.skills} />
			<Projects projects={data.projects} />
			<Projects projects={myProjects} />
		</div>
	);
}

export default App;
