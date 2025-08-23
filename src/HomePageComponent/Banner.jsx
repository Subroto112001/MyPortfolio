import React from "react";
import ProfilePic from "../assets/ProfilePic.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { PiBag } from "react-icons/pi";
import { CiLink, CiMail } from "react-icons/ci";
import { skillItem } from "../Helpers/ItemProvider";
import { GoDownload } from "react-icons/go";
import Resume from "./../assets/Subroto_Kumar_Barman.pdf";
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
    <div className="bg-bg1">
      <div className="container">
        <div className=" border-b-2 border-white py-10 sm:py-16">
          <div className="hidden sm:block">
            <div className="flex justify-center">
              <h2 className="text-brand2 BG-text-U">Developer</h2>
            </div>
          </div>

          <div className="flex flex-col gap-[64px] sm:flex-row items-center justify-between mt-[64px]">
            <div className="w-[340px] h-[520px] px-6 py-[37px] border-4 border-white flex flex-col items-center gap-6  gap- roundDiv outline-3 outline-brand1">
              {/* name and image */}
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="w-[100px] h-[100px] border-2 border-brand1 rounded-full ">
                  <img
                    src={ProfilePic}
                    alt={ProfilePic}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="Logo-M text-white text-center">Subroto</h2>
                  <h2 className="Code-M text-white text-center">
                    Full-stack developer
                  </h2>
                </div>
              </div>
              {/* adress information */}
              <div className="flex flex-col gap-4">
                {adressInfo.map((item) => (
                  <div className="flex flex-row gap-4" key={item.id}>
                    <span className="text-[16px] text-brand1">{item.icon}</span>
                    <h3 className="Code-M text-white">{item.info}</h3>
                  </div>
                ))}
                <div className="flex flex-row gap-[6px] flex-wrap">
                  {skillItem.map((item) => (
                    <div
                      className="rounded-[8px] bg-brand1 px-2 Code-M"
                      key={item.id}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
              {/* download button */}
              <div className="relative w-full">
                <a
                  href={Resume}
                  download={Resume}
                  className="w-[190px] py-2 left-4 rounded-4xl bg-white Button-U flex flex-row gap-4 items-center justify-center cursor-pointer absolute"
                >
                  Download CV{" "}
                  <span>
                    <GoDownload />
                  </span>
                </a>
              </div>
            </div>
            <div className=" flex flex-col gap-[64px] sm:flex-row items-center justify-between">
              {/* middle point */}
              <div className="flex flex-col gap-8">
                {/* my info */}
                <div className="flex flex-col">
                  <h3 className="text-brand1 Code-M mb-1">{"<h1>"}</h3>
                  <h3 className="H1-U text-white">Hey</h3>
                  <h3 className="H1-U text-white flex flex-row ">
                    I'm &nbsp; <span className="text-brand1">Sinan</span>
                  </h3>
                  <h3 className="H1-U text-white">Full-stack developer</h3>
                  <h3 className="text-brand1 Code-M mt-1">{"</h1>"}</h3>
                </div>
                {/* description */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-brand1 Code-M mb-1">{"<p>"}</h3>
                  <p className="Para-M text-white max-w-[700px]">
                    I help business grow by crafting amazing web experiences. If
                    you’re looking for a developer that likes to get stuff done,
                  </p>
                  <h3 className="text-brand1 Code-M mb-1">{"</p>"}</h3>
                </div>
                {/* lets talk */}
                <div className=" flex gap-4 justify-center items-center ">
                  <h3 className="H2-M text-brand1">Let's Talk</h3>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=subrotokumarbarman@gmail.com&su=Hello&body=I%20want%20to%20talk%20to%20you"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-grey text-2xl items-center justify-center flex cursor-pointer"
                  >
                    <CiMail />
                  </a>
                </div>
              </div>
              {/* last point */}
              <div className="w-[215px] h-[378px] bg-bg2 rounded-[80px] flex flex-col items-center justify-between  px-[32px] py-[48px]">
                <div className="flex items-center justify-center gap-4">
                  <span className="Number-M text-brand1">1</span>
                  <h3 className="Para-M text-white mx-w-[106px]">
                    Programming Language
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="Number-M text-brand1">6</span>
                  <h3 className="Para-M text-white mx-w-[106px]">
                    Development Tools
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="Number-M text-brand1">1</span>
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
