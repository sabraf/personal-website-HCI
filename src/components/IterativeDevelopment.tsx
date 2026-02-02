import React from 'react';
import { Navigation } from './Navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import clarityPrototype from 'figma:asset/473f097e1fb2b6a6b7a5afdf5be15eaa7317bca0.png';
import clarityV2 from 'figma:asset/5969a7ddd641dc6bd6af96b6b3381cc33b3d042f.png';
import clarityV3 from 'figma:asset/a43bfbcec9177fd44f0f090933f9a95d61978f9f.png';

interface IterativeDevelopmentProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching' | 'iterative-development' | 'final-prototype') => void;
}

export function IterativeDevelopment({ setCurrentPage }: IterativeDevelopmentProps) {
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
                  Phase 03: Iterative Development
                </h1>
                <p className="text-lg text-black font-light">
                  Clarity in the Cloud
                </p>
              </div>

              {/* Right: Metadata Block */}
              <div className="text-right font-mono text-xs text-black leading-relaxed">
                <div>PROJECT: CLARITY_CLOUD</div>
                <div>PHASE: 03_ITERATIONS</div>
                <div>TESTING: IN_CLASS_PEER_REVIEW</div>
                <div>STATUS: FINAL_REFINEMENT</div>
              </div>
            </div>

            {/* Description Block */}
            <div className="p-12 pt-8">
              <h2 className="text-sm uppercase tracking-widest text-black font-bold mb-6">
                THE ITERATIVE PIVOT
              </h2>
              <p className="text-base text-black font-light leading-relaxed max-w-4xl">
                Our development followed a rigorous three-stage refinement process. We moved from a 
                static concept to a user-validated interface, finally arriving at a high-fidelity 
                prototype that addresses the Trust Crisis through professional-grade Ethical UI components.
              </p>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t-[1.5px] border-black"></div>

            {/* The Evolution Grid - V1, V2, V3 */}
            <div className="p-12">
              <h2 className="text-sm uppercase tracking-widest text-black font-bold mb-8">
                THREE-STAGE EVOLUTION
              </h2>

              {/* Evolution Grid with Arrows */}
              <div className="flex items-start gap-4">
                {/* V1: Initial Concept */}
                <div className="flex-1">
                  <div className="border-[1.5px] border-black">
                    {/* Image Placeholder */}
                    <div className="bg-gray-50 aspect-[3/4] border-b-[1.5px] border-black flex items-center justify-center p-8">
                      <img
                        src={clarityPrototype}
                        alt="V1: Initial Concept wireframe"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* V1 Details */}
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-widest text-black font-bold mb-3">
                        V1: INITIAL CONCEPT (STATIC)
                      </p>
                      <p className="text-sm text-black font-light leading-relaxed">
                        Original static wireframes focusing on basic information architecture. 
                        Identified a "High Gulf of Evaluation" where users felt disconnected from 
                        the data.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center pt-48">
                  <ArrowRight className="w-8 h-8 text-black" strokeWidth={1.5} />
                </div>

                {/* V2: Peer-Validated */}
                <div className="flex-1">
                  <div className="border-[1.5px] border-black">
                    {/* Image Placeholder */}
                    <div className="bg-gray-50 aspect-[3/4] border-b-[1.5px] border-black flex items-center justify-center p-8">
                      <ImageWithFallback
                        src={clarityV2}
                        alt="V2: Peer-Validated prototype"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* V2 Details */}
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-widest text-black font-bold mb-3">
                        V2: PEER-VALIDATED (IN-CLASS FEEDBACK)
                      </p>
                      <p className="text-sm text-black font-light leading-relaxed">
                        Revised after in-class testing. Added the 6-step Ethical Exit-Flow and 
                        proactive price-hike alerts to combat the identified "Exit Friction" 
                        (4.33/5 difficulty).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center pt-48">
                  <ArrowRight className="w-8 h-8 text-black" strokeWidth={1.5} />
                </div>

                {/* V3: Final Prototype */}
                <div className="flex-1">
                  <div className="border-[1.5px] border-black">
                    {/* Image Placeholder */}
                    <div className="bg-gray-50 aspect-[3/4] border-b-[1.5px] border-black flex items-center justify-center p-8">
                      <ImageWithFallback
                        src={clarityV3}
                        alt="V3: Final Prototype"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* V3 Details */}
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-widest text-black font-bold mb-3">
                        V3: FINAL PROTOTYPE (PROFESSIONAL GRADE)
                      </p>
                      <p className="text-sm text-black font-light leading-relaxed">
                        The final outcome. Polished by professional user standards with high-contrast 
                        visibility, full cost transparency (€124.50/mo), and immediate positive 
                        feedback loops.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t-[1.5px] border-black"></div>

            {/* HCI Evaluation Table */}
            <div className="p-12">
              <h2 className="text-sm uppercase tracking-widest text-black font-bold mb-6">
                REFINEMENT METRICS
              </h2>

              {/* Metrics Table */}
              <div className="border-[1.5px] border-black">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-[1.5px] border-black">
                      <th className="text-left p-4 text-xs uppercase tracking-widest font-bold text-black bg-gray-50">
                        Metric
                      </th>
                      <th className="text-left p-4 text-xs uppercase tracking-widest font-bold text-black bg-gray-50">
                        Value
                      </th>
                      <th className="text-left p-4 text-xs uppercase tracking-widest font-bold text-black bg-gray-50">
                        Interpretation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-[1.5px] border-black">
                      <td className="p-4 text-sm text-black font-light">
                        Insight Yield
                      </td>
                      <td className="p-4 text-sm text-black font-mono font-bold">
                        1.6
                      </td>
                      <td className="p-4 text-sm text-black font-light">
                        High learning depth from V2 testing
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-sm text-black font-light">
                        Design Sensitivity
                      </td>
                      <td className="p-4 text-sm text-black font-mono font-bold">
                        0.8
                      </td>
                      <td className="p-4 text-sm text-black font-light">
                        Efficient resource use during the V3 pivot
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Reflection Note */}
              <div className="mt-8 border-[1.5px] border-black p-6 bg-gray-50">
                <p className="text-sm text-black font-light leading-relaxed italic">
                  Through systematic iteration and peer validation, we transformed abstract ethical 
                  principles into concrete interface decisions that measurably reduce user friction 
                  and restore trust in subscription management systems.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <button
              onClick={() => setCurrentPage('ideation-sketching')}
              className="text-sm uppercase tracking-widest text-black hover:bg-black hover:text-white px-8 py-4 border-[1.5px] border-black transition-all font-bold"
            >
              ← Ideation & Sketching
            </button>
            <button
              onClick={() => setCurrentPage('final-prototype')}
              className="text-sm uppercase tracking-widest text-black hover:bg-black hover:text-white px-8 py-4 border-[1.5px] border-black transition-all font-bold"
            >
              Final Prototype →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}