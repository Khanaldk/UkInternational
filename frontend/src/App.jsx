import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Aboutpages from "./Pages/Aboutpages";
import Coursespage from "./Pages/Coursespage";
import OurBranches from "./Pages/OurBranches";
import Blogpage from "./Pages/Blogpage";
import Contactpages from "./Pages/Contactpages";
import Gallerypages from "./Pages/Gallerypages";
import AccredationAwardpages from "./Pages/AccredationAwardpages";
import Makeuppages from "./Pages/Makeuppages";
import Hairpages from "./Pages/Hairpages";
import Beautypages from "./Pages/Beautypages";
import Patnapages from "./Pages/Patnapages";
import FeeSubmissionpages from "./Pages/FeeSubmissionpages";
import Applynowpage from "./Pages/Applynowpage";
import Placementpages from "./Pages/Placementpages";
import Testimonialspages from "./Pages/Testimonialspages";
import Franchiespages from "./Pages/Franchiespages";
import Certificationpages from "./Components/Homepages/Certificationpages";
import ScrollToTop from "./ScrollToTop";
import StudentRegistrationpages from "./Pages/StudentRegistrationpages";
import BlogDescriptionpages from "./Pages/BlogDescriptionpages";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fee-submission" element={<FeeSubmissionpages />} />
          <Route path="/apply-now" element={<Applynowpage />} />
          <Route path="/placements" element={<Placementpages />} />
          <Route path="/testimonials" element={<Testimonialspages />} />
          <Route path="/franchise" element={<Franchiespages />} />
          <Route path="/certifications" element={<Certificationpages />} />
          <Route
            path="/students-registrations"
            element={<StudentRegistrationpages />}
          />

          <Route path="/about" element={<Aboutpages />} />
          <Route
            path="/accredation-award"
            element={<AccredationAwardpages />}
          />

          <Route path="/courses" element={<Coursespage />} />
          <Route path="/makeup" element={<Makeuppages />} />
          <Route path="/hair" element={<Hairpages />} />
          <Route path="/beauty" element={<Beautypages />} />

          <Route path="/gallery" element={<Gallerypages />} />
          <Route path="/ourbranches" element={<OurBranches />} />
          <Route path="/patna" element={<Patnapages />} />

          <Route path="/blogs" element={<Blogpage />} />
          <Route path="/blog-description" element={<BlogDescriptionpages />} />

          <Route path="/contact" element={<Contactpages />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
