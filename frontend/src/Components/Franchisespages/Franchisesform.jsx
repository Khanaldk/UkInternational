import React, { useState } from "react";
import { logobg, downlogo } from "../../Images/Image";
import Button from "../../CommonUI/Button";

const Franchisesform = () => {
  const [selectedBudget, setSelectedBudget] = useState("");

  const budgetOptions = [
    "Under $500",
    "$500 - $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "Over $20,000",
  ];

  return (
    <section
      className="-mt-5 py-4  lg:py-0 lg:-mt-0"
      style={{
        backgroundImage: `url(${logobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      <div className="lg:flex justify-around items-center px-4 lg:px-20  lg:space-x-16">
        <div>
          <h2 className="text-4xl md:text-5xl text-center my-4 lg:my-6 w-[80%] text-white font-semibold">
            FRANCHISE
          </h2>
          <p className="text-white py-4 lg:w-[70%]">
            Join the UK International franchise and become a leader in beauty
            education. Our established brand, comprehensive support, and proven
            business model ensure your success. Empower aspiring makeup artists
            with our top-notch courses and tap into the growing beauty industry.
            Start your profitable journey with UK International today!
          </p>
          <div className="md:flex items-center space-x-10">
            <div className="grid place-items-center">
              <img
                className="bg-black px-8 py-6 "
                src={downlogo}
                alt="logouk"
                width={280}
              />
            </div>
            <div className="space-y-8">
              <div>
                1<p className="text-hoverc text-5xl">13</p>
                <span className="text-white text-xl">
                  Franchise in Pan India
                </span>
              </div>
              <div>
                <hr className="h-2  w-50 lg:w-0 text-white" />
              </div>
              <div>
                <p className="text-hoverc text-5xl">10 </p>
                <span className="text-white text-xl">City Covered</span>
              </div>
            </div>
          </div>
        </div>
        <form
          action=""
          className="space-y-10 bg-black mt-5 lg:mt-36 mb-10 p-4 lg:p-10 w-[100%]"
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
            placeholder="Email Address"
          />
          <div className=" space-y-5 lg:space-y-0 space-x-4">
            <input
              type="text"
              name=""
              id=""
              className="placeholder:text-white  text-white focus:outline-none w-full lg:w-[48%] border-b-2 p-4  border-white"
              placeholder="Enter Phone"
            />
            <select
              className="p-4 placeholder:text-white text-white w-full lg:w-[48%]  rounded-lg border-b-2  focus:outline-none  cursor-pointer"
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
            >
              <option value="" disabled>
                Your Budget
              </option>
              {budgetOptions.map((budget, index) => (
                <option
                  className="text-white bg-black"
                  key={index}
                  value={budget}
                >
                  {budget}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            name=""
            id=""
            className="placeholder:text-white  text-white focus:outline-none w-[100%] border-b-2 p-4  border-white"
            placeholder="Enter a City"
          />
          <textarea
            name=""
            id=""
            className="placeholder:text-white h-28  text-white focus:outline-none w-[100%] border-b-2 p-4 border-white"
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

export default Franchisesform;
