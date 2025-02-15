import React from "react";
import Navbar from "../CommonUI/Navbar";
import Testimonialsherosection from "../Components/Testimonialspages/Testimonialsherosection";
import TestimonialsAll from "../Components/Testimonialspages/TestimonialsAll";
import Footer from "../Components/Homepages/Footer";

const Testimonialspages = () => {
  return (
    <>
      <Navbar />
      <Testimonialsherosection />
      <TestimonialsAll />
      <Footer />
    </>
  );
};

export default Testimonialspages;
