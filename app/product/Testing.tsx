import Title from "../components/Title";
import Image from "next/image";
import CustomButton from "../components/CustomButton";

const Testing = () => {
  return (
    <div className="">
      <Title title="How Peckiiless is transforming glucose testing with oxygen." />
      <div className="grid sm:grid-cols-2 items-center relative ">
        <Image
          src="/testing1.png"
          width={300}
          height={300}
          alt="logo"
          priority={true}
          className="sm:w-[400px] justify-self-center"
        />
        <p className="p-10 w-5/6 text-[2.125rem]">
          Testing and monitoring of these illnesses have gotten stuck in
          development for years upon years, it’s time to globalize an easier
          option for monitoring your glucose testing in an easy, effecient way.
        </p>
        <div className="absolute rotate-[-90deg] top-5 right-12 origin-right">
          <CustomButton
            title="Inhaled oxygen"
            containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-t-[1.875rem] py-7 px-12 leading-10"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 items-center relative ">
        <div className="absolute rotate-[90deg] top-0 left-12 origin-left">
          <CustomButton
            title="Pulmonary alveolus"
            containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-t-[1.875rem] py-7 px-12 leading-10"
          />
        </div>

        <Image
          src="/testing2.png"
          width={300}
          height={300}
          alt="logo"
          priority={true}
          className="sm:w-[400px] justify-self-center "
        />

        <p className="pl-20 w-5/6 justify-self-center sm:row-start-1 text-[2.125rem]">
          Alveoli are first located in the respiratory bronchioles that mark the
          beginning of the respiratory zone. Alveoli make up the functional
          tissue of the mammalian lungs and takes up 90 percent of the total
          lung.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 items-center relative ">
        <Image
          src="/testing3.png"
          width={300}
          height={300}
          alt="logo"
          priority={true}
          className="sm:w-[400px] py-16 justify-self-center"
        />
        <p className="p-10 w-5/6 text-[2.125rem]">
          Gas exchange is the physical process by which gases move passively by
          diffusion across a surface. For example, this surface might be the
          air/water interface of a water body, the surface of a gas bubble in a
          liquid.
        </p>
        <div className="absolute rotate-[-90deg] top-5 right-12 origin-right">
          <CustomButton
            title="Gas exchange"
            containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-t-[1.875rem] py-7 px-12 leading-10"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 items-center relative ">
        <div className="absolute rotate-[90deg] top-0 left-12 origin-left">
          <CustomButton
            title="Glucose synthesis"
            containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-t-[1.875rem] py-7 px-12 leading-10"
          />
        </div>

        <Image
          src="/testing4.png"
          width={300}
          height={300}
          alt="logo"
          priority={true}
          className="sm:w-[400px] justify-self-center  py-16"
        />

        <p className="pl-20 w-5/6 justify-self-center sm:row-start-1 text-[2.125rem]">
          Glycogenesis is the process of glycogen synthesis. There are several
          naturally-occurring varieties of glucose, all of which may be
          expressed by the same empirical constitution C6H12O6,
        </p>
      </div>
    </div>
  );
};

export default Testing;
