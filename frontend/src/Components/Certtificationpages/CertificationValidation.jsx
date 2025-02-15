import React from "react";
import Button from "../../CommonUI/Button";

const CertificationValidation = () => {
  return (
    <>
      <section className="bg-black -mt-10 py-10">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl mt-8 pb-4 text-white">
            CERTIFICATE VALIDATION
          </h2>
          <hr className="h-[4px] w-[100%]   border-none bg-gradient-to-r  from-black via-[#f906a0] to-black" />
          <form
            action=""
            className=" text-white grid place-items-center mt-4 px-4"
          >
            <div className="mb-3  w-full lg:w-[40%]">
              <label className="w-full " htmlFor="NAME">
                NAME:
              </label>
              <input
                className="w-full p-4 border-2"
                type="text"
                name=""
                id=""
                placeholder="Name"
              />
            </div>

            <div className="mb-3 w-full lg:w-[40%]">
              <label className="w-full " htmlFor="PHONE">
                PHONE:
              </label>
              <input
                className="w-full p-4 border-2"
                type="text"
                name=""
                id=""
                placeholder="Phone"
              />
            </div>

            <div className="mb-4  w-full lg:w-[40%]">
              <label className="w-full" htmlFor="CERTIFICATE ID">
                CERTIFICATE ID:
              </label>
              <input
                className="w-full p-4 border-2"
                type="text"
                name=""
                id=""
                placeholder="CERTIFICATE ID"
              />
            </div>
            <Button
              style={`border text-white border-hoverc  [letter-spacing:2px] border-transparent py-4 px-12 bg-hoverc font-semibold rounded-xl cursor-pointer hover:bg-gray-800`}
              text={"VALIDATE"}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default CertificationValidation;
