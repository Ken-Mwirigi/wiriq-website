import Image from "next/image";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaNetworkWired, FaLaptopCode } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16 bg-white dark:bg-gray-950">
      <div className="w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Text Content */}
        <div>
          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-xl font-bold text-green-700 dark:text-[#b6ff1c] uppercase tracking-widest">
            Why Choose Us?
          </p>
          
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem] text-gray-900 dark:text-white">
            Tech Solutions Built to Scale
          </h1>
          
          {/* Sub-description */}
          <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
            We provide innovative, cost-effective, and scalable tech solutions, backed by dedicated ongoing support to empower both businesses and individuals with seamless technology
          </p>

          {/* Line separator */}
          <div className="mt-6 mb-8 w-full h-[1px] bg-gray-200 dark:bg-gray-800"></div>
          
          {/* 3 Core Values Grid */}
          
          {/* Value 1 */}
          <div className="flex items-start gap-5 mt-6 group">
            <div className="flex items-center w-14 h-14 outline outline-2 outline-gray-200 dark:outline-gray-800 group-hover:outline-[#b6ff1c] transition-all duration-300 rounded-full flex-col justify-center shrink-0 shadow-sm">
              <FaNetworkWired className="w-6 h-6 text-green-600 dark:text-[#b6ff1c]" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">End-to-End Expertise</h1>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                From coding bespoke web applications to deploying robust CCTV and network infrastructure, we are your single partner for all things digital and physical.
              </p>
            </div>
          </div>
          
          {/* Value 2 */}
          <div className="flex items-start gap-5 mt-8 group">
            <div className="flex items-center w-14 h-14 outline outline-2 outline-gray-200 dark:outline-gray-800 group-hover:outline-[#b6ff1c] transition-all duration-300 rounded-full flex-col justify-center shrink-0 shadow-sm">
              <FaLaptopCode className="w-6 h-6 text-green-600 dark:text-[#b6ff1c]" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Tailored Innovation</h1>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Your business is unique. We design custom software, dynamic websites, and scalable systems that perfectly align with your specific workflow and goals.
              </p>
            </div>
          </div>
          
          {/* Value 3 */}
          <div className="flex items-start gap-5 mt-8 group">
            <div className="flex items-center w-14 h-14 outline outline-2 outline-gray-200 dark:outline-gray-800 group-hover:outline-[#b6ff1c] transition-all duration-300 rounded-full flex-col justify-center shrink-0 shadow-sm">
              <BiSupport className="w-6 h-6 text-green-600 dark:text-[#b6ff1c]" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Unwavering Support</h1>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                We don't just deploy and leave. Enjoy enterprise-level tech support, routine maintenance, and seamless upgrades to keep your operations running 24/7.
              </p>
            </div>
          </div>

        </div>
        
        {/* Right Side: Image Content */}
        <div data-aos="zoom-out" data-aos-anchor-placement="top-center" className="h-full flex items-center lg:ml-auto">
          <Image
            src="/images/wcu.webp"
            alt="Why Choose WiriqTech"
            width={700}
            height={700}
            className="rounded-xl object-cover"
          />
        </div>
        
      </div>
    </div>
  );
};

export default WhyChoose;