import { Helmet } from "react-helmet";
import Card from "../../components/Card";
import About from "../../components/About";
import data from "../../assets/data";

function App() {
	return (
		<div className="mt-10">
			<Helmet>
				<title>Anthony Gorski | Home</title>
			</Helmet>
			<Card {...data.me} />
			<About {...data.about} />
		</div>
	);
}

export default App;
