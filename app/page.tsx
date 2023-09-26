"use client";
import { useEffect } from "react";
import Banner from "./components/Banner";
import { Collaboration } from "./components/Collaboration";
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
