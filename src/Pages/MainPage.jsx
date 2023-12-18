import React from "react";
import Nav from "../components/Nav";
import AboutPage from "./AboutPage";
import AboutSection from "../components/AboutSection";

import ProjectSection from "../components/ProjectSection";
import ContactPage from "./ContactPage";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div>
      <div className="backgroundImg ">
        <div className="">
          <Nav />
          <div>
            <div className="px-28 py-80 ">
              <h1 className="text-red-500 text-6xl font-bold py-4">
                Tanjya Akther
              </h1>
              <p className="font-bold">Full Stack Developer from London, UK</p>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundColour pt-10">
        <AboutSection />
        <div>
          <ProjectSection />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
