import Link from "next/link";
import React from "react";
import Socials from "./Socials";

function Header() {
  return (
    <header className="w-full z-30 absolute flex items-center  xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-2">
          {/* name */}
          <Link href={"/"} className="text-3xl text-center">
            <span className="font-bold xl:text-5xl text-accent">Bassam</span>{" "}
            Elsayed.
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
}

export default Header;
