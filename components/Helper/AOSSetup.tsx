"use client";
import { useEffect } from "react";


const AOSSetup = () => {
  useEffect(() => {
    // Dynamically import AOS to ensure it only runs in the browser
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
      // Force AOS to refresh and calculate positions after loading
      AOS.default.refresh();
    });
  }, []);

  return null;
};

export default AOSSetup;