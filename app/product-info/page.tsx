import Benefits from "./Benefits";
import Monitor from "./Monitor";
import ProductInfoBanner from "./ProductInfoBanner";
import ProductPackage from "./ProductPackage";

const ProductInfoPage = () => {
  return (
    <div>
      <ProductInfoBanner /> 
      <ProductPackage />
      <Benefits />
      <Monitor />
    </div>
  );
};

export default ProductInfoPage;
