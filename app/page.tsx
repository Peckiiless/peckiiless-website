import Banner from "./components/Banner";
import { Collaboration } from "./components/Collaboration";
import HealthcareBanner from "./components/HealthcareBanner";
import HealthcareList from "./components/HealthcareList";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative z-10 w-full overflow-x-clip">
        <Collaboration />
      </div>
      <header className="px-16 mx-auto">
        <Banner />
      </header>
      <HealthcareBanner />
      <HealthcareList />
    </main>
  );
}
