import Image from "next/image";

const HomeLogoMobile = () => { 
  return (
    <div  className="flex justify-center">
      <Image width={300} height={300} src="/home-logo.svg" alt="" />
    </div>
  );
};

export default HomeLogoMobile;
