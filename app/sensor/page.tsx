import Benefits from "./Benefits";
import Navbar from "../components/Navbar";
import IndustryBanner from "./IndustryBanner";
import Footer from "../components/Footer";

const IndustryPage = () => {
  return (
    <div>
      <Navbar />
      <IndustryBanner />
      <Benefits />
      <Footer />
    </div>
  );
};

export default IndustryPage;
