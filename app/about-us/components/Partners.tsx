import Image from "next/image";
import FadeIn, { FadeInStagger } from "@/app/components/FadeIn";

export default function Partners() {
  return (
    <section className="bg-patternLady bg-no-repeat bg-cover">
      <FadeIn className="text-center font-bold text-[2.625rem] text-primary-800 pt-10">
        Part of the
      </FadeIn>
      <FadeInStagger faster className="section">
        <div className="flex gap-5 justify-between items-center">
          <FadeIn>
            <Image
              src="/images/Daya.png"
              width={96}
              height={32}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/images/tillvaxtverket.png"
              width={86}
              height={41}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/images/smile_logo.png"
              width={152}
              height={68}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/images/ChalmersVentures.png"
              width={160}
              height={44}
              alt="logo"
              priority={true}
            />
          </FadeIn>
        </div>
        <div className="flex gap-5 justify-between items-center mt-14">
          <FadeIn>
            <Image
              src="/images/tillvaxtverket2.png"
              width={149}
              height={71}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/images/Drivhuset.png"
              width={224}
              height={37}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/images/sahlgrenska.png"
              width={240}
              height={85}
              alt="logo"
              priority={true}
            />
          </FadeIn>
        </div>
      </FadeInStagger>
    </section>
  );
}
