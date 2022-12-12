import React from "react";
import { Link } from "react-router-dom";
import {
  InitiativeSection,
  InitiativeContainer,
  InitiativeHeader,
  InitiativeTitle,
  InitiativeDescription,
  InitiativeBtn,
} from "./index.styled";
import { InitiativeProps } from "./index.types";

const Initiative = ({ initiative }: InitiativeProps) => {
  return (
    <InitiativeContainer>
      <InitiativeSection>
        <InitiativeHeader>
          <InitiativeTitle>{initiative.title}</InitiativeTitle>
          <InitiativeDescription>
            {initiative.description}
          </InitiativeDescription>
        </InitiativeHeader>
        <Link to="/register">
          <InitiativeBtn>JOIN WITH US</InitiativeBtn>
        </Link>
      </InitiativeSection>
    </InitiativeContainer>
  );
};

export default Initiative;
