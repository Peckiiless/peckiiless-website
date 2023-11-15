import Image from "next/image";

export const MainPage = () => {
  return (
    <div className="trigger flex justify-center overflow-hidden relative">
      <div className="zoom">
        <Image
          src="/etty-fidele.svg"
          width={1000}
          height={1000}
          alt="logo"
          priority={true}
          className="zoom"
        />
      </div>
    </div>
  );
};
