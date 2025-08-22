import React from "react";
import projectimage from '../assets/Project.png'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { swiperIcon } from "../Helpers/Icon";
const Work = () => {
  return (
    <div className="bg-bg2">
      <div className="container ">
        <div className="py-16 flex flex-col gap-[133px]">
          {/* art of page */}

          <div className="flex flex-row gap-3 justify-center items-center text-white">
            <div>--------------</div>
            <div className="px-[20px] bg-brand1 rounded-full py-[55px] text-white flex justify-center items-center text-[21px] font-semibold">
              {"</Project>"}
            </div>

            <div>--------------</div>
          </div>
          {/* art of page */}

          <div className=" flex flex-col justify-center items-center gap-[64px]">
            {/* heading */}
            <div className="flex flex-col justify-center items-center  gap-4">
              <h3 className="H1-U text-brand1 border-b-2 border-brand1 pb-4 px-2">
                Project
              </h3>
              <h4 className="Para-M text-white text-center">
                I had the pleasure of working with these awesome projects
              </h4>
            </div>
            {/* heading */}
            <div className="w-[450px] h-[400px] flex justify-center items-center  relative">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  {/* slide item */}

                  <div className="w-[450px] h-[300px] relative flex flex-col justify-center items-center">
                    <div className="w-[350px] h-[250px]">
                      <img
                        src={projectimage}
                        alt={projectimage}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <h3 className="text-white absolute bottom-9 Media-M ">
                      Ecommerce Project
                    </h3>
                    <a
                      href="https://exclusive-commerce-site.vercel.app/"
                      target="_blank"
                      className="flex flex-row justify-center items-center gap-2 Media-M text-white absolute top-4 right-10 cursor-pointer"
                    >
                      View Project
                      <span>
                        <FaArrowRightLong />
                      </span>
                    </a>
                  </div>
                  {/* slide item */}
                </SwiperSlide>
                <SwiperSlide>
                  {/* slide item */}

                  <div className="w-[450px] h-[300px] relative flex flex-col justify-center items-center">
                    <div className="w-[350px] h-[250px]">
                      <img
                        src={projectimage}
                        alt={projectimage}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-white absolute bottom-9 Media-M ">
                      Chating Aplication Project
                    </h3>
                    <a
                      href="https://chattingaplication.netlify.app/"
                      target="_blank"
                      className="flex flex-row justify-center items-center gap-2 Media-M text-white absolute top-4 right-10 cursor-pointer"
                    >
                      View Project
                      <span>
                        <FaArrowRightLong />
                      </span>
                    </a>
                  </div>
                  {/* slide item */}
                </SwiperSlide>
                <SwiperSlide>
                  {/* slide item */}

                  <div className="w-[450px] h-[300px] relative flex flex-col justify-center items-center">
                    <div className="w-[350px] h-[250px]">
                      <img
                        src={projectimage}
                        alt={projectimage}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-white absolute bottom-9 Media-M ">
                      Ecommerce Project
                    </h3>
                    <p className="flex flex-row justify-center items-center gap-2 Media-M text-white absolute top-4 right-10 cursor-pointer">
                      View Project
                      <span>
                        <FaArrowRightLong />
                      </span>
                    </p>
                  </div>
                  {/* slide item */}
                </SwiperSlide>
                <SwiperSlide>
                  {/* slide item */}

                  <div className="w-[450px] h-[300px] relative flex flex-col justify-center items-center">
                    <div className="w-[350px] h-[250px]">
                      <img
                        src={projectimage}
                        alt={projectimage}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-white absolute bottom-9 Media-M ">
                      Ecommerce Project
                    </h3>
                    <p className="flex flex-row justify-center items-center gap-2 Media-M text-white absolute top-4 right-10 cursor-pointer">
                      View Project
                      <span>
                        <FaArrowRightLong />
                      </span>
                    </p>
                  </div>
                  {/* slide item */}
                </SwiperSlide>
              </Swiper>
              {/* Custom buttons */}
              <div className="custom-prev w-10 h-10 bg-node  text-white rounded-full flex items-center justify-center cursor-pointer absolute top-1/2 left-[25px] sm:left-[-19px] -translate-y-1/2 z-10">
                {swiperIcon.prev}
              </div>
              <div className="custom-next w-10 h-10 bg-node hover:bg-primary-400 text-white rounded-full flex items-center justify-center cursor-pointer absolute top-1/2 right-[25px] sm:right-[-19px] -translate-y-1/2 z-10">
                {swiperIcon.next}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
