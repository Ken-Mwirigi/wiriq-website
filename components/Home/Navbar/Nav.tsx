"use client";
import ThemeToogler from "@/components/Helper/ThemeToogler";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { usePathname } from "next/navigation";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const textColor = navBg || pathname !== "/" 
    ? "text-gray-900 dark:text-white" 
    : "text-white";

  const menuIconColor = navBg || pathname !== "/"
    ? "text-green-600 dark:text-[#b6ff1c]"
    : "text-[#b6ff1c]";

  return (
    <div
      className={`transition-all duration-200 h-[12vh] z-[100] fixed w-full ${
        navBg ? "bg-white dark:bg-gray-950 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        
        <div className="flex items-center space-x-2">
          {/* Logo and Branding */}
<Link href="#home" className="flex items-center space-x-2 cursor-pointer">
  <div className="w-10 h-10 relative rounded-full overflow-hidden">
    <Image 
      src="/logo.png" 
      alt="WiriqTech Logo" 
      fill 
      className="object-cover" 
    />
  </div>
  <h1 className="text-xl md:text-2xl text-white font-bold tracking-tight">
    WiriqTech<span className="text-[#b6ff1c]">.</span>
  </h1>
</Link>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className={`text-lg font-semibold transition-all duration-200 hover:text-green-600 dark:hover:text-[#b6ff1c] ${textColor}`}
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="/contact"
            className="px-5 py-2.5 relative rounded group font-bold text-gray-950 inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#b6ff1c] to-green-600"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#b6ff1c] to-green-600"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#b6ff1c] to-green-600"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-green-500 from-[#b6ff1c]"></span>
            <span className="relative">Get Started</span>
          </a>
          
          <div className={textColor}>
            <ThemeToogler />
          </div>
          
          <HiBars3BottomRight
            onClick={openNav}
            className={`w-8 h-8 cursor-pointer lg:hidden ${menuIconColor}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;