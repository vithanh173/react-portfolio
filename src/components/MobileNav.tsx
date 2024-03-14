import { XMarkIcon } from "@heroicons/react/20/solid";

type Props = {
  nav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnmation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnmation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">
          <a href="#home">Home</a>
        </div>
        <div className="nav-link-mobile">
          <a href="#about">About</a>
        </div>
        <div className="nav-link-mobile">
          <a href="#projects">Projects</a>
        </div>
        <div className="nav-link-mobile">
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div
        className="absolute z-[10000] top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400 cursor-pointer"
        onClick={closeNav}
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
