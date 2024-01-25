import FadeIn from "@/app/components/FadeIn";
import { Title2875rem, Text2,Text1625rem } from "../../components/Text";

export default function Vision() {
  return (
    <FadeIn className="px-4 md:mb-20">
      <div className="grid grid-cols-12  py-1 gap-5">
        <div className="col-span-4 sm:col-span-6 flex items-center justify-self-center	">
          <svg
            xmlns="http:www.w3.org/2000/svg"
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
          <div className=" text-primary-800">
            <Title2875rem>Our Vision</Title2875rem>
            <Text1625rem>Nano sensor</Text1625rem>
          </div>
        </div>
        <div className="col-span-8 sm:col-span-6 self-center">
          <Text2>
            PeckiiLess AB is a Deeptech startup developing patent-pending
            technology for nanosensor-based multi-selective gas detection. Our
            innovative gas detection system not only opens doors to efficiency
            but also promises accurate results, revolutionizing applications in
            both industrial and healthcare sectors.
          </Text2>
        </div>
      </div>
    </FadeIn>
    // <FadeIn className="px-[2%]">
    //   <div className="grid grid-cols-12 my-20 px-1 py-14 xs:px-10 max-w-[85rem] mx-auto">
    //     <div className="col-span-1 justify-self-end">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="54"
    //         height="280"
    //         viewBox="0 0 54 240"
    //         fill="none"
    //       >
    //         <path
    //           d="M26.9863 239.672C41.7139 239.672 53.653 227.732 53.653 213.005C53.653 198.277 41.7139 186.338 26.9863 186.338C12.2587 186.338 0.319662 198.277 0.319662 213.005C0.319662 227.732 12.2587 239.672 26.9863 239.672ZM31.9863 213.005V0.995453H21.9863V213.005H31.9863Z"
    //           fill="#B2335E"
    //         />
    //       </svg>
    //     </div>
    //     <div className=" col-span-3 text-primary-800 pt-16">
    //       <Title2875rem>Our Vision</Title2875rem>
    //       <p className="text-[1.75rem] font-medium  pt-2">Nano sensor</p>
    //     </div>
    //     <div className="col-span-8 pl-14 pr-2">
    //       <Text2>
    //         PeckiiLess AB is a Deeptech startup developing patent-pending
    //         technology for nanosensor-based multi-selective gas detection. Our
    //         innovative gas detection system not only opens doors to efficiency
    //         but also promises accurate results, revolutionizing applications in
    //         both industrial and healthcare sectors.
    //       </Text2>
    //     </div>
    //   </div>
    // </FadeIn>
  );
}
