import React from "react";
import Navbar from "../CommonUI/Navbar";
import StudentRegistrationherosection from "../Components/StudentRegistrationpage/StudentRegistrationherosection";
import StudentRegistrationForm from "../Components/StudentRegistrationpage/StudentRegistrationForm";
import OurInstagram from "../Components/FeeSubmissonpage/OurInstagram";
import Footer from "../Components/Homepages/Footer";

const StudentRegistrationpages = () => {
  return (
    <>
      <Navbar />
      <StudentRegistrationherosection />
      <StudentRegistrationForm />
      <OurInstagram />
      <Footer />
    </>
  );
};

export default StudentRegistrationpages;
