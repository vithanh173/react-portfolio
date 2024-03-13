import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { About, Skill } from "../data/data";
import AboutItem from "./AboutItem";

const AboutSection = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem]">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="flex justify-center items-center text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] uppercase font-bold text-[#55e6a5] mb-[1rem]">
          About me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h1 className="flex justify-center text-lg md:text-4xl text-white">Skills</h1>
            <div className="mt-[3rem] flex flex-col gap-20">
              <Swiper
                slidesPerView={5}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={5000}
                modules={[Autoplay]}
                className="max-w-[80%]"
              >
                {Skill.map((skill, index) => (
                  <SwiperSlide key={index}>
                    <img src={skill.Image} alt={skill.name} className="w-[65px] h-[65px] " />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                slidesPerView={5}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                speed={5000}
                modules={[Autoplay]}
                className="max-w-[80%]"
              >
                {Skill.map((skill, index) => (
                  <SwiperSlide key={index}>
                    <img src={skill.Image} alt={skill.name} className="w-[65px] h-[65px] " />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div>
            <h1 className="flex justify-center text-lg md:text-4xl text-white">Education</h1>
            <div className="mt-[2rem] flex flex-col gap-4">
              {About.map((item) => (
                <AboutItem
                  key={item.title}
                  time={item.time}
                  title={item.title}
                  text={item.description}
                ></AboutItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
