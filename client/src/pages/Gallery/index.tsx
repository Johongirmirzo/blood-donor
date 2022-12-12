import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import GalleryCampaign from "./GalleryCampaign";
import HeroSection from "../../components/HeroSection";
import SlideToTopCircle from "../../components/SlideToTopCircle";

const GalleryPage = () => {
  const galleryPage = useSelector((state: RootState) => state.galleryPage);
  return (
    <>
      <HeroSection
        routeTo="/"
        pageName="GALLERY"
        heroImage={galleryPage.heroImage}
      />
      <GalleryCampaign
        gallery={galleryPage.gallery}
        displayImageAmount={galleryPage.gallery.images.length}
      />
      <SlideToTopCircle />
    </>
  );
};

export default GalleryPage;
