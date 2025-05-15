import { useState } from "react";
import logo from "../assets/svgexport-26.svg";
import circle from '../assets/svgexport-3.svg';
import add from '../assets/svgexport-6.svg';
import HiringPage from './HiringSideNav';
import HiringAnimatedLogo from './HiringLogo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [isHiringHovered, setIsHiringHovered] = useState(false);
  const [showHiringSidebar, setShowHiringSidebar] = useState(false);

  const renderAnimatedIcon = () => {
    const getTransformClasses = (lineIndex) => {
      if (menuOpen) {
        return lineIndex === 1 ? "rotate-45 top-2" : "-rotate-45 top-2";
      } else if (hover && window.innerWidth >= 768) {
        return lineIndex === 1 ? "rotate-90 top-2" : "top-2";
      } else {
        return lineIndex === 1 ? "top-1" : "top-3";
      }
    };

    return (
      <div className="menu-icon-wrapper">
        <span className={`menu-icon-line ${getTransformClasses(1)}`} />
        <span className={`menu-icon-line ${getTransformClasses(2)}`} />
      </div>
    );
  };

  const renderHeroText = () => {
    return (
      <div className="hero-text-container">
        <span className="hero-text block md:hidden">
          We help ambitious teams turn bold visions into lasting impact.
        </span>
  
        {/* md and above */}
        <div className="hidden md:block">
          <span className="hero-text">
            We help <span className="font-bold">MM</span> ambitious teams turn bold visions into{" "}
            <span className="inline-block font-bold">
              <img src={circle} alt="circle" className="inline-block" /> 
            </span>
            {" "} lasting impact.
          </span>
        </div>
      </div>
    );
  };

  const handleScrollToSection = (sectionId) => {
    setMenuOpen(false); // Close menu on click
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar-container">
      <img src={logo} alt="hapticLogo" className="logo-image" />
      <div className="menu-button-wrapper">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="menu-button"
          aria-label="Toggle menu"
        >
          {renderAnimatedIcon()}
        </button>

        <div className={`menu-items ${menuOpen ? "visible-menu" : "hidden-menu"}`}>
          {["Home", "Work", "Pricing", "Careers"].map((item) => (
            <button
              key={item}
              className="menu-link-button"
              onClick={() => handleScrollToSection(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="hero-text-container">
        <div className="hero-text-wrapper">{renderHeroText()}</div>
      </div>

      <div
        className={`hiring-box hidden md:flex absolute lg:flex bottom-5 right-5 ${
          isHiringHovered ? "hiring-hovered" : "hiring-default"
        }`}
        onMouseEnter={() => setIsHiringHovered(true)}
        onMouseLeave={() => setIsHiringHovered(false)}
      >
        <div className="hiring-icon">
          <HiringAnimatedLogo />
        </div>
        <div className="hiring-text">
          <p className={`hiring-label ${isHiringHovered ? "text-gray-300" : "text-gray-500"}`}>
            Hiring
          </p>
          <p className="hiring-title">Senior Designer</p>
        </div>
        <button
          className="hiring-arrow-button"
          onClick={() => setShowHiringSidebar(true)}
          aria-label="Open hiring sidebar"
        >
          <img src={add} alt="add" />
        </button>
      </div>

      {showHiringSidebar && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setShowHiringSidebar(false)}
        >
          <HiringPage />
        </div>
      )}
    </div>
  );
}
