import Benefits from "./Benefits";
import Navbar from "../components/Navbar";
import IndustryBanner from "./IndustryBanner";
import Footer from "../components/Footer";
import SensorBenefits from "./SensorBenefits";
import Hydrogen from "./Hydrogen";

const IndustryPage = () => {
  return (
    <div>
      <Navbar />
      <IndustryBanner />
      <Benefits />
      <SensorBenefits />
      <Hydrogen />
      <Footer />
    </div>
  );
};

export default IndustryPage;
