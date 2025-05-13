import React from 'react';

const PricingPlans = () => {
  return (
<div className="flex flex-col md:flex-row items-stretch justify-center min-h-screen bg-black text-white p-0 m-0">

      {/* Plan 1 */}
      <div className="bg-[#1e1e1e] border border-gray-700 p-8 w-full lg:w-1/3 h-[600px] flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41">
              <path d="M8 40.629C3.582 40.629 0 40.629 0 40.629L0 0.629C0 0.629 3.582 0.629 8 0.629L32 0.629C36.418 0.629 40 0.629 40 0.629L40 40.629C40 40.629 36.418 40.629 32 40.629Z" fill="rgb(251,186,16)" />
              <path d="M20.5 30.629C15.253 30.629 11 26.376 11 21.129C11 21.129 15.253 21.129 20.5 21.129C25.747 21.129 30 21.129 30 21.129C30 26.376 25.747 30.629 20.5 30.629Z" fill="black" />
              <path d="M20.5 21.129C15.253 21.129 11 16.876 11 11.629C11 11.629 15.253 11.629 20.5 11.629C25.747 11.629 30 11.629 30 11.629C30 16.876 25.747 21.129 20.5 21.129Z" fill="black" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm text-gray-300">Subscription</h3>
            <h2 className="text-3xl font-light">Tactile</h2>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">
          Great for teams who work in weekly sprints, and need design and strategy support.
        </p>
        <div className="mb-4">
          <p className="text-4xl font-light">£7,500</p>
          <p className="text-xs text-gray-300">/Month</p>
        </div>
        <ul className="text-sm text-gray-300 list-disc pl-5 mb-6">
          <li>Dedicated Senior Designer</li>
          <li>Weekly Sprint Calls</li>
          <li>Async Loom updates</li>
          <li>Unlimited Slack communication</li>
        </ul>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block bg-white text-black px-6 py-2 text-sm font-medium text-center"
        >
          Book a call
        </a>
      </div>

      {/* Plan 2 */}
      <div className="bg-[#1e1e1e] border-y border-gray-700 p-8 w-full lg:w-1/3 h-[600px] flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41">
              <path d="M8 40.629C3.582 40.629 0 40.629 0 40.629L0 0.629C0 0.629 3.582 0.629 8 0.629L32 0.629C36.418 0.629 40 0.629 40 0.629L40 40.629C40 40.629 36.418 40.629 32 40.629Z" fill="#00BFFF" />
              <path d="M20.5 30.629C15.253 30.629 11 26.376 11 21.129C11 21.129 15.253 21.129 20.5 21.129C25.747 21.129 30 21.129 30 21.129C30 26.376 25.747 30.629 20.5 30.629Z" fill="black" />
              <path d="M20.5 21.129C15.253 21.129 11 16.876 11 11.629C11 11.629 15.253 11.629 20.5 11.629C25.747 11.629 30 11.629 30 11.629C30 16.876 25.747 21.129 20.5 21.129Z" fill="black" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm text-gray-300">Subscription</h3>
            <h2 className="text-3xl font-light">Kinetic</h2>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">
          Ideal for startups seeking design agility with strong support and flexibility.
        </p>
        <div className="mb-4">
          <p className="text-4xl font-light">£5,000</p>
          <p className="text-xs text-gray-300">/Month</p>
        </div>
        <ul className="text-sm text-gray-300 list-disc pl-5 mb-6">
          <li>Mid-level Designer</li>
          <li>Bi-weekly Sprint Calls</li>
          <li>Slack collaboration</li>
          <li>Design System Setup</li>
        </ul>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block bg-white text-black px-6 py-2 text-sm font-medium text-center"
        >
          Book a call
        </a>
      </div>

      {/* Plan 3 */}
      <div className="bg-[#1e1e1e] border border-gray-700 p-8 w-full lg:w-1/3 h-[600px] flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41">
              <path d="M8 40.629C3.582 40.629 0 40.629 0 40.629L0 0.629C0 0.629 3.582 0.629 8 0.629L32 0.629C36.418 0.629 40 0.629 40 0.629L40 40.629C40 40.629 36.418 40.629 32 40.629Z" fill="#ADFF2F" />
              <path d="M20.5 30.629C15.253 30.629 11 26.376 11 21.129C11 21.129 15.253 21.129 20.5 21.129C25.747 21.129 30 21.129 30 21.129C30 26.376 25.747 30.629 20.5 30.629Z" fill="black" />
              <path d="M20.5 21.129C15.253 21.129 11 16.876 11 11.629C11 11.629 15.253 11.629 20.5 11.629C25.747 11.629 30 11.629 30 11.629C30 16.876 25.747 21.129 20.5 21.129Z" fill="black" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm text-gray-300">Subscription</h3>
            <h2 className="text-3xl font-light">Atomic</h2>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">
          Best for enterprises needing fast turnaround, premium support, and design systems.
        </p>
        <div className="mb-4">
          <p className="text-4xl font-light">£10,000</p>
          <p className="text-xs text-gray-300">/Month</p>
        </div>
        <ul className="text-sm text-gray-300 list-disc pl-5 mb-6">
          <li>Senior+ Designer</li>
          <li>Daily Standups</li>
          <li>On-demand Design System</li>
          <li>Custom Deliverables</li>
        </ul>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block bg-white text-black px-6 py-2 text-sm font-medium text-center"
        >
          Book a call
        </a>
      </div>

    </div>
  );
};

export default PricingPlans;
