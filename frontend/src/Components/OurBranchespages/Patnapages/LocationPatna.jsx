import React from "react";

const LocationPatna = () => {
  return (
    <section className="bg-black p-4 lg:p-10">
      <div className="md:flex justify-around ">
        <div>
          <h2 className="text-hoverc text-4xl font-semibold py-5">PATNA</h2>
          <p className="text-white mb-4 w-[90%]">
            Address: 7th floor, SKU Centre, Boring Rd, Anandpuri, Patna, Bihar
            800001.
          </p>
          <span className="text-white ">Mobile No:8686860050</span>
        </div>
        <div className="lg:w-[50%] mt-4 h-96">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093667!2d144.96305771531684!3d-37.81627974202139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1fcd8af%3A0x3a98f17d29f6e69b!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sin!4v1632906797760!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationPatna;
