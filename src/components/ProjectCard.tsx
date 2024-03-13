import { FaEye, FaGithub } from "react-icons/fa";

type Props = {
  img: string;
  title: string;
  techs: string[];
  githubLink?: string;
  preview?: string;
};

const ProjectCard = ({ img, title, techs, githubLink, preview }: Props) => {
  return (
    <div className="bg-gradient-to-tr from-gray-900 via-slate-800 to-sky-900 rounded-lg overflow-hidden">
      <div className="w-full h-[200px] md:h-[300px]">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="text-gray-100  p-5 w-full">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <div className="mb-4 flex items-center gap-4    ">
          <button className="p-2 bg-zinc-900 rounded-md hover:bg-zinc-600 transition-all duration-300 ease-in-out">
            <a href={githubLink} className="flex items-center justify-center gap-4">
              Github <FaGithub size={20} />
            </a>
          </button>
          <button className="p-2 bg-zinc-900 rounded-md hover:bg-zinc-600 transition-all duration-300 ease-in-out">
            <a href={preview} className="flex items-center justify-center gap-4">
              Preview <FaEye size={20} />
            </a>
          </button>
        </div>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {techs.map((tech) => (
            <span key={tech} className="inline-block px-2 py-1 bg-slate-500 rounded-md">
              {tech}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
