import React, { useState } from 'react';

interface WebsiteSlideshowProps {
  images: string[];
  alt: string;
}

export function WebsiteSlideshow({ images, alt }: WebsiteSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = () => {
    // Cycle to next image (between 2 variants)
    setCurrentIndex(1);
  };

  const handleMouseLeave = () => {
    // Reset to first image
    setCurrentIndex(0);
  };

  return (
    <div 
      className="relative border border-black overflow-hidden bg-white cursor-pointer"
      style={{ aspectRatio: '3/2' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${alt} - view ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}