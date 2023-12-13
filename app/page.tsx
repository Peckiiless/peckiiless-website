import { MainPage } from "./components/MainPage";
import HeroBanner from "./components/HeroBanner";
import HomeLogo from "./components/HomeLogo";
import HomeLogoMobile from "./components/HomeLogoMobile";
import Navbar from "./components/Navbar";
import PreLoader from "./components/PreLoader";

export default function Home() {
  return (
    <main>
      <PreLoader />
      <MainPage />
      <div id="section1">
        <Navbar />
        <HeroBanner />
      </div>

      <div className="hidden md:block">
        <HomeLogo />
      </div>
      <div className="md:hidden">
        <HomeLogoMobile />
      </div>
    </main>
  );
}
