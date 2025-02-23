"use client";

import { navlinks } from "@/contstants/navlinks";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  return (
    <div className="absolute w-full flex justify-center mt-6">
      <div className="p-1 rounded-lg bg-card flex gap-4">
        {navlinks.map((navlink) => (
          <NavButton
            key={navlink.name}
            name={navlink.name}
            href={navlink.href}
          />
        ))}
      </div>
    </div>
  );
};

const NavButton = ({
  name,
  href,
}: {
  name: string;
  href: string | undefined;
}) => {
  const path = usePathname();
  const isActive = path === href;

  console.log(path);

  return (
    <Link href={href ? href : "/"}>
      <div
        className={cn("flex-1 rounded-md py-1 px-2", isActive && "bg-softgray")}
      >
        <p
          className={cn(
            "text-sm font-bold text-center",
            isActive ? "text-white" : "text-gray-400"
          )}
        >
          {name}
        </p>
      </div>
    </Link>
  );
};

export default Nav;
