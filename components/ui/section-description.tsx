import React from "react";

const SectionDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-gray-200 text-xs md:text-sm lg:text-md text-center">
      {children}
    </p>
  );
};

export default SectionDescription;
