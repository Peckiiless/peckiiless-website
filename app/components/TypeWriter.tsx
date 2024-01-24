"use client";
import React, { useState, useEffect } from "react";

type TypeWritter = {
  prep: string;
  suffix: string;
}[];

export default function TypeWriter({
  appendClass,
  hats,
  prefix,
}: {
  appendClass: string;
  hats: TypeWritter;
  prefix: string;
}) {
  // Outer container base class + append custom class
  let className = "flex flex-col gap-4";
  if (appendClass) className += " " + appendClass;

  // Typewriter effect base class
  const typeWriterClass =
    "font-bold pr-1" +
    "animate-cursor overflow-hidden whitespace-nowrap transition-[width] ease-in-out duration-1000 mr-auto";

  // State of current hat index
  const [currentHat, setCurrentHat] = useState(0);
  // State to toggle word collapse effect
  const [collapseClass, setCollapseClass] = useState(" w-0");

  useEffect(() => {
    setTimeout(() => setCollapseClass(" w-full"), 200);

    const incrementHat = async () => {
      // Set the width to 0 - transition duration is 1000ms
      setCollapseClass(" w-0");
      setTimeout(() => {
        /**
         * After 1100ms, change the displayed text while the div
         * is collapsed by incrementing the index
         */
        setCurrentHat((oldVal) => {
          let hatIndex;
          if (oldVal >= hats.length - 1) {
            hatIndex = 0;
          } else {
            hatIndex = oldVal + 1;
          }

          return hatIndex;
        });
      }, 1100);
      // After 1000ms, set width to 100% - transition duration is 1000ms
      setTimeout(() => {
        setCollapseClass(" w-full");
      }, 1000);
    };
    // Interval timer to change text every 4000ms
    const id = setInterval(incrementHat, 2000);

    // Cleanup interval timer
    return () => clearInterval(id);
  }, []); //  eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={className}>
      <div className="text-5xl md:text-6xl mx-auto">
        Sensors for enabling tomorrow’s
      </div>
      <div className="text-2xl md:text-4xl text-nav">
        <div className={`${typeWriterClass}${collapseClass}`}>
          {hats[currentHat].suffix}
        </div>
      </div>
    </div>
  );
}
