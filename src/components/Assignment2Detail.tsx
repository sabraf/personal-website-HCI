import image_e10024b4e109923b591db47a35284acf5c20d721 from 'figma:asset/e10024b4e109923b591db47a35284acf5c20d721.png';
import image_1ea98d3d07538134821675d582b270aa4189d240 from 'figma:asset/1ea98d3d07538134821675d582b270aa4189d240.png';
import image_d3f1c11f5fd8ae86e60f5af04708246d749eb238 from 'figma:asset/d3f1c11f5fd8ae86e60f5af04708246d749eb238.png';
import image_bc64fac146059ef6af19ee3dea05ff2c68719dcb from 'figma:asset/bc64fac146059ef6af19ee3dea05ff2c68719dcb.png';
import image_26dc9128c82cd64c25e27e4c468952cc58c152ec from 'figma:asset/26dc9128c82cd64c25e27e4c468952cc58c152ec.png';
import image_4f959998ac1fc62d133c9047765fff6364c2ab90 from 'figma:asset/4f959998ac1fc62d133c9047765fff6364c2ab90.png';
import image_3faab7eae3892de8cd277649ea149a47b77d65ec from 'figma:asset/3faab7eae3892de8cd277649ea149a47b77d65ec.png';
import image_7f6ec4d3a34e02105347fd0203e34cff8191dcbd from 'figma:asset/7f6ec4d3a34e02105347fd0203e34cff8191dcbd.png';
import React from 'react';
import illustrationImage from 'figma:asset/961d575ed7111af1c317de4bb9ba376ff1b734e1.png';
import { WebsiteSlideshow } from './WebsiteSlideshow';

interface Assignment2DetailProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching') => void;
}

export function Assignment2Detail({ setCurrentPage }: Assignment2DetailProps) {
  // Define website data with 2 variants for slideshow (Homepage and Project Page)
  const websites = [
    {
      title: 'Antoine Wodniack',
      description: 'Clearly communicates identity as a creative developer through visual hierarchy and smooth animations.',
      images: [
        image_bc64fac146059ef6af19ee3dea05ff2c68719dcb,
        image_7f6ec4d3a34e02105347fd0203e34cff8191dcbd,
      ],
    },
    {
      title: 'Tobias van Schneider',
      description: 'Focuses on "Design Praxis" to establish a clear creative style and professional identity.',
      images: [
        image_d3f1c11f5fd8ae86e60f5af04708246d749eb238,
        image_3faab7eae3892de8cd277649ea149a47b77d65ec,
      ],
    },
    {
      title: 'Arngren.net',
      description: 'A cluttered layout with inconsistent text that overwhelms visitors and obscures purpose.',
      images: [
        image_1ea98d3d07538134821675d582b270aa4189d240,
        image_4f959998ac1fc62d133c9047765fff6364c2ab90,
      ],
    },
    {
      title: 'Suzanne Collins',
      description: 'A functional but sparse layout that fails to express creative identity beyond basic listings.',
      images: [
        image_e10024b4e109923b591db47a35284acf5c20d721,
        image_26dc9128c82cd64c25e27e4c468952cc58c152ec,
      ],
    },
  ];

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
        {/* Fixed Header Section */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-16 mb-20 pb-16 border-b border-black">
          {/* Left: Title and Description */}
          <div>
            <h1 className="text-5xl md:text-6xl text-black mb-8 font-serif leading-tight">
              Assignment #2
            </h1>
            <h2 className="text-3xl md:text-4xl text-black mb-8 font-serif leading-tight">
              Analysis of Personal Websites
            </h2>
            <p className="text-lg text-black leading-relaxed font-light">
              This project explores how digital representations convey identity through visuals, tone, and interaction patterns. I researched four personal websites to understand how design choices express who the creator is.
            </p>
          </div>

          {/* Right: Minimalist Illustration */}
          <div className="flex items-start justify-end">
            <div className="w-full max-w-xs">
              <img 
                src={illustrationImage} 
                alt="Minimalist line-art character looking through a magnifying glass" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* 2x2 Balanced Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {websites.map((website, index) => (
            <div key={index} className="flex flex-col space-y-4">
              {/* Slideshow Container */}
              <WebsiteSlideshow 
                images={website.images}
                alt={website.title}
              />
              
              {/* Title */}
              <h3 className="text-xl text-black font-bold">
                {website.title}
              </h3>
              
              {/* Description */}
              <p className="text-base text-black leading-relaxed font-light">
                {website.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Findings Section */}
        <div className="border-t border-black pt-16 mb-16">
          <h3 className="text-2xl text-black font-bold mb-6">
            Key Findings
          </h3>
          <p className="text-lg text-black leading-relaxed font-light">
            Through this analysis, I discovered that effective personal websites balance visual appeal with functional clarity. The most successful sites use consistent typography, intentional whitespace, and clear navigation to guide visitors through content while expressing the creator's unique voice and aesthetic sensibility.
          </p>
        </div>

        {/* Design Principles Section */}
        <div className="border-t border-black pt-16 mb-16">
          <h3 className="text-2xl text-black font-bold mb-6">
            Design Principles Observed
          </h3>
          <p className="text-lg text-black leading-relaxed font-light">
            Strong personal websites demonstrate clear visual hierarchy, purposeful use of color and typography, and consistent interaction patterns. They prioritize content over decoration and ensure that every design element serves the dual purpose of conveying information and reinforcing the creator's identity. Poor examples often suffer from information overload, inconsistent branding, or insufficient content to establish credibility.
          </p>
        </div>

        {/* Date Section */}
        <div className="border-t border-black pt-8">
          <div className="flex justify-between items-center">
            <span className="text-sm text-black uppercase tracking-widest font-light">Date</span>
            <span className="text-sm text-black font-light">15 October 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}