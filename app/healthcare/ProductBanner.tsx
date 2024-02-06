import Image from "next/image";
import Link from "next/link";
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
        <div className="col-span-5 lg:col-span-4 xl:col-span-5 self-center">
          <div className=" pb-2 lg:pb-6">
            <Title2875rem>Breathalyzer</Title2875rem>
          </div>
          <div>
            <div className="sm:hidden pl-[10%]">
              <Text3>
                Empower your well-being with our state of-the-art breathalyzer -
                where every exhale reveals a roadmap to a healthier, more
                vibrant life.
              </Text3>
            </div>
            <p className="sm:hidden font-medium text-[.9375rem] cursor-pointer py-1">
              Read more
            </p>
          </div>

          <div className="hidden sm:block sm:pl-[10%] md:pl-[12%] lg:pl-[22%] xl:pl-[28%] 2xl:pl-[40%]">
            <Text3>
              Empower your well-being with our state of-the-art breathalyzer -
              where every exhale reveals a roadmap to a healthier, more vibrant
              life. Click below to discover more about how it works and
              seamlessly connects to your smartphone, putting your health
              insights at your fingertips.
            </Text3>
          </div>

          <div className="lg:col-span-4 pt-4 md:pt-8 self-end">
            {/* <CustomButton
              title="More Information"
              containerStyles="bg-primary-700 font-medium xl:text-[1.625rem] md:text-[1.25rem] text-[.75rem] text-white rounded-[.5rem] md:py-7 md:px-12 py-3 px-2"
            /> */}
            <Link
              href="/breathalyzer"
              className="bg-primary-700 font-medium xl:text-[1.375rem] md:text-[1.125rem] text-[.75rem] text-white rounded-[.5rem] md:py-4 md:px-8 py-3 px-2"
            >
              More Information
            </Link>
          </div>
        </div>
        <div className="col-span-7 lg:col-span-8 xl:col-span-7 mt-20">
          <Image
            src="/breathalyser.svg"
            width={1200}
            height={1200}
            alt="logo"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
