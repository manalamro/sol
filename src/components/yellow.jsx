import React from "react";

const TitleSection = () => {
  return (
    <div className="Why-Haptic">
      {/* Top Row */}
      <div className="flex items-center gap-2 mb-4 text-md">
        {/* Dot */}
        <div className="w-2 h-2 bg-black rounded-full"></div>

        {/* Subtitle */}
        <div className="flex flex-col justify-start">
          <p className="text-sm font-medium leading-snug tracking-tight">
            Why Haptic
          </p>
        </div>
      </div>

      {/* Main Title */}
      <div className="why-haptic-text-container">
        <h1 className="why-haptic-text">
          Startups come to us when they need a team that can deliver real
          results.
        </h1>
      </div>
    </div>
  );
};

export default TitleSection;
