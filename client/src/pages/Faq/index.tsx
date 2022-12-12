import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import FaqSection from "./FaqSection";
import Sponsor from "./Sponsor";
import HeroSection from "../../components/HeroSection";
import SlideToTopCircle from "../../components/SlideToTopCircle";

const FaqPage = () => {
  const faqPage = useSelector((state: RootState) => state.faqPage);
  return (
    <>
      <HeroSection routeTo="/" pageName="FAQ" heroImage={faqPage.heroImage} />
      <FaqSection faqInfo={faqPage.faq} />
      <Sponsor sponsor={faqPage.sponsor} />
      <SlideToTopCircle />
    </>
  );
};

export default FaqPage;
