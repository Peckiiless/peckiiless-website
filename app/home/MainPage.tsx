import Image from "next/image";
import etty from "../../public/main-screen.png";
import TypeWriter from "../components/TypeWriter";

export const MainPage = () => {
  return (
    <div>
      <div className="relative min-h-screen max-w-[70rem] overflow-hidden flex justify-center mx-auto">
        <div>
          <Image
            src={etty}
            width={900}
            height={1600}
            alt="logo"
            priority={true}
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>
      <TypeWriter
        hats={hats}
        prefix=""
        appendClass="absolute top-[35%] right-0 w-[35rem] p-2"
      />
    </div>
  );
};

const hats = [
  {
    prep: "",
    suffix: "battery performance",
  },
  {
    prep: "",
    suffix: "science instruments",
  },
  {
    prep: "",
    suffix: "hydrogen infrastructure",
  },
];
