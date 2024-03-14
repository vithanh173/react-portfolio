import { Particle } from "./Particle";
import { TextEffect } from "./TextEffect";
import banner from "../assets/banner.jpg";
import me from "../assets/me.jpg";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const HeroSection = () => {
  return (
    <div
      id="home"
      style={{ backgroundImage: `url(${banner})` }}
      className={`h-[88vh] bg-cover bg-center`}
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I'm <span className="text-yellow-400">Châu Vĩ Thành</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-gray-200">
            My goal is to become a professional fullstack developer
          </p>
          <div className="mt-2 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 rounded-md">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button>
              <p></p>
            </button>
          </div>
        </div>
        <div className="w-[500px] h-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full">
          <img src={me} alt="Me" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
