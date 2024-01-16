import Image from "next/image";

export default function HealthcareBanner() {
  return (
    <div className="h-[39vw] md:h-[45vw] 2xl:h-[47vw]">
      <Image
        src="/adam.png"
        alt="Image Alt Text"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute  md:top-[10%] lg:top-[15%] top-[6%]"
        priority={true}
      />

      <Image
        src="/curve.svg"
        alt="Image Alt Text"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute top-0 -z-10"
        priority={true}
      />
    </div>
  );
}
