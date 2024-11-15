import { MoveUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const buttons = [
  {
    title: "Top Projects",
    tag: "top",
  },
  {
    title: "Web",
    tag: "web",
  },
  {
    title: "Game",
    tag: "game",
  },
  {
    title: "Other",
    tag: "other",
  },
];

const Navigation = ({
  currentState,
  setCurrentState,
}: {
  currentState: string;
  setCurrentState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="space-x-2">
        {buttons.map((button, i) => (
          <Button
            onClick={() => setCurrentState(button.tag)}
            key={i}
            className={cn(
              "text-white px-2 text-xs py-1 md:px-4 md:py-2 md:text-md rounded-md",
              currentState === button.tag
                ? "bg-[#00B8D9] hover:bg-[#00A8C6]"
                : "bg-white bg-opacity-5 hover:bg-[#00B8D9] hover:bg-opacity-10 border-white border-[1px] border-opacity-15"
            )}
          >
            {button.title}
          </Button>
        ))}
      </div>
      <div className="hidden md:flex gap-2 items-center group hover:cursor-pointer">
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
