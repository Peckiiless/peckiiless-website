import HeroBanner from "../components/HeroBanner";
import HomeLogo from "../components/HomeLogo";
import HomeLogoMobile from "../components/HomeLogoMobile";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>    
        <Navbar />
        <HeroBanner />    
      <div className="hidden md:block">
        <HomeLogo />
      </div>
      <div className="md:hidden">
        <HomeLogoMobile />
      </div>
    </div>
  );
}
