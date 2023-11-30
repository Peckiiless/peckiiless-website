import { MainPage } from "./components/MainPage";
import HeroBanner from "./components/HeroBanner";
import HomeLogo from "./components/HomeLogo";
import Navbar from "./components/Navbar";
import PreLoader from "./components/PreLoader";

export default function Home() {
  
  return (
    <main>
      <PreLoader />
      <MainPage />
      <Navbar />
      <HeroBanner />
      <HomeLogo />
    </main>
  );
}
