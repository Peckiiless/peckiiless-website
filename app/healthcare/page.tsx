import Image from "next/image";
import HealthcareBanner from "./HealthcareBanner";
import Pregnancy from "./Pregnancy";
import ProductBanner from "./ProductBanner";
import Navbar from "../components/Navbar";

const HealthcarePage = () => {
  return (
    <>
      <Navbar />
      <HealthcareBanner />
      <Pregnancy />
      <ProductBanner />
    </>
  );
};

export default HealthcarePage;
