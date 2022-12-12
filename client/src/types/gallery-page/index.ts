export interface IImageList {
    _id: string;
    image: string;
    imageCreationDate: string;
}

export interface IGallerySection {
    title: string;
    description: string;
}
export interface IGallery extends IGallerySection {
    images: IImageList[];
}

export interface IGalleryPage {
    heroImage: string;
    gallery: IGallery;

}