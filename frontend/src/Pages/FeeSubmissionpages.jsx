import React from "react";
import Navbar from "../CommonUI/Navbar";
import FeeSubmissionherosection from "../Components/FeeSubmissonpage/FeeSubmissionherosection";
import PayYourFee from "../Components/FeeSubmissonpage/PayYourFee";
import OurInstagram from "../Components/FeeSubmissonpage/OurInstagram";
import Footer from "../Components/Homepages/Footer";

const FeeSubmissionpages = () => {
  return (
    <>
      <Navbar />
      <FeeSubmissionherosection />
      <PayYourFee />
      <OurInstagram />
      <Footer />
    </>
  );
};

export default FeeSubmissionpages;
