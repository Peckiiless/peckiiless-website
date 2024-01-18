import FadeIn from "@/app/components/FadeIn";
import { Text2 } from "../../components/Text";

export default function Vision() {
  return (
    <FadeIn className="px-[2%]">
      <div className="grid grid-cols-12 my-20 px-1 py-14 xs:px-10 max-w-[85rem] mx-auto">
        <div className="col-span-1 justify-self-end">
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
        <div className=" col-span-3 text-primary-800 pt-16">
          <p className="font-medium text-[2.875rem]">Our Vision</p>
          <p className="text-[1.75rem] font-medium  pt-2">Nano sensor</p>
        </div>
        <div className="col-span-8 pl-14 pr-2">
          <Text2>PeckiiLess AB is a Deeptech startup developing patent-pending technology for nanosensor-based multi-selective gas detection. Our innovative gas detection system not only opens doors to efficiency but also promises accurate results, revolutionizing applications in both industrial and healthcare sectors.</Text2>
        </div>
      </div>
    </FadeIn>
  );
}
