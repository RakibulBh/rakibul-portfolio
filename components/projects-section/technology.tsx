import React from "react";

const Technology = ({ name }: { name: string }) => {
  return (
    <div className="w-full bg-[#FFFFFF] border-[1px] border-white border-opacity-15 bg-opacity-5 text-xs rounded-md text-[#00B8D9] text-center p-2">
      {name}
    </div>
  );
};

export default Technology;
