
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PricingPlans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios.get('https://mocki.io/v1/34fee4e4-5f5d-4ff5-ada6-fc9133aeac0a')
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => {
        console.error('Error fetching plans:', error);
      });
  }, []);

  const renderSVG = (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41">
      <path d="M8 40.629C3.582 40.629 0 40.629 0 40.629L0 0.629C0 0.629 3.582 0.629 8 0.629L32 0.629C36.418 0.629 40 0.629 40 0.629L40 40.629C40 40.629 36.418 40.629 32 40.629Z" fill={color} />
      <path d="M20.5 30.629C15.253 30.629 11 26.376 11 21.129C11 21.129 15.253 21.129 20.5 21.129C25.747 21.129 30 21.129 30 21.129C30 26.376 25.747 30.629 20.5 30.629Z" fill="black" />
      <path d="M20.5 21.129C15.253 21.129 11 16.876 11 11.629C11 11.629 15.253 11.629 20.5 11.629C25.747 11.629 30 11.629 30 11.629C30 16.876 25.747 21.129 20.5 21.129Z" fill="black" />
    </svg>
  );

  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center min-h-screen bg-black text-white p-0 m-0">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="bg-[#1e1e1e] border border-gray-700 p-8 w-full lg:w-1/3 h-[600px] flex flex-col"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12">{renderSVG(plan.svgColor)}</div>
            <div>
              <h3 className="text-sm text-gray-300">Subscription</h3>
              <h2 className="text-3xl font-light">{plan.name}</h2>
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
          <div className="mb-4">
            <p className="text-4xl font-light">£{plan.price.toLocaleString()}</p>
            <p className="text-xs text-gray-300">/{plan.interval}</p>
          </div>
          <ul className="text-sm text-gray-300 list-disc pl-5 mb-6">
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <a
            href={plan.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block bg-white text-black px-6 py-2 text-sm font-medium text-center"
          >
            Book a call
          </a>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
