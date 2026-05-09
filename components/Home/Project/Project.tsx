import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Project = () => {
  return (
    <div className="pt-16 pb-24 bg-white dark:bg-gray-950" id="portfolio">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm sm:text-base md:text-xl font-bold text-green-700 dark:text-[#b6ff1c] uppercase tracking-widest">
              Latest Works
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-5xl mt-3 font-bold text-gray-900 dark:text-white">
              Driving Change with Innovative Solutions
            </h1>
          </div>
          <div className="lg:ml-auto">
            {/* This button correctly links to your new Portfolio Page */}
            <Link
              href="/portfolio"
              className="px-8 py-3.5 relative rounded group font-bold text-gray-950 inline-block uppercase"
            >
              <span className="absolute inset-0 w-full h-full rounded bg-gradient-to-br to-green-500 from-[#b6ff1c]"></span>
              <span className="relative">View All Projects</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 items-start">
          
          {/* Project 1: Comity Solutions */}
          <div data-aos="fade-up">
            <ProjectCard
              image="/images/p1.webp"
              title="Comity Solutions"
              category="Website Development"
              liveLink="https://comitysolutions.co.ke"
              portfolioLink="/portfolio" // Updated to main portfolio page
            />
          </div>
          
          {/* Project 2: PangaRent */}
          <div data-aos="fade-up" data-aos-delay="100">
            <ProjectCard
              image="/images/p2.webp"
              title="PangaRent (Active Development)"
              category="Web Application"
              liveLink="https://pangarent.site"
              portfolioLink="/portfolio" // Updated to main portfolio page
            />
          </div>
          
          

        </div>
      </div>
    </div>
  );
};

export default Project;