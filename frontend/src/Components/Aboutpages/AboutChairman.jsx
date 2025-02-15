import React from "react";
import { chairmanimg } from "../../Images/Image";

const AboutChairman = () => {
  return (
    <section className="bg-black px-5 lg:px-30 py-5">
      <div className="lg:flex space-x-10 ">
        <img src={chairmanimg} alt="chairman" />
        <div>
          <h1 className="text-5xl pb-2 text-hoverc font-semibold">CHAIRMAN</h1>
          <hr className="h-[2px] w-[70%] lg:-ml-10 mt-2 border-none bg-gradient-to-r text-hoverc from-black via-[#f906a0] to-black" />
          <h1 className=" text-2xl pb-2 text-hoverc  font-semibold">
            Mr. Abdul Khan
          </h1>
          <p className="text-white mt-5">
            Mr. Abdul Khan Established UK International london beauty school
            with the vision of educating students and offering a ladder for
            professional success with a motive of imparting international
            quality of education with a non - profitable mentality. His track
            record of succesfully managing a variety of businesses in emerging
            markets over a 20 years period including Real Estate, Import &
            Export, Medical Tourism, and last but not the least, An NGO for
            child education - has inspired him to launch a start-up to boost
            youth productivity & performance and assist them in realising their
            long - term goals. With more than 5000+ students aspiring to make a
            living by spreading joy & providing beauty to the world, we help our
            students in variety of ways. we help our students advance, think
            independently, and accomplish their goals by assisting them. our
            well-trained facilities and welcoming environment is our foundation
            of strength. I warmly welcome the students to be associated with
            UKIBS with full confidence and have a faith in the wonderful world
            of opportunities So, with immense warmth we invite you to bring your
            dreams into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutChairman;
