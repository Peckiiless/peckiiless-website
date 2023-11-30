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
        end: "+=30",
        // markers: true,
        pin: "#wrapper",
        scrub: 1,
        once: true,
      },
    });
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#industry",
    //     scrub: 1,
    //     start: "-250px",
    //     end: "+=5",
    //     // markers: true,
    //     pin: "#wrapper",
    //     once: true,
    //   },
    // });
    gsap.from("#sustainability", {
      y: 500,
      scrollTrigger: {
        trigger: "#industry",
        pin: "#wrapper",
        start: "-550px",
        end: "+=3",
        // markers: true,
        scrub: 1,
        once: true,
      },
    });

    gsap.to(".rotate", {
      rotation: 360,
      transformOrigin: "center",
      ease: "none",
      duration: 10,
      repeat: -1,
    });
  });

  return (
    <div id="wrapper" className="relative h-[75rem] w-[50rem] mx-auto">
      <div className="">
        <div>
          <Image
            width={750}
            height={750}
            src="/healthcare.svg"
            alt=""
            id="healthcare"
            className=""
          />
          <div className="absolute top-[6rem] left-[4rem] flex flex-col">
            <p className="text-white text-[2rem] font-medium">Health care</p>{" "}
            <button className="rounded bg-button text-white font-medium  text-[1.325rem] p-1">
              Read more
            </button>
          </div>
        </div>
        <div id="industry" className="absolute top-[25.2rem] -left-[2rem] ">
          <Image width={750} height={750} src="/industry.svg" alt="" />

          <div className="absolute top-[8rem] left-[34rem] flex flex-col">
            <p className="text-white text-[2rem] font-medium">Industry</p>{" "}
            <button className="rounded bg-button text-white font-medium  text-[1.325rem] p-1">
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
          <div className="absolute top-[8rem] left-[5rem] text-black flex flex-col">
            <p className=" text-[2rem] font-medium">Sustainabilty</p>{" "}
            <button className="rounded bg-button font-medium  text-[1.325rem] p-1">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLogo;
