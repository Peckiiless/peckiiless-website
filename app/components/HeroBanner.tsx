import Image from "next/image";

export default function Banner() {
  return (
    <section className="graidient relative text-white h-screen max-h-[46.625rem]">     
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="pecki-logo-icon.svg"
          width={240}
          height={368}
          alt="logo"
          priority={true}
          
        />
      </div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="pecki-logo-text.svg"
          width={933}
          height={190}
          alt="logo"
          priority={true}
        />
      </div>
      <p className="absolute top-[67%] left-[69%] -translate-x-1/2 -translate-y-1/2 w-[17rem] text-[1.75rem] font-medium">
        A solution for people living with diabetes.
      </p>
    </section>
  );
}
