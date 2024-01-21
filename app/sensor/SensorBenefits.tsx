import Image from "next/image";

export default function SensorBenefits() {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-2 xl:gap-10  pt-10 md:pt-20">
        <div className="col-span-5  sm:col-span-5 md:col-span-6">
          <p className="sm:text-[1.25rem] xl:text-[1.75rem] text-[.9375rem] px-2 lg:px-[24%]">
            In the realm of air quality, from office buildings and apartment
            complexes to outdoor spaces in cities and industrial zones, our
            sensors ensure optimal living conditions and compliance with
            environmental regulations
          </p>
        </div>
        <div className="col-span-7 sm:col-span-7 md:col-span-6 self-center p-2 xl:w-[90%]">
          {/* <Image
              src="/package.svg"
              width={1000}
              height={1000}
              alt="logo"
              priority={true}
            /> */}
        </div>
      </div>
    </div>
  );
}
