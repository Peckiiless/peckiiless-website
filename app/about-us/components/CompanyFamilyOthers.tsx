import FadeIn, { FadeInStagger } from "@/app/components/FadeIn";
import Image from "next/image";

export default function CompanyFamilyOthers() {
  return (
    <FadeInStagger faster className="flex-col">
      <div className="grid grid-cols-12 xs:text-[1.625rem] md:text-[1.75rem] text-[1.125rem]  leading-[1.625rem] xs:leading-[2.625rem] my-20 px-1 py-14 xs:px-4 max-w-[100rem] mx-auto">
      <div className="col-span-1 justify-self-end self-center">
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
        <div className="self-center col-span-3 text-primary-800 pt-0 justify-self-start">
          <p className="text-[1.75rem] font-medium pt-2">Company Family</p>
                    <p className="font-medium text-[2.875rem]">Academic collaborator</p>

        </div>
      <div className=" col-span-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 ">      
        <FadeIn className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Martin.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Martin Andersson.
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Angela.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Angela grommet
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Henrik.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Henrik Strom
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Andres.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Anders Hellman
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Jens.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Jens Eriksson
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Team.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">No Name</div>
            </div>
          </div>
        </FadeIn>
      </div>
      </div>
    </FadeInStagger>
  );
}
