import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="h-[39vw] md:h-[45vw] lg:h-[50vw]">
      <Image
        src="/curve.svg"
        alt="Image Alt Text"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute top-0 -z-10"
        priority={true}
      />
      <div className="text-white px-14">
      <FadeIn className="text-[2.625rem] font-medium pt-20">About Us</FadeIn>

      
      </div>
    </section>
  );
}
