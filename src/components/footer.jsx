import React from 'react';
import logo from '../assets/svgexport-24.svg';
import { LinkedinLogo, TwitterLogo, InstagramLogo } from 'phosphor-react'; // Importing icons from Phosphor Icons

const Footer = () => {
  return (
    <div className='flex flex-row gap-28 p-6 m-3'>
      <div>
        <img src={logo} alt='footerlogo' className='h-16 w-16' />
      </div>

      <div>
        <h3 className='font-semibold text-lg mb-2'>Learn More</h3>
        <ul className='space-y-1'>
          <li>
            <a href="#home" className='text-blue-600 hover:underline'>
              Home
            </a>
          </li>
          <li>
            <a href="#work" className='text-blue-600 hover:underline'>
              Work
            </a>
          </li>
          <li>
            <a href="#pricing" className='text-blue-600 hover:underline'>
              Pricing
            </a>
          </li>
          <li>
            <a href="#careers" className='text-blue-600 hover:underline'>
              Careers
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className='font-semibold text-lg mb-2'>Follow Us</h3>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <LinkedinLogo size={32} />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <TwitterLogo size={32} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
            <InstagramLogo size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
