import Title from "../components/Title";
import Image from "next/image";

const Testing = () => {
  return (
    <section className="p-10">
      <Title title="What sets Peckiiless apart from the options of today?" />
      <div className="grid py-8 px-36 gap-1 grid-cols-2">
        <Image
          src="/testing1.png"
          width={400}
          height={400}
          alt="logo"
          priority={true}
        />

        <p className="p-40">
          Testing and monitoring of these illnesses have gotten stuck in
          development for years upon years, it’s time to globalize an easier
          option for monitoring your glucose testing in an easy, effecient way.
        </p>
      </div>

      <div className="grid py-8 px-36 gap-1 grid-cols-2">
        <p className="p-40">
          Alveoli are first located in the respiratory bronchioles that mark the
          beginning of the respiratory zone. Alveoli make up the functional
          tissue of the mammalian lungs and takes up 90 percent of the total
          lung.
        </p>

        <Image
          src="/testing2.png"
          width={400}
          height={400}
          alt="logo"
          priority={true}
        />
      </div>
      <div className="grid py-8 px-36 gap-1 grid-cols-2">
        <Image
          src="/testing3.png"
          width={400}
          height={400}
          alt="logo"
          priority={true}
        />

        <p className="p-40">
          Gas exchange is the physical process by which gases move passively by
          diffusion across a surface. For example, this surface might be the
          air/water interface of a water body, the surface of a gas bubble in a
          liquid.
        </p>
      </div>

      <div className="grid py-8 px-36 gap-1 grid-cols-2">
        <p className="p-40">
          Glycogenesis is the process of glycogen synthesis. There are several
          naturally-occurring varieties of glucose, all of which may be
          expressed by the same empirical constitution C6H12O6,
        </p>

        <Image
          src="/testing4.png"
          width={400}
          height={400}
          alt="logo"
          priority={true}
        />
      </div>
    </section>
  );
};

export default Testing;
