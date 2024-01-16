import Image from "next/image";

export default function BlowingLady() {
  return (
    <section className="pt-10 xl:my-10">
      <p className=" text-center bg-primary-200 rounded-[.625rem]  font-medium sm:text-[2rem] md:text-[2.25rem] text-[1.25rem] leading-[1.5rem] sm:leading-[2.5rem]  lg:leading-[3.5rem] text-primary-800 mb-10 xs:mb-20 p-3  sm:py-10  max-w-[90rem] mx-3 xs:mx-10 2xl:mx-auto sm:px-8 md:px-20 xl:px-40">
        Have you ever considered that every exhale you take isn&#39;t just
        releasing air - it&#39;s setting free a powerhouse of potential?
      </p>
      <div className="relative lg:h-[50rem] sm:h-[25rem]">
        <div className="sm:absolute bottom-0 pl-1 sm:pl-0 max-w-[70rem] sm:w-[80%]">
          <Image
            src="/bubble-lady.svg"
            width={1200}
            height={1200}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="sm:max-w-[70%] sm:absolute sm:bottom-0 md:bottom-12 left-[40%] sm:left-[35%] p-3 sm:p-2">
          <p className="sm:text-[1.1875rem] lg:text-[1.75rem] text-[.9375rem] leading-[1.375rem] sm:leading-[1.625rem]  lg:leading-[2.625rem] ">
            Exhalation breath is like a secret code, carrying over 1,000
            volatile organic compounds (VOCs) straight from the depths of your
            body&#39;s biochemical universe. These compounds are like tiny
            storytellers, explaining the mysteries of your biochemistry. Now,
            enter Exhalation Breath - a revolutionary approach that delves into
            this biochemical adventure, all while keeping you as comfortable as
            can be. It&#39;s not just a solution; it&#39;s a thrilling journey
            into the captivating world within you.
          </p>
          <p className="sm:hidden font-medium text-[.9375rem] cursor-pointer py-1">
            Read more
          </p>
        </div>
      </div>
      <div className="px-[2%]">
        <p className="hidden sm:block sm:text-[1.25rem] lg:text-[1.75rem] text-[.9375rem] leading-[1.375rem] sm:leading-[1.875rem]  lg:leading-[2.6875rem]  px-1 py-14 xs:px-1 max-w-[95rem] mx-auto">
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
