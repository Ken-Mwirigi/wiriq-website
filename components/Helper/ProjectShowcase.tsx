"use client";
import React from "react";
import Image from "next/image";

type Props = {
  image: string;
};

const ProjectShowcase = ({ image }: Props) => {
  return (
    <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-900">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes autoPan {
          0% { object-position: top; }
          45% { object-position: bottom; }
          55% { object-position: bottom; }
          100% { object-position: top; }
        }
        .animate-pan {
          animation: autoPan 16s ease-in-out infinite;
        }
      `}} />

      <Image
        src={image}
        alt="Project full page showcase"
        fill
        className="object-cover object-top animate-pan"
        priority
      />

    </div>
  );
};

export default ProjectShowcase;