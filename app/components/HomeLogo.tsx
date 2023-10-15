import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeLogo = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#trigger",
          scrub: 2,
          start: "-100px",
          end: "+=200px",
          pin: true,
          markers: true,
        },
      })

      .from(
        "#industry",
        {
          x: -350,
          duration: 3,
        },
        "myLabel"
      )

      .from(
        "#sustainability",
        {
          y: 150,
          duration: 3,
        },
        "myLabel"
      );
  });

  return (
    <div id="trigger" className="flex justify-center mt-16 h-screen">
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
