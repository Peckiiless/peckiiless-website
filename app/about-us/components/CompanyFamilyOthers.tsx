import Image from "next/image";

export default function CompanyFamilyOthers() {
  return (
    <section className="px-40">
      <div className="grid py-8 mx-auto gap-5 grid-cols-12">
        <div className="col-span-4 justify-self-center ">
          <div className="relative px-20">
            <div>
              <Image
                src="/images/sara.png"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">Sara N.</div>
            </div>

            <svg
              className="absolute -z-10 top-3  right-0"
              xmlns="http://www.w3.org/2000/svg"
              width="252"
              height="252"
              viewBox="0 0 252 252"
              fill="none"
            >
              <circle
                cx="126"
                cy="126"
                r="126"
                fill="#F9BAB1"
                fill-opacity="0.19"
              />
            </svg>
          </div>
        </div>
        <div className="col-span-4 justify-self-center ">
          <div className="relative px-20">
            <div>
              <Image
                src="/images/martin.png"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Martin Andersson.
              </div>
            </div>

            <svg
              className="absolute -z-10 top-3  right-0"
              xmlns="http://www.w3.org/2000/svg"
              width="252"
              height="252"
              viewBox="0 0 252 252"
              fill="none"
            >
              <circle
                cx="126"
                cy="126"
                r="126"
                fill="#F9BAB1"
                fill-opacity="0.19"
              />
            </svg>
          </div>
        </div>
        <div className="col-span-4 justify-self-center ">
          <div className="relative px-20">
            <div>
              <Image
                src="/images/angela.png"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Angela grommet
              </div>
            </div>

            <svg
              className="absolute -z-10 top-3  right-0"
              xmlns="http://www.w3.org/2000/svg"
              width="252"
              height="252"
              viewBox="0 0 252 252"
              fill="none"
            >
              <circle
                cx="126"
                cy="126"
                r="126"
                fill="#F9BAB1"
                fill-opacity="0.19"
              />
            </svg>
          </div>
        </div>
        <div className="col-span-4 justify-self-center ">
          <div className="relative px-20">
            <div>
              <Image
                src="/images/henrik.png"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Henrik Strom
              </div>
            </div>

            <svg
              className="absolute -z-10 top-3  right-0"
              xmlns="http://www.w3.org/2000/svg"
              width="252"
              height="252"
              viewBox="0 0 252 252"
              fill="none"
            >
              <circle
                cx="126"
                cy="126"
                r="126"
                fill="#F9BAB1"
                fill-opacity="0.19"
              />
            </svg>
          </div>
        </div>
        <div className="col-span-4 justify-self-center ">
          <div className="relative px-20">
            <div>
              <Image
                src="/images/anders.png"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Anders Hellman
              </div>
            </div>

            <svg
              className="absolute -z-10 top-3  right-0"
              xmlns="http://www.w3.org/2000/svg"
              width="252"
              height="252"
              viewBox="0 0 252 252"
              fill="none"
            >
              <circle
                cx="126"
                cy="126"
                r="126"
                fill="#F9BAB1"
                fill-opacity="0.19"
              />
            </svg>
          </div>
        </div>
        <div className="col-span-4 justify-self-center ">
          <div className="relative px-20">
            <div>
              <Image
                src="/images/jens.png"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Jens Eriksson
              </div>
            </div>

            <svg
              className="absolute -z-10 top-3  right-0"
              xmlns="http://www.w3.org/2000/svg"
              width="252"
              height="252"
              viewBox="0 0 252 252"
              fill="none"
            >
              <circle
                cx="126"
                cy="126"
                r="126"
                fill="#F9BAB1"
                fill-opacity="0.19"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
