import React from 'react';
import { Navigation } from './Navigation';

interface ProjectsProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching') => void;
  navigateToProject: (projectId: number) => void;
}

export function Projects({ setCurrentPage, navigateToProject }: ProjectsProps) {
  const projects = [
    {
      id: 1,
      title: 'Clarity in the Cloud',
      subtitle: 'Subscription Management',
      category: 'HCI Research',
      year: '2026'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation setCurrentPage={setCurrentPage} currentPage="projects" />
      
      <div className="px-8 py-20 pt-32">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-8 font-light tracking-tight">
            Group Project
          </h1>
          
          <p className="text-lg text-gray-600 mb-24 font-light">
            Collaborative HCI research and design work
          </p>

          {/* Project Grid - Editorial Layout */}
          <div className="space-y-1">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => navigateToProject(project.id)}
                className="w-full border-t border-gray-300 py-8 hover:bg-gray-100 transition-colors duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-left">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-2">
                      <h3 className="text-2xl text-gray-900 font-light group-hover:italic transition-all">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500 font-light hidden sm:inline">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 font-light italic">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-gray-400 font-light">
                      {project.year}
                    </span>
                    <span className="text-gray-400 group-hover:text-gray-900 transition-colors">
                      →
                    </span>
                  </div>
                </div>
              </button>
            ))}
            <div className="border-t border-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}