import GitHistory from "@/components/sections/Home/GitHistory";
import { TECHNOLOGIES } from "@/data/techstack";
import { ArrowRight, Book, Gem, LaptopMinimal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Present = () => (
  <div className="h-full font-bold flex flex-col justify-between text-sm md:text-md 2xl:text-xl">
    <div className="w-full flex flex-row items-center justify-between">
      <h1 className="text-white/70">Hi, I'm Rakibul,</h1>
      <button className="flex gap-2 items-center text-xs text-primary font-bold 2xl:text-lg">
        Contact me <ArrowRight size={16} />
      </button>
    </div>
    <h1 className="text-white/40">I'm a Computer Science student,</h1>
    <h1 className="text-white/40">Based in London, UK.</h1>
  </div>
);

export const Github = () => (
  <Link href="https://github.com/rakibulbh">
    <Image src="/brands/github.png" alt="github-logo" width={40} height={40} />
  </Link>
);

export const Linkedin = () => (
  <Link href="https://linkedin.com/in/rakibulb">
    <Image
      className=""
      src="/brands/linkedin.png"
      alt="linkedij-logo"
      width={40}
      height={40}
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
    <h1 className="text-md sm:text-xl md:text-2xl font-bold text-center">
      Love solving problems
    </h1>
  </>
);

export const Profile = () => (
  <div className="flex items-center flex-col gap-3">
    <Link href="http://github.com/rakibulbh">
      <div className=" bg-primary rounded-full p-1">
        <Image
          width={80}
          height={80}
          src="/profile-picture.jpg"
          alt="profile-picture"
          className="rounded-full 2xl:w-32 2xl:h-32 object-cover"
        />
      </div>
    </Link>
    <h1 className="text-primary font-bold text-sm sm:text-lg md:text-xl 2xl:text-3xl">
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

      <div className="scroll-container hover:pause-animation justify-center">
        <div className="grid grid-cols-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-12 gap-y-4 overflow-y-hidden">
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
