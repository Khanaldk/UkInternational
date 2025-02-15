import React, { useEffect, useState } from "react";
import { FAQdata } from "../../../Data/data";

const FAQ = () => {
  const [faqdata, setfaqData] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    setfaqData(FAQdata);
  }, [FAQdata]);
  return (
    <>
      <section className="bg-black px-36">
        <h2 className="text-white text-4xl py-4">Frequently Asked Questions</h2>
        {faqdata.map((value, index) => (
          <>
            <div key={index} className=" py-2">
              <h3
                onClick={() => toggleFAQ(index)}
                className="bg-hoverc text-white py-4 cursor-pointer px-4 font-semibold text-[1.1rem]"
              >
                {value.question}
              </h3>
              {openIndex === index && (
                <p className="px-4 py-3 border-3 text-[1.1rem] text-white border-hoverc">
                  {value.answer}
                </p>
              )}
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default FAQ;
