import Image from "next/image";
import HealthcareBanner from "./HealthcareBanner";
import Pregnancy from "./Pregnancy";
import ProductBanner from "./ProductBanner";
import Navbar from "../components/Navbar";
import BlowingLady from "./BlowingLady";

const HealthcarePage = () => {
  return (
    <>
      <Navbar />
      <HealthcareBanner />
      <Pregnancy />
      <BlowingLady />
      <ProductBanner />
    </>
  );
};

export default HealthcarePage;
