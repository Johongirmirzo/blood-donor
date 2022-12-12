import React from "react";
import VolunteerList from "../../../components/VolunteerList";
import {
  VolunteerSection,
  VolunteerContainer,
  VolunteerHeader,
  VolunteerTitle,
  VolunteerDescription,
  VolunteerListBox,
} from "./index.styled";
import { VolunteerProps } from "./index.types";

const Volunteer = ({ volunteers }: VolunteerProps) => {
  return (
    <VolunteerSection bgImage={volunteers.volunteerHeroImage}>
      <VolunteerContainer>
        <VolunteerHeader>
          <VolunteerDescription>{volunteers.description}</VolunteerDescription>
          <VolunteerTitle>{volunteers.title}</VolunteerTitle>
        </VolunteerHeader>
        <VolunteerListBox>
          <VolunteerList volunteers={volunteers.volunteers} />
        </VolunteerListBox>
      </VolunteerContainer>
    </VolunteerSection>
  );
};

export default Volunteer;
