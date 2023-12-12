"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";


const items = ["Welcome to Peckiiless",
  "where we breathe life into gas monitoring",
  "and reveal the secrets of gases",];

const PreLoader = () => {
  const itemVariants = {
    initial: { opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

 
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
        <div className="text-animation text-center text-[5rem] font-bold ">

          {items.map((item, i) => (
            <motion.p
            key={i}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, delay: i * 3 }}  
              className={`${i===0 && "text-[#19416C]"}`}            
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
