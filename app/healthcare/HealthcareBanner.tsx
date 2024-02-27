import Image from "next/image";
import Adam from "../../public/adam.png"

export default function HealthcareBanner() {
  return (
    <div className="h-[45vw] xs:h-[45vw] md:h-[45vw] xl:h-[50vw] 2xl:h-[52vw]">
      <Image
        src={Adam}
        alt="Blood in hand"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute top-0 -z-10"
        priority={true}
        quality={100}
      />
    </div>
  );
}