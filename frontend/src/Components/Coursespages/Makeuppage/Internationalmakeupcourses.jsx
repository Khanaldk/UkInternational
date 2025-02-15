import React, { useEffect, useState } from "react";
import {
  coursesdatas,
  careerOpportunity,
  courseDurationAndFee,
} from "../../../Data/data";

const Internationalmakeupcourses = () => {
  const [coursedata, setCourseData] = useState([]);
  const [careerdata, setCareerData] = useState([]);
  const [coursedurationdata, setCourseDurationData] = useState([]);

  useEffect(() => {
    if (coursesdatas) {
      setCourseData(coursesdatas);
    }
    if (courseDurationAndFee) {
      setCourseDurationData(courseDurationAndFee);
    }
    if (careerOpportunity) {
      setCareerData(careerOpportunity);
    }
  }, [courseDurationAndFee, coursesdatas, careerOpportunity]);

  return (
    <section className="bg-black py-10 px-4">
      <div className="grid place-items-center ">
        <h2 className="text-white text-3xl text-center md:text-justify md:text-5xl  font-semibold">
          THE INTERNATIONAL MAKEUP COURSE
        </h2>
        <hr className="h-[2px] w-[90%] m-2 border-none bg-gradient-to-r from-black via-[#f906a0] to-black" />
        <p className="text-white text-[1.1rem]  py-4 lg:w-[80%] ">
          Ensure a successful career as a professional makeup artist with
          mastery over all the components of makeup such as Skin preparation,
          foundation and concealer, powder, contouring and bronzing, blush,
          highlighter, eyeshadow, eyeliner, mascara, eyebrows, lips and all. At
          this Makeup Academy, you can learn all the techniques with a brief
          theory and explicit practical classes. Your professional makeup course
          is subsequently finished with the internship program where you can
          learn through the demonstration classes. Our trainer personally
          instructs and trains you in both levels of the makeup course i.e.,
          foundation to advanced classes. Our certificate makeup course includes
          various steps that can directly benefit our students to get a job or
          start their career as freelance artists.
        </p>
      </div>
      {/* coursesdata */}
      <div className="lg:px-36">
        <h2 className="text-hoverc text-4xl  font-semibold">Courses</h2>
        <p className="text-white py-2">
          As per the duration and levels of the makeup courses, it has been
          divided into two levels i.e., basic or foundation and advanced level.
          However, it is based on the choice of the students.{" "}
        </p>
        {coursedata.map((value, key) => (
          <>
            <div key={key} className=" space-y-2">
              <h3 className="text-hoverc text-3xl  font-semibold">
                {value.head}
              </h3>
              <p className="text-white">{value.para}</p>
            </div>
          </>
        ))}
      </div>
      {/* careerdata */}
      <div className="lg:px-36 mt-8">
        <h2 className="text-hoverc text-4xl  font-semibold">
          Career Opportunity
        </h2>
        <p className="text-white py-2">
          With the certificate makeup course at UK International, we facilitate
          various career opportunities from the beginning that directly help
          students ensure a future in this field. Our international makeup
          course includes various additional phenomena and special activities
          during the entire tenure. Some special offers and additional features
          are as follows:{" "}
        </p>
        {careerdata.map((value, key) => (
          <>
            <div key={key} className=" space-y-2">
              <h3 className="text-hoverc text-3xl  font-semibold">
                {value.head}
              </h3>
              <p className="text-white">{value.para}</p>
            </div>
          </>
        ))}
      </div>
      {/* courseDurationdata */}
      <div className="lg:px-36 mt-8">
        <h2 className="text-hoverc text-4xl  font-semibold">
          Course Duration And Fees
        </h2>
        <p className="text-white py-2">
          The duration of the international makeup course is mostly of three to
          six months. However, it can vary based on the types of courses such as
          integrated course will take longer time to be finished. Suppose, you
          have chosen permanent and semi permanent makeup course together, the
          duration will be longer.{" "}
        </p>
        {coursedurationdata.map((value, key) => (
          <>
            <div key={key} className=" space-y-2">
              <h3 className="text-hoverc text-3xl  font-semibold">
                {value.head}
              </h3>
              <p className="text-white">{value.para}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Internationalmakeupcourses;
