"use client";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

export const Collaboration = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(
    scrollYProgressIncludingOverlap,
    [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [1, 5, 10, 15, 20, 25, 35, 40, 45]
  );
  const x = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ["0vw", "-2vw", "-3vw", "-4vw"]
  );
  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0.2, 0.3, 0.35, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [
      "0",
      "-150vh",
      "-250vh",
      "-350vh",
      "-550vh",
      "-750vh",
      "-950vh",
      "-850vh",
      "-950vh",
      "-1000vh",
    ]
  );
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section ref={targetRef} className="relative  mt-[-94vh] h-[300vh]">
      <div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-0">
          <div className="flex justify-center">
            <motion.div style={{ scale, y }} className="">
              <motion.img
                style={{ opacity }}
                src="/main-screen.png"
                className="h-auto max-h-none w-[34vw]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
