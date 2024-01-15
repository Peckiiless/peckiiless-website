"use client";
import { useState } from "react";

export default function Reasons() {
  const [more, setMore] = useState(false);
  return (
    <div>
      <div className="px-[1%]">
        <p className="text-center font-medium xs:text-[2rem] md:text-[2.625rem] text-[1.25rem] text-primary-800 leading-[1.875rem] xs:leading-[3.5rem] py-10 xl:py-32  max-w-[75rem] mx-auto px-2">
          Why choose exhalation breath sampling? Let us unveil the compelling
          reasons that make it a game-changer in healthcare.
        </p>
      </div>
      <div className="rounded-[.625rem] bg-primary-100 mx-2">
        <div className="xs:text-[1.625rem] md:text-[1.75rem] text-[.9375rem]  leading-[1.5rem] xs:leading-[2.5rem]  md:leading-[2.5rem] p-2 xs:p-10 max-w-[90rem] mx-auto">
          <p className="">
            <span className="font-medium">1.Non-invasive Marvel:</span> Breath
            collection takes a gentle approach, offering a pain-free and
            risk-free alternative to traditional invasive methods. It&#39;s a
            breath of fresh air in healthcare, ensuring a comfortable experience
            for everyone.
          </p>
          <p className="py-2">
            <span className="font-medium">2.Whole Body Monitoring:</span> Each
            exhale paints a holistic picture of your body&#39;s health. Through
            breath samples, we capture a rich spectrum of volatile organic
            compounds (VOCs) that traverse the body via the bloodstream.
            It&#39;s like having a health monitor that reads the entire story,
            not just a single chapter.{" "}
          </p>
          <p>
            <span className="font-medium">3.Accessibility at Its Core:</span>{" "}
            Breath sampling is designed for universal application. Its
            simplicity requires no specialized facilities or extensive training,
            making it seamlessly adaptable to diverse care contexts. Health
            insights, once a luxury, are now within reach for everyone.{" "}
          </p>

          <p className={`${more ? "block" : "hidden"} py-2`}>
            <span className="font-medium">4.Acceptance by Design:</span> People
            embrace breath sampling because it respects their comfort. The
            process is user-friendly, ensuring that individuals of all ages and
            backgrounds find it acceptable. It&#39;s not just a medical
            procedure; it&#39;s a partnership in health where everyone feels
            heard and understood.{" "}
          </p>
          <p className={`${more ? "block" : "hidden"}`}>
            <span className="font-medium">5.Eco-Friendly Impact:</span> Join us
            in the movement to eliminate billions of one-time-use medical
            trashes. Breath sampling minimizes waste, contributing to a
            sustainable and environmentally conscious healthcare approach.
            It&#39;s a step towards a healthier world, inside and out.{" "}
          </p>
          <p className={`py-2 ${more ? "block" : "hidden"}`}>
            <span className="font-medium">6.Inclusive Accessibility:</span> Our
            commitment to accessibility extends beyond simplicity. Exhalation
            breath samplingis designed to be inclusive, ensuring that
            individuals from all walks of life can benefit. No matter your
            background or location, health insights are now at your fingertips.{" "}
          </p>

          
          <p
            className="font-medium text-[1rem] cursor-pointer py-1"
            onClick={() => setMore(!more)}
          >
            {more ? "Read less" : "Read more"}
          </p>
        </div>
      </div>
    </div>
  );
}
