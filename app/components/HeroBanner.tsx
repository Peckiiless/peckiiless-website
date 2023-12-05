import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative text-white h-[30vw] lg:h-[50vw] md:pt-20">
      <Image
        src="/curve.svg"
        alt="Image Alt Text"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute -top-[4.6875rem] -z-10"
      />
      <div className=" grid grid-cols-5">
        <Image
          src="pecki-logo-icon.svg"
          width={400}
          height={400}
          alt="logo"
          priority={true}
          className="col-start-3 self-center"
        />
      </div>
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="pecki-logo-text.svg"
          width={933}
          height={190}
          alt="logo"
          priority={true}
        />
      </div>
      <p className="absolute top-[50%] left-[69%] -translate-x-1/2 -translate-y-1/2 w-[30rem] text-[1.625rem]">
        Revolutionizing Real Time Multi Gas Monitoring Solutions.
      </p>
    </section>
  );
}
