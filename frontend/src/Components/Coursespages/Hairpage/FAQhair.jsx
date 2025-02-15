import React, { useEffect, useState } from "react";
import { FAQdata, FAQhairdata } from "../../../Data/data";

const FAQhair = () => {
  const [faqdata, setfaqData] = useState([]);
  const [openhairIndex, setOpenhairIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenhairIndex(openhairIndex === index ? null : index);
  };
  useEffect(() => {
    setfaqData(FAQdata);
  }, [FAQdata]);
  return (
    <>
      <section className="bg-black px-5 h-full pb-4 lg:px-36">
        <h2 className="text-white text-4xl py-4">Frequently Asked Questions</h2>
        {FAQhairdata.map((value, index) => (
          <>
            <div key={index} className=" py-2">
              <h3
                onClick={() => toggleFAQ(index)}
                className="bg-hoverc text-white py-4 cursor-pointer px-4 font-semibold text-[1.1rem]"
              >
                {value.question}
              </h3>
              {openhairIndex === index && (
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

export default FAQhair;
