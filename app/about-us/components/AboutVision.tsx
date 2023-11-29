import FadeIn from "@/app/components/FadeIn";

export default function Vision() {
  return (
    <FadeIn className="px-[2%]">
      <div className="grid grid-cols-12 rounded-[1.25rem] bg-grey100 text-center font-medium xs:text-[1.625rem] md:text-[1.875rem] text-[1.125rem]  leading-[1.625rem] xs:leading-[2.625rem] my-20 px-1 py-14 xs:px-10 max-w-[80rem] mx-auto">
        <div className="col-span-1">
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
        <div className=" col-span-2 text-primary-800 pt-14">
          <p className="font-bold text-[2.625rem]">Our Vision</p>
          <p className="text-[1.75rem] font-semibold pt-2">Nano sensor</p>
        </div>
        <p className="col-span-9 pl-20 pr-2 text-right">
          PeckiiLess AB is a Deeptech startup developing a patent-pending
          technology for nanosensor-based multi-selective gas detection. Our
          innovative gas detection system opens doors to efficient and
          non-invasive monitoring of glucose and cholesterol levels, promising
          accurate results that revolutionize both industrial and healthcare
          applications.
        </p>
      </div>
    </FadeIn>
  );
}
