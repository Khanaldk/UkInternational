import React from "react";
import Navbar from "../CommonUI/Navbar";
import Coursesherosection from "../Components/Coursespages/Coursesherosection";
import OurCourses from "../Components/Homepages/OurCourses";
import Applyform from "../Components/Coursespages/Applyform";
import Footer from "../Components/Homepages/Footer";

const Coursespage = () => {
  return (
    <>
      <Navbar />
      <Coursesherosection />
      <OurCourses />
      <Applyform />
      <Footer />
    </>
  );
};

export default Coursespage;
