import React from "react";
import { logobg, downlogo } from "../../Images/Image";
import Button from "../../CommonUI/Button";

const InquiryNow = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${logobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      <div className="md:flex justify-around items-center lg:px-20 -mt-10 md:mt-0 lg:space-x-16">
        <div className="text-center">
          <h2 className="text-5xl my-10 text-white">
            ENQUIRY <span className="text-hoverc">NOW</span>{" "}
          </h2>
          <div className="grid place-content-center">
            <img src={downlogo} alt="logouk" width={280} />
          </div>
        </div>
        <form
          action=""
          className="space-y-10 bg-black mt-10 md:mt-36 mb-10 p-10 md:w-[50%]"
        >
          <input
            className="placeholder:text-white text-white focus:outline-none w-[100%] border-b-2 p-4  border-white"
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
          <input
            type="email"
            name=""
            id=""
            className="placeholder:text-white  text-white focus:outline-none w-[100%] border-b-2 p-4 border-white"
            placeholder="Email Id"
          />
          <input
            type="text"
            name=""
            id=""
            className="placeholder:text-white  text-white focus:outline-none w-[100%] border-b-2 p-4  border-white"
            placeholder="Enter Phone"
          />
          <textarea
            name=""
            id=""
            className="placeholder:text-white  text-white focus:outline-none w-[100%] border-b-2 p-4 border-white"
            placeholder="Write a Message"
          ></textarea>
          <Button
            style={`border border-hoverc [letter-spacing:2px] text-white border-transparent py-4 px-10 bg-hoverc font-semibold rounded-xl cursor-pointer hover:bg-gray-800`}
            text={"SUBMIT"}
          />
        </form>
      </div>
    </section>
  );
};

export default InquiryNow;
