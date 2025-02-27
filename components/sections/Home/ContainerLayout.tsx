"use client";

import { TECHNOLOGIES } from "@/contstants/techstack";
import { cn } from "@/utils/cn";
import { Book, Gem, LaptopMinimal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GitHistory from "./GitHistory";
import { Layout } from "./BoxComponents";
import { MobileLayout } from "./MobileBoxComponents";

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
  "bg-card row-span-5 col-span-2",
  // Git history
  "bg-card row-span-1 col-span-3 flex items-center",
  // Blogs
  "bg-card row-span-4 col-span-3 p-3",
];

const mobileContainerStyles = [
  // Profile
  "bg-card row-span-2 col-span-6 space-y-1 p-2",
  // profile picture
  "bg-card row-span-4 col-span-3 flex items-center justify-center",
  // Github
  "bg-[#333] row-span-2 col-span-3 flex items-center justify-center",
  // Linkedin
  "bg-[#0a66c2] row-span-2 col-span-3 flex items-center justify-center",
  // Technologies
  "bg-card row-span-3 col-span-6",
  // Blogs
  "bg-card row-span-3 col-span-6 p-3",
];

const parentContainerStyles =
  "w-full h-[40rem] md:w-[40rem] md:h-[40rem] xl:w-[40rem] xl:h-[40rem] 2xl:w-[60rem] 2xl:h-[60rem]";

const ContainerLayout = () => {
  return (
    <>
      <div
        className={cn(
          "hidden md:grid grid-cols-5 grid-rows-7 gap-2 2xl:gap-3 text-white z-10",
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
      "grid md:hidden grid-cols-6 grid-rows-12 gap-2 lg:gap-3 text-white z-10",
      parentContainerStyles
    )}
  >
    {MobileLayout.map((Component: () => React.JSX.Element, idx: number) => (
      <Container key={idx} styles={mobileContainerStyles[idx]}>
        <Component />
      </Container>
    ))}
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
