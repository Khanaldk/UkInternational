import React from "react";
import Navbar from "../CommonUI/Navbar";
import Patnapageherosection from "../Components/OurBranchespages/Patnapages/Patnapageherosection";
import WelcomePatna from "../Components/OurBranchespages/Patnapages/WelcomePatna";
import WelcomeToUkPatna from "../Components/OurBranchespages/Patnapages/WelcomeToUkPatna";
import OurPopularCourses from "../Components/OurBranchespages/Patnapages/OurPopularCourses";
import AccredationsAndAward from "../Components/Homepages/AccredationsAndAward";
import Placements from "../Components/Homepages/Placements";
import Testimonials from "../Components/Homepages/Testimonials";
import LocationPatna from "../Components/OurBranchespages/Patnapages/LocationPatna";
import Footer from "../Components/Homepages/Footer";

const Patnapages = () => {
  return (
    <>
      <Navbar />
      <Patnapageherosection />
      <WelcomePatna />
      <WelcomeToUkPatna />
      <OurPopularCourses />
      <AccredationsAndAward />
      <Placements />
      <Testimonials />
      <LocationPatna />
      <Footer />
    </>
  );
};

export default Patnapages;
