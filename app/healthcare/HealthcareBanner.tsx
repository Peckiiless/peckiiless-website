"use client";

import { motion } from "framer-motion";

export default function HealthcareBanner() {

  return (
    <>
      <div className="bg-healthcare bg-cover bg-center bg-no-repeat h-[calc(67vh-4.6875rem)]" />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="px-20 pb-2 mx-auto rounded-[3.125rem]"
      >
        <p className="font-medium text-[3.125rem] text-primary-800 leading-[3.5rem] w-[85%] pb-2">
          Over 500 million people suffer from type some form of diabetes.
        </p>
        <p className="text-[1.625rem]">
          Both the number of cases and the prevalence of diabetes have been
          steadily increasing over the past few decades. Testing and monitoring
          of these illnesses have gotten stuck in development for years upon
          years, it’s time to globalize an easier option for monitoring your
          glucose testing in an easy, effecient way.
        </p>
      </motion.div>
    </>
  );
}
