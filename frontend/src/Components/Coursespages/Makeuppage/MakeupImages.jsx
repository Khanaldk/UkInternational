import React from "react";
import {
  makeup1,
  makeup2,
  makeup3,
  makeup4,
  makeup5,
  makeup6,
} from "../../../Images/Image";

const MakeupImages = () => {
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
    <section className="bg-black   px-10 py-16">
      <div className="grid grid-cols-3  gap-2">
        {makeupimage.map((value, index) => (
          <>
            <img src={value.image} alt="" width={480} />
          </>
        ))}
      </div>
    </section>
  );
};

export default MakeupImages;
