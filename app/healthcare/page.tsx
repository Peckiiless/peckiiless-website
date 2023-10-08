import Image from "next/image";
import HealthcareBanner from "./HealthcareBanner";
import Pregnancy from "./Pregnancy";
import ProductBanner from "./ProductBanner";

const HealthcarePage = () => {
  return (
    <div className="">
      <HealthcareBanner />
      <Pregnancy />
      <ProductBanner />
    </div>
  );
};

export default HealthcarePage;
