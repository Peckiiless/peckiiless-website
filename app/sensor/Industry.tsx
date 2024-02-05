import Image from "next/image";
import { Text3 } from "../components/Text";

export default function Industry() {
  return (
    <section>
      <div className="my-[8%] relative block h-[60vw] lg:h-[80vw] xl:h-screen w-full">
        <Image
          src="/IndustrySector.png"
          alt="Image Alt Text"
          fill
          className="contain"
          priority={true}
        />
      </div>
      <div className="px-[5%] max-w-[95rem] mx-auto">
        <Text3>
          For the industrial sector, our gas sensor technology finds
          applications in both traditional chemical processing and emerging
          industries. Notable examples include optimizing processes in battery
          manufacturing and recycling by detecting harmful HF gas emissions, as
          well as ensuring the quality of biogas for integration into natural
          gas networks. Beyond industry, we also focus on air quality
          monitoring, particularly indoor environments in residential and
          commercial buildings. These sensors are designed to be compact,
          cost-effective, and capable of detecting various gases at very low
          concentrations. Despite the diverse range of gases they monitor, they
          thrive in relatively benign environmental conditions, making them
          ideal for widespread deployment.
        </Text3>
      </div>
    </section>
  );
}
