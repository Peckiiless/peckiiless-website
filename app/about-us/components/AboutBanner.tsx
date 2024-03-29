import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="h-[50vw] md:h-[45vw] lg:h-[50vw]">
      <Image
        src="/team.png"
        alt="Image Alt Text"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute top-0 -z-10"
        priority={true}
      />
    </section>
  );
}
