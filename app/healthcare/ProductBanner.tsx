import Image from "next/image";
import CustomButton from "../components/CustomButton";
import { Title2625rem, Title2875rem, Text3 } from "../components/Text";

export default function ProductBanner() {
  return (
    <div>
      <div className="px-[2%]">
        <div className="py-8 max-w-[75rem] mx-auto px-2">
        <Title2625rem>
          At Peckiiless, we unlock the potential of Exhalation Breath,
          delivering non-invasive comfort to everyone worldwide
        </Title2625rem>
        </div>
      </div>
      <div className="grid grid-cols-12 sm:gap-4 text-right pt-5 lg:pt-16 leading-[1.375rem] sm:leading-[1.875rem]  lg:leading-[2.625rem]">
        <div className="col-span-5 xs:col-span-5 self-center">
          <div className=" pb-5 lg:pb-6">
            <Title2875rem>Breathalyzer</Title2875rem>
            
          </div>
          <div>
            <div className="sm:hidden pl-4">
              <Text3>
              Empower your well-being with our state of-the-art breathalyzer -
              where every exhale reveals a roadmap to a healthier, more vibrant
              life.
              </Text3>
            </div>
            <p className="sm:hidden font-medium text-[.9375rem] cursor-pointer py-1">
              Read more
            </p>
          </div>

          <div className="hidden sm:block sm:pl-[17%]">
          <Text3>
            Empower your well-being with our state of-the-art breathalyzer -
            where every exhale reveals a roadmap to a healthier, more vibrant
            life. Click below to discover more about how it works and seamlessly
            connects to your smartphone, putting your health insights at your
            fingertips.
          </Text3>
          
          </div>

          <div className="lg:col-span-4 pt-5 lg:pt-12 self-end">
            <CustomButton
              title="More Information"
              containerStyles="bg-primary-700 font-medium xl:text-[1.625rem] md:text-[1.25rem] text-[.75rem] text-white rounded-[2.5rem] md:py-7 md:px-12 py-3 px-5"
            />
          </div>
        </div>
        <div className="col-span-7 xs:col-span-7 mt-20">
          <Image
            src="/breathalyser.svg"
            width={1000}
            height={1000}
            alt="logo"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
