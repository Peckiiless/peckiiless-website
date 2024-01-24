import Image from "next/image";
import { Text3, Title2625rem } from "../components/Text";

export default function BlowingLady() {
  return (
    <section className="pt-10 xl:my-10">
      <div className="bg-primary-200 rounded-[.625rem] mb-10 xs:mb-20 md:mb-30 lg:mb-20 p-3  sm:py-10  max-w-[80rem] mx-3 xs:mx-10 2xl:mx-auto sm:px-8 md:px-10 xl:px-30">
        <Title2625rem>
          Have you ever considered that every exhale you take isn&#39;t just
          releasing air - it&#39;s setting free a powerhouse of potential?
        </Title2625rem>
      </div>

      <div className="relative xl:h-[50rem] lg:h-[35rem] sm:h-[25rem]">
        <div className="sm:absolute bottom-0 pl-1 sm:pl-0 max-w-[70rem] sm:w-[80%]">
          <Image
            src="/bubble-lady.svg"
            width={1200}
            height={1200}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="sm:max-w-[60rem] sm:absolute sm:bottom-0 md:-bottom-14 lg:bottom-10 left-[40%] sm:left-[35%] p-3 sm:p-2">
          <Text3>
            Exhalation breath is like a secret code, carrying over 1,000
            volatile organic compounds (VOCs) straight from the depths of your
            body&#39;s biochemical universe. These compounds are like tiny
            storytellers, explaining the mysteries of your biochemistry. Now,
            enter Exhalation Breath - a revolutionary approach that delves into
            this biochemical adventure, all while keeping you as comfortable as
            can be. It&#39;s not just a solution; it&#39;s a thrilling journey
            into the captivating world within you.
          </Text3>
          <p className="sm:hidden font-medium text-[.9375rem] cursor-pointer py-1">
            Read more
          </p>
        </div>
      </div>
      <div className="px-4 md:px-6 hidden sm:block py-10 md:py-20 lg:py-10 max-w-[95rem] mx-auto">
        <Text3>
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
        </Text3>
      </div>
    </section>
  );
}
