import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../CommonUI/Button";
import { testimonials } from "../../Data/data";

const Testimonials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(testimonials);
  }, [testimonials]);

  return (
    <section className="bg-black py-10 overflow-hidden">
      <div className="lg:flex justify-between items-center px-4 lg:px-40">
        <div>
          <h2 className="text-hoverc text-5xl pb-2 font-semibold">
            TESTIMONIALS
          </h2>
          <hr className="h-[2px] md:w-[100%] my-4 border-none bg-gradient-to-r -ml-28 from-black via-[#f906a0] to-black" />
        </div>
        <NavLink to={`/testimonials`}>
          <Button
            style={`border text-white border-hoverc [letter-spacing:2px] border-transparent py-2 px-8 bg-hoverc font-semibold rounded-xl cursor-pointer hover:bg-gray-800`}
            text={"VIEW MORE"}
          />
        </NavLink>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-35 py-5">
        {data.map((value, key) => (
          <div key={key} className="flex justify-center">
            <iframe
              className="w-full h-[350px] lg:h-[400px] border-2 border-white"
              src={value.url}
              title={`testimonial-${key}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
