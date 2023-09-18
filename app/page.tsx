import Banner from "./components/Banner";
import HealthcareBanner from "./components/HealthcareBanner";
import HealthcareList from "./components/HealthcareList";

export default function Home() {
  return (
    <main>
      <header className="px-16 mx-auto"><Banner /></header>      
      <HealthcareBanner />
      <HealthcareList />
    </main>
  );
}
