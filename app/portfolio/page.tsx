import React from "react";
import Link from "next/link";
import { MdOutlineArrowBack, MdOutlineVisibility } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";

// Import both of your new components
import ProjectShowcase from "@/components/Helper/ProjectShowcase";
import ProjectSlider from "@/components/Helper/ProjectSlider";

const PortfolioPage = () => {
  return (
    <div className="pt-24 pb-24 bg-white dark:bg-gray-950 min-h-screen">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        
        <div className="mb-20">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#b6ff1c] transition-colors mb-6 font-bold uppercase text-sm tracking-widest">
            <MdOutlineArrowBack className="w-5 h-5" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Proof Of <span className="text-[#b6ff1c]">Real Work</span>
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl text-lg leading-relaxed">
            Discover how we turn complex challenges into seamless digital solutions. Browse our recent work to see how we build high-performing platforms and automated systems that drive real business results.
          </p>
        </div>

        {/* --- PROJECT 1: NEXUS GLOBAL SUSTAINABILITY (Text Left, Image Right) --- */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
  <div className="order-2 lg:order-1">
    <div className="flex items-center space-x-2 text-green-700 dark:text-[#b6ff1c] mb-4">
      <BiCodeAlt className="w-6 h-6" />
      <span className="text-sm font-bold uppercase tracking-wider">ESG Advisory Platform &amp; Programme Admissions System</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
      Nexus Global Sustainability
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
      <strong>The Challenge:</strong> Nexus Global Sustainability delivers ESG advisory services and a large catalogue of capacity-building programmes across six international venues. Their offering was broad, spanning 17 training categories, a range of durations and a fixed fee structure, and the process for joining a course was manual. Prospective participants had to dig through long lists to find the right programme. Staff then rebuilt each application by hand, with invoices and admission letters prepared one at a time. They needed a site that made a big catalogue easy to browse and turned an application into an organised workflow instead of an inbox full of emails.<br/><br/>
      <strong>The Solution:</strong> We built a custom platform where every service, programme and resource is managed from the cms without touching code. Visitors narrow the catalogue instantly by category, location and duration, with the fee range calculated automatically. Each category has its own overview, objectives and audience. Advisory services are organised by sector and by focus area, so institutional clients reach relevant expertise in a click or two.<br/><br/>
      Applying takes four guided steps: programme, applicant, billing and review. The total fee is calculated live from the number of participants. On submission, every application is saved with a unique reference number. The applicant receives a pro-forma invoice and a provisional letter of admission by email, and the Nexus team is notified. When staff approve an application in the dashboard, the final admission letter and tax receipt are sent automatically. Every public form is protected by invisible spam filtering and rate limiting rather than CAPTCHA puzzles, so legitimate enquiries get through without friction.
    </p>

    <a href="https://nexusglobalsustainability.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold uppercase tracking-tighter rounded bg-[#b6ff1c] text-gray-950 hover:bg-white transition-all duration-300">
      <MdOutlineVisibility className="w-5 h-5" /> Visit Website
    </a>
  </div>

  <div className="order-1 lg:order-2 w-full">
     <ProjectShowcase image="/images/nexus-image.webp" />
  </div>
</div>

        {/* --- PROJECT 2: STUDY BRIDGE ACADEMIA (Image Left, Text Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="w-full order-1 lg:order-1">
             <ProjectShowcase image="/images/Studybridge-2.webp" />
          </div>

          <div className="order-2 lg:order-2">
            <div className="flex items-center space-x-2 text-green-700 dark:text-[#b6ff1c] mb-4">
              <BiCodeAlt className="w-6 h-6" />
              <span className="text-sm font-bold uppercase tracking-wider">Educational Platform</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Study Bridge Academia
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              <strong>The Challenge:</strong> Study Bridge Academia needed a robust digital platform to position themselves as a premier gateway for students pursuing elite international curricula (Pearson International GCSEs, A Levels, and Cambridge IGCSE). They required an environment that could effortlessly convey academic rigor, build trust with ambitious parents and learners, and streamline consultation bookings.<br/><br/>
              <strong>The Solution:</strong> We engineered a lightning-fast, highly responsive educational portal featuring structured course layouts, intuitive navigation, and integrated consultation workflows. The platform serves as an authoritative digital hub, transforming visitor engagement into consistent student enrollments.
            </p>

            <a href="https://studybridgeacademia.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold uppercase tracking-tighter rounded bg-[#b6ff1c] text-gray-950 hover:bg-white transition-all duration-300">
              <MdOutlineVisibility className="w-5 h-5" /> Visit Website
            </a>
          </div>
        </div>

        {/* --- PROJECT 3: COMITY SOLUTIONS (Text Left, Image Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-2 text-green-700 dark:text-[#b6ff1c] mb-4">
              <BiCodeAlt className="w-6 h-6" />
              <span className="text-sm font-bold uppercase tracking-wider">Corporate Website</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comity Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              <strong>The Challenge:</strong> Comity Solutions had a powerful vision for restoring wellness and vitality, but they lacked a digital home that reflected that level of care. They didn’t just need a basic online brochure; they needed an authoritative platform that could build immediate trust, articulate their mission, and seamlessly convert curious visitors into booked clients.<br/><br/>
              <strong>The Solution:</strong> We engineered a comprehensive, multi-page digital experience from the ground up. Beyond crafting a sleek and mobile-responsive UI, we integrated a frictionless online appointment booking system to handle consultations automatically. By combining compelling, SEO-optimized copy with lightning-fast architecture, we transformed their website from a static page into an active, 24/7 client-generation engine.
            </p>

            <a href="https://comitysolutions.co.ke" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold uppercase tracking-tighter rounded bg-[#b6ff1c] text-gray-950 hover:bg-white transition-all duration-300">
              <MdOutlineVisibility className="w-5 h-5" /> Visit Website
            </a>
          </div>

          <div className="order-1 lg:order-2 w-full">
             <ProjectShowcase image="/images/comity-1.webp" />
          </div>
        </div>

        {/* --- PROJECT 4: PANGARENT (Image Slider Left, Text Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full order-1 lg:order-1">
             {/* Passes an ARRAY of images to the horizontal slider */}
             <ProjectSlider images={[
               "/images/pangarent-1.webp",
               "/images/pangarent-2.webp",
             ]} />
          </div>

          <div className="order-2 lg:order-2">
            <div className="flex items-center space-x-2 text-green-700 dark:text-[#b6ff1c] mb-4">
              <BiCodeAlt className="w-6 h-6" />
              <span className="text-sm font-bold uppercase tracking-wider">Web Application (Active Dev)</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              PangaRent Management System
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              <strong>The Challenge:</strong> Property managers struggle with manual rent tracking and payment verifications, leading to lost revenue and administrative headaches.<br/><br/>
              <strong>The Solution:</strong> Engineered a scalable web app that securely integrates automated mobile payment systems. It processes rent payments in real-time, automatically updating tenant ledgers and generating receipts without human intervention.
            </p>

            <a href="https://pangarent.site" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold uppercase tracking-tighter rounded border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-[#b6ff1c] hover:text-[#b6ff1c] transition-all duration-300">
              <MdOutlineVisibility className="w-5 h-5" /> View Live Project
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioPage;