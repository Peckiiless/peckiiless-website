'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
  return (
    <div
      className={`${
        active ? "shadow-lg" : ""
      } graidient h-[4.6875rem] w-full top-0 left-0 z-20 relative`}
    >
      <div
        className={`${
          active ? "py-2 transition-all duration-300" : "py-4"
        } container  mx-auto flex items-center justify-between px-2`}
      >
        <div className="flex justify-between gap-4">          
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
            className="sm:hidden cursor-pointer absolute right-5 top-8"
            onClick={() => setToggle(true)}
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z" fill="white"/>
          </svg>
          </div>
        </div>
        <div className="sm:flex items-center hidden text-white text-[1.375rem] hover:text-white/90 no-underline">
          {navLinks.map((navLink) => {
            return <NavLink key={navLink.id} {...navLink} />;
          })}
        </div>

        {toggle && (
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed h-full w-96 top-0 left-0 z-20 bg-secondary-navy text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
          >
            {navLinks.map((navLink) => {
              return (
                <MobileNavLinks
                  key={navLink.id}
                  {...navLink}
                  setToggle={setToggle}
                />
              );
            })}
            <div
              className="absolute right-12 top-12 text-3xl cursor-pointer"
              onClick={(prev) => setToggle(!prev)}
            >
              x
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

 const navLinks = [
  {
    id: 1,
    href: "healthcare",
    link: "Healthcare",
  },
  {
    id: 2,
    href: "industry",
    link: "Industry",
  },
 
  {
    id: 3,
    href: "sustainability",
    link: "Sustainability",
  },
   {
    id: 4,
    href: "product",
    link: "Product",
  },
  {
    id: 5,
    href: "about-us",
    link: "About Us",
  },
];