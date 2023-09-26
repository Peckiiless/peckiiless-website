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
        id: "ZOOM",
        trigger: ".image-1",
        scrub: 1,
        start: "22%",
        end: "+=1200",
      },
    });

    timelineHeader.to(".image-1", {
      scale: 50,
      opacity: 0,
    });
  }, []);

  return (
    <div className="flex justify-center overflow-hidden">
      <div className="image-1">
        <Image
          src="/main-screen.png"
          width={1500}
          height={1500}
          alt="logo"
          priority={true}
          className="mt-[-22vh]"
        />
        <div>
          <Hero />
          <Hero />
        </div>
      </div>
    </div>
  );
};
