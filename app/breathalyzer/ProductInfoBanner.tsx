import Image from "next/image";

export default function ProductInfoBanner() {
  return (
    <div className="h-[45vw] md:h-[45vw] lg:h-[50vw] ">
      <div
        className="absolute  2xl:top-[20%] 2xl:left-[10%] xl:top-[17%] xl:left-[9%] lg:top-[14%] lg:left-[7%] xs:top-[11%] left-[4%] top-[6%] xs:left-[2%] z-10 text-[1rem] xs:text-[1.5rem] md:text-[2rem]  lg:text-[2.65rem] 2xl:text-[3.125rem] uppercase md:leading-[3.25rem] leading-[1.75rem]
text-primary-800 "
      >
        <p className="font-bold font-dm pb-0 lg:pb-3">Don&apos;t prick</p>
        <p className="font-bold font-dm ml-2 xs:ml-10 sm:ml-12 md:ml-[4rem]">
          just exhale
        </p>
      </div>
       <Image
        src="/pattern-lady2.svg"
        alt="Image Alt Text"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute -z-10 xl:-top-[10%] top-0"
        priority={true}
      />
    </div>
  );
}
