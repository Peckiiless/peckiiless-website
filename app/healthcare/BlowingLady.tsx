import Image from "next/image";

export default function BlowingLady() {
  return (
    <section className="relative md:h-[50rem] xs:h-[34rem] h-[28rem] p-2">
      <div className="sm:max-w-[67%] absolute bottom-0 left-[3%]">
        <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-10 ">
          It&#39;s not just air
        </p>
        <p className="xs:text-[1.25rem] md:text-[1.75rem] text-[1rem] pb-10">
          Exhalation breath holds tremendous potential. It carries over 1,000
          volatile organic compounds (VOCs). Many of these VOCs are byproducts
          of metabolism, offering insights into our body&#39;s biochemistry.
          Exhalation Breath offers a completely non-invasive solution,
          prioritizing patient comfort.
        </p>
      </div>

      <div className="sm:absolute left-[20%] lg:left-[34%] right-1 sm:bottom-[25%] lg:bottom-[16%] xl:bottom-[10%] 2xl:bottom-0  sm:pl-28">
        <Image
          src="/bubble-lady.png"
          width={1200}
          height={1200}
          alt="logo"
          priority={true}
        />
      </div>
    </section>
  );
}
