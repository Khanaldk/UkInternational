import React from "react";
import Navbar from "../CommonUI/Navbar";
import ApplyNowPageherosection from "../Components/ApplyNowPages/ApplyNowPageherosection";
import ApplyOnlineCourse from "../Components/ApplyNowPages/ApplyOnlineCourse";
import OurInstagram from "../Components/FeeSubmissonpage/OurInstagram";
import Footer from "../Components/Homepages/Footer";

const Applynowpage = () => {
  return (
    <>
      <Navbar />
      <ApplyNowPageherosection />
      <ApplyOnlineCourse />
      <OurInstagram />
      <Footer />
    </>
  );
};

export default Applynowpage;
