import React from "react";

const CareersSection = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-[#482f22] ">
      {/* Headline Section */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6 ">
          <div className="w-3 h-3  font-serif rounded-full bg-[#ff6937]" />
          <p className="text-[#ff6937] tracking-tight text-sm ">
            Working at Haptic
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-[#ff6937] tracking-tight">
          Great work starts with great people — join us.
        </h1>
      </div>

      {/* Open Roles Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#ff6937]" />
          <p className="text-[#ff6937] text-sm tracking-tight">Open Roles</p>
        </div>

        {/* Roles List */}
        <div className="space-y-4">
          {/* Example role */}
          <div className="p-6  transition">
            <p className="text-3xl font-serif text-[#ff6937] opacity-70 mb-2">
              Senior Designer
            </p>
            <div className="flex gap-4 text-sm text-[#ff6937] opacity-60">
              <span>Remote/Hybrid</span>
              <span>Full-time</span>
            </div>
          </div>

          {/* You can duplicate this block for additional roles */}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
