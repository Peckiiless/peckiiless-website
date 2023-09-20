import Image from "next/image";

export default function Partners() {
  return (
    <section className="px-40 pt-10">
      <p className="text-center font-bold text-5xl text-primary-800 py-14">
        Part of the
      </p>
      <div className="grid py-8 mx-auto gap-6 gap-y-20 grid-cols-12">
        <div className="col-span-3 justify-self-center ">
          <Image
            src="/images/Daya.png"
            width={200}
            height={200}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="col-span-3 justify-self-center ">
          <Image
            src="/images/tillvaxtverket.png"
            width={200}
            height={200}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="col-span-3 justify-self-center ">
          <Image
            src="/images/smile_logo.png"
            width={200}
            height={200}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="col-span-3 justify-self-center ">
          <Image
            src="/images/ChalmersVentures.png"
            width={200}
            height={200}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="col-span-3 justify-self-center ">
          <Image
            src="/images/tillvaxtverket2.png"
            width={200}
            height={200}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="col-span-3 justify-self-center ">
          <Image
            src="/images/Drivhuset.png"
            width={200}
            height={200}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="col-span-3 justify-self-center ">
          <Image
            src="/images/sahlgrenska.png"
            width={200}
            height={200}
            alt="logo"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
