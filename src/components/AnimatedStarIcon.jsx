import React from 'react';

const TransformingAsterisk = () => {
  return (
    <div className="w-15 h-15 flex justify-end px-0.5 py-0.2">
      <svg
        viewBox="0 0 800 800"
        className=" w-7 h-7 md:w-7 md:h-7 lg:h-11 lg:w-11"
      >
        <g transform="translate(400,400)">
          <path
            d="
              M-243,-243 C-243,-243 243,243 243,243
              M-243,243 C-243,243 243,-243 243,-243
              M-344,0 C-344,0 344,0 344,0
              M0,-344 C0,-344 0,344 0,344
            "
            stroke="#000000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fill="none"
          >
            {/* Faster stroke width animation - tight -> large -> larger -> tight */}
            <animate
              attributeName="stroke-width"
              values="28.5;79.8;163;28.5"
              dur="3s"  // Changed from 6s to 3s (2x faster)
              keyTimes="0;0.25;0.75;1"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
              repeatCount="indefinite"
            />
            
            {/* Faster rotation animation - 120° steps */}
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="
                0 0 0;
                120 0 0;
                240 0 0;
                360 0 0
              "
              dur="3s"  // Changed from 6s to 3s (2x faster)
              keyTimes="0;0.33;0.66;1"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
              repeatCount="indefinite"
              additive="sum"
            />

            {/* Initial -7.5° offset (kept same duration as it's just initial positioning) */}
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-7.5 0 0"
              dur="30s"
              fill="freeze"
              additive="sum"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};

export default TransformingAsterisk;