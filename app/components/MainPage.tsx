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
        start: "50%",
        end: "+=1200px",
        pin: true,
      },
    });

    timelineHeader.to(".zoom", {
      scale: 20,
      transformOrigin: "53% 89%",
      duration: 2,
    });
  }, []);

  return (
    <div className="trigger flex justify-center overflow-hidden pb-[30vh]">
      <div className="zoom">
        <Image
          src="/etty2.png"
          width={1200}
          height={1200}
          alt="logo"
          priority={true}
          className="zoom"
        />
      </div>
    </div>
  );
};
