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

    gsap.to(".text-animation", {
      y: -600,
      duration: 3,
      scrollTrigger: {
        trigger: ".text-animation",
        scrub: 0.25,
        start: "top center",
      },
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
      <div className="text-animation absolute top-[60%] text-white text-center text-[2.2rem] font-medium">
        <p>Welcome to Peckiiless,</p>
        <p>where we breathe life into gas</p>
        <p>monitoring and reveal the secrets of gases.</p>
      </div>
    </div>
  );
};
