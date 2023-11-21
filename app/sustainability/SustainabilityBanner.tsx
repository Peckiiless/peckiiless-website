import Image from "next/image";

export default function SustainabilityBanner() {
  return (
    <div className="px-20 my-20">
      <div className="flex">
        <div className="">
          <Image
            src="/industry-banner.png"
            width={850}
            height={850}
            alt="medicin with trolley"
            priority={true}
            className=" spin"
          />
        </div>
        <div className="">
          <Image
            src="/industry-banner2.png"
            width={850}
            height={850}
            alt="medicin with trolley"
            priority={true}
            className="spin-back"
          />
        </div>
      </div>
    </div>
  );
}
