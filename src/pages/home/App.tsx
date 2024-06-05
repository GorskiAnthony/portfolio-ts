import { Helmet } from "react-helmet";
import Card from "../../components/Card";

const user = {
	name: "Anthony Gorski",
	title: "Full Stack Developer & Trainer at @WildCodeSchool",
	social: {
		github: "https://github.com/GorskiAnthony",
		twitter: "https://x.com/Gorski_anthony",
		email: "anthony.developpeurweb@gmail.com",
		youtube: "https://www.youtube.com/channel/UCWVgHNcrKtH_mTf9aMPA_4g",
	},
};

function App() {
	return (
		<div className="mt-5">
			<Helmet>
				<title>Anthony Gorski | Home</title>
			</Helmet>
			<Card {...user} />
		</div>
	);
}

export default App;
