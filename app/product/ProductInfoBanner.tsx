import Image from "next/image";
import Title from "../components/Title";

export default function ProductInfoBanner() {
  return (
    <div className="bg-productInfoPattern bg-white px-20 pt-10  bg-no-repeat bg-contain  bg-bottom">
      <div className="md:flex justify-center gap-8">
        <div className="mt-20">
          <p className="font-bold text-[3.3125rem] text-primary-800  uppercase ml-5 leading-[3.25rem]">
            Don&apos;t prick
          </p>
          <p className="font-bold text-[3.75rem] text-primary-800  uppercase leading-[3.25rem]">
            just exhale.
          </p>

          <p className="text-[1.875rem] font-medium pt-5">
            Perfect for people on the go, it&apos;s as easy as blow in the
            device for 6 seconds while holding down the button.
          </p>
        </div>
        <div className="md:w-[100%]">
          <Image
            src="/blowing.png"
            width={850}
            height={850}
            alt="bolowing lady"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
