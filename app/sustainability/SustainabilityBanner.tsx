import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Link from 'next/link'

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

            <div
              className={`absolute top-[44%] left-[40%]`}
            >
              <div className="text-center">
                <p className="text-center text-[1rem] md:text-[1.5rem] pb-2">Breathalyzer</p>
                <button
                  onClick={() => setView("breathalyzer")}
                  type="submit"                
                  className={`${
                    view === "breathalyzer" &&
                    ""
                  } inline-block bg-primary-700 xs:text-[1.25rem] text-[.75rem] text-white rounded-[0.84125rem] py-1 px-1 transition-colors hover:bg-primary-900 disabled:cursor-not-allowed disabled:opacity-50`}
                >
                  <Link href="#first-section">Learn More</Link>
                </button>
              </div>
            </div>
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
            <div
              className="absolute top-[40.5%] left-[39%]"
              onClick={() => setView("sensor")}
            >
               <div className="text-center">
                <p className="text-center text-[.75rem] md:text-[1.2rem] pb-1">Sensor</p>
                <button
                  onClick={() => setView("sensor")}
                  type="submit"                
                  className={`${
                    view === "sensor" &&
                    ""
                  } inline-block bg-secondary-navy xs:text-[1rem] text-[.75rem] text-white rounded-[0.84125rem] py-1 px-1 transition-colors hover:bg-grey disabled:cursor-not-allowed disabled:opacity-50`}
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
