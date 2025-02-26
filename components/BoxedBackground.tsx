"use client";
import React, { useEffect, useState } from "react";

const BoxedBackground = () => {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setScreenSize("xl");
      } else if (window.innerWidth >= 1024) {
        setScreenSize("lg");
      } else if (window.innerWidth >= 768) {
        setScreenSize("md");
      } else {
        setScreenSize("sm");
      }
    };

    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen absolute grid grid-cols-4 grid-rows-7 md:grid-cols-6 md:grid-rows-6 lg:grid-cols-8 lg:grid-rows-8 xl:grid-cols-12 xl:grid-rows-12">
      {new Array(screenSize === "xl" ? 72 : screenSize === "lg" ? 64 : 36)
        .fill(null)
        .map((item, idx) => (
          <Box key={idx} />
        ))}
    </div>
  );
};

const Box = () => {
  return (
    <div className="border-[0.1px] border-white/10 col-span-1 row-span-1 xl:row-span-2 hover:bg-white/10 transition-colors duration-500 ease-in-out" />
  );
};

export default BoxedBackground;
