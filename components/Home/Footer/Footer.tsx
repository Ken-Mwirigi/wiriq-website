import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  // Configured with the correct WiriqTech social links
  const socialLinks = [
    { Icon: FaLinkedin, href: "https://linkedin.com/company/wiriqtech" },
    { Icon: FaInstagram, href: "https://instagram.com/wiriqtech" },
    { Icon: FaFacebook, href: "https://facebook.com/wiriqtech" },
    { Icon: FaYoutube, href: "https://youtube.com/@wiriqtech" },
  ];

  return (
    <div className="pt-16 pb-12 bg-gray-950 border-t border-gray-900">
      <div className="w-[90%] xl:w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* 1st part: Branding & Description */}
        <div className="lg:col-span-1">
          <div className="flex items-center space-x-2">
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
          </div>
          <p className="mt-4 text-gray-400 font-medium leading-relaxed">
            Complete Digital & Technical Solutions. Delivering high-quality web development, custom software, and secure CCTV installations. Let's build something amazing together!
          </p>
          
          {/* Social Links */}
          <div className="mt-6 flex items-center space-x-3">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-gray-900 text-[#b6ff1c] rounded-lg hover:bg-[#b6ff1c] hover:text-gray-950 transition-all duration-300 shadow-sm"
              >
                <social.Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* 2nd part: Quick Links */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white uppercase tracking-widest border-b-2 border-[#b6ff1c] inline-block mb-6">
            Quick Links
          </h1>
          <div className="space-y-4">
            <a href="#about" className="block text-gray-400 hover:text-[#b6ff1c] transition-all">About Us</a>
            <a href="#services" className="block text-gray-400 hover:text-[#b6ff1c] transition-all">Our Services</a>
            <a href="/portfolio" className="block text-gray-400 hover:text-[#b6ff1c] transition-all">Portfolio</a>
            <a href="#contact" className="block text-gray-400 hover:text-[#b6ff1c] transition-all">Contact</a>
          </div>
        </div>

        {/* 3rd part: Contact */}
        <div>
          <h1 className="text-lg font-bold text-white uppercase tracking-widest border-b-2 border-[#b6ff1c] inline-block mb-6">
            Contact Us
          </h1>
          <p className="text-gray-400 font-medium mb-4 italic">
            Have a project in mind? Let's talk!
          </p>
          <div className="space-y-4">
            <div>
              <h1 className="text-xs text-gray-500 uppercase font-bold">Email</h1>
              <a 
                href="mailto:info@wiriqtech.com" 
                className="text-sm font-bold text-white hover:text-[#b6ff1c] transition-colors"
              >
                info@wiriqtech.com
              </a>
            </div>
            <div>
              <h1 className="text-xs text-gray-500 uppercase font-bold">Phone</h1>
              <a 
                href="tel:+254110464100" 
                className="text-sm font-bold text-[#b6ff1c] hover:underline"
              >
                +254 110 464 100
              </a>
            </div>
            <div>
              <h1 className="text-xs text-gray-500 uppercase font-bold">WhatsApp</h1>
              <a 
                href="https://wa.me/254110464100" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#b6ff1c] hover:underline"
              >
                +254 110 464 100
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="mt-12 w-[90%] xl:w-[80%] mx-auto border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-white font-bold">WiriqTech</span>. All Rights Reserved.
        </p>
        
        {/* Developer Credit & Connect */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-6 md:mt-0">
          <p className="text-gray-400">
            Crafted with care by {" "}
            <a 
              href="https://wiriqtech.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#b6ff1c] font-bold hover:underline"
            >
              WiriqTech
            </a>
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;