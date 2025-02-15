import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import Button from "../../CommonUI/Button";
import { testimonials } from "../../Data/data";

const TestimonialsAll = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(testimonials);
  }, [testimonials]);
  return (
    <section className="bg-black py-10">
      <div className=" text-center ">
        <div>
          <h2 className="text-hoverc text-5xl pb-2  font-semibold">
            TESTIMONIALS
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-5 gap-4 px-5 lg:px-35">
        {data.map((value, key) => (
          <>
            <iframe
              className="w-full h-[350px] lg:h-[400px] border-2 border-white"
              src={value.url}
              title={`testimonial-${key}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsAll;
