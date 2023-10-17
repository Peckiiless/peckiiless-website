import Image from "next/image";

export default function ProductPackage() {
  return (
    // <section className="h-screen bg-contain  bg-bottom  bg-productPackage  bg-no-repeat"></section>
    <div className="p-20">
      <div className="grid md:grid-cols-2 place-items-center gap-20">
        <div className="">
          <Image
            src="/package.png"
            width={768}
            height={464}
            alt="logo"
            priority={true}
          />
        </div>
        <div>
          <p className="font-bold text-[3.75rem] text-primary-800 ">
            Peckiiless Breathalyzer
          </p>
          <p className="text-[1.625rem]  w-3/4">
            The breathalyzer connects seeminglessly though our mobile appication
            where you can easily monitor 8 different pathogens in your breath.
          </p>
        </div>
      </div>
    </div>
  );
}
