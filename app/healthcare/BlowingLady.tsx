import Image from "next/image";

export default function BlowingLady() {
  return (
    <section className="relative h-[43rem] p-20">
      <div className="w-[70%] absolute left-[6%] bottom-0 pr-20">
        <p className="font-medium text-[3.125rem] text-primary-800 leading-[3.75rem] pb-10 ">
          It's not just air
        </p>
        <p className="text-[1.75rem] pb-10">
          Exhalation breath holds tremendous potential. It carries over 1,000
          volatile organic compounds (VOCs). Many of these VOCs are byproducts
          of metabolism, offering insights into our body's biochemistry.
          Exhalation Breath offers a completely non-invasive solution,
          prioritizing patient comfort.
        </p>
      </div>

      <div className="absolute right-[6%] bottom-0">
        <Image
          src="/bubble-lady.png"
          width={906}
          height={544}
          alt="logo"
          priority={true}
        />
      </div>
    </section>
  );
}
