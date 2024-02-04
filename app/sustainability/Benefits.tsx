import BenefitsDesktop from "./BenefitsDesktop";
import BenefitsMobile from "./BenefitsMobile";
import BenefitsSensorMobile from "./BenefitsSensorMobile";
import BenefitsSensorDesktop from "./BenefitsSensorDesktop";
import { Text2rem, Text1875rem } from "../components/Text";


const Benefits = ({ view }: { view: string }) => {
  return (
    <div id="first-section" className="p-[2%]">
      <div className="text-center">
        <div className=" font-medium text-primary-800 py-6 max-w-[75rem] mx-auto px-2">
          <Text2rem>
            At Peckiiless, sustainability is the powerful gear that propels our
            technology towards a brighter future.
          </Text2rem>
        </div>
        <div className=" py-6 max-w-[80rem] mx-auto px-2">
          <Text1875rem>
            Sustainability is the beating heart of our innovation and
            technology. We hold a deep love for our environment, a genuine
            concern for health and happiness, a profound commitment to
            sustainable industry, and an unwavering dedication to building a
            brighter world future for all. To learn more about how our gas
            sensor products contribute to Sustainable Development Goals (SDGs)
            in healthcare or industrial applications. Please <span className="font-medium">click on the
            &apos;Breathelizer&apos;/ &apos;Gas sensor&apos; </span> button above associated with each area
            to learn more.
          </Text1875rem>
        </div>
      </div>
      <div className={`${view === "" && "hidden"}`}>
        <div className="hidden md:block">
          {view === "breathalyzer" ? (
            <BenefitsDesktop />
          ) : (
            <BenefitsSensorDesktop />
          )}
        </div>
        <div className="md:hidden">
          {view === "breathalyzer" ? (
            <BenefitsMobile />
          ) : (
            <BenefitsSensorMobile />
          )}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
