import { Bars3Icon } from "@heroicons/react/16/solid";
import { FaGithub, FaInstagram } from "react-icons/fa";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] sticky z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <div className="flex items-center gap-4 cursor-pointer text-[25px] text-white font-bold">
          <a href="https://github.com/vithanh173" className="nav-link">
            <FaGithub size={28} />
          </a>
          <a href="https://www.instagram.com/thanhvi1129/" className="nav-link">
            <FaInstagram size={28} />
          </a>
        </div>
        <div className="nav-link">
          <a href="#home">Home</a>
        </div>
        <div className="nav-link">
          <a href="#about">About</a>
        </div>
        <div className="nav-link">
          <a href="#projects">Projects</a>
        </div>
        <div className="nav-link">
          <a href="#contact">Contact</a>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] h-[2rem] md:hidden cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
