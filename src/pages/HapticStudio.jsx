import React from "react";
import Navbar from "../components/header";
import Carousel from "../components/hapticGalary";
import WaveAnimation from "../components/waveAnimation";
import TitleSection from "../components/yellow";
import VideoComponent from '../components/videocomp'
import LogoCarousel from '../components/logcarousal'
 import SubscriptionCard from '../components/SubscriptionCard'
 import CareersSection from '../components/CareersSection'
 import Footer from '../components/footer'
const HapticHeader = () => {
  return (
    <>
      <Navbar />
      <Carousel />
        <WaveAnimation />
      <TitleSection />
      <VideoComponent/>
      <LogoCarousel/>
      <SubscriptionCard/>
      <WaveAnimation />
      <CareersSection/>
      <Footer/>
    </>
  );
};

export default HapticHeader;
