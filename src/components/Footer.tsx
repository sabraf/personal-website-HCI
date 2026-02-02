import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: 'home' | 'about' | 'assignments' | 'project' | 'contact') => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white border-t-4 border-blue-600" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">HCI Portfolio</h3>
            <p className="text-gray-300 leading-relaxed">
              Designing accessible, user-centered digital experiences through research and evidence-based design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCurrentPage('home')}
                    className="text-gray-300 hover:text-blue-400 focus:outline-none focus:underline transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('about')}
                    className="text-gray-300 hover:text-blue-400 focus:outline-none focus:underline transition-colors"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('assignments')}
                    className="text-gray-300 hover:text-blue-400 focus:outline-none focus:underline transition-colors"
                  >
                    Assignments
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('project')}
                    className="text-gray-300 hover:text-blue-400 focus:outline-none focus:underline transition-colors"
                  >
                    Group Project
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="text-gray-300 hover:text-blue-400 focus:outline-none focus:underline transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social & Back to Top */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 border-2 border-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 border-2 border-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="w-12 h-12 bg-gray-800 border-2 border-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                aria-label="Email me"
              >
                <Mail size={20} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 focus:outline-none focus:underline transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp size={20} aria-hidden="true" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2026 HCI Portfolio. Built with accessibility in mind following WCAG 2.1 AA standards.</p>
        </div>
      </div>
    </footer>
  );
}
