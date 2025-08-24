import React from "react";
import { FaBeer, FaBootstrap, FaCss3Alt,  FaNodeJs,  FaReact } from "react-icons/fa";
import { GrJs } from "react-icons/gr";
import { ImHtmlFive2 } from "react-icons/im";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiReactquery } from "react-icons/si";
import { TbBrandTypescript, TbDeviceDesktopCode } from "react-icons/tb";

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
      name: "BOOTSTRAP",
      icon: <FaBootstrap />,
      cssText: "text-bootstrap",
      bgcolor: "bg-bootstrap",
    },
    {
      id: 4,
      name: "TAILWIND",
      icon: <RiTailwindCssFill />,
      cssText: "text-tailwind",
      bgcolor: "bg-tailwind",
    },
    {
      id: 5,
      name: "JS",
      icon: <GrJs />,
      cssText: "text-js",
      bgcolor: "bg-js",
    },
    {
      id: 6,
      name: "REACT",
      icon: <FaReact />,
      cssText: "text-react",
      bgcolor: "bg-react",
    },
    {
      id: 8,
      name: "TYPESCRIPT",
      icon: <TbBrandTypescript />,
      cssText: "text-css",
      bgcolor: "bg-css",
    },
    {
      id: 9,
      name: "NODE",
      icon: <FaNodeJs />,
      cssText: "text-node",
      bgcolor: "bg-node",
    },
    {
      id: 10,
      name: "EXPRESS",
      icon: <SiExpress />,
      cssText: "text-gray-400",
      bgcolor: "bg-gray-400",
    },
  ];

  return (
    <div className="bg-bg1 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-12 w-28 h-28 rounded-full bg-brand1 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-16 w-20 h-20 rounded-full bg-brand1 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-24 left-1/4 w-16 h-16 rounded-full bg-brand1 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 right-8 w-12 h-12 rounded-full bg-brand1 animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container relative z-10">
        <div className="flex py-10 sm:py-16 flex-col gap-[64px] sm:gap-[133px]">
          {/* Section Header */}
          <div className="flex flex-row gap-3 justify-center items-center text-white animate-fade-in-down">
            <div className="animate-slide-in" style={{animationDelay: '0.3s'}}>--------------</div>
            <div className="px-[30px] bg-brand1 rounded-full py-[50px] text-white flex justify-center items-center text-[21px] font-semibold hover:scale-110 transition-transform duration-300 animate-bounce-in" style={{animationDelay: '0.5s'}}>
              {"</Skill>"}
            </div>
            <div className="animate-slide-in" style={{animationDelay: '0.7s'}}>--------------</div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col gap-[64px]">
            {/* Title and Description */}
            <div className="flex flex-col justify-center items-center gap-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <h3 className="H1-U text-brand1 border-b-2 border-brand1 pb-4 px-2 hover:scale-105 transition-transform duration-300 animate-slide-in" style={{animationDelay: '1s'}}>
                Skills
              </h3>
              <h4 className="Para-M text-white text-center animate-fade-in" style={{animationDelay: '1.2s'}}>
                I am striving to never stop learning and improving
              </h4>
            </div>

            {/* Skill Category Cards */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-[128px] sm:justify-center items-center">
              <div className="w-[300px] h-[150px] bg-brand2 rounded-lg border-l-7 border-css py-4 px-3 flex flex-col gap-2 justify-center items-center hover:shadow-lg hover:shadow-brand1/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-left" style={{animationDelay: '1.4s'}}>
                <span className="text-[32px] hover:scale-125 transition-transform duration-300 animate-float">
                  <TbDeviceDesktopCode />
                </span>
                <h3 className="Menu-M text-bg1">Font-End</h3>
                <p className="Para-M text-bg1 text-center">
                  HTML CSS BOOTSTRAP TAILWIND JS REACT TYPESCRIPT
                </p>
              </div>
              <div className="w-[300px] h-[150px] bg-brand2 rounded-lg border-l-7 border-css py-4 px-3 flex flex-col gap-2 justify-center items-center hover:shadow-lg hover:shadow-brand1/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-right" style={{animationDelay: '1.6s'}}>
                <span className="text-[32px] hover:scale-125 transition-transform duration-300 animate-float" style={{animationDelay: '0.5s'}}>
                  <TbDeviceDesktopCode />
                </span>
                <h3 className="Menu-M text-bg1">Back-End</h3>
                <p className="Para-M text-bg1">Node Express</p>
              </div>
            </div>

            {/* Skill Icons Grid */}
            <div className="flex flex-row flex-wrap gap-[50px] sm:gap-[90px] justify-center items-center mt-[40px]">
              {skilitemsdata.map((item, index) => (
                <div 
                  className="flex flex-col items-center gap-5 hover:scale-110 transition-all duration-300 cursor-pointer group animate-bounce-in" 
                  key={item.id}
                  style={{animationDelay: `${1.8 + index * 0.1}s`}}
                >
                  <div
                    className={`w-[90px] h-[90px] sm:w-[124px] sm:h-[124px] rounded-full ${item.bgcolor} text-white text-[36px] sm:text-[44px] flex justify-center items-center group-hover:shadow-lg group-hover:shadow-${item.bgcolor}/30 transition-all duration-300 group-hover:rotate-12 animate-float`}
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    {item.icon}
                  </div>
                  <h3 className={`${item.cssText} Menu-M sm:H2-M group-hover:scale-105 transition-transform duration-300`}>
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;