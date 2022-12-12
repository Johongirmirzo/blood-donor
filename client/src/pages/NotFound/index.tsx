import React from "react";
import { Link } from "react-router-dom";
import SlideToTopCircle from "../../components/SlideToTopCircle";
import {
  NotFoundSection,
  NotFoundHeader,
  NotFoundTitle,
  NotFoundSecondaryTitle,
} from "./index.styled";

const NotFound = () => {
  return (
    <NotFoundSection>
      <NotFoundHeader>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSecondaryTitle>
          Page you're looking for does not exist please go back to{" "}
          <Link to="/">HOME PAGE</Link>
        </NotFoundSecondaryTitle>
      </NotFoundHeader>
      <SlideToTopCircle />
    </NotFoundSection>
  );
};

export default NotFound;
