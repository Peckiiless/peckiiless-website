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

    <div className="pt-20">
      <p className="text-center font-medium text-[2.625rem] text-primary-800 leading-[3.25rem] py-36 w-[81rem] mx-auto">
        At Peckiiless, we unlock the potential of Exhalation Breath, delivering
        non-invasive comfort to everyone worldwide
      </p>
      <div className="grid sm:grid-cols-12">
        <div className="col-span-7">
          <Image
            src="/product.png"
            width={1000}
            height={464}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="col-span-5 px-[14%] self-center">
          <p className="font-bold text-[3.125rem] text-primary-800 pb-10">
            Breathalyzer
          </p>
          <p className="text-[1.625rem] w-[80%]">
            Here is a prototype of our Breathalyzer, click bellow to get for
            information about how to use the device and how it works with the
            mobile application.
          </p>

          <div className="lg:col-span-4 py-20">
            <CustomButton
              title="More Information"
              containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-[2.5rem] py-7 px-12 leading-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
