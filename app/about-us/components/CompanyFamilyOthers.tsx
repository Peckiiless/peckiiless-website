import Image from "next/image";

export default function CompanyFamilyOthers() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
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
        <div className="">
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
        <div className="">
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
        <div className="">
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
        <div className="">
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
        <div className="">
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
      <div className="flex justify-center mx-auto mt-7">
        <div className="relative px-20">
          <div>
            <Image
              src="/images/girl.png"
              width={300}
              height={300}
              alt="logo"
              priority={true}
            />
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
    </section>
  );
}
