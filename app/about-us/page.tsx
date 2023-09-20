import Banner from "./components/AboutBanner";
import AboutCompanyFamily from "./components/AboutCompanyFamily";
import Vision from "./components/AboutVision";
import CompanyFamilyOthers from "./components/CompanyFamilyOthers";
import Partners from "./components/Partners";
import Supports from "./components/Supports";

export default function AboutUsPage() {
  return (
    <div>
      <Banner />
      <Vision />
      <AboutCompanyFamily />
      <CompanyFamilyOthers />
      <Partners />
      <Supports />
    </div>
  );
}
