import Image from "next/image";

export default function Pregnancy() {
  return (
    <section className="section"> 
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-medium sm:text-[1.875rem] text-[1.5rem] mb-5">
            PeckiiLess AB is a Deeptech startup developing a patent-pending
            technology for nanosensor-based multi-selective gas detection. Our
            innovative gas detection system opens doors to efficient and
            non-invasive monitoring of glucose and cholesterol levels, promising
            accurate results that revolutionize both industrial and healthcare
            applications.
          </div>
        </div>
        <div className="p-14 md:w-3/4">
          <Image
            src="/pregnant.png"
            width={350}
            height={600}
            alt="logo"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
