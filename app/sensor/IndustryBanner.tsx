import Image from "next/image";

export default function IndustryfoBanner() {
  return (
    <div className="px-20 pt-10">
      <div className="md:flex justify-between items-center gap-8">
        <div className="text-red-900 font-bold text-5xl">Industry Text</div>
        <div className="">
          <Image
            src="/industry-banner.png"
            width={450}
            height={400}
            alt="medicin with trolley"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
