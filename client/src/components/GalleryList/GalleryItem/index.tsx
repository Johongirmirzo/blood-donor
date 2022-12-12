import React from "react";
import { GalleryItemImage } from "./index.styled";
import { GalleryItemProps } from "./index.types";

const GalleryItem = ({ image }: GalleryItemProps) => {
  return <GalleryItemImage src={image.image} alt="blood campaign image" />;
};

export default GalleryItem;
