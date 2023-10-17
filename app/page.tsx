"use client";
import { useEffect } from "react";
import { MainPage } from "./components/MainPage";
import HealthcareList from "./components/HealthcareList";
import HeroBanner from "./components/HeroBanner";
import HomeLogo from "./components/HomeLogo";
import Navbar from "./navbar/Navbar";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main>
      <MainPage />
      <Navbar />
      <HeroBanner />
      <HomeLogo />
      {/* <HealthcareList /> */}
    </main>
  );
}
