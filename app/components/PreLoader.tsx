"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const words = [
  "Welcome to Peckiiless",
  "where we breathe life into gas monitoring",
  "and reveal the secrets of gases",
];
export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

const PreLoader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 3000 : 3000
    );
  }, [index]);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
      .from(".texts-container .text-animation", {
        duration: 1.5,
        delay: 9,
        stagger: 0.4,
        ease: "Power3.easeOut",
      })

      .to(
        ".preloader",
        {
          duration: 1.5,
          opacity: 0,
          scale: .7,
          ease: "Power3.easeOut",
        },
        "-=2"
      )

      .to(".preloader", {
        duration: 0,
        css: { display: "none" },
      });
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <div className="text-animation   text-center text-[5rem] font-bold">
          <motion.p variants={opacity} initial="initial" animate="enter">
            {words[index]}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
