"use client";
import { useState } from "react";
import Image from "next/image";
import { Text2, Text3, Title2875rem } from "../components/Text";

export default function Pregnancy() {
    const [more, setMore] = useState(false);

  return (
    <section className="mx-auto max-w-[100rem]">
      <div className="">
        <div className="px-4 py-8 sm:py-14 md:px-8 max-w-[85rem] mx-auto font-medium text-center">
          <Text2>
            In the world of health monitoring, current tools have long leaned on
            blood tests. These tests, however, come with a set of challenges
            -they take time, can be painful, require special facilities or
            training, and sometimes cause inflammation and anxiety. To make
            matters worse, they contribute to a considerable amount of
            single-use waste that poses recycling challenges. Take, for example,
            the routine of individuals with diabetes who find themselves
            frequently puncturing their fingers throughout the day.
          </Text2>
        </div>
      </div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-8  sm:col-span-7  xl:col-span-8 2xl:col-span-7 text-right sm:pt-2 px-6 xs:px-14 sm:pr-1 self-center ">
          <div className="sm:pb-2">
            <Title2875rem>Living with Diabetes</Title2875rem>
          </div>
          <Text3>
            <div className="pb-1 xs:pb-5 md:pb-10">
              For women diagnosed with gestational (pregnancy) diabetes, the
              daily ritual of pricking their fingers up to 7 times is more than
              a health check-it&#39;s a disruptive, painful pause in their
              routine, contributing to the staggering disposal of billions of
              one-time-use needles and test strips every day.
            </div>
            <p
              className={`${more ? "block" : "hidden sm:block"} pb-1 xs:pb-5 md:pb-10` }
            >
              In the world of chronic diseases, the need for regular monitoring
              is undeniable. However, traditional blood-based health checks pose
              accessibility challenges and tracking difficulties, hindering the
              optimization of personal treatment and the prevention of potential
              complications.
            </p>
            <p className={`${more ? "block" : "hidden sm:block"}`}>
              Discovering a new era in health monitoring that goes beyond
              inconvenience is crucial. Saying goodbye to constant pricking and
              hello to a seamless, accessible approach empowers everyone to take
              charge of their well-being. The health journey should be a path of
              ease, and we&#39;re here to redefine it, creating a future where
              monitoring becomes a part of everybody&#39;s lifestyle, not a
              disruption.
            </p>
          </Text3>
          <p className="sm:hidden font-medium text-[1rem] cursor-pointer py-1" onClick={() => setMore(!more)}>
            {more ? "Read less" : "Read more"}
          </p>
        </div>
        <div className=" relative col-span-4 sm:col-span-5 xl:col-span-4 2xl:col-span-5  pr-3 mt-1 sm:mt-27">
          <Image
            src="/pregnant.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
            priority={true}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
