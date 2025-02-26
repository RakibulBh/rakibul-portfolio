"use client";

import { TECHNOLOGIES } from "@/contstants/techstack";
import { cn } from "@/utils/cn";
import { Book, Gem, LaptopMinimal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GitHistory from "./GitHistory";
import { Layout } from "./sections/Home/BoxComponents";

const containerStyles = [
  // present
  "bg-card row-span-1 col-span-2 space-y-1 p-2",
  // Github
  "bg-[#333] row-span-1 col-span-1 flex items-center justify-center",
  // Linkedin
  "bg-[#0a66c2] row-span-1 col-span-1 flex items-center justify-center",
  //image
  "bg-card row-span-3 col-span-1",
  // Role/title
  "bg-primary row-span-1 col-span-2 flex flex-col items-center justify-center text-center",
  // profile picture
  "bg-card row-span-2 col-span-2 flex items-center justify-center",
  // Technologies
  "bg-card row-span-5 col-span-2 p-3",
  // Git history
  "bg-card row-span-1 col-span-3 flex items-center",
  // Blogs
  "bg-card row-span-4 col-span-3 p-3",
];

const mobileContainerStyles = [
  // present
  "bg-card row-span-1 col-span-3 md:row-span-1 md:col-span-2 space-y-1 md:p-2",
  //image
  "bg-card row-span-4 col-span-1 md:row-span-2 md:col-span-1",
  // Role/title
  "bg-primary row-span-2 col-span-2 md:row-span-1 md:col-span-1 flex flex-col items-center justify-center text-center",
  // profile picture
  "bg-card row-span-2 col-span-2 md:row-span-2 md:col-span-1 flex items-center justify-center",
  // Technologies
  "bg-card row-span-2 col-span-1 md:row-span-5 md:col-span-1 p-3",
  // Git history
  "bg-card row-span-1 col-span-1 md:row-span-1 md:col-span-1 flex items-center",
  // Blogs
  "bg-card row-span-1 col-span-1 md:row-span-4 md:col-span-2 p-3",
];

const parentContainerStyles =
  "md:w-[50rem] lg:w-[55rem] xl:w-[60rem] aspect-square";

const ContainerLayout = () => {
  return (
    <>
      <div
        className={cn(
          "hidden md:grid grid-cols-5 grid-rows-7 gap-2 lg:gap-3 text-white z-10",
          parentContainerStyles
        )}
      >
        {Layout.map((Component: () => React.JSX.Element, idx) => (
          <Container styles={containerStyles[idx]} key={idx}>
            <Component />
          </Container>
        ))}
      </div>
      {/* Mobile */}
      <MobileGrid />
    </>
  );
};

const MobileGrid = () => (
  <div
    className={cn(
      "grid md:hidden grid-cols-3 grid-rows-7 gap-2 lg:gap-3 text-white z-10 mt-36",
      parentContainerStyles
    )}
  >
    <Container key={0} styles={containerStyles[0]}>
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
    </Container>
    <Container key={1} styles={containerStyles[1]}>
      <div className="relative w-full h-full overflow-hidden">
        <Image
          fill
          alt="plant-image"
          src="/plant.jpg"
          className="rounded-md"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </Container>
    {/* Role/title */}
    <Container key={2} styles={containerStyles[2]}>
      <h1 className="text-md sm:text-xl md:text-2xl font-bold">
        2nd Year Student & Software Engineer
      </h1>
      <p className="text-gray-200">(based in London, UK)</p>
    </Container>
    {/* Profile picture  */}
    <Container key={3} styles={containerStyles[3]}>
      <div className="items-center flex-col gap-3">
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
    </Container>
    {/* Technologies section */}
    <Container key={4} styles={containerStyles[4]}>
      <h1 className="text-lg font-bold">My technologies</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-x-6 gap-y-4">
          {TECHNOLOGIES.map((technology) => (
            <Image
              key={technology}
              width={40}
              height={40}
              alt={`${technology}-icon`}
              src={`/svgs/${technology}.svg`}
              className="tech-icon mx-auto"
            />
          ))}
        </div>
      </div>
    </Container>
    {/* Quote section */}
    <Container key={5} styles={containerStyles[5]}>
      <GitHistory />
    </Container>
    {/* Big bottom right section */}
    <Container key={6} styles={containerStyles[6]}>
      <h1 className="text-xl sm:text-2xl md:text-3xl">Recent Blogs</h1>
    </Container>
  </div>
);

const Container = ({
  styles,
  children,
  ref,
}: {
  styles: string;
  children: React.ReactNode;
  ref?: any;
}) => {
  return (
    <div ref={ref} className={cn(styles, "rounded-md md:rounded-lg")}>
      {children}
    </div>
  );
};

export default ContainerLayout;
