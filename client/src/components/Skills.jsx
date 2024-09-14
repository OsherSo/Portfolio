import SkillCard from "./skills/SkillsCard";
import { SkillsData } from "./skills/SkillsData";

const Skills = () => {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="skills"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SkillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
