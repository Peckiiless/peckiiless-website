import Image from "next/image";

export default function Awards() {
  return (
    <section className="">
      <p className="text-center font-bold text-[2.625rem] text-primary-800 pt-10">
        Award
      </p>
      <div className="section">
        <div className="flex gap-5 justify-between items-center">
          <Image
            src="/images/rectangle.png"
            width={349}
            height={406}
            alt="logo"
            priority={true}
          />

          <Image
            src="/images/rectangle.png"
            width={349}
            height={406}
            alt="logo"
            priority={true}
          />

          <Image
            src="/images/rectangle.png"
            width={349}
            height={406}
            alt="logo"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
