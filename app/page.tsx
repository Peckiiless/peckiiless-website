import { MainPage } from "./home/MainPage";
import Home from "./home/Home";
import Link from "next/link";
import Logo from "./components/Logo";

export default function SplashPage() {
  return (
    <main>
      <div className="flex justify-between items-center w-[92%] h-[3rem] sm:h-[4.6875rem] mx-auto text-[1rem] lg:text-[1.25rem]">
        <h1 className="grid place-content-center mb-2 md:mb-0 z-10">
          <Link
            href="/"
            className=" no-underline hover:text-white/90 flex items-center gap-1"
          >
            <Logo fillLogo="#19416C" fillText="#19416C" />
          </Link>
        </h1>
      </div>

      <MainPage />
      <Home />
    </main>
  );
}
