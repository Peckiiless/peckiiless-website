import { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const MainPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const timelineHeader = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger",
        scrub: 2,
        start: "55%",
        end: "+=1500px",
        pin: true,
      },
    });

    timelineHeader.to(".zoom", {
      scale: 10,
      transformOrigin: "48% 90%",
      duration: 4,
    });
  }, []);

  return (
    <div className="trigger flex justify-center overflow-hidden pb-[30vh]">
      <div className="zoom">
        <Image
          src="/etty3.png"
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
