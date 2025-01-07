import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="bg-navy-800 rounded-lg overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {/* GitHub Link */}
          {/* {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-navy-800 rounded-full text-cyan-400 hover:text-white hover:bg-cyan-400 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
          )} */}
          {/* Live Link */}
          {liveUrl !== "#" ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-navy-800 rounded-full text-cyan-400 hover:text-white hover:bg-cyan-400 transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </a>
          ) : (
            <button
            type="button"
              className="p-2 bg-navy-800 rounded-full text-cyan-400 hover:text-white hover:bg-cyan-400 transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-navy-700 text-cyan-400 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
