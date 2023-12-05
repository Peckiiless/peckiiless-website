import Image from "next/image";
import Title from "../components/Title";

export default function ProductInfoBanner() {
  return (
    <div className="h-[39vw] md:h-[45vw] lg:h-[50vw] ">
       <div className="absolute top-40 z-10 ">
           <p className="font-bold font-dm text-[3.3125rem] text-primary-800  uppercase leading-[3.25rem] ml-10 pb-5">
             Don&apos;t prick
           </p>
           <p className="font-bold font-dm text-[3.75rem] text-primary-800  uppercase leading-[3.25rem] ml-20">
             just exhale
           </p>           
         </div>
      <Image
        src="/pattern-lady2.svg"
        alt="Image Alt Text"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute -top-20"
        priority={true}
      />
    </div>
  );
}
