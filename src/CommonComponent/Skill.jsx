import React from "react";
import { FaBeer, FaCss3Alt,  FaNodeJs,  FaReact } from "react-icons/fa";
import { GrJs } from "react-icons/gr";
import { ImHtmlFive2 } from "react-icons/im";
import { SiExpress, SiReactquery } from "react-icons/si";
import { TbDeviceDesktopCode } from "react-icons/tb";

const Skill = () => {
  const skilitemsdata = [
    {
      id: 1,
      name: "HTML",
      icon: <ImHtmlFive2 />,
      cssText: "text-html",
      bgcolor: "bg-html",
    },
    {
      id: 2,
      name: "CSS",
      icon: <FaCss3Alt />,
      cssText: "text-css",
      bgcolor: "bg-css",
    },
    {
      id: 3,
      name: "JS",
      icon: <GrJs />,
      cssText: "text-js",
      bgcolor: "bg-js",
    },
    {
      id: 4,
      name: "REACT",
      icon: <FaReact />,
      cssText: "text-react",

      bgcolor: "bg-react",
    },
    {
      id: 5,
      name: "NODE",
      icon: <FaNodeJs />,
      cssText: "text-node",
      bgcolor: "bg-node",
    },
    {
      id: 6,
      name: "EXPRESS",
      icon: <SiExpress />,
       cssText: "text-css",
      bgcolor: "bg-css"
    },
  ];
  return (
    <div className="bg-bg1">
      <div className="container py-16">
        <div className="flex flex-col gap-[133px]">
          {/* art of page */}

          <div className="flex flex-row gap-3 justify-center items-center text-white">
            <div>--------------</div>
            <div className="px-[30px] bg-brand1 rounded-full py-[50px] text-white flex justify-center items-center text-[21px] font-semibold">
              {"</Skill>"}
            </div>

            <div>--------------</div>
          </div>
          {/* art of page */}

          {/* details */}
          <div className="flex flex-col gap-[64px]">
            <div className="flex flex-col justify-center items-center  gap-4">
              <h3 className="H1-U text-brand1 border-b-2 border-brand1 pb-4 px-2">
                Skills
              </h3>
              <h4 className="Para-M text-white">
                I am striving to never stop learning and improving
              </h4>
            </div>
            {/* card of skill */}

            <div className="flex flex-row gap-[128px] justify-center items-center">
              <div className="w-[300px] h-[135px] bg-brand2 rounded-lg border-l-7 border-css py-4 px-6 flex flex-col gap-2 justify-center items-center">
                <span className="text-[32px]">
                  <TbDeviceDesktopCode />
                </span>
                <h3 className="Menu-M text-bg1">Font-End</h3>
                <p className="Para-M text-bg1">HTML CSS JS REACT</p>
              </div>
              <div className="w-[300px] h-[135px] bg-brand2 rounded-lg border-l-7 border-css py-4 px-6 flex flex-col gap-2 justify-center items-center">
                <span className="text-[32px]">
                  <TbDeviceDesktopCode />
                </span>
                <h3 className="Menu-M text-bg1">Back-End</h3>
                <p className="Para-M text-bg1">Node Express</p>
              </div>
            </div>
            {/* card of skill */}
            {/* icon os skill */}
            <div className="flex flex-row flex-wrap gap-[90px] justify-center items-center mt-[40px]">
              {skilitemsdata.map((item) => (
                <div className="flex flex-col items-center gap-5">
                  <div
                    className={`w-[144px] h-[144px] rounded-full ${item.bgcolor} text-white text-[54px] flex justify-center items-center`}
                  >
                    {item.icon}
                  </div>
                  <h3 className={`${item.cssText}  H2-M`}>{item.name}</h3>
                </div>
              ))}
            </div>
            {/* icon os skill */}
          </div>
          {/* details */}
        </div>
      </div>
    </div>
  );
};

export default Skill;
