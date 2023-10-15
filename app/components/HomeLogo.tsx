import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeLogo = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to("#healthcare", {
      scrollTrigger: {
        scrub: 0.5,
      },
    });

    gsap.to("#industry", {
      scrollTrigger: {
        scrub: 0.5,
      },
      //y: -700,
    });

    gsap.from("#sustainability", {
      scrollTrigger: {
        scrub: 1,
      },
      // x: -100,
      // y: -100,
    });
  });

  return (
    <div className="flex justify-center mt-7 h-screen">
      <div className="relative h-[80rem] w-[50rem]">
        <Image
          width={400}
          height={400}
          src="/healthcare.png"
          alt=""
          id="healthcare"
          className="absolute m-auto left-0 right-0"
        />
        <Image
          width={400}
          height={400}
          src="/industry.png"
          alt=""
          id="industry"
          className="absolute m-auto left-[23.0%] top-[17%]"
        />
        <Image
          width={150}
          height={150}
          src="/sustainability.png"
          alt=""
          id="sustainability"
          className="absolute m-auto right-[27.5%] top-[36%]"
        />
      </div>
    </div>
  );
};

export default HomeLogo;
