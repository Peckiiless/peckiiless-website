import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeLogo = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from("#industry", {
      y: 300,
      scrollTrigger: {
        trigger: "#healthcare",
        start: "center center",
        end: "+=200",
        // markers: true,
        pin: "#wrapper",
        scrub: true,
      },
    });
    gsap.from("#sustainability", {
      y: 200,
      scrollTrigger: {
        trigger: "#industry",
        scrub: true,
        start: "-400px",
        end: "+=50px",
        // markers: true,
      },
    });
    gsap.to("#sustainability", {
      rotation: 360,
      transformOrigin: "center",
      ease: "none",
      duration: 6,
      repeat: -1,
    });
  });

  return (
    <div id="wrapper" className="relative h-screen">
      <div className="">
        <Image
          width={500}
          height={500}
          src="/healthcare.png"
          alt=""
          id="healthcare"
          className="absolute top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        {/* <div className="absolute top-[14%] left-[19%] ">
          <p className="text-white text-[2rem] font-medium">Health care</p>{" "}
          <button className="rounded bg-button text-white font-medium  text-[1.325rem] p-1">
            Read more
          </button>
        </div> */}
        <Image
          width={500}
          height={500}
          src="/industry.png"
          alt=""
          id="industry"
          className="absolute top-[70.5%] left-[48.7%] -translate-x-1/2 -translate-y-1/2"
        />

        <Image
          width={200}
          height={200}
          src="/sustainability.svg"
          alt=""
          id="sustainability"
          className="absolute top-[89%] left-[58%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default HomeLogo;
