import React from "react";
import Navbar from "../CommonUI/Navbar";
import Contactherosection from "../Components/Contactpages/Contactherosection";
import OurContact from "../Components/Contactpages/OurContact";
import Location from "../Components/Contactpages/Location";
import Footer from "../Components/Homepages/Footer";

const Contactpages = () => {
  return (
    <>
      <Navbar />
      <Contactherosection />
      <OurContact />
      <Location />
      <Footer />
    </>
  );
};

export default Contactpages;
