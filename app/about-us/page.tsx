import Banner from "./components/AboutBanner";
import AboutCompanyFamily from "./components/AboutCompanyFamily";
import Vision from "./components/AboutVision";
import CompanyFamilyOthers from "./components/CompanyFamilyOthers";
import Partners from "./components/Partners";
import Supports from "./components/Supports";
import Navbar from "../components/Navbar";
import Profile from "./components/Profile";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Profile />
      <Vision />
      <AboutCompanyFamily />
      <CompanyFamilyOthers />
      <Partners />
      <Supports />
      <Footer />
    </div>
  );
}
