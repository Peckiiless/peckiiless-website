import Image from "next/image";
import etty from "../../public/main-screen.png";
import { Text2rem } from "../components/Text";
import FadeIn from "../components/FadeIn";

export const MainPage = () => {
  return (
    <div className=" px-4">
      <div className="relative min-h-screen max-w-[90rem] overflow-hidden flex justify-center mx-auto">
        <div>
          <Image
            src={etty}
            width={900}
            height={1600}
            alt="logo"
            priority={true}
            quality={100}
            className="px-6"
          />
        </div>
        <div className="text-nav hidden md:block">
          <FadeIn className="absolute top-[20%] left-[56%]">
            <Text2rem>
              <div>From a Silent Breath to</div>
              <div className="font-semibold">Peace of Mind</div>
            </Text2rem>
          </FadeIn>
          <FadeIn className="absolute top-[32%] left-[0%]">
            <Text2rem>
              <div>From Peace of Mind to</div>
              <div className="font-semibold text-right">Vibrant Health</div>
            </Text2rem>
          </FadeIn>
          <FadeIn className="absolute bottom-[38%] right-[0%]">
            <Text2rem>
              <div>From Vibrant Health to</div>
              <div className="font-semibold">Industrial Harmony</div>
            </Text2rem>
          </FadeIn>
          <FadeIn className="absolute bottom-[25%] left-[5%] ">
            <Text2rem>
              <div>From Each to</div>
              <div className="font-semibold">Global Impact</div>
            </Text2rem>
          </FadeIn>
        </div>
      </div>
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
