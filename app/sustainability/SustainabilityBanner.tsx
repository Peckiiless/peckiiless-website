import Image from "next/image";
import Link from "next/link";

export default function SustainabilityBanner() {
  return (
    <div className=" max-w-[90rem] mx-auto pr-[7%]">
      <div className="px-20 mb-10 relative flex justify-center">
        <div className="grid grid-cols-6">
          <div className="col-span-4 justify-self-end relative">
            <Image
              src="/industry-banner.png"
              width={640}
              height={640}
              alt="medicin with trolley"
              priority={true}
              className="spin"
            />
           
             <Link
              href="/breathalyzer"
              className="absolute top-[48%] left-[43%] hidden md:block"
            >
             Breathalyzer
            </Link>
          </div>
          <div className="self-end col-span-2 justify-self-start relative">
            <Image
              src="/industry-banner2.png"
              width={400}
              height={400}
              alt="medicin with trolley"
              priority={true}
              className="spin-back"
            />
            <Link
              href="/sensor"
              className="absolute top-[47.5%] left-[44%] hidden md:block"
            >
             Sensor
            </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
}
