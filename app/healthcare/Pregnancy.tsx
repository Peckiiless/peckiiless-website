import Image from "next/image"

export default function Pregnancy() {
  return (
    <section className="p-10">
      <div className="grid py-8 mx-auto gap-5 grid-cols-12">
        <div className="col-span-6 justify-center">
          <Image
            src="/pregnant.png"
            width={360}
            height={762}
            alt="logo"
            priority={true}
          />
        </div>
     
        <p className="col-span-6 px-28 text-3xl  font-medium">
          PeckiiLess AB is a Deeptech startup developing a patent-pending
          technology for nanosensor-based multi-selective gas detection. Our
          innovative gas detection system opens doors to efficient and
          non-invasive monitoring of glucose and cholesterol levels, promising
          accurate results that revolutionize both industrial and healthcare
          applications.
        </p>
      </div>
    </section>
  );
}
