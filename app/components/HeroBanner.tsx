import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative text-white h-[30vw] lg:h-[50vw]">
      <Image
        src="/curve.svg"
        alt="Image Alt Text"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full absolute -top-[4.6875rem] -z-10"
      />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="pecki-logo-icon.svg"
          width={240}
          height={368}
          alt="logo"
          priority={true}
        />
      </div>
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="pecki-logo-text.svg"
          width={933}
          height={190}
          alt="logo"
          priority={true}
        />
      </div>
      <p className="absolute top-[60%] left-[69%] -translate-x-1/2 -translate-y-1/2 w-[17rem] text-[1.75rem] font-medium">
        A solution for people living with diabetes.
      </p>
    </section>
  );
}
