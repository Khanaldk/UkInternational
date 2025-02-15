import React from "react";
import Navbar from "../CommonUI/Navbar";
import Franchiesherosection from "../Components/Franchisespages/Franchiesherosection";
import Franchisesform from "../Components/Franchisespages/Franchisesform";
import OurInstagram from "../Components/FeeSubmissonpage/OurInstagram";
import Footer from "../Components/Homepages/Footer";

const Franchiespages = () => {
  return (
    <>
      <Navbar />
      <Franchiesherosection />
      <Franchisesform />
      <OurInstagram />
      <Footer />
    </>
  );
};

export default Franchiespages;
