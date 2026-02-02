import React from 'react';
import { Navigation } from './Navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import timelineSketch from 'figma:asset/239debc54cbf7cc1a3d0a90602d11db8ad482d0d.png';
import visualSketch from 'figma:asset/4eb4ab3c2afb7e684d5aaefb67dfcca57d565399.png';
import controlCenterSketch from 'figma:asset/0226008fb75a3db89ab173229e674409038fa679.png';
import step1Trigger from 'figma:asset/50e9f62c6de649b6be6cc02279e19e897f20c78b.png';
import step2Action from 'figma:asset/b423080a7552fe02ab3f826abd8da8f8116518f6.png';
import step3Processing from 'figma:asset/86628d8ac94306f3c2c9be44679f3b0c77dd4985.png';
import step4Confirm from 'figma:asset/cc1c2204e621bf37b270bc5770e9b266dd771a33.png';
import step5Processing from 'figma:asset/e4577c732b76cae4bde20bc7e16d0af7191144bf.png';
import step6Feedback from 'figma:asset/6c6822131252dd4e71e84a7b7d8d9c588722174f.png';

interface IdeationSketchingProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching' | 'iterative-development' | 'final-prototype') => void;
}

export function IdeationSketching({ setCurrentPage }: IdeationSketchingProps) {
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
             Back to Roadmap
          </button>

          {/* Main Card Container */}
          <div className="border-[1.5px] border-black bg-white">
            {/* Header Section with Metadata */}
            <div className="flex justify-between items-start p-12 pb-0">
              {/* Left: Title */}
              <div>
                <h1 className="text-4xl text-black font-serif font-bold mb-2">
                  Phase 02: Ideation & Sketching
                </h1>
                <p className="text-lg text-black font-light">
                  Clarity in the Cloud
                </p>
              </div>

              {/* Right: Metadata Block */}
              <div className="text-right font-mono text-xs text-black leading-relaxed">
                <div>PROJECT: CLARITY_CLOUD</div>
                <div>PHASE: 02_IDEATION</div>
                <div>METHOD: RAPID_PROTOTYPING</div>
                <div>ITERATIONS: 03_VARIATIONS</div>
              </div>
            </div>

            {/* Description Block */}
            <div className="p-12 pt-8">
              <h2 className="text-sm uppercase tracking-widest text-black font-bold mb-6">
                THE SEARCH FOR ETHICAL UI
              </h2>
              <p className="text-base text-black font-light leading-relaxed max-w-4xl">
                Following our research into "Exit Friction," we conducted rapid sketching to 
                explore how to best present subscription data. We focused on reducing the 
                "Gulf of Evaluation" by making hidden costs visible. We iterated through three 
                primary organizational models: a time-based schedule, a category-based visual 
                grid, and a centralized management hub.
              </p>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t-[1.5px] border-black"></div>

            {/* Sketch Comparison Grid - Three Variations */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Variation A: The Timeline */}
              <div className="border-r-[1.5px] border-black p-8">
                <h3 className="text-xs uppercase tracking-widest text-black font-bold mb-6">
                  Variation A: The Timeline
                </h3>
                
                {/* Image Placeholder */}
                <div className="border-[1.5px] border-black bg-gray-50 aspect-square mb-6 flex items-center justify-center">
                  <img
                    src={timelineSketch}
                    alt="Timeline variation sketch"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-sm text-black font-light leading-relaxed">
                  Focuses on chronological awareness. Solves the problem of "Forgotten Renewals" 
                  by showing what is due today vs. next week.
                </p>
              </div>

              {/* Variation B: The Visual Approach */}
              <div className="border-r-[1.5px] border-black p-8">
                <h3 className="text-xs uppercase tracking-widest text-black font-bold mb-6">
                  Variation B: The Visual Approach
                </h3>
                
                {/* Image Placeholder */}
                <div className="border-[1.5px] border-black bg-gray-50 aspect-square mb-6 flex items-center justify-center">
                  <img
                    src={visualSketch}
                    alt="Visual approach variation sketch"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-sm text-black font-light leading-relaxed">
                  Uses iconography to show cost-density. Highlighting "Savings" to provide 
                  positive reinforcement.
                </p>
              </div>

              {/* Variation C: The Control Center */}
              <div className="p-8">
                <h3 className="text-xs uppercase tracking-widest text-black font-bold mb-6">
                  Variation C: The Control Center
                </h3>
                
                {/* Image Placeholder */}
                <div className="border-[1.5px] border-black bg-gray-50 aspect-square mb-6 flex items-center justify-center">
                  <img
                    src={controlCenterSketch}
                    alt="Control center variation sketch"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-sm text-black font-light leading-relaxed">
                  A centralized dashboard for immediate action, featuring a "Price Increase" 
                  alert system.
                </p>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t-[1.5px] border-black"></div>

            {/* The Signature Interaction - The Ethical Exit */}
            <div className="p-12">
              <h2 className="text-sm uppercase tracking-widest text-black font-bold mb-6">
                DESIGNING THE ETHICAL EXIT-FLOW
              </h2>
              <p className="text-base text-black font-light leading-relaxed max-w-4xl mb-10">
                Instead of hiding the cancel button, we designed a transparent 6-step process: 
                Trigger → Action → Processing → Confirm Ethical UI → Processing  Positive Feedback. 
                This ensures the user feels in control and receives immediate confirmation of their 
                financial savings.
              </p>

              {/* 6-Step Flow Placeholders */}
              <div className="grid grid-cols-6 gap-4">
                {/* Step 1: Trigger */}
                <div className="border-[1.5px] border-black">
                  <div className="bg-gray-50 aspect-square border-b-[1.5px] border-black flex items-center justify-center">
                    <img
                      src={step1Trigger}
                      alt="Step 1: Trigger"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-black font-bold mb-2">01. TRIGGER</p>
                    <p className="text-xs text-black font-light">
                      The initial 'Cancel' decision
                    </p>
                  </div>
                </div>

                {/* Step 2: Action */}
                <div className="border-[1.5px] border-black">
                  <div className="bg-gray-50 aspect-square border-b-[1.5px] border-black flex items-center justify-center">
                    <img
                      src={step2Action}
                      alt="Step 2: Action"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-black font-bold mb-2">02. FIRST STEP</p>
                    <p className="text-xs text-black font-light">
                      User interaction with the dashboard
                    </p>
                  </div>
                </div>

                {/* Step 3: Processing */}
                <div className="border-[1.5px] border-black">
                  <div className="bg-gray-50 aspect-square border-b-[1.5px] border-black flex items-center justify-center">
                    <img
                      src={step3Processing}
                      alt="Step 3: Processing"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-black font-bold mb-2">03. ACTION</p>
                    <p className="text-xs text-black font-light">
                      First confirmation of the request
                    </p>
                  </div>
                </div>

                {/* Step 4: Confirm Ethical UI */}
                <div className="border-[1.5px] border-black">
                  <div className="bg-gray-50 aspect-square border-b-[1.5px] border-black flex items-center justify-center">
                    <img
                      src={step4Confirm}
                      alt="Step 4: Confirm Ethical UI"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-black font-bold mb-2">04. CONFIRM</p>
                    <p className="text-xs text-black font-light">
                      'We are sending the cancellation' (Transparency step)
                    </p>
                  </div>
                </div>

                {/* Step 5: Processing */}
                <div className="border-[1.5px] border-black">
                  <div className="bg-gray-50 aspect-square border-b-[1.5px] border-black flex items-center justify-center">
                    <img
                      src={step5Processing}
                      alt="Step 5: Processing"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-black font-bold mb-2">05. PROCESSING</p>
                    <p className="text-xs text-black font-light">
                      Finalizing the system update
                    </p>
                  </div>
                </div>

                {/* Step 6: Positive Feedback */}
                <div className="border-[1.5px] border-black">
                  <div className="bg-gray-50 aspect-square border-b-[1.5px] border-black flex items-center justify-center">
                    <img
                      src={step6Feedback}
                      alt="Step 6: Positive Feedback"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-black font-bold mb-2">06. FEEDBACK</p>
                    <p className="text-xs text-black font-light">
                      'You Saved €15.99/mo' (Reward step)
                    </p>
                  </div>
                </div>
              </div>

              {/* Reflection Note */}
              <div className="mt-10 border-[1.5px] border-black p-6 bg-gray-50">
                <p className="text-sm text-black font-light leading-relaxed italic">
                  By expanding the exit flow to 6 transparent steps, we successfully closed the 
                  Gulf of Evaluation, providing the user with total certainty of their financial 
                  autonomy.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <button
              onClick={() => setCurrentPage('empathy-map')}
              className="text-sm uppercase tracking-widest text-black hover:bg-black hover:text-white px-8 py-4 border-[1.5px] border-black transition-all font-bold"
            >
              ← Empathy Map
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