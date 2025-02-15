import React from "react";
import {
  makeup1,
  makeup2,
  makeup3,
  makeup4,
  makeup5,
  makeup6,
} from "../../Images/Image";

const OurGallery = () => {
  const makeupimage = [
    {
      id: 1,
      image: makeup1,
    },
    {
      id: 2,
      image: makeup2,
    },
    {
      id: 3,
      image: makeup3,
    },
    {
      id: 4,
      image: makeup4,
    },
    {
      id: 5,
      image: makeup5,
    },
    {
      id: 6,
      image: makeup6,
    },
  ];
  return (
    <section className="bg-black  p-4 lg:px-10 lg:py-16">
      <div className="grid place-items-center">
        <h2 className="text-white text-5xl pb-2  font-semibold"> GALLERY</h2>
        <hr className="h-[2px] w-[60%] mb-4 border-none bg-gradient-to-r  from-black via-[#f906a0] to-black" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-2">
        {makeupimage.map((value, index) => (
          <>
            <img src={value.image} alt="" width={480} />
          </>
        ))}
      </div>
    </section>
  );
};

export default OurGallery;
