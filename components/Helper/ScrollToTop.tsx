"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // show hide functionality
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // Added z-50 to ensure it always stays on top of other content
    <div className="fixed bottom-4 animate-pulse right-4 z-50">
      {isVisible && (
        <button
          // Swapped pink for neon green, text to dark gray, and added a subtle hover glow
          className="bg-[#b6ff1c] hover:bg-green-400 transition-colors duration-300 cursor-pointer text-gray-950 rounded-full w-12 h-12 flex items-center justify-center focus:outline-none shadow-[0_0_15px_rgba(182,255,28,0.4)]"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;