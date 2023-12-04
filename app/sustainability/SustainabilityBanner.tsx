import Image from "next/image";

export default function SustainabilityBanner() {
  return (
    <div className=" max-w-[90rem] mx-auto">
      <div className="px-20 mb-10 relative flex justify-center">
      <div className="grid grid-cols-6">
        <Image
          src="/industry-banner.png"
          width={640}
          height={640}
          alt="medicin with trolley"
          priority={true}
          className="spin col-span-4 justify-self-center"
        />

        <Image
          src="/industry-banner2.png"
          width={400}
          height={400}
          alt="medicin with trolley"
          priority={true}
          className="spin-back self-end col-span-2 justify-self-start"
        />
      </div>
      </div>
    </div>
  );
}
