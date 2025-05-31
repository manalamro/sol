import React from 'react';
import logo from '../assets/logo.png';
import brand from '../assets/svg-image-16.svg';
import TransformingAsterisk from '../components/AnimatedStarIcon';
import Carousel from '../components/galary'
import { Link } from 'react-router-dom';


const OhStudio = () => {
  return (
    <>
        <section className="ohStudio-hero">
      <div className="max-w-4xl">
        <h1 className="ohStudio-hero-text">
          <span className="inline-flex items-center gap-1">
            A{' '}
            <a
              href="https://x.com/olvhrs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block align-middle"
            >
              <img src={logo} alt="logo" className="logo-img" />
            </a>{' '}
            designer working
          </span>

          <span className="block">with startups globally.</span>
          <span className="block">Currently steering the</span>

          <span className="inline-flex items-center gap-1">
            ship at
                <img src={brand} alt="Haptic logo" className="brand-img-sizes" />
            <Link
              to="/login"
              target="_blank"
              rel="noopener noreferrer"
              className="haptic-link text-[25px]"
            >
              Login to Haptic.
            </Link>
          </span>
        </h1>
      </div>
      <TransformingAsterisk />
    </section>
    
    <Carousel/>
    </>

  );
};

export default OhStudio;
