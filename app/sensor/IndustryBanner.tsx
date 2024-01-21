import Image from "next/image";

export default function IndustryfoBanner() {
  return (
    <div className="h-[25vw] xs:h-[39vw] md:h-[45vw] lg:h-[50vw]">    
      <Image
        src="/workers.svg"
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
