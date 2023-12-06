import Image from "next/image";

const HomeLogoMobile = () => {
  return (
    <div className="flex justify-center mt-20">
      <Image width={800} height={800} src="/home-logo.svg" alt="" />
    </div>
  );
};

export default HomeLogoMobile;
