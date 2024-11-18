import { Technology } from "@/types";

export const TechnologyComponent = ({
  technology,
}: {
  technology: Technology;
}) => {
  return (
    <div className="border-white border-[1px] border-opacity-15 rounded-lg p-2 bg-white bg-opacity-5 flex gap-4 items-center">
      <div
        style={{
          backgroundColor: technology.bgColor ? technology.bgColor : "",
        }}
        className="w-14 h-14 rounded-lg flex items-center justify-center p-1"
      >
        {technology.icon}
      </div>
      <div className="space-y-1">
        <h2 className="text-md text-white">{technology.label}</h2>
        <p className="text-gray-200 text-xs">{technology.description}</p>
      </div>
    </div>
  );
};
