import Image from "next/image";

export const MainPage = () => {
  return (
    <div className="relative h-[94rem] overflow-hidden flex justify-center">
      <div className="absolute -top-32">
        <Image
          src="/etty-fidele.png"
          width={1200}
          height={1200}
          alt="logo"
          priority={true}
        />
      </div>
    </div>
  );
};
