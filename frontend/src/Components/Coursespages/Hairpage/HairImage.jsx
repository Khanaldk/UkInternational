import React from "react";
import {
  hair1,
  hair2,
  hair3,
  hair4,
  hair5,
  hair6,
} from "../../../Images/Image";

const HairImage = () => {
  const makeupimage = [
    {
      id: 1,
      image: hair1,
    },
    {
      id: 2,
      image: hair2,
    },
    {
      id: 3,
      image: hair3,
    },
    {
      id: 4,
      image: hair4,
    },
    {
      id: 5,
      image: hair5,
    },
    {
      id: 6,
      image: hair6,
    },
  ];
  return (
    <section className="bg-black px-4  lg:px-10 py-10 lg:py-16">
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

export default HairImage;
