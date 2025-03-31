import React, { useState } from "react";
<<<<<<< HEAD
import Logo from "../assets/Logo.png";
=======
import Logo from "/assets/Logo.png";
>>>>>>> 16f70041df7ce2151cf2dc42cd40c1876cfe266b
import { FaChevronRight } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-gray-950 -mb-7 z-50 w-full py-3 fixed">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-[170px] h-auto" />
          </a>
        </div>

        {/* Menu Section */}
        <nav className="hidden md:block">
          <ul className="flex gap-7 text-lg items-center font-semibold text-white">
            <a href="/">
              <li className="cursor-pointer hover:text-blue-400 transition">Home</li>
            </a>
            <a href="#about">
              <li className="cursor-pointer hover:text-blue-400 transition">About</li>
            </a>
            <a href="#education">
              <li className="cursor-pointer hover:text-blue-400 transition">
                Education & Experience
              </li>
            </a>
            <a href="#project">
              <li className="cursor-pointer hover:text-blue-400 transition">Projects</li>
            </a>
            <a href="#contact">
              {/* <button className="px-4 py-2 cursor-pointer rounded-md bg-blue-500 text-white flex items-center gap-2 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] shadow-blue-500 border-blue-400 border-2"> */}
              <button className="px-4 py-2 cursor-pointer rounded-md text-white flex items-center gap-2 shadow-blue-500 border-blue-400 border-2">
              
                Contact <FaChevronRight />
              </button>
            </a>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white text-4xl">
          {showMenu ? <HiMenuAlt3 onClick={toggleMenu} /> : <HiMenuAlt1 onClick={toggleMenu} />}
        </div>
      </div>

      {/* Responsive Menu */}
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
