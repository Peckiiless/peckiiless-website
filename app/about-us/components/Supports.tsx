import Image from "next/image";
import FadeIn, { FadeInStagger } from "@/app/components/FadeIn";

export default function Supports() {
  return (
    <section className="bg-patternLady bg-no-repeat bg-cover">
      <FadeIn className="text-center font-bold text-[2.625rem] text-primary-800 pt-10">
        Get Support From
      </FadeIn>

      <FadeInStagger className="section">
        <div className="flex gap-5 justify-between items-center">
          <FadeIn>
          <Image
            src="/images/Almi.png"
            width={104}
            height={37}
            alt="logo"
            priority={true}
          />
          </FadeIn>
<FadeIn>
          <Image
            src="/images/Euipo.png"
            width={203}
            height={57}
            alt="logo"
            priority={true}
          />
          </FadeIn>
<FadeIn>
          <Image
            src="/images/Sten.png"
            width={96}
            height={63}
            alt="logo"
            priority={true}
          />
          </FadeIn>
<FadeIn>
          <Image
            src="/images/chalmers.png"
            width={74}
            height={93}
            alt="logo"
            priority={true}
          />
          </FadeIn>
        </div>
        <div className="flex gap-5 justify-around items-center mt-14">
          <FadeIn>
          <Image
            src="/images/sodertalje.png"
            width={149}
            height={71}
            alt="logo"
            priority={true}
          />
          </FadeIn>
<FadeIn>
          <Image
            src="/images/incubators.png"
            width={224}
            height={37}
            alt="logo"
            priority={true}
          />
          </FadeIn>
        </div>
      </FadeInStagger>
    </section>
  );
}
