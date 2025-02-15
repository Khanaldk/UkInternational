import React from "react";
import Button from "../../CommonUI/Button";

const CommentForm = () => {
  return (
    <section className=" mt-2 lg:mt-14">
      <div>
        <h2 className="text-white py-4 text-2xl">Leave a Reply</h2>
        <hr className="text-gray-400 w-[40%] lg:w-[15%]" />
      </div>
      <div className="border p-6 border-gray-300 rounded-lg lg:w-[70%] mt-4">
        <form action="">
          <div className="flex flex-col">
            <label className="text-white w-full" htmlFor="Comment">
              Comment*
            </label>
            <input
              type="text"
              name="Comment"
              id=""
              className="bg-white p-8 rounded-2xl w-full"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white w-full" htmlFor="Name">
              Name*
            </label>
            <input
              type="text"
              name="Name"
              id=""
              className="bg-white p-3 rounded-2xl w-full"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white w-full" htmlFor="Email">
              Email*
            </label>
            <input
              type="text"
              name="Email"
              id=""
              className="bg-white p-3 rounded-2xl w-full"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-white w-full" htmlFor="Website">
              Website*
            </label>
            <input
              type="text"
              name="Webiste"
              id=""
              className="bg-white p-3 rounded-2xl w-full"
            />
          </div>
          <div className="flex space-x-2 mb-2">
            <input type="checkbox" name="" id="" />
            <p className="text-white">
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>
          <Button
            style={`bg-hoverc px-8 py-3 rounded-4xl text-white`}
            text={"Post Comment"}
          />
        </form>
      </div>
    </section>
  );
};

export default CommentForm;
