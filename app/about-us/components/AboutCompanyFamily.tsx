import Image from "next/image";

export default function Vision() {
  return (
    <section className="p-10">
      <div className="grid py-8 mx-auto gap-5 grid-cols-12">
        <div className="col-span-6 justify-self-center ">
          <div className="relative p-16">
            <div>
              <Image
                src="/images/marziyeh.png"
                width={500}
                height={500}
                alt="logo"
                priority={true}
              />
            </div>

            <svg
              className="absolute -z-10 top-0  right-1"
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
        <div className="justify-self-end col-span-5 self-center  text-primary-800">
          <p className="text-3xl font-semibold text-right pt-2">
            Company Family
          </p>
          <p className="font-bold text-5xl text-right">
            Professional work team in their field
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
    </section>
  );
}
