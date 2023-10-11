"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "./Hero";

export const MainPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const timelineHeader = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger",
        scrub: 2,
        start: "40%",
        end: "+=1000px",
      },
    });

    timelineHeader
      .to(".zoom", {
        scale: 5,
        transformOrigin: "48% 92%",
      })
      .to(
        "#fade",
        {
          opacity: 0.5,
          scale: 0.5,
          ease: "none",
        },
        0
      )
      .to(
        "#section1",
        {
          y: "-100%",
          duration: 2,
        },
        1
      );
  }, []);

  return (
    <div className="trigger flex justify-center overflow-hidden pb-[30vh]">
      <div className="zoom">
        <Image
          src="/etty.svg"
          width={1000}
          height={1000}
          alt="logo"
          priority={true}
          className="zoom"
        />
      </div>
    </div>
  );
};
