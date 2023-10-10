import Benefits from "./Benefits";
import Monitor from "./Monitor";
import ProductInfoBanner from "./ProductInfoBanner";
import ProductPackage from "./ProductPackage";
import Testing from "./Testing";

const ProductInfoPage = () => {
  return (
    <div>
      <ProductInfoBanner /> 
      <ProductPackage />
      <Benefits />
      <Monitor />
      <Testing />
    </div>
  );
};

export default ProductInfoPage;
