import { FaPalette, FaReact, FaCode } from "react-icons/fa";

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
			skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
		},
		{
			skillName: "Design/UX",
			skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
		},
		{
			skillName: "ReactJS",
			skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
		},
	],

	projects: [
		{
			title: "React tailwind portfolio",
			description:
				"👨‍🎨 An open-source portfolio template built with React and Tailwind.",
			tags: ["template", "portfolio", "reactjs", "tailwindcss"],
			link: "https://github.com/braydentw/react-tailwind-portfolio",
		},
		{
			title: "My personal website",
			description: "⚡ My portfolio built with NextJS and TailwindCSS.",
			tags: ["website", "portfolio", "nextjs", "tailwindcss"],
			link: "https://github.com/braydentW/braydentw",
		},
	],
};
export default data;
