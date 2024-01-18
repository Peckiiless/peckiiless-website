import Image from "next/image";

export default function ProductPackage() {
  return (
    <div className="pt-10 md:pt-0">
      <div className="text-center font-medium sm:text-[1.625rem] md:text-[1.75rem] text-[1rem]  leading-[1.5rem] xs:leading-[2.5rem]  md:leading-[2.625rem] my-10 px-1 xs:px-10 max-w-[95rem] mx-auto">
        <p className="">
          Imagine taking a snapshot of your body&#39;s inner workings in
          real-time, not through complex procedures, but with a simple breath.
          Bio markers in your exhalation are like tiny messengers that carry
          tales of your body&#39;s condition.
        </p>
        <p className="py-10">
          Your health journey begins with a{" "}
          <span className="text-[1.375rem] xs:text-[2rem] md:text-[2.25rem]">
            breath
          </span>
          , and we&#39;re here to make it{" "}
          <span className="text-[1.375rem] xs:text-[2rem] md:text-[2.25rem]">
            extraordinary
          </span>
          .
        </p>
        <p className="text-primary-800 xs:text-[2.25rem] md:text-[2.875rem] text-[1.375rem]">
          Welcome to a Breath of Innovation!
        </p>
      </div>
      <div>
        <div className="grid grid-cols-12 gap-2 xl:gap-10  pt-10 md:pt-20">
          <div className="col-span-4 sm:col-span-5 md:col-span-6 text-right">
            <p className="font-bold leading-[1.5rem] sm:leading-10 sm:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 pb-1 md:pb-8 sm:px-[4%]">
              Breathalyzer benefits
            </p>
            <p className="sm:text-[1.25rem] xl:text-[1.75rem] text-[.9375rem] sm:px-[4%]">
              We&#39;re delighted to introduce one of our most innovative
              applications: non invasive glucose monitoring through exhalation
              breath. Leveraging cutting-
              <span className="hidden sm:inline-block">
                edge gas sensing technology and Al, individuals with diabetes,
                gestational diabetes, and those at risk can now effortlessly
                monitor their glucose levels with a single breath-eliminating
                the need for pain and stress associated with traditional
                methods. Moreover, this breakthrough technology contributes to
                the elimination of billions of one-time- use needles and test
                strips that get thrown away each and every day, promoting a
                sustainable and eco. friendly approach to healthcare.
              </span>
            </p>
            <p className="sm:hidden font-medium text-[1rem] cursor-pointer py-1">
              Read more
            </p>
          </div>
          <div className="col-span-8 sm:col-span-7 md:col-span-6 self-center p-2 xl:w-[90%]">
            <Image
              src="/package.svg"
              width={1000}
              height={1000}
              alt="logo"
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
