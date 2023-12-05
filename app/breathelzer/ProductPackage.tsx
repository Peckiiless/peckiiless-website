import Image from "next/image";

export default function ProductPackage() {
  return (
    <div className="">
      <div className="text-center font-medium xs:text-[1.625rem] md:text-[1.75rem] text-[1rem]  leading-[1.5rem] xs:leading-[2.5rem]  md:leading-[2.625rem] my-10 px-1 xs:px-10 max-w-[95rem] mx-auto">
        <p className="">
          Imagine taking a snapshot of your body&#39;s inner workings in
          real-time, not through complex procedures, but with a simple breath.
          Bio markers in your exhalation are like tiny messengers that carry
          tales of your body&#39;s condition.
        </p>
        <p className="py-10">
          Your health journey begins with a breath, and we&#39;re here to make
          it extraordinary.{" "}
        </p>
        <p className="xs:text-[2.625rem] md:text-[2.875rem] text-[1.75rem]">
          Welcome to a Breath of Innovation!
        </p>
      </div>
      <div>
        <div className="grid grid-cols-12 gap-10  pt-20">
          <div className="col-span-5 text-right">
            <p className="font-bold xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 pb-8">
              Breathalyzer benefits
            </p>
            <p className="xs:text-[1.25rem] md:text-[1.75rem] text-[.875rem] xl:pl-[10%]">
              We&#39;re delighted to introduce one of our most innovative
              applications: non invasive glucose monitoring through exhalation
              breath. Leveraging cutting-edge gas sensing technology and Al,
              individuals with diabetes, gestational diabetes, and those at risk
              can now effortlessly monitor their glucose levels with a single
              breath-eliminating the need for pain and stress associated with
              traditional methods. Moreover, this breakthrough technology
              contributes to the elimination of billions of one-time- use
              needles and test strips that get thrown away each and every day,
              promoting a sustainable and eco. friendly approach to healthcare.
            </p>
          </div>
          <div className="col-span-7 p-10">
            <p className="font-bold xs:text-[2rem] text-[1.375rem] text-primary-800 pb-10">
              Peckiiless Breathalyzer offers portability, ease of use, and
              multiple applications for a convenient and reliable breath
              analysis experience.
            </p>
            <Image
              src="/package.svg"
              width={1000}
              height={464}
              alt="logo"
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
