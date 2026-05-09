"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type Props = {
  images: string[];
};

const ProjectSlider = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[300px] md:h-[450px] group rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-[#0a0a0a]">
      
      <div 
        className="flex h-full w-full transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="relative h-full w-full flex-shrink-0 p-2">
            <Image
              src={img}
              alt={`Project screenshot ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="absolute top-[50%] -translate-y-[50%] left-4 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#b6ff1c] hover:text-gray-950 z-10 hidden md:block">
        <MdChevronLeft onClick={prevSlide} size={30} />
      </div>

      <div className="absolute top-[50%] -translate-y-[50%] right-4 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#b6ff1c] hover:text-gray-950 z-10 hidden md:block">
        <MdChevronRight onClick={nextSlide} size={30} />
      </div>

      <div className="absolute bottom-4 right-0 left-0 z-10">
        <div className="flex items-center justify-center gap-2 bg-black/40 w-fit mx-auto px-3 py-2 rounded-full backdrop-blur-sm">
          {images.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`transition-all duration-300 h-2.5 rounded-full cursor-pointer ${
                currentIndex === slideIndex 
                  ? "bg-[#b6ff1c] w-8" 
                  : "bg-white/60 w-2.5 hover:bg-white"
              }`}
            ></div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectSlider;