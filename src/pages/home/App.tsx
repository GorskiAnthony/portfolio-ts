import { Helmet } from "react-helmet";
import Card from "../../components/Card";
import About from "../../components/About";
import data from "../../assets/data";
import Skills from "../skills/SkillList";
import Projects from "../projects/ProjectsList";

function App() {
	return (
		<div className="mt-10">
			<Helmet>
				<title>Anthony Gorski | Home</title>
			</Helmet>
			<Card {...data.me} />
			<About {...data.about} />
			<Skills skills={data.skills} />
			<Projects projects={data.projects} />
		</div>
	);
}

export default App;
