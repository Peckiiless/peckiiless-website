import Image from "next/image";

export default function ProductInfoBanner() {
  return (
    <div className="h-[45vw] md:h-[45vw] lg:h-[50vw] ">
      <div
        className="absolute top-14 sm:top-28 md:top-40 z-10 text-[1rem] xs:text-[1.5rem] md:text-[2rem]  lg:text-[2.65rem] 2xl:text-[3.125rem] uppercase md:leading-[3.25rem] leading-[1.75rem]
text-primary-800 "
      >
        <p className="font-bold font-dm ml-1 xs:ml-[5] sm:ml-10 md:ml-10 pb-0 sm:pb-5">
          Don&apos;t prick
        </p>
        <p className="font-bold font-dm ml-2 xs:ml-10 sm:ml-12 md:ml-20">
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
