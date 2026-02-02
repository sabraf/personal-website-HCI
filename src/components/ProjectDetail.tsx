import React from 'react';
import { Navigation } from './Navigation';
import { AlertTriangle, BarChart3, User } from 'lucide-react';

interface ProjectDetailProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching') => void;
  projectId: number | null;
}

export function ProjectDetail({ setCurrentPage, projectId }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation setCurrentPage={setCurrentPage} currentPage="projects" />
      
      <div className="px-8 py-20 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => setCurrentPage('roadmap')}
            className="text-sm text-gray-500 hover:text-gray-900 mb-16 tracking-wide font-light transition-colors"
          >
            ← Back to Roadmap
          </button>

          {/* Header */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-6xl text-black mb-6 font-serif font-bold leading-tight">
              Clarity in the Cloud
            </h1>
            <p className="text-2xl text-black font-light mb-4">
              Subscription Management
            </p>
            <p className="text-lg text-gray-600 font-light max-w-3xl">
              Team: Valentina Delpero, Chiara Luongo, Saba Rafaqat
            </p>
          </div>

          {/* Problem Analysis Section */}
          <section className="mb-32">
            <div className="mb-12">
              <h2 className="text-3xl text-black font-serif font-bold mb-4">
                01 — Problem Analysis
              </h2>
            </div>

            {/* 1. The Data (Quantitative Research) - Insights Card */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 size={32} strokeWidth={1.5} className="text-black" />
                <h3 className="text-xl text-black font-serif font-bold">
                  The Data (Quantitative Research)
                </h3>
              </div>

              <div className="border-[1.5px] border-black bg-white p-12">
                <div className="space-y-8">
                  <div>
                    <div className="text-6xl text-black font-serif font-bold mb-4">
                      42%
                    </div>
                    <p className="text-xl text-black font-light">
                      of users forget active subscriptions.
                    </p>
                  </div>

                  <div className="border-t-[1.5px] border-black pt-8">
                    <div className="text-5xl text-black font-serif font-bold mb-4">
                      4.33/5
                    </div>
                    <p className="text-xl text-black font-light mb-2">
                      Mean difficulty score for cancellation
                    </p>
                    <p className="text-lg text-black font-bold">
                      (High Friction)
                    </p>
                  </div>

                  <div className="border-t-[1.5px] border-black pt-8">
                    <p className="text-base text-black font-light italic">
                      Based on a survey of 17+ students and young professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. The Empathy Map (Qualitative Research) */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <User size={32} strokeWidth={1.5} className="text-black" />
                <h3 className="text-xl text-black font-serif font-bold">
                  The Empathy Map (Qualitative Research)
                </h3>
              </div>

              <div className="grid grid-cols-2 border-[1.5px] border-black">
                {/* SAY - Top Left */}
                <div className="border-r-[1.5px] border-b-[1.5px] border-black p-10">
                  <h4 className="text-xs uppercase tracking-widest text-black font-bold mb-6">
                    SAY
                  </h4>
                  <p className="text-lg text-black font-light leading-relaxed">
                    "I don't know how much I spend in total."
                  </p>
                </div>

                {/* THINK - Top Right */}
                <div className="border-b-[1.5px] border-black p-10">
                  <h4 className="text-xs uppercase tracking-widest text-black font-bold mb-6">
                    THINK
                  </h4>
                  <p className="text-lg text-black font-light leading-relaxed">
                    "Are they deliberately hiding the cancel button?"
                  </p>
                </div>

                {/* DO - Bottom Left */}
                <div className="border-r-[1.5px] border-black p-10">
                  <h4 className="text-xs uppercase tracking-widest text-black font-bold mb-6">
                    DO
                  </h4>
                  <p className="text-lg text-black font-light leading-relaxed">
                    Manually checks banking apps and disorganized emails.
                  </p>
                </div>

                {/* FEEL - Bottom Right */}
                <div className="p-10">
                  <h4 className="text-xs uppercase tracking-widest text-black font-bold mb-6">
                    FEEL
                  </h4>
                  <p className="text-lg text-black font-light leading-relaxed">
                    Anxious, Frustrated, and Distrustful of Dark Patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Problem Statement */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle size={32} strokeWidth={1.5} className="text-black" />
                <h3 className="text-xl text-black font-serif font-bold">
                  Problem Statement
                </h3>
              </div>

              <div className="border-[1.5px] border-black bg-white p-12 text-center">
                <h4 className="text-2xl text-black font-serif font-bold mb-6">
                  The Trust Crisis
                </h4>
                <p className="text-lg text-black font-light leading-relaxed max-w-3xl mx-auto">
                  Subscription fatigue is worsened by unethical "Exit Friction" and a lack of 
                  financial visibility. Users require a proactive, ethical intervention to 
                  restore autonomy.
                </p>
              </div>
            </div>
          </section>

          {/* Navigation to next section */}
          <div className="border-t-[1.5px] border-black pt-12">
            <button
              onClick={() => setCurrentPage('roadmap')}
              className="text-sm uppercase tracking-widest text-black hover:bg-black hover:text-white px-8 py-4 border-[1.5px] border-black transition-all font-bold"
            >
              View Full Project Roadmap →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}