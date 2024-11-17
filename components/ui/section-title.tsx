import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
      {children}
    </h1>
  );
};

export default SectionTitle;
