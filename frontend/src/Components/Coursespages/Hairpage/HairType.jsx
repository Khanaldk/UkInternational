import React, { useEffect, useState } from "react";
import { hairmakeupdata, makeupdata } from "../../../Data/data";

const HairType = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(makeupdata);
  }, [makeupdata]);
  return (
    <section className="bg-black grid place-items-center px-4 py-2 md:py-4">
      <div className="text-white grid grid-cols-1 lg:grid-cols-3 gap-3 mt-8">
        {hairmakeupdata.map((value, index) => (
          <>
            <p className="border-1 rounded-3xl text-[1.1rem] border-gray-500 text-center py-3 px-6">
              {value.makeupType}
            </p>
          </>
        ))}
      </div>
    </section>
  );
};

export default HairType;
