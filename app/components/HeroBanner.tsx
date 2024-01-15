import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative text-white h-[40vw] md:h-[50vw]">
      <Image
        src="/curve.svg"
        alt="Image Alt Text"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute -top-[4.6875rem] -z-10"
      />

      <div className="absolute top-[17%] xs:top-[25%] md:top-[30%] xl:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="pecki-logo-text.svg"
          width={1200}
          height={1200}
          alt="logo"
          priority={true}
        />
        <div className="absolute w-full top-[91%] left-[50%] xs:left-[45%] md:left-[55%] 2xl:left-[65%] text-[.7rem] sm:text-[1.2rem] lg:text-[1.625rem]">
          <p>Revolutionizing Real Time Multi</p>
          <p>Gas Monitoring Solutions.</p>
        </div>
      </div>
    </section>
  );
}
