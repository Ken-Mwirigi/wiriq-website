import Image from "next/image";
import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineArrowOutward, MdOutlineVisibility } from "react-icons/md";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  category: string;
  liveLink: string;      // Actual website (e.g., comitysolutions.co.ke)
  portfolioLink: string; // Internal route (e.g., /portfolio/pangarent)
};

const ProjectCard = ({ image, title, category, liveLink, portfolioLink }: Props) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          className="rounded-t-xl w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="w-[95%] mx-auto bg-gray-50 dark:bg-gray-900 shadow-xl rounded-xl mt-[-3rem] relative z-10 p-5 border border-gray-200 dark:border-gray-800 group-hover:border-[#b6ff1c]/50 transition-colors duration-300">
        
        <div className="flex items-center space-x-2 text-green-700 dark:text-[#b6ff1c]">
          <BiCodeAlt className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">{category}</span>
        </div>
        
        <h1 className="text-lg font-bold mt-2 text-gray-900 dark:text-white line-clamp-1">
          {title}
        </h1>
        
        <span className="w-full h-[1px] mt-4 mb-4 bg-gray-200 dark:bg-gray-800 block"></span>
        
        {/* Dual CTA Buttons */}
        <div className="flex flex-col gap-3">
          {/* CTA 1: External Live Website */}
          <Link 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold uppercase tracking-tighter rounded-lg bg-[#b6ff1c] text-gray-950 hover:bg-white transition-all duration-300 w-full"
          >
            <MdOutlineVisibility className="w-4 h-4" />
            Live Preview
          </Link>
          
          {/* CTA 2: Internal Portfolio Page */}
          <Link 
            href={portfolioLink}
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-tighter rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-[#b6ff1c] hover:text-[#b6ff1c] transition-all duration-300 w-full"
          >
            View All Projects 
            <MdOutlineArrowOutward className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;