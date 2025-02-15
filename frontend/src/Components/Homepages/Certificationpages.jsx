import React from "react";
import Navbar from "../../CommonUI/Navbar";
import HeroSection from "./HeroSection";
import CertificationValidation from "../Certtificationpages/CertificationValidation";
import Footer from "./Footer";

const Certificationpages = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CertificationValidation />
      <Footer />
    </>
  );
};

export default Certificationpages;
