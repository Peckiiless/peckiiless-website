import Footer from "../components/Footer";
import HeroBanner from "./HeroBanner";
import HomeLogo from "./HomeLogo";
import HomeLogoMobile from "./HomeLogoMobile";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      {/* <Navbar navColor="#19416C" /> */}
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
