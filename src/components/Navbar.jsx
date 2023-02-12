import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-white">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[var(--primary-blue)]">ONESHEET</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-[var(--primary-blue)] items-center">
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
            <button className="ml-4">Start free trial</button>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="block md:hidden" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={30} className="text-[var(--primary-blue)]" />
          ) : (
            <AiOutlineMenu size={30} className="text-[var(--primary-blue)]" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl">About</li>
            <li className="text-2xl">Features</li>
            <li className="text-2xl">Pricing</li>
            <li className="text-2xl">Contact</li>
            <button className="m-8">Start free trial</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
