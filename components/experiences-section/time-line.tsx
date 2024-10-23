import React from "react";

const Timeline = ({ i }: { i: number }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="w-[2px] h-36 bg-gray-500" />
      <div className="bg-white text-white rounded-full bg-opacity-5 w-10 h-10 flex items-center justify-center border-[1px] border-white border-opacity-15">
        {i > 9 ? i : "0" + i}
      </div>
      <div className="w-[2px] h-36 bg-gray-500" />
    </div>
  );
};

export default Timeline;
