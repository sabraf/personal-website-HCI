import React, { useState } from 'react';
import { Navigation } from './Navigation';

interface ContactProps {
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching') => void;
}

export function Contact({ setCurrentPage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation setCurrentPage={setCurrentPage} currentPage="contact" />
      
      <div className="px-8 py-20 pt-32">

      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-gray-900 mb-8 font-light tracking-tight">
          Get in Touch
        </h1>
        
        <p className="text-lg text-gray-600 mb-20 font-light leading-relaxed">
          I'm always open to discussing new projects, creative ideas, 
          or opportunities to be part of your vision.
        </p>

        {submitted ? (
          <div className="border border-gray-300 p-16 text-center bg-gray-50">
            <p className="text-2xl text-gray-900 font-light mb-4">Thank you</p>
            <p className="text-gray-600 font-light">I'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-500 uppercase tracking-widest mb-4 font-light"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 bg-transparent text-gray-900 py-3 focus:outline-none focus:border-gray-900 transition-colors font-light"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-500 uppercase tracking-widest mb-4 font-light"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 bg-transparent text-gray-900 py-3 focus:outline-none focus:border-gray-900 transition-colors font-light"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-500 uppercase tracking-widest mb-4 font-light"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full border-b border-gray-300 bg-transparent text-gray-900 py-3 focus:outline-none focus:border-gray-900 transition-colors resize-none font-light"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-16 py-4 border border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-neutral-50 transition-all duration-500 font-light tracking-widest text-sm uppercase"
            >
              Send
            </button>
          </form>
        )}

        {/* Contact Information */}
        <div className="mt-24 border-t border-gray-300 pt-16">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-8 font-light">
            Connect
          </h2>
          
          <div className="space-y-4">
            <div>
              <a
                href="mailto:srafaqat@unibz.it"
                className="text-gray-700 hover:text-gray-900 font-light transition-colors"
              >
                srafaqat@unibz.it
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}