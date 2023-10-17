"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const currentRoute = usePathname();
  const [active, setActive] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/healthcare", label: "Healthcare" },
    { path: "/product-info", label: "Industry" },
    { path: "/sustainability", label: "Sustainability" },
    { path: "/about-us", label: "About Us" },
  ];

  return (
    // <nav className="graidient h-[4.6875rem] px-16   drop-shadow-xl z-10 flex justify-between items-center">
    //   <h1 className="text-2xl  text-white grid place-content-center mb-2 md:mb-0">
    //     <Link
    //       href="/"
    //       className="text-white no-underline hover:text-white/90 flex items-center gap-1"
    //     >
    //       <Image
    //         className="mr-5"
    //         src="/images/logo-sm.png"
    //         width={29}
    //         height={45}
    //         alt="logo"
    //         priority={true}
    //       />

    //       <Image
    //         className="mr-5"
    //         src="/images/peckiiless.png"
    //         width={163}
    //         height={34}
    //         alt="logo"
    //         priority={true}
    //       />
    //     </Link>
    //   </h1>
    //   <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-14 leading-[3rem] text-[1.375rem] ">
    //     {links.map(({ path, label }) => (
    //       <Link key={path} href={path} passHref>
    //         <div
    //           className={`text-white   hover:text-white/90 no-underline ${
    //             currentRoute === path ? "font-bold" : "font-medium"
    //           }`}
    //         >
    //           {label}
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    // </nav>

    <header className="graidient">
      <nav className="flex justify-between items-center w-[92%] h-[5rem] mx-auto">
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
        <div
          className={`${
            active && "top-[4.93rem] graidient"
          } duration-500 md:static absolute   md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col items-center mx-auto  md:gap-[4vw] gap-8">
            {links.map(({ path, label }) => (
              <Link key={path} href={path} passHref>
                <div
                  className={`text-white   hover:text-white/90 no-underline ${
                    currentRoute === path ? "font-bold" : "font-medium"
                  }`}
                >
                  {label}
                </div>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6"  onClick={() => setActive(!active)}>         
          {active ? 
              <div
            className="text-3xl text-white cursor-pointer md:hidden"
           
          >
            x
          </div>:<svg
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
          }
        </div>
      </nav>
    </header>
  );
}
