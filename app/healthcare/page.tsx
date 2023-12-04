import HealthcareBanner from "./HealthcareBanner";
import Pregnancy from "./Pregnancy";
import ProductBanner from "./ProductBanner";
import Navbar from "../components/Navbar";
import BlowingLady from "./BlowingLady";
import Reasons from "./Reasons";

const HealthcarePage = () => {
  return (
    <>
      <Navbar />
      <HealthcareBanner />
      <Pregnancy />
      <BlowingLady />
      <ProductBanner />
      <Reasons />
    </>
  );
};

export default HealthcarePage;
