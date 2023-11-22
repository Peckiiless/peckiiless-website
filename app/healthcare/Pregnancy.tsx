import Image from "next/image";

export default function Pregnancy() {
  return (
    <section className="px-[2%] bg-productInfoPattern bg-no-repeat bg-contain  bg-bottom">
      <div  className="px-[2%]">
      <p className="rounded-[1.25rem] bg-grey100 text-center font-medium xs:text-[1.625rem] md:text-[1.875rem] text-[1.125rem]  leading-[1.625rem] xs:leading-[2.625rem] my-20 px-1 py-14 xs:px-10 max-w-[80rem] mx-auto">
        Traditional health factor monitoring and diagnosis tools often rely on
        blood tests, which can be time-consuming, painful, and lead to
        inflammation and anxiety. Additionally, they generate a significant
        amount of single-use waste that&#39;s challenging to recycle. For
        instance, individuals with diabetes must frequently puncture their
        fingers throughout the day.
      </p>
      </div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-5 justify-self-center pr-3">
          <Image
            src="/pregnant.svg"
            width={400}
            height={400}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="bg-grey100 rounded-[1.25rem] text-right col-span-7 pt-16 pb-24  md:px-[4rem] px-1 self-center xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]">
          <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
            Living with Diabetes
          </p>
          <p className="pb-10">
            Moreover, women diagnosed with gestational diabetes often need to
            prick their fingers up to 7 times a day, causing painful disruptions
            to their daily life and contributing to the disposal of billions of
            one-time-use needles and test strips every day.
          </p>
          <p className="hidden xs:block">
            In addition, people with chronic diseases often need to monitor
            vital factors regularly. Blood-based health checks can be
            inaccessible and difficult to track, making it challenging to
            optimize personal treatment and prevent complications.
          </p>
        </div>
      </div>
      <p className="xs:hidden text-right px-5 xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]  leading-[1.625rem] xs:leading-[2.625rem] py-20 xs:py-44 xs:px-10 max-w-[70rem] mx-auto">
        In addition, people with chronic diseases often need to monitor vital
        factors regularly. Blood-based health checks can be inaccessible and
        difficult to track, making it challenging to optimize personal treatment
        and prevent complications.
      </p>
    </section>
  );
}
