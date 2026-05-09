import React from "react";
import Hero from "@/components/Home/Hero/Hero";
import About from "@/components/Home/About/About";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import Services from "@/components/Home/Services/Services";
import Contact from "@/components/Contact"; // Your new contact section!
import Project from "@/components/Home/Project/Project";
//import Review from "@/components/Home/Review/Review";
//import Blog from "@/components/Home/Blog/Blog";
import AOSSetup from "../components/Helper/AOSSetup";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* 1. This runs the animations in the browser */}
      <AOSSetup /> 
      
      {/* 2. All of these render securely on the server for perfect SEO */}
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      <Project />
      
      {/* 3. The old Software section is officially gone, replaced by Contact! */}
      <Contact /> 
      
      
      {/* <Review /> */}
      {/* <Blog /> */}
    </div>
  );
};

export default HomePage;