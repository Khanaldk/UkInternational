import React, { useEffect, useState } from "react";
import { makeupdata } from "../../../Data/data";

const MakeupType = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(makeupdata);
  }, [makeupdata]);
  return (
    <section className="bg-black grid place-items-center py-4">
      <div className="text-white grid grid-cols-3 gap-3 mt-8">
        {data.map((value, index) => (
          <>
            <p className="border-1 rounded-3xl text-[1.1rem] border-gray-500 text-center py-3 px-12">
              {value.makeupType}
            </p>
          </>
        ))}
      </div>
    </section>
  );
};

export default MakeupType;
