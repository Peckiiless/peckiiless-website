import Image from "next/image";

const BenefitsMobile = () => {
  return (
    <div>
      <div className="grid grid-cols-12 mt-8">
        <Image
          src="/images/green-s.png"
          width={110}
          height={90}
          alt="logo"
          priority={true}
          className="col-span-4 place-self-center pr-1"
        />
        <div className="col-span-8 px-2 self-center text-[1rem]">
          <div>
            <p className="font-medium  text-[1.375rem] text-primary-800 pb-2">
              Good Health and Well-Being{" "}
            </p>
            <p className="">
              Our nanosensor breathalyzer fosters good health globally. By
              enabling non-invasive monitoring of glucose and cholesterol levels
              through breath analysis, it empowers individuals to take control
              of their well-being, making healthcare accessible to all.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-10">
        <div className="text-right col-span-8 px-2 self-center text-[1rem]">
          <p className="font-medium  text-[1.375rem] text-primary-800 pb-2">
            Industry, Innovation, and Infrastructure
          </p>
          <p className="">
            At the intersection of innovation and industry, our nanosensor
            technology revolutionizes health monitoring. It epitomizes progress
            by replacing traditional invasive methods with cutting-edge,
            non-invasive solutions, setting a new each. standard for healthcare
            infrastructure worldwide.
          </p>
        </div>
        <Image
          src="/images/orange.png"
          width={110}
          height={90}
          alt="logo"
          priority={true}
          className="col-span-4 place-self-center pr-1"
        />
      </div>
      <div className="grid grid-cols-12 mt-8">
        <Image
          src="/images/purple.png"
          width={110}
          height={90}
          alt="logo"
          priority={true}
          className="col-span-4 place-self-center pr-1"
        />
        <div className="col-span-8 px-2 self-center text-[1rem]">
          <div>
            <p className="font-medium text-[1.375rem] text-primary-800 pb-2">
              Reduced Inequalities
            </p>
            <p className="">
              Our nanosensor breathalyzer embodies a commitment to reducing
              inequalities in healthcare. By providing a non- invasive,
              accessible method for health monitoring, we strive to bridge gaps,
              ensuring that cutting-edge health technology is available to
              everyone, regardless of their background or location.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-10">
        <div className="text-right col-span-8 px-2 self-center text-[1rem]">
          <p className="font-medium  text-[1.375rem] text-primary-800 pb-2">
            Responsible Consumption and Production
          </p>
          <p className="">
            Our nanosensor breathalyzer is a commitment to responsible
            consumption and production. By eliminating the need for billions of
            disposable needles and test strips, we contribute to a sustainable
            future, reducing waste and promoting environmentally conscious
            practices.
          </p>
        </div>
        <Image
          src="/images/yellow.png"
          width={110}
          height={90}
          alt="logo"
          priority={true}
          className="col-span-4 place-self-center pr-1"
        />
      </div>
      <div className="grid grid-cols-12 mt-8">
        <Image
          src="/images/blue.png"
          width={110}
          height={90}
          alt="logo"
          priority={true}
          className="col-span-4 place-self-center pr-1"
        />
        <div className="col-span-8 px-2 self-center text-[1rem]">
          <div>
            <p className="font-medium  text-[1.375rem] text-primary-800 pb-2">
              Partnerships for the Goals
            </p>
            <p className="">
              In collaboration with global partners, we strive for impact. Our
              nanosensor technology aligns with SDG 17, fostering partnerships
              that transcend borders. Together, we work towards a healthier,
              more sustainable world for generations to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsMobile;
