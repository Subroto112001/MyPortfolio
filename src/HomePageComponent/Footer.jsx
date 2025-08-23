import React from "react";
import { contactIcon } from "../Helpers/Icon";
import { SiPanasonic } from "react-icons/si";

const Footer = () => {
    const contactworkItem = [
      {  id: 1,
        name: "HTML"},
      {  id: 2,
        name: "CSS"},
      {  id: 3,
        name: "TAILWIND CSS"},
      {  id: 4,
        name: "JAVASCRIPT"},
      {  id: 5,
        name: "REACT"},
      {  id: 6,
        name: "NODE"},
      {  id: 7,
        name: "EXPRESS"},
    ]
  return (
    <div className="bg-bg1">
      <div className="container ">
        <div className="pt-[50px] sm:pt-[100px] pb-[20px] sm:pb-[30px]">
          {/* art of page */}

          <div className="flex flex-row gap-3 justify-center items-center text-white">
            <div>--------------</div>
            <div className="px-[20px] bg-brand1 rounded-full py-[60px] text-white flex justify-center items-center text-[21px] font-semibold">
              {"</Contact>"}
            </div>

            <div>--------------</div>
          </div>
          {/* art of page */}

          {/* description */}
          <div className="flex flex-col justify-center items-center mt-[40px] gap-2 Media-M text-white">
            <span className="text-brand1"> {"</>"}</span>
            <p className="mx-w-[400px] sm:max-w-[900px] text-justify sm:text-justify">
              I’m always open to collaborating on exciting projects and building
              innovative applications. Whether you need a developer to bring
              your ideas to life, fix complex UI issues, or design a smooth
              real-time experience with React, Tailwind, and Firebase — feel
              free to reach out.
            </p>
            <p>- Subroto Kumar Barman</p>
            <span className="text-brand1"> {"</>"}</span>
          </div>
          {/* description */}

          <div className="flex  justify-center items-center mt-[40px] ">
            <ul className="flex flex-row flex-wrap items-center justify-center gap-[40px] sm:gap-[20px] text-white Media-M">
              {contactworkItem.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>

          <div className=" flex flex-row justify-center items-center gap-6 sm:gap-10 mt-[40px]">
            {contactIcon.map((item) => (
              <span
                className="p-2 text-bg1 Logo-M bg-brand2 hover:bg-brand1 hover:text-white transition-all duration-300 rounded-full cursor-pointer "
                key={item.id}
              >
                {item.icon}
              </span>
            ))}
          </div>

          <div className="border-t mt-[40px] border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p className="Media-M">
              &copy; 2025 Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white Media-M">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white Media-M">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-white Media-M">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
