import Footer from "../components/Footer";
import HeroBanner from "./HeroBanner";
import HomeLogo from "./HomeLogo";
import HomeLogoMobile from "./HomeLogoMobile";
import Navbar from "../components/Navbar";
import HomeNavbar from "../components/HomeNavbar";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="hidden md:block">
        <HomeLogo />
      </div>
      <div className="md:hidden">
        <HomeLogoMobile />
      </div>
      <Footer />
    </div>
  );
}
