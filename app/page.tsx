import Banner from "./components/Banner";
import { Collaboration } from "./components/Collaboration";
import HealthcareBanner from "./components/HealthcareBanner";
import HealthcareList from "./components/HealthcareList";

export default function Home() {
  return (
    <main>
      <div className="">
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
