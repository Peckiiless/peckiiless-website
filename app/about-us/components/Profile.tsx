import FadeIn from "@/app/components/FadeIn";
import { Text2 } from "../../components/Text";

export default function Profile() {
  return (
    <FadeIn className="px-[2%]">
      <div className="rounded-[1.25rem] bg-grey100 my-20 px-1 py-14 xs:px-10 max-w-[90rem] mx-auto text-center">
        <Text2>
         Founded in 2021 by Marzyeh Advand, Peckiiless embodies her background in nanoelectronics and nanotechnology. During her academic journey, Marzyeh developed the core technology that propels Peckiiless, driven by a passionate commitment to turning visionary concepts into practical solutions. This dedication extends to improving lives and tackling challenges that currently lack definitive answers. Peckiiless has garnered support from valuable collaborators in various fields who share the belief in this transformative idea and contribute to empowering the company's overarching goals.
        </Text2>
      </div>
    </FadeIn>
  );
}
