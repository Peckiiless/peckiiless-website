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

      <FadeIn className="text-[1.75rem] pb-32 pt-10 ">
        <p>
          Peckiiless is a Sweden-based company that has created a nanosensor
          that can detect your blood glucose levels through nothing more than
          your breath to extremely accurate levels.
        </p>
        <p className="py-5">
          The options of today all rely heavliy on outdated measures such as
          needles or CGMs (Continuous glucose meters), both of which are not
          only expensive and wasteful, but are also not universally available.
        </p>
        <p>
          The most humane option is Peckiiless, who delivers a method that is
          good for the people, the planet, and your pocketbook.
        </p>

      </FadeIn>
      </div>
    </section>
  );
}
