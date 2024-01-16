import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import HomeLogo from "../components/HomeLogo";
import HomeLogoMobile from "../components/HomeLogoMobile";
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
