import React, { useState } from 'react';

interface Assignment3DetailProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching') => void;
}

export function Assignment3Detail({ setCurrentPage }: Assignment3DetailProps) {
  const [labNotesActive, setLabNotesActive] = useState(false);

  const weekData = [
    {
      week: 'Wk 1',
      log: 'Initial user research and problem space exploration',
    },
    {
      week: 'Wk 2',
      log: 'Low-fidelity wireframes and usability testing',
    },
    {
      week: 'Wk 3',
      log: 'High-fidelity prototype and final iteration',
    },
  ];

  const designChoices = [
    {
      choice: 'Navy/White',
      rationale: 'Readability',
      principle: 'A11y Compliance',
    },
    {
      choice: 'Lab Notes',
      rationale: 'Transparency',
      principle: 'Gulf of Evaluation',
    },
  ];

  return (
    <div className="min-h-screen px-8 py-20 bg-[#0B1222]">
      {/* Back link */}
      <button
        onClick={() => setCurrentPage('assignments')}
        className="text-sm text-white hover:text-[#0055FF] mb-16 tracking-wide font-light transition-colors"
      >
        ← Back to Assignments
      </button>

      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Header & Hero - Top Left (Spans 1 column) */}
          <div className="border border-white p-8 space-y-6">
            <div>
              <h1 className="text-4xl text-white font-bold mb-4 leading-tight font-serif">
                Assignment #3
              </h1>
              <h2 className="text-2xl text-white leading-tight font-serif">
                Prototype Phase
              </h2>
            </div>

            {/* Micro-Manifesto Block */}
            <div className="border-t border-white pt-6 space-y-3">
              <div>
                <p className="text-sm text-white font-light leading-relaxed">
                  <span className="font-bold">Who I am:</span> HCI Student transforming complex ideas into usable interfaces.
                </p>
              </div>
              <div>
                <p className="text-sm text-white font-light">
                  <span className="font-bold">Values:</span> Clarity & Trust.
                </p>
              </div>
            </div>

            {/* Trust Component */}
            <div className="border border-white p-4 space-y-2">
              <h3 className="text-sm text-white font-bold uppercase tracking-wider">
                Trust & Transparency
              </h3>
              <div className="space-y-1">
                <p className="text-xs text-white font-light">
                  Response time: &lt; 24h
                </p>
                <p className="text-xs text-white font-light">
                  Last Updated: 2 Feb 2026
                </p>
              </div>
            </div>
          </div>

          {/* Lab Notes Mode - Center Large Block (Spans 2 columns) */}
          <div className="md:col-span-2 border border-white relative overflow-hidden" style={{ minHeight: '500px' }}>
            {/* Toggle Switch */}
            <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
              <span className="text-xs text-white font-light uppercase tracking-wider">
                {labNotesActive ? 'Lab Notes' : 'Polished'}
              </span>
              <button
                onClick={() => setLabNotesActive(!labNotesActive)}
                className={`w-12 h-6 border border-white relative transition-colors ${
                  labNotesActive ? 'bg-[#0055FF]' : 'bg-transparent'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white transition-transform ${
                    labNotesActive ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Polished UI Mockup - Left Half (Always visible) */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-center space-y-8 max-w-md">
                <h2 className="text-5xl text-white font-bold leading-tight font-serif">
                  Clarity First.<br />Creative Always.
                </h2>
                <p className="text-lg text-white font-light leading-relaxed">
                  A subscription management interface that brings transparency to recurring payments and puts users back in control.
                </p>
                <button className="bg-[#0055FF] text-white px-8 py-3 text-sm uppercase tracking-wider font-bold hover:bg-white hover:text-[#0B1222] transition-colors border border-white">
                  View Prototype
                </button>
              </div>
            </div>

            {/* Lab Notes View - Slides Over */}
            <div
              className={`absolute inset-0 bg-[#0B1222] border-l border-white transition-transform duration-500 ${
                labNotesActive ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="p-12 h-full overflow-y-auto">
                <h3 className="text-2xl text-white font-bold mb-8 font-mono">
                  // Lab Notes
                </h3>
                <div className="space-y-6 text-white font-mono text-sm">
                  <div className="border-l-2 border-[#0055FF] pl-4">
                    <p className="text-xs text-gray-400 mb-2">Week 1 - Initial Thoughts</p>
                    <p className="leading-relaxed">
                      Users don't know what they're paying for...<br />
                      → Hidden system status = Norman's visibility principle<br />
                      → Need dashboard view (at a glance)
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-[#0055FF] pl-4">
                    <p className="text-xs text-gray-400 mb-2">Week 2 - Wireframe Insights</p>
                    <p className="leading-relaxed">
                      Testing showed: color coding = instant recognition<br />
                      Red = unused service<br />
                      Green = high value<br />
                      → Visual feedback loop
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-[#0055FF] pl-4">
                    <p className="text-xs text-gray-400 mb-2">Week 3 - Iteration</p>
                    <p className="leading-relaxed">
                      Added "usage vs cost" comparison chart<br />
                      → Gulf of evaluation bridged<br />
                      Users can now *see* if subscription is worth it
                    </p>
                  </div>

                  <div className="border-l-2 border-white pl-4 mt-8">
                    <p className="text-xs text-gray-400 mb-2">Design Rationale</p>
                    <p className="leading-relaxed">
                      Why show messy notes?<br />
                      → Transparency in process<br />
                      → HCI = iterative thinking<br />
                      → Raw → Refined
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation & Scannability - Bottom Grid (Spans 3 columns) */}
          <div className="md:col-span-3 border border-white p-8">
            <h3 className="text-lg text-white font-bold mb-6 uppercase tracking-wider">
              Weekly Progress
            </h3>
            <div className="space-y-6">
              {weekData.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  {/* Square Week Tag */}
                  <div className="w-20 h-20 border-2 border-white flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.week}</span>
                  </div>
                  
                  {/* Log Entry */}
                  <div className="flex-1 flex items-center justify-between">
                    <p className="text-white font-light leading-relaxed">
                      {item.log}
                    </p>
                    <button className="ml-6 text-[#0055FF] text-sm uppercase tracking-wider font-bold hover:text-white transition-colors border border-[#0055FF] hover:border-white px-4 py-2">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UI Mapping Table - Footer (Spans 3 columns) */}
          <div className="md:col-span-3 border border-white p-8">
            <h3 className="text-lg text-white font-bold mb-6 uppercase tracking-wider">
              Design Rationale
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-white">
                    <th className="text-left py-3 px-4 font-bold text-sm uppercase tracking-wider">
                      Design Choice
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-sm uppercase tracking-wider">
                      Rationale
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-sm uppercase tracking-wider">
                      HCI Principle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {designChoices.map((row, index) => (
                    <tr key={index} className="border-b border-white">
                      <td className="py-4 px-4 font-light">{row.choice}</td>
                      <td className="py-4 px-4 font-light">{row.rationale}</td>
                      <td className="py-4 px-4 font-light">{row.principle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}