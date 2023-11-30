'use client'
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeLogo = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
    gsap.from("#industry", {
      y: 600,
      scrollTrigger: {
        trigger: "#healthcare",
        start: "center center",
        end: "+=300",
        // markers: true,
        pin: "#wrapper",
        scrub: 1,
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#industry",
          scrub: 1,
          start: "-250px",
          end: "+=2000",
          // markers: true,
          pin: "#wrapper",
        },
      })
      .from("#sustainability", {
        y: 300,
      })
      .to("#healthcare", { scale: 0.6, y: 340 }, "dddd")
      .to("#industry", { scale: 0.6, y: 180, x: 17 }, "dddd")
      .to("#sustainability", { scale: 0.6, y: 110, x: -60 }, "dddd");
    gsap.to("#sustainability", {
      rotation: 360,
      transformOrigin: "center",
      ease: "none",
      duration: 10,
      repeat: -1,
    });
  });

  return (
    <div id="wrapper" className="relative h-[100rem] w-[50rem] mx-auto">
      <div className="-translate-x-1/2 -translate-y-1/2">
        <Image
          width={750}
          height={750}
          src="/healthcare.svg"
          alt=""
          id="healthcare"
          className="absolute top-[2rem] left-[25rem]"
        />
        {/* <div className="absolute top-[14%] left-[19%] ">
          <p className="text-white text-[2rem] font-medium">Health care</p>{" "}
          <button className="rounded bg-button text-white font-medium  text-[1.325rem] p-1">
            Read more
          </button>
        </div> */}
        <Image
          width={750}
          height={750}
          src="/industry.svg"
          alt=""
          id="industry"
          className="absolute top-[27.2rem] left-[23rem] "
        />

        <Image
          width={300}
          height={300}
          src="/sustainability.svg"
          alt=""
          id="sustainability"
          className="rotate absolute top-[53rem] left-[50rem] "
        />
      </div>
    </div>
  );
};

export default HomeLogo;
