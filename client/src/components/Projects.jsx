import ProjectCard from "./projects/ProjectsCard";
import { ProjectsData } from "./projects/ProjectsData";

const Projects = () => {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
