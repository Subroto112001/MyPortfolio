import React from "react";
import { contactIcon, contactworkItem } from "../Helpers/Icon";
import { SiPanasonic } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-bg1 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-16 left-12 w-24 h-24 rounded-full bg-brand1 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-32 h-32 rounded-full bg-brand1 animate-bounce"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-brand1 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-brand1 animate-bounce"
          style={{ animationDelay: "2.8s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="pt-[50px] sm:pt-[100px] pb-[20px] sm:pb-[30px]">
          {/* Section Header */}
          <div className="flex flex-row gap-3 justify-center items-center text-white animate-fade-in-down">
            <div
              className="animate-slide-in"
              style={{ animationDelay: "0.3s" }}
            >
              --------------
            </div>
            <div
              className="px-[20px] bg-brand1 rounded-full py-[60px] text-white flex justify-center items-center text-[21px] font-semibold hover:scale-110 transition-transform duration-300 animate-bounce-in"
              style={{ animationDelay: "0.5s" }}
            >
              {"</Contact>"}
            </div>
            <div
              className="animate-slide-in"
              style={{ animationDelay: "0.7s" }}
            >
              --------------
            </div>
          </div>

          {/* Description Section */}
          <div
            className="flex flex-col justify-center items-center mt-[40px] gap-2 Media-M text-white animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <span
              className="text-brand1 animate-typing hover:scale-125 transition-transform duration-300"
              style={{ animationDelay: "1s" }}
            >
              {"</>"}
            </span>
            <p
              className="mx-w-[400px] sm:max-w-[900px] text-justify sm:text-justify animate-fade-in"
              style={{ animationDelay: "1.2s" }}
            >
              I'm always open to collaborating on exciting projects and building
              innovative applications. Whether you need a developer to bring
              your ideas to life, fix complex UI issues, or design a smooth
              real-time experience with React, Tailwind, and Firebase — feel
              free to reach out.
            </p>
            <p
              className="animate-slide-in hover:text-brand1 transition-colors duration-300"
              style={{ animationDelay: "1.4s" }}
            >
              - Subroto Kumar Barman
            </p>
            <span
              className="text-brand1 animate-typing hover:scale-125 transition-transform duration-300"
              style={{ animationDelay: "1.6s" }}
            >
              {"</>"}
            </span>
          </div>

          {/* Contact Work Items */}
          <div
            className="flex justify-center items-center mt-[40px] animate-fade-in-up"
            style={{ animationDelay: "1.8s" }}
          >
            <div className="flex flex-row flex-wrap items-center justify-center gap-[40px] sm:gap-[20px] text-white Media-M">
              {contactworkItem.map((item, index) => (
                <a
                  href={item.link}
                  target="_blank"
                  key={item.id}
                  className="hover:text-brand1 hover:scale-110 transition-all duration-300 cursor-pointer animate-slide-in-right"
                  style={{ animationDelay: `${2 + index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-row justify-center items-center gap-6 sm:gap-10 mt-[40px]">
            {contactIcon.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                className="p-2 text-bg1 Logo-M bg-brand2 hover:bg-brand1 hover:text-white transition-all duration-300 rounded-full cursor-pointer hover:scale-125 hover:rotate-12 animate-bounce-in"
                key={item.id}
                style={{ animationDelay: `${2.5 + index * 0.1}s` }}
              >
                <span className="hover:animate-pulse">{item.icon}</span>
              </a>
            ))}
          </div>

          {/* Footer Bottom */}
          <div
            className="border-t mt-[40px] border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80 animate-fade-in"
            style={{ animationDelay: "3s" }}
          >
            <p
              className="Media-M animate-slide-in"
              style={{ animationDelay: "3.2s" }}
            >
              &copy; 2025 Portfolio. All rights reserved.
            </p>
            <div
              className="flex gap-6 animate-slide-in-right"
              style={{ animationDelay: "3.4s" }}
            >
              <a
                href="#privacy"
                className="hover:text-white Media-M hover:scale-105 transition-all duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-white Media-M hover:scale-105 transition-all duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="hover:text-white Media-M hover:scale-105 transition-all duration-300"
              >
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
