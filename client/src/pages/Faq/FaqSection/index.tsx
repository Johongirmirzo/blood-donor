import React from "react";
import FaqList from "./FaqList";
import {
  FaqSectionBox,
  FaqSectionContainer,
  FaqListGrid,
} from "./index.styled";
import { FaqSectionProps } from "./index.types";

const FaqSection = ({ faqInfo }: FaqSectionProps) => {
  return (
    <FaqSectionBox>
      <FaqSectionContainer>
        <header>
          <h2>{faqInfo.title}</h2>
          <p>{faqInfo.description}</p>
        </header>
        <FaqListGrid>
          <FaqList faqs={faqInfo.faqList} />
        </FaqListGrid>
      </FaqSectionContainer>
    </FaqSectionBox>
  );
};

export default FaqSection;
