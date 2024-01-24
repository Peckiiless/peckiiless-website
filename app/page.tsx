import { MainPage } from "./home/MainPage";
import Home from "./home/Home";
import Navbar from "./components/Navbar";

export default function SplashPage() {
  return (
    <main>
      <Navbar navColor="#19416C" />
      <MainPage />
      <Home />
    </main>
  );
}
