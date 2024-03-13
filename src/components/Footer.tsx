import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import { MapIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  return (
    <div className="pt-[4rem] pb-[4rem] bg-[#02050a]">
      <h1 className="flex justify-center items-center text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] uppercase font-bold text-[#55e6a5] mb-[1rem]">
        Contact
      </h1>
      <div className="mt-3 grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Address</h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Phone</h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">0708488173</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Email</h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">vithanh8173@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
