import React from "react";
import { ceo } from "../../Images/Image";

const AboutCEO = () => {
  return (
    <section className="bg-black px-5 lg:px-30 py-10">
      <div className="lg:flex space-x-10 ">
        <img src={ceo} alt="chairman" />
        <div>
          <h1 className="text-5xl pb-2 text-hoverc font-semibold">CEO</h1>
          <hr className="h-[2px] w-[50%] -ml-10 mt-2 border-none bg-gradient-to-r text-hoverc from-black via-[#f906a0] to-black" />
          <h1 className=" text-2xl pb-2 text-hoverc  font-semibold">
            Dr. Uzma Khan
          </h1>
          <p className="text-white mt-5">
            UK International London Beauty School is a Brain Child of Dr. Uzma
            khan. At UK International London Beauty School we go above and
            beyond to render the best education possible in Makeup, Skin, Hair
            Dressing, Hair Styling, and Nail Artistry we also invest valuable
            experience in candidates & prepare them in Digital marketing,
            Personality development and Professional ethics to help them adapt
            the professionalism to respect their client’s safety & customer
            service. As an entrepreneur Dr. Khan’s Goal is to make students
            realise their aspirations for a profession in which they will
            genuinely enjoy what they do. The most cutting-edge cosmetic tools
            are used in the UK International London Beauty School to help you
            sharpen your abilities & polish your expertise. Dr. Khan also wishes
            for her students to have a real passion for the art of Hair, Makeup,
            Skin, Nails & Cosmetology. She feels that every owner wants to watch
            their students grow & blossom everyday. She believes that once it is
            completed, her objective of owning a success international school
            will be attained. Join us and get Trained at UK International London
            Beauty School where you will meet renowned makeup artists,
            industries elite, and some of the largest beauty pageants, fashion
            show celebrities, and major participants in this sector. UK
            International London Beauty School is the best place to your
            professional career. We are more than just a makeup school, we help
            thousands of people launch their profession by collaborating with
            industry contacts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCEO;
