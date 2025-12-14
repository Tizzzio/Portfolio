// Componenti riutilizzabili
import React from "react";
import Image from "next/image";

// Componente per le barre delle competenze
export const SkillBar = ({ name, level, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-medium text-gray-700">{name}</span>
      <span className="text-gray-500">{level}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

// Componente per i tag/chips
export const Tag = ({ children, className = "" }) => (
  <span
    className={`bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 ${className}`}
  >
    {children}
  </span>
);

// Componente per i bottoni con gradiente
export const GradientButton = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
    secondary: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-white bg-opacity-90",
  };

  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl ${baseClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Componente per le card dei progetti
export const ProjectCard = ({ project }) => (
  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
    <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
      {project.image ? (
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={192}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
        </div>
      )}
      <div className="absolute top-4 right-4">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </div>

    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
      <p className="text-gray-600 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium hover:scale-105 text-center"
        >
          🚀 Live Demo
        </a>
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium text-center"
        >
          💻 Codice
        </a>
      </div>
    </div>
  </div>
);

// Componente per le sezioni con titolo
export const SectionHeader = ({ title, subtitle, className = "" }) => {
  const isWhiteTheme = className.includes("text-white");
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isWhiteTheme ? "text-white" : "text-gray-900"}`}>{title}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
      {subtitle && <p className={`text-xl max-w-3xl mx-auto ${isWhiteTheme ? "text-gray-200" : "text-gray-600"}`}>{subtitle}</p>}
    </div>
  );
};
