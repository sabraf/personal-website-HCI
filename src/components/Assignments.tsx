import React from 'react';
import { FileText, Lightbulb, Users, TestTube, Presentation } from 'lucide-react';
import { Navigation } from './Navigation';

interface AssignmentsProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching') => void;
  navigateToAssignment?: (assignmentId: number) => void;
}

export function Assignments({ setCurrentPage, navigateToAssignment }: AssignmentsProps) {
  const assignments = [
    {
      id: 1,
      title: 'Assignment 01',
      description: 'Interaction Problem',
      icon: 'research',
    },
    {
      id: 2,
      title: 'Assignment 02',
      description: 'Analysis of Personal Websites',
      icon: 'design',
    },
    {
      id: 3,
      title: 'Assignment 03',
      description: 'Personal Website / Prototype Phase',
      icon: 'prototype',
    },
    {
      id: 4,
      title: 'Assignment 04',
      description: 'Development Phase',
      icon: 'testing',
    },
    {
      id: 5,
      title: 'Assignment 05',
      description: 'Final Presentation & Portfolio',
      icon: 'presentation',
    },
  ];

  const renderIcon = (iconType: string) => {
    const iconProps = { size: 32, strokeWidth: 0.75 };
    
    switch (iconType) {
      case 'research':
        return <FileText {...iconProps} />;
      case 'design':
        return <Lightbulb {...iconProps} />;
      case 'prototype':
        return <Users {...iconProps} />;
      case 'testing':
        return <TestTube {...iconProps} />;
      case 'presentation':
        return <Presentation {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation setCurrentPage={setCurrentPage} currentPage="assignments" />
      
      <div className="px-8 py-20 pt-32">

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6 font-light tracking-tight">
            Assignments
          </h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
            A collection of individual assignments exploring various aspects of human-computer interaction, 
            from research and analysis to design and prototyping.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {assignments.map((assignment) => (
            <button
              key={assignment.id}
              className="border border-gray-900 p-8 hover:bg-gray-900 hover:text-neutral-50 transition-all duration-500 group aspect-square flex flex-col text-left cursor-pointer"
              onClick={() => navigateToAssignment ? navigateToAssignment(assignment.id) : setCurrentPage('assignment-detail')}
            >
              {/* Icon - Top Corner */}
              <div className="mb-auto">
                <div className="text-gray-900 group-hover:text-neutral-50 transition-colors duration-500">
                  {renderIcon(assignment.icon)}
                </div>
              </div>

              {/* Number */}
              <div className="text-sm text-gray-400 group-hover:text-neutral-400 mb-4 font-light transition-colors duration-500">
                {String(assignment.id).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="text-xl text-gray-900 group-hover:text-neutral-50 font-light leading-snug mb-3 transition-colors duration-500">
                {assignment.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 group-hover:text-neutral-300 font-light leading-relaxed transition-colors duration-500">
                {assignment.description}
              </p>
            </button>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}