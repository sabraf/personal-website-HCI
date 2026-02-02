import React from 'react';
import illustrationImage from 'figma:asset/0aaffaa91945c1e7a18a02f0e7cda4802c31786a.png';
import { Assignment2Detail } from './Assignment2Detail';
import { Assignment3Detail } from './Assignment3Detail';
import { Assignment4Detail } from './Assignment4Detail';
import { Assignment5Detail } from './Assignment5Detail';

interface AssignmentDetailProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching') => void;
  assignmentId: number | null;
}

export function AssignmentDetail({ setCurrentPage, assignmentId }: AssignmentDetailProps) {
  // Route to Assignment #2
  if (assignmentId === 2) {
    return <Assignment2Detail setCurrentPage={setCurrentPage} />;
  }

  // Route to Assignment #3
  if (assignmentId === 3) {
    return <Assignment3Detail setCurrentPage={setCurrentPage} />;
  }

  // Route to Assignment #4
  if (assignmentId === 4) {
    return <Assignment4Detail setCurrentPage={setCurrentPage} />;
  }

  // Route to Assignment #5
  if (assignmentId === 5) {
    return <Assignment5Detail setCurrentPage={setCurrentPage} />;
  }

  // For now, we only have Assignment #1, #2, #3, #4, and #5 content
  if (assignmentId !== 1) {
    return (
      <div className="min-h-screen px-8 py-20 bg-white">
        <button
          onClick={() => setCurrentPage('assignments')}
          className="text-sm text-black hover:text-gray-600 mb-16 tracking-wide font-light transition-colors"
        >
          ← Back to Assignments
        </button>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-600 font-light">Content coming soon...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-8 py-20 bg-white">
      {/* Back link */}
      <button
        onClick={() => setCurrentPage('assignments')}
        className="text-sm text-black hover:text-gray-600 mb-16 tracking-wide font-light transition-colors"
      >
        ← Back to Assignments
      </button>

      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          {/* Left Column - Title and Illustration */}
          <div>
            <h1 className="text-5xl md:text-6xl text-black mb-0 font-serif leading-tight">
              Assignment #1
            </h1>
            <h2 className="text-3xl md:text-4xl text-black mt-4 mb-8 font-serif leading-tight">
              Interaction Problem
            </h2>
            
            {/* Illustration */}
            <div className="w-full max-w-xs">
              <img 
                src={illustrationImage} 
                alt="Line drawing illustration of a person experiencing cognitive overwhelm with a laptop" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="space-y-6">
            <p className="text-base text-black leading-loose font-light">
              In today's digital landscape, users are overwhelmed by an ever-growing number of subscription services—from streaming platforms to productivity tools. Each service demands recurring payments, attention, and cognitive load to manage, creating what's commonly referred to as "subscription fatigue."
            </p>
            
            <p className="text-base text-black leading-loose font-light">
              This phenomenon leads to financial stress, decision paralysis, and a sense of lost control over one's digital consumption. Users struggle to track which services they're paying for, what value they derive from each, and when they should cancel or switch providers.
            </p>
          </div>
        </div>

        {/* Problem Statement Section */}
        <div className="border-t border-black pt-16 mb-16">
          <h3 className="text-2xl text-black font-bold mb-6">
            The Core Problem
          </h3>
          <p className="text-lg text-black leading-relaxed font-light">
            "My interaction problem is Subscription Fatigue: the cognitive overwhelm and financial leak caused by managing multiple digital services without a centralized way to track their actual utility or renewal dates."
          </p>
        </div>

        {/* Detailed Context Section */}
        <div className="border-t border-black pt-16 mb-16">
          <h3 className="text-2xl text-black font-bold mb-6">
            Detailed Context
          </h3>
          <p className="text-lg text-black leading-relaxed font-light">
            "For this assignment, I identified a recurring friction in my digital life: the lack of visibility regarding recurring payments. Currently, subscriptions are 'set and forget,' leading to a 'black box' experience where I pay for services I no longer use. The interaction problem lies in the hidden system status—I am disconnected from my own financial commitments because the information is scattered across emails, banking apps, and individual service settings."
          </p>
        </div>

        {/* Date Section */}
        <div className="border-t border-black pt-8">
          <div className="flex justify-between items-center">
            <span className="text-sm text-black uppercase tracking-widest font-light">Date</span>
            <span className="text-sm text-black font-light">8 October 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}