import Image from "next/image";

export default function BlowingLady() {
  return (
    <section className="relative h-[50rem] p-2">
      <div className="max-w-[60%] absolute bottom-0 left-[3%]">
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

      <div className="absolute right-[1%] bottom-0">
        <Image
          src="/bubble-lady.svg"
          width={1300}
          height={883}
          alt="logo"
          priority={true}
        />
      </div>
    </section>
  );
}
