import React from "react";
import ContactUsForm from "../ContactUsForm";
import ContactUsMap from "../ContactUsMap";
import {
  ContactUsSectionBox,
  ContactUsContainer,
  ContactUsGrid,
} from "./index.styled";
import { ContactUsSectionProps } from "./index.types";

const ContactUsSection = ({ contactInfo }: ContactUsSectionProps) => {
  return (
    <ContactUsSectionBox>
      <ContactUsContainer>
        <header>
          <h2>Contact Us</h2>
          <p>Send your queries via the form</p>
        </header>
        <ContactUsGrid>
          <ContactUsForm />
          <ContactUsMap />
        </ContactUsGrid>
      </ContactUsContainer>
    </ContactUsSectionBox>
  );
};

export default ContactUsSection;
