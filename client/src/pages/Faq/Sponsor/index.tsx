import React from "react";
import SponsorList from "./SponsorList";
import {
  SponsorSection,
  SponsorContainer,
  SponsorListGrid,
} from "./index.styled";
import { SponsorProps } from "./index.types";

const Sponsor = ({ sponsor }: SponsorProps) => {
  return (
    <SponsorSection>
      <SponsorContainer>
        <header>
          <h2>{sponsor.title}</h2>
          <p>{sponsor.description}</p>
        </header>
        <SponsorListGrid>
          <SponsorList sponsors={sponsor.images} />
        </SponsorListGrid>
      </SponsorContainer>
    </SponsorSection>
  );
};

export default Sponsor;
