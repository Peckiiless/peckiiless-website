import Image from "next/image";

export default function SustainabilityBanner() {
  return (
    <div className="px-20 my-10 h-[50rem] max-w-[65rem] relative mx-auto">
      <div className="">
        <div className="">
          <Image
            src="/industry-banner.png"
            width={600}
            height={600}
            alt="medicin with trolley"
            priority={true}
            className="spin absolute left-0 top-0"
          />
        </div>
        <div className="">
          <Image
            src="/industry-banner2.png"
            width={400}
            height={400}
            alt="medicin with trolley"
            priority={true}
            className="spin-back absolute right-0 top-[30%]"
          />
        </div>
      </div>
    </div>
  );
}
