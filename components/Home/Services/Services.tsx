import React from "react";
import ServiceCard from "./ServiceCard";
// Import high-quality icons from react-icons
import { FaLaptopCode, FaServer, FaCogs, FaHeadset, FaWrench, FaVideo } from "react-icons/fa";

const Services = () => {
  return (
    <div className="pt-16 pb-16 bg-white dark:bg-gray-900" id="services">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 dark:text-[#b6ff1c] uppercase tracking-wider">
              What We Provide
            </h1>
            <h1 className="text-xl sm:text-3xl md:text-4xl mt-2 font-bold text-gray-900 dark:text-white leading-tight">
              Complete Digital & Technical Solutions for Your Business
            </h1>
          </div>
          <div className="lg:ml-auto">
            {/* Button */}
            <a
              href="#contact"
              className="px-8 py-3.5 relative rounded group font-bold text-gray-950 inline-block uppercase tracking-wider"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#b6ff1c] to-green-600"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#b6ff1c] to-green-600"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#b6ff1c] to-green-600"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-green-500 from-[#b6ff1c]"></span>
              <span className="relative">Get a Free Quote</span>
            </a>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-16">
          
          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <ServiceCard
              icon={FaLaptopCode}
              title="Website Development"
              description="From striking landing pages to professional business sites and dynamic portfolios, we build fast, responsive, and custom websites. Imagine having a 24/7 digital agent that advocates for you and your business!"
            />
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <ServiceCard
              icon={FaServer}
              title="Web Applications"
              description="Robust, scalable web apps tailored to your workflow. We develop e-commerce solutions, comprehensive web systems, and custom management tools designed specifically for you and your business."
            />
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <ServiceCard
              icon={FaCogs}
              title="Custom Software & Maintenance"
              description="Bespoke digital solutions designed for your unique business logic. We build internal company tools and automation systems to seamlessly streamline your daily operations. Plus, we offer ongoing maintenance and support to ensure your software continues to perform at its best."
            />
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <ServiceCard
              icon={FaHeadset}
              title="IT Technical Support"
              description="Reliable tech assistance for you and your workspace. We handle everyday challenges such as OS installations, office tech setup, software configuration, network setups, and system troubleshooting. We believe great systems don't just stop at deployment—they thrive when they are well-maintained."
            />
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
            <ServiceCard
              icon={FaWrench}
              title="Hardware Repairs"
              description="Experts in hardware diagnostics and servicing. Whether it is routine laptop maintenance, computer repair, component replacement, or printer setup, we keep your physical hardware running smoothly."
            />
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500">
            <ServiceCard
              icon={FaVideo}
              title="CCTV Solutions"
              description="Secure your premises with our comprehensive surveillance solutions. We plan, design, and install reliable security systems, offering ongoing maintenance to give you peace of mind and keep your property safe."
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;