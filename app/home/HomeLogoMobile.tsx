import Image from "next/image";
import Link from "next/link";
import HomeNavbar from "../components/HomeNavbar";

const HomeLogoMobile = () => {
  return (
    <div>
      <div className="flex justify-end m-2 text-[2rem] bottom-0 right-0">
        <HomeNavbar />
      </div>
      <div className="flex justify-center mt-20 relative text-[1rem] xs:text-[1.2rem] sm:text-[1.6rem] text-center font-medium ">
        <Image width={800} height={800} src="/home-logo.svg" alt="home-logo" />
        <div className="absolute top-[8%] left-[14%] ">
          <p className="text-white">Health care</p>{" "}
          <Link
            href="/healthcare"
            className="rounded bg-button text-white text-center p-1 text-[.8rem] sm:text-[1rem]"
          >
            Read more
          </Link>
        </div>
        <div className="absolute top-[46%] right-[12%]">
          <p className="text-white">Industry</p>{" "}
          <Link
            href="/sensor"
            className="rounded bg-button text-white text-center p-1 text-[.8rem] sm:text-[1rem]"
          >
            Read more
          </Link>
        </div>
        <div className="absolute bottom-[10%] right-[11%] text-black">
          <p className="">Sustainabilty</p>{" "}
          <Link
            href="/sustainability"
            className="rounded bg-button text-center p-1 text-[.8rem] sm:text-[1rem]"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLogoMobile;
