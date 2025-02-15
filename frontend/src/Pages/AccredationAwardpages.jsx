import React from "react";
import Navbar from "../CommonUI/Navbar";
import AccredationAndAwardherosection from "../Components/AccredationAndAwardpages/AccredationAndAwardherosection";
import OurAccredation from "../Components/AccredationAndAwardpages/OurAccredation";
import OurAward from "../Components/AccredationAndAwardpages/OurAward";
import Footer from "../Components/Homepages/Footer";

const AccredationAwardpages = () => {
  return (
    <>
      <Navbar />
      <AccredationAndAwardherosection />
      <OurAccredation />
      <OurAward />
      <Footer />
    </>
  );
};

export default AccredationAwardpages;
