import Benefits from "./Benefits";
import Monitor from "./Monitor";
import ProductInfoBanner from "./ProductInfoBanner";
import ProductPackage from "./ProductPackage";
import Testing from "./Testing";
import Navbar from "../components/Navbar";

const ProductInfoPage = () => {
  return (
    <div>
      <Navbar />
      <ProductInfoBanner />
      <ProductPackage />
      <Benefits />
      <Monitor />
      <Testing />
    </div>
  );
};

export default ProductInfoPage;
