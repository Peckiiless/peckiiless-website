import Image from "next/image";
import Title from "../../components/Title";

export default function Supports() {
  return (
    <section className="bg-primary-200">
      <p className="text-center font-bold text-[2.625rem] text-primary-800 py-14 bg-white">
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
      </div>
    </section>
  );
}
