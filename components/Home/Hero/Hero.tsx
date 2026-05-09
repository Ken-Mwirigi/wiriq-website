import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-gray-950 w-full h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10 mt-12 lg:mt-0">
        
        {/* Text content */}
        <div data-aos="fade-up">
          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-xl font-bold text-[#b6ff1c] uppercase tracking-widest">
            Your Complete Technology Partner
          </p>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl mt-6 mb-6 font-bold text-white leading-[2.5rem] md:leading-[4rem] ">
            Welcome to <span className="text-[#b6ff1c]">WiriqTech</span>
          </h1>
          
          {/* Description - All 6 Services creatively woven in! */}
          <p className="text-sm sm:text-base font-medium md:text-lg text-gray-300 leading-relaxed">
            We provide innovative, end-to-end tech solutions for businesses and individuals. Whether we are building 24/7 <b>websites</b>, scalable <b>web apps</b>, and <b>custom software</b>, or delivering expert <b>IT support</b>, <b>hardware repairs</b>, and secure <b>CCTV installations</b>—we build, manage, and maintain your entire tech ecosystem.
          </p>
          
          {/* Buttons Container */}
          <div className="flex items-center gap-4 mt-8 flex-wrap">
            
            {/* Primary Button */}
            <Link
              href="#services"
              className="relative inline-flex items-center justify-start px-8 py-3.5 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#b6ff1c] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left font-bold text-gray-950 transition-colors duration-300 ease-in-out group-hover:text-gray-950">
                Explore Services
              </span>
            </Link>
            
            {/* Secondary Button - Now links to Portfolio */}
            <Link
              href="/portfolio"
              className="relative inline-flex items-center justify-start px-8 py-3.5 overflow-hidden font-bold transition-all border-2 border-gray-600 rounded hover:border-[#b6ff1c] group"
            >
              <span className="w-full h-full bg-[#b6ff1c] absolute top-0 left-0 -translate-x-full ease-out duration-500 transition-all group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-950">
                See Our Work
              </span>
            </Link>

          </div>
        </div>
        
        {/* Image Content */}
        <div
          data-aos="fade-down"
          data-aos-delay="150"
          className="mx-auto hidden xl:block"
        >
          <Image src="/images/hero.webp" alt="WiriqTech Hero" width={900} height={900} />
        </div>
      </div>
    </div>
  );
};

export default Hero;