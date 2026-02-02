import React from 'react';
import { Code, Settings } from 'lucide-react';
import htmlImplementationImage from 'figma:asset/3357e32deef57c8b5b6a66d8222e89b9526b7160.png';

interface Assignment4DetailProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching') => void;
}

export function Assignment4Detail({ setCurrentPage }: Assignment4DetailProps) {
  return (
    <div className="min-h-screen px-8 py-20 bg-white">
      {/* Back link */}
      <button
        onClick={() => setCurrentPage('assignments')}
        className="text-sm text-black hover:text-gray-600 mb-16 tracking-wide font-light transition-colors"
      >
        ← Back to Assignments
      </button>

      <div className="max-w-7xl mx-auto">
        {/* Header & Context */}
        <div className="mb-20">
          <div className="flex items-start gap-6 mb-6">
            <h1 className="text-5xl md:text-6xl text-black font-serif leading-tight">
              Assignment #04
            </h1>
            {/* Hand-drawn style icons */}
            <div className="flex gap-3 pt-4">
              <Settings size={32} strokeWidth={0.75} className="text-black" />
              <Code size={32} strokeWidth={0.75} className="text-black" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl text-black font-light leading-relaxed">
            Development Phase: From Concept to Code
          </h2>
        </div>

        {/* Prototype vs. Implementation (Side-by-Side Comparison) */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Left Frame - Figma Prototype */}
          <div className="border border-black p-8 relative">
            <h3 className="text-lg text-black font-bold mb-6 uppercase tracking-wider">
              Figma Prototype (Concept)
            </h3>
            
            {/* Mockup of Assignment 03 Navy/Blue design */}
            <div className="bg-[#0B1222] border border-black p-6 min-h-[400px] relative">
              <div className="text-white space-y-4">
                <div className="border border-white p-4">
                  <h4 className="text-sm font-bold mb-2">Assignment #3</h4>
                  <p className="text-xs font-light">Prototype Phase</p>
                </div>
                
                <div className="border border-white p-6 text-center">
                  <h4 className="text-2xl font-bold mb-3 font-serif">Clarity First.<br />Creative Always.</h4>
                  <button className="bg-[#0055FF] text-white px-6 py-2 text-xs uppercase tracking-wider font-bold mt-4">
                    View Prototype
                  </button>
                </div>

                <div className="border border-white p-4">
                  <p className="text-xs font-mono">// Lab Notes Mode</p>
                </div>
              </div>

              {/* Callout 1 - Grid Structure */}
              <div className="absolute -right-4 top-12 bg-white border border-black px-3 py-2 text-xs font-light shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 border border-black rounded-full bg-black"></div>
                  Grid Structure
                </div>
              </div>
            </div>
          </div>

          {/* Right Frame - HTML Implementation */}
          <div className="border border-black p-8 relative">
            <h3 className="text-lg text-black font-bold mb-6 uppercase tracking-wider">
              HTML/CSS Implementation (Phantom Template)
            </h3>
            
            {/* Mockup of HTML version */}
            <div className="bg-gray-50 border border-black p-6 min-h-[400px] relative">
              {/* Actual HTML Implementation Screenshot */}
              <img 
                src={htmlImplementationImage} 
                alt="HTML/CSS Implementation showing portfolio with colored cards and burger menu" 
                className="w-full h-[400px] object-cover"
              />

              {/* Callout 2 - Navigation Logic (pointing to burger menu) */}
              <div className="absolute -right-4 top-8 bg-white border border-black px-3 py-2 text-xs font-light shadow-lg z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 border border-black rounded-full bg-black"></div>
                  Navigation Logic
                </div>
              </div>

              {/* Callout 3 - Hover Effects (pointing to colored cards) */}
              <div className="absolute -right-4 top-40 bg-white border border-black px-3 py-2 text-xs font-light shadow-lg z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 border border-black rounded-full bg-black"></div>
                  Hover Effects
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stack & Tools (Icon Row) */}
        <div className="mb-20">
          <h3 className="text-lg text-black font-bold mb-6 uppercase tracking-wider">
            Technical Stack & Tools
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="border border-black p-6 text-center">
              <Code size={40} strokeWidth={0.75} className="text-black mx-auto mb-4" />
              <h4 className="text-sm font-bold mb-2">VS Code</h4>
              <p className="text-xs font-light text-gray-600">HTML/CSS</p>
            </div>
            <div className="border border-black p-6 text-center">
              <Settings size={40} strokeWidth={0.75} className="text-black mx-auto mb-4" />
              <h4 className="text-sm font-bold mb-2">Figma</h4>
              <p className="text-xs font-light text-gray-600">Mockups</p>
            </div>
            <div className="border border-black p-6 text-center">
              <Code size={40} strokeWidth={0.75} className="text-black mx-auto mb-4" />
              <h4 className="text-sm font-bold mb-2">Browser DevTools</h4>
              <p className="text-xs font-light text-gray-600">Testing</p>
            </div>
          </div>
        </div>

        {/* HCI Implementation Log (3-Column Grid) */}
        <div className="mb-20">
          <h3 className="text-lg text-black font-bold mb-6 uppercase tracking-wider">
            HCI Implementation Log
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Column 1 - Articulation */}
            <div className="border border-black p-6">
              <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Articulation</h4>
              <p className="text-sm font-light leading-relaxed">
                Aligning the Phantom grid to match the 2-column prototype structure.
              </p>
            </div>

            {/* Column 2 - Usability */}
            <div className="border border-black p-6">
              <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Usability</h4>
              <p className="text-sm font-light leading-relaxed">
                Implementing media queries for a responsive mobile experience.
              </p>
            </div>

            {/* Column 3 - Symbolism */}
            <div className="border border-black p-6">
              <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Symbolism</h4>
              <p className="text-sm font-light leading-relaxed">
                Customizing CSS to maintain the identity-driven Navy color palette.
              </p>
            </div>
          </div>
        </div>

        {/* Iteration Note (The 'Why' for Assignment 05) */}
        <div className="border-4 border-black p-8 bg-gray-50">
          <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">
            Evaluation Note
          </h3>
          <p className="text-base font-light leading-relaxed">
            While the HTML implementation proved functional, user testing revealed that the template structure 
            limited the "Lab Notes" interaction. This led to the major redesign in Assignment 05.
          </p>
        </div>

        {/* Date Section */}
        <div className="border-t border-black pt-8 mt-16">
          <div className="flex justify-between items-center">
            <span className="text-sm text-black uppercase tracking-widest font-light">Date</span>
            <span className="text-sm text-black font-light">15 November 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}