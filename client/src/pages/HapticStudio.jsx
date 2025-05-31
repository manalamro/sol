import React, { lazy, Suspense } from "react";
import logo from "../assets/svgexport-24.svg";

// Lazy load components
const Navbar = lazy(() => import("../components/Header"));
const Carousel = lazy(() => import("../components/HapticGalary"));
const WaveAnimation = lazy(() => import("../components/WaveAnimation"));
const TitleSection = lazy(() => import("../components/Yellow"));
const VideoComponent = lazy(() => import("../components/VideoComp"));
const LogoCarousel = lazy(() => import("../components/LogCarousal"));
const SubscriptionCard = lazy(() => import("../components/SubscriptionCard"));
const CareersSection = lazy(() => import("../components/CareersSection"));

const HapticHeader = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#1e847e] border-opacity-70"></div>
        </div>
      }
    >
      <>
        <div id="home">
          <Navbar />
        </div>

        <div id="work">
          <Carousel />
        </div>

        <WaveAnimation />
        <TitleSection />
        <VideoComponent />
        <LogoCarousel />

        <div id="pricing">
          <SubscriptionCard />
        </div>

        <WaveAnimation />

        <div id="careers">
          <CareersSection />
        </div>

        <div className="bg-white px-4 md:px-12 py-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row lg:flex-row justify-between items-start gap-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={logo} alt="footerlogo" className="h-16 w-16" />
            </div>

            {/* Learn More */}
            <div>
              <h3 className="font-semibold mb-2 text-sm ">Learn More</h3>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#work" className="hover:underline">Work</a></li>
                <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                <li><a href="#careers" className="hover:underline">Careers</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-semibold mb-2 text-sm ">Follow Us</h3>
              <ul className="space-y-1 text-gray-400">
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Linkedin</a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                </li>
                <li>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:underline">X</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Text */}
          <div className="mt-10 text-sm text-gray-400 px-4 md:px-12">
            Haptic © 2025
          </div>
        </div>
      </>
    </Suspense>
  );
};

export default HapticHeader;
