import React from "react";
import { Link } from "react-router-dom";
import GalleryList from "../../../components/GalleryList";
import {
  GalleryCampaignSection,
  GalleryCampaignContainer,
  GalleryCampaignHeader,
  GalleryCampaignTitle,
  GalleryCampaignDescription,
  GalleryCampaignBox,
  GalleryCampaignBtn,
} from "./index.styled";
import { GalleryCampaignProps } from "./index.types";

const GalleryCampaign = ({
  gallery,
  displayImageAmount,
}: GalleryCampaignProps) => {
  return (
    <GalleryCampaignSection>
      <GalleryCampaignContainer>
        <GalleryCampaignHeader>
          <GalleryCampaignTitle>{gallery.title}</GalleryCampaignTitle>
          <GalleryCampaignDescription>
            {gallery.description}
          </GalleryCampaignDescription>
        </GalleryCampaignHeader>
        <GalleryCampaignBox>
          <GalleryList
            images={gallery.images}
            displayImageAmount={displayImageAmount}
          />
        </GalleryCampaignBox>
        {displayImageAmount < gallery.images.length && (
          <Link to="/gallery">
            <GalleryCampaignBtn>See More</GalleryCampaignBtn>
          </Link>
        )}
      </GalleryCampaignContainer>
    </GalleryCampaignSection>
  );
};

export default GalleryCampaign;
