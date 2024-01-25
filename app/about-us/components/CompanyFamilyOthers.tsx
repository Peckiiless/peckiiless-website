import FadeIn, { FadeInStagger } from "@/app/components/FadeIn";
import {
  Title2875rem,
  Text1625rem,
  Text125rem,
  Text1125rem,
} from "@/app/components/Text";
import Image from "next/image";

export default function CompanyFamilyOthers() {
  return (
    <FadeInStagger faster className="flex-col">
      <div className=" xs:text-[1.625rem] md:text-[1.75rem] text-[1.125rem]  leading-[1.625rem] xs:leading-[2.625rem] my-10 xs:my-20 px-1 py-4 xs:py-14 xs:px-4 max-w-[100rem] mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-10 gap-x-1 sm:gap-x-6 ">
          <FadeIn className="row-span-2 sm:row-span-1 flex items-center justify-between">
            <div>
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

            <div className=" pt-0 ">
              <Title2875rem>Academic collaborator</Title2875rem>
            </div>
          </FadeIn>
          <FadeIn className="">
            <div className="">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/Martin.svg"
                  width={317}
                  height={252}
                  alt="logo"
                  priority={true}
                  quality={100}
                />
                <div className="pt-5 text-center">
                  <Text1625rem>Martin Andersson</Text1625rem>
                  <Text125rem>Technical collaborator</Text125rem>
                  <Text1125rem>Professor at</Text1125rem>
                  <Text1125rem>Chalmers University</Text1125rem>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="">
            <div className="">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/Angela.svg"
                  width={317}
                  height={252}
                  alt="logo"
                  priority={true}
                  quality={100}
                />
                <div className="pt-5 text-center">
                  <Text1625rem>Angela Beth grommet</Text1625rem>
                  <Text125rem>Technical collaborator</Text125rem>
                  <Text1125rem>Assistant professor at</Text1125rem>
                  <Text1125rem>Chalmers University</Text1125rem>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="">
            <div className="">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/Henrik.svg"
                  width={317}
                  height={252}
                  alt="logo"
                  priority={true}
                  quality={100}
                />
                <div className="pt-5 text-center">
                  <Text1625rem>Henrik Ström</Text1625rem>
                  <Text125rem>Fluid Dynamics expert</Text125rem>
                  <Text1125rem>Professor at</Text1125rem>
                  <Text1125rem>Chalmers University</Text1125rem>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="">
            <div className="">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/Andres.svg"
                  width={317}
                  height={252}
                  alt="logo"
                  priority={true}
                  quality={100}
                />
                <div className="pt-5 text-center">
                  <Text1625rem>Martin Andersson</Text1625rem>
                  <Text125rem>Technical collaborator</Text125rem>
                  <Text1125rem>Professor at</Text1125rem>
                  <Text1125rem>Chalmers University</Text1125rem>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="">
            <div className="">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/Jens.svg"
                  width={317}
                  height={252}
                  alt="logo"
                  priority={true}
                  quality={100}
                />
                <div className="pt-5 text-center">
                  <Text1625rem>Jens Eriksson</Text1625rem>
                  <Text125rem>Gas measurement expert</Text125rem>
                  <Text1125rem>Docent at</Text1125rem>
                  <Text1125rem>Linköping University</Text1125rem>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Sara.svg"
                width={317}
                height={252}
                alt="logo"
                priority={true}
              />
              <div className="pt-5 text-center">
                <Text1625rem>Sara Nozohouri</Text1625rem>
                <Text125rem>Board member</Text125rem>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="">
            <div className="">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/Team.svg"
                  width={317}
                  height={252}
                  alt="logo"
                  priority={true}
                  quality={100}
                />
                <div className="pt-5 text-center">
                  <Text1625rem>Elham Mozafari</Text1625rem>
                  <Text125rem>SW and Data architecture</Text125rem>
                  <Text1125rem>expert</Text1125rem>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </FadeInStagger>
  );
}
