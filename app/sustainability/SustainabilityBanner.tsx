import Image from "next/image";

export default function SustainabilityBanner() {
  return (
    <div className="px-20 pt-10 h-screen">
      <div className="relative">
        <div className="">
          <Image
            src="/industry-banner.png"
            width={700}
            height={700}
            alt="medicin with trolley"
            priority={true}
            className="absolute -left-[10%]"
          />
        </div>
        <div className="">
          <Image
            src="/industry-banner2.png"
            width={700}
            height={700}
            alt="medicin with trolley"
            priority={true}
            className="absolute -right-[10%]"
          />
        </div>
      </div>
    </div>
  );
}
