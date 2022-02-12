import React from "react";
import RegulationInfo from "../../molecules/RegulationInfo";
import AppDownload from "../../organisms/appDownload";
import AssetSection from "../../organisms/assetSection";
import BuildWealth from "../../organisms/buildWealth";
import JoinCommunity from "../../organisms/community";
import Footer from "../../organisms/footer";
import Header from "../../organisms/header";
import Hero from "../../organisms/hero";
import InvestmentSection from "../../organisms/investmentSection";
import Reviews from "../../organisms/reviews";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <InvestmentSection />
      <AssetSection />
      <BuildWealth />
      <RegulationInfo />
      <Reviews />
      <JoinCommunity />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Home;
