"use client";

import { TECHNOLOGIES } from "@/contstants/techstack";
import { cn } from "@/utils/cn";
import { Book, Gem, LaptopMinimal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GitHistory from "./GitHistory";

const containerStyles = [
  // present
  "bg-card row-span-1 col-span-2 space-y-2 p-3",
  //image
  "bg-card row-span-2 col-span-1",
  // Role/title
  "bg-primary row-span-1 col-span-1 flex flex-col items-center justify-center text-center",
  // profile picture
  "bg-card row-span-2 col-span-1 flex items-center justify-center",
  // Technologies
  "bg-card row-span-5 col-span-1 p-3 space-y-6",
  // Git history
  "bg-card row-span-1 col-span-1 flex items-center",
  // Education
  "bg-card row-span-4 col-span-2 p-3",
];

const ContainerLayout = () => {
  return (
    <div className="w-full h-full grid grid-cols-3 grid-rows-7 gap-3 text-white">
      <Container key={0} styles={containerStyles[0]}>
        <h1 className="text-2xl font-bold mb-1">Present</h1>
        <div className="flex items-center gap-2">
          <Gem color="#41b883" size={16} />
          <p className="text-sm">Learning Golang</p>
        </div>
        <div className="flex items-center gap-2">
          <Book color="#41b883" size={16} />
          <p className="text-sm">
            Reading Desinging Data Intensive Applications
          </p>
        </div>
        <div className="flex items-center gap-2">
          <LaptopMinimal color="#41b883" size={16} />
          <p className="text-sm">Working on: Langchain AI Agent</p>
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
        <h1 className="text-2xl font-bold">
          2nd Year Student & Software Engineer
        </h1>
        <p className="text-gray-200">(based in London, UK)</p>
      </Container>
      {/* Profile picture  */}
      <Container key={3} styles={containerStyles[3]}>
        <div className="flex items-center flex-col gap-3">
          <Link href="http://github.com/rakibulbh">
            <div className="bg-primary rounded-full p-1">
              <Image
                width={150}
                height={150}
                src="/profile-picture.jpg"
                alt="profile-picture"
                className="rounded-full"
              />
            </div>
          </Link>
          <h1 className="text-primary font-bold text-3xl">Rakibul Bhuiyan</h1>
        </div>
      </Container>
      {/* Technologies section */}
      <Container key={4} styles={containerStyles[4]}>
        <h1 className="text-2xl font-bold">My technologies</h1>
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
        <div className="p-3 max-w-full">
          <GitHistory />
        </div>
      </Container>

      {/* Big bottom right section */}
      <Container key={6} styles={containerStyles[6]}>
        <h1 className="text-2xl">Recent Blogs</h1>
      </Container>
    </div>
  );
};

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
    <div ref={ref} className={cn(styles, "rounded-lg")}>
      {children}
    </div>
  );
};

export default ContainerLayout;
