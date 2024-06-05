import { FaServer, FaReact, FaCode, FaNodeJs } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";

const data = {
	me: {
		name: "Anthony Gorski",
		title: "Full Stack Developer & Trainer at @WildCodeSchool",
		social: {
			github: "https://github.com/GorskiAnthony",
			twitter: "https://x.com/Gorski_anthony",
			email: "anthony.developpeurweb@gmail.com",
			youtube: "https://www.youtube.com/channel/UCWVgHNcrKtH_mTf9aMPA_4g",
		},
	},
	about: {
		title: "My Background",
		description: `👋 Hello! My name is Anthony and I've been a web developer for over 12 years. Currently a trainer at Wild Code School and OpenClassrooms, I pass on my passion for development to future talent. As a freelancer, I design innovative web and mobile applications for various clients.`,
	},
	skills: [
		{
			skillName: "Frontend",
			skillIcon: (
				<FaCode
					className={`${BOOTSTRAP_FOR_SKILL_ICON} text-red-500`}
				/>
			),
		},
		{
			skillName: "ReactJS",
			skillIcon: (
				<FaReact
					className={`${BOOTSTRAP_FOR_SKILL_ICON} text-sky-400`}
				/>
			),
		},
		{
			skillName: "Backend",
			skillIcon: <FaServer className={`${BOOTSTRAP_FOR_SKILL_ICON}`} />,
		},
		{
			skillName: "NodeJS",
			skillIcon: (
				<FaNodeJs
					className={`${BOOTSTRAP_FOR_SKILL_ICON} text-green-500`}
				/>
			),
		},
	],

	projects: [
		{
			title: "Test project",
			description: "👨‍🎨 lorem.",
			tags: ["template", "portfolio", "reactjs", "tailwindcss"],
			link: "https://github.com/GorskiAnthony/retro-wcs",
		},
		{
			title: "Test project",
			description: "⚡ Test",
			tags: ["website", "portfolio", "nextjs", "tailwindcss"],
			link: "https://github.com/GorskiAnthony/retro-wcs",
		},
	],
};
export default data;
