import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./Pages/Hero";
import Portfolio from "./Pages/Portfolio";
import SubscriptionPlans from "./Pages/Plans";
import FAQs from "./Pages/FAQs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className=" bg-zinc-900 h-screen w-full flex-col ">
        <Navbar />
        <Hero />
        <Portfolio />
        <SubscriptionPlans />
        <FAQs />
        <Footer />
      </div>
    </>
  );
}
