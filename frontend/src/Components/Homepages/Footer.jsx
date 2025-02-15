import React from "react";
import { footimage } from "../../Images/Image";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { FaAddressBook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section
      className=" -mt-10 md:mt-0"
      style={{
        backgroundImage: `url(${footimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      <div className="text-white lg:flex justify-around p-10">
        <div>
          <h2 className="w-full text-4xl md:text-5xl font-semibold py-3">
            USEFUL LINKS
          </h2>
          <ul className="space-y-2">
            <NavLink to={`/`}>
              <li className="text-[1.3rem] border-b-1 border-hoverc hover:text-hoverc cursor-pointer">
                HOME
              </li>
            </NavLink>
            <NavLink to={`/about`}>
              <li className="text-[1.3rem] border-b-1 border-hoverc hover:text-hoverc cursor-pointer">
                ABOUT US
              </li>
            </NavLink>
            <NavLink to={`/franchise`}>
              <li className="text-[1.3rem] border-b-1 border-hoverc hover:text-hoverc cursor-pointer">
                FRANCHISE
              </li>
            </NavLink>
            <NavLink to={`/fee-submission`}>
              <li className="text-[1.3rem] border-b-1 border-hoverc hover:text-hoverc cursor-pointer">
                FEES SUBMISSION
              </li>
            </NavLink>
            <NavLink to={`/certifications`}>
              <li className="text-[1.3rem] border-b-1 border-hoverc hover:text-hoverc cursor-pointer">
                CERTIFICATION
              </li>
            </NavLink>
            <NavLink to={`/students-registrations`}>
              <li className="text-[1.3rem] border-b-1 border-hoverc hover:text-hoverc cursor-pointer">
                STUDENT REGISTRATION
              </li>
            </NavLink>
            <NavLink to={`/blogs`} target="_blank">
              <li className="text-[1.3rem] border-b-1 border-hoverc hover:text-hoverc cursor-pointer">
                BLOG
              </li>
            </NavLink>
            <NavLink to={`/contact`}>
              <li className="text-[1.3rem] border-b-1 border-hoverc hover:text-hoverc cursor-pointer">
                CONTACT US
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="w-full text-4xl md:text-5xl font-semibold py-3">
            GET IN TOUCH
          </h2>

          <ul className="space-y-5">
            <li className="text-[1.3rem] flex items-center gap-4">
              {" "}
              <span className="text-hoverc text-[1.2rem]  ">
                <IoMail />
              </span>
              info@uk-international.com
            </li>
            <li className="text-[1.3rem] flex items-center gap-4">
              {" "}
              <span className="text-hoverc text-[1.2rem]  ">
                <AiOutlineGlobal />
              </span>
              www.uk-international.com
            </li>
            <li className="text-[1.3rem] flex items-center gap-4">
              {" "}
              <span className="text-hoverc text-[1rem]  ">
                <FaPhone />
              </span>{" "}
              +447453357130
            </li>
            <li className="text-[1.3rem] flex items-center gap-4">
              {" "}
              <span className="text-hoverc text-[1rem]  ">
                <FaPhone />
              </span>{" "}
              +91 8181814007
            </li>
            <li className="text-[1.3rem] flex items-center gap-4">
              <span className="text-hoverc text-[1.2rem]  ">
                <FaAddressBook />
              </span>{" "}
              A-4, First Floor, logix park, Sector 16, Noida, Uttar Pradesh
              201301
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex items-center justify-center space-x-8">
        <FaInstagram className="text-hoverc text-[1.2rem]" />
        <FaFacebook className="text-hoverc text-[1.2rem]" />
        <FaYoutube className="text-hoverc text-[1.2rem]" />
        <FaTwitter className="text-hoverc text-[1.2rem]" />
        <FaPinterest className="text-hoverc text-[1.2rem]" />
      </div>
      <hr className="p-2 mx-4 md:mx-30 mt-8 text-brownc" />
      <div className="text-brownc px-4 md:flex justify-around py-4">
        <p>© Copyright {currentYear} UK International All Right Reserved.</p>
        <div className="flex space-x-5">
          <p className="hover:text-hoverc cursor-pointer">TERMS & CONDITIONS</p>
          <p>/</p>
          <p className="hover:text-hoverc cursor-pointer">PRIVACY POLICY</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
