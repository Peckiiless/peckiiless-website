import Image from "next/image";
import etty from "../../public/main-screen.png";
import { Text1, Text1875rem } from "../components/Text";
import FadeIn from "../components/FadeIn";

export const MainPage = () => {
  return (
    <div className="px-4 max-w-[90rem] mx-auto">
      <div className="grid grid-cols-12">
        <div className="text-nav col-span-2 relative">
          <FadeIn className="absolute top-[30%] -right-[60%] text-nowrap">
            <Text1875rem>
              <div>From Peace of Mind to</div>
              <div className="font-semibold text-right">Vibrant Health</div>
            </Text1875rem>
          </FadeIn>

          <FadeIn className="absolute bottom-[15%] -right-[25%]">
            <Text1875rem>
              <div>From Each to</div>
              <div className="font-semibold">Global Impact</div>
            </Text1875rem>
          </FadeIn>
        </div>
        <div className="col-span-8 relative">
          <Image
            src={etty}
            alt="logo"
            priority={true}
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            className="px-20"
          />
        </div>
        <div className="text-nav col-span-2 relative">
          <FadeIn className="absolute top-[10%] -left-[90%]">
            <Text1875rem>
              <div>From a Silent Breath to</div>
              <div className="font-semibold">Peace of Mind</div>
            </Text1875rem>
          </FadeIn>

          <FadeIn className="absolute bottom-[32%] -left-[30%]">
            <Text1875rem>
              <div>From Vibrant Health to</div>
              <div className="font-semibold">Industrial Harmony</div>
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
