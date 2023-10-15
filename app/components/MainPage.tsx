// @ts-nocheck

import { useEffect, useState } from "react";
import Img from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "./Hero";

export const MainPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // const timelineHeader = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".trigger",
    //     scrub: 2,
    //     start: "50%",
    //     end: "+=1200px",
    //     pin: true,
    //   },
    // });

    // timelineHeader.to(".zoom", {
    //   scale: 20,
    //   transformOrigin: "53% 89%",
    //   duration: 2,
    // });

    if (document.getElementById("paint-drops")) {
      // set canvas properties for paint drops
      const dropCanvas = document.getElementById("paint-drops");
      const dropContext = dropCanvas.getContext("2d");
      // Set the size of the canvas
      dropCanvas.width = 2220;
      dropCanvas.height = 1080;
      // Count the frames and set the path to the images
      const dropFrameCount = 6;
      const currentDropFrame = (index) =>
        `/images/etty/${(index + 1).toString()}.png`;
      // Set start frame
      const dropImages = [];
      const drop = {
        dropFrame: 0,
      };
      // Go through frames from start to finish
      for (let i = 0; i < dropFrameCount; i++) {
        const dropImg = new Image();
        dropImg.src = currentDropFrame(i);
        dropImages.push(dropImg);
      }

      // DESIGN DESKTOP
      const designSection = gsap.timeline({
        scrollTrigger: {
          trigger: ".design",
          start: "top top",
          end: "+=2500",
          toggleActions: "restart none none reverse",
          duration: 5,
          scrub: 1,
          pin: true,
          markers: false,
        },
      });
      designSection.add("start").to(
        drop,
        {
          dropFrame: dropFrameCount - 1,
          snap: "dropFrame",
          duration: 50,
          ease: "linear",
          onUpdate: dropRender, // use animation onUpdate instead of scrollTrigger's onUpdate
        },
        "start"
      );
      // .fromTo(
      //   ".design-title",
      //   {
      //     y: 100,
      //     autoAlpha: 0,
      //   },
      //   {
      //     y: 0,
      //     autoAlpha: 1,
      //     duration: 8,
      //     delay: 5,
      //     ease: "power4.out",
      //   },
      //   "start"
      // )
      // .fromTo(
      //   ".design-paragraph",
      //   {
      //     y: 50,
      //     autoAlpha: 0,
      //   },
      //   {
      //     y: 0,
      //     autoAlpha: 1,
      //     duration: 5,
      //     delay: 10,
      //     ease: "power4.out",
      //   }
      // );

      dropImages[0].onload = dropRender;

      function dropRender() {
        dropContext.clearRect(0, 0, dropCanvas.width, dropCanvas.height);
        dropContext.drawImage(dropImages[drop.dropFrame], 0, 0);
      }
    } //endif
  }, []);

  return (
    // <div className="trigger flex justify-center overflow-hidden pb-[30vh]">
    //   <div className="zoom">
    //     <Image
    //       src="/etty2.png"
    //       width={1200}
    //       height={1200}
    //       alt="logo"
    //       priority={true}
    //       className="zoom"
    //     />
    //   </div>
    // </div>
    <>
      <section id="design" class="design">
        <div class="design-pin">
          <div class="design-images">
            <canvas loading="lazy" id="paint-drops"></canvas>
          </div>
        </div>
      </section>
    </>
  );
};
