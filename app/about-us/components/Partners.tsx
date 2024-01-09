import Image from "next/image";
import FadeIn, { FadeInStagger } from "@/app/components/FadeIn";

export default function Partners() {
  return (
    <section className="mt-10 py-10  bg-primary-200 rounded-[3.125rem] mx-10">
      <FadeIn className="text-center font-bold text-[2.625rem] text-primary-800 pt-10">
        Part of the
      </FadeIn>
      <FadeInStagger faster className="section">
        <div className="flex gap-5 justify-between items-center">
          <FadeIn>
            <Image
              src="/images/daya.svg"
              width={298}
              height={85}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/images/pangea.svg"
              width={240}
              height={92}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/images/smile_logo.svg"
              width={195}
              height={72}
              alt="logo"
              priority={true}
            />
          </FadeIn>
        
        </div>
        <div className="flex gap-5 justify-between items-center mt-20">
          <FadeIn>
            <Image
              src="/images/tillvaxtverket2.svg"
              width={256}
              height={115}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/images/Drivhuset.svg"
              width={266}
              height={45}
              alt="logo"
              priority={true}
            />
          </FadeIn>
          <FadeIn>
            <Image
              src="/images/sahlgrenska.svg"
              width={274}
              height={104}
              alt="logo"
              priority={true}
            />
          </FadeIn>
        </div>
      </FadeInStagger>
    </section>
  );
}
