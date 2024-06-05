import SkillCard from "../../components/SkillCard";

interface SkillProps {
	skills: {
		skillName: string;
		skillIcon: JSX.Element;
	}[];
}

const Skills: React.FC<SkillProps> = ({ skills }) => {
	return (
		<div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
			{skills.map((skill) => {
				return (
					<SkillCard
						key={skill.skillName}
						skillName={skill.skillName}
						skillIcon={skill.skillIcon}
					/>
				);
			})}
		</div>
	);
};

export default Skills;
