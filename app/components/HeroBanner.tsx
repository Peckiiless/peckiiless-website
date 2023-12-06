import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative text-white h-[35vw] lg:h-[50vw] md:pt-20">
      <Image
        src="/curve.svg"
        alt="Image Alt Text"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute -top-[4.6875rem] -z-10"
      />
      <div className=" grid grid-cols-5 justify-center">
        <Image
          src="pecki-logo-icon.svg"
          width={250}
          height={250}
          alt="logo"
          priority={true}
          className="col-start-3 justify-self-center"
        />
      </div>
      <div className="absolute top-[40%] xl:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="pecki-logo-text.svg"
          width={1200}
          height={1200}
          alt="logo"
          priority={true}
        />
        <p className="md:absolute top-[90%] left-[65%] w-[90%] xl:w-[40%] text-[1rem] lg:text-[1.625rem]">
          Revolutionizing Real Time Multi Gas Monitoring Solutions.
        </p>
      </div>
    </section>
  );
}
