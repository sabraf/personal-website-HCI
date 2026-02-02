import React from 'react';
import { ArrowRight, BookOpen, FolderOpen } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Human-Computer Interaction
          <span className="block text-blue-600 mt-2">Design Portfolio</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Welcome to my HCI portfolio. Explore my coursework assignments and project documentation
          showcasing user-centered design, usability testing, and interactive prototypes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <button
            onClick={() => setActiveSection('assignments')}
            className="group bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto group-hover:bg-blue-500 transition-colors">
              <BookOpen className="text-blue-600 group-hover:text-white transition-colors" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Course Assignments</h3>
            <p className="text-gray-600 mb-4">
              View my HCI course assignments and design exercises
            </p>
            <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700">
              <span className="mr-2">Explore</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button
            onClick={() => setActiveSection('projects')}
            className="group bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4 mx-auto group-hover:bg-purple-500 transition-colors">
              <FolderOpen className="text-purple-600 group-hover:text-white transition-colors" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Documentation</h3>
            <p className="text-gray-600 mb-4">
              Read detailed documentation of my HCI projects
            </p>
            <div className="flex items-center justify-center text-purple-600 group-hover:text-purple-700">
              <span className="mr-2">Explore</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
