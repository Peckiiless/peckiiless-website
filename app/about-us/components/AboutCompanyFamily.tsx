import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";

export default function AboutCompanyFamily() {
  return (
    <FadeIn className="p-4">
      <div className="grid py-8 mx-auto gap-5 grid-cols-12">
        <div className="col-span-7 flex gap-4 justify-self-center">
          <div className="flex flex-col items-center">
            <Image
              src="/images/marziyeh.svg"
              width={300}
              height={300}
              alt="logo"
              priority={true}
            />
            <div className="py-5 font-bold text-2xl">Marzyeh Advand.</div>
          </div>
           <div className="flex flex-col items-center">
            <Image
              src="/images/Sara.svg"
              width={300}
              height={300}
              alt="logo"
              priority={true}
            />
            <div className="text-center py-5 font-bold text-2xl">Sara N.</div>
          </div>
        </div>
        <div className="col-span-4 pt-16  text-primary-800">
          <p className="text-[2.875rem] font-semibold text-right pt-12">
            Company Family
          </p>
         
        </div>
        <div className="col-span-1 justify-self-start self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="280"
            viewBox="0 0 54 240"
            fill="none"
          >
            <path
              d="M26.9863 239.672C41.7139 239.672 53.653 227.732 53.653 213.005C53.653 198.277 41.7139 186.338 26.9863 186.338C12.2587 186.338 0.319662 198.277 0.319662 213.005C0.319662 227.732 12.2587 239.672 26.9863 239.672ZM31.9863 213.005V0.995453H21.9863V213.005H31.9863Z"
              fill="#B2335E"
            />
          </svg>
        </div>
      </div>
    </FadeIn>
  );
}
