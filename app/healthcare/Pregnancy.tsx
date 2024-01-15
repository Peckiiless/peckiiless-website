import Image from "next/image";

export default function Pregnancy() {
  return (
    <section className="mx-auto max-w-[100rem] sm:mt-10">
      <div className="px-1">
        <p className="text-center font-medium xs:text-[1.625rem] md:text-[1.75rem] text-[1rem]  leading-[1.5rem] xs:leading-[2.5rem]  md:leading-[2.625rem]  px-1 py-8 xs:px-8 max-w-[85rem] mx-auto">
          In the world of health monitoring, current tools have long leaned on
          blood tests. These tests, however, come with a set of challenges -they
          take time, can be painful, require special facilities or training, and
          sometimes cause inflammation and anxiety. To make matters worse, they
          contribute to a considerable amount of single-use waste that poses
          recycling challenges. Take, for example, the routine of individuals
          with diabetes who find themselves frequently puncturing their fingers
          throughout the day.
        </p>
      </div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-8 md:col-span-7 lg:col-span-7 xl:col-span-8 2xl:col-span-7 text-right xs:pt-16  md:px-[3rem] px-1 self-center xs:text-[1.15rem] sm:text-[1.35rem] md:text-[1.20rem] lg:text-[1.45rem] xl:text-[1.75rem] 2xl:text-[1.75rem] text-[1rem]">
          <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem]  xs:pb-8 xl:pb-10">
            Living with Diabetes
          </p>
          <p className="pb-1 xs:pb-5 md:pb-10">
            For women diagnosed with gestational (pregnancy) diabetes, the daily
            ritual of pricking their fingers up to 7 times is more than a health
            check-it&#39;s a disruptive, painful pause in their routine,
            contributing to the staggering disposal of billions of one-time-use
            needles and test strips every day.
          </p>
          <p className="hidden sm:block pb-1 xs:pb-5 md:pb-10">
            In the world of chronic diseases, the need for regular monitoring is
            undeniable. However, traditional blood-based health checks pose
            accessibility challenges and tracking difficulties, hindering the
            optimization of personal treatment and the prevention of potential
            complications.
          </p>
          <p className="hidden md:block">
            Discovering a new era in health monitoring that goes beyond
            inconvenience is crucial. Saying goodbye to constant pricking and
            hello to a seamless, accessible approach empowers everyone to take
            charge of their well-being. The health journey should be a path of
            ease, and we&#39;re here to redefine it, creating a future where
            monitoring becomes a part of everybody&#39;s lifestyle, not a
            disruption.
          </p>
          <p className=" md:hidden font-medium text-[1rem] cursor-pointer py-1">
             Read more
          </p>
        </div>
        <div
          style={{ width: "90%", height: "90%", position: "relative" }}
          className="col-span-4 md:col-span-5 lg:col-span-5 xl:col-span-4 2xl:col-span-5 justify-self-center pr-3 mt-6 xl:mt-24"
        >
          <Image
            src="/pregnant.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
            priority={true}
            quality={100}
          />
        </div>
      </div>
      {/* <p className="xs:hidden text-right px-5 xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]  leading-[1.625rem] xs:leading-[2.625rem] py-20 xs:py-44 xs:px-10 max-w-[70rem] mx-auto">
        In the world of chronic diseases, the need for regular monitoring is
        undeniable. However, traditional blood-based health checks pose
        accessibility challenges and tracking difficulties, hindering the
        optimization of personal treatment and the prevention of potential
        complications.
      </p>
      <p className="xs:hidden text-right px-5 xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]  leading-[1.625rem] xs:leading-[2.625rem] py-20 xs:py-44 xs:px-10 max-w-[70rem] mx-auto">
        Discovering a new era in health monitoring that goes beyond
        inconvenience is crucial. Saying goodbye to constant pricking and hello
        to a seamless, accessible approach empowers everyone to take charge of
        their well-being. The health journey should be a path of ease, and
        we&#39;re here to redefine it, creating a future where monitoring
        becomes a part of everybody&#39;s lifestyle, not a disruption.
      </p> */}
    </section>
  );
}
