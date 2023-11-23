import BenefitsDesktop from "./BenefitsDesktop";
import BenefitsMobile from "./BenefitsMobile";

const Benefits = () => {
  return (
    <div className="">
      <p className="text-center font-medium xs:text-[2rem] text-[1.375rem] text-primary-800 leading-[1.875rem] xs:leading-[2.625rem] py-6 max-w-[75rem] mx-auto px-2">
        At Peckiiless, sustainability is the powerful gear that propels our
        technology towards a brighter future.
      </p>
      <p className="text-center font-medium xs:text-[1.875rem] text-[1.375rem] leading-[1.875rem] xs:leading-[2.625rem] py-6 max-w-[75rem] mx-auto px-2">
        Sustainability is the beating heart of our innovation and technology. We
        hold a deep love for our environment, a genuine concern for health and
        happiness, a profound commitment to sustainable industry, and an
        unwavering dedication to building a brighter world future for all.
      </p>
      <div className="hidden md:block">
        <BenefitsDesktop />
      </div>
      <div className="md:hidden">
        <BenefitsMobile />
      </div>
    </div>
  );
};

export default Benefits;
