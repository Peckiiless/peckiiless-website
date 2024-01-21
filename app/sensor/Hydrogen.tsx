import Image from "next/image";
import { Text3 } from "../components/Text";


export default function Hydrogen() {
  return (
    <section>
      <div className="my-[8%] relative block h-[100vw] lg:h-screen w-full">
        <Image
          src="/Hydrogen.svg"
          alt="Image Alt Text"
          fill 
          className="md:object-cover"
          priority={true}
        />
      </div>
      <div className="px-[5%] max-w-[95rem] mx-auto">
        <Text3>
          Breath sampling emerges as a non-invasive, pain-free, and universally
          applicable method. Unlike other sampling techniques, it requires no
          specialized facilities or extensive training, seamlessly fitting into
          diverse care contexts. This user-friendly approach allows for ethical
          application to large populations, particularly benefiting high-risk
          groups such as pregnant women, young children, or individuals with
          chronic lung conditions. In situations requiring repeated samples,
          breath collection becomes a valuable and accessible tool. It offers a
          clear and simple pathway to understanding, ensuring that its benefits
          are accessible to all.
        </Text3>
      </div>
    </section>
  );
}
