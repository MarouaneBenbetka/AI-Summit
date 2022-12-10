import { useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../data/data";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/style.css";

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={"z-20 sticky top-0 " + (color ? "bg-dark" : "bg-transparent")}
    >
      <div className="flex justify-between items-center  px-4 sm:px-8  py-4 md:px-4 lg:px-8">
        <div>
          <img src={logo} alt="logoImg" className="w-[10rem]" />
        </div>
        <ul className="hidden md:flex items-center md:gap-6 lg:gap-10">
          {navLinks.map((navLink, index) => (
            <li key={index} className="relative">
              <a
                href={index === 0 ? "#" : `#${navLink.id}`}
                className={"nav-link text-[18px]"}
              >
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-white bg-red rounded-[10px] font-semibold border-2 border-red hover:bg-dark hover:text-red transition">
            Register
          </button>
        </div>

        <div className="block md:hidden relative cursor-pointer">
          {navMobile ? (
            <FaTimes
              className="text-3xl"
              onClick={() => setNavMobile(!navMobile)}
            />
          ) : (
            <FaBars
              className="text-3xl"
              onClick={() => setNavMobile(!navMobile)}
            />
          )}

          {navMobile && (
            <div className="absolute flex flex-col z-20 items-center gap-4 bg-zinc-800 rounded-lg px-8 py-4 text-center top-10 right-0">
              <ul className="flex flex-col gap-10">
                {navLinks.map((navLink, index) => (
                  <li key={index} className="relative">
                    <a
                      href={`#${navLink.id}`}
                      onClick={() => setNavMobile(false)}
                      className="nav-link"
                    >
                      {navLink.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <button className="mt-2 px-4 py-2 text-white bg-red rounded-[10px] font-semibold border-2 border-red hover:bg-dark hover:text-red transition ">
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
