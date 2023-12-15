import { MainPage } from "./components/MainPage";
import PreLoader from "./components/PreLoader";

export default function SplashPage() {
  return (
    <main>
      <PreLoader />
      <MainPage />
    </main>
  );
}
