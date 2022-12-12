import React from "react";
import GalleryItem from "./GalleryItem";
import { GalleryListProps } from "./index.types";

const GalleryList = ({ images, displayImageAmount }: GalleryListProps) => {
  return (
    <>
      {images.slice(0, displayImageAmount).map((image) => (
        <GalleryItem key={image._id} image={image} />
      ))}
    </>
  );
};

export default GalleryList;
