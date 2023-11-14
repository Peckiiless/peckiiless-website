"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";

const PreLoader = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
      .from(".texts-container .text-animation", {
        duration: 1.5,
        delay: 3,
        stagger: 0.4,
        ease: "Power3.easeOut",
      })

      .to(
        ".preloader",
        {
          duration: 1.5,
          height: "0vh",
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
        <div className="text-animation   text-center text-[2.2rem] font-medium">
          <p>Welcome to Peckiiless,</p>
          <p>where we breathe life into gas</p>
          <p>monitoring and reveal the secrets of gases.</p>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
