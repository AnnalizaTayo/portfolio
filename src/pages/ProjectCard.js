import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaCodepen } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiPhp, SiNpm, SiBootstrap, SiSass, SiNetlify } from 'react-icons/si';

const ProjectCard = ({ title, details, techStack, gifSrc }) => {
  const techIcons = {
    html: <FaHtml5/>,
    css: <FaCss3Alt/>,
    sass: <SiSass/>,
    js: <SiJavascript/>,
    php: <SiPhp/>,
    react: <FaReact />,
    nodejs: <FaNodeJs />,
    npm: <SiNpm/>,
    tailwindcss: <SiTailwindcss />,
    bootstrapcss: <SiBootstrap/>,
    netlify: <SiNetlify/>,
    codepenio: <FaCodepen/>
    // Add more icons for other tech stack names as needed
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md max-w-full">
      <img
        src={gifSrc}
        alt={title}
        className="w-full h-auto transition-transform transform hover:scale-105"
      />

      <div className="proj-info absolute inset-0 py-4 bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity overflow-auto bg-indigo-950">
        <div className="text-white mx-auto px-4">
          <h3 className="text-left text-3xl font-semibold mx-4 mt-5">{title}</h3>
          <p className="text-6g my-10 mx-4">{details}</p>
          <div className="flex flex-row justify-start align-middle gap-5 mx-4 mt-4 mb-5">
            {techStack.map((tech, index) => (
              <div key={index} className="text-gray-200 rounded-full border-2 border-white p-2 text-2xl">
                {techIcons[tech]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
