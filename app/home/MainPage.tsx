import Image from "next/image";
import etty from "../../public/main-screen.png";
import { Text2rem } from "../components/Text";
import FadeIn from "../components/FadeIn";

export const MainPage = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="grid grid-cols-12">
        <div className="text-nav col-span-2 relative">
          <FadeIn className="absolute top-[30%] -right-[100%] lg:-right-[90%] xl:-right-[90%]">
            <Text2rem>
              <div>From Peace of Mind to</div>
              <div className="font-semibold text-right">Vibrant Health</div>
            </Text2rem>
          </FadeIn>

          <FadeIn className="absolute bottom-[13%] -right-[65%] lg:-right-[55%] xl:-right-[45%]">
            <Text2rem>
              <div>From Each to</div>
              <div className="font-semibold">Global Impact</div>
            </Text2rem>
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
          <FadeIn className="absolute top-[10%] -left-[140%] xl:-left-[120%]">
            <Text2rem>
              <div>From a Silent Breath to</div>
              <div className="font-semibold">Peace of Mind</div>
            </Text2rem>
          </FadeIn>

          <FadeIn className="absolute bottom-[30%] -left-[60%] xl:-left-[50%]">
            <Text2rem>
              <div>From Vibrant Health to</div>
              <div className="font-semibold">Industrial Harmony</div>
            </Text2rem>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
