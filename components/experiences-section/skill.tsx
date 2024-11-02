export const Skill = ({ skill }: { skill: string }) => {
  return (
    <div className="w-12 flex items-center justify-center p-1 bg-white bg-opacity-5 border-white border-[1px] border-opacity-15">
      <p className="text-[10px] text-[#00B8D9] truncate">{skill}</p>
    </div>
  );
};
