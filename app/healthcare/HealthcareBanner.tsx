import Image from "next/image";
import Adam from "../../public/adam.png"

export default function HealthcareBanner() {
  return (
    <div className="h-[39vw] md:h-[45vw] 2xl:h-[47vw]">
      <Image
        src={Adam}
        alt="Blood in hand"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute top-0 -z-10"
        priority={true}
        quality={100}
        placeholder="blur"
      />
    </div>
  );
}
