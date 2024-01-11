import Image from "next/image";
import FadeIn, { FadeInStagger } from "@/app/components/FadeIn";

export default function Supports() {
  return (
    <section className="bg-patternLady bg-no-repeat bg-cover mt-10">
      <FadeIn className="text-center font-bold text-[2.625rem] text-primary-800 pt-10">
        Get Support From
      </FadeIn>

      <FadeInStagger className="section">
        <div className="flex gap-5 justify-between items-center">
          <FadeIn>
            <Image
              src="/Almi.svg"
              width={161}
              height={57}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/Euipo.svg"
              width={310}
              height={85}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/Sten.svg"
              width={147}
              height={94}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/chalmers.svg"
              width={112}
              height={142}
              alt="logo"
              priority={true}
            />
          </FadeIn>
        </div>
        <div className="flex gap-5 justify-around items-center mt-14">
          <FadeIn>
            <Image
              src="/sscp.svg"
              width={261}
              height={91}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/incubators.svg"
              width={191}
              height={126}
              alt="logo"
              priority={true}
            />
          </FadeIn>
        </div>
      </FadeInStagger>
    </section>
  );
}
