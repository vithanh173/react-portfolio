import { useState } from "react";

import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const [nav, setNav] = useState(false);

  const handleOpenNav = () => {
    setNav(true);
  };

  const handleCloseNav = () => {
    setNav(false);
  };

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={handleCloseNav} />
        <Navbar openNav={handleOpenNav} />
        <HeroSection />
        <div className="relative z-30">
          <AboutSection />
          <ProjectSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
