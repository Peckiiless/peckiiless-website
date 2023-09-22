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
    [0.1, 0.4, 0.5, 0.75, 1],
    [1, 5, 8, 15, 19]
  );
  const x = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ["0vw", "-2vw", "-3vw", "-4vw"]
  );
  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 0.09, 1],
    ["0", "0", "-720vh", "-950vh", "-750vh"]
  );
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <section ref={targetRef} className="relative z-10 mt-[-70vh] h-[300vh]">
      <div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-0">
          <div className="flex justify-center">
            <motion.div style={{ scale, y }} className="">
              <motion.img
                style={{ opacity }}
                src="/main-screen.png"
                className="h-auto max-h-none w-[50vw]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
