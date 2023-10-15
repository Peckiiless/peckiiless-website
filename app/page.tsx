"use client";
import { useEffect } from "react";
import { MainPage } from "./components/MainPage";
import HealthcareList from "./components/HealthcareList";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import HomeLogo from "./components/HomeLogo";

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
