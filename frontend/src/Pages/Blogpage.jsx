import React from "react";
import Navbar from "../CommonUI/Navbar";
import Blogherosection from "../Components/Blogpages/Blogherosection";
import Footer from "../Components/Homepages/Footer";
import BlogList from "../Components/Blogpages/BlogList";

const Blogpage = () => {
  return (
    <>
      <Navbar />
      <Blogherosection />
      <BlogList />
      <Footer />
    </>
  );
};

export default Blogpage;
