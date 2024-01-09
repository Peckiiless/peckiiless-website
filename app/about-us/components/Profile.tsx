import FadeIn from "@/app/components/FadeIn";

export default function Profile() {
  return (
    <FadeIn className="px-[2%]">
      <div className=" rounded-[1.25rem] bg-grey100 text-center xs:text-[1.625rem] md:text-[1.75rem] text-[1.125rem]  leading-[1.625rem] xs:leading-[2.625rem] my-20 px-1 py-14 xs:px-10 max-w-[90rem] mx-auto">
        <p className="p-2 text-center">
          Founded in 2021 by Marzyeh Advand, Peckiiless embodies her background in nanoelectronics and nanotechnology. During her academic journey, Marzyeh developed the core technology that propels Peckiiless, driven by a passionate commitment to turning visionary concepts into practical solutions. This dedication extends to improving lives and tackling challenges that currently lack definitive answers. Peckiiless has garnered support from valuable collaborators in various fields who share the belief in this transformative idea and contribute to empowering the company&#39;s overarching goals.
        </p>
      </div>
    </FadeIn>
  );
}
