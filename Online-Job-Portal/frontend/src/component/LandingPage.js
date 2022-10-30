import React from "react";
import NavBar from "./SubCompo/NavBar";
import Carousel from "./SubCompo/Carousel";
import JobCategories from "./SubCompo/JobCategories";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./SubCompo/Footer";

import Recruiters from "./SubCompo/Recruiters";
import Guide from "./SubCompo/Guide";

function LandingPage() {
  return (
    <div>
      {/* <div className="NavigationBar">
        {" "}
        <NavBar> </NavBar>{" "}
      </div>{" "} */}
      <div className="SlidingCarausal">
        {" "}
        <Carousel> </Carousel>{" "}
      </div>{" "}
      <div className="JobCateg">
        <JobCategories />
      </div>
      <Recruiters />
      <Guide />
      <Footer />{" "}
    </div>
  );
}

export default LandingPage;
