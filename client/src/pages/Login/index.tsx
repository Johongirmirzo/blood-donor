import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import LoginForm from "../../components/LoginForm";
import HeroSection from "../../components/HeroSection";
import SlideToTopCircle from "../../components/SlideToTopCircle";
import { LoginSection } from "./index.styled";

const Login = () => {
  const heroImage = useSelector(
    (state: RootState) => state.contactPage.heroImage
  );
  return (
    <>
      <HeroSection routeTo="/" pageName="LOGIN" heroImage={heroImage} />
      <LoginSection>
        <div>
          <header>
            <h2>LOGIN</h2>
            <p>
              Login to access your profile and see people who requested the
              blood from you
            </p>
          </header>
          <LoginForm />
        </div>
      </LoginSection>
      <SlideToTopCircle />
    </>
  );
};

export default Login;
