import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import About from "./About";
import heroBg from "../../assets/hero-bg.webp";
import heroBgMobile from "../../assets/hero-mobile-bg.webp";
// import NUSColleges from "./NusColleges";
// import Achievements from "./Achievements";
import StudySection from "./StudySection";
import OurPartners from "./OurPartners";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
// import Offices from "./Offices";

const Landing = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check initially
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${isMobile ? heroBgMobile : heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: isMobile ? "scroll" : "scroll",
          height: `${isMobile ? "900px" : "auto"}`,
          width: "100%",
          position: "relative",
        }}
      >
        <Header />
        <HeroSection />
      </div>
      <About />
      {/* <NUSColleges /> */}
      {/* <Achievements /> */}
      <StudySection />
      <OurPartners />
      <Testimonials />
      {/* <Offices /> */}
      <CTA />
    </>
  );
};

export default Landing;
