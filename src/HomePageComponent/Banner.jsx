import React from "react";
import ProfilePic from "../assets/ProfilePic.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { PiBag } from "react-icons/pi";
import { CiLink, CiMail } from "react-icons/ci";
import { skillItem } from "../Helpers/ItemProvider";
import { GoDownload } from "react-icons/go";
import Resume from "./../assets/Subroto_Kumar_Barman.pdf";
import MyPhoto from "../assets/MyPhoto.JPG";

const Banner = () => {
  const adressInfo = [
    {
      id: 1,
      name: "email",
      info: "subrotokumarbarman@gmail.com",
      icon: <AiOutlineMail />,
    },
    {
      id: 2,
      name: "adress",
      info: "Mitali Road, Jigatola, Dhaka",
      icon: <IoLocationOutline />,
    },
    {
      id: 3,
      name: "jobCategory",
      info: "Fulltime",
      icon: <PiBag />,
    },
    {
      id: 4,
      name: "portfoliolink",
      info: "subrotokumarbarman.com",
      icon: <CiLink />,
    },
  ];

  return (
    <div className="bg-bg1 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-brand1 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-20 w-20 h-20 rounded-full bg-brand1 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-brand1 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="border-b-2 border-white py-10 sm:py-16">
          <div className="hidden sm:block">
            <div className="flex justify-center">
              <h2 className="text-brand2 BG-text-U animate-fade-in-down">
                Developer
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-[64px] sm:flex-row items-center justify-between mt-[64px]">
            {/* Profile Card with Animation */}
            <div className="w-[340px] h-[520px] px-6 py-[37px] border-4 border-white flex flex-col items-center gap-6 roundDiv outline-3 outline-brand1 animate-fade-in-left hover:shadow-2xl hover:shadow-brand1/20 transition-all duration-500 hover:scale-105">
              {/* name and image */}
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="w-[100px] h-[100px] border-2 border-brand1 rounded-full hover:border-brand1 transition-all duration-300 hover:scale-110 animate-float">
                  <img
                    src={MyPhoto}
                    alt={MyPhoto}
                    className="w-full h-full rounded-full object-cover transition-transform duration-300 hover:rotate-3"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2
                    className="Logo-M text-white text-center animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Subroto
                  </h2>
                  <h2
                    className="Code-M text-white text-center animate-fade-in"
                    style={{ animationDelay: "0.7s" }}
                  >
                    Full-stack developer
                  </h2>
                </div>
              </div>

              {/* address information */}
              <div className="flex flex-col gap-4">
                {adressInfo.map((item, index) => (
                  <div
                    className="flex flex-row gap-4 animate-slide-in-right hover:translate-x-2 transition-transform duration-300"
                    key={item.id}
                    style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                  >
                    <span className="text-[16px] text-brand1 hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <h3 className="Code-M text-white">{item.info}</h3>
                  </div>
                ))}
                <div
                  className="flex flex-row gap-[6px] flex-wrap animate-fade-in"
                  style={{ animationDelay: "1.3s" }}
                >
                  {skillItem.map((item, index) => (
                    <div
                      className="rounded-[8px] bg-brand1 px-2 Code-M hover:bg-opacity-80 hover:scale-105 transition-all duration-300 animate-bounce-in"
                      key={item.id}
                      style={{ animationDelay: `${1.5 + index * 0.1}s` }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* download button */}
              <div
                className="relative w-full animate-fade-in"
                style={{ animationDelay: "2s" }}
              >
                <a
                  href={Resume}
                  download={Resume}
                  className="w-[190px] py-2 left-4 rounded-4xl bg-white Button-U flex flex-row gap-4 items-center justify-center cursor-pointer absolute hover:bg-brand1 hover:text-white transition-all duration-300 hover:scale-105 group"
                >
                  Download CV{" "}
                  <span className="group-hover:translate-y-1 transition-transform duration-300">
                    <GoDownload />
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-[64px] sm:flex-row items-center justify-between">
              {/* middle point */}
              <div className="flex flex-col gap-8 animate-fade-in-up">
                {/* my info */}
                <div className="flex flex-col">
                  <h3 className="text-brand1 Code-M mb-1 animate-typing">
                    {"<h1>"}
                  </h3>
                  <h3
                    className="H1-U text-white animate-slide-in"
                    style={{ animationDelay: "0.3s" }}
                  >
                    Hey
                  </h3>
                  <h3
                    className="H1-U text-white flex flex-row animate-slide-in"
                    style={{ animationDelay: "0.5s" }}
                  >
                    I'm &nbsp;{" "}
                    <span className="text-brand1 hover:text-opacity-80 transition-colors duration-300">
                      Subroto
                    </span>
                  </h3>
                  <h3
                    className="H1-U text-white animate-slide-in"
                    style={{ animationDelay: "0.7s" }}
                  >
                    Full-stack developer
                  </h3>
                  <h3
                    className="text-brand1 Code-M mt-1 animate-typing"
                    style={{ animationDelay: "0.9s" }}
                  >
                    {"</h1>"}
                  </h3>
                </div>

                {/* description */}
                <div
                  className="flex flex-col gap-4 animate-fade-in"
                  style={{ animationDelay: "1.1s" }}
                >
                  <h3 className="text-brand1 Code-M mb-1">{"<p>"}</h3>
                  <p className="Para-M text-white max-w-[700px]">
                    I help business grow by crafting amazing web experiences. If
                    you're looking for a developer that likes to get stuff done,
                  </p>
                  <h3 className="text-brand1 Code-M mb-1">{"</p>"}</h3>
                </div>

                {/* lets talk */}
                <div
                  className="flex gap-4 justify-center items-center animate-fade-in"
                  style={{ animationDelay: "1.3s" }}
                >
                  <h3 className="H2-M text-brand1">Let's Talk</h3>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=subrotokumarbarman@gmail.com&su=Hello&body=I%20want%20to%20talk%20to%20you"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-grey text-2xl items-center justify-center flex cursor-pointer hover:bg-brand1 transition-all duration-300 hover:scale-110 hover:rotate-12 animate-pulse-gentle"
                  >
                    <CiMail />
                  </a>
                </div>
              </div>

              {/* last point - Stats Card */}
              <div className="w-[215px] h-[378px] bg-bg2 rounded-[80px] flex flex-col items-center justify-between px-[32px] py-[48px] animate-fade-in-right hover:shadow-lg hover:shadow-brand1/10 transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-center gap-4 hover:translate-y-1 transition-transform duration-300">
                  <span className="Number-M text-brand1 animate-counter">
                    1
                  </span>
                  <h3 className="Para-M text-white mx-w-[106px]">
                    Programming Language
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-4 hover:translate-y-1 transition-transform duration-300">
                  <span
                    className="Number-M text-brand1 animate-counter"
                    style={{ animationDelay: "0.5s" }}
                  >
                    6
                  </span>
                  <h3 className="Para-M text-white mx-w-[106px]">
                    Development Tools
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-4 hover:translate-y-1 transition-transform duration-300">
                  <span
                    className="Number-M text-brand1 animate-counter"
                    style={{ animationDelay: "1s" }}
                  >
                    1
                  </span>
                  <h3 className="Para-M text-white mx-w-[106px]">
                    Years of Experience
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
