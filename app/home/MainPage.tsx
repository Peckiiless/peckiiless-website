import Image from "next/image";
import etty from "../../public/main-screen.png";
import { Text1, Text1875rem } from "../components/Text";
import FadeIn from "../components/FadeIn";

export const MainPage = () => {
  return (
    <div className=" px-4">
      <div className="relative min-h-screen max-w-[94rem] overflow-hidden flex justify-center mx-auto">
        <div>
          <Image
            src={etty}
            width={900}
            height={1600}
            alt="logo"
            priority={true}
            quality={100}
            className="lg:px-[10rem] xl:px-[10rem] 2xl:px-[2%]"
          />
        </div>
        <div className="text-nav hidden lg:block">
          <FadeIn className="absolute top-[20%] left-[56%]">
            <Text1875rem>
              <div>From a Silent Breath to</div>
              <div className="font-semibold">Peace of Mind</div>
            </Text1875rem>
          </FadeIn>
          <FadeIn className="absolute top-[32rem] left-[6%]">
            <Text1875rem>
              <div>From Peace of Mind to</div>
              <div className="font-semibold text-right">Vibrant Health</div>
            </Text1875rem>
          </FadeIn>
          <FadeIn className="absolute bottom-[38%] lg:left-[78%] xl:left-[73%] 2xl:left-[78%]">
            <Text1875rem>
              <div>From Vibrant Health to</div>
              <div className="font-semibold">Industrial Harmony</div>
            </Text1875rem>
          </FadeIn>
          <FadeIn className="absolute bottom-[25%] left-[5%] ">
            <Text1875rem>
              <div>From Each to</div>
              <div className="font-semibold">Global Impact</div>
            </Text1875rem>
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
