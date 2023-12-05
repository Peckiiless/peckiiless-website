"use client";
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
          start: "-280px",
          end: "+=2000",
          // markers: true,
          pin: "#wrapper",
        },
      })
      .from("#sustainability", {
        y: 600,
      })
      .to("#healthcare", { scale: 0.6, y: 340 }, "dddd")
      .to("#industry", { scale: 0.6, y: 180, x: 21 }, "dddd")
      .to("#sustainability", { scale: 0.6, y: 110, x: -60 }, "dddd");
    gsap.to(".rotate", {
      rotation: 360,
      transformOrigin: "center",
      ease: "none",
      duration: 6,
      repeat: -1,
    });
  });

  return (
    <div id="wrapper" className="relative h-[75rem] w-[50rem] mx-auto">
      <div>
        <div id="healthcare">
          <Image width={750} height={750} src="/healthcare.svg" alt="" />
          <div className="absolute top-[6rem] left-[4rem] flex flex-col">
            <p className="text-white text-[1.75rem] font-medium">Health care</p>{" "}
            <button className="rounded bg-button text-white font-medium  text-[1rem] p-1">
              Read more
            </button>
          </div>
        </div>
        <div id="industry" className="absolute top-[25.2rem] -left-[2rem] ">
          <Image width={750} height={750} src="/industry.svg" alt="" />
          <div className="absolute top-[8rem] left-[34rem] flex flex-col">
            <p className="text-white text-[1.75rem] font-medium">Industry</p>{" "}
            <button className="rounded bg-button text-white font-medium  text-[1rem] p-1">
              Read more
            </button>
          </div>
        </div>
        <div id="sustainability" className="absolute top-[50rem] left-[25rem] ">
          <Image
            width={340}
            height={340}
            src="/sustainability.svg"
            alt=""
            className="rotate"
          />
          <div className="absolute top-[8rem] left-[6rem] text-black flex flex-col">
            <p className="text-[1.75rem] font-medium">Sustainabilty</p>{" "}
            <button className="rounded bg-button font-medium  text-[1rem] py-1">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLogo;
