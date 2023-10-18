import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeLogo = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from("#industry", {
      y: 500,
      scrollTrigger: {
        trigger: "#healthcare",
        scrub: 2,
        start: "-200px",
        end: "+=50px",
        markers: false,
      },
    });
    gsap.from("#sustainability", {
      y: 400,
      scrollTrigger: {
        trigger: "#industry",
        scrub: 2,
        start: "-900px",
        end: "+=50px",
        markers: false,
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
    <div id="trigger" className="relative h-[120rem]">
      <div className="">
        <Image
          width={800}
          height={800}
          src="/healthcare.png"
          alt=""
          id="healthcare"
          className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        {/* <div className="absolute top-[14%] left-[19%] ">
          <p className="text-white text-[2rem] font-medium">Health care</p>{" "}
          <button className="rounded bg-button text-white font-medium  text-[1.325rem] p-1">
            Read more
          </button>
        </div> */}
        <Image
          width={800}
          height={800}
          src="/industry.png"
          alt=""
          id="industry"
          className="absolute top-[45%] left-[48.4%] -translate-x-1/2 -translate-y-1/2"
        />

        <Image
          width={320}
          height={320}
          src="/sustainability.svg"
          alt=""
          id="sustainability"
          className="absolute top-[56%] left-[61.5%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default HomeLogo;
