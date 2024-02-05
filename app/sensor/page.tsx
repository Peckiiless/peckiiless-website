import Benefits from "./Benefits";
import Navbar from "../components/Navbar";
import IndustryBanner from "./IndustryBanner";
import Footer from "../components/Footer";
import Industry from "./Industry";
import Hydrogen from "./Hydrogen";
import SensorBenefits from "./SensorBenefits";

const IndustryPage = () => {
  return (
    <div>
      <Navbar />
      <IndustryBanner />
      <Benefits />
      <Hydrogen />
      <Industry />
      <SensorBenefits />
      <Footer />
    </div>
  );
};

export default IndustryPage;
