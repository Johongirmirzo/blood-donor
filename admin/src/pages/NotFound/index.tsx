import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/dashboard">HOME PAGE</Link>
        </NotFoundSecondaryTitle>
      </NotFoundHeader>
    </NotFoundSection>
  );
};

export default NotFound;
