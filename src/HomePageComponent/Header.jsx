import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RiDiscordLine } from "react-icons/ri";

const Header = () => {
  const headeritem = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "Blogs",
      link: "#",
    },
  ];
  const solcialItems = [
    {
      id: 1,
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/skbarman939/",
    },
    {
      id: 2,
      name: "Discord",
      icon: <RiDiscordLine />,
      link: "#",
    },
    {
      id: 3,
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/Subroto112001",
    },
  ];
  return (
    <div className="bg-bg1">
      <div className="container">
        <div className=" py-[20px] sm:py-[64px] flex justify-between items-center border-b border-white">
          {/* icon and name */}

          <div className="flex gap-2">
            <div className="text-brand1 Media-M">{"<C/>"}</div>
            <h3 className=" Media-M text-white">SK Barman</h3>
          </div>
          {/* icon and name */}

          {/* header items */}
          <div className="flex flex-row sm:gap-[64px] items-center">
            <div className=" flex flex-row gap-2">
              {headeritem.map((item) => (
                <a
                  href={item.link}
                  className=" Media-M text-brand1 cursor-pointer "
                  key={item.id}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="relative ml-4 sm:ml-0">
              <input
                type="text"
                className="bg-white rounded-xl w-[204px] outline-none hidden sm:block"
              />
              <span className=" text-white sm:text-black text-lg cursor-pointer sm:absolute sm:top-1/2 sm:right-6 -translate-y-1/2 ">
                <IoIosSearch />
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="flex flex-row gap-8">
                {solcialItems.map((item) => (
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex flex-row items-center gap-2"
                    key={item.id}
                  >
                    <span className="text-brand1 Button-U cursor-pointer">
                      {item.icon}
                    </span>
                    <h3 className="Media-M text-white cursor-pointer">
                      {item.name}
                    </h3>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* header items */}
        </div>
      </div>
    </div>
  );
};

export default Header;
