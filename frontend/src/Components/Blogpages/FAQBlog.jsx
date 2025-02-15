import React, { useEffect, useState } from "react";
import { FAQdata } from "../../Data/data";
import Button from "../../CommonUI/Button";
import { NavLink } from "react-router-dom";

const FAQBlog = () => {
  const [faqdata, setfaqData] = useState([]);
  const [openBlogIndex, setOpenBlogIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenBlogIndex(openBlogIndex === index ? null : index);
  };
  useEffect(() => {
    setfaqData(FAQdata);
  }, [FAQdata]);
  return (
    <>
      <section className="bg-black mt-6 ">
        <h2 className="text-white text-4xl py-4">Frequently Asked Questions</h2>
        {faqdata.map((value, index) => (
          <>
            <div key={index} className=" py-2">
              <h3
                onClick={() => toggleFAQ(index)}
                className="border-b-2 text-white py-4 cursor-pointer px-4 font-semibold text-[1.1rem]"
              >
                {value.question}
              </h3>
              {openBlogIndex === index && (
                <p className="px-4 py-3 border-2 text-[1.1rem] text-white border-gray-400">
                  {value.answer}
                </p>
              )}
            </div>
          </>
        ))}
        <div className="text-center mt-8">
          <NavLink to={`/makeup`}>
            {" "}
            <Button
              style={`bg-hoverc cursor-pointer text-white rounded-sm py-2 px-6`}
              text={"Enroll For Makeup Artist Course"}
            />
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default FAQBlog;
