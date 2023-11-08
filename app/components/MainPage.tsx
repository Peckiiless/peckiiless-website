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
        scrub: 0.25,
        start: "50%",
        end: "+=200px",
        pin: true,
      },
    });

    timelineHeader.to(".zoom", {
      scale: 5,
      transformOrigin: "48% 90%",
      duration: 2,
    });

  }, []);

  return (
    <div className="trigger flex justify-center overflow-hidden pb-[50vh] relative">
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
