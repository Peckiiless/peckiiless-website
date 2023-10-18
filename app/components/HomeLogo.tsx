import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeLogo = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from("#industry", {
      y: 800,
      scrollTrigger: {
        trigger: "#healthcare",
        scrub: 2,
        start: "400px",
        end: "+=50px",
        markers: false,
      },
    });
    gsap.from("#sustainability", {
      y: 400,
      scrollTrigger: {
        trigger: "#industry",
        scrub: 2,
        start: "-340px",
        end: "+=50px",
        markers: true,
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
    <div id="trigger" className=" relative h-[120rem]">
      <div className="">
        <Image
          width={1200}
          height={1200}
          src="/healthcare.png"
          alt=""
          id="healthcare"
          className="absolute top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute top-[14%] left-[19%] ">
          <p className="text-white text-[2rem] font-medium">Health care</p>{" "}
          <button className="rounded bg-button text-white font-medium  text-[1.325rem] p-1">
            Read more
          </button>
        </div>
        <Image
          width={1200}
          height={1200}
          src="/industry.png"
          alt=""
          id="industry"
          className="absolute top-[67.7%] left-[47.3%] -translate-x-1/2 -translate-y-1/2"
        />

        <Image
          width={450}
          height={450}
          src="/sustainability.svg"
          alt=""
          id="sustainability"
          className="absolute top-[86%] left-[66.5%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default HomeLogo;
