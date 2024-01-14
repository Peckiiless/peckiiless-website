import Image from "next/image";

const BenefitsDesktop = () => {
  return (
    <div id="first-section">
      <div className="grid grid-cols-12 mt-36">
        <div className="col-span-4 justify-self-center pr-1 flex flex-col justify-around gap-20">
          <Image
            src="/images/green-s.png"
            width={370}
            height={301}
            alt="logo"
            priority={true}
            className="justify-self-center"
          />
          <Image
            src="/images/sensor-2.png"
            width={370}
            height={301}
            alt="logo"
            priority={true}
            className="justify-self-center"
          />
        </div>
        <div className="col-span-8  flex flex-col justify-around gap-20 md:px-[4rem] px-1 self-center xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]">
          <div>
            <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
              Good Health and Well-Being{" "}
            </p>
            <p className="pb-10">
              Our gas nanosensor technology ensures good health by enabling
              precise detection of toxic gases in industrial settings. By
              promoting a safer work environment, we contribute to the
              well-being of workers and communities.
            </p>
          </div>
          <div>
            <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
              Affordable and Clean Energy
            </p>
            <p className="hidden xs:block">
              In the pursuit of clean and sustainable energy, our gas nanosensor plays a crucial role in monitoring and mitigating
emissions. It supports the transition towards affordable and clean energy solutions, fostering a healthier planet.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-36">
        <div className="text-right col-span-8  flex flex-col justify-around gap-20 md:px-[4rem] px-1 self-center xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]">
          <div>
            <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
              Industry, Innovation, and Infrastructure
            </p>
            <p className="pb-10">
              At the heart of industry innovation, our gas nanosensor technology enhances industrial processes. With high
selectivity and sensitivity, it redefines gas sensing, setting new standards for infrastructure development and
operational excellence.
            </p>
          </div>
          <div>
            <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
Sustainable Cities and Communities            </p>
            <p className="hidden xs:block">
              Our gas nanosensor contributes to building sustainable cities by monitoring air quality and ensuring a safe living
environment. It empowers communities with the knowledge to address and mitigate the impact of toxic gases.
            </p>
          </div>
        </div>
        <div className="col-span-4 justify-self-center pr-1 flex flex-col justify-around gap-20">
          <Image
            src="/images/orange.png"
            width={370}
            height={301}
            alt="logo"
            priority={true}
            className="justify-self-center"
          />
          <Image
            src="/images/purple.png"
            width={370}
            height={301}
            alt="logo"
            priority={true}
            className="justify-self-center"
          />
        </div>
      </div>

       <div className="grid grid-cols-12 mt-36">
        <div className="col-span-4 justify-self-center pr-1 flex flex-col justify-around gap-20">
          <Image
            src="/images/yellow.png"
            width={370}
            height={301}
            alt="logo"
            priority={true}
            className="justify-self-center"
          />
          <Image
            src="/images/sensor-6.png"
            width={370}
            height={301}
            alt="logo"
            priority={true}
            className="justify-self-center"
          />
        </div>
        <div className="col-span-8  flex flex-col justify-around gap-20 md:px-[4rem] px-1 self-center xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]">
          <div>
            <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
              Responsible Consumption and Production
            </p>
            <p className="pb-10">
              Driving responsible consumption and production, our gas nanosensor minimizes environmental impact. It aids
industries in optimizing processes, reducing waste, and fostering sustainable production practices.
            </p>
          </div>
          <div>
            <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
              Climate Action
            </p>
            <p className="hidden xs:block">
              In the fight against climate change, our gas nanosensor plays a pivotal role in monitoring and controlling emissions.
By facilitating informed climate action, it supports global efforts to reduce environmental impact.
            </p>
          </div>
        </div>
      </div>

       <div className="grid grid-cols-12 mt-36">
        <div className="text-right col-span-8  flex flex-col justify-around gap-20 md:px-[4rem] px-1 self-center xs:text-[1.25rem] md:text-[1.75rem] text-[1rem]">
          <div>
            <p className="font-medium xs:text-[2rem] md:text-[2.875rem] text-[1.375rem] text-primary-800 leading-[3.75rem] pb-2 lg:pb-10">
              Partnerships for the Goals
            </p>
            <p className="pb-10">
              Our commitment extends beyond innovation. Through partnerships with industries and environmental advocates, we
work collaboratively towards achieving multiple SDGs. Together, we aim to create a sustainable and resilient future.
            </p>
          </div>
        
        </div>
        <div className="col-span-4 justify-self-center pr-1 flex flex-col justify-around gap-20">
          <Image
            src="/images/blue.png"
            width={370}
            height={301}
            alt="logo"
            priority={true}
            className="justify-self-center"
          />
      
        </div>
      </div>
    
    </div>
  );
}

export default BenefitsDesktop