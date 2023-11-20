"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar({ navColor = "#fff" }: { navColor?: string }) {
  const currentRoute = usePathname();
  const [active, setActive] = useState(false);

  const links = [
    { path: "/healthcare", label: "Healthcare" },
    { path: "/industry", label: "Industry" },
    { path: "/sustainability", label: "Sustainability" },
    { path: "/product", label: "Product" },
    { path: "/about-us", label: "About Us" },
  ];

  return (
    <header className={`text-[${navColor}]`}>
      <nav className="flex justify-between items-center w-[92%] h-[4.6875rem] mx-auto text-[1.25rem]">
        <h1 className="  grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className=" no-underline hover:text-white/90 flex items-center gap-1"
          >
            <Logo
              fillLogo={navColor}
              fillText={navColor}
            />
          </Link>
        </h1>
        <div
          className={`${
            active && "top-[0rem] z-10"
          } duration-500 md:static absolute   md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col items-center mx-auto  md:gap-[4vw] gap-8">
            {links.map(({ path, label }) => (
              <Link key={path} href={path} passHref>
                <div
                  className={`   hover:text-white/90 no-underline ${
                    currentRoute === path ? "font-bold" : "font-normal"
                  }`}
                >
                  {label}
                </div>
              </Link>
            ))}
          </ul>
        </div>
        <div
          className="flex items-center gap-6 md:hidden"
          onClick={() => setActive(!active)}
        >
          {active ? (
            <div className="text-3xl  cursor-pointer md:hidden z-10">x</div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </nav>
    </header>
  );
}
