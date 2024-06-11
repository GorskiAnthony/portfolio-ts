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
			<div className="grid sm:grid-cols-2 md:grid-flow-col gap-3">
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
		</div>
	);
};

export default Skills;
