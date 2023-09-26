"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "./Hero";

export const Collaboration = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
      const timelineHeader = gsap.timeline({
      scrollTrigger: {
        id: "ZOOM", 
        trigger: ".image-1", 
        scrub: 3,
        start: "40%", 
        end: "+=1200", 
      },
    });

    timelineHeader.to(".image-1", {
      scale: 50,
      opacity: 0,
    });
  }, []);

  return (
    <div>
      <section id="header-zoom ">
        <div className="zoom">
          <div className="image image-1">
            <Image
              src="/main-screen.png"
              width={1500}
              height={1500}
              alt="logo"
              priority={true}
              className="mt-[-22vh]"
            />
            <div className="">
              <Hero />
              <Hero />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
