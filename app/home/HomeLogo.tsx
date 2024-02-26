"use client";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import HomeNavbar from "../components/HomeNavbar";

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
        pin: "#wrapper",
        scrub: 1,
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#industry",
          scrub: 1,
          start: "-310px",
          end: "+=2000",
          pin: "#wrapper",
        },
      })
      .from("#sustainability", {
        y: 400,
      })
      .to("#healthcare", { scale: 0.6, y: 290 }, "dddd")
      .to("#industry", { scale: 0.6, y: 130, x: 20.6 }, "dddd")
      .to("#sustainability", { scale: 0.6, y: 60, x: -60 }, "dddd");
    gsap.to(".rotate", {
      rotation: 360,
      transformOrigin: "center",
      ease: "none",
      duration: 10,
      repeat: -1,
    });

    gsap.set(".home-nav", { autoAlpha: 0 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#healthcare",
          scrub: true,
          start: "top 10%",
        },
      })
      .to(".home-nav", { autoAlpha: 1 });
  });

  return (
    <div>
      <div className="flex justify-end m-20 text-[2rem] fixed top-0 right-0 home-nav z-10">
        <HomeNavbar />
      </div>

      <div id="wrapper" className="relative h-[75rem] w-[50rem] mx-auto ">
        <div id="healthcare">
          <Image width={750} height={750} src="/healthcare.svg" alt="" />
          <div className="absolute top-[6rem] left-[4rem]  flex-col items-center text-center">
            <p className="text-white text-[2.25rem] font-semibold">
              Health care
            </p>
            <Link
              href="/healthcare"
              className="rounded bg-button text-white font-medium text-center text-[1.75rem] px-1"
            >
              Read more
            </Link>
          </div>
        </div>
        <div id="industry" className="absolute top-[25.2rem] -left-[2rem] ">
          <Image width={750} height={750} src="/industry.svg" alt="" />
          <div className="absolute top-[8rem] left-[34rem]  flex-col items-center text-center">
            <p className="text-white text-[2.25rem] font-semibold">Industry</p>{" "}
            <Link
              href="/sensor"
              className="rounded bg-button text-white font-medium text-center text-[1.75rem] px-1"
            >
              Read more
            </Link>
          </div>
        </div>
        <div id="sustainability" className="absolute top-[50rem] left-[25rem] ">
          <Image
            width={360}
            height={360}
            src="/sustainability.svg"
            alt=""
            className="rotate"
          />
          <div className="absolute top-[8rem] left-[5rem] text-black flex-col items-center text-center">
            <p className="text-[2.1rem] font-semibold">Sustainabilty</p>{" "}
            <Link
              href="/sustainability"
              className="rounded bg-button font-medium text-center text-[1.75rem] py-1"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLogo;
