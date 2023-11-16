import Image from "next/image";
import CustomButton from "../components/CustomButton";

export default function ProductBanner() {
  return (
    <div className="">
      <p className="text-center font-medium xs:text-[2rem] md:text-[2.625rem] text-[1.375rem] text-primary-800 leading-[1.875rem] xs:leading-[2.625rem] py-10 max-w-[75rem] mx-auto px-2">
        At Peckiiless, we unlock the potential of Exhalation Breath, delivering
        non-invasive comfort to everyone worldwide
      </p>
      <div className="grid grid-cols-12">
        <div className="col-span-7 self-end">
          <Image
            src="/product.png"
            width={1000}
            height={464}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="col-span-5 lg:px-[14%] self-center">
          <p className="font-bold xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 pb-10">
            Breathalyzer
          </p>
          <p className="xs:text-[1.25rem] md:text-[1.75rem] text-[.875rem] xl:w-[90%]">
            Here is a prototype of our Breathalyzer, click bellow to get for
            information about how to use the device and how it works with the
            mobile application.
          </p>

          <div className="lg:col-span-4 pt-5 lg:pt-20">
            <CustomButton
              title="More Information"
              containerStyles="bg-primary-700 font-medium md:text-[1.625rem] xs:text-[1.25rem] text-[.75rem] text-white rounded-[2.5rem] md:py-7 md:px-12 py-3 px-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
