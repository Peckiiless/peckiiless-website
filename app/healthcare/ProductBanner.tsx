import Image from "next/image";
import CustomButton from "../components/CustomButton";

export default function ProductBanner() {
  return (
    <div>
      <div className="px-[2%]">
        <p className="text-center font-medium xs:text-[2rem] md:text-[2.625rem] text-[1.375rem] text-primary-800 leading-[1.875rem] xs:leading-[3.5rem] py-10 sm:py-24 mt-20 max-w-[75rem] mx-auto px-2">
          At Peckiiless, we unlock the potential of Exhalation Breath,
          delivering non-invasive comfort to everyone worldwide
        </p>
      </div>
      <div className="grid grid-cols-12 text-right pt-20">
        <div className="col-span-5 ">
          <p className="font-bold xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 pb-10">
            Breathalyzer
          </p>
          <p className="xs:text-[1.25rem] md:text-[1.75rem] text-[.875rem] xl:pl-[10%]">
            Empower your well-being with our state of-the-art breathalyzer -
            where every exhale reveals a roadmap to a healthier, more vibrant
            life. Click below to discover more about how it works and seamlessly
            connects to your smartphone, putting your health insights at your
            fingertips.
          </p>

          <div className="lg:col-span-4 pt-5 lg:pt-20 self-end">
            <CustomButton
              title="More Information"
              containerStyles="bg-primary-700 font-medium md:text-[1.625rem] xs:text-[1.25rem] text-[.75rem] text-white rounded-[2.5rem] md:py-7 md:px-12 py-3 px-5"
            />
          </div>
        </div>
        <div className="col-span-7">
          <Image
            src="/breathalyser.svg"
            width={1000}
            height={464}
            alt="logo"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
