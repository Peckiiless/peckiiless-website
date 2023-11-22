import Image from "next/image";

export const MainPage = () => {
  return (
    <div className="relative h-[94rem] max-w-[90rem] overflow-hidden flex justify-center mx-auto pr-32">
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
