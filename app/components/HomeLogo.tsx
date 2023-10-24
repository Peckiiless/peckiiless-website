import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeLogo = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from("#industry", {
      y: 600,
      scrollTrigger: {
        trigger: "#healthcare",
        start: "center center",
        end: "+=200",
        // markers: true,
        pin: "#wrapper",
        scrub: true,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#industry",
          scrub: true,
          start: "-250px",
          end: "+=1000",
          // markers: true,
          pin: "#wrapper",
        },
      })
      .from("#sustainability", {
        y: 400,
      })
      .to("#healthcare", { scale: 0.5, y: 500 }, "dddd")
      .to("#industry", { scale: 0.5, y: 260, x: 20 }, "dddd")
      .to("#sustainability", { scale: 0.5, y: 150, x: -100 }, "dddd");

    gsap.to("#sustainability", {
      rotation: 360,
      transformOrigin: "center",
      ease: "none",
      duration: 6,
      repeat: -1,
    });
  });

  return (
    <div id="wrapper" className="relative h-[250vh]">
      <div className="">
        <Image
          width={900}
          height={900}
          src="/healthcare.png"
          alt=""
          id="healthcare"
          className="absolute top-[62vh] left-[50vw] -translate-x-1/2 -translate-y-1/2"
        />
        {/* <div className="absolute top-[14%] left-[19%] ">
          <p className="text-white text-[2rem] font-medium">Health care</p>{" "}
          <button className="rounded bg-button text-white font-medium  text-[1.325rem] p-1">
            Read more
          </button>
        </div> */}
        <Image
          width={900}
          height={900}
          src="/industry.png"
          alt=""
          id="industry"
          className="absolute top-[132vh] left-[47.6vw] -translate-x-1/2 -translate-y-1/2"
        />

        <Image
          width={400}
          height={400}
          src="/sustainability.svg"
          alt=""
          id="sustainability"
          className="rotate absolute top-[162vh] left-[65%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default HomeLogo;
