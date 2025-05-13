import Lottie from "lottie-react";
import animationData from "../assets/motion.json";

import React from 'react'

const waveAnimation = () => {
  return (
  
<div className="w-full flex justify-center bg-black">
{/* Normal Animation */}
<Lottie
  animationData={animationData}
  loop
  autoplay
  className="w-full"
/>
{/* Mirrored Animation */}
  <Lottie
  animationData={animationData}
  className=" w-full scale-x-[-1] "
/>  
</div>
  )
}

export default waveAnimation
