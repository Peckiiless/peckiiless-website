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
    <div className="max-w-[90rem] mx-auto  xl:h-[57rem] lg:h-[35rem] sm:h-[35rem]">
      <div className="grid grid-cols-12 p-2 lg:p-10 xl:text-[1.5rem] md:text-[1.25rem] text-[.625rem] font-medium">
        <div className="col-span-7 xs:col-span-7 justify-self-end relative">
          <Image
            src="/industry-banner.png"
            width={1200}
            height={1200}
            alt="medicin with trolley"
            priority={true}
            className="spin"
          />

          <div
            className={`absolute top-[45%] left-[36%] xs:top-[45%] xs:left-[38%] sm:top-[47%] sm:left-[40%] md:top-[46%] md:left-[37%] lg:top-[47%] lg:left-[41%]`}
          >
            <div className="text-center">
              <button
                onClick={() => setView("breathalyzer")}
                type="submit"
                className={`${
                  view === "breathalyzer" && ""
                } inline-block shadow-btn   rounded py-1 px-1 transition-colors hover:bg-light-white-200 disabled:cursor-not-allowed disabled:opacity-50`}
              >
                <Link href="#first-section">Breathalyzer</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="self-end col-span-5 xs:col-span-5  relative">
          <Image
            src="/industry-banner2.png"
            width={800}
            height={800}
            alt="medicin with trolley"
            priority={true}
            className="spin-back"
          />
          <div
            className="absolute top-[45%] left-[35%] xs:top-[44%] xs:left-[35%] sm:top-[46%] sm:left-[39.2%] md:top-[45%] md:left-[34%] lg:top-[46%] lg:left-[39%]"
            onClick={() => setView("sensor")}
          >
            <div className="text-center">
              <button
                onClick={() => setView("sensor")}
                type="submit"
                className={`${
                  view === "sensor" && ""
                } inline-block  shadow-btn  rounded xs:p-1 transition-colors hover:bg-light-white-200 disabled:cursor-not-allowed disabled:opacity-50`}
              >
                <Link href="#first-section">Gas sensor</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
