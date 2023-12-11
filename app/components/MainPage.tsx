import Image from "next/image";

export const MainPage = () => {
  return (
    <div className="relative max-w-[90rem] overflow-hidden flex justify-center mx-auto pr-32">
      <div className="scale-105">
        <Image
          src="/etty-fidele.svg"
          width={1500}
          height={1500}
          alt="logo"
          priority={true}
          quality={100}
        />
      </div>
    </div>
  );
};
