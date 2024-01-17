import Image from "next/image";

const BenefitsSensorMobile = () => {
  return (
    <div id="first-section">
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
              Our gas nanosensor technology ensures good health by enabling
              precise detection of toxic gases in industrial settings. By
              promoting a safer work environment, we contribute to the
              well-being of workers and communities.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-10">
        <div className="text-right col-span-8 px-2 self-center text-[1rem]">
          <p className="font-medium  text-[1.375rem] text-primary-800 pb-2">
            Affordable and Clean Energy
          </p>
          <p className="">
            In the pursuit of clean and sustainable energy, our gas nanosensor
            plays a crucial role in monitoring and mitigating emissions. It
            supports the transition towards affordable and clean energy
            solutions, fostering a healthier planet.
          </p>
        </div>
        <Image
          src="/images/sensor-2.png"
          width={110}
          height={90}
          alt="logo"
          priority={true}
          className="col-span-4 place-self-center pr-1"
        />
      </div>
      <div className="grid grid-cols-12 mt-8">
        <Image
          src="/images/orange.png"
          width={110}
          height={90}
          alt="logo"
          priority={true}
          className="col-span-4 place-self-center pr-1"
        />
        <div className="col-span-8 px-2 self-center text-[1rem]">
          <div>
            <p className="font-medium text-[1.375rem] text-primary-800 pb-2">
              Industry, Innovation, and Infrastructure
            </p>
            <p className="">
              At the heart of industry innovation, our gas nanosensor technology
              enhances industrial processes. With high selectivity and
              sensitivity, it redefines gas sensing, setting new standards for
              infrastructure development and operational excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-10">
        <div className="text-right col-span-8 px-2 self-center text-[1rem]">
          <p className="font-medium  text-[1.375rem] text-primary-800 pb-2">
            Sustainable Cities and Communities
          </p>
          <p className="">
            Our gas nanosensor contributes to building sustainable cities by
            monitoring air quality and ensuring a safe living environment. It
            empowers communities with the knowledge to address and mitigate the
            impact of toxic gases.
          </p>
        </div>
        <Image
          src="/images/purple.png"
          width={110}
          height={90}
          alt="logo"
          priority={true}
          className="col-span-4 place-self-center pr-1"
        />
      </div>
      <div className="grid grid-cols-12 mt-8">
        <Image
          src="/images/yellow.png"
          width={110}
          height={90}
          alt="logo"
          priority={true}
          className="col-span-4 place-self-center pr-1"
        />
        <div className="col-span-8 px-2 self-center text-[1rem]">
          <div>
            <p className="font-medium  text-[1.375rem] text-primary-800 pb-2">
              Responsible Consumption and Production
            </p>
            <p className="">
              Driving responsible consumption and production, our gas nanosensor
              minimizes environmental impact. It aids industries in optimizing
              processes, reducing waste, and fostering sustainable production
              practices.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-10">
        <div className="text-right col-span-8 px-2 self-center text-[1rem]">
          <p className="font-medium  text-[1.375rem] text-primary-800 pb-2">
            Climate Action
          </p>
          <p className="">
            In the fight against climate change, our gas nanosensor plays a
            pivotal role in monitoring and controlling emissions. By
            facilitating informed climate action, it supports global efforts to
            reduce environmental impact.
          </p>
        </div>
        <Image
          src="/images/sensor-6.png"
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
              Our commitment extends beyond innovation. Through partnerships
              with industries and environmental advocates, we work
              collaboratively towards achieving multiple SDGs. Together, we aim
              to create a sustainable and resilient future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSensorMobile;
