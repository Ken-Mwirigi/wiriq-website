import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { IconType } from "react-icons";

type Props = {
  icon: IconType; // Replaced image string with IconType
  title: string;
  description: string;
};

const ServiceCard = ({ icon: Icon, title, description }: Props) => {
  return (
    // Kept your neon lime green hover background
    <div className="p-6 cursor-pointer hover:bg-[#b6ff1c] transition-all duration-500 group relative bg-gray-100 dark:bg-gray-950 shadow rounded-xl flex flex-col h-full">
      
      {/* Icon rendering dynamically */}
      <Icon className="w-[60px] h-[60px] text-green-700 dark:text-[#b6ff1c] group-hover:text-gray-950 transition-colors duration-500" />
      
      {/* Title turns dark gray on hover for readability against the green */}
      <h1 className="text-xl mt-5 font-semibold group-hover:text-gray-950 transition-all duration-500 text-gray-900 dark:text-white">
        {title}
      </h1>
      
      {/* Custom description text */}
      <p className="mt-4 font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-800 transition-all duration-500 flex-grow">
        {description}
      </p>
      
      {/* Kept your exact Reach Out link and hover arrows */}
      <Link href="#contact" className="mt-6 inline-block">
        <div className="text-xl font-bold flex items-center gap-1 text-gray-900 dark:text-white group-hover:text-gray-950 transition-all duration-500">
          <span>Reach Out</span>
          <span>
            <GoArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;