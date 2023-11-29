"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import SubmitForm from "../about-us/components/SubmitForm";
import FadeIn, { FadeInStagger } from "@/app/components/FadeIn";

const Footer = () => {
  const currentRoute = usePathname();
  return (
    <div className="md:text-[1.5rem] xs:text-[1.125rem] text-[.625rem] mt-20 md:mt-44">
      <div className="mx-auto">
        <h1 className="flex justify-center mt-5">
          <Link
            href="/"
            className="no-underline flex items-center justify-center gap-1"
          >
            <Logo fillLogo="#444F77" fillText="#444F77" direction="col" />
          </Link>
        </h1>
        <div className={`${currentRoute !== "/about-us" && "hidden"}`}>
          <SubmitForm />
        </div>
        <FadeInStagger faster className="flex justify-center px-4">
          <div className="flex flex-wrap gap-6 xs:gap-12  mt-6 xs:mt-14">
            <FadeIn className="flex gap-2 xs:gap-4 items-center">
              <svg
                className="w-[22px] xs:w-[40px] md:w-[50px]"
                width="inherit"
                height="inherit"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#B2335E" />
                <path
                  d="M39.3328 18H20.6673C18.1 18 16 19.725 16 21.8338V37.1662C16 39.2764 18.1 41 20.6673 41H39.3328C41.9 41 44 39.2764 44 37.1662V21.8338C44 19.725 41.9 18 39.3328 18ZM39.3328 20.875C39.5515 20.875 39.758 20.9268 39.9347 21.0173L29.9983 27.7649L20.0635 21.0173C20.2402 20.9268 20.4467 20.875 20.6655 20.875H39.331H39.3328ZM20.6673 38.125C20.6148 38.125 20.5623 38.1221 20.5115 38.1164L26.6803 31.087L25.8805 30.4301L19.5 35.6712V21.9445L30 32.375L40.5 21.9445V35.6712L34.1195 30.4301L33.3197 31.087L39.4885 38.1164C39.4378 38.1221 39.3852 38.125 39.3345 38.125H20.669H20.6673Z"
                  fill="#FEFEFE"
                />
              </svg>

              <p className="">Email</p>
            </FadeIn>
            <FadeIn className="flex gap-2 xs:gap-4 items-center">
              <svg
                className="w-[22px] xs:w-[40px] md:w-[50px]"
                xmlns="http://www.w3.org/2000/svg"
                width="inherit"
                height="inherit"
                viewBox="0 0 60 60"
                fill="none"
              >
                <circle cx="30" cy="30" r="30" fill="#B2335E" />
                <path
                  d="M35.0699 36.4617L37.7947 33.7358C38.1617 33.3732 38.6261 33.125 39.1314 33.0213C39.6366 32.9176 40.1612 32.9629 40.6412 33.1516L43.9621 34.4781C44.4472 34.6751 44.8632 35.0114 45.1576 35.4445C45.452 35.8776 45.6117 36.3882 45.6165 36.912V42.9967C45.6137 43.353 45.5388 43.705 45.3964 44.0316C45.254 44.3582 45.047 44.6526 44.7879 44.897C44.5287 45.1414 44.2229 45.3309 43.8886 45.454C43.5544 45.577 43.1987 45.6312 42.843 45.6131C19.5724 44.1649 14.8769 24.4505 13.9889 16.9055C13.9476 16.535 13.9853 16.16 14.0994 15.8051C14.2134 15.4502 14.4013 15.1234 14.6507 14.8464C14.9 14.5693 15.2052 14.3483 15.5461 14.1977C15.887 14.0471 16.2559 13.9704 16.6285 13.9727H22.504C23.0283 13.9743 23.5401 14.1327 23.9737 14.4276C24.4073 14.7226 24.7427 15.1405 24.9369 15.6277L26.2628 18.95C26.4578 19.4283 26.5075 19.9535 26.4058 20.46C26.3041 20.9664 26.0555 21.4317 25.6911 21.7976L22.9662 24.5236C22.9662 24.5236 24.5355 35.1474 35.0699 36.4617Z"
                  fill="white"
                />
              </svg>

              <p className="">031-772 10 00</p>
            </FadeIn>
            <FadeIn className="flex gap-2 xs:gap-4 items-center">
              <svg
                className="w-[22px] xs:w-[40px] md:w-[50px]"
                xmlns="http://www.w3.org/2000/svg"
                width="inherit"
                height="inherit"
                viewBox="0 0 60 60"
                fill="none"
              >
                <circle cx="30" cy="30" r="30" fill="#B2335E" />
                <path
                  d="M26 22H31.534V24.836H31.614C32.384 23.454 34.268 22 37.078 22C42.92 22 44 25.636 44 30.366V40H38.23V31.46C38.23 29.424 38.188 26.802 35.23 26.802C32.226 26.802 31.766 29.02 31.766 31.312V40H26V22Z"
                  fill="white"
                />
                <path d="M16 22H22V40H16V22Z" fill="white" />
                <path
                  d="M22 17C22 18.656 20.656 20 19 20C17.344 20 16 18.656 16 17C16 15.344 17.344 14 19 14C20.656 14 22 15.344 22 17Z"
                  fill="white"
                />
              </svg>

              <p className="">Peckiiless</p>
            </FadeIn>
            <FadeIn className="flex gap-2 xs:gap-4 items-center">
              <svg
                className="w-[22px] xs:w-[40px] md:w-[50px]"
                xmlns="http://www.w3.org/2000/svg"
                width="inherit"
                height="inherit"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M30 0C13.4314 0 0 13.4314 0 30C0 46.5686 13.4314 60 30 60C46.5686 60 60 46.5686 60 30C60 13.4314 46.5686 0 30 0ZM30 10.1623C38.2593 10.1623 44.9561 16.8592 44.9561 25.1184C44.9561 27.6203 44.2705 30.923 42.8612 32.7905L30 49.8377L17.1387 32.7906C15.5872 30.7344 15.0439 27.8806 15.0439 25.1185C15.044 16.8592 21.7408 10.1623 30 10.1623ZM30 18.8269C26.5249 18.8269 23.7085 21.6433 23.7085 25.1184C23.7085 28.5936 26.5249 31.4099 30 31.4099C33.4752 31.4099 36.2915 28.5936 36.2915 25.1184C36.2915 21.6433 33.4752 18.8269 30 18.8269Z"
                  fill="#B2335E"
                />
              </svg>
              <p className="">Chalmersplatsen 4, 412 96 Göteborg</p>
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>
      <FadeIn className="text-center py-5 xs:py-10">
        @2023 www.peckiiless.com all copyrights reserved.
      </FadeIn>
      <div className="bg-footer h-[5rem] sm:h-[15rem] bg-bottom xs:bg-top bg-contain xs:bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default Footer;
