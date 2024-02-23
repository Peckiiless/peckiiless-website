import Benefits from "./Benefits";
import Monitor from "./Monitor";
import ProductInfoBanner from "./ProductInfoBanner";
import ProductPackage from "./ProductPackage";
import Testing from "./Testing";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BreathalyzerPage = () => {
  return (
    <div>
      <Navbar navColor="#19416C"/>
      <ProductInfoBanner />
      <ProductPackage />
      <Benefits />
      <Monitor />
      <Testing />
      <Footer />
    </div>
  );
};

export default BreathalyzerPage;
