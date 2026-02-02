import React from 'react';
import { Navigation } from './Navigation';

interface AboutProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching') => void;
}

export function About({ setCurrentPage }: AboutProps) {
  return (
    <div className="min-h-screen">
      <Navigation setCurrentPage={setCurrentPage} currentPage="about" />
      
      <div className="px-8 py-20 pt-32">

      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-gray-900 mb-20 font-light tracking-tight">
          About
        </h1>

        {/* Introduction */}
        <div className="mb-24 space-y-8">
          <p className="text-lg text-gray-600 leading-loose font-light">
            I am a student at the Free University of Bozen-Bolzano, currently pursuing a degree in Business Informatics. My academic journey is driven by the intersection of Human-Computer Interaction and design. Through this site, I aim to share a comprehensive look at my assignments and group collaborations, documenting my process as I learn to build technology that is both functional and user-centered.
          </p>
        </div>

        {/* Skills - Minimalist list */}
        <div className="mb-24">
          <h2 className="text-sm text-gray-900 uppercase tracking-widest mb-12 font-light text-center">
            Skills & Methods
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Column 1: HCI */}
            <div className="border-[1.5px] border-black bg-white p-8 relative" style={{ borderRadius: '0px' }}>
              {/* Hand-drawn star icon */}
              <svg className="absolute top-4 left-4 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                <path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" />
              </svg>
              
              <h3 className="text-lg text-black font-light tracking-wide mb-6 mt-8">
                Human-Centered Design
              </h3>
              
              <ul className="space-y-3">
                <li className="text-black font-light text-sm">User Research</li>
                <li className="text-black font-light text-sm">Interaction Design</li>
                <li className="text-black font-light text-sm">Prototyping</li>
                <li className="text-black font-light text-sm">Usability Testing</li>
                <li className="text-black font-light text-sm">Information Architecture</li>
              </ul>
            </div>

            {/* Column 2: Business */}
            <div className="border-[1.5px] border-black bg-white p-8 relative" style={{ borderRadius: '0px' }}>
              {/* Hand-drawn moon icon */}
              <svg className="absolute top-4 left-4 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              
              <h3 className="text-lg text-black font-light tracking-wide mb-6 mt-8">
                Business Strategy
              </h3>
              
              <ul className="space-y-3">
                <li className="text-black font-light text-sm">Business Analytics</li>
                <li className="text-black font-light text-sm">Strategic Analysis</li>
                <li className="text-black font-light text-sm">Product Thinking</li>
                <li className="text-black font-light text-sm">Revenue Modeling</li>
                <li className="text-black font-light text-sm">Data Storytelling</li>
              </ul>
            </div>

            {/* Column 3: Technical */}
            <div className="border-[1.5px] border-black bg-white p-8 relative" style={{ borderRadius: '0px' }}>
              {/* Hand-drawn diamond icon */}
              <svg className="absolute top-4 left-4 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                <path d="M12 2 L22 12 L12 22 L2 12 Z" />
              </svg>
              
              <h3 className="text-lg text-black font-light tracking-wide mb-6 mt-8">
                Emerging Tech
              </h3>
              
              <ul className="space-y-3">
                <li className="text-black font-light text-sm">Java</li>
                <li className="text-black font-light text-sm">Python</li>
                <li className="text-black font-light text-sm">SQL</li>
                <li className="text-black font-light text-sm">Design Systems</li>
                <li className="text-black font-light text-sm">HTML/CSS Logic</li>
                <li className="text-black font-light text-sm">Accessibility (WCAG)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="border-t border-gray-300 pt-16">
          <blockquote className="text-2xl text-gray-700 italic font-light leading-relaxed">
            "Design is not just what it looks like and feels like. 
            Design is how it works."
          </blockquote>
          <p className="text-sm text-gray-500 mt-4 font-light">— Steve Jobs</p>
        </div>
      </div>
      </div>
    </div>
  );
}