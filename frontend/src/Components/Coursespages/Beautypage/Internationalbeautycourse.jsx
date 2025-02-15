import React, { useEffect, useState } from "react";
import {
  coursesdatas,
  careerOpportunity,
  courseDurationAndFee,
  haircoursesdatas,
  haircareerOpportunity,
  haircourseDurationAndFee,
} from "../../../Data/data";

const Internationalbeautycourse = () => {
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
        <h2 className="text-white text-5xl  font-semibold">
          THE INTERNATIONAL Beauty COURSE
        </h2>
        <hr className="h-[2px] w-[90%] m-2 border-none bg-gradient-to-r from-black via-[#f906a0] to-black" />
        <p className="text-white text-[1.1rem]  py-4 lg:w-[80%] ">
          Ensure your career as a professional artist and have mastery over the
          beauty course with the UK international, the prominent beauty academy.
          Our beauty courses with multiple components like Regular beauty
          services, basic to advanced facial treatments, advanced
          electrotherapy, hand and feet care, skin science, hygiene technique,
          sterilization and sanitation, product knowledge, personal grooming,
          facial massage techniques, and body polishing etc., are available for
          your career enhancement. We facilitate additional offers like the
          internship program, portfolio, placement assistance, etc that help you
          become an expert in this field. Hereafter you can join the course to
          join some beauty academy or for self-practice as an artist. We offer
          loans and other no-cost EMI facilities for your financial assistance
          while selecting the beauty course as well.
        </p>
      </div>
      <div className="lg:px-36">
        <h2 className="text-hoverc text-4xl  font-semibold">
          Beauty Course Design and Levels
        </h2>
        <p className="text-white py-2">
          Our beauty course has been designed after considering the levels of
          students and their professional careers, where you can choose the
          course to become a proficient artist in a beauty academy or to
          practice on a personal level. It will simultaneously help you be
          confident in all the segments of the beauty course.
        </p>
      </div>
      {/* coursesdata */}
      <div className="lg:px-36">
        <h2 className="text-hoverc text-4xl  font-semibold">
          Our Beauty Courses
        </h2>
        <p className="text-white py-2">
          There are two levels which have been designed as per the training,
          skills and requirements.
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

export default Internationalbeautycourse;
