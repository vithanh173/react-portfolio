import { Projects } from "../data/data";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div id="projects" className="bg-[#02050a] py-12">
      <h1 className="flex justify-center items-center text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] uppercase font-bold text-[#55e6a5] mb-[1rem]">
        Project
      </h1>
      <div className="px-[4rem] pt-[2rem] grid grid-cols-1 md:grid-cols-3 gap-5">
        {Projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            img={project.imgURL}
            techs={project.technology}
            githubLink={project.githubLink}
            preview={project.preview}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
