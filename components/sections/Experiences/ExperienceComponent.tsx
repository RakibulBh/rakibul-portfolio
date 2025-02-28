import { Experience } from "@/data/Experiences";
import Image from "next/image";

const ExperienceComponent = ({ experience }: { experience: Experience }) => {
  return (
    <div className="flex gap-4 lg:gap-6 p-4 hover:bg-white/5 rounded-lg transition-colors duration-200 ease-out">
      <div className="flex-shrink-0 pt-1">
        <Image
          className="rounded-lg w-10 h-10 sm:w-12 sm:h-12 object-contain"
          width={48}
          height={48}
          src={`/brands/${experience.image}`}
          alt={`${experience.company} logo`}
          loading="lazy"
        />
      </div>

      <div className="flex-1 space-y-2">
        <p className="text-xs sm:text-sm text-gray-400 font-mono">
          {experience.date}
        </p>
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
          {experience.company}
        </h3>
        <p className="text-sm sm:text-base text-gray-100 font-medium">
          {experience.role}
        </p>
        <ul className="mt-2 space-y-2">
          {experience.bullets.map((bullet, idx) => (
            <li
              key={idx}
              className="text-xs sm:text-sm text-gray-300 leading-relaxed before:content-['▹'] before:absolute before:text-primary before:mr-2 before:ml-[-1.25em]"
            >
              <span className="pl-4">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceComponent;
