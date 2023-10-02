"use client";
import { useEffect } from "react";
import Banner from "./components/Banner";
import { MainPage } from "./components/MainPage";
import HealthcareBanner from "./components/HealthcareBanner";
import HealthcareList from "./components/HealthcareList";

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
        <Banner />
      <HealthcareBanner />
      <HealthcareList />
    </main>
  );
}
