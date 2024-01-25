import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";
import { Title2875rem, Text2rem } from "../../components/Text";

export default function AboutCompanyFamily() {
  return (
    <FadeIn className="px-4">
      <div className="grid grid-cols-2 py-1 gap-5">
        <div className="flex gap-14 justify-self-center items-center">
          <div className="flex flex-col items-center justify-self-start">
            <Image
              src="/images/marziyeh.svg"
              width={317}
              height={252}
              alt="logo"
              priority={true}
            />
            <div className="pt-5 text-center">
              <Text2rem>Marzyeh Advand</Text2rem>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-self-center">
          <Title2875rem>Founder and CEO</Title2875rem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="280"
            viewBox="0 0 54 240"
            fill="none"
            className="w-[30px] sm:w-[36px] lg:w-[54px]"
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
