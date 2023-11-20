import Benefits from "./Benefits";
import Navbar from "../components/Navbar";
import SustainabilityBanner from "./SustainabilityBanner";

const SustainabilityPage = () => {
  return (
    <div>
      <Navbar navColor="nav"/>
      <SustainabilityBanner />
      <Benefits />
    </div>
  );
};

export default SustainabilityPage;
