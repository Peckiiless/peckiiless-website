import Image from "next/image";
import { Text3 } from "../components/Text";

export default function Hydrogen() {
  return (
    <section>
      <div className="my-[8%] relative block h-[60vw] lg:h-[80vw] xl:h-screen w-full">
        <Image
          src="/Hydrogen.png"
          alt="Image Alt Text"
          fill
          className="contain"
          priority={true}
        />
      </div>
      <div className="px-[5%] max-w-[95rem] mx-auto text-center">
        <Text3>
          In the realm of hydrogen purity, our gas sensor technology plays a
          crucial role in ensuring compliance with stringent standards such as
          ISO 146787:2022. This standard outlines the permissible levels of
          various contaminants that may compromise the purity of hydrogen gas.
          Our sensors offer precise detection capabilities, allowing for
          real-time monitoring of these contaminants to maintain the required
          purity levels. By providing accurate and reliable measurements, our
          sensors empower industries reliant on hydrogen, such as fuel cell
          technology and hydrogen production, to uphold quality standards and
          optimize their processes for maximum efficiency and safety.
        </Text3>
      </div>
    </section>
  );
}
