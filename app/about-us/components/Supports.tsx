import Image from "next/image";

export default function Supports() {
  return (
    <section className="bg-patternLady bg-no-repeat bg-cover">
      <p className="text-center font-bold text-[2.625rem] text-primary-800 pt-10">
        Get Support From
      </p>

      <div className="section">
        <div className="flex gap-5 justify-between items-center">
          <Image
            src="/images/Almi.png"
            width={104}
            height={37}
            alt="logo"
            priority={true}
          />

          <Image
            src="/images/Euipo.png"
            width={203}
            height={57}
            alt="logo"
            priority={true}
          />

          <Image
            src="/images/Sten.png"
            width={96}
            height={63}
            alt="logo"
            priority={true}
          />

          <Image
            src="/images/chalmers.png"
            width={74}
            height={93}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="flex gap-5 justify-around items-center mt-14">
          <Image
            src="/images/sodertalje.png"
            width={149}
            height={71}
            alt="logo"
            priority={true}
          />

          <Image
            src="/images/incubators.png"
            width={224}
            height={37}
            alt="logo"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
