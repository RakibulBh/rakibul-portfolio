import GitHistory from "@/components/GitHistory";
import { TECHNOLOGIES } from "@/contstants/techstack";
import { Book, Gem, LaptopMinimal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Present = () => (
  <>
    <h1 className="text-md md:text-lg lg:text-xl font-bold mb-1">Present</h1>
    <div className="flex items-center gap-2">
      <Gem color="#41b883" size={16} />
      <p className="text-xs sm:text-sm md:text-md">Learning Golang</p>
    </div>
    <div className="flex items-center gap-2">
      <Book color="#41b883" size={16} />
      <p className="text-xs sm:text-sm md:text-md">
        Reading Desinging Data Intensive Applications
      </p>
    </div>
    <div className="flex items-center gap-2">
      <LaptopMinimal color="#41b883" size={16} />
      <p className="text-xs sm:text-sm md:text-md">
        Working on: Langchain AI Agent
      </p>
    </div>
  </>
);

export const Github = () => (
  <Link href="https://github.com/rakibulbh">
    <Image src="/brands/github.png" alt="github-logo" width={80} height={80} />
  </Link>
);

export const Linkedin = () => (
  <Link href="https://linkedin.com/in/rakibulb">
    <Image
      className=""
      src="/brands/linkedin.png"
      alt="linkedij-logo"
      width={80}
      height={80}
    />
  </Link>
);

export const PlantImage = () => (
  <div className="relative w-full h-full overflow-hidden">
    <Image
      fill
      alt="plant-image"
      src="/plant.jpg"
      className="rounded-md"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
);

export const Role = () => (
  <>
    <h1 className="text-md sm:text-xl md:text-2xl font-bold">
      2nd Year Student & Software Engineer
    </h1>
    <p className="text-gray-200">(based in London, UK)</p>
  </>
);

export const Profile = () => (
  <div className="flex items-center flex-col gap-3">
    <Link href="http://github.com/rakibulbh">
      <div className=" bg-primary rounded-full p-1">
        <Image
          width={150}
          height={150}
          src="/profile-picture.jpg"
          alt="profile-picture"
          className="rounded-full"
        />
      </div>
    </Link>
    <h1 className="text-primary font-bold text-xl sm:text-2xl md:text-3xl">
      Rakibul Bhuiyan
    </h1>
  </div>
);

export const Technologies = () => {
  const infiniteTechnologies = [
    ...TECHNOLOGIES,
    ...TECHNOLOGIES,
    ...TECHNOLOGIES,
  ];

  return (
    <div className="relative w-full overflow-hidden h-full">
      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 right-0 z-10 h-16 bg-gradient-to-b from-[#1a1a1a] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>

      <h1 className="absolute md:text-md lg:text-xl font-bold top-10 left-3 p-1 bg-primary z-20 rounded-lg">
        My technologies
      </h1>

      <div className="scroll-container hover:pause-animation justify-center">
        <div className="grid grid-cols-4 md:gap-x-6 lg:gap-x-12 gap-y-4 overflow-y-hidden">
          {infiniteTechnologies.map((technology, idx) => (
            <Image
              key={`${technology}-${idx}`}
              width={40}
              height={40}
              alt={`${technology}-icon`}
              src={`/svgs/${technology}.svg`}
              className="tech-icon mx-auto"
            />
          ))}
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        .scroll-container {
          animation: scrollVertical 60s linear infinite;
          width: 100%;
        }

        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }

        @keyframes scrollVertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-${TECHNOLOGIES.length * 12}px));
          }
        }
      `}</style>
    </div>
  );
};

export const Blogs = () => {
  return (
    <h1 className="text-md md:text-lg lg:text-xl font-bold">Recent Blogs</h1>
  );
};

export const Layout = [
  Present,
  Github,
  Linkedin,
  PlantImage,
  Role,
  Profile,
  Technologies,
  GitHistory,
  Blogs,
];
