import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import AboutSection from "../components/AboutSection";
const AboutPage = () => {
  return (
    <div className="backgroundColour">
      <Nav />
      <div>
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
