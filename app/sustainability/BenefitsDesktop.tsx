import Image from "next/image";

const BenefitsDesktop = () => {
  return (
    <div>
      <div className="grid grid-cols-12 mt-36">
        <div className="col-span-4 justify-self-center pr-1 flex flex-col justify-between gap-20">
          <Image
            src="/images/green-s.png"
            width={370}
            height={301}
            alt="logo"
            priority={true}
            className="justify-self-center"
          />
          <Image
            src="/images/orange.png"
            width={370}
            height={301}
            alt="logo"
            priority={true}
            className="justify-self-center"
          />
        </div>
        <div className="col-span-8  flex flex-col justify-between gap-20 md:px-[4rem] px-1 self-center xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]">
          <div>
            <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
              Good Health and Well-Being{" "}
            </p>
            <p className="pb-10">
              Our nanosensor breathalyzer fosters good health globally. By
              enabling non-invasive monitoring of glucose and cholesterol levels
              through breath analysis, it empowers individuals to take control
              of their well-being, making healthcare accessible to all.
            </p>
          </div>
          <div>
            <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
              Industry, Innovation, and Infrastructure
            </p>
            <p className="hidden xs:block">
              At the intersection of innovation and industry, our nanosensor
              technology revolutionizes health monitoring. It epitomizes
              progress by replacing traditional invasive methods with
              cutting-edge, non-invasive solutions, setting a new each. standard
              for healthcare infrastructure worldwide.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-36">
        <div className="text-right col-span-8  flex flex-col justify-between gap-20 md:px-[4rem] px-1 self-center xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]">
          <div>
            <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
              Reduced Inequalities
            </p>
            <p className="pb-10">
              Our nanosensor breathalyzer embodies a commitment to reducing
              inequalities in healthcare. By providing a non- invasive,
              accessible method for health monitoring, we strive to bridge gaps,
              ensuring that cutting-edge health technology is available to
              everyone, regardless of their background or location.
            </p>
          </div>
          <div>
            <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
              Responsible Consumption and Production
            </p>
            <p className="hidden xs:block">
              Our nanosensor breathalyzer is a commitment to responsible
              consumption and production. By eliminating the need for billions
              of disposable needles and test strips, we contribute to a
              sustainable future, reducing waste and promoting environmentally
              conscious practices.
            </p>
          </div>
        </div>
        <div className="col-span-4 justify-self-center pr-1 flex flex-col justify-between gap-20">
          <Image
            src="/images/purple.png"
            width={370}
            height={301}
            alt="logo"
            priority={true}
            className="justify-self-center"
          />
          <Image
            src="/images/yellow.png"
            width={370}
            height={301}
            alt="logo"
            priority={true}
            className="justify-self-center"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 mt-36">
        <div className="col-span-4 justify-self-center pr-1 flex flex-col justify-between gap-20">
          <Image
            src="/images/blue.png"
            width={370}
            height={301}
            alt="logo"
            priority={true}
            className="justify-self-center"
          />
        </div>
        <div className="col-span-8  flex flex-col justify-between gap-20 md:px-[4rem] px-1 self-center xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]">
          <div>
            <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
              Partnerships for the Goals
            </p>
            <p className="pb-10">
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

export default BenefitsDesktop;
