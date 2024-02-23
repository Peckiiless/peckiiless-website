import Image from "next/image";
import Adam from "../../public/adam.png"
import BlurImage from "../components/BlurImage";

export default function HealthcareBanner() {
  return (
    <div className="h-[45vw] xs:h-[45vw] md:h-[45vw] xl:h-[50vw] 2xl:h-[52vw]">
      <div className="w-full absolute top-0 -z-10">
      <BlurImage src={Adam}
        alt="Blood in hand"/>
      </div>
    
    </div>
  );
}
