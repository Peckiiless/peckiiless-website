import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="md:text-[1.5rem] xs:text-[1.125rem] text-[.625rem]">
      <div className="mt-44 mx-auto px-2 ">
        <h1 className="flex justify-center mt-5">
          <Link href="/" className="no-underline flex items-center gap-1">
            <Logo fillLogo="#444F77" fillText="#444F77" direction="col" />
          </Link>
        </h1>
        <div className="flex flex-col lg:pl-20">
          <p className="font-semibold md:text-[2.125rem] xs:text-[1.75rem] text-[1.125rem] pt-5">
            Contact Us
          </p>
          <p className="py-4 max-w-[63.5rem]">
            We are interested in collaborating with industry, academia, and the
            healthcare industry. Are you curious about Peckiiless? We’d love to
            hear from you.
          </p>
          <div className="flex flex-col gap-2 xs:gap-4  mt-4 ">
            <div className="flex gap-2 xs:gap-4 items-center">
              <svg
                className="w-[30px] xs:w-[40px] md:w-[50px]"
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
            </div>
            <div className="flex gap-2 xs:gap-4 items-center">
              <svg
                className="w-[30px] xs:w-[40px] md:w-[50px]"
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
            </div>
            <div className="flex gap-2 xs:gap-4 items-center">
              <svg
                className="w-[30px] xs:w-[40px] md:w-[50px]"
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
            </div>
            <div className="flex gap-2 xs:gap-4 items-center">
              <svg
                className="w-[30px] xs:w-[40px] md:w-[50px]"
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
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col items-center mx-auto pt-8">
          <p className=" font-semibold text-[3.125rem] text-center leading-[3rem]">
            keep connected
          </p>

          <div className="flex gap-10 py-4">
            <svg
            className="w-[30px] xs:w-[40px] md:w-[50px]"
              xmlns="http://www.w3.org/2000/svg"
              width="inherit"
              height="inherit"
              viewBox="0 0 60 60"
              fill="none"
            >
              <circle cx="30" cy="30" r="30" fill="#18406C" />
              <path
                d="M34.4375 17.6875H41V10H34.4375C29.3713 10 25.25 14.0231 25.25 18.9688V22.8125H20V30.5H25.25V51H33.125V30.5H39.6875L41 22.8125H33.125V18.9688C33.125 18.2743 33.7261 17.6875 34.4375 17.6875Z"
                fill="white"
              />
            </svg>
            <svg
            className="w-[30px] xs:w-[40px] md:w-[50px]"
              width="inherit"
              height="inherit"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="30" fill="#18406C" />
              <path
                d="M26.375 21.375H33.4654V25.0086H33.5679C34.5545 23.2379 36.9684 21.375 40.5687 21.375C48.0537 21.375 49.4375 26.0336 49.4375 32.0939V44.4375H42.0447V33.4956C42.0447 30.887 41.9909 27.5276 38.2009 27.5276C34.3521 27.5276 33.7627 30.3694 33.7627 33.306V44.4375H26.375V21.375Z"
                fill="white"
              />
              <path
                d="M13.5625 21.375H21.25V44.4375H13.5625V21.375Z"
                fill="white"
              />
              <path
                d="M21.25 14.9688C21.25 17.0905 19.528 18.8125 17.4062 18.8125C15.2845 18.8125 13.5625 17.0905 13.5625 14.9688C13.5625 12.847 15.2845 11.125 17.4062 11.125C19.528 11.125 21.25 12.847 21.25 14.9688Z"
                fill="white"
              />
            </svg>

            <svg
            className="w-[30px] xs:w-[40px] md:w-[50px]"
              width="inherit"
              height="inherit"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="30" fill="#18406C" />
              <g clip-path="url(#clip0_1457_348)">
                <path
                  d="M52.0005 19.0655C50.4937 19.7395 48.8691 20.1879 47.1727 20.3878C48.9101 19.3474 50.24 17.6971 50.873 15.7343C49.2484 16.6952 47.4444 17.3999 45.5327 17.7766C43.9952 16.1417 41.8094 15.127 39.3904 15.127C34.7446 15.127 30.9829 18.8913 30.9829 23.5345C30.9829 24.1905 31.0546 24.8311 31.1981 25.4487C24.2076 25.0951 18.0089 21.7485 13.8602 16.6568C13.1402 17.897 12.7225 19.3474 12.7225 20.8849C12.7225 23.801 14.2036 26.3789 16.4612 27.8831C15.0825 27.8421 13.7859 27.4577 12.6482 26.835C12.6482 26.8683 12.6482 26.9068 12.6482 26.9401C12.6482 31.017 15.5464 34.42 19.3978 35.1888C18.6931 35.381 17.9474 35.486 17.1787 35.486C16.6354 35.486 16.1127 35.4296 15.5925 35.3348C16.6662 38.6738 19.7719 41.1081 23.4491 41.1799C20.5663 43.4375 16.9455 44.7828 12.9992 44.7828C12.3176 44.7828 11.6539 44.7418 10.9902 44.6623C14.7212 47.0557 19.1415 48.442 23.8899 48.442C39.3597 48.442 47.8262 35.6218 47.8262 24.5057C47.8262 24.1367 47.8185 23.778 47.8031 23.4166C49.4457 22.2405 50.8704 20.7568 51.9979 19.0681L52.0005 19.0655Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1457_348">
                  <rect
                    width="41"
                    height="41"
                    fill="white"
                    transform="translate(11 10)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div> */}
      </div>
      <p className="text-center py-10">
        @2023 www.peckiiless.com all copyrights reserved.
      </p>
      <div className="bg-footer h-[15rem] bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default Footer;
