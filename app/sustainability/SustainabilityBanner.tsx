import Image from "next/image";

export default function SustainabilityBanner() {
  return (
    <div className=" max-w-[90rem] mx-auto pr-[5%]">
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
            <p className="absolute top-[48%] left-[43%] hidden md:block">
              Breathalyzer
            </p>
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
            <p className="absolute top-[48%] left-[44%] hidden md:block">
              Sensor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
