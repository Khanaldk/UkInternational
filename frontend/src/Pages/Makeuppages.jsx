import React from "react";
import Navbar from "../CommonUI/Navbar";
import Makeupherosection from "../Components/Coursespages/Makeuppage/Makeupherosection";
import Internationalmakeupcourses from "../Components/Coursespages/Makeuppage/Internationalmakeupcourses";
import FAQ from "../Components/Coursespages/Makeuppage/FAQ";
import MakeupType from "../Components/Coursespages/Makeuppage/MakeupType";
import MakeupImages from "../Components/Coursespages/Makeuppage/MakeupImages";
import Applyform from "../Components/Coursespages/Applyform";
import Footer from "../Components/Homepages/Footer";

const Makeuppages = () => {
  return (
    <>
      <Navbar />
      <Makeupherosection />
      <Internationalmakeupcourses />
      {/* <FAQ /> */}
      {/* <MakeupType /> */}
      {/* <MakeupImages /> */}
      {/* <Applyform /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Makeuppages;
