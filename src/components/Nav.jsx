"use client";

import { navData } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Nav() {
  const pathName = usePathname();

  return (
    <nav className="fixed bottom-0 xl:right-[2%] z-50 w-full xl:w-16 xl:max-w-md xl:h-screen flex flex-col items-center xl:justify-center gap-y-4">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[60px] py-8 bg-white/10 xl:h-max backdrop-blur-sm text-2xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathName ? "text-accent" : ""
            } hover:text-accent transition-all duration-300 group relative flex items-center`}
          >
            {/* Hover name (tooltip) */}
            <div className="pr-14 absolute right-0 hidden xl:group-hover:flex">
              <div className="flex relative bg-white text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] capitalize leading-none font-semibold">
                  {link.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            {/* Icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
