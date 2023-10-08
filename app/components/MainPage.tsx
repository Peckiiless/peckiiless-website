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
        start: "center",
        end: "+=10000px",
      },
    });

    timelineHeader
      .to(".zoom", {
        scale: 6,
        transformOrigin: "48% 92%",
        ease: "none",
      })
      .to(
        ".fade",
        {
          scale: 6,
          ease: "none",
          transformOrigin: "48% 92%",
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
    <div className=" flex justify-center overflow-hidden pb-[30vh]  mt-[-20vh]">
      <div className="trigger">
        <Image
          src="/etty.png"
          width={1500}
          height={1500}
          alt="logo"
          priority={true}
          className="fade"
        />
        <Image
          src="/pattern1.svg"
          width={1500}
          height={1500}
          alt="logo"
          priority={true}
          className="zoom"
        />
      </div>
    </div>
  );
};
