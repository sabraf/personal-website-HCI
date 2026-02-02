import React from 'react';
import { Navigation } from './Navigation';

interface RoadmapProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching' | 'iterative-development' | 'final-prototype') => void;
}

export function Roadmap({ setCurrentPage }: RoadmapProps) {
  const stages = [
  {
    id: 1,
    title: 'Problem Analysis',
    icon: 'circle',
    description: 'Quantitative research (n=17) on subscription fatigue and dark patterns.'
  },
  {
    id: 2,
    title: 'User Empathy Map',
    icon: 'triangle',
    description: 'Mapping the "Anxious to Relief" journey and identifying user frustration points.'
  },
  {
    id: 3,
    title: 'Ideation & Sketching',
    icon: 'diamond',
    description: 'Prototyping ethical UI variations: Timeline vs. Control Center layouts.'
  },
  {
    id: 4,
    title: 'Iterative Testing',
    icon: 'square',
    description: 'Refining the cancellation flow using Insight Yield and Success Rate metrics.'
  },
  {
    id: 5,
    title: 'Final Ethical Prototype',
    icon: 'hexagon',
    description: 'The "Clarity Dashboard" featuring one-click cancel and total spend visibility.'
  }
];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'circle':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          </svg>
        );
      case 'triangle':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 6 L26 26 L6 26 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M16 11 L22 23 L10 23 Z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
          </svg>
        );
      case 'diamond':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4 L28 16 L16 28 L4 16 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M16 9 L23 16 L16 23 L9 16 Z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
          </svg>
        );
      case 'square':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="6" width="20" height="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <rect x="10" y="10" width="12" height="12" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
          </svg>
        );
      case 'hexagon':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4 L26 10 L26 22 L16 28 L6 22 L6 10 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M16 9 L22 12.5 L22 19.5 L16 23 L10 19.5 L10 12.5 Z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
          </svg>
        );
      case 'star':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4 L19 13 L28 13 L21 19 L24 28 L16 22 L8 28 L11 19 L4 13 L13 13 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation setCurrentPage={setCurrentPage} currentPage="roadmap" />
      
      <div className="px-8 py-20 pt-32">

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-gray-900 mb-8 font-light tracking-tight text-center">
          Project Roadmap
        </h1>
        
        <p className="text-lg text-gray-600 mb-20 font-light text-center max-w-2xl mx-auto">
          A structured approach to human-centered interaction design
        </p>

        {/* Grid of Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => {
                if (stage.id === 1) setCurrentPage('project-detail');
                if (stage.id === 2) setCurrentPage('empathy-map');
                if (stage.id === 3) setCurrentPage('ideation-sketching');
                if (stage.id === 4) setCurrentPage('iterative-development');
                if (stage.id === 5) setCurrentPage('final-prototype');
              }}
              className="border border-gray-900 p-8 hover:bg-gray-900 hover:text-neutral-50 transition-all duration-500 group aspect-square flex flex-col text-left cursor-pointer"
            >
              {/* Icon - Top Corner */}
              <div className="mb-auto">
                <div className="text-gray-900 group-hover:text-neutral-50 transition-colors duration-500">
                  {renderIcon(stage.icon)}
                </div>
              </div>

              {/* Number */}
              <div className="text-sm text-gray-400 group-hover:text-neutral-400 mb-4 font-light transition-colors duration-500">
                {String(stage.id).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="text-xl text-gray-900 group-hover:text-neutral-50 font-light leading-snug mb-3 transition-colors duration-500">
                {stage.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 group-hover:text-neutral-300 font-light leading-relaxed transition-colors duration-500">
                {stage.description}
              </p>
            </button>
          ))}
        </div>

        {/* Project Info */}
        <div className="mt-20 border-t border-gray-300 pt-16">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2 font-light">
                Duration
              </p>
              <p className="text-2xl text-gray-900 font-light">12 Weeks</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2 font-light">
                Team Size
              </p>
              <p className="text-2xl text-gray-900 font-light">3 Members</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2 font-light">
                Deliverables
              </p>
              <p className="text-2xl text-gray-900 font-light">5 Phases</p>
            </div>
          </div>
        </div>

        {/* View Problem Analysis Button */}
        <div className="mt-20 border-t border-gray-300 pt-16 text-center">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-8 font-light">
            Full Documentation
          </h2>
          <button
            onClick={() => setCurrentPage('project-detail')}
            className="border border-gray-900 px-12 py-4 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-neutral-50 transition-all duration-500 font-light tracking-widest text-sm uppercase"
          >
            View Problem Analysis →
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}