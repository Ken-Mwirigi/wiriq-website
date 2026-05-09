import Image from "next/image";
import Link from "next/link";
import React from "react";
// 1. Import high-quality icons
import { FaLaptopCode, FaNetworkWired, FaCode, FaVideo } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900" id="about">
      <div className="w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Main Image content */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image 
            src="/images/about.webp" 
            alt="About WiriqTech" 
            width={700} 
            height={700} 
            className="rounded-xl shadow-lg" 
          />
        </div>
        
        {/* Text Content */}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-green-700 dark:text-[#b6ff1c] uppercase tracking-widest">
            About Us
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem] text-gray-900 dark:text-white">
            Empowering Your Business With Complete Tech Solutions
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            WiriqTech is a modern technology agency dedicated to solving both digital and physical IT challenges. From developing custom software systems and dynamic websites to executing seamless CCTV and hardware installations, our team provides individuals and businesses with reliable tech solutions—and we stick around to maintain them. Our mission is to make your life easier by building systems that not only work flawlessly but also scale with your growing needs.
          </p>
          
          {/* Icon Grid 1 */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            
            {/* Web & App */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-gray-800 border border-green-200 dark:border-gray-700 flex items-center justify-center group-hover:scale-110 group-hover:border-[#b6ff1c] transition-all duration-300 shadow-sm">
                <FaLaptopCode className="w-6 h-6 text-green-700 dark:text-[#b6ff1c]" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold leading-5 text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-[#b6ff1c] transition-colors">
                Web & App <br /> Development
              </h1>
            </div>

            {/* Hardware & IT */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-gray-800 border border-green-200 dark:border-gray-700 flex items-center justify-center group-hover:scale-110 group-hover:border-[#b6ff1c] transition-all duration-300 shadow-sm">
                <FaNetworkWired className="w-6 h-6 text-green-700 dark:text-[#b6ff1c]" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold leading-5 text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-[#b6ff1c] transition-colors">
                Hardware & IT <br /> Infrastructure
              </h1>
            </div>
          </div>
          
          {/* Icon Grid 2 */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            
            {/* Custom Software */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-gray-800 border border-green-200 dark:border-gray-700 flex items-center justify-center group-hover:scale-110 group-hover:border-[#b6ff1c] transition-all duration-300 shadow-sm">
                <FaCode className="w-6 h-6 text-green-700 dark:text-[#b6ff1c]" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold leading-5 text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-[#b6ff1c] transition-colors">
                Custom Software <br /> Solutions
              </h1>
            </div>

            {/* CCTV & Security */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-gray-800 border border-green-200 dark:border-gray-700 flex items-center justify-center group-hover:scale-110 group-hover:border-[#b6ff1c] transition-all duration-300 shadow-sm">
                <FaVideo className="w-6 h-6 text-green-700 dark:text-[#b6ff1c]" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold leading-5 text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-[#b6ff1c] transition-colors">
                CCTV & Security <br /> Installation
              </h1>
            </div>
          </div>
          
          {/* Call to Action Button */}
          <div className="mt-12">
            <Link
              href="#contact"
              className="px-8 py-3.5 relative rounded group font-bold text-gray-950 inline-block uppercase tracking-wider"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#b6ff1c] to-green-600"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#b6ff1c] to-green-600"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#b6ff1c] to-green-600"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-green-500 from-[#b6ff1c]"></span>
              <span className="relative">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;