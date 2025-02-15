import React, { useEffect, useState } from "react";
import {
  coursesdatas,
  careerOpportunity,
  courseDurationAndFee,
  haircoursesdatas,
  haircareerOpportunity,
  haircourseDurationAndFee,
} from "../../../Data/data";

const Internationalhairdressingcourses = () => {
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
    <section className="bg-black px-5 py-10">
      <div className="grid place-items-center ">
        <h2 className="text-white text-center md:text-justify text-3xl md:text-5xl  font-semibold">
          THE INTERNATIONAL HAIR DRESSING COURSE
        </h2>
        <hr className="h-[2px] w-[90%] m-2 border-none bg-gradient-to-r from-black via-[#f906a0] to-black" />
        <p className="text-white text-[1.1rem]  py-4 lg:w-[80%] ">
          UK International is introducing its professional hair dressing course
          for the freshers and also for those who have completed the basic level
          course. With the additional features and special activities related to
          career opportunities, various things can prepare and transform the
          students to start their businesses as freelancers or to establish a
          career with a job in a prominent hair academy. We facilitate
          internships in well-known academies where you can learn from experts
          whether in practical or live demonstration classes. Our additional
          features like portfolio, placement assistance, digital awareness, and
          special demonstration classes propel the students while getting any
          job or pursuing freelance work. We have different levels of hair
          dressing course which are suitable as per the experience and those
          willing to finish the integrated course can also pursue the hair
          dressing course with the combo offer as well. With the basic to
          advanced hair dressing course, you can ensure a secure and established
          professional life because we train our students for the best career
          opportunities.
        </p>
      </div>
      {/* coursesdata */}
      <div className="lg:px-36">
        <h2 className="text-hoverc text-4xl  font-semibold">
          Hair Dressing Courses: Foundation & Advanced
        </h2>
        <p className="text-white py-2">
          Like other courses, we have mainly two levels for the hair dressing
          course which is categorized based on the foundation and higher level.
        </p>
        {haircoursesdatas.map((value, key) => (
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
          Career Options And Special Activities
        </h2>
        <p className="text-white py-2">
          As a prominent hair academy, we always think about the career
          opportunities for our students. We always try to help them ensure
          their future as professional artists, and for that, we have some
          specific schemes, and these are.{" "}
        </p>
        {haircareerOpportunity.map((value, key) => (
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
          Hair Dressing Course Duration And Fees
        </h2>
        <p className="text-white py-2">
          The Hair Dressing Course has been designed as per the level where its
          duration is fixed like basic to advanced. You can ensure the skills as
          per your needs and basic knowledge. The program is fixed with a “three
          to four months” duration and the fees for both levels are similar,
          however, it depends on the selection of the hair dressing course,
          i.e., with the combo offers, it becomes slightly less with additional
          benefits.{" "}
        </p>
        {haircourseDurationAndFee.map((value, key) => (
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

export default Internationalhairdressingcourses;
