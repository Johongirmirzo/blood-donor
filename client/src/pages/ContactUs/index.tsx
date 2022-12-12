import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import ContactUsSection from "./ContactUsSection";
import HeroSection from "../../components/HeroSection";
import SlideToTopCircle from "../../components/SlideToTopCircle";

const ContactUs = () => {
  const contactUsPage = useSelector((state: RootState) => state.contactPage);

  return (
    <>
      <HeroSection
        routeTo="/"
        pageName="CONTACT US"
        heroImage={contactUsPage.heroImage}
      />
      <ContactUsSection contactInfo={contactUsPage.contactInfo} />
      <SlideToTopCircle />
    </>
  );
};

export default ContactUs;
