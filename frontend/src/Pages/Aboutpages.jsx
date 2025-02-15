import React from "react";
import Navbar from "../CommonUI/Navbar";
import Aboutherosection from "../Components/Aboutpages/Aboutherosection";
import AboutUkInternational from "../Components/Aboutpages/AboutUkInternational";
import AboutChairman from "../Components/Aboutpages/AboutChairman";
import AboutCEO from "../Components/Aboutpages/AboutCEO";
import Footer from "../Components/Homepages/Footer";

const Aboutpages = () => {
  return (
    <>
      <Navbar />
      <Aboutherosection />
      <AboutUkInternational />
      <AboutChairman />
      <AboutCEO />
      <Footer />
    </>
  );
};

export default Aboutpages;
