import React from 'react';
import { X } from 'react-feather';
import HiringAnimatedLogo from '../components/hiringLogo'

const HiringPage = ({ onClose }) => {
  const handleApply = () => {
    window.location.href = "mailto:manalamro538@gmail.com?subject=Application for Senior Designer Position&body=Please include your portfolio link and LinkedIn profile.";
  };

  return (
    <div className="fixed right-0 top-0 h-screen w-[740px] max-w-[740px] bg-white z-30 overflow-y-auto shadow-lg">
      {/* Sticky Header with Close Button */}
      <div className="sticky top-0 flex justify-between items-center h-20 px-10 w-full z-10 bg-white border-b border-gray-200">
        <div className="flex flex-col">
          <p className="font-medium text-gray-900 opacity-40 text-sm">Hiring</p>
          <p className="font-medium text-gray-900 text-lg">Senior Designer</p>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={24} strokeWidth={2} />
        </button>
      </div>

      <div className="px-10 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="font-serif text-5xl leading-tight tracking-tight mb-6">
            As a Senior Designer, you'll be a driving force in shaping our creative output and studio culture.
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {['Full-Time', 'UK', 'Europe', 'Remote'].map((tag) => (
              <span key={tag} className="bg-gray-100 rounded-full px-3 py-1.5 text-xs font-medium text-gray-800 opacity-40">
                {tag}
              </span>
            ))}
          </div>
          
          <button 
            onClick={handleApply}
            className="bg-black text-white rounded-full px-6 py-3 font-medium text-sm hover:bg-gray-300 hover:text-black transition-colors"
          >
            Apply
          </button>
        </div>

        {/* Pattern SVG */}
        <div className="mb-12 w-full bg-black rounded-lg overflow-hidden">
          <HiringAnimatedLogo/>
        </div>

        {/* Rest of your sections remain unchanged */}

        {/* Application Section */}
        <Section title="Application">
          <p className="mb-6">
            To apply, please click the 'Apply' button to email us. Please link us to your portfolio and your LinkedIn, we'll reach out if we're interested in talking further.
          </p>
          <button 
            onClick={handleApply}
            className="bg-black text-white rounded-full px-6 py-3 font-medium text-sm hover:bg-gray-300 hover:text-black transition-colors"
          >
            Apply
          </button>
        </Section>
      </div>
    </div>
  );
};

// Reusable Section Component remains the same
const Section = ({ title, children }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-black rounded-full w-2 h-2"></div>
      <h2 className="font-medium text-lg">{title}</h2>
    </div>
    <div className="text-gray-600">
      {children}
    </div>
  </div>
);

export default HiringPage;