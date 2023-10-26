import Image from "next/image";

export default function Partners() {
  return (
    <section className="bg-primary-200">
      <p className="text-center font-bold text-[2.625rem] text-primary-800 py-14 bg-white">
        Part of the
      </p>
      <div className="section">
        <div className="flex gap-5 justify-between items-center">
          <Image
            src="/images/Daya.png"
            width={96}
            height={32}
            alt="logo"
            priority={true}
          />

          <Image
            src="/images/tillvaxtverket.png"
            width={86}
            height={41}
            alt="logo"
            priority={true}
          />

          <Image
            src="/images/smile_logo.png"
            width={152}
            height={68}
            alt="logo"
            priority={true}
          />

          <Image
            src="/images/ChalmersVentures.png"
            width={160}
            height={44}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="flex gap-5 justify-between items-center mt-14">
          <Image
            src="/images/tillvaxtverket2.png"
            width={149}
            height={71}
            alt="logo"
            priority={true}
          />

          <Image
            src="/images/Drivhuset.png"
            width={224}
            height={37}
            alt="logo"
            priority={true}
          />

          <Image
            src="/images/sahlgrenska.png"
            width={240}
            height={85}
            alt="logo"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
