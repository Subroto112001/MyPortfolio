import React from "react";
import myphoto from "../assets/Mewithcar.jpg";
const About = () => {
  return (
    <div className="bg-bg1">
      <div className="container ">
        <div className="py-10 sm:py-16 flex flex-col gap-[64px] sm:gap-[133px]">
          <div className="flex flex-row gap-3 justify-center items-center text-white">
            <div>--------------</div>
            <div className="px-[20px] py-[50px] bg-brand1 rounded-full  text-white flex justify-center items-center text-[21px] font-semibold">
              {"</About>"}
            </div>

            <div>--------------</div>
          </div>
          {/* about section */}
          <div className="flex flex-col sm:flex-row gap-[64px] sm:gap-0  items-center justify-between">
            <div className="flex flex-col gap-[64px]">
              <div className="w-[230px] sm:w-[370px] h-[70px] sm:h-[105px] borderroundAbout border-4 border-brand1 flex justify-center items-center">
                <h3 className=" H2-U sm:H1-U text-white">About Me</h3>
              </div>
              <div className="py-[24px] px-[40px]  flex flex-col justify-center gap-2 w-[350px] sm:w-[900px]  borderdescriton border-4 border-brand1">
                <h3 className="text-brand1 Code-M ">{"<p>"}</h3>
                <h3 className="Logo-M text-brand1">Hello!</h3>
                <div className="flex flex-col gap-2">
                  <p className="text-white Para-M ">
                    My name is Subroto Kumar Barman and I specialize in web
                    developement that utilizes
                    <span className="text-brand1 Code-M "> HTML</span>,
                    <span className="text-brand1 Code-M "> CSS</span>,
                    <span className="text-brand1 Code-M "> JS</span>, and
                    <span className="text-brand1 Code-M "> REACT</span> etc.
                  </p>
                  <p className="text-white Para-M ">
                    I am a highly motivated individual and eternal optimist
                    dedicated to writing clear, concise, robust code that works.
                    Striving to never stop learning and improving.
                  </p>
                  <p className="text-white Para-M ">
                    When I'm not coding, I am writing bolgs, reading, or picking
                    up some new hands-on art project like photography.
                  </p>
                  <p className="text-white Para-M ">
                    I like to have my perspective and belief systems challenged
                    so that I see the world through new eyes.
                  </p>
                </div>
                <h3 className="text-brand1 Code-M mb-1">{"</p>"}</h3>
              </div>
            </div>
            {/* image section */}
            <div className="w-[380px] h-[490px] rounded-2xl">
              <img
                src={myphoto}
                alt={myphoto}
                className="h-full w-full rounded-xl"
              />
            </div>
            {/* image section */}
          </div>
          {/* about section */}
        </div>
      </div>
    </div>
  );
};

export default About;
