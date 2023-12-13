import Image from "next/image";

export const MainPage = () => {
  return (
    <div className="relative max-w-[90rem] overflow-hidden flex justify-center mx-auto">
      <div className="scale-[1.02]">
        <Image
          src="/etty-fidele.svg"
          width={1100}
          height={1100}
          alt="logo"
          priority={true}
          quality={100}
        />
      </div>
    </div>
  );
};
