import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

export default function SustainabilityBanner({
  setView,
  view,
}: {
  setView: Dispatch<SetStateAction<string>>;
  view: string;
}) {
  return (
    <div className="max-w-[90rem] mx-auto md:pr-[12%] xl:h-[50rem] lg:h-[35rem] sm:h-[35rem] pt-2">
      <div className="px-2 mb-10 relative flex justify-center">
        <div className="grid grid-cols-12">
          <div className="col-span-7 xs:col-span-8 justify-self-end relative lg:w-[75%]">
            <Image
              src="/industry-banner.png"
              width={1200}
              height={1200}
              alt="medicin with trolley"
              priority={true}
              className="spin"
            />

            <div
              className={`absolute top-[42%] left-[34%] xs:top-[44%] xs:left-[40%]`}
            >
              <div className="text-center">
                <p className="text-center text-[.9rem] md:text-[1.5rem] xs:pb-2 font-medium">
                  Breathalyzer
                </p>
                <button
                  onClick={() => setView("breathalyzer")}
                  type="submit"
                  className={`${
                    view === "breathalyzer" && ""
                  } inline-block bg-primary-700 md:text-[1.25rem] text-[.75rem] text-white rounded py-1 px-1 transition-colors hover:bg-primary-900 disabled:cursor-not-allowed disabled:opacity-50`}
                >
                  <Link href="#first-section">Learn More</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="self-end col-span-5 xs:col-span-4 justify-self-start relative">
            <Image
              src="/industry-banner2.png"
              width={800}
              height={800}
              alt="medicin with trolley"
              priority={true}
              className="spin-back"
            />
            <div
              className="absolute top-[36%] left-[34%] xs:top-[40.5%] xs:left-[39%]"
              onClick={() => setView("sensor")}
            >
              <div className="text-center">
                <p className="text-[.75rem] md:text-[1.2rem] xs:pb-1 font-medium">
                  Sensor
                </p>
                <button
                  onClick={() => setView("sensor")}
                  type="submit"
                  className={`${
                    view === "sensor" && ""
                  } inline-block bg-secondary-navy md:text-[1rem] text-[.7rem] text-white rounded xs:p-1 transition-colors hover:bg-grey disabled:cursor-not-allowed disabled:opacity-50`}
                >
                  <Link href="#first-section">Learn More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
