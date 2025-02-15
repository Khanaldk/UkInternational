import React from "react";
import Navbar from "../CommonUI/Navbar";
import Hairherosection from "../Components/Coursespages/Hairpage/Hairherosection";
import Internationalhairdressingcourses from "../Components/Coursespages/Hairpage/Internationalhairdressingcourses";
import FAQhair from "../Components/Coursespages/Hairpage/FAQhair";
import HairType from "../Components/Coursespages/Hairpage/HairType";
import HairImage from "../Components/Coursespages/Hairpage/HairImage";
import Applyform from "../Components/Coursespages/Applyform";
import Footer from "../Components/Homepages/Footer";

const Hairpages = () => {
  return (
    <>
      <Navbar />
      <Hairherosection />
      <Internationalhairdressingcourses />
      <FAQhair />
      <HairType />
      <HairImage />
      <Applyform />
      <Footer />
    </>
  );
};

export default Hairpages;
