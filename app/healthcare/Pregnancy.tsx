import Image from "next/image";

export default function Pregnancy() {
  return (
    <section className="">
      <p className="text-center font-medium xs:text-[1.625rem] md:text-[1.875rem] text-[1.125rem]  leading-[1.625rem] xs:leading-[2.625rem] py-20 px-1 xs:py-44 xs:px-10 max-w-[75rem] mx-auto">
        Traditional health factor monitoring and diagnosis tools often rely on
        blood tests, which can be time-consuming, painful, and lead to
        inflammation and anxiety. Additionally, they generate a significant
        amount of single-use waste that&#39;s challenging to recycle. For
        instance, individuals with diabetes must frequently puncture their
        fingers throughout the day.
      </p>
      <div className="grid grid-cols-12 ">
        <div className="col-span-5 justify-self-center">
          <Image
            src="/pregnant.svg"
            width={388}
            height={822}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="text-right col-span-7  md:px-[4rem] px-[1rem] self-center xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]">
          <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-10">
            Living with Diabetes
          </p>
          <p className="pb-10">
            Moreover, women diagnosed with gestational diabetes often need to
            prick their fingers up to 7 times a day, causing painful disruptions
            to their daily life and contributing to the disposal of billions of
            one-time-use needles and test strips every day.
          </p>
          <p className="hidden md:block">
            In addition, people with chronic diseases often need to monitor
            vital factors regularly. Blood-based health checks can be
            inaccessible and difficult to track, making it challenging to
            optimize personal treatment and prevent complications.
          </p>
        </div>
      </div>
      <p className="md:hidden text-center font-medium xs:text-[1.625rem] md:text-[1.875rem] text-[1.125rem]  leading-[1.625rem] xs:leading-[2.625rem] py-20 px-1 xs:py-44 xs:px-10 max-w-[70rem] mx-auto">
        Traditional health factor monitoring and diagnosis tools often rely on
        blood tests, which can be time-consuming, painful, and lead to
        inflammation and anxiety. Additionally, they generate a significant
        amount of single-use waste that&#39;s challenging to recycle. For
        instance, individuals with diabetes must frequently puncture their
        fingers throughout the day.
      </p>
    </section>
  );
}
