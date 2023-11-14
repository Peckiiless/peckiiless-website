import Image from "next/image";

export default function HealthcareBanner() {
  return (
    <div className="h-[30vw] lg:h-[50vw]">
      <Image
        src="/curve.svg"
        alt="Image Alt Text"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute top-0 -z-10"
      />
      <Image
        src="/adam.png"
        alt="Image Alt Text"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute top-[15%] h-auto"
      />

      {/* <div className="bg-healthcare bg-contain xl:bg-cover  bg-no-repeat h-[60%]" /> */}
    </div>
  );
}
