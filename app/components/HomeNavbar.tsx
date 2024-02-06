"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

 const links = [
    { path: "/healthcare", label: "Healthcare" },
    { path: "/breathalyzer", label: "Breathalyzer" },
    { path: "/sensor", label: "Gas Sensor" },
    { path: "/sustainability", label: "Sustainability" },
    { path: "/about-us", label: "About Us" },
  ];

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const currentRoute = usePathname();

  return (
    <>
    
      {showSidebar ? (
        <button
          className="flex text-4xl text-nav items-center cursor-pointer  right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#19416C"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`flex items-center top-0 left-0 w-[35vw] bg-nav  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <ul className="flex  flex-col items-center justify-center mx-auto  gap-8">
          {links.map(({ path, label }) => (
            <Link key={path} href={path} passHref>
              <div
                className={`no-underline ${
                  currentRoute === path ? "font-bold" : "font-normal"
                }`}
              >
                {label}
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
