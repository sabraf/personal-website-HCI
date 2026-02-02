import React from 'react';
import { Navigation } from './Navigation';

interface EmpathyMapProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching' | 'iterative-development' | 'final-prototype') => void;
}

export function EmpathyMap({ setCurrentPage }: EmpathyMapProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation setCurrentPage={setCurrentPage} currentPage="roadmap" />
      
      <div className="px-8 py-20 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => setCurrentPage('roadmap')}
            className="text-sm text-gray-500 hover:text-gray-900 mb-16 tracking-wide font-light transition-colors"
          >
            ← Back to Roadmap
          </button>

          {/* Main Card Container */}
          <div className="border-[1.5px] border-black bg-white">
            {/* Header Section with Metadata */}
            <div className="flex justify-between items-start p-12 pb-0">
              {/* Left: Title */}
              <div>
                <h1 className="text-4xl text-black font-serif font-bold mb-2">
                  User Empathy Map
                </h1>
                <p className="text-lg text-black font-light">
                  Clarity in the Cloud
                </p>
              </div>

              {/* Right: Metadata Block */}
              <div className="text-right font-mono text-xs text-black leading-relaxed">
                <div>PROJECT: CLARITY_CLOUD</div>
                <div>PHASE: PROBLEM_ANALYSIS</div>
                <div>SOURCE: QUALITATIVE_SURVEY</div>
                <div>METRIC: 4.33_EXIT_FRICTION</div>
              </div>
            </div>

            {/* Description Block */}
            <div className="p-12 pt-8">
              <h2 className="text-sm uppercase tracking-widest text-black font-bold mb-6">
                ANALYSIS SUMMARY
              </h2>
              <p className="text-base text-black font-light leading-relaxed max-w-4xl">
                This Empathy Map synthesizes qualitative feedback from 17+ respondents. 
                Our research identified a profound disconnect between user intent and 
                interface reality, specifically regarding "Exit Friction." By mapping these 
                psychological states, we determined that the primary design goal must be 
                "Financial Relief" through the elimination of Dark Patterns.
              </p>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t-[1.5px] border-black"></div>

            {/* 2x2 Empathy Grid */}
            <div className="grid grid-cols-2">
              {/* SAY - Top Left */}
              <div className="border-r-[1.5px] border-b-[1.5px] border-black p-12">
                <h3 className="text-xs uppercase tracking-widest text-black font-bold mb-8">
                  SAY
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-lg text-black font-light leading-relaxed mb-2">
                      "I don't know my total spend."
                    </p>
                    <p className="text-sm text-black font-mono">
                      (11 respondents)
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-black font-light leading-relaxed mb-2">
                      "I need one-click cancellation."
                    </p>
                    <p className="text-sm text-black font-mono">
                      (13 respondents)
                    </p>
                  </div>
                </div>
              </div>

              {/* THINK - Top Right */}
              <div className="border-b-[1.5px] border-black p-12">
                <h3 className="text-xs uppercase tracking-widest text-black font-bold mb-8">
                  THINK
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-black font-light leading-relaxed">
                    "Are they deliberately hiding the button?"
                  </p>
                  <p className="text-lg text-black font-light leading-relaxed">
                    "I need full transparency of my data."
                  </p>
                </div>
              </div>

              {/* DO - Bottom Left */}
              <div className="border-r-[1.5px] border-black p-12">
                <h3 className="text-xs uppercase tracking-widest text-black font-bold mb-8">
                  DO
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-black font-light leading-relaxed">
                    Manually checks banking apps to track costs.
                  </p>
                  <p className="text-lg text-black font-light leading-relaxed">
                    Struggles with a <span className="font-mono">4.33/5</span> cancellation difficulty.
                  </p>
                </div>
              </div>

              {/* FEEL - Bottom Right */}
              <div className="p-12">
                <h3 className="text-xs uppercase tracking-widest text-black font-bold mb-8">
                  FEEL
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-black font-light leading-relaxed">
                    Anxious about wasted funds.
                  </p>
                  <p className="text-lg text-black font-light leading-relaxed">
                    Overwhelmed by disorganized notifications.
                  </p>
                  <p className="text-lg text-black font-light leading-relaxed">
                    Distrustful of service providers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <button
              onClick={() => setCurrentPage('project-detail')}
              className="text-sm uppercase tracking-widest text-black hover:bg-black hover:text-white px-8 py-4 border-[1.5px] border-black transition-all font-bold"
            >
              ← Problem Analysis
            </button>
            <button
              onClick={() => setCurrentPage('roadmap')}
              className="text-sm uppercase tracking-widest text-black hover:bg-black hover:text-white px-8 py-4 border-[1.5px] border-black transition-all font-bold"
            >
              Back to Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}