import React from 'react';
import { Navigation } from './Navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Bell, DollarSign, Shield } from 'lucide-react';

interface FinalPrototypeProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching' | 'iterative-development' | 'final-prototype') => void;
}

export function FinalPrototype({ setCurrentPage }: FinalPrototypeProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation setCurrentPage={setCurrentPage} currentPage="roadmap" />
      
      <div className="px-8 py-20 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => setCurrentPage('iterative-development')}
            className="text-sm text-gray-500 hover:text-gray-900 mb-16 tracking-wide font-light transition-colors"
          >
            ← Iterative Development
          </button>

          {/* Main Card Container */}
          <div className="border-[1.5px] border-black bg-white">
            {/* Header Section with Metadata */}
            <div className="flex justify-between items-start p-12 pb-0">
              {/* Left: Title */}
              <div>
                <h1 className="text-4xl text-black font-serif font-bold mb-2">
                  Phase 04: Final Ethical Prototype
                </h1>
                <p className="text-lg text-black font-light">
                  Clarity in the Cloud
                </p>
              </div>

              {/* Right: Metadata Block */}
              <div className="text-right font-mono text-xs text-black leading-relaxed">
                <div>PROJECT: CLARITY_CLOUD</div>
                <div>PHASE: 04_FINAL_DEPLOYMENT</div>
                <div>VERSION: V3_PROFESSIONAL</div>
                <div>GOAL: RESTORE_USER_AUTONOMY</div>
              </div>
            </div>

            {/* Description Block */}
            <div className="p-12 pt-8">
              <h2 className="text-sm uppercase tracking-widest text-black font-bold mb-6">
                THE CLARITY DASHBOARD: V3
              </h2>
              <p className="text-base text-black font-light leading-relaxed max-w-4xl">
                The final prototype represents a professional-grade solution to subscription fatigue. 
                We prioritized high-contrast visibility and radical transparency. Moving beyond simple 
                monitoring, V3 acts as a proactive agent for the user, offering immediate insights into 
                total expenditure and an effortless path to financial freedom.
              </p>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t-[1.5px] border-black"></div>

            {/* Project Timeline */}
            <div className="p-12">
              <h2 className="text-sm uppercase tracking-widest text-black font-bold mb-8">
                PROJECT TIMELINE
              </h2>

              <div className="flex gap-16">
                {/* Vertical Line with Nodes */}
                <div className="relative flex-shrink-0">
                  {/* Vertical Line */}
                  <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-black"></div>

                  {/* Timeline Nodes */}
                  <div className="relative space-y-20">
                    {/* Week 1-3 */}
                    <div className="flex items-start gap-6">
                      <div className="w-6 h-6 rounded-full border-[2px] border-black bg-white flex-shrink-0 z-10"></div>
                      <div>
                        <h3 className="text-xs uppercase tracking-widest font-bold text-black mb-2">
                          Weeks 1-3
                        </h3>
                        <p className="text-sm text-black font-light leading-relaxed max-w-2xl">
                          <span className="font-bold">RESEARCH:</span> Quantitative survey (n=17) and Empathy Mapping. 
                          Identifying 'The Trust Crisis'.
                        </p>
                      </div>
                    </div>

                    {/* Week 4-5 */}
                    <div className="flex items-start gap-6">
                      <div className="w-6 h-6 rounded-full border-[2px] border-black bg-white flex-shrink-0 z-10"></div>
                      <div>
                        <h3 className="text-xs uppercase tracking-widest font-bold text-black mb-2">
                          Weeks 4-5
                        </h3>
                        <p className="text-sm text-black font-light leading-relaxed max-w-2xl">
                          <span className="font-bold">STRATEGY:</span> Drafting the Lean Canvas and defining our Unique 
                          Value Proposition: 'Radical Transparency'.
                        </p>
                      </div>
                    </div>

                    {/* Week 6-7 */}
                    <div className="flex items-start gap-6">
                      <div className="w-6 h-6 rounded-full border-[2px] border-black bg-white flex-shrink-0 z-10"></div>
                      <div>
                        <h3 className="text-xs uppercase tracking-widest font-bold text-black mb-2">
                          Weeks 6-7
                        </h3>
                        <p className="text-sm text-black font-light leading-relaxed max-w-2xl">
                          <span className="font-bold">IDEATION:</span> Sketching the 6-step Ethical Exit-Flow and 
                          testing 3 structural variations.
                        </p>
                      </div>
                    </div>

                    {/* Week 8-10 */}
                    <div className="flex items-start gap-6">
                      <div className="w-6 h-6 rounded-full border-[2px] border-black bg-white flex-shrink-0 z-10"></div>
                      <div>
                        <h3 className="text-xs uppercase tracking-widest font-bold text-black mb-2">
                          Weeks 8-10
                        </h3>
                        <p className="text-sm text-black font-light leading-relaxed max-w-2xl">
                          <span className="font-bold">ITERATION:</span> Moving from V1 (Static) to V2 (Peer-validated). 
                          Applying Insight Yield metrics (Target: 1.6).
                        </p>
                      </div>
                    </div>

                    {/* Week 11-12 - Final Stage (Filled) */}
                    <div className="flex items-start gap-6">
                      <div className="w-6 h-6 rounded-full border-[2px] border-black bg-black flex-shrink-0 z-10"></div>
                      <div>
                        <h3 className="text-xs uppercase tracking-widest font-bold text-black mb-2">
                          Weeks 11-12
                        </h3>
                        <p className="text-sm text-black font-light leading-relaxed max-w-2xl">
                          <span className="font-bold">DEPLOYMENT:</span> Finalizing V3 (Professional Prototype) and 
                          closing the Gulf of Evaluation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t-[1.5px] border-black"></div>

            {/* Feature Highlights - The 'Clarity Pillars' */}
            <div className="p-12">
              <h2 className="text-sm uppercase tracking-widest text-black font-bold mb-8">
                THE CLARITY PILLARS
              </h2>

              <div className="grid grid-cols-3 gap-6">
                {/* Pillar 1: Proactive Alerts */}
                <div className="border-[1.5px] border-black p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Bell className="w-6 h-6 text-black" strokeWidth={1.5} />
                    <h3 className="text-xs uppercase tracking-widest font-bold text-black">
                      Proactive Alerts
                    </h3>
                  </div>
                  <p className="text-sm text-black font-light leading-relaxed">
                    Notifications for price hikes and 7-day renewal warnings to eliminate 
                    'The Silent Drain'.
                  </p>
                </div>

                {/* Pillar 2: Financial Transparency */}
                <div className="border-[1.5px] border-black p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="w-6 h-6 text-black" strokeWidth={1.5} />
                    <h3 className="text-xs uppercase tracking-widest font-bold text-black">
                      Financial Transparency
                    </h3>
                  </div>
                  <p className="text-sm text-black font-light leading-relaxed">
                    Real-time calculation of total monthly spend (€124.50) displayed prominently.
                  </p>
                </div>

                {/* Pillar 3: Ethical Exit */}
                <div className="border-[1.5px] border-black p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-black" strokeWidth={1.5} />
                    <h3 className="text-xs uppercase tracking-widest font-bold text-black">
                      Ethical Exit
                    </h3>
                  </div>
                  <p className="text-sm text-black font-light leading-relaxed">
                    The 6-step cancellation sequence that provides immediate positive feedback 
                    ('You Saved €15.99').
                  </p>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t-[1.5px] border-black"></div>

            {/* Main Visual Space */}
            <div className="p-12">
              <h2 className="text-sm uppercase tracking-widest text-black font-bold mb-6">
                V3 DASHBOARD
              </h2>

              {/* Video Frame - Borderless */}
              <div className="bg-white aspect-[16/9] overflow-hidden">
                <iframe
                  src="https://go.screenpal.com/watch/cOnnYxn3kWB"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: 'none' }}
                  title="Clarity in the Cloud - V3 Final Prototype"
                ></iframe>
              </div>

              <p className="text-xs text-black font-light mt-4 italic">
                The final dashboard interface combining proactive alerts, financial transparency, 
                and ethical exit pathways into a cohesive user experience.
              </p>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t-[1.5px] border-black"></div>

            {/* Impact Statement */}
            <div className="p-12">
              <h2 className="text-sm uppercase tracking-widest text-black font-bold mb-6">
                HCI VALIDATION
              </h2>

              <div className="border-[1.5px] border-black p-8 bg-gray-50">
                <p className="text-base text-black font-light leading-relaxed">
                  By closing the Gulf of Evaluation and removing the 4.33/5 exit friction, this 
                  prototype restores trust and autonomy. It is not just an interface; it is an 
                  ethical intervention in the digital economy.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Roadmap Button */}
          <div className="mt-12 flex justify-center">
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