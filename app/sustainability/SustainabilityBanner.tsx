import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function SustainabilityBanner({
  setView,
  view
}: {
  setView: Dispatch<SetStateAction<string>>;
  view: string
}) {
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

            <button             
              className={`absolute top-[48%] left-[43%] hidden md:block ${view==="breathalyzer" && "bg-primary-900 text-white"} hover:bg-primary-700 font-bold`}
              onClick={()=> setView("breathalyzer")}
            >
              Breathalyzer
            </button>
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
            <button             
              className={`absolute top-[47.5%] left-[44%] hidden md:block ${view==="sensor" && "bg-secondary-navy text-white"}  font-bold`}
              onClick={()=> setView("sensor")}
            >
              Sensor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
