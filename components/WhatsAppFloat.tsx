"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(
    "Hello! I visited your website and would like to learn more about your services."
  );

  const phoneNumber = "254110464100"; // WiriqTech WhatsApp Number

  const handleSend = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    /* bottom-24 keeps it above the ScrollToTop button */
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      
      {/* The Chat Box */}
      {isOpen && (
        <div className="w-[320px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden mb-4 border border-gray-200 dark:border-gray-800 animate-fade-in-up origin-bottom-right">
          
          {/* Header - Brand Green */}
          <div className="bg-[#3b6b4c] dark:bg-green-900/50 p-5 flex items-start justify-between">
            <div className="flex items-start gap-3">
              <FaWhatsapp className="w-8 h-8 text-white mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">
                  Chat with WiriqTech
                </h3>
                <p className="text-[#a4c9b1] dark:text-gray-300 text-xs mt-1">
                  Typically replies within minutes
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#a4c9b1] hover:text-white transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 tracking-wider mb-2">
              DIRECT MESSAGE
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] resize-none h-28 mb-4 transition-colors"
            />
            
            <button
              onClick={handleSend}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 duration-300"
            >
              Send Message <FaWhatsapp className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* The Pill Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl rounded-full px-5 py-3 flex items-center gap-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
        >
          <div className="relative">
            <FaWhatsapp className="w-7 h-7 text-[#3b6b4c] dark:text-[#b6ff1c]" />
            {/* Green dot pulse to grab attention */}
            <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-gray-900 animate-pulse"></span>
          </div>
          <span className="text-gray-800 dark:text-gray-200 font-medium pr-1">
            Hi, how can we help?
          </span>
        </button>
      )}
    </div>
  );
};

export default WhatsAppFloat;