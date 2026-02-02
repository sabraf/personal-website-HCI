import React from 'react';
import portraitImg from 'figma:asset/e52ea26b912167d109f601eb5c98c1a71f62e13c.png';

interface HomeProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments') => void;
}

export function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-8 relative">
      {/* Abstract Illustration */}
      <div className="mb-8">
        <img 
          src={portraitImg} 
          alt="Abstract portrait illustration" 
          className="w-64 h-64 md:w-80 md:h-80 object-cover opacity-30 mix-blend-multiply grayscale"
        />
      </div>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl text-gray-900 mb-4 tracking-tight font-light text-center">
        Saba Rafaqat
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-gray-600 mb-10 text-center font-light italic tracking-wide">
        Between logic & imagination
      </p>

      {/* Four Outlined Buttons */}
      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-6 items-center max-w-4xl">
        <button
          onClick={() => setCurrentPage('about')}
          className="w-44 py-4 border border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-neutral-50 transition-all duration-500 font-light tracking-widest text-sm uppercase"
        >
          About
        </button>

        <button
          onClick={() => setCurrentPage('assignments')}
          className="w-44 py-4 border border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-neutral-50 transition-all duration-500 font-light tracking-widest text-sm uppercase"
        >
          Assignments
        </button>

        <button
          onClick={() => setCurrentPage('roadmap')}
          className="w-44 py-4 border border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-neutral-50 transition-all duration-500 font-light tracking-widest text-sm uppercase"
        >
          Project
        </button>

        <button
          onClick={() => setCurrentPage('contact')}
          className="w-44 py-4 border border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-neutral-50 transition-all duration-500 font-light tracking-widest text-sm uppercase"
        >
          Contact
        </button>
      </div>

      {/* Subtle footer */}
      <div className="absolute bottom-8 right-8 text-right">
        <p className="text-xs text-gray-400 tracking-wider font-light">
          © 2026 All rights reserved
        </p>
      </div>
    </div>
  );
}