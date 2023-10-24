import Image from "next/image";

export default function ProductPackage() {
  return (
    <div className="package-graidient">
      <div className="grid md:grid-cols-5  gap-2">
        <div className="col-span-3">
          <Image
            src="/package.png"
            width={1440}
            height={599}
            alt="logo"
            priority={true}
          />
        </div>
        <p className="text-[1.625rem]  place-self-center font-medium text-right pr-10 col-span-2">
          The breathalyzer connects seeminglessly though our mobile appication
          where you can easily monitor 8 different pathogens in your breath.
        </p>
      </div>
    </div>
  );
}
