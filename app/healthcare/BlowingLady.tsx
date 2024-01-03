import Image from "next/image";

export default function BlowingLady() {
  return (
    <section className="pt-10">
      <p className="font-medium xs:text-[2rem] md:text-[2.25rem] text-[1.375rem] text-primary-800 leading-[1.875rem] xs:leading-[3.5rem] py-10 sm:py-24 mt-20 max-w-[100rem] mx-auto px-12">
        Have you ever considered that every exhale you take isn&#39;t just
        releasing air - it&#39;s setting free a powerhouse of potential?
      </p>
      <div className="grid grid-cols-12 ">
        <div className=" col-span-8 pb-24  md:px-[4rem] px-1 self-center xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]">
          <Image
            src="/bubble-lady.svg"
            width={800}
            height={800}
            alt="logo"
            priority={true}
            quality={100}
          />
        </div>
        <div className="col-span-4 justify-self-center pr-3 pt-5">
          <p className="hidden xs:block xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]">
            Exhalation breath is like a secret code, carrying over 1,000
            volatile organic compounds (VOCs) straight from the depths of your
            body&#39;s biochemical universe. These compounds are like tiny
            storytellers, explaining the mysteries of your biochemistry. Now,
            enter Exhalation Breath - a revolutionary approach that delves into
            this biochemical adventure, all while keeping you as comfortable as
            can be. It&#39;s not just a solution; it&#39;s a thrilling journey
            into the captivating world within you.
          </p>
        </div>
      </div>

      <p className="xs:hidden text-right px-5 xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]  leading-[1.625rem] xs:leading-[2.625rem] py-20 xs:py-44 xs:px-10 max-w-[70rem] mx-auto">
        Exhalation breath is like a secret code, carrying over 1,000 volatile
        organic compounds (VOCs) straight from the depths of your body&#39;s
        biochemical universe. These compounds are like tiny storytellers,
        explaining the mysteries of your biochemistry. Now, enter Exhalation
        Breath - a revolutionary approach that delves into this biochemical
        adventure, all while keeping you as comfortable as can be. It&#39;s not
        just a solution; it&#39;s a thrilling journey into the captivating world
        within you.
      </p>

      <div className="px-[2%]">
        <p className="xs:text-[1.625rem] md:text-[1.75rem] text-[1rem]  leading-[1.5rem] xs:leading-[2.5rem]  md:leading-[2.625rem] px-1 py-14 xs:px-10 max-w-[95rem] mx-auto">
          Breath sampling emerges as a non-invasive, pain-free, and universally
          applicable method. Unlike other sampling techniques, it requires no
          specialized facilities or extensive training, seamlessly fitting into
          diverse care contexts. This user-friendly approach allows for ethical
          application to large populations, particularly benefiting high-risk
          groups such as pregnant women, young children, or individuals with
          chronic lung conditions. In situations requiring repeated samples,
          breath collection becomes a valuable and accessible tool. It offers a
          clear and simple pathway to understanding, ensuring that its benefits
          are accessible to all.
        </p>
      </div>
    </section>
  );
}
