import Lottie from "lottie-react";
import animationData from "../assets/hiring.json"

import React from 'react'

const HiringAnimatedLogo = () => {
  return (
  
<div className="w-full">
{/* Normal Animation */}
<Lottie
  animationData={animationData}
  loop
  autoplay
/>
 
</div>
  )
}

export default HiringAnimatedLogo
