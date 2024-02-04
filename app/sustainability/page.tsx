'use client'

import { useState } from "react";

import Benefits from "./Benefits";
import Navbar from "../components/Navbar";
import SustainabilityBanner from "./SustainabilityBanner";
import Footer from "../components/Footer";

const SustainabilityPage = () => {
  const [view, setView] = useState("");
  return (
    <div>
      <Navbar navColor="#19416C"/>
      <SustainabilityBanner setView={setView} view={view}/>
      <Benefits view={view}/>
      <Footer />
    </div>
  );
};

export default SustainabilityPage;
