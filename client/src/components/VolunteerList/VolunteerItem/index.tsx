import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import {
  VolunteerCard,
  VolunteerImage,
  VolunteerBody,
  VolunteerTitle,
  VolunteerDescription,
  VolunteerFooter,
  VolunteerList,
  VolunteerListItem,
} from "./index.styled";
import { VolunteerItemProps } from "./index.types";

const VolunteerItem = ({ volunteer }: VolunteerItemProps) => {
  const getSocialMedia = (socialMediaName: string) => {
    if (socialMediaName.match(/facebook/i)) {
      return <ImFacebook />;
    } else if (socialMediaName.match(/instagram/i)) {
      return <RiInstagramFill />;
    } else if (socialMediaName.match(/linkedin/i)) {
      return <FaLinkedinIn />;
    } else if (socialMediaName.match(/google/i)) {
      return <FaGooglePlusG />;
    } else if (socialMediaName.match(/twitter/i)) {
      return <BsTwitter />;
    }
  };

  return (
    <VolunteerCard>
      <VolunteerImage
        src={volunteer.volunteerImage}
        alt={`Image of the volunteer named ${volunteer.volunteerName}`}
      />
      <VolunteerBody>
        <VolunteerTitle>{volunteer.volunteerName}</VolunteerTitle>
        <VolunteerDescription>{volunteer.volunteerTitle}</VolunteerDescription>
      </VolunteerBody>
      <VolunteerFooter>
        <VolunteerList>
          {volunteer.volunteerSocialMedia.map((socialMedia) => (
            <VolunteerListItem key={socialMedia._id}>
              <a
                href={socialMedia.socialMediaUrl}
                rel="noreferrer"
                target="_blank"
              >
                {getSocialMedia(socialMedia.socialMediaName)}
              </a>
            </VolunteerListItem>
          ))}
        </VolunteerList>
      </VolunteerFooter>
    </VolunteerCard>
  );
};

export default VolunteerItem;
