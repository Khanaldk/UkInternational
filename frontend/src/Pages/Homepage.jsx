import React from "react";
import Navbar from "../CommonUI/Navbar";
import HeroSection from "../Components/Homepages/HeroSection";
import WhoWeAre from "../Components/Homepages/WhoWeAre";
import AccredationsAndAward from "../Components/Homepages/AccredationsAndAward";
import OurCourses from "../Components/Homepages/OurCourses";
import Placements from "../Components/Homepages/Placements";
import Testimonials from "../Components/Homepages/Testimonials";
import InquiryNow from "../Components/Homepages/InquiryNow";
import Footer from "../Components/Homepages/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <AccredationsAndAward />
      <OurCourses />
      <Placements />
      <Testimonials />
      <InquiryNow />
      <Footer />
    </>
  );
};

export default Homepage;
