"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentRoute = usePathname();

  const links = [
    { path: "/", label: "Home" },
    { path: "/healthcare", label: "Healthcare" },
    { path: "/product-info", label: "Industry" },
    { path: "/sustainability", label: "Sustainability" },
    { path: "/about-us", label: "About Us" },
  ];

  return (
    <nav className="graidient h-[4.6875rem] px-16  drop-shadow-xl z-10 flex justify-between items-center">
      <h1 className="text-2xl  text-white grid place-content-center mb-2 md:mb-0">
        <Link
          href="/"
          className="text-white no-underline hover:text-white/90 flex items-center gap-1"
        >
          <Image
            className="mr-5"
            src="/images/logo-sm.png"
            width={29}
            height={45}
            alt="logo"
            priority={true}
          />

          <Image
            className="mr-5"
            src="/images/peckiiless.png"
            width={163}
            height={34}
            alt="logo"
            priority={true}
          />
        </Link>
      </h1>
      <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-12 text-white text-[1.375rem] font-semibold">
        {links.map(({ path, label }) => (
          <Link key={path} href={path} passHref>
            <div
              className={`text-white   hover:text-white/90 no-underline ${
                currentRoute === path ? "font-bold" : "font-normal"
              }`}
            >
              {label}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
