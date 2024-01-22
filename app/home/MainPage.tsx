import Image from "next/image";
import etty from "../../public/main-screen.png"



export const MainPage = () => {
  return (
    <div className="relative min-h-screen max-w-[70rem] overflow-hidden flex justify-center mx-auto">
      <div>
        <Image
          src={etty}
          width={1400}
          height={2413}
          alt="logo"
          priority={true}
          quality={100}
          placeholder="blur"
        />
      </div>
    </div>
  );
};
