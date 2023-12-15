import Image from "next/image";

export default function Pregnancy() {
  return (
    <section>
      <div className="px-[2%]">
        <p className="text-center font-medium xs:text-[1.625rem] md:text-[1.75rem] text-[1rem]  leading-[1.5rem] xs:leading-[2.5rem]  md:leading-[2.625rem] my-20 px-1 py-14 xs:px-10 max-w-[85rem] mx-auto">
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
        <div className=" text-right col-span-7 pt-16 pb-24  md:px-[4rem] px-1 self-center xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]">
          <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
            Living with Diabetes
          </p>
          <p className="pb-10">
            For women diagnosed with gestational (pregnancy) diabetes, the daily
            ritual of pricking their fingers up to 7 times is more than a health
            check-it&#39;s a disruptive, painful pause in their routine,
            contributing to the staggering disposal of billions of one-time-use
            needles and test strips every day.
          </p>
          <p className="hidden xs:block pb-10">
            In the world of chronic diseases, the need for regular monitoring is
            undeniable. However, traditional blood-based health checks pose
            accessibility challenges and tracking difficulties, hindering the
            optimization of personal treatment and the prevention of potential
            complications.
          </p>
          <p className="hidden xs:block">
            Discovering a new era in health monitoring that goes beyond
            inconvenience is crucial. Saying goodbye to constant pricking and
            hello to a seamless, accessible approach empowers everyone to take
            charge of their well-being. The health journey should be a path of
            ease, and we&#39;re here to redefine it, creating a future where
            monitoring becomes a part of everybody&#39;s lifestyle, not a
            disruption.
          </p>
        </div>
        <div className="col-span-5 justify-self-center pr-3">
          <Image
            src="/pregnant.png"
            width={460}
            height={460}
            alt="logo"
            priority={true}
            quality={100}
          />
        </div>
      </div>
      <p className="xs:hidden text-right px-5 xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]  leading-[1.625rem] xs:leading-[2.625rem] py-20 xs:py-44 xs:px-10 max-w-[70rem] mx-auto">
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
      </p>
    </section>
  );
}
