import React from 'react';

interface NavigationProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching') => void;
  currentPage?: string;
}

export function Navigation({ setCurrentPage, currentPage }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-black z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo/Home */}
        <button
          onClick={() => setCurrentPage('home')}
          className="text-sm font-light tracking-widest uppercase hover:opacity-60 transition-opacity"
        >
          Saba Rafaqat
        </button>

        {/* Nav Items */}
        <div className="flex gap-8">
          <button
            onClick={() => setCurrentPage('home')}
            className={`text-sm font-light tracking-widest uppercase hover:opacity-60 transition-opacity ${
              currentPage === 'home' ? 'opacity-60' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`text-sm font-light tracking-widest uppercase hover:opacity-60 transition-opacity ${
              currentPage === 'about' ? 'opacity-60' : ''
            }`}
          >
            About
          </button>
          <button
            onClick={() => setCurrentPage('assignments')}
            className={`text-sm font-light tracking-widest uppercase hover:opacity-60 transition-opacity ${
              currentPage === 'assignments' || currentPage === 'assignment-detail' || currentPage === 'assignment5-detail' ? 'opacity-60' : ''
            }`}
          >
            Assignments
          </button>
          <button
            onClick={() => setCurrentPage('roadmap')}
            className={`text-sm font-light tracking-widest uppercase hover:opacity-60 transition-opacity ${
              currentPage === 'roadmap' || currentPage === 'projects' || currentPage === 'project-detail' ? 'opacity-60' : ''
            }`}
          >
            Project
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={`text-sm font-light tracking-widest uppercase hover:opacity-60 transition-opacity ${
              currentPage === 'contact' ? 'opacity-60' : ''
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}