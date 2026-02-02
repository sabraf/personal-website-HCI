import React from 'react';
import { Users, MessageSquare } from 'lucide-react';
import phantomImage from 'figma:asset/6aa808a48117171eb5ebe45d93230f39e93d632a.png';
import afterImage from 'figma:asset/1cceca7eddddae9e46f83a0336a1cc0bdb34c0d3.png';
import newAfterImage from 'figma:asset/16a1c63df79c02fd269a3ef44645cb472a9cf695.png';

interface Assignment5DetailProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching') => void;
  assignmentId?: number | null;
}

export function Assignment5Detail({ setCurrentPage }: Assignment5DetailProps) {
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
        {/* SECTION 1: Header & Persona Section - Bento Grid */}
        <div className="mb-20">
          {/* Title Row */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl text-black font-serif leading-tight mb-4">
              Assignment #05
            </h1>
            <h2 className="text-2xl md:text-3xl text-black font-light leading-relaxed">
              User-Centered Refinement & Technical Pivot
            </h2>
          </div>

          {/* Bento Grid: Audience + User Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Target Audience - Spans 2 columns */}
            <div className="md:col-span-2 border-[1.5px] border-black p-6">
              <h3 className="text-xs font-bold mb-3 uppercase tracking-wider">Target Audience</h3>
              <p className="text-sm font-light leading-relaxed">
                Instructors, design teams, and recruiters
              </p>
            </div>

            {/* User Cards - 4 small cards in a 2x2 grid */}
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              <div className="border-[1.5px] border-black p-4">
                <p className="text-xs font-light">User A</p>
                <p className="text-sm font-bold mt-1">Hiring Manager</p>
              </div>
              <div className="border-[1.5px] border-black p-4">
                <p className="text-xs font-light">User B</p>
                <p className="text-sm font-bold mt-1">CS Student</p>
              </div>
              <div className="border-[1.5px] border-black p-4">
                <p className="text-xs font-light">User C</p>
                <p className="text-sm font-bold mt-1">Client</p>
              </div>
              <div className="border-[1.5px] border-black p-4">
                <p className="text-xs font-light">User D</p>
                <p className="text-sm font-bold mt-1">Recruiter</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Interactive Feedback Log - Central Table */}
        <div className="mb-20">
          <h3 className="text-lg text-black font-bold mb-6 uppercase tracking-wider">
            Interactive Feedback Log
          </h3>
          
          <div className="border-[1.5px] border-black overflow-hidden">
            {/* Table Header - Dark Navy */}
            <div className="bg-[#0B1222] text-white grid grid-cols-5 gap-px border-b border-black">
              <div className="p-4 text-xs font-bold uppercase tracking-wider">User</div>
              <div className="p-4 text-xs font-bold uppercase tracking-wider">Role</div>
              <div className="p-4 text-xs font-bold uppercase tracking-wider">Key Finding</div>
              <div className="p-4 text-xs font-bold uppercase tracking-wider">HCI Theme</div>
              <div className="p-4 text-xs font-bold uppercase tracking-wider">Action Taken</div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-5 gap-px border-b border-black bg-white">
              <div className="p-4 text-sm font-light">User A</div>
              <div className="p-4 text-sm font-light">Hiring Manager</div>
              <div className="p-4 text-sm font-light">"CTA not visible above the fold on mobile."</div>
              <div className="p-4 text-sm font-light">Visibility / Hierarchy</div>
              <div className="p-4 text-sm font-light">Moved CTA above the fold in the current Figma design.</div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-5 gap-px border-b border-black bg-gray-50">
              <div className="p-4 text-sm font-light">User B</div>
              <div className="p-4 text-sm font-light">CS Student</div>
              <div className="p-4 text-sm font-light">"Navigation labels in the template were unclear."</div>
              <div className="p-4 text-sm font-light">IA / Labeling</div>
              <div className="p-4 text-sm font-light">Renamed nav items to 'About', 'Assignments', 'Project', 'Contact' for clarity.</div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-5 gap-px border-b border-black bg-white">
              <div className="p-4 text-sm font-light">User C</div>
              <div className="p-4 text-sm font-light">Client</div>
              <div className="p-4 text-sm font-light">"The contact button looks inactive in the template."</div>
              <div className="p-4 text-sm font-light">Affordance / Feedback</div>
              <div className="p-4 text-sm font-light">Added hover/press states and Electric Blue accents for CTAs.</div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-5 gap-px bg-gray-50">
              <div className="p-4 text-sm font-light">User D</div>
              <div className="p-4 text-sm font-light">Recruiter</div>
              <div className="p-4 text-sm font-light">"The hero copy was too dense to scan quickly."</div>
              <div className="p-4 text-sm font-light">Cognitive Load</div>
              <div className="p-4 text-sm font-light">Shortened copy and added a minimalist tagline: 'Between logic & imagination'.</div>
            </div>
          </div>
        </div>

        {/* SECTION 3: The 'Great Pivot' - Visual Side-by-Side */}
        <div className="mb-20">
          <h3 className="text-lg text-black font-bold mb-6 uppercase tracking-wider">
            The 'Great Pivot'
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Frame - Phantom */}
            <div className="border-[1.5px] border-black p-6">
              <div className="mb-4">
                <h4 className="text-sm font-bold uppercase tracking-wider">Before</h4>
                <p className="text-xs font-light mt-1">Phantom HTML (Standardized Template)</p>
              </div>
              <div className="border border-black overflow-hidden bg-gray-100">
                <img src={phantomImage} alt="Phantom HTML Template" className="w-full h-auto" />
              </div>
            </div>

            {/* After Frame - Figma */}
            <div className="border-[1.5px] border-black p-6">
              <div className="mb-4">
                <h4 className="text-sm font-bold uppercase tracking-wider">After</h4>
                <p className="text-xs font-light mt-1">Figma Iteration (Intentional Branding)</p>
              </div>
              <div className="border border-black overflow-hidden bg-gray-100">
                <img src={newAfterImage} alt="Current Figma Design" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: Comparison of HCI Principles - 3 Callout Boxes */}
        <div className="mb-20">
          <h3 className="text-lg text-black font-bold mb-6 uppercase tracking-wider">
            Comparison of HCI Principles
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Callout 1: Consistency */}
            <div className="border-[1.5px] border-black p-6 bg-gray-50">
              <h4 className="text-sm font-bold mb-3 uppercase tracking-wider">Consistency</h4>
              <p className="text-sm font-light leading-relaxed">
                Transitioned from template defaults to a strict Black/White palette.
              </p>
            </div>

            {/* Callout 2: Transparency */}
            <div className="border-[1.5px] border-black p-6 bg-gray-50">
              <h4 className="text-sm font-bold mb-3 uppercase tracking-wider">Transparency</h4>
              <p className="text-sm font-light leading-relaxed">
                Provided a clear roadmap for the group project documentation.
              </p>
            </div>

            {/* Callout 3: Clarity */}
            <div className="border-[1.5px] border-black p-6 bg-gray-50">
              <h4 className="text-sm font-bold mb-3 uppercase tracking-wider">Clarity</h4>
              <p className="text-sm font-light leading-relaxed">
                Replaced generic tile grids with assignments number and change colour on hover for user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Date Section */}
        <div className="border-t border-black pt-8 mt-16">
          <div className="flex justify-between items-center">
            <span className="text-sm text-black uppercase tracking-widest font-light">Date</span>
            <span className="text-sm text-black font-light">22 November 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}