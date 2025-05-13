// components/LogoCarousel.jsx
import React from "react";

const imageModules = import.meta.glob('../assets/haptic-studio/*.jpeg', { eager: true });

const logos = Object.values(imageModules).map((mod, index) => ({
  id: index + 1,
  src: mod.default,
}));

const LogoCard = ({ src }) => (
  <div className="flex-shrink-0 w-[220px] h-[120px] mx-[10px] flex items-center justify-center p-4">
    <img src={src} alt="Logo" className="w-full h-full object-contain filter grayscale" />
  </div>
);

const LogoCarousel = () => {
  const duplicated = logos.concat(logos);

  return (
    <div className="w-full overflow-hidden py-8 bg-transparent">
      <div className="group relative">
        <div
          className="flex items-center animate-scroll group-hover:paused-animation"
          style={{ width: `${duplicated.length * 240}px` }}
        >
          {duplicated.map((logo, index) => (
            <LogoCard key={index} src={logo.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
