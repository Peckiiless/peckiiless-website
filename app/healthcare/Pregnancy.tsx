import Image from "next/image";

export default function Pregnancy() {
  return (
    <section className="bg-patternLady bg-no-repeat bg-contain  bg-bottom">
      <p className="font-medium text-[3.75rem] text-primary-800 leading-[3.75rem] p-20 w-[75%]">
        Here at Pickiless we have created the one of the first advanced
        breathalyzer that can monitor your glucose levels.{" "}
      </p>
      <div className="grid sm:grid-cols-2 ">
        <div className="px-40 justify-self-end">
          <Image
            src="/pregnant.png"
            width={550}
            height={960}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="text-right px-40 py-10">
          <p className="font-medium text-[3.75rem] text-primary-800 leading-[3.75rem] pb-10">
            Living with Diabetes
          </p>
          <p className="text-[1.625rem] font-medium  ">
            Pregnant women living with diabetes increases risks of
            complications, having a cesarean delivery, increases babies’ risk of
            being born too large and developing obesity or type 2 diabetes in
            the future. But by using breathalyzer she has a less intrusive way
            of monitor her glucose levels multiple times a day.
          </p>
        </div>
      </div>
    </section>
  );
}
