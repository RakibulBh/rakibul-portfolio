import { MoveUpRight } from "lucide-react";
import { Button } from "../ui/button";

const buttons = [
  {
    title: "Top Projects",
  },
  {
    title: "Web",
  },
  {
    title: "Game",
  },
  {
    title: "Other",
  },
];

const Navigation = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="space-x-2">
        {buttons.map((button, i) => (
          <Button
            key={i}
            className="bg-[#FFFFFF] bg-opacity-5 text-white px-4 py-2 rounded-md border-white border-[1px]"
          >
            {button.title}
          </Button>
        ))}
      </div>
      <div className="flex gap-2 items-center group hover:cursor-pointer">
        <div className="bg-[#FFFFFF] bg-opacity-5 rounded-full flex items-center justify-center w-7 h-7 text-white border-[1px] border-white">
          <MoveUpRight size={20} />
        </div>
        <p className="text-white text-md group-hover:underline group-hover:underline-offset-4">
          SEE ALL
        </p>
      </div>
    </div>
  );
};

export default Navigation;
