"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Image from "next/image";
import { BlowingSvg } from "./BlowingSVG";

export default function HealthcareList() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);
  useEffect(() => {
    gsap.fromTo(
      ".test",
      { transform: "scale(1)" },
      {
        transform: "scale(1.005)",
        duration: 1,
        ease: "power3.inOut",
        yoyo: true,
        repeat: -1,
      }
    );
    gsap.to("#rect", {
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "none",

      motionPath: {
        path: [
          { x: 0.450545, y: 0.783185 },
          { x: 141.451, y: 293.783 },
        ],
      },
    });
  }, []);
  return (
    <section className="p-10">
      <div className="grid py-8 mx-auto gap-5 grid-cols-12 ">    
        <div className="text-4xl col-span-3 self-center">
          <p>
            Peckiiless makes health care the future easier and safer for the
            user. 1.5 million deaths are directly attributed to diabetes each
            year.
          </p>
        </div>
        <div className="col-span-9 ">
          <BlowingSvg />
        </div>
      </div>
    </section>
  );
}
