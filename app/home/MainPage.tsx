import etty from "../../public/main-screen.png";
import { Text1875rem } from "../components/Text";
import FadeIn from "../components/FadeIn";
import BlurImage from "../components/BlurImage"

export const MainPage = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="grid grid-cols-12">
        <div className="hidden sm:block text-nav col-span-2 relative">
          <FadeIn className="absolute top-[30%] -right-[100%] sm:-right-[80%] xl:-right-[70%]">
            <Text1875rem>
              <div>From Peace of Mind to</div>
              <div className="font-semibold text-right">Vibrant Health</div>
            </Text1875rem>
          </FadeIn>

          <FadeIn className="absolute bottom-[13%] -right-[70%] sm:-right-[55%] lg:-right-[35%]">
            <Text1875rem>
              <div>From Each to</div>
              <div className="font-semibold">Global Impact</div>
            </Text1875rem>
          </FadeIn>
        </div>
        <div className="col-span-12 sm:col-span-8 relative sm:px-20">
          <BlurImage
            src={etty}
            alt="etty fidele spash"
            width={0}
            height={0}
            sizes="100vw"
          />          
        </div>
        <div className="hidden sm:block text-nav col-span-2 relative">
          <FadeIn className="absolute top-[10%] -left-[140%] xl:-left-[120%]">
            <Text1875rem>
              <div>From a Silent Breath to</div>
              <div className="font-semibold">Peace of Mind</div>
            </Text1875rem>
          </FadeIn>

          <FadeIn className="absolute bottom-[30%] -left-[70%] sm:-left-[60%] lg:-left-[40%]">
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
