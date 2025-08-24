import React from "react";
import myphoto from "../assets/Mewithcar.jpg";

const About = () => {
  return (
    <div className="bg-bg1 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 right-10 w-24 h-24 rounded-full bg-brand1 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-16 w-16 h-16 rounded-full bg-brand1 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-8 w-12 h-12 rounded-full bg-brand1 animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="py-10 sm:py-16 flex flex-col gap-[64px] sm:gap-[133px]">
          {/* Section Header */}
          <div className="flex flex-row gap-3 justify-center items-center text-white animate-fade-in-down">
            <div
              className="animate-slide-in"
              style={{ animationDelay: "0.3s" }}
            >
              --------------
            </div>
            <div
              className="px-[20px] py-[50px] bg-brand1 rounded-full text-white flex justify-center items-center text-[21px] font-semibold hover:scale-110 transition-transform duration-300 animate-bounce-in"
              style={{ animationDelay: "0.5s" }}
            >
              {"</About>"}
            </div>
            <div
              className="animate-slide-in"
              style={{ animationDelay: "0.7s" }}
            >
              --------------
            </div>
          </div>

          {/* About Section */}
          <div className="flex flex-col sm:flex-row gap-[64px] sm:gap-0 items-center justify-between">
            {/* Content Section */}
            <div className="flex flex-col gap-[64px] animate-fade-in-left">
              {/* About Me Title */}
              <div
                className="w-[230px] sm:w-[370px] h-[70px] sm:h-[105px] borderroundAbout border-4 border-brand1 flex justify-center items-center hover:shadow-lg hover:shadow-brand1/20 transition-all duration-500 hover:scale-105 animate-slide-in-right"
                style={{ animationDelay: "0.8s" }}
              >
                <h3 className="H2-U sm:H1-U text-white">About Me</h3>
              </div>

              {/* Description Box */}
              <div
                className="py-[24px] px-[40px] flex flex-col justify-center gap-2 w-[350px] sm:w-[650px] borderdescriton border-4 border-brand1 hover:shadow-lg hover:shadow-brand1/10 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: "1s" }}
              >
                <h3
                  className="text-brand1 Code-M animate-typing"
                  style={{ animationDelay: "1.2s" }}
                >
                  {"<p>"}
                </h3>
                <h3
                  className="Logo-M text-brand1 animate-slide-in"
                  style={{ animationDelay: "1.4s" }}
                >
                  Hello!
                </h3>

                <div className="flex flex-col gap-2">
                  <p
                    className="text-white Para-M animate-fade-in"
                    style={{ animationDelay: "1.6s" }}
                  >
                    My name is Subroto Kumar Barman and I specialize in web
                    developement that utilizes
                    <span className="text-brand1 Code-M hover:text-opacity-80 transition-colors duration-300">
                      {" "}
                      HTML
                    </span>
                    ,
                    <span className="text-brand1 Code-M hover:text-opacity-80 transition-colors duration-300">
                      {" "}
                      CSS
                    </span>
                    ,
                    <span className="text-brand1 Code-M hover:text-opacity-80 transition-colors duration-300">
                      {" "}
                      JS
                    </span>
                    , and
                    <span className="text-brand1 Code-M hover:text-opacity-80 transition-colors duration-300">
                      {" "}
                      REACT
                    </span>{" "}
                    etc.
                  </p>
                  <p
                    className="text-white Para-M animate-fade-in"
                    style={{ animationDelay: "1.8s" }}
                  >
                    I am a highly motivated individual and eternal optimist
                    dedicated to writing clear, concise, robust code that works.
                    Striving to never stop learning and improving.
                  </p>
                  <p
                    className="text-white Para-M animate-fade-in"
                    style={{ animationDelay: "2s" }}
                  >
                    When I'm not coding, I am writing bolgs, reading, or picking
                    up some new hands-on art project like photography.
                  </p>
                  <p
                    className="text-white Para-M animate-fade-in"
                    style={{ animationDelay: "2.2s" }}
                  >
                    I like to have my perspective and belief systems challenged
                    so that I see the world through new eyes.
                  </p>
                </div>

                <h3
                  className="text-brand1 Code-M mb-1 animate-typing"
                  style={{ animationDelay: "2.4s" }}
                >
                  {"</p>"}
                </h3>
              </div>
            </div>

            {/* Image Section */}
            <div
              className="w-[380px] h-[490px] rounded-2xl animate-fade-in-right hover:scale-105 transition-transform duration-500 group"
              style={{ animationDelay: "1.2s" }}
            >
              <img
                src={myphoto}
                alt={myphoto}
                className="h-full w-full rounded-xl object-cover group-hover:rotate-1 transition-transform duration-500 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
