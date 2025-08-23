import React from "react";

import Banner from "../HomePageComponent/Banner";
import About from "../HomePageComponent/About";
import Skill from "../HomePageComponent/Skill";
import Work from "../HomePageComponent/Work";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <Banner />
      <About />
      <Skill />
      <Work />
    </div>
  );
};

export default React.memo(HomePage);
