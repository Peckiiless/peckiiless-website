"use client";
import { useEffect } from "react";
import { MainPage } from "./components/MainPage";
import HealthcareList from "./components/HealthcareList";
import Navbar from "./components/Navbar";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  return (
    <main>
      <MainPage />
      <Navbar />
      <HealthcareList />
    </main>
  );
}
