import React, { useState } from "react";
import { logo } from "../Images/Image.js";
import Button from "../CommonUI/Button.jsx";
import { headimage } from "../Images/Image.js";
import { FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isBranchesOpen, setIsBranchesOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed bg-opacity-60 backdrop-blur-sm 
        -top-6 left-0 w-full z-10  py-5 `}
      >
        <header
          className="hidden lg:block"
          style={{
            backgroundImage: `url(${headimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "black",
          }}
        >
          <div className="flex justify-end px-5">
            <ul className="text-white flex items-center space-x-6 py-4 ">
              <NavLink to={`/fee-submission`}>
                <li className="hover:text-hoverc  cursor-pointer">
                  Fees Submission
                </li>
              </NavLink>
              <li className="hover:text-hoverc gap-2 flex items-center cursor-pointer">
                {" "}
                <span className="text-white text-[0.6rem] border-1 rounded-full p-2 bg-hoverc border-hoverc">
                  <FaPhone />
                </span>{" "}
                +91 8181814007
              </li>
              <li className="hover:text-hoverc gap-2 flex items-center cursor-pointer">
                {" "}
                <span className="text-white text-[0.6rem] border-1 rounded-full p-2 bg-hoverc border-hoverc">
                  <FaPhone />
                </span>{" "}
                +447453357130
              </li>
              <NavLink to={`/apply-now`}>
                {" "}
                <Button
                  style={`border border-hoverc [letter-spacing:2px] border-transparent py-2 px-6 bg-hoverc font-semibold rounded-xl cursor-pointer hover:bg-gray-800`}
                  text={"APPLY ONLINE"}
                />
              </NavLink>
            </ul>
          </div>
        </header>
        <div className="flex justify-between items-center px-2 md:px-8 ">
          <NavLink to={"/"}>
            <img src={logo} alt="image" width={300} />
          </NavLink>

          <ul className="lg:flex hidden space-x-16 items-center text-white font-semibold">
            <li className="hover:text-hoverc cursor-pointer ">
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f906a0] font-bold"
                    : "text-white hover:text-hoverc"
                }
              >
                HOME
              </NavLink>
            </li>
            <li className="relative group cursor-pointer">
              <span>
                {" "}
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#f906a0] font-bold"
                      : "text-white hover:text-hoverc"
                  }
                >
                  ABOUT
                </NavLink>
              </span>
              <ul className="absolute -left-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition-all duration-300 delay-200 bg-black text-hoverc mt-10  w-64  shadow-lg">
                <li className="px-4 py-3 border-b-2  border-hoverc hover:text-white hover:bg-hoverc">
                  <NavLink to={`/accredation-award`}>
                    {" "}
                    ACCREDITATIONS-AWARD
                  </NavLink>
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  <NavLink to={`/about`}> ABOUT US</NavLink>
                </li>
              </ul>{" "}
            </li>
            <li className="relative group cursor-pointer">
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f906a0] font-bold"
                    : "text-white hover:text-hoverc"
                }
              >
                <span className="hover:text-hoverc">COURSES</span>
              </NavLink>

              <ul className="absolute -left-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition-all duration-300 delay-200 bg-black text-hoverc mt-10 w-64 shadow-lg">
                <NavLink to={`/makeup`}>
                  {" "}
                  <li className="px-4 py-3 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                    Make-up
                  </li>
                </NavLink>
                <NavLink to={`/hair`}>
                  {" "}
                  <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                    Hair
                  </li>
                </NavLink>
                <NavLink to={`/beauty`}>
                  <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                    Beauty
                  </li>
                </NavLink>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Beauty-aesthetics
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Cosmetology
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Cidesco
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Hair-styling
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Nail-art
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Short - term
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Permanent - Makeup
                </li>
              </ul>
            </li>
            <li className="cursor-pointer">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f906a0] font-bold"
                    : "text-white hover:text-hoverc"
                }
              >
                GALLERY
              </NavLink>
            </li>

            <li className="relative group cursor-pointer">
              <span className="hover:text-hoverc">
                <NavLink
                  to="/ourbranches"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#f906a0] font-bold"
                      : "text-white hover:text-hoverc"
                  }
                >
                  OUR BRANCHES
                </NavLink>
              </span>
              <ul className="absolute -left-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition-all duration-300 delay-200 bg-black text-hoverc mt-10 w-64 shadow-lg">
                <NavLink to={`/patna`}>
                  <li className="px-4 py-3 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                    Patna
                  </li>
                </NavLink>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Rudrapur
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Pune
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Faridabad
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Bazpur
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Kolkata
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Noida
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Ghaziabad
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Rajori-garden
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Varanasi
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Dehradun
                </li>
                <li className="px-4 py-2 border-b-2 border-hoverc hover:text-white hover:bg-hoverc">
                  Ludhiana
                </li>
              </ul>
            </li>

            <li className="hover:text-hoverc cursor-pointer">
              <NavLink
                to="/blogs"
                target="_blank"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f906a0] font-bold"
                    : "text-white hover:text-hoverc"
                }
              >
                BLOGS
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f906a0] font-bold"
                    : "text-white hover:text-hoverc"
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <GiHamburgerMenu className="text-hoverc" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-80 overflow-y-auto bg-resbgc shadow-lg p-6 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <img src={logo} alt="" width={100} />
        </div>
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="text-white" />
        </button>

        <ul className="flex flex-col space-y-4 mt-8 text-white font-semibold">
          <hr className="text-gray-600" />{" "}
          <li className="hover:text-hoverc cursor-pointer ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#f906a0] font-bold"
                  : "text-white hover:text-hoverc"
              }
            >
              HOME
            </NavLink>
          </li>
          <hr className="text-gray-600" />
          <li className="relative cursor-pointer">
            <div className="flex items-center justify-between">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f906a0] font-bold"
                    : "text-white hover:text-hoverc"
                }
              >
                ABOUT
              </NavLink>

              <button
                className={`transform transition-transform bg-hoverc p-1  duration-300 ${
                  isAboutOpen ? " rotate-90 bg-white " : "rotate-0 "
                }`}
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                <MdKeyboardArrowRight
                  className={` text-lg font-bold ${
                    isAboutOpen ? "text-black" : "text-white"
                  }`}
                />
              </button>
            </div>

            <ul
              className={`transition-all duration-300 overflow-hidden  text-white mt-2 w-full shadow-lg ${
                isAboutOpen
                  ? "max-h-64  opacity-100 visible"
                  : "max-h-0 opacity-0  invisible"
              }`}
            >
              <hr className="text-gray-600" />

              <li className="px-4 py-3 hover:text-white ">
                <NavLink to="/accredation-award">ACCREDITATIONS-AWARD</NavLink>
              </li>
              <hr className="text-gray-600" />

              <li className="px-4 pt-2 hover:text-white hover:bg-hoverc">
                <NavLink to="/about">ABOUT US</NavLink>
              </li>
            </ul>
          </li>
          <hr className="text-gray-600" />
          <li className="relative cursor-pointer">
            <div className="flex items-center justify-between">
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f906a0] font-bold"
                    : "text-white hover:text-hoverc"
                }
              >
                COURSES
              </NavLink>

              <button
                className={`transform transition-transform bg-hoverc p-1 duration-300 ${
                  isCoursesOpen ? "rotate-90 bg-white" : "rotate-0"
                }`}
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              >
                <MdKeyboardArrowRight
                  className={` text-lg font-bold ${
                    isCoursesOpen ? "text-black" : "text-white"
                  }`}
                />
              </button>
            </div>

            <ul
              className={`transition-all duration-300 overflow-hidden h-auto   mt-2 w-64 shadow-lg ${
                isCoursesOpen
                  ? "max-h-[500px] opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              }`}
            >
              <hr className="text-gray-600 mt-2" />

              <li className="px-4 py-3 ">
                <NavLink to="/makeup">Make-up</NavLink>
              </li>
              <hr className="text-gray-600" />

              <li className="px-4 py-3 ">
                <NavLink to="/hair">Hair</NavLink>
              </li>
              <hr className="text-gray-600" />

              <li className="px-4 py-3 ">
                <NavLink to="/beauty">Beauty</NavLink>
              </li>
              <hr className="text-gray-600" />
              <li className="px-4 py-3 ">Beauty-aesthetics</li>
              <hr className="text-gray-600" />
              <li className="px-4 py-3 ">Cosmetology</li>
              <hr className="text-gray-600" />
              <li className="px-4 py-3 ">Cidesco</li>
              <hr className="text-gray-600" />
              <li className="px-4 py-3 ">Hair-styling</li>
              <hr className="text-gray-600" />
              <li className="px-4 py-3 ">Nail-art</li>
              <hr className="text-gray-600" />
              <li className="px-4 py-3 ">Short-term</li>
              <hr className="text-gray-600" />
              <li className="px-4 py-3 ">Permanent Makeup</li>
            </ul>
          </li>
          <hr className="text-gray-600" />
          <li className="cursor-pointer">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-[#f906a0] font-bold"
                  : "text-white hover:text-hoverc"
              }
            >
              GALLERY
            </NavLink>
          </li>
          <hr className="text-gray-600" />
          <li className="relative cursor-pointer">
            <div className="flex items-center justify-between">
              <NavLink
                to="/ourbranches"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f906a0] font-bold"
                    : "text-white hover:text-hoverc"
                }
              >
                OUR BRANCHES
              </NavLink>

              <button
                className={`transform transition-transform bg-hoverc p-1 duration-300 ${
                  isBranchesOpen ? "rotate-90 bg-white" : "rotate-0"
                }`}
                onClick={() => setIsBranchesOpen(!isBranchesOpen)}
              >
                <MdKeyboardArrowRight
                  className={` text-lg font-bold ${
                    isBranchesOpen ? "text-black" : ""
                  }`}
                />
              </button>
            </div>

            <ul
              className={`transition-all duration-300 overflow-hidden  text-white mt-2 w-64 shadow-lg ${
                isBranchesOpen
                  ? "h-full opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              }`}
            >
              <hr className="text-gray-600 mt-2" />

              <li className="px-4 py-3">
                <NavLink to="/patna">Patna</NavLink>
              </li>
              <hr className="text-gray-600 " />

              <li className="px-4 py-3 ">Rudrapur</li>
              <hr className="text-gray-600 " />
              <li className="px-4 py-3">Pune</li>
              <hr className="text-gray-600 " />
              <li className="px-4 py-3 ">Faridabad</li>
              <hr className="text-gray-600 " />
              <li className="px-4 py-3 ">Bazpur</li>
              <hr className="text-gray-600 " />
              <li className="px-4 py-3 ">Kolkata</li>
              <hr className="text-gray-600 " />
              <li className="px-4 py-3 ">Noida</li>
              <hr className="text-gray-600 " />
              <li className="px-4 py-3 ">Ghaziabad</li>
              <hr className="text-gray-600 " />
              <li className="px-4 py-3 ">Rajori Garden</li>
              <hr className="text-gray-600 " />
              <li className="px-4 py-3 ">Varanasi</li>
              <hr className="text-gray-600 " />
              <li className="px-4 py-3 ">Dehradun</li>
              <hr className="text-gray-600 " />
              <li className="px-4 py-3 ">Ludhiana</li>
            </ul>
          </li>
          <hr className="text-gray-600" />
          <li className="hover:text-hoverc cursor-pointer">
            <NavLink
              to="/blogs"
              target="_blank"
              className={({ isActive }) =>
                isActive
                  ? "text-[#f906a0] font-bold"
                  : "text-white hover:text-hoverc"
              }
            >
              BLOGS
            </NavLink>
          </li>
          <hr className="text-gray-600" />
          <li className="cursor-pointer">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#f906a0] font-bold"
                  : "text-white hover:text-hoverc"
              }
            >
              CONTACT
            </NavLink>
          </li>
          <hr className="text-gray-600" />
        </ul>
        <div className="mt-8">
          <ul className="space-y-5">
            <li className="text-[1rem] text-white flex items-center gap-2">
              {" "}
              <span className="bg-hoverc p-2 rounded-full text-[1.2rem]  ">
                <IoMail />
              </span>
              info@uk-international.com
            </li>

            <li className="text-[1rem] text-white flex items-center gap-2">
              {" "}
              <span className=" text-[1rem] bg-hoverc p-2 rounded-full ">
                <FaPhone />
              </span>{" "}
              +447453357130
            </li>
            <li className="text-[1rem] text-white flex items-center gap-2">
              {" "}
              <span className=" text-[1rem] bg-hoverc p-2 rounded-full   ">
                <FaPhone />
              </span>{" "}
              +91 8181814007
            </li>
          </ul>
        </div>
        <div className=" flex mt-6 text-white space-x-8">
          <FaInstagram className=" text-[1.2rem]" />
          <FaFacebook className=" text-[1.2rem]" />
          <FaYoutube className=" text-[1.2rem]" />
          <FaTwitter className=" text-[1.2rem]" />
          <FaPinterest className=" text-[1.2rem]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
