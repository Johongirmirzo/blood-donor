import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import HeroSection from "../../components/HeroSection";
import RegisterForm from "../../components/RegisterForm";
import SlideToTopCircle from "../../components/SlideToTopCircle";
import { RegisterSection } from "./index.styled";

const Register = () => {
  const heroImage = useSelector(
    (state: RootState) => state.aboutUsPage.heroImage
  );
  return (
    <>
      <HeroSection routeTo="/" pageName="REGISTER" heroImage={heroImage} />
      <RegisterSection>
        <div>
          <header>
            <h2>Create An Account to Become Donor</h2>
            <p>Become a donor and save lives!</p>
          </header>

          <RegisterForm />
        </div>
      </RegisterSection>
      <SlideToTopCircle />
    </>
  );
};

export default Register;
