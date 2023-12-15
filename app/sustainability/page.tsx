import Benefits from "./Benefits";
import Navbar from "../components/Navbar";
import SustainabilityBanner from "./SustainabilityBanner";
import Footer from "../components/Footer";

const SustainabilityPage = () => {
  return (
    <div>
      <Navbar navColor="#19416C"/>
      <SustainabilityBanner />
      <Benefits />
      <Footer />
    </div>
  );
};

export default SustainabilityPage;
