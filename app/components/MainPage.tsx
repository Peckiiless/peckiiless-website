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
        trigger: ".zoom",
        scrub: 2,
        start: "20%",
        // end: "+=1200",
        markers: true,
      },
    });

    timelineHeader.to(".image-1", {
      scale: 15,
      stagger: 0.25,
      duration: 2,
      opacity: 0,
    });
  }, []);

  return (
    <div className="flex justify-center overflow-hidden zoom h-full">
      <div className="image-1">
        <Image
          src="/main-screen.png"
          width={1400}
          height={1400}
          alt="logo"
          priority={true}
          className="mt-[-15vh]"
        />
        <div>
          <Hero />
          <Hero />
        </div>
      </div>
    </div>
  );
};
