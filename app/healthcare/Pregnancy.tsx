import Image from "next/image";

export default function Pregnancy() {
  return (
    <section className="">
      <p className="text-center font-medium text-[2.625rem] text-primary-800 leading-[3.25rem] py-36 w-[81rem] mx-auto">
        Both the number of cases and the prevalence of diabetes have been
        steadily increasing over the past few decades. Testing and monitoring of
        these illnesses have gotten stuck in development for years upon years,
        it’s time to globalize an easier option for monitoring your glucose
        testing in an easy, effecient way.
      </p>
      <div className="grid sm:grid-cols-12 ">
        <div className="col-span-5 justify-self-center">
          <Image
            src="/pregnant.png"
            width={388}
            height={822}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="text-right col-span-7 px-[14%] self-center">
          <p className="font-medium text-[3.125rem] text-primary-800 leading-[3.75rem] pb-10">
            Living with Diabetes
          </p>
          <p className="text-[1.75rem] pb-10">
            Moreover, women diagnosed with gestational diabetes often need to
            prick their fingers up to 7 times a day, causing painful disruptions
            to their daily life and contributing to the disposal of billions of
            one-time-use needles and test strips every day.
          </p>
          <p className="text-[1.75rem] ">
            In addition, people with chronic diseases often need to monitor
            vital factors regularly. Blood-based health checks can be
            inaccessible and difficult to track, making it challenging to
            optimize personal treatment and prevent complications.
          </p>
        </div>
      </div>
    </section>
  );
}
