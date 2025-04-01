import React from "react";
import Header from "./components/Header";
import VultVideo from "./components/VultVideo";
import Features from "./components/Features";
import NewHero from "./components/NewHero";
import HeroSecond from "./components/HeroSecond";
import HowItWorks from "./components/HowItWorks";
import WhyUsersLoveVultisig from "./components/WhyUsersLoveVultisig";
import VultisigIsForEveryone from "./components/VultisigForEveryone";
import Trustees from "./components/Trustees";
import AirDrop from "./components/AirDrop";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <section className="bg-[#02122b] bg-left-bottom font-montserrat py-[2%] md:px-[2%] px-[2%] text-[#d9d9d9]">
        <Header />
        <NewHero />
        <AirDrop />
        <HowItWorks />
        <Features />
        <HeroSecond />
        <Trustees />

        <WhyUsersLoveVultisig />
        <VultisigIsForEveryone />

        <BottomCTA />
        <Footer />
      </section>
    </>
  );
};

export default App;
