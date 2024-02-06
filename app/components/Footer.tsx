"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import SubmitForm from "../about-us/components/SubmitForm";
import { Text1125rem, Text125rem, Text15rem } from "./Text";
import Image from "next/image";

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
        <div
          className={`${
            currentRoute === "/about-us" && "hidden"
          } flex justify-center px-4`}
        >
          <div className="flex gap-12  mt-6 xs:mt-14">
            <div className="flex gap-1 xs:gap-4 items-center">
              <Image
                src="/images/email.svg"
                width={40}
                height={40}
                alt="logo"
                priority={true}
                quality={100}
                className="w-[30px] sm:w-[40px]"
              />

              <Text15rem>info@peckiiless.com</Text15rem>
            </div>

            <div className="flex gap-1 xs:gap-4 items-center">
               <Image
                src="/images/linkedin.svg"
                width={40}
                height={40}
                alt="logo"
                priority={true}
                quality={100}
                className="w-[30px] sm:w-[40px]"
              />

              <Text15rem>Peckiiless</Text15rem>
            </div>
            <div className="flex gap-1 xs:gap-4 items-center">
              <Image
                src="/images/location.svg"
                width={40}
                height={40}
                alt="logo"
                priority={true}
                quality={100}
                className="w-[30px] sm:w-[40px]"
              />
              <Text15rem><div className="max-w-[18rem] leading-none">Chalmersplatsen 4, 412 96 Göteborg</div></Text15rem>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-5 xs:py-10">
        <p className="lg:text-[.75rem] md:text-[.625rem] text-[.5rem]">
          @2023 www.peckiiless.com all copyrights reserved.
        </p>
      </div>
      <div className="bg-footer h-[5rem] sm:h-[15rem] bg-bottom xs:bg-top bg-contain xs:bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default Footer;
