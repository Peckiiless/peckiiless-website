import Image from "next/image";
import CustomButton from "../components/CustomButton";

export default function ProductBanner() {
  return (
    // <section
    //   id="section1"
    //   className="bg-productInfo bg-contain bg-right bg-no-repeat h-[50rem]"
    // >
    //   <div className="place-self-center  lg:col-span-4 p-44 ">
    //     <CustomButton
    //       title="More Information"
    //       containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-[2.5rem] py-7 px-12 leading-10"
    //     />
    //   </div>
    // </section>

    <div className="">
      <div className="grid md:grid-cols-2 gap-2">
        <div className="place-self-center pl-20">
          <p className="font-bold text-[3.75rem] text-primary-800 pb-10">
            Breathalyzer
          </p>
          <p className="text-[1.625rem] font-medium w-[60%]">
            Here is a prototype of our Breathalyzer, click bellow to get for
            information about how to use the device and how it works with the
            mobile application.
          </p>

          <div className="place-self-center lg:col-span-4 p-20">
            <CustomButton
              title="More Information"
              containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-[2.5rem] py-7 px-12 leading-10"
            />
          </div>
        </div>

        <div className="">
          <Image
            src="/product.png"
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
