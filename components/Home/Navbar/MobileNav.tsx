"use client";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay with Backdrop Blur */}
      <div
        onClick={closeNav}
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black/70 backdrop-blur-sm w-full h-screen`}
      ></div>

      {/* Navlinks Container */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gray-950 border-r border-gray-800 space-y-6 z-[1050]`}
      >
        {NavLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url} onClick={closeNav}>
              <p className="text-white hover:text-[#b6ff1c] w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-transparent hover:border-[#b6ff1c] transition-all duration-300 sm:text-[30px] font-medium uppercase tracking-wider">
                {link.label}
              </p>
            </Link>
          );
        })}

        {/* Close Icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[1.5rem] right-[1.5rem] sm:w-10 sm:h-10 w-8 h-8 text-white hover:text-[#b6ff1c] cursor-pointer transition-colors"
        />

        {/* Optional Branding at Bottom of Nav */}
        <div className="absolute bottom-10 left-12">
           <h1 className="text-lg font-bold text-white">
             WiriqTech<span className="text-[#b6ff1c]">.</span>
           </h1>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;