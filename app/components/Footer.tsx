"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import SubmitForm from "../about-us/components/SubmitForm";
import { Text15rem } from "./Text";

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
          <div className="flex gap-6  mt-6 xs:mt-14">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <rect width="25" height="25" rx="6" fill="#B2335E" />
                <path
                  d="M18.333 6H7.667C6.2 6 5 6.94286 5 8.0955V16.4759C5 17.6294 6.2 18.5714 7.667 18.5714H18.333C19.8 18.5714 21 17.6294 21 16.4759V8.0955C21 6.94286 19.8 6 18.333 6ZM18.333 7.57143C18.458 7.57143 18.576 7.59971 18.677 7.64921L12.999 11.3374L7.322 7.64921C7.423 7.59971 7.541 7.57143 7.666 7.57143H18.332H18.333ZM7.667 17C7.637 17 7.607 16.9984 7.578 16.9953L11.103 13.1531L10.646 12.7941L7 15.6588V8.156L13 13.8571L19 8.156V15.6588L15.354 12.7941L14.897 13.1531L18.422 16.9953C18.393 16.9984 18.363 17 18.334 17H7.668H7.667Z"
                  fill="#FEFEFE"
                />
              </svg>

              <Text15rem>info@peckiiless.com</Text15rem>
            </div>

            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <rect width="25" height="25" rx="6" fill="#B2335E" />
                <path
                  d="M11.4121 10.1641H13.8568V11.4169H13.8921C14.2322 10.8064 15.0645 10.1641 16.3058 10.1641C18.8865 10.1641 19.3636 11.7703 19.3636 13.8597V18.1156H16.8147V14.343C16.8147 13.4436 16.7962 12.2853 15.4895 12.2853C14.1624 12.2853 13.9592 13.2651 13.9592 14.2776V18.1156H11.4121V10.1641Z"
                  fill="white"
                />
                <path
                  d="M6.99414 10.1641H9.64464V18.1156H6.99414V10.1641Z"
                  fill="white"
                />
                <path
                  d="M9.64464 7.9522C9.64464 8.68374 9.05093 9.27745 8.31939 9.27745C7.58785 9.27745 6.99414 8.68374 6.99414 7.9522C6.99414 7.22066 7.58785 6.62695 8.31939 6.62695C9.05093 6.62695 9.64464 7.22066 9.64464 7.9522Z"
                  fill="white"
                />
              </svg>

              <Text15rem>Peckiiless</Text15rem>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <rect width="25" height="25" rx="6" fill="#B2335E" />
                <path
                  d="M12.4984 4.60156C9.68222 4.60156 7.39844 6.7975 7.39844 9.50541C7.39844 14.4093 12.4984 20.2939 12.4984 20.2939C12.4984 20.2939 17.5984 14.4093 17.5984 9.50541C17.5984 6.7975 15.3147 4.60156 12.4984 4.60156ZM12.4984 12.4477C10.8083 12.4477 9.43844 11.1305 9.43844 9.50541C9.43844 7.88027 10.8083 6.5631 12.4984 6.5631C14.1886 6.5631 15.5584 7.88027 15.5584 9.50541C15.5584 11.1305 14.1886 12.4477 12.4984 12.4477Z"
                  fill="white"
                />
              </svg>
              <Text15rem>Chalmersplatsen 4, 412 96 Göteborg</Text15rem>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-5 xs:py-10">
        <Text15rem>
        @2023 www.peckiiless.com all copyrights reserved.
        </Text15rem>
      </div>
      <div className="bg-footer h-[5rem] sm:h-[15rem] bg-bottom xs:bg-top bg-contain xs:bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default Footer;
